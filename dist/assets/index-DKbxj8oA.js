var Sh=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var wb=Sh((Cb,Vr)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="158",Eh=0,al=1,bh=2,Ld=1,Mh=2,On=3,oi=0,Bt=1,Fn=2,ri=0,cr=1,ol=2,cl=3,ll=4,Th=5,Si=100,wh=101,Ah=102,ul=103,dl=104,Rh=200,Ch=201,Lh=202,Ph=203,Wo=204,Xo=205,Ih=206,Dh=207,Uh=208,Nh=209,Oh=210,Bh=211,Fh=212,kh=213,zh=214,Hh=0,Vh=1,Gh=2,sa=3,Wh=4,Xh=5,qh=6,jh=7,Mc=0,$h=1,Zh=2,si=0,Yh=1,Kh=2,Jh=3,Qh=4,ep=5,Pd=300,dr=301,fr=302,qo=303,jo=304,Da=306,$o=1e3,dn=1001,Zo=1002,It=1003,fl=1004,Za=1005,Kt=1006,tp=1007,Xr=1008,ai=1009,np=1010,ip=1011,Tc=1012,Id=1013,ni=1014,ii=1015,qr=1016,Dd=1017,Ud=1018,Ti=1020,rp=1021,fn=1023,sp=1024,ap=1025,wi=1026,hr=1027,op=1028,Nd=1029,cp=1030,Od=1031,Bd=1033,Ya=33776,Ka=33777,Ja=33778,Qa=33779,hl=35840,pl=35841,ml=35842,gl=35843,lp=36196,_l=37492,vl=37496,yl=37808,xl=37809,Sl=37810,El=37811,bl=37812,Ml=37813,Tl=37814,wl=37815,Al=37816,Rl=37817,Cl=37818,Ll=37819,Pl=37820,Il=37821,eo=36492,Dl=36494,Ul=36495,up=36283,Nl=36284,Ol=36285,Bl=36286,Fd=3e3,Ai=3001,dp=3200,fp=3201,kd=0,hp=1,Jt="",Mt="srgb",Gn="srgb-linear",wc="display-p3",Ua="display-p3-linear",aa="linear",st="srgb",oa="rec709",ca="p3",ki=7680,Fl=519,pp=512,mp=513,gp=514,_p=515,vp=516,yp=517,xp=518,Sp=519,kl=35044,zl="300 es",Yo=1035,zn=2e3,la=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Ko=180/Math.PI;function ps(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Ep(n,e){return(n%e+e)%e}function no(n,e,t){return(1-t)*n+t*e}function Hl(n){return(n&n-1)===0&&n!==0}function Jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],g=i[5],_=i[8],m=r[0],h=r[3],f=r[6],E=r[1],v=r[4],T=r[7],R=r[2],L=r[5],C=r[8];return s[0]=a*m+o*E+c*R,s[3]=a*h+o*v+c*L,s[6]=a*f+o*T+c*C,s[1]=l*m+u*E+d*R,s[4]=l*h+u*v+d*L,s[7]=l*f+u*T+d*C,s[2]=p*m+g*E+_*R,s[5]=p*h+g*v+_*L,s[8]=p*f+g*T+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,p=o*c-u*s,g=l*s-a*c,_=t*d+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(r*l-u*i)*m,e[2]=(o*i-r*a)*m,e[3]=p*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-o*t)*m,e[6]=g*m,e[7]=(i*c-l*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Xe;function zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bp(){const n=ua("canvas");return n.style.display="block",n}const Vl={};function Gr(n){n in Vl||(Vl[n]=!0,console.warn(n))}const Gl=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[Gn]:{transfer:aa,primaries:oa,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:st,primaries:oa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ua]:{transfer:aa,primaries:ca,toReference:n=>n.applyMatrix3(Wl),fromReference:n=>n.applyMatrix3(Gl)},[wc]:{transfer:st,primaries:ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wl),fromReference:n=>n.applyMatrix3(Gl).convertLinearToSRGB()}},Mp=new Set([Gn,Ua]),tt={enabled:!0,_workingColorSpace:Gn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ws[e].toReference,r=ws[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ws[n].primaries},getTransfer:function(n){return n===Jt?aa:ws[n].transfer}};function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class Hd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=ua("canvas")),zi.width=e.width,zi.height=e.height;const i=zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tp=0;class Vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(so(r[a].image)):s.push(so(r[a]))}else s=so(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;class Xt extends br{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=dn,r=dn,s=Kt,a=Xr,o=fn,c=ai,l=Xt.DEFAULT_ANISOTROPY,u=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ps(),this.name="",this.source=new Vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ai?Mt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Ai:Fd}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?Mt:Jt}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Pd;Xt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],g=c[5],_=c[9],m=c[2],h=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-m)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+m)<.1&&Math.abs(_+h)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,T=(g+1)/2,R=(f+1)/2,L=(u+p)/4,C=(d+m)/4,P=(_+h)/4;return v>T&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=L/i,s=C/i):T>R?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=L/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=P/s),this.set(i,r,s,t),this}let E=Math.sqrt((h-_)*(h-_)+(d-m)*(d-m)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(h-_)/E,this.y=(d-m)/E,this.z=(p-u)/E,this.w=Math.acos((l+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ai?Mt:Jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Ap{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gd extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rp extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],m=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=g,e[t+2]=_,e[t+3]=m;return}if(d!==m||c!==p||l!==g||u!==_){let h=1-o;const f=c*p+l*g+u*_+d*m,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),L=Math.atan2(R,f*E);h=Math.sin(h*L)/R,o=Math.sin(o*L)/R}const T=o*E;if(c=c*h+p*T,l=l*h+g*T,u=u*h+_*T,d=d*h+m*T,h===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[t]=o*_+u*d+c*g-l*p,e[t+1]=c*_+u*p+l*d-o*g,e[t+2]=l*_+u*g+o*p-c*d,e[t+3]=u*_-o*d-c*p-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),p=c(i/2),g=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=p*u*d+l*g*_,this._y=l*g*d-p*u*_,this._z=l*u*_+p*g*d,this._w=l*u*d-p*g*_;break;case"YXZ":this._x=p*u*d+l*g*_,this._y=l*g*d-p*u*_,this._z=l*u*_-p*g*d,this._w=l*u*d+p*g*_;break;case"ZXY":this._x=p*u*d-l*g*_,this._y=l*g*d+p*u*_,this._z=l*u*_+p*g*d,this._w=l*u*d-p*g*_;break;case"ZYX":this._x=p*u*d-l*g*_,this._y=l*g*d+p*u*_,this._z=l*u*_-p*g*d,this._w=l*u*d+p*g*_;break;case"YZX":this._x=p*u*d+l*g*_,this._y=l*g*d+p*u*_,this._z=l*u*_-p*g*d,this._w=l*u*d-p*g*_;break;case"XZY":this._x=p*u*d-l*g*_,this._y=l*g*d-p*u*_,this._z=l*u*_+p*g*d,this._w=l*u*d+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+o+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new F,Xl=new ms;class gs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Rs.subVectors(this.max,Cr),Hi.subVectors(e.a,Cr),Vi.subVectors(e.b,Cr),Gi.subVectors(e.c,Cr),Xn.subVectors(Vi,Hi),qn.subVectors(Gi,Vi),pi.subVectors(Hi,Gi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!oo(t,Hi,Vi,Gi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Hi,Vi,Gi,Rs))?!1:(Cs.crossVectors(Xn,qn),t=[Cs.x,Cs.y,Cs.z],oo(t,Hi,Vi,Gi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new F,new F,new F,new F,new F,new F,new F,new F],sn=new F,As=new gs,Hi=new F,Vi=new F,Gi=new F,Xn=new F,qn=new F,pi=new F,Cr=new F,Rs=new F,Cs=new F,mi=new F;function oo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){mi.fromArray(n,s);const o=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Cp=new gs,Lr=new F,co=new F;class Ac{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(co)),this.expandByPoint(Lr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new F,lo=new F,Ls=new F,jn=new F,uo=new F,Ps=new F,fo=new F;class Wd{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lo.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=jn.dot(this.direction),c=-jn.dot(Ls),l=jn.lengthSq(),u=Math.abs(1-a*a);let d,p,g,_;if(u>0)if(d=a*c-o,p=a*o-c,_=s*u,d>=0)if(p>=-_)if(p<=_){const m=1/u;d*=m,p*=m,g=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lo).addScaledVector(Ls,p),g}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){uo.subVectors(t,e),Ps.subVectors(i,e),fo.crossVectors(uo,Ps);let a=this.direction.dot(fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const c=o*this.direction.dot(Ps.crossVectors(jn,Ps));if(c<0)return null;const l=o*this.direction.dot(uo.cross(jn));if(l<0||c+l>a)return null;const u=-o*jn.dot(fo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,c,l,u,d,p,g,_,m,h){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,p,g,_,m,h)}set(e,t,i,r,s,a,o,c,l,u,d,p,g,_,m,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=p,f[3]=g,f[7]=_,f[11]=m,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*u,g=a*d,_=o*u,m=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=g+_*l,t[5]=p-m*l,t[9]=-o*c,t[2]=m-p*l,t[6]=_+g*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,g=c*d,_=l*u,m=l*d;t[0]=p+m*o,t[4]=_*o-g,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=g*o-_,t[6]=m+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,g=c*d,_=l*u,m=l*d;t[0]=p-m*o,t[4]=-a*d,t[8]=_+g*o,t[1]=g+_*o,t[5]=a*u,t[9]=m-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,g=a*d,_=o*u,m=o*d;t[0]=c*u,t[4]=_*l-g,t[8]=p*l+m,t[1]=c*d,t[5]=m*l+p,t[9]=g*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,g=a*l,_=o*c,m=o*l;t[0]=c*u,t[4]=m-p*d,t[8]=_*d+g,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=g*d+_,t[10]=p-m*d}else if(e.order==="XZY"){const p=a*c,g=a*l,_=o*c,m=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+m,t[5]=a*u,t[9]=g*d-_,t[2]=_*d-g,t[6]=o*u,t[10]=m*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Pp)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),$n.crossVectors(i,Vt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),$n.crossVectors(i,Vt)),$n.normalize(),Is.crossVectors(Vt,$n),r[0]=$n.x,r[4]=Is.x,r[8]=Vt.x,r[1]=$n.y,r[5]=Is.y,r[9]=Vt.y,r[2]=$n.z,r[6]=Is.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],g=i[13],_=i[2],m=i[6],h=i[10],f=i[14],E=i[3],v=i[7],T=i[11],R=i[15],L=r[0],C=r[4],P=r[8],S=r[12],b=r[1],O=r[5],z=r[9],Z=r[13],U=r[2],y=r[6],w=r[10],I=r[14],q=r[3],V=r[7],H=r[11],N=r[15];return s[0]=a*L+o*b+c*U+l*q,s[4]=a*C+o*O+c*y+l*V,s[8]=a*P+o*z+c*w+l*H,s[12]=a*S+o*Z+c*I+l*N,s[1]=u*L+d*b+p*U+g*q,s[5]=u*C+d*O+p*y+g*V,s[9]=u*P+d*z+p*w+g*H,s[13]=u*S+d*Z+p*I+g*N,s[2]=_*L+m*b+h*U+f*q,s[6]=_*C+m*O+h*y+f*V,s[10]=_*P+m*z+h*w+f*H,s[14]=_*S+m*Z+h*I+f*N,s[3]=E*L+v*b+T*U+R*q,s[7]=E*C+v*O+T*y+R*V,s[11]=E*P+v*z+T*w+R*H,s[15]=E*S+v*Z+T*I+R*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],g=e[14],_=e[3],m=e[7],h=e[11],f=e[15];return _*(+s*c*d-r*l*d-s*o*p+i*l*p+r*o*g-i*c*g)+m*(+t*c*g-t*l*p+s*a*p-r*a*g+r*l*u-s*c*u)+h*(+t*l*d-t*o*g-s*a*d+i*a*g+s*o*u-i*l*u)+f*(-r*o*u-t*c*d+t*o*p+r*a*d-i*a*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],g=e[11],_=e[12],m=e[13],h=e[14],f=e[15],E=d*h*l-m*p*l+m*c*g-o*h*g-d*c*f+o*p*f,v=_*p*l-u*h*l-_*c*g+a*h*g+u*c*f-a*p*f,T=u*m*l-_*d*l+_*o*g-a*m*g-u*o*f+a*d*f,R=_*d*c-u*m*c-_*o*p+a*m*p+u*o*h-a*d*h,L=t*E+i*v+r*T+s*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=E*C,e[1]=(m*p*s-d*h*s-m*r*g+i*h*g+d*r*f-i*p*f)*C,e[2]=(o*h*s-m*c*s+m*r*l-i*h*l-o*r*f+i*c*f)*C,e[3]=(d*c*s-o*p*s-d*r*l+i*p*l+o*r*g-i*c*g)*C,e[4]=v*C,e[5]=(u*h*s-_*p*s+_*r*g-t*h*g-u*r*f+t*p*f)*C,e[6]=(_*c*s-a*h*s-_*r*l+t*h*l+a*r*f-t*c*f)*C,e[7]=(a*p*s-u*c*s+u*r*l-t*p*l-a*r*g+t*c*g)*C,e[8]=T*C,e[9]=(_*d*s-u*m*s-_*i*g+t*m*g+u*i*f-t*d*f)*C,e[10]=(a*m*s-_*o*s+_*i*l-t*m*l-a*i*f+t*o*f)*C,e[11]=(u*o*s-a*d*s-u*i*l+t*d*l+a*i*g-t*o*g)*C,e[12]=R*C,e[13]=(u*m*r-_*d*r+_*i*p-t*m*p-u*i*h+t*d*h)*C,e[14]=(_*o*r-a*m*r-_*i*c+t*m*c+a*i*h-t*o*h)*C,e[15]=(a*d*r-u*o*r+u*i*c-t*d*c-a*i*p+t*o*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,p=s*l,g=s*u,_=s*d,m=a*u,h=a*d,f=o*d,E=c*l,v=c*u,T=c*d,R=i.x,L=i.y,C=i.z;return r[0]=(1-(m+f))*R,r[1]=(g+T)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(g-T)*L,r[5]=(1-(p+f))*L,r[6]=(h+E)*L,r[7]=0,r[8]=(_+v)*C,r[9]=(h-E)*C,r[10]=(1-(p+m))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const a=Wi.set(r[4],r[5],r[6]).length(),o=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const l=1/s,u=1/a,d=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=zn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(o===zn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===la)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zn){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(a-s),p=(t+e)*l,g=(i+r)*u;let _,m;if(o===zn)_=(a+s)*d,m=-2*d;else if(o===la)_=s*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=m,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wi=new F,an=new mt,Lp=new F(0,0,0),Pp=new F(1,1,1),$n=new F,Is=new F,Vt=new F,ql=new mt,jl=new ms;class Na{constructor(e=0,t=0,i=0,r=Na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Na.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ip=0;const $l=new F,Xi=new ms,Ln=new mt,Ds=new F,Pr=new F,Dp=new F,Up=new ms,Zl=new F(1,0,0),Yl=new F(0,1,0),Kl=new F(0,0,1),Np={type:"added"},Op={type:"removed"};class Ft extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new F,t=new Na,i=new ms,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ds.copy(e):Ds.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Pr,Ds,this.up):Ln.lookAt(Ds,Pr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Np)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Op)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new F(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new F,Pn=new F,ho=new F,In=new F,qi=new F,ji=new F,Jl=new F,po=new F,mo=new F,go=new F;let Us=!1;class ln{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Pn.subVectors(i,t),ho.subVectors(e,t);const a=on.dot(on),o=on.dot(Pn),c=on.dot(ho),l=Pn.dot(Pn),u=Pn.dot(ho),d=a*l-o*o;if(d===0)return s.set(-2,-1,-1);const p=1/d,g=(l*c-o*u)*p,_=(a*u-o*c)*p;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,i,r,s,a,o,c){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,In),c.setScalar(0),c.addScaledVector(s,In.x),c.addScaledVector(a,In.y),c.addScaledVector(o,In.z),c}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Pn.subVectors(e,t),on.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),on.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,i),ji.subVectors(s,i),po.subVectors(e,i);const c=qi.dot(po),l=ji.dot(po);if(c<=0&&l<=0)return t.copy(i);mo.subVectors(e,r);const u=qi.dot(mo),d=ji.dot(mo);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(qi,a);go.subVectors(e,s);const g=qi.dot(go),_=ji.dot(go);if(_>=0&&g<=_)return t.copy(s);const m=g*l-c*_;if(m<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(ji,o);const h=u*_-g*d;if(h<=0&&d-u>=0&&g-_>=0)return Jl.subVectors(s,r),o=(d-u)/(d-u+(g-_)),t.copy(r).addScaledVector(Jl,o);const f=1/(h+m+p);return a=m*f,o=p*f,t.copy(i).addScaledVector(qi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function _o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Ep(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_o(a,s,e+1/3),this.g=_o(a,s,e),this.b=_o(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return tt.fromWorkingColorSpace(At.copy(this),e),Math.round(Ot(At.r*255,0,255))*65536+Math.round(Ot(At.g*255,0,255))*256+Math.round(Ot(At.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Mt){tt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Ns);const i=no(Zn.h,Ns.h,t),r=no(Zn.s,Ns.s,t),s=no(Zn.l,Ns.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ue;Ue.NAMES=Xd;let Bp=0;class _s extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=cr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qd extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new F,Os=new Ye;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kl,this.updateRange={offset:0,count:-1},this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class jd extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $d extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ri extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fp=0;const $t=new mt,vo=new Ft,$i=new F,Gt=new gs,Ir=new gs,St=new F;class Fi extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?$d:jd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,Ir.min),Gt.expandByPoint(St),St.addVectors(Gt.max,Ir.max),Gt.expandByPoint(St)):(Gt.expandByPoint(Ir.min),Gt.expandByPoint(Ir.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)St.fromBufferAttribute(o,l),c&&($i.fromBufferAttribute(e,l),St.add($i)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new F,u[b]=new F;const d=new F,p=new F,g=new F,_=new Ye,m=new Ye,h=new Ye,f=new F,E=new F;function v(b,O,z){d.fromArray(r,b*3),p.fromArray(r,O*3),g.fromArray(r,z*3),_.fromArray(a,b*2),m.fromArray(a,O*2),h.fromArray(a,z*2),p.sub(d),g.sub(d),m.sub(_),h.sub(_);const Z=1/(m.x*h.y-h.x*m.y);isFinite(Z)&&(f.copy(p).multiplyScalar(h.y).addScaledVector(g,-m.y).multiplyScalar(Z),E.copy(g).multiplyScalar(m.x).addScaledVector(p,-h.x).multiplyScalar(Z),l[b].add(f),l[O].add(f),l[z].add(f),u[b].add(E),u[O].add(E),u[z].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,O=T.length;b<O;++b){const z=T[b],Z=z.start,U=z.count;for(let y=Z,w=Z+U;y<w;y+=3)v(i[y+0],i[y+1],i[y+2])}const R=new F,L=new F,C=new F,P=new F;function S(b){C.fromArray(s,b*3),P.copy(C);const O=l[b];R.copy(O),R.sub(C.multiplyScalar(C.dot(O))).normalize(),L.crossVectors(P,O);const Z=L.dot(u[b])<0?-1:1;c[b*4]=R.x,c[b*4+1]=R.y,c[b*4+2]=R.z,c[b*4+3]=Z}for(let b=0,O=T.length;b<O;++b){const z=T[b],Z=z.start,U=z.count;for(let y=Z,w=Z+U;y<w;y+=3)S(i[y+0]),S(i[y+1]),S(i[y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),m=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,h),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,h),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,p=new l.constructor(c.length*u);let g=0,_=0;for(let m=0,h=c.length;m<h;m++){o.isInterleavedBufferAttribute?g=c[m]*o.data.stride+o.offset:g=c[m]*u;for(let f=0;f<u;f++)p[_++]=l[g++]}return new Sn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const p=l[u],g=e(p,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const g=l[d];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let p=0,g=d.length;p<g;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new mt,gi=new Wd,Bs=new Ac,eu=new F,Zi=new F,Yi=new F,Ki=new F,yo=new F,Fs=new F,ks=new Ye,zs=new Ye,Hs=new Ye,tu=new F,nu=new F,iu=new F,Vs=new F,Gs=new F;class Hn extends Ft{constructor(e=new Fi,t=new qd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(yo.fromBufferAttribute(d,e),a?Fs.addScaledVector(yo,u):Fs.addScaledVector(yo.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(Bs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Bs,eu)===null||gi.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Ql.copy(s).invert(),gi.copy(e.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,m=p.length;_<m;_++){const h=p[_],f=a[h.materialIndex],E=Math.max(h.start,g.start),v=Math.min(o.count,Math.min(h.start+h.count,g.start+g.count));for(let T=E,R=v;T<R;T+=3){const L=o.getX(T),C=o.getX(T+1),P=o.getX(T+2);r=Ws(this,f,e,i,l,u,d,L,C,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let h=_,f=m;h<f;h+=3){const E=o.getX(h),v=o.getX(h+1),T=o.getX(h+2);r=Ws(this,a,e,i,l,u,d,E,v,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,m=p.length;_<m;_++){const h=p[_],f=a[h.materialIndex],E=Math.max(h.start,g.start),v=Math.min(c.count,Math.min(h.start+h.count,g.start+g.count));for(let T=E,R=v;T<R;T+=3){const L=T,C=T+1,P=T+2;r=Ws(this,f,e,i,l,u,d,L,C,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),m=Math.min(c.count,g.start+g.count);for(let h=_,f=m;h<f;h+=3){const E=h,v=h+1,T=h+2;r=Ws(this,a,e,i,l,u,d,E,v,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function kp(n,e,t,i,r,s,a,o){let c;if(e.side===Bt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===oi,o),c===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gs);return l<t.near||l>t.far?null:{distance:l,point:Gs.clone(),object:n}}function Ws(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Zi),n.getVertexPosition(c,Yi),n.getVertexPosition(l,Ki);const u=kp(n,e,t,i,Zi,Yi,Ki,Vs);if(u){r&&(ks.fromBufferAttribute(r,o),zs.fromBufferAttribute(r,c),Hs.fromBufferAttribute(r,l),u.uv=ln.getInterpolation(Vs,Zi,Yi,Ki,ks,zs,Hs,new Ye)),s&&(ks.fromBufferAttribute(s,o),zs.fromBufferAttribute(s,c),Hs.fromBufferAttribute(s,l),u.uv1=ln.getInterpolation(Vs,Zi,Yi,Ki,ks,zs,Hs,new Ye),u.uv2=u.uv1),a&&(tu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,c),iu.fromBufferAttribute(a,l),u.normal=ln.getInterpolation(Vs,Zi,Yi,Ki,tu,nu,iu,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};ln.getNormal(Zi,Yi,Ki,d.normal),u.face=d}return u}class Mr extends Fi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let p=0,g=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ri(l,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(d,2));function _(m,h,f,E,v,T,R,L,C,P,S){const b=T/C,O=R/P,z=T/2,Z=R/2,U=L/2,y=C+1,w=P+1;let I=0,q=0;const V=new F;for(let H=0;H<w;H++){const N=H*O-Z;for(let G=0;G<y;G++){const ee=G*b-z;V[m]=ee*E,V[h]=N*v,V[f]=U,l.push(V.x,V.y,V.z),V[m]=0,V[h]=0,V[f]=L>0?1:-1,u.push(V.x,V.y,V.z),d.push(G/C),d.push(1-H/P),I+=1}}for(let H=0;H<P;H++)for(let N=0;N<C;N++){const G=p+N+y*H,ee=p+N+y*(H+1),ae=p+(N+1)+y*(H+1),fe=p+(N+1)+y*H;c.push(G,ee,fe),c.push(ee,ae,fe),q+=6}o.addGroup(g,q,S),g+=q,p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const r in i)e[r]=i[r]}return e}function zp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zd(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const Hp={clone:pr,merge:Pt};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Wp extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const c=new Wt(Ji,Qi,e,t);c.layers=this.layers,this.add(c);const l=new Wt(Ji,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kd extends Xt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xp extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?Mt:Jt),this.texture=new Kd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mr(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ri});s.uniforms.tEquirect.value=t;const a=new Hn(r,s),o=t.minFilter;return t.minFilter===Xr&&(t.minFilter=Kt),new Wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const xo=new F,qp=new F,jp=new Xe;class vi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xo.subVectors(i,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jp.getNormalMatrix(e),r=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ac,Xs=new F;class Cc{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],h=r[11],f=r[12],E=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-s,p-l,h-g,T-f).normalize(),i[1].setComponents(c+s,p+l,h+g,T+f).normalize(),i[2].setComponents(c+a,p+u,h+_,T+E).normalize(),i[3].setComponents(c-a,p-u,h-_,T-E).normalize(),i[4].setComponents(c-o,p-d,h-m,T-v).normalize(),t===zn)i[5].setComponents(c+o,p+d,h+m,T+v).normalize();else if(t===la)i[5].setComponents(o,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xs.x=r.normal.x>0?e.max.x:e.min.x,Xs.y=r.normal.y>0?e.max.y:e.min.y,Xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $p(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const d=l.array,p=l.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,p),l.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const p=u.array,g=u.updateRange;n.bindBuffer(d,l),g.count===-1?n.bufferSubData(d,0,p):(t?n.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d===void 0?i.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:a,remove:o,update:c}}class Lc extends Fi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,p=t/c,g=[],_=[],m=[],h=[];for(let f=0;f<u;f++){const E=f*p-a;for(let v=0;v<l;v++){const T=v*d-s;_.push(T,-E,0),m.push(0,0,1),h.push(v/o),h.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const v=E+l*f,T=E+l*(f+1),R=E+1+l*(f+1),L=E+1+l*f;g.push(v,T,L),g.push(T,R,L)}this.setIndex(g),this.setAttribute("position",new Ri(_,3)),this.setAttribute("normal",new Ri(m,3)),this.setAttribute("uv",new Ri(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,e_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,t_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,o_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,c_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,l_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,u_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,d_=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,f_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,m_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,g_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,__=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,v_=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,y_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,x_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,E_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,b_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,M_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,T_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ze={alphahash_fragment:Zp,alphahash_pars_fragment:Yp,alphamap_fragment:Kp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,begin_vertex:im,beginnormal_vertex:rm,bsdfs:sm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:cm,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:hm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:vm,displacementmap_pars_vertex:ym,displacementmap_vertex:xm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Em,colorspace_fragment:bm,colorspace_pars_fragment:Mm,envmap_fragment:Tm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Lm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Dm,gradientmap_pars_fragment:Um,lightmap_fragment:Nm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Fm,lights_pars_begin:km,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:jm,lights_fragment_maps:$m,lights_fragment_end:Zm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Qm,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:rg,metalnessmap_pars_fragment:sg,morphcolor_vertex:ag,morphnormal_vertex:og,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:hg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:vg,iridescence_pars_fragment:yg,opaque_fragment:xg,packing:Sg,premultiplied_alpha_fragment:Eg,project_vertex:bg,dithering_fragment:Mg,dithering_pars_fragment:Tg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:Fg,tonemapping_pars_fragment:kg,transmission_fragment:zg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:qg,background_frag:jg,backgroundCube_vert:$g,backgroundCube_frag:Zg,cube_vert:Yg,cube_frag:Kg,depth_vert:Jg,depth_frag:Qg,distanceRGBA_vert:e_,distanceRGBA_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:r_,linedashed_frag:s_,meshbasic_vert:a_,meshbasic_frag:o_,meshlambert_vert:c_,meshlambert_frag:l_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:h_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:__,meshtoon_vert:v_,meshtoon_frag:y_,points_vert:x_,points_frag:S_,shadow_vert:E_,shadow_frag:b_,sprite_vert:M_,sprite_frag:T_},ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},yn={basic:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Pt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Pt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Pt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Pt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Pt([ce.lights,ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};yn.physical={uniforms:Pt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const qs={r:0,b:0,g:0};function w_(n,e,t,i,r,s,a){const o=new Ue(0);let c=s===!0?0:1,l,u,d=null,p=0,g=null;function _(h,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?m(o,c):v&&v.isColor&&(m(v,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Da)?(u===void 0&&(u=new Hn(new Mr(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:pr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,(d!==v||p!==v.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,p=v.version,g=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Hn(new Lc(2,2),new Di({name:"BackgroundMaterial",uniforms:pr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,g=n.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function m(h,f){h.getRGB(qs,Zd(n)),i.buffers.color.setClear(qs.r,qs.g,qs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(h,f=1){o.set(h),c=f,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,m(o,c)},render:_}}function A_(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=h(null);let l=c,u=!1;function d(U,y,w,I,q){let V=!1;if(a){const H=m(I,w,y);l!==H&&(l=H,g(l.object)),V=f(U,I,w,q),V&&E(U,I,w,q)}else{const H=y.wireframe===!0;(l.geometry!==I.id||l.program!==w.id||l.wireframe!==H)&&(l.geometry=I.id,l.program=w.id,l.wireframe=H,V=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,P(U,y,w,I),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function m(U,y,w){const I=w.wireframe===!0;let q=o[U.id];q===void 0&&(q={},o[U.id]=q);let V=q[y.id];V===void 0&&(V={},q[y.id]=V);let H=V[I];return H===void 0&&(H=h(p()),V[I]=H),H}function h(U){const y=[],w=[],I=[];for(let q=0;q<r;q++)y[q]=0,w[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:w,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,y,w,I){const q=l.attributes,V=y.attributes;let H=0;const N=w.getAttributes();for(const G in N)if(N[G].location>=0){const ae=q[G];let fe=V[G];if(fe===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(fe=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(fe=U.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;H++}return l.attributesNum!==H||l.index!==I}function E(U,y,w,I){const q={},V=y.attributes;let H=0;const N=w.getAttributes();for(const G in N)if(N[G].location>=0){let ae=V[G];ae===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),q[G]=fe,H++}l.attributes=q,l.attributesNum=H,l.index=I}function v(){const U=l.newAttributes;for(let y=0,w=U.length;y<w;y++)U[y]=0}function T(U){R(U,0)}function R(U,y){const w=l.newAttributes,I=l.enabledAttributes,q=l.attributeDivisors;w[U]=1,I[U]===0&&(n.enableVertexAttribArray(U),I[U]=1),q[U]!==y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,y),q[U]=y)}function L(){const U=l.newAttributes,y=l.enabledAttributes;for(let w=0,I=y.length;w<I;w++)y[w]!==U[w]&&(n.disableVertexAttribArray(w),y[w]=0)}function C(U,y,w,I,q,V,H){H===!0?n.vertexAttribIPointer(U,y,w,q,V):n.vertexAttribPointer(U,y,w,I,q,V)}function P(U,y,w,I){if(i.isWebGL2===!1&&(U.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=I.attributes,V=w.getAttributes(),H=y.defaultAttributeValues;for(const N in V){const G=V[N];if(G.location>=0){let ee=q[N];if(ee===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){const ae=ee.normalized,fe=ee.itemSize,xe=t.get(ee);if(xe===void 0)continue;const De=xe.buffer,Ae=xe.type,be=xe.bytesPerElement,Qe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||ee.gpuType===Id);if(ee.isInterleavedBufferAttribute){const Fe=ee.data,k=Fe.stride,rt=ee.offset;if(Fe.isInstancedInterleavedBuffer){for(let ge=0;ge<G.locationSize;ge++)R(G.location+ge,Fe.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let ge=0;ge<G.locationSize;ge++)T(G.location+ge);n.bindBuffer(n.ARRAY_BUFFER,De);for(let ge=0;ge<G.locationSize;ge++)C(G.location+ge,fe/G.locationSize,Ae,ae,k*be,(rt+fe/G.locationSize*ge)*be,Qe)}else{if(ee.isInstancedBufferAttribute){for(let Fe=0;Fe<G.locationSize;Fe++)R(G.location+Fe,ee.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)T(G.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Fe=0;Fe<G.locationSize;Fe++)C(G.location+Fe,fe/G.locationSize,Ae,ae,fe*be,fe/G.locationSize*Fe*be,Qe)}}else if(H!==void 0){const ae=H[N];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(G.location,ae);break;case 3:n.vertexAttrib3fv(G.location,ae);break;case 4:n.vertexAttrib4fv(G.location,ae);break;default:n.vertexAttrib1fv(G.location,ae)}}}}L()}function S(){z();for(const U in o){const y=o[U];for(const w in y){const I=y[w];for(const q in I)_(I[q].object),delete I[q];delete y[w]}delete o[U]}}function b(U){if(o[U.id]===void 0)return;const y=o[U.id];for(const w in y){const I=y[w];for(const q in I)_(I[q].object),delete I[q];delete y[w]}delete o[U.id]}function O(U){for(const y in o){const w=o[y];if(w[U.id]===void 0)continue;const I=w[U.id];for(const q in I)_(I[q].object),delete I[q];delete w[U.id]}}function z(){Z(),u=!0,l!==c&&(l=c,g(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:z,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:T,disableUnusedAttributes:L}}function R_(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,l,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=c}function C_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,T=a||e.has("OES_texture_float"),R=v&&T,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:L}}function L_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vi,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||i!==0||r;return r=p,i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,g){const _=d.clippingPlanes,m=d.clipIntersection,h=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!h)s?u(null):l();else{const E=s?0:i,v=E*4;let T=f.clippingState||null;c.value=T,T=u(_,p,v,g);for(let R=0;R!==v;++R)T[R]=t[R];f.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,g,_){const m=d!==null?d.length:0;let h=null;if(m!==0){if(h=c.value,_!==!0||h===null){const f=g+m*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<f)&&(h=new Float32Array(f));for(let v=0,T=g;v!==m;++v,T+=4)a.copy(d[v]).applyMatrix4(E,o),a.normal.toArray(h,T),h[T+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function P_(n){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=dr:o===jo&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===qo||o===jo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Xp(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class I_ extends Yd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,ru=[.125,.215,.35,.446,.526,.582],Ei=20,So=new I_,su=new Ue;let Eo=null,bo=0,Mo=0;const yi=(1+Math.sqrt(5))/2,er=1/yi,au=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,yi,er),new F(0,yi,-er),new F(er,0,yi),new F(-er,0,yi),new F(yi,er,0),new F(-yi,er,0)];class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,bo,Mo),e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:qr,format:fn,colorSpace:Gn,depthBuffer:!1},r=cu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(s)),this._blurMaterial=U_(s,e,t)}return r}_compileMaterial(e){const t=new Hn(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r){const o=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(su),u.toneMapping=si,u.autoClear=!1;const g=new qd({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new Hn(new Mr,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(su),m=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;js(r,E*v,f>2?v:0,v,v),u.setRenderTarget(r),m&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;js(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,So)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=au[(r-1)%au.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Hn(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ei-1),m=s/_,h=isFinite(s)?1+Math.floor(u*m):Ei;h>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ei}`);const f=[];let E=0;for(let C=0;C<Ei;++C){const P=C/m,S=Math.exp(-P*P/2);f.push(S),C===0?E+=S:C<h&&(E+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const T=this._sizeLods[r],R=3*T*(r>v-sr?r-v+sr:0),L=4*(this._cubeSize-T);js(t,R,L,3*T,2*T),c.setRenderTarget(t),c.render(d,So)}}function D_(n){const e=[],t=[],i=[];let r=n;const s=n-sr+1+ru.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-sr?c=ru[a-n+sr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,_=6,m=3,h=2,f=1,E=new Float32Array(m*_*g),v=new Float32Array(h*_*g),T=new Float32Array(f*_*g);for(let L=0;L<g;L++){const C=L%3*2/3-1,P=L>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(S,m*_*L),v.set(p,h*_*L);const b=[L,L,L,L,L,L];T.set(b,f*_*L)}const R=new Fi;R.setAttribute("position",new Sn(E,m)),R.setAttribute("uv",new Sn(v,h)),R.setAttribute("faceIndex",new Sn(T,f)),e.push(R),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cu(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function U_(n,e,t){const i=new Float32Array(Ei),r=new F(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function lu(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function uu(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===qo||c===jo,u=c===dr||c===fr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new ou(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new ou(n));const p=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function O_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function B_(n,e,t,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const m=p.morphAttributes[_];for(let h=0,f=m.length;h<f;h++)e.remove(m[h])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const m=g[_];for(let h=0,f=m.length;h<f;h++)e.update(m[h],n.ARRAY_BUFFER)}}function l(d){const p=[],g=d.index,_=d.attributes.position;let m=0;if(g!==null){const E=g.array;m=g.version;for(let v=0,T=E.length;v<T;v+=3){const R=E[v+0],L=E[v+1],C=E[v+2];p.push(R,L,L,C,C,R)}}else if(_!==void 0){const E=_.array;m=_.version;for(let v=0,T=E.length/3-1;v<T;v+=3){const R=v+0,L=v+1,C=v+2;p.push(R,L,L,C,C,R)}}else return;const h=new(zd(p)?$d:jd)(p,1);h.version=m;const f=s.get(d);f&&e.remove(f),s.set(d,h)}function u(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function F_(n,e,t,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(s,g,o,p*c),t.update(g,s,1)}function d(p,g,_){if(_===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,o,p*c,_),t.update(g,s,_)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=d}function k_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function z_(n,e){return n[0]-e[0]}function H_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function V_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,d){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=_!==void 0?_.length:0;let h=s.get(u);if(h===void 0||h.count!==m){let y=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const v=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),T===!0&&(S=2),R===!0&&(S=3);let b=u.attributes.position.count*S,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const z=new Float32Array(b*O*4*m),Z=new Gd(z,b,O,m);Z.type=ii,Z.needsUpdate=!0;const U=S*4;for(let w=0;w<m;w++){const I=L[w],q=C[w],V=P[w],H=b*O*4*w;for(let N=0;N<I.count;N++){const G=N*U;v===!0&&(a.fromBufferAttribute(I,N),z[H+G+0]=a.x,z[H+G+1]=a.y,z[H+G+2]=a.z,z[H+G+3]=0),T===!0&&(a.fromBufferAttribute(q,N),z[H+G+4]=a.x,z[H+G+5]=a.y,z[H+G+6]=a.z,z[H+G+7]=0),R===!0&&(a.fromBufferAttribute(V,N),z[H+G+8]=a.x,z[H+G+9]=a.y,z[H+G+10]=a.z,z[H+G+11]=V.itemSize===4?a.w:1)}}h={count:m,texture:Z,size:new Ye(b,O)},s.set(u,h),u.addEventListener("dispose",y)}let f=0;for(let v=0;v<p.length;v++)f+=p[v];const E=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const _=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==_){m=[];for(let T=0;T<_;T++)m[T]=[T,0];i[u.id]=m}for(let T=0;T<_;T++){const R=m[T];R[0]=T,R[1]=p[T]}m.sort(H_);for(let T=0;T<8;T++)T<_&&m[T][1]?(o[T][0]=m[T][0],o[T][1]=m[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(z_);const h=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const R=o[T],L=R[0],C=R[1];L!==Number.MAX_SAFE_INTEGER&&C?(h&&u.getAttribute("morphTarget"+T)!==h[L]&&u.setAttribute("morphTarget"+T,h[L]),f&&u.getAttribute("morphNormal"+T)!==f[L]&&u.setAttribute("morphNormal"+T,f[L]),r[T]=C,E+=C):(h&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),f&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const v=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function G_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Qd=new Xt,ef=new Gd,tf=new Rp,nf=new Kd,du=[],fu=[],hu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function W_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function j_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function $_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;mu.set(i),n.uniformMatrix2fv(this.addr,!1,mu),vt(t,i)}}function Z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;pu.set(i),n.uniformMatrix3fv(this.addr,!1,pu),vt(t,i)}}function Y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),vt(t,i)}}function K_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function t0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Qd,r)}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||tf,r)}function o0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nf,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ef,r)}function l0(n){switch(n){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return j_;case 35674:return $_;case 35675:return Z_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(n,e){n.uniform1fv(this.addr,e)}function d0(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function f0(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function h0(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function p0(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function m0(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function g0(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _0(n,e){n.uniform1iv(this.addr,e)}function v0(n,e){n.uniform2iv(this.addr,e)}function y0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function S0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function M0(n,e){n.uniform4uiv(this.addr,e)}function T0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qd,s[a])}function w0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||tf,s[a])}function A0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nf,s[a])}function R0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ef,s[a])}function C0(n){switch(n){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return h0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return x0;case 5125:return S0;case 36294:return E0;case 36295:return b0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=l0(t.type)}}class P0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=C0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function gu(n,e){n.seq.push(e),n.map[e.id]=e}function D0(n,e,t){const i=n.name,r=i.length;for(To.lastIndex=0;;){const s=To.exec(i),a=To.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){gu(t,l===void 0?new L0(o,n,e):new P0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new I0(o),gu(t,d)),t=d}}}class ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);D0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function _u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const U0=37297;let N0=0;function O0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function B0(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===ca&&t===oa?i="LinearDisplayP3ToLinearSRGB":e===oa&&t===ca&&(i="LinearSRGBToLinearDisplayP3"),n){case Gn:case Ua:return[i,"LinearTransferOETF"];case Mt:case wc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+O0(n.getShaderSource(e),a)}else return r}function F0(n,e){const t=B0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function k0(n,e){let t;switch(e){case Yh:t="Linear";break;case Kh:t="Reinhard";break;case Jh:t="OptimizedCineon";break;case Qh:t="ACESFilmic";break;case ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Br).join(`
`)}function H0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Br(n){return n!==""}function yu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(n){return n.replace(G0,X0)}const W0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X0(n,e){let t=ze[e];if(t===void 0){const i=W0.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(q0,j0)}function j0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function K0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case $h:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function J0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Q0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$0(t),l=Z0(t),u=Y0(t),d=K0(t),p=J0(t),g=t.isWebGL2?"":z0(t),_=H0(s),m=r.createProgram();let h,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),h.length>0&&(h+=`
`),f=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),f.length>0&&(f+=`
`)):(h=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),f=[g,Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?ze.tonemapping_pars_fragment:"",t.toneMapping!==si?k0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,F0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Qo(a),a=yu(a,t),a=xu(a,t),o=Qo(o),o=yu(o,t),o=xu(o,t),a=Su(a),o=Su(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=E+h+a,T=E+f+o,R=_u(r,r.VERTEX_SHADER,v),L=_u(r,r.FRAGMENT_SHADER,T);r.attachShader(m,R),r.attachShader(m,L),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function C(O){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(m).trim(),Z=r.getShaderInfoLog(R).trim(),U=r.getShaderInfoLog(L).trim();let y=!0,w=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,L);else{const I=vu(r,R,"vertex"),q=vu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+I+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Z===""||U==="")&&(w=!1);w&&(O.diagnostics={runnable:y,programLog:z,vertexShader:{log:Z,prefix:h},fragmentShader:{log:U,prefix:f}})}r.deleteShader(R),r.deleteShader(L),P=new ta(r,m),S=V0(r,m)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(m,U0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=L,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nv(e),t.set(e,i)),i}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(n,e,t,i,r,s,a){const o=new Rc,c=new tv,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function h(S,b,O,z,Z){const U=z.fog,y=Z.geometry,w=S.isMeshStandardMaterial?z.environment:null,I=(S.isMeshStandardMaterial?t:e).get(S.envMap||w),q=I&&I.mapping===Da?I.image.height:null,V=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const H=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,N=H!==void 0?H.length:0;let G=0;y.morphAttributes.position!==void 0&&(G=1),y.morphAttributes.normal!==void 0&&(G=2),y.morphAttributes.color!==void 0&&(G=3);let ee,ae,fe,xe;if(V){const ft=yn[V];ee=ft.vertexShader,ae=ft.fragmentShader}else ee=S.vertexShader,ae=S.fragmentShader,c.update(S),fe=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);const De=n.getRenderTarget(),Ae=Z.isInstancedMesh===!0,be=!!S.map,Qe=!!S.matcap,Fe=!!I,k=!!S.aoMap,rt=!!S.lightMap,ge=!!S.bumpMap,Ce=!!S.normalMap,Re=!!S.displacementMap,ct=!!S.emissiveMap,Ge=!!S.metalnessMap,We=!!S.roughnessMap,nt=S.anisotropy>0,yt=S.clearcoat>0,Tt=S.iridescence>0,A=S.sheen>0,x=S.transmission>0,W=nt&&!!S.anisotropyMap,ne=yt&&!!S.clearcoatMap,Q=yt&&!!S.clearcoatNormalMap,ie=yt&&!!S.clearcoatRoughnessMap,ve=Tt&&!!S.iridescenceMap,oe=Tt&&!!S.iridescenceThicknessMap,he=A&&!!S.sheenColorMap,Le=A&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,te=!!S.specularColorMap,et=!!S.specularIntensityMap,Ne=x&&!!S.transmissionMap,Pe=x&&!!S.thicknessMap,Se=!!S.gradientMap,me=!!S.alphaMap,je=S.alphaTest>0,D=!!S.alphaHash,ue=!!S.extensions,re=!!y.attributes.uv1,Y=!!y.attributes.uv2,se=!!y.attributes.uv3;let Me=si;return S.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Me=n.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ae,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Ae,instancingColor:Ae&&Z.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Gn,map:be,matcap:Qe,envMap:Fe,envMapMode:Fe&&I.mapping,envMapCubeUVHeight:q,aoMap:k,lightMap:rt,bumpMap:ge,normalMap:Ce,displacementMap:p&&Re,emissiveMap:ct,normalMapObjectSpace:Ce&&S.normalMapType===hp,normalMapTangentSpace:Ce&&S.normalMapType===kd,metalnessMap:Ge,roughnessMap:We,anisotropy:nt,anisotropyMap:W,clearcoat:yt,clearcoatMap:ne,clearcoatNormalMap:Q,clearcoatRoughnessMap:ie,iridescence:Tt,iridescenceMap:ve,iridescenceThicknessMap:oe,sheen:A,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:Ke,specularColorMap:te,specularIntensityMap:et,transmission:x,transmissionMap:Ne,thicknessMap:Pe,gradientMap:Se,opaque:S.transparent===!1&&S.blending===cr,alphaMap:me,alphaTest:je,alphaHash:D,combine:S.combine,mapUv:be&&m(S.map.channel),aoMapUv:k&&m(S.aoMap.channel),lightMapUv:rt&&m(S.lightMap.channel),bumpMapUv:ge&&m(S.bumpMap.channel),normalMapUv:Ce&&m(S.normalMap.channel),displacementMapUv:Re&&m(S.displacementMap.channel),emissiveMapUv:ct&&m(S.emissiveMap.channel),metalnessMapUv:Ge&&m(S.metalnessMap.channel),roughnessMapUv:We&&m(S.roughnessMap.channel),anisotropyMapUv:W&&m(S.anisotropyMap.channel),clearcoatMapUv:ne&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&m(S.sheenRoughnessMap.channel),specularMapUv:Ke&&m(S.specularMap.channel),specularColorMapUv:te&&m(S.specularColorMap.channel),specularIntensityMapUv:et&&m(S.specularIntensityMap.channel),transmissionMapUv:Ne&&m(S.transmissionMap.channel),thicknessMapUv:Pe&&m(S.thicknessMap.channel),alphaMapUv:me&&m(S.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(Ce||nt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:re,vertexUv2s:Y,vertexUv3s:se,pointsUvs:Z.isPoints===!0&&!!y.attributes.uv&&(be||me),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:G,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fn,flipSided:S.side===Bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)b.push(O),b.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(E(b,S),v(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){const b=_[S.type];let O;if(b){const z=yn[b];O=Hp.clone(z.uniforms)}else O=S.uniforms;return O}function R(S,b){let O;for(let z=0,Z=l.length;z<Z;z++){const U=l[z];if(U.cacheKey===b){O=U,++O.usedTimes;break}}return O===void 0&&(O=new Q0(n,b,S,s),l.push(O)),O}function L(S){if(--S.usedTimes===0){const b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:T,acquireProgram:R,releaseProgram:L,releaseShaderCache:C,programs:l,dispose:P}}function rv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function sv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,g,_,m,h){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:_,renderOrder:d.renderOrder,z:m,group:h},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=m,f.group=h),e++,f}function o(d,p,g,_,m,h){const f=a(d,p,g,_,m,h);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):t.push(f)}function c(d,p,g,_,m,h){const f=a(d,p,g,_,m,h);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,p){t.length>1&&t.sort(d||sv),i.length>1&&i.sort(p||bu),r.length>1&&r.sort(p||bu)}function u(){for(let d=e,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function av(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Mu,n.set(i,[a])):r>=s.length?(a=new Mu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ov(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function cv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lv=0;function uv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dv(n,e){const t=new ov,i=cv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new mt,o=new mt;function c(u,d){let p=0,g=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let m=0,h=0,f=0,E=0,v=0,T=0,R=0,L=0,C=0,P=0,S=0;u.sort(uv);const b=d===!0?Math.PI:1;for(let z=0,Z=u.length;z<Z;z++){const U=u[z],y=U.color,w=U.intensity,I=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=y.r*w*b,g+=y.g*w*b,_+=y.b*w*b;else if(U.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(U.sh.coefficients[V],w);S++}else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const H=U.shadow,N=i.get(U);N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,r.directionalShadow[m]=N,r.directionalShadowMap[m]=q,r.directionalShadowMatrix[m]=U.shadow.matrix,T++}r.directional[m]=V,m++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(y).multiplyScalar(w*b),V.distance=I,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,r.spot[f]=V;const H=U.shadow;if(U.map&&(r.spotLightMap[C]=U.map,C++,H.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[f]=H.matrix,U.castShadow){const N=i.get(U);N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,r.spotShadow[f]=N,r.spotShadowMap[f]=q,L++}f++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(y).multiplyScalar(w),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=V,E++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*b),V.distance=U.distance,V.decay=U.decay,U.castShadow){const H=U.shadow,N=i.get(U);N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,N.shadowCameraNear=H.camera.near,N.shadowCameraFar=H.camera.far,r.pointShadow[h]=N,r.pointShadowMap[h]=q,r.pointShadowMatrix[h]=U.shadow.matrix,R++}r.point[h]=V,h++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(w*b),V.groundColor.copy(U.groundColor).multiplyScalar(w*b),r.hemi[v]=V,v++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const O=r.hash;(O.directionalLength!==m||O.pointLength!==h||O.spotLength!==f||O.rectAreaLength!==E||O.hemiLength!==v||O.numDirectionalShadows!==T||O.numPointShadows!==R||O.numSpotShadows!==L||O.numSpotMaps!==C||O.numLightProbes!==S)&&(r.directional.length=m,r.spot.length=f,r.rectArea.length=E,r.point.length=h,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=L+C-P,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,O.directionalLength=m,O.pointLength=h,O.spotLength=f,O.rectAreaLength=E,O.hemiLength=v,O.numDirectionalShadows=T,O.numPointShadows=R,O.numSpotShadows=L,O.numSpotMaps=C,O.numLightProbes=S,r.version=lv++)}function l(u,d){let p=0,g=0,_=0,m=0,h=0;const f=d.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const T=u[E];if(T.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),p++}else if(T.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),_++}else if(T.isRectAreaLight){const R=r.rectArea[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(f),g++}else if(T.isHemisphereLight){const R=r.hemi[h];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(f),h++}}}return{setup:c,setupView:l,state:r}}function Tu(n,e){const t=new dv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function fv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Tu(n,e),t.set(s,[c])):a>=o.length?(c=new Tu(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class hv extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _v(n,e,t){let i=new Cc;const r=new Ye,s=new Ye,a=new at,o=new hv({depthPacking:fp}),c=new pv,l={},u=t.maxTextureSize,d={[oi]:Bt,[Bt]:oi,[Fn]:Fn},p=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Fi;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Hn(_,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let f=this.type;this.render=function(R,L,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;const P=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ri),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==On&&this.type===On,Z=f===On&&this.type!==On;for(let U=0,y=R.length;U<y;U++){const w=R[U],I=w.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null||z===!0||Z===!0){const H=this.type!==On?{minFilter:It,magFilter:It}:{};I.map!==null&&I.map.dispose(),I.map=new Ii(r.x,r.y,H),I.map.texture.name=w.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const V=I.getViewportCount();for(let H=0;H<V;H++){const N=I.getViewport(H);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),O.viewport(a),I.updateMatrices(w,H),i=I.getFrustum(),T(L,C,I.camera,w,this.type)}I.isPointLightShadow!==!0&&this.type===On&&E(I,C),I.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(P,S,b)};function E(R,L){const C=e.update(m);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ii(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,C,p,m,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,C,g,m,null)}function v(R,L,C,P){let S=null;const b=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)S=b;else if(S=C.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const O=S.uuid,z=L.uuid;let Z=l[O];Z===void 0&&(Z={},l[O]=Z);let U=Z[z];U===void 0&&(U=S.clone(),Z[z]=U),S=U}if(S.visible=L.visible,S.wireframe=L.wireframe,P===On?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=C}return S}function T(R,L,C,P,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===On)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const z=e.update(R),Z=R.material;if(Array.isArray(Z)){const U=z.groups;for(let y=0,w=U.length;y<w;y++){const I=U[y],q=Z[I.materialIndex];if(q&&q.visible){const V=v(R,q,P,S);n.renderBufferDirect(C,null,z,V,R,I)}}}else if(Z.visible){const U=v(R,Z,P,S);n.renderBufferDirect(C,null,z,U,R,null)}}const O=R.children;for(let z=0,Z=O.length;z<Z;z++)T(O[z],L,C,P,S)}}function vv(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ue=new at;let re=null;const Y=new at(0,0,0,0);return{setMask:function(se){re!==se&&!D&&(n.colorMask(se,se,se,se),re=se)},setLocked:function(se){D=se},setClear:function(se,Me,Je,ft,jt){jt===!0&&(se*=ft,Me*=ft,Je*=ft),ue.set(se,Me,Je,ft),Y.equals(ue)===!1&&(n.clearColor(se,Me,Je,ft),Y.copy(ue))},reset:function(){D=!1,re=null,Y.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,re=null,Y=null;return{setTest:function(se){se?be(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(se){ue!==se&&!D&&(n.depthMask(se),ue=se)},setFunc:function(se){if(re!==se){switch(se){case Hh:n.depthFunc(n.NEVER);break;case Vh:n.depthFunc(n.ALWAYS);break;case Gh:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case Wh:n.depthFunc(n.EQUAL);break;case Xh:n.depthFunc(n.GEQUAL);break;case qh:n.depthFunc(n.GREATER);break;case jh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=se}},setLocked:function(se){D=se},setClear:function(se){Y!==se&&(n.clearDepth(se),Y=se)},reset:function(){D=!1,ue=null,re=null,Y=null}}}function a(){let D=!1,ue=null,re=null,Y=null,se=null,Me=null,Je=null,ft=null,jt=null;return{setTest:function(it){D||(it?be(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(it){ue!==it&&!D&&(n.stencilMask(it),ue=it)},setFunc:function(it,Ct,gn){(re!==it||Y!==Ct||se!==gn)&&(n.stencilFunc(it,Ct,gn),re=it,Y=Ct,se=gn)},setOp:function(it,Ct,gn){(Me!==it||Je!==Ct||ft!==gn)&&(n.stencilOp(it,Ct,gn),Me=it,Je=Ct,ft=gn)},setLocked:function(it){D=it},setClear:function(it){jt!==it&&(n.clearStencil(it),jt=it)},reset:function(){D=!1,ue=null,re=null,Y=null,se=null,Me=null,Je=null,ft=null,jt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,d=new WeakMap;let p={},g={},_=new WeakMap,m=[],h=null,f=!1,E=null,v=null,T=null,R=null,L=null,C=null,P=null,S=new Ue(0,0,0),b=0,O=!1,z=null,Z=null,U=null,y=null,w=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=V>=2);let N=null,G={};const ee=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),fe=new at().fromArray(ee),xe=new at().fromArray(ae);function De(D,ue,re,Y){const se=new Uint8Array(4),Me=n.createTexture();n.bindTexture(D,Me),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<re;Je++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ue+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Me}const Ae={};Ae[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(n.DEPTH_TEST),c.setFunc(sa),Ge(!1),We(al),be(n.CULL_FACE),Re(ri);function be(D){p[D]!==!0&&(n.enable(D),p[D]=!0)}function Qe(D){p[D]!==!1&&(n.disable(D),p[D]=!1)}function Fe(D,ue){return g[D]!==ue?(n.bindFramebuffer(D,ue),g[D]=ue,i&&(D===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function k(D,ue){let re=m,Y=!1;if(D)if(re=_.get(ue),re===void 0&&(re=[],_.set(ue,re)),D.isWebGLMultipleRenderTargets){const se=D.texture;if(re.length!==se.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Je=se.length;Me<Je;Me++)re[Me]=n.COLOR_ATTACHMENT0+Me;re.length=se.length,Y=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Y=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Y=!0);Y&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function rt(D){return h!==D?(n.useProgram(D),h=D,!0):!1}const ge={[Si]:n.FUNC_ADD,[wh]:n.FUNC_SUBTRACT,[Ah]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[ul]=n.MIN,ge[dl]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ge[ul]=D.MIN_EXT,ge[dl]=D.MAX_EXT)}const Ce={[Rh]:n.ZERO,[Ch]:n.ONE,[Lh]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[Oh]:n.SRC_ALPHA_SATURATE,[Uh]:n.DST_COLOR,[Ih]:n.DST_ALPHA,[Ph]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[Nh]:n.ONE_MINUS_DST_COLOR,[Dh]:n.ONE_MINUS_DST_ALPHA,[Bh]:n.CONSTANT_COLOR,[Fh]:n.ONE_MINUS_CONSTANT_COLOR,[kh]:n.CONSTANT_ALPHA,[zh]:n.ONE_MINUS_CONSTANT_ALPHA};function Re(D,ue,re,Y,se,Me,Je,ft,jt,it){if(D===ri){f===!0&&(Qe(n.BLEND),f=!1);return}if(f===!1&&(be(n.BLEND),f=!0),D!==Th){if(D!==E||it!==O){if((v!==Si||L!==Si)&&(n.blendEquation(n.FUNC_ADD),v=Si,L=Si),it)switch(D){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.ONE,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,R=null,C=null,P=null,S.set(0,0,0),b=0,E=D,O=it}return}se=se||ue,Me=Me||re,Je=Je||Y,(ue!==v||se!==L)&&(n.blendEquationSeparate(ge[ue],ge[se]),v=ue,L=se),(re!==T||Y!==R||Me!==C||Je!==P)&&(n.blendFuncSeparate(Ce[re],Ce[Y],Ce[Me],Ce[Je]),T=re,R=Y,C=Me,P=Je),(ft.equals(S)===!1||jt!==b)&&(n.blendColor(ft.r,ft.g,ft.b,jt),S.copy(ft),b=jt),E=D,O=!1}function ct(D,ue){D.side===Fn?Qe(n.CULL_FACE):be(n.CULL_FACE);let re=D.side===Bt;ue&&(re=!re),Ge(re),D.blending===cr&&D.transparent===!1?Re(ri):Re(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const Y=D.stencilWrite;l.setTest(Y),Y&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){z!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),z=D)}function We(D){D!==Eh?(be(n.CULL_FACE),D!==Z&&(D===al?n.cullFace(n.BACK):D===bh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),Z=D}function nt(D){D!==U&&(q&&n.lineWidth(D),U=D)}function yt(D,ue,re){D?(be(n.POLYGON_OFFSET_FILL),(y!==ue||w!==re)&&(n.polygonOffset(ue,re),y=ue,w=re)):Qe(n.POLYGON_OFFSET_FILL)}function Tt(D){D?be(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+I-1),N!==D&&(n.activeTexture(D),N=D)}function x(D,ue,re){re===void 0&&(N===null?re=n.TEXTURE0+I-1:re=N);let Y=G[re];Y===void 0&&(Y={type:void 0,texture:void 0},G[re]=Y),(Y.type!==D||Y.texture!==ue)&&(N!==re&&(n.activeTexture(re),N=re),n.bindTexture(D,ue||Ae[D]),Y.type=D,Y.texture=ue)}function W(){const D=G[N];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){fe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function Pe(D){xe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function Se(D,ue){let re=d.get(ue);re===void 0&&(re=new WeakMap,d.set(ue,re));let Y=re.get(D);Y===void 0&&(Y=n.getUniformBlockIndex(ue,D.name),re.set(D,Y))}function me(D,ue){const Y=d.get(ue).get(D);u.get(ue)!==Y&&(n.uniformBlockBinding(ue,Y,D.__bindingPointIndex),u.set(ue,Y))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},N=null,G={},g={},_=new WeakMap,m=[],h=null,f=!1,E=null,v=null,T=null,R=null,L=null,C=null,P=null,S=new Ue(0,0,0),b=0,O=!1,z=null,Z=null,U=null,y=null,w=null,fe.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:be,disable:Qe,bindFramebuffer:Fe,drawBuffers:k,useProgram:rt,setBlending:Re,setMaterial:ct,setFlipSided:Ge,setCullFace:We,setLineWidth:nt,setPolygonOffset:yt,setScissorTest:Tt,activeTexture:A,bindTexture:x,unbindTexture:W,compressedTexImage2D:ne,compressedTexImage3D:Q,texImage2D:te,texImage3D:et,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:Le,texStorage3D:Ke,texSubImage2D:ie,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Ne,viewport:Pe,reset:je}}function yv(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return f?new OffscreenCanvas(A,x):ua("canvas")}function v(A,x,W,ne){let Q=1;if((A.width>ne||A.height>ne)&&(Q=ne/Math.max(A.width,A.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=x?Jo:Math.floor,ve=ie(Q*A.width),oe=ie(Q*A.height);m===void 0&&(m=E(ve,oe));const he=W?E(ve,oe):m;return he.width=ve,he.height=oe,he.getContext("2d").drawImage(A,0,0,ve,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ve+"x"+oe+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function T(A){return Hl(A.width)&&Hl(A.height)}function R(A){return o?!1:A.wrapS!==dn||A.wrapT!==dn||A.minFilter!==It&&A.minFilter!==Kt}function L(A,x){return A.generateMipmaps&&x&&A.minFilter!==It&&A.minFilter!==Kt}function C(A){n.generateMipmap(A)}function P(A,x,W,ne,Q=!1){if(o===!1)return x;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=x;if(x===n.RED&&(W===n.FLOAT&&(ie=n.R32F),W===n.HALF_FLOAT&&(ie=n.R16F),W===n.UNSIGNED_BYTE&&(ie=n.R8)),x===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.R8UI),W===n.UNSIGNED_SHORT&&(ie=n.R16UI),W===n.UNSIGNED_INT&&(ie=n.R32UI),W===n.BYTE&&(ie=n.R8I),W===n.SHORT&&(ie=n.R16I),W===n.INT&&(ie=n.R32I)),x===n.RG&&(W===n.FLOAT&&(ie=n.RG32F),W===n.HALF_FLOAT&&(ie=n.RG16F),W===n.UNSIGNED_BYTE&&(ie=n.RG8)),x===n.RGBA){const ve=Q?aa:tt.getTransfer(ne);W===n.FLOAT&&(ie=n.RGBA32F),W===n.HALF_FLOAT&&(ie=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ie=ve===st?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(A,x,W){return L(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function b(A){return A===It||A===fl||A===Za?n.NEAREST:n.LINEAR}function O(A){const x=A.target;x.removeEventListener("dispose",O),Z(x),x.isVideoTexture&&_.delete(x)}function z(A){const x=A.target;x.removeEventListener("dispose",z),y(x)}function Z(A){const x=i.get(A);if(x.__webglInit===void 0)return;const W=A.source,ne=h.get(W);if(ne){const Q=ne[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(A),Object.keys(ne).length===0&&h.delete(W)}i.remove(A)}function U(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const W=A.source,ne=h.get(W);delete ne[x.__cacheKey],a.memory.textures--}function y(A){const x=A.texture,W=i.get(A),ne=i.get(x);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(W.__webglFramebuffer[Q]))for(let ie=0;ie<W.__webglFramebuffer[Q].length;ie++)n.deleteFramebuffer(W.__webglFramebuffer[Q][ie]);else n.deleteFramebuffer(W.__webglFramebuffer[Q]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[Q])}else{if(Array.isArray(W.__webglFramebuffer))for(let Q=0;Q<W.__webglFramebuffer.length;Q++)n.deleteFramebuffer(W.__webglFramebuffer[Q]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Q=0;Q<W.__webglColorRenderbuffer.length;Q++)W.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[Q]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,ie=x.length;Q<ie;Q++){const ve=i.get(x[Q]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(x[Q])}i.remove(x),i.remove(A)}let w=0;function I(){w=0}function q(){const A=w;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),w+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function H(A,x){const W=i.get(A);if(A.isVideoTexture&&yt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(W,A,x);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+x)}function N(A,x){const W=i.get(A);if(A.version>0&&W.__version!==A.version){be(W,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+x)}function G(A,x){const W=i.get(A);if(A.version>0&&W.__version!==A.version){be(W,A,x);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+x)}function ee(A,x){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Qe(W,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+x)}const ae={[$o]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},fe={[It]:n.NEAREST,[fl]:n.NEAREST_MIPMAP_NEAREST,[Za]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[tp]:n.LINEAR_MIPMAP_NEAREST,[Xr]:n.LINEAR_MIPMAP_LINEAR},xe={[pp]:n.NEVER,[Sp]:n.ALWAYS,[mp]:n.LESS,[_p]:n.LEQUAL,[gp]:n.EQUAL,[xp]:n.GEQUAL,[vp]:n.GREATER,[yp]:n.NOTEQUAL};function De(A,x,W){if(W?(n.texParameteri(A,n.TEXTURE_WRAP_S,ae[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ae[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ae[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,fe[x.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==dn||x.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,b(x.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==It&&x.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===It||x.minFilter!==Za&&x.minFilter!==Xr||x.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===qr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ae(A,x){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",O));const ne=x.source;let Q=h.get(ne);Q===void 0&&(Q={},h.set(ne,Q));const ie=V(x);if(ie!==A.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[ie].usedTimes++;const ve=Q[A.__cacheKey];ve!==void 0&&(Q[A.__cacheKey].usedTimes--,ve.usedTimes===0&&U(x)),A.__cacheKey=ie,A.__webglTexture=Q[ie].texture}return W}function be(A,x,W){let ne=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=n.TEXTURE_3D);const Q=Ae(A,x),ie=x.source;t.bindTexture(ne,A.__webglTexture,n.TEXTURE0+W);const ve=i.get(ie);if(ie.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const oe=tt.getPrimaries(tt.workingColorSpace),he=x.colorSpace===Jt?null:tt.getPrimaries(x.colorSpace),Le=x.colorSpace===Jt||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ke=R(x)&&T(x.image)===!1;let te=v(x.image,Ke,!1,u);te=Tt(x,te);const et=T(te)||o,Ne=s.convert(x.format,x.colorSpace);let Pe=s.convert(x.type),Se=P(x.internalFormat,Ne,Pe,x.colorSpace,x.isVideoTexture);De(ne,x,et);let me;const je=x.mipmaps,D=o&&x.isVideoTexture!==!0,ue=ve.__version===void 0||Q===!0,re=S(x,te,et);if(x.isDepthTexture)Se=n.DEPTH_COMPONENT,o?x.type===ii?Se=n.DEPTH_COMPONENT32F:x.type===ni?Se=n.DEPTH_COMPONENT24:x.type===Ti?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:x.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===wi&&Se===n.DEPTH_COMPONENT&&x.type!==Tc&&x.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ni,Pe=s.convert(x.type)),x.format===hr&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,x.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ti,Pe=s.convert(x.type))),ue&&(D?t.texStorage2D(n.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,Ne,Pe,null));else if(x.isDataTexture)if(je.length>0&&et){D&&ue&&t.texStorage2D(n.TEXTURE_2D,re,Se,je[0].width,je[0].height);for(let Y=0,se=je.length;Y<se;Y++)me=je[Y],D?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,Ne,Pe,me.data):t.texImage2D(n.TEXTURE_2D,Y,Se,me.width,me.height,0,Ne,Pe,me.data);x.generateMipmaps=!1}else D?(ue&&t.texStorage2D(n.TEXTURE_2D,re,Se,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Ne,Pe,te.data)):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,Ne,Pe,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Se,je[0].width,je[0].height,te.depth);for(let Y=0,se=je.length;Y<se;Y++)me=je[Y],x.format!==fn?Ne!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,te.depth,Ne,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Se,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,te.depth,Ne,Pe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Se,me.width,me.height,te.depth,0,Ne,Pe,me.data)}else{D&&ue&&t.texStorage2D(n.TEXTURE_2D,re,Se,je[0].width,je[0].height);for(let Y=0,se=je.length;Y<se;Y++)me=je[Y],x.format!==fn?Ne!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,Ne,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,Ne,Pe,me.data):t.texImage2D(n.TEXTURE_2D,Y,Se,me.width,me.height,0,Ne,Pe,me.data)}else if(x.isDataArrayTexture)D?(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Se,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ne,Pe,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,Ne,Pe,te.data);else if(x.isData3DTexture)D?(ue&&t.texStorage3D(n.TEXTURE_3D,re,Se,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ne,Pe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,Ne,Pe,te.data);else if(x.isFramebufferTexture){if(ue)if(D)t.texStorage2D(n.TEXTURE_2D,re,Se,te.width,te.height);else{let Y=te.width,se=te.height;for(let Me=0;Me<re;Me++)t.texImage2D(n.TEXTURE_2D,Me,Se,Y,se,0,Ne,Pe,null),Y>>=1,se>>=1}}else if(je.length>0&&et){D&&ue&&t.texStorage2D(n.TEXTURE_2D,re,Se,je[0].width,je[0].height);for(let Y=0,se=je.length;Y<se;Y++)me=je[Y],D?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ne,Pe,me):t.texImage2D(n.TEXTURE_2D,Y,Se,Ne,Pe,me);x.generateMipmaps=!1}else D?(ue&&t.texStorage2D(n.TEXTURE_2D,re,Se,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,Pe,te)):t.texImage2D(n.TEXTURE_2D,0,Se,Ne,Pe,te);L(x,et)&&C(ne),ve.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Qe(A,x,W){if(x.image.length!==6)return;const ne=Ae(A,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+W);const ie=i.get(Q);if(Q.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+W);const ve=tt.getPrimaries(tt.workingColorSpace),oe=x.colorSpace===Jt?null:tt.getPrimaries(x.colorSpace),he=x.colorSpace===Jt||ve===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,Ke=x.image[0]&&x.image[0].isDataTexture,te=[];for(let Y=0;Y<6;Y++)!Le&&!Ke?te[Y]=v(x.image[Y],!1,!0,l):te[Y]=Ke?x.image[Y].image:x.image[Y],te[Y]=Tt(x,te[Y]);const et=te[0],Ne=T(et)||o,Pe=s.convert(x.format,x.colorSpace),Se=s.convert(x.type),me=P(x.internalFormat,Pe,Se,x.colorSpace),je=o&&x.isVideoTexture!==!0,D=ie.__version===void 0||ne===!0;let ue=S(x,et,Ne);De(n.TEXTURE_CUBE_MAP,x,Ne);let re;if(Le){je&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,me,et.width,et.height);for(let Y=0;Y<6;Y++){re=te[Y].mipmaps;for(let se=0;se<re.length;se++){const Me=re[se];x.format!==fn?Pe!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,Me.width,Me.height,Pe,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,Me.width,Me.height,Pe,Se,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,me,Me.width,Me.height,0,Pe,Se,Me.data)}}}else{re=x.mipmaps,je&&D&&(re.length>0&&ue++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,me,te[0].width,te[0].height));for(let Y=0;Y<6;Y++)if(Ke){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,te[Y].width,te[Y].height,Pe,Se,te[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,te[Y].width,te[Y].height,0,Pe,Se,te[Y].data);for(let se=0;se<re.length;se++){const Je=re[se].image[Y].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Je.width,Je.height,Pe,Se,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,me,Je.width,Je.height,0,Pe,Se,Je.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,Se,te[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,me,Pe,Se,te[Y]);for(let se=0;se<re.length;se++){const Me=re[se];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Pe,Se,Me.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,me,Pe,Se,Me.image[Y])}}}L(x,Ne)&&C(n.TEXTURE_CUBE_MAP),ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Fe(A,x,W,ne,Q,ie){const ve=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),he=P(W.internalFormat,ve,oe,W.colorSpace);if(!i.get(x).__hasExternalTextures){const Ke=Math.max(1,x.width>>ie),te=Math.max(1,x.height>>ie);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,he,Ke,te,x.depth,0,ve,oe,null):t.texImage2D(Q,ie,he,Ke,te,0,ve,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),nt(x)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,Q,i.get(W).__webglTexture,0,We(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,Q,i.get(W).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(A,x,W){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let ne=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||nt(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ii?ne=n.DEPTH_COMPONENT32F:Q.type===ni&&(ne=n.DEPTH_COMPONENT24));const ie=We(x);nt(x)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const ne=We(x);W&&nt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,x.width,x.height):nt(x)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<ne.length;Q++){const ie=ne[Q],ve=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),he=P(ie.internalFormat,ve,oe,ie.colorSpace),Le=We(x);W&&nt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,he,x.width,x.height):nt(x)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,he,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,he,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const ne=i.get(x.depthTexture).__webglTexture,Q=We(x);if(x.depthTexture.format===wi)nt(x)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(x.depthTexture.format===hr)nt(x)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ge(A){const x=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");rt(x.__webglFramebuffer,A)}else if(W){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=n.createRenderbuffer(),k(x.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),k(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(A,x,W){const ne=i.get(A);x!==void 0&&Fe(ne.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ge(A)}function Re(A){const x=A.texture,W=i.get(A),ne=i.get(x);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=x.version,a.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,ve=T(A)||o;if(Q){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let he=0;he<x.mipmaps.length;he++)W.__webglFramebuffer[oe][he]=n.createFramebuffer()}else W.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)W.__webglFramebuffer[oe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const oe=A.texture;for(let he=0,Le=oe.length;he<Le;he++){const Ke=i.get(oe[he]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&nt(A)===!1){const oe=ie?x:[x];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const Le=oe[he];W.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[he]);const Ke=s.convert(Le.format,Le.colorSpace),te=s.convert(Le.type),et=P(Le.internalFormat,Ke,te,Le.colorSpace,A.isXRRenderTarget===!0),Ne=We(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,et,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,W.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),k(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),De(n.TEXTURE_CUBE_MAP,x,ve);for(let oe=0;oe<6;oe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)Fe(W.__webglFramebuffer[oe][he],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Fe(W.__webglFramebuffer[oe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);L(x,ve)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=A.texture;for(let he=0,Le=oe.length;he<Le;he++){const Ke=oe[he],te=i.get(Ke);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),De(n.TEXTURE_2D,Ke,ve),Fe(W.__webglFramebuffer,A,Ke,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),L(Ke,ve)&&C(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),De(oe,x,ve),o&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)Fe(W.__webglFramebuffer[he],A,x,n.COLOR_ATTACHMENT0,oe,he);else Fe(W.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,oe,0);L(x,ve)&&C(oe),t.unbindTexture()}A.depthBuffer&&ge(A)}function ct(A){const x=T(A)||o,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,Q=W.length;ne<Q;ne++){const ie=W[ne];if(L(ie,x)){const ve=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(ie).__webglTexture;t.bindTexture(ve,oe),C(ve),t.unbindTexture()}}}function Ge(A){if(o&&A.samples>0&&nt(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ne=A.height;let Q=n.COLOR_BUFFER_BIT;const ie=[],ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(A),he=A.isWebGLMultipleRenderTargets===!0;if(he)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){ie.push(n.COLOR_ATTACHMENT0+Le),A.depthBuffer&&ie.push(ve);const Ke=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ke===!1&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]),Ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),he){const te=i.get(x[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,W,ne,0,0,W,ne,Q,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]);const Ke=i.get(x[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function We(A){return Math.min(d,A.samples)}function nt(A){const x=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(A){const x=a.render.frame;_.get(A)!==x&&(_.set(A,x),A.update())}function Tt(A,x){const W=A.colorSpace,ne=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Yo||W!==Gn&&W!==Jt&&(tt.getTransfer(W)===st?o===!1?e.has("EXT_sRGB")===!0&&ne===fn?(A.format=Yo,A.minFilter=Kt,A.generateMipmaps=!1):x=Hd.sRGBToLinear(x):(ne!==fn||Q!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}this.allocateTextureUnit=q,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=Ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=nt}function xv(n,e,t){const i=t.isWebGL2;function r(s,a=Jt){let o;const c=tt.getTransfer(a);if(s===ai)return n.UNSIGNED_BYTE;if(s===Dd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ud)return n.UNSIGNED_SHORT_5_5_5_1;if(s===np)return n.BYTE;if(s===ip)return n.SHORT;if(s===Tc)return n.UNSIGNED_SHORT;if(s===Id)return n.INT;if(s===ni)return n.UNSIGNED_INT;if(s===ii)return n.FLOAT;if(s===qr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===rp)return n.ALPHA;if(s===fn)return n.RGBA;if(s===sp)return n.LUMINANCE;if(s===ap)return n.LUMINANCE_ALPHA;if(s===wi)return n.DEPTH_COMPONENT;if(s===hr)return n.DEPTH_STENCIL;if(s===Yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===op)return n.RED;if(s===Nd)return n.RED_INTEGER;if(s===cp)return n.RG;if(s===Od)return n.RG_INTEGER;if(s===Bd)return n.RGBA_INTEGER;if(s===Ya||s===Ka||s===Ja||s===Qa)if(c===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hl||s===pl||s===ml||s===gl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_l||s===vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===_l)return c===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yl||s===xl||s===Sl||s===El||s===bl||s===Ml||s===Tl||s===wl||s===Al||s===Rl||s===Cl||s===Ll||s===Pl||s===Il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===yl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===El)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ml)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Al)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ll)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Il)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eo||s===Dl||s===Ul)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===eo)return c===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ul)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===Nl||s===Ol||s===Bl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===eo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Nl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Sv extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ev={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const h=t.getJointPose(m,i),f=this._getHandJoint(l,m);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bv extends Xt{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:wi,u!==wi&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wi&&(i=ni),i===void 0&&u===hr&&(i=Ti),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=c!==void 0?c:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mv extends br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,p=null,g=null,_=null;const m=t.getContextAttributes();let h=null,f=null;const E=[],v=[],T=new Wt;T.layers.enable(1),T.viewport=new at;const R=new Wt;R.layers.enable(2),R.viewport=new at;const L=[T,R],C=new Sv;C.layers.enable(1),C.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=E[N];return G===void 0&&(G=new wo,E[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=E[N];return G===void 0&&(G=new wo,E[N]=G),G.getGripSpace()},this.getHand=function(N){let G=E[N];return G===void 0&&(G=new wo,E[N]=G),G.getHandSpace()};function b(N){const G=v.indexOf(N.inputSource);if(G===-1)return;const ee=E[G];ee!==void 0&&(ee.update(N.inputSource,N.frame,l||a),ee.dispatchEvent({type:N.type,data:N.inputSource}))}function O(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",z);for(let N=0;N<E.length;N++){const G=v[N];G!==null&&(v[N]=null,E[N].disconnect(G))}P=null,S=null,e.setRenderTarget(h),g=null,p=null,d=null,r=null,f=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",O),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:g}),f=new Ii(g.framebufferWidth,g.framebufferHeight,{format:fn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,ee=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=m.stencil?hr:wi,ee=m.stencil?Ti:ni);const fe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(fe),r.updateRenderState({layers:[p]}),f=new Ii(p.textureWidth,p.textureHeight,{format:fn,type:ai,depthTexture:new bv(p.textureWidth,p.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(N){for(let G=0;G<N.removed.length;G++){const ee=N.removed[G],ae=v.indexOf(ee);ae>=0&&(v[ae]=null,E[ae].disconnect(ee))}for(let G=0;G<N.added.length;G++){const ee=N.added[G];let ae=v.indexOf(ee);if(ae===-1){for(let xe=0;xe<E.length;xe++)if(xe>=v.length){v.push(ee),ae=xe;break}else if(v[xe]===null){v[xe]=ee,ae=xe;break}if(ae===-1)break}const fe=E[ae];fe&&fe.connect(ee)}}const Z=new F,U=new F;function y(N,G,ee){Z.setFromMatrixPosition(G.matrixWorld),U.setFromMatrixPosition(ee.matrixWorld);const ae=Z.distanceTo(U),fe=G.projectionMatrix.elements,xe=ee.projectionMatrix.elements,De=fe[14]/(fe[10]-1),Ae=fe[14]/(fe[10]+1),be=(fe[9]+1)/fe[5],Qe=(fe[9]-1)/fe[5],Fe=(fe[8]-1)/fe[0],k=(xe[8]+1)/xe[0],rt=De*Fe,ge=De*k,Ce=ae/(-Fe+k),Re=Ce*-Fe;G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Re),N.translateZ(Ce),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const ct=De+Ce,Ge=Ae+Ce,We=rt-Re,nt=ge+(ae-Re),yt=be*Ae/Ge*ct,Tt=Qe*Ae/Ge*ct;N.projectionMatrix.makePerspective(We,nt,yt,Tt,ct,Ge),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function w(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=R.near=T.near=N.near,C.far=R.far=T.far=N.far,(P!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,S=C.far);const G=N.parent,ee=C.cameras;w(C,G);for(let ae=0;ae<ee.length;ae++)w(ee[ae],G);ee.length===2?y(C,T,R):C.projectionMatrix.copy(T.projectionMatrix),I(N,C,G)};function I(N,G,ee){ee===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(ee.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ko*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(N){c=N,p!==null&&(p.fixedFoveation=N),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=N)};let q=null;function V(N,G){if(u=G.getViewerPose(l||a),_=G,u!==null){const ee=u.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let ae=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,ae=!0);for(let fe=0;fe<ee.length;fe++){const xe=ee[fe];let De=null;if(g!==null)De=g.getViewport(xe);else{const be=d.getViewSubImage(p,xe);De=be.viewport,fe===0&&(e.setRenderTargetTextures(f,be.colorTexture,p.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(f))}let Ae=L[fe];Ae===void 0&&(Ae=new Wt,Ae.layers.enable(fe),Ae.viewport=new at,L[fe]=Ae),Ae.matrix.fromArray(xe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(xe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(De.x,De.y,De.width,De.height),fe===0&&(C.matrix.copy(Ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ae===!0&&C.cameras.push(Ae)}}for(let ee=0;ee<E.length;ee++){const ae=v[ee],fe=E[ee];ae!==null&&fe!==void 0&&fe.update(ae,G,l||a)}q&&q(N,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),_=null}const H=new Jd;H.setAnimationLoop(V),this.setAnimationLoop=function(N){q=N},this.dispose=function(){}}}function Tv(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,Zd(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,E,v,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(h,f):f.isMeshToonMaterial?(s(h,f),d(h,f)):f.isMeshPhongMaterial?(s(h,f),u(h,f)):f.isMeshStandardMaterial?(s(h,f),p(h,f),f.isMeshPhysicalMaterial&&g(h,f,T)):f.isMeshMatcapMaterial?(s(h,f),_(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),m(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?c(h,f,E,v):f.isSpriteMaterial?l(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Bt&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Bt&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const E=e.get(f).envMap;if(E&&(h.envMap.value=E,h.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap){h.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,h.lightMapTransform)}f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function c(h,f,E,v){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*E,h.scale.value=v*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function l(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function d(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),e.get(f).envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function g(h,f,E){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&h.clearcoatNormalScale.value.negate())),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,f){f.matcap&&(h.matcap.value=f.matcap)}function m(h,f){const E=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wv(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,v){const T=v.program;i.uniformBlockBinding(E,T)}function l(E,v){let T=r[E.id];T===void 0&&(_(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",h));const R=v.program;i.updateUBOMapping(E,R);const L=e.render.frame;s[E.id]!==L&&(p(E),s[E.id]=L)}function u(E){const v=d();E.__bindingPointIndex=v;const T=n.createBuffer(),R=E.__size,L=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const v=r[E.id],T=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,C=T.length;L<C;L++){const P=T[L];if(g(P,L,R)===!0){const S=P.__offset,b=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let z=0;z<b.length;z++){const Z=b[z],U=m(Z);typeof Z=="number"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,S+O,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=Z.elements[0],P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=Z.elements[0],P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=Z.elements[0]):(Z.toArray(P.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,v,T){const R=E.value;if(T[v]===void 0){if(typeof R=="number")T[v]=R;else{const L=Array.isArray(R)?R:[R],C=[];for(let P=0;P<L.length;P++)C.push(L[P].clone());T[v]=C}return!0}else if(typeof R=="number"){if(T[v]!==R)return T[v]=R,!0}else{const L=Array.isArray(T[v])?T[v]:[T[v]],C=Array.isArray(R)?R:[R];for(let P=0;P<L.length;P++){const S=L[P];if(S.equals(C[P])===!1)return S.copy(C[P]),!0}}return!1}function _(E){const v=E.uniforms;let T=0;const R=16;let L=0;for(let C=0,P=v.length;C<P;C++){const S=v[C],b={boundary:0,storage:0},O=Array.isArray(S.value)?S.value:[S.value];for(let z=0,Z=O.length;z<Z;z++){const U=O[z],y=m(U);b.boundary+=y.boundary,b.storage+=y.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=T,C>0){L=T%R;const z=R-L;L!==0&&z-b.boundary<0&&(T+=R-L,S.__offset=T)}T+=b.storage}return L=T%R,L>0&&(T+=R-L),E.__size=T,E.__cache={},this}function m(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function h(E){const v=E.target;v.removeEventListener("dispose",h);const T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class rf{constructor(e={}){const{canvas:t=bp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let T=!1,R=0,L=0,C=null,P=-1,S=null;const b=new at,O=new at;let z=null;const Z=new Ue(0);let U=0,y=t.width,w=t.height,I=1,q=null,V=null;const H=new at(0,0,y,w),N=new at(0,0,y,w);let G=!1;const ee=new Cc;let ae=!1,fe=!1,xe=null;const De=new mt,Ae=new Ye,be=new F,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return C===null?I:1}let k=i;function rt(M,B){for(let X=0;X<M.length;X++){const j=M[X],$=t.getContext(j,B);if($!==null)return $}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ue,!1),k===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),k=rt(B,M),k===null)throw rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ge,Ce,Re,ct,Ge,We,nt,yt,Tt,A,x,W,ne,Q,ie,ve,oe,he,Le,Ke,te,et,Ne,Pe;function Se(){ge=new O_(k),Ce=new C_(k,ge,e),ge.init(Ce),et=new xv(k,ge,Ce),Re=new vv(k,ge,Ce),ct=new k_(k),Ge=new rv,We=new yv(k,ge,Re,Ge,Ce,et,ct),nt=new P_(v),yt=new N_(v),Tt=new $p(k,Ce),Ne=new A_(k,ge,Tt,Ce),A=new B_(k,Tt,ct,Ne),x=new G_(k,A,Tt,ct),Le=new V_(k,Ce,We),ve=new L_(Ge),W=new iv(v,nt,yt,ge,Ce,Ne,ve),ne=new Tv(v,Ge),Q=new av,ie=new fv(ge,Ce),he=new w_(v,nt,yt,Re,x,p,c),oe=new _v(v,x,Ce),Pe=new wv(k,ct,Ce,Re),Ke=new R_(k,ge,ct,Ce),te=new F_(k,ge,ct,Ce),ct.programs=W.programs,v.capabilities=Ce,v.extensions=ge,v.properties=Ge,v.renderLists=Q,v.shadowMap=oe,v.state=Re,v.info=ct}Se();const me=new Mv(v,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(y,w,!1))},this.getSize=function(M){return M.set(y,w)},this.setSize=function(M,B,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}y=M,w=B,t.width=Math.floor(M*I),t.height=Math.floor(B*I),X===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(y*I,w*I).floor()},this.setDrawingBufferSize=function(M,B,X){y=M,w=B,I=X,t.width=Math.floor(M*X),t.height=Math.floor(B*X),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(H)},this.setViewport=function(M,B,X,j){M.isVector4?H.set(M.x,M.y,M.z,M.w):H.set(M,B,X,j),Re.viewport(b.copy(H).multiplyScalar(I).floor())},this.getScissor=function(M){return M.copy(N)},this.setScissor=function(M,B,X,j){M.isVector4?N.set(M.x,M.y,M.z,M.w):N.set(M,B,X,j),Re.scissor(O.copy(N).multiplyScalar(I).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(M){Re.setScissorTest(G=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(M=!0,B=!0,X=!0){let j=0;if(M){let $=!1;if(C!==null){const pe=C.texture.format;$=pe===Bd||pe===Od||pe===Nd}if($){const pe=C.texture.type,ye=pe===ai||pe===ni||pe===Tc||pe===Ti||pe===Dd||pe===Ud,Te=he.getClearColor(),Ie=he.getClearAlpha(),Ve=Te.r,Oe=Te.g,ke=Te.b;ye?(g[0]=Ve,g[1]=Oe,g[2]=ke,g[3]=Ie,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Ve,_[1]=Oe,_[2]=ke,_[3]=Ie,k.clearBufferiv(k.COLOR,0,_))}else j|=k.COLOR_BUFFER_BIT}B&&(j|=k.DEPTH_BUFFER_BIT),X&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Q.dispose(),ie.dispose(),Ge.dispose(),nt.dispose(),yt.dispose(),x.dispose(),Ne.dispose(),Pe.dispose(),W.dispose(),me.dispose(),me.removeEventListener("sessionstart",jt),me.removeEventListener("sessionend",it),xe&&(xe.dispose(),xe=null),Ct.stop()};function je(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=ct.autoReset,B=oe.enabled,X=oe.autoUpdate,j=oe.needsUpdate,$=oe.type;Se(),ct.autoReset=M,oe.enabled=B,oe.autoUpdate=X,oe.needsUpdate=j,oe.type=$}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const B=M.target;B.removeEventListener("dispose",re),Y(B)}function Y(M){se(M),Ge.remove(M)}function se(M){const B=Ge.get(M).programs;B!==void 0&&(B.forEach(function(X){W.releaseProgram(X)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,X,j,$,pe){B===null&&(B=Qe);const ye=$.isMesh&&$.matrixWorld.determinant()<0,Te=_h(M,B,X,j,$);Re.setMaterial(j,ye);let Ie=X.index,Ve=1;if(j.wireframe===!0){if(Ie=A.getWireframeAttribute(X),Ie===void 0)return;Ve=2}const Oe=X.drawRange,ke=X.attributes.position;let ut=Oe.start*Ve,zt=(Oe.start+Oe.count)*Ve;pe!==null&&(ut=Math.max(ut,pe.start*Ve),zt=Math.min(zt,(pe.start+pe.count)*Ve)),Ie!==null?(ut=Math.max(ut,0),zt=Math.min(zt,Ie.count)):ke!=null&&(ut=Math.max(ut,0),zt=Math.min(zt,ke.count));const xt=zt-ut;if(xt<0||xt===1/0)return;Ne.setup($,j,Te,X,Ie);let An,lt=Ke;if(Ie!==null&&(An=Tt.get(Ie),lt=te,lt.setIndex(An)),$.isMesh)j.wireframe===!0?(Re.setLineWidth(j.wireframeLinewidth*Fe()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if($.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),Re.setLineWidth(qe*Fe()),$.isLineSegments?lt.setMode(k.LINES):$.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else $.isPoints?lt.setMode(k.POINTS):$.isSprite&&lt.setMode(k.TRIANGLES);if($.isInstancedMesh)lt.renderInstances(ut,xt,$.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xa=Math.min(X.instanceCount,qe);lt.renderInstances(ut,xt,Xa)}else lt.render(ut,xt)};function Me(M,B,X){M.transparent===!0&&M.side===Fn&&M.forceSinglePass===!1?(M.side=Bt,M.needsUpdate=!0,Ts(M,B,X),M.side=oi,M.needsUpdate=!0,Ts(M,B,X),M.side=Fn):Ts(M,B,X)}this.compile=function(M,B,X=null){X===null&&(X=M),h=ie.get(X),h.init(),E.push(h),X.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),M!==X&&M.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights(v._useLegacyLights);const j=new Set;return M.traverse(function($){const pe=$.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Te=pe[ye];Me(Te,X,$),j.add(Te)}else Me(pe,X,$),j.add(pe)}),E.pop(),h=null,j},this.compileAsync=function(M,B,X=null){const j=this.compile(M,B,X);return new Promise($=>{function pe(){if(j.forEach(function(ye){Ge.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){$(M);return}setTimeout(pe,10)}ge.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Je=null;function ft(M){Je&&Je(M)}function jt(){Ct.stop()}function it(){Ct.start()}const Ct=new Jd;Ct.setAnimationLoop(ft),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(M){Je=M,me.setAnimationLoop(M),M===null?Ct.stop():Ct.start()},me.addEventListener("sessionstart",jt),me.addEventListener("sessionend",it),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,B,C),h=ie.get(M,E.length),h.init(),E.push(h),De.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(De),fe=this.localClippingEnabled,ae=ve.init(this.clippingPlanes,fe),m=Q.get(M,f.length),m.init(),f.push(m),gn(M,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(q,V),this.info.render.frame++,ae===!0&&ve.beginShadows();const X=h.state.shadowsArray;if(oe.render(X,M,B),ae===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(m,M),h.setupLights(v._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let $=0,pe=j.length;$<pe;$++){const ye=j[$];el(m,M,ye,ye.viewport)}}else el(m,M,B);C!==null&&(We.updateMultisampleRenderTarget(C),We.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(v,M,B),Ne.resetDefaultState(),P=-1,S=null,E.pop(),E.length>0?h=E[E.length-1]:h=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function gn(M,B,X,j){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){j&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);const ye=x.update(M),Te=M.material;Te.visible&&m.push(M,ye,Te,X,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){const ye=x.update(M),Te=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),be.copy(ye.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(Te)){const Ie=ye.groups;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++){const ke=Ie[Ve],ut=Te[ke.materialIndex];ut&&ut.visible&&m.push(M,ye,ut,X,be.z,ke)}}else Te.visible&&m.push(M,ye,Te,X,be.z,null)}}const pe=M.children;for(let ye=0,Te=pe.length;ye<Te;ye++)gn(pe[ye],B,X,j)}function el(M,B,X,j){const $=M.opaque,pe=M.transmissive,ye=M.transparent;h.setupLightsView(X),ae===!0&&ve.setGlobalState(v.clippingPlanes,X),pe.length>0&&gh($,pe,B,X),j&&Re.viewport(b.copy(j)),$.length>0&&Ms($,B,X),pe.length>0&&Ms(pe,B,X),ye.length>0&&Ms(ye,B,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function gh(M,B,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const pe=Ce.isWebGL2;xe===null&&(xe=new Ii(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?qr:ai,minFilter:Xr,samples:pe?4:0})),v.getDrawingBufferSize(Ae),pe?xe.setSize(Ae.x,Ae.y):xe.setSize(Jo(Ae.x),Jo(Ae.y));const ye=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(Z),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=si,Ms(M,X,j),We.updateMultisampleRenderTarget(xe),We.updateRenderTargetMipmap(xe);let Ie=!1;for(let Ve=0,Oe=B.length;Ve<Oe;Ve++){const ke=B[Ve],ut=ke.object,zt=ke.geometry,xt=ke.material,An=ke.group;if(xt.side===Fn&&ut.layers.test(j.layers)){const lt=xt.side;xt.side=Bt,xt.needsUpdate=!0,tl(ut,X,j,zt,xt,An),xt.side=lt,xt.needsUpdate=!0,Ie=!0}}Ie===!0&&(We.updateMultisampleRenderTarget(xe),We.updateRenderTargetMipmap(xe)),v.setRenderTarget(ye),v.setClearColor(Z,U),v.toneMapping=Te}function Ms(M,B,X){const j=B.isScene===!0?B.overrideMaterial:null;for(let $=0,pe=M.length;$<pe;$++){const ye=M[$],Te=ye.object,Ie=ye.geometry,Ve=j===null?ye.material:j,Oe=ye.group;Te.layers.test(X.layers)&&tl(Te,B,X,Ie,Ve,Oe)}}function tl(M,B,X,j,$,pe){M.onBeforeRender(v,B,X,j,$,pe),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(v,B,X,j,M,pe),$.transparent===!0&&$.side===Fn&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,v.renderBufferDirect(X,B,j,$,M,pe),$.side=oi,$.needsUpdate=!0,v.renderBufferDirect(X,B,j,$,M,pe),$.side=Fn):v.renderBufferDirect(X,B,j,$,M,pe),M.onAfterRender(v,B,X,j,$,pe)}function Ts(M,B,X){B.isScene!==!0&&(B=Qe);const j=Ge.get(M),$=h.state.lights,pe=h.state.shadowsArray,ye=$.state.version,Te=W.getParameters(M,$.state,pe,B,X),Ie=W.getProgramCacheKey(Te);let Ve=j.programs;j.environment=M.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(M.isMeshStandardMaterial?yt:nt).get(M.envMap||j.environment),Ve===void 0&&(M.addEventListener("dispose",re),Ve=new Map,j.programs=Ve);let Oe=Ve.get(Ie);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===ye)return il(M,Te),Oe}else Te.uniforms=W.getUniforms(M),M.onBuild(X,Te,v),M.onBeforeCompile(Te,v),Oe=W.acquireProgram(Te,Ie),Ve.set(Ie,Oe),j.uniforms=Te.uniforms;const ke=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=ve.uniform),il(M,Te),j.needsLights=yh(M),j.lightsStateVersion=ye,j.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMap.value=$.state.directionalShadowMap,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotShadowMap.value=$.state.spotShadowMap,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMap.value=$.state.pointShadowMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function nl(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=ta.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function il(M,B){const X=Ge.get(M);X.outputColorSpace=B.outputColorSpace,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function _h(M,B,X,j,$){B.isScene!==!0&&(B=Qe),We.resetTextureUnits();const pe=B.fog,ye=j.isMeshStandardMaterial?B.environment:null,Te=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gn,Ie=(j.isMeshStandardMaterial?yt:nt).get(j.envMap||ye),Ve=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color;let xt=si;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=v.toneMapping);const An=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=An!==void 0?An.length:0,qe=Ge.get(j),Xa=h.state.lights;if(ae===!0&&(fe===!0||M!==S)){const Ht=M===S&&j.id===P;ve.setState(j,M,Ht)}let ht=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Xa.state.version||qe.outputColorSpace!==Te||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||qe.envMap!==Ie||j.fog===!0&&qe.fog!==pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ve.numPlanes||qe.numIntersection!==ve.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Oe||qe.morphTargets!==ke||qe.morphNormals!==ut||qe.morphColors!==zt||qe.toneMapping!==xt||Ce.isWebGL2===!0&&qe.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,qe.__version=j.version);let fi=qe.currentProgram;ht===!0&&(fi=Ts(j,B,$));let rl=!1,Ar=!1,qa=!1;const Lt=fi.getUniforms(),hi=qe.uniforms;if(Re.useProgram(fi.program)&&(rl=!0,Ar=!0,qa=!0),j.id!==P&&(P=j.id,Ar=!0),rl||S!==M){Lt.setValue(k,"projectionMatrix",M.projectionMatrix),Lt.setValue(k,"viewMatrix",M.matrixWorldInverse);const Ht=Lt.map.cameraPosition;Ht!==void 0&&Ht.setValue(k,be.setFromMatrixPosition(M.matrixWorld)),Ce.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ar=!0,qa=!0)}if($.isSkinnedMesh){Lt.setOptional(k,$,"bindMatrix"),Lt.setOptional(k,$,"bindMatrixInverse");const Ht=$.skeleton;Ht&&(Ce.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Lt.setValue(k,"boneTexture",Ht.boneTexture,We),Lt.setValue(k,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ja=X.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0&&Ce.isWebGL2===!0)&&Le.update($,X,fi),(Ar||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,Lt.setValue(k,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(hi.envMap.value=Ie,hi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Ar&&(Lt.setValue(k,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&vh(hi,qa),pe&&j.fog===!0&&ne.refreshFogUniforms(hi,pe),ne.refreshMaterialUniforms(hi,j,I,w,xe),ta.upload(k,nl(qe),hi,We)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ta.upload(k,nl(qe),hi,We),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Lt.setValue(k,"center",$.center),Lt.setValue(k,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(k,"normalMatrix",$.normalMatrix),Lt.setValue(k,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let $a=0,xh=Ht.length;$a<xh;$a++)if(Ce.isWebGL2){const sl=Ht[$a];Pe.update(sl,fi),Pe.bind(sl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function vh(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function yh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,B,X){Ge.get(M.texture).__webglTexture=B,Ge.get(M.depthTexture).__webglTexture=X;const j=Ge.get(M);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,B){const X=Ge.get(M);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,X=0){C=M,R=B,L=X;let j=!0,$=null,pe=!1,ye=!1;if(M){const Ie=Ge.get(M);Ie.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Ie.__webglFramebuffer===void 0?We.setupRenderTarget(M):Ie.__hasExternalTextures&&We.rebindTextures(M,Ge.get(M.texture).__webglTexture,Ge.get(M.depthTexture).__webglTexture);const Ve=M.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const Oe=Ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?$=Oe[B][X]:$=Oe[B],pe=!0):Ce.isWebGL2&&M.samples>0&&We.useMultisampledRTT(M)===!1?$=Ge.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[X]:$=Oe,b.copy(M.viewport),O.copy(M.scissor),z=M.scissorTest}else b.copy(H).multiplyScalar(I).floor(),O.copy(N).multiplyScalar(I).floor(),z=G;if(Re.bindFramebuffer(k.FRAMEBUFFER,$)&&Ce.drawBuffers&&j&&Re.drawBuffers(M,$),Re.viewport(b),Re.scissor(O),Re.setScissorTest(z),pe){const Ie=Ge.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ie.__webglTexture,X)}else if(ye){const Ie=Ge.get(M.texture),Ve=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Ve)}P=-1},this.readRenderTargetPixels=function(M,B,X,j,$,pe,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Re.bindFramebuffer(k.FRAMEBUFFER,Te);try{const Ie=M.texture,Ve=Ie.format,Oe=Ie.type;if(Ve!==fn&&et.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===qr&&(ge.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Oe!==ai&&et.convert(Oe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===ii&&(Ce.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-j&&X>=0&&X<=M.height-$&&k.readPixels(B,X,j,$,et.convert(Ve),et.convert(Oe),pe)}finally{const Ie=C!==null?Ge.get(C).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(M,B,X=0){const j=Math.pow(2,-X),$=Math.floor(B.image.width*j),pe=Math.floor(B.image.height*j);We.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,M.x,M.y,$,pe),Re.unbindTexture()},this.copyTextureToTexture=function(M,B,X,j=0){const $=B.image.width,pe=B.image.height,ye=et.convert(X.format),Te=et.convert(X.type);We.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,M.x,M.y,$,pe,ye,Te,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,M.x,M.y,B.mipmaps[0].width,B.mipmaps[0].height,ye,B.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,M.x,M.y,ye,Te,B.image),j===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(M,B,X,j,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,Te=M.max.z-M.min.z+1,Ie=et.convert(j.format),Ve=et.convert(j.type);let Oe;if(j.isData3DTexture)We.setTexture3D(j,0),Oe=k.TEXTURE_3D;else if(j.isDataArrayTexture)We.setTexture2DArray(j,0),Oe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),ut=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zt=k.getParameter(k.UNPACK_SKIP_PIXELS),xt=k.getParameter(k.UNPACK_SKIP_ROWS),An=k.getParameter(k.UNPACK_SKIP_IMAGES),lt=X.isCompressedTexture?X.mipmaps[0]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,lt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,M.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,M.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Oe,$,B.x,B.y,B.z,pe,ye,Te,Ie,Ve,lt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Oe,$,B.x,B.y,B.z,pe,ye,Te,Ie,lt.data)):k.texSubImage3D(Oe,$,B.x,B.y,B.z,pe,ye,Te,Ie,Ve,lt),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,xt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,An),$===0&&j.generateMipmaps&&k.generateMipmap(Oe),Re.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),Re.unbindTexture()},this.resetState=function(){R=0,L=0,C=null,Re.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wc?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ua?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Ai:Fd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?Mt:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Av extends rf{}Av.prototype.isWebGL1Renderer=!0;class Rv extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cv extends _s{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sf extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ao=new mt,wu=new F,Au=new F;class Lv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ru=new mt,Dr=new F,Ro=new F;class Pv extends Lv{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Dr),Ro.copy(i.position),Ro.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ro),i.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Ru.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class da extends sf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Pv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iv extends sf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dv{constructor(e,t,i=0,r=1/0){this.ray=new Wd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ec(e,this,i,t),i.sort(Cu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ec(e[r],this,i,t);return i.sort(Cu),i}}function Cu(n,e){return n.distance-e.distance}function ec(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ec(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);function Co(n,e,t){return n+(e-n)*t}function $s(n,e){e*=n.length-1;let t=Math.floor(e),i=e-t,r=n[t],s=n[t<n.length-1?t+1:t];return new Ue(Co(r.r,s.r,i),Co(r.g,s.g,i),Co(r.b,s.b,i))}const Uv=268841,Lo=0,Nv=10,Lu=8,Zs=5,Pu=70;function Ov(){const n=new Rv,e=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3),t=new rf,i=new Fr;e.position.set(0,Nv,Lo),e.lookAt(0,0,0),n.background=new Ue(Uv);let r=new Iv(16777215,.3);n.add(r);let s=new da(16777215,Pu);s.position.set(-Zs,Lu,-Zs-Lo);let a=new da(16777215,Pu);return a.position.set(Zs,Lu,Zs-Lo),i.add(s),i.add(a),n.add(i),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement),addEventListener("resize",o=>{t.setSize(window.innerWidth,window.innerHeight),e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix()}),{scene:n,camera:e,renderer:t,lights:i}}const Iu=[new Ue(0,.7,.6),new Ue(1,1,1)],Bv=[new Ue(.3,.3,.3),new Ue(.5,.5,0),new Ue(1,0,0)],Fv=new Ue(.2,.7,.3),Du=new Ue(.2,1,.5),Qn=1,tr=.3,ei=.2,kv=2,zv=.1,Hv=.04;class Vv{constructor(e,t){this.nodes=new Map,this.transactions=new Map,this.addressCount=0,this.loadedBlocks=new Map,this.loadingBlocks=new Map,this.loadedBars=new Map,this.blocksToClear=[],this.scene=e,this.blocks=[],this.canDrag=!0,this.canHover=!0,this.displayFrom,this.displayTo,this.displayAmount,this.maxRange=0,this.nodeArray,this.toggleSort=0,this.toggleScale=0,this.isLoaded=!1,this.dataToLoad,this.tempBlocks=[],this.viewTransitioning=!1,this.camera=t,this.allTimeMax=.01,this.allTimeMaxNumTrans=1,this.allTimeMaxBar=.01,this.allTimeMaxNumTransBar=1,this.symmetrical=!1}addNode(e){this.nodes.set(e,new Gv(e))}addTransaction(e,t,i,r){let s=this.nodes.get(e),a=this.nodes.get(t);s.addTransactionIn(a,i),a.addTransactionOut(s,i);let o=[e,t].toString();if(this.transactions.get(o)||this.transactions.set(o,[]),this.transactions.get(o).push({amount:i,time:r}),this.symmetrical){a.addTransactionIn(s,i),s.addTransactionOut(a,i);let u=[t,e].toString();this.transactions.get(u)||this.transactions.set(u,[]),this.transactions.get(u).push({amount:i,time:r})}let c=0,l=0;this.transactions.get(o).forEach(u=>{c+=u.amount,l+=1}),c>this.allTimeMax&&(this.allTimeMax=c),l>this.allTimeMaxNumTrans&&(this.allTimeMaxNumTrans=l),s.totalTransactionsValueOut>this.allTimeMaxBar&&(this.allTimeMaxBar=s.totalTransactionsValueOut),a.totalTransactionsValueOut>this.allTimeMaxBar&&(this.allTimeMaxBar=a.totalTransactionsValueOut),s.numTransactionsOut>this.allTimeMaxNumTransBar&&(this.allTimeMaxNumTransBar=s.numTransactionsOut),a.numTransactionsOut>this.allTimeMaxNumTransBar&&(this.allTimeMaxNumTransBar=a.numTransactionsOut)}getTransactions(e,t){let i=this.transactions.get([e,t].toString());return i||[]}getTransactionsValue(e,t){let i=this.transactions.get([e,t].toString());if(i){let r=0;return i.forEach(s=>r+=s.amount),r}else return 0}getTotalNumTransactions(e,t){let i=this.transactions.get([e,t].toString());return i?i.length:0}compareNodeNumTransactions(e,t){return t.node.numTransactionsOut-e.node.numTransactionsOut}compareNodeTotals(e,t){return t.node.totalTransactionsValueOut-e.node.totalTransactionsValueOut}compareLargestTransaction(e,t){return Math.max(t.node.largestTransactionOut,t.node.largestTransactionIn)-Math.max(e.node.largestTransactionOut,e.node.largestTransactionIn)}loadData(e,t=-1,i=-1){this.dataToLoad=e,this.isLoaded=!1}loadDataHelper(e,t=-1,i=-1){this.allTimeMax=.01,this.allTimeMaxNumTrans=1,this.allTimeMaxBar=.01,this.allTimeMaxNumTransBar=1;let r;t>=0&&i>=0?r=e.transactions.filter(s=>{let a=new Date(s.timestamp);return a>t&&a<i}):r=e.transactions,e.nodes.forEach(s=>this.addNode(s)),r.forEach(s=>{this.nodes.get(s.from)&&this.nodes.get(s.to)?this.addTransaction(s.from,s.to,Number(s.amount),s.timestamp):console.log("failed to add trans")}),console.log("all time max num trans:",this.allTimeMaxNumTrans),this.nodeArray=Array.from(this.nodes,([s,a])=>({id:s,node:a})),this.toggleSort==0?this.nodeArray.sort(this.compareLargestTransaction):this.nodeArray.sort(this.compareNodeNumTransactions),console.log(this.nodeArray),console.log("all time max:",this.allTimeMax),this.isLoaded=!0}loadBlocks(e,t,i,r=!1){if(!this.isLoaded)return;let s=e+i<this.nodeArray.length?e+i:this.nodeArray.length,a=t+i<this.nodeArray.length?t+i:this.nodeArray.length;for(let o=e;o<s;o++)for(let c=t;c<a;c++)if(!this.loadedBlocks.get([o,c].toString())){let l=this.getTransactions(this.nodeArray[o].id,this.nodeArray[c].id),u=this.getTotalNumTransactions(this.nodeArray[o].id,this.nodeArray[c].id),d=this.getTransactionsValue(this.nodeArray[o].id,this.nodeArray[c].id),p=this.toggleSort==1?u:d,g=this.toggleSort==1?this.allTimeMaxNumTrans:this.allTimeMax,_=new Po(this.nodeArray[o].id,this.nodeArray[c].id,l,p,g);if(_.setPosition(o*(Qn+tr),c*(Qn+tr)),_.pos=[o,c],!r){let m=Math.abs(this.camera.position.x-o*(Qn+tr)),h=Math.abs(this.camera.position.z-c*(Qn+tr)),f=Math.sqrt(m*m+h*h);_.getCube().material.opacity=-zv*f}p>=this.allTimeMax&&console.log(p),this.scene.add(_.getCube()),console.log("load add"),this.loadedBlocks.set([o,c].toString(),_),this.loadingBlocks.set([o,c].toString(),_),this.blocks.push(_)}}createTempBlocks(){Array.from(this.loadedBlocks,([t,i])=>({key:t,val:i})).forEach(t=>{let i=t.val,r=new Po(0,0,[],0,1);r.setPosition(i.getCube().position.x,i.getCube().position.z),r.recolor(0),this.scene.add(r.getCube()),this.tempBlocks.push(r)})}clearTempBlocks(){this.tempBlocks.forEach(e=>{this.scene.remove(e.getCube())}),this.tempBlocks=[]}unloadBlocks(e,t,i){if(!this.isLoaded)return;let r=e+i<this.nodeArray.length?e+i:this.nodeArray.length,s=t+i<this.nodeArray.length?t+i:this.nodeArray.length;for(let a=e;a<r;a++)for(let o=t;o<s;o++)if(this.loadedBlocks.get([a,o].toString())){let c=this.loadedBlocks.get([a,o].toString());this.scene.remove(c.getCube()),this.blocks.splice(this.blocks.indexOf(c),1),this.loadedBlocks.delete([a,o].toString()),this.loadingBlocks.delete([a,o].toString())}}loadBars(e,t){if(!this.isLoaded)return;let i=e+t<this.nodeArray.length?e+t:this.nodeArray.length;for(let r=e;r<i;r++)if(!this.loadedBlocks.get([r,0].toString())){let s=0,a=0,o=[];Array.from(this.nodeArray[r].node.transactionsOut,([p,g])=>({key:p,value:g})).forEach(p=>{p.value.forEach(g=>{s+=g.amount,a+=1,o.push({to:p.key,amount:g.amount,time:g.time})})});let l=this.toggleSort==1?a:s,u=this.toggleSort==1?this.allTimeMaxNumTransBar:this.allTimeMaxBar,d=new Po(this.nodeArray[r].id,null,o,l,u);d.setPosition(r*(Qn+tr),0*(Qn+tr)),d.pos=[r,0],this.scene.add(d.getCube()),this.loadedBlocks.set([r,0].toString(),d),this.loadingBlocks.set([r,0].toString(),d),this.blocks.push(d)}}getBlocks(){return this.blocks}clearBlocks(){for(let e=0;e<this.blocks.length;e++)this.scene.remove(this.blocks[e].getCube());this.blocks=[],this.loadedBlocks=new Map}clearBlocksHelper(){if(this.clearing)if(console.log("clearing"),this.blocksToClear.length>0){this.blocksToClear.forEach(e=>{this.scene.remove(e.getCube())});for(let e=0;e<this.blocksToClear.length;e++){let t=this.blocksToClear[e];t.getCube().material.opacity>0&&(t.getCube().material.opacity-=.01)}}else console.log("all blocks cleared"),this.clearing=!1,this.blocks=[],this.loadedBlocks=new Map}clearData(){for(let e=0;e<this.blocks.length;e++)this.scene.remove(this.blocks[e].getCube());this.blocks=[],this.loadedBlocks=new Map,this.nodes=new Map,this.transactions=new Map,this.nodeArray=[],this.allTimeMax=.01}setVerticalOpacities(){Array.from(this.loadedBlocks,([t,i])=>({key:t,val:i})).forEach(t=>{let i=t.val,r=i.pos[1];i.getCube().material.opacity=3-.2*r})}update(){if(this.isLoaded){let e=Array.from(this.loadingBlocks,([t,i])=>({key:t,val:i}));e.length>0,e.forEach(t=>{let i=t.val,r=i.yScale+(i.finalScale-i.yScale)*.1;i.getCube().material.opacity<=1&&(i.getCube().material.opacity+=.05),i.yScale<i.finalScale&&(i.getCube().geometry.scale(1,1/i.yScale,1),i.yScale=r,i.getCube().position.y=i.yScale/2,i.getCube().geometry.scale(1,i.yScale,1),i.recolor(i.yScale/i.finalScale*i.value/i.globalMax)),i.finalScale-r<.1&&i.getCube().material.opacity>=1&&(i.getCube().material.opacity=1,this.loadingBlocks.delete(t.key.toString()))}),e.length==0&&this.clearTempBlocks()}else{console.log("unloading");let e=Array.from(this.loadedBlocks,([t,i])=>({key:t,val:i}));e.forEach(t=>{let i=t.val,r=ei+(i.yScale-ei)*.9;i.getCube().material.opacity>0&&(i.getCube().material.opacity-=Hv),i.yScale>ei&&(i.getCube().geometry.scale(1,1/i.yScale,1),r-.1<ei&&(r=ei),i.yScale=r,i.getCube().position.y=i.yScale/2,i.getCube().geometry.scale(1,i.yScale,1),i.recolor(i.yScale/i.finalScale*i.value/this.allTimeMax)),r-.1<ei&&i.getCube().material.opacity<=0&&this.loadedBlocks.delete(t.key)}),e.length==0&&this.dataToLoad&&(this.clearData(),console.log("begin new data load"),this.loadDataHelper(this.dataToLoad),this.isLoaded=!0)}}beginTransition(){this.deleting=!0}}class Po{constructor(e,t,i,r,s){this.transactions=i,this.value=r,this.globalMax=s,this.node1=e,this.node2=t,this.color=$s(Iu,0),this.hlColor=new Ue("white"),this.selected=!1,this.yScale=ei,this.finalScale=this.value/this.globalMax*kv+ei,this.pos=[0,0];let a=new Mr(Qn,1,Qn),o=new Cv({color:this.color,transparent:!0,opacity:1});this.cube=new Hn(a,o),this.cube.geometry.scale(1,this.yScale,1),this.cube.position.y=this.yScale/2,this.recolor(0)}recolor(e){e==0?this.color=$s(Bv,0):this.color=$s(Iu,e),this.cube.material.color=this.color,this.hlColor=$s([this.color,new Ue("yellow")],.5)}setPosition(e,t){this.cube.position.x=e,this.cube.position.z=t}toggleHighlight(e){e?this.select?this.cube.material.color=Du:this.cube.material.color=this.hlColor:this.select?this.cube.material.color=Fv:this.cube.material.color=this.color}toggleSelect(e){this.select=e,this.select?this.cube.material.color=Du:this.cube.material.color=this.color}getTransactions(){return this.transactions}getTransactionsValue(){return this.value}getCube(){return this.cube}}class Gv{constructor(e){this.id=e,this.transactionsIn=new Map,this.transactionsOut=new Map,this.numTransactionsIn=0,this.totalTransactionsValueIn=0,this.largestTransactionIn=0,this.numTransactionsOut=0,this.totalTransactionsValueOut=0,this.largestTransactionOut=0}addTransactionOut(e,t,i=0){this.transactionsOut.get(e.id)||this.transactionsOut.set(e.id,[]),this.transactionsOut.get(e.id).push({amount:t,time:i}),this.numTransactionsOut+=1,this.totalTransactionsValueOut+=t;let r=0;this.transactionsOut.get(e.id).forEach(s=>{r+=s.amount}),r>this.largestTransactionOut&&(this.largestTransactionOut=r)}addTransactionIn(e,t,i=0){this.transactionsIn.get(e.id)||this.transactionsIn.set(e.id,[]),this.transactionsIn.get(e.id).push({amount:t,time:i}),this.numTransactionsIn+=1,this.totalTransactionsValueIn+=t;let r=0;this.transactionsIn.get(e.id).forEach(s=>{r+=s.amount}),r>this.largestTransactionIn&&(this.largestTransactionIn=r)}}class af{constructor(e,t){this.name=e,this.domParent=t,this.div=document.createElement("div"),this.div.id=e.replaceAll(" ","-")+"-div",this.div.classList.add("elementDiv"),this.id=e.replaceAll(" ","-"),t=="body"?this.domElement=document.body:this.domParent=document.getElementById(t),this.elements=[],this.endBreak=document.createElement("BR"),this.domParent.appendChild(this.div),this.labelBreak=document.createElement("BR"),this.label=document.createElement("label"),this.label.id=e.replaceAll(" ","-"),this.label.innerHTML=e}createLineBreak(){return document.createElement("BR")}addElements(){this.elements.forEach(e=>{this.div.appendChild(e)})}removeDiv(){this.div.remove()}addDiv(){this.domParent.appendChild(this.div)}hideLabel(){this.label.remove(),this.labelBreak.remove()}showLabel(){this.div.prepend(this.labelBreak),this.div.prepend(this.label)}removeElement(e){this.elements[e].remove(),this.elements.splice(e,1)}addElement(e){this.elements.push(e),this.domParent.appendChild(e)}addClass(e){this.div.classList.add(e)}setToolTip(e,t){this.div.classList.contains("tooltip")||this.div.classList.add("tooltip");let i=document.createElement("span");i.classList.add("tooltiptext"),i.classList.add(t),i.innerHTML=e,this.elements.push(i),this.div.appendChild(i)}}class na{constructor(e,t,i=!1){this.div=document.createElement("div"),this.div.id=e,i?this.div.classList.add("verticalContainer"):this.div.classList.add("horizontalContainer"),t=="body"?this.domElement=document.body:this.domParent=document.getElementById(t),this.domParent.appendChild(this.div)}addBlock(){let e=Array.prototype.slice.call(arguments);for(let t=0;t<e.length;t++){let i=e[t];i.div.remove(),this.div.appendChild(i.div)}}removeDiv(){this.div.remove()}addDiv(){this.domParent.appendChild(this.div)}addClass(e){this.div.classList.add(e)}}class un extends af{constructor(e,t,i){super(e,t),this.div.classList.add("textBoxDiv"),this.label.innerHTML=i,this.elements.push(this.label),this.elements.push(this.labelBreak),this.addElements()}}class Ur extends af{constructor(e,t,i){super(e,t),this.div.classList.add("buttonDiv"),this.button=document.createElement("button"),this.button.innerHTML=e,this.button.id=e.replaceAll(" ","-")+"-button",this.button.addEventListener("click",i),this.elements.push(this.button),this.addElements()}}const Uu=15,Nu=.99,Wv=20,Xv=5,Dn=10,Ys=5,Ou=10,Bu=1,Fu=.3,Io=3e3,ku=10,Ks=["yellow",2,10,1],Js=["purple",80,20,2];function nr(n,e,t){return n+(e-n)*t}class qv{constructor(e,t,i){this.scene=e,this.camera=t,this.transactionsGrid=i,this.mouse=new Ye,this.lastMouse=new Ye,this.raycaster=new Dv,this.isMouseHold=!1,this.cameraAccel=new Ye,this.highlightedBlock=null,this.clickedBlock=null,this.selectedBlock=null,this.selectedDiv,this.hlLight,this.hoverLight,this.hoverLightExists=!1,this.canScroll=!0,this.loadedChunks=new Map,this.isDataLoaded=!1,this.cameraMode=0,this.transitioning=!1,this.cameraGridView={position:new F(0,10,0),lookAtDelta:new F(0,-1,0)},this.cameraBarView={position:new F(0,2,8),lookAtDelta:new F(0,-1,-3)},this.storedCamera,this.cameraTVal=0,this.addressDiv1=document.createElement("div"),this.addressDiv1.id="addressDiv1",document.body.appendChild(this.addressDiv1),this.addressDiv2=document.createElement("div"),this.addressDiv2.id="addressDiv2",document.body.appendChild(this.addressDiv2)}mouseUpdate(){this.lastMouse.x=this.mouse.x,this.lastMouse.y=this.mouse.y,this.mouse.x=event.clientX/window.innerWidth*2-1,this.mouse.y=-(event.clientY/window.innerHeight)*2+1}onMouseMove(e){this.mouseUpdate();let t=this.transactionsGrid.getBlocks(),i=t.flat().map(s=>s.getCube());this.raycaster.setFromCamera(this.mouse,this.camera);let r=this.raycaster.intersectObjects(i,!1);if(r.length>0&&this.transactionsGrid.canHover){let s=r[0].object;t.flat().forEach(a=>{s==a.getCube()?(a.toggleHighlight(!0),this.highlightedBlock=a):a.toggleHighlight(!1)})}else this.highlightedBlock&&this.highlightedBlock.toggleHighlight(!1),this.highlightedBlock=null;if(this.highlightedBlock&&this.transactionsGrid.displayFrom){this.transactionsGrid.displayFrom.label.innerHTML="From: "+this.highlightedBlock.node1,this.transactionsGrid.displayTo.label.innerHTML="To: "+this.highlightedBlock.node2,this.transactionsGrid.toggleSort==0?this.transactionsGrid.displayAmount.label.innerHTML="Transactions Sum: "+this.highlightedBlock.getTransactionsValue():this.transactionsGrid.displayAmount.label.innerHTML="Number of Transactions: "+this.highlightedBlock.getTransactionsValue();let s=this.highlightedBlock.getCube().position.clone();s.y+=this.highlightedBlock.yScale/2,s.project(this.transactionsGrid.camera);let a=(s.x+1)*window.innerWidth/2,o=(1-s.y)*window.innerHeight/2;this.addressDiv1.style.left=a-Io-ku+"px",this.addressDiv1.style.top=o+"px",this.addressDiv2.style.left=a-Io/2+"px",this.addressDiv2.style.top=o-Io/2-ku+"px",this.hoverLightExists||(this.hoverLight=new da(Ks[0],Ks[1],Ks[2],Ks[3]),this.hoverLight.position.x=this.highlightedBlock.getCube().position.x,this.hoverLight.position.y=this.highlightedBlock.getCube().position.y+this.highlightedBlock.yScale/2+1,this.hoverLight.position.z=this.highlightedBlock.getCube().position.z,this.scene.add(this.hoverLight),this.hoverLightExists=!0)}else this.addressDiv1.style.left="-100000px",this.addressDiv1.style.top="-100000px",this.addressDiv2.style.left="-100000px",this.addressDiv2.style.top="-10000px",this.hoverLightExists&&(this.scene.remove(this.hoverLight),this.hoverLightExists=!1);if(this.isMouseHold&&this.transactionsGrid.canDrag){let s=this.mouse.x-this.lastMouse.x,a=this.mouse.y-this.lastMouse.y;this.camera.position.x+=-s*Uu,this.camera.position.z+=a*Uu*(window.innerHeight/window.innerWidth),this.cameraAccel.x=s,this.cameraAccel.y=a,this.bindCamera()}}onMouseDown(e){this.mouseUpdate(),this.isMouseHold=!0}onMouseClick(e){this.mouseUpdate()}onMouseDblClick(e){if(this.mouseUpdate(),this.isMouseHold=!1,this.transactionsGrid.canDrag=!0,this.clickedBlock&&this.transactionsGrid.canHover&&this.highlightedBlock){this.selectedBlock&&this.selectedBlock.toggleSelect(!1),this.selectedBlock=this.clickedBlock;let t=document.getElementById("sideDiv");t.style.width="300px",t.style.padding="10px",this.hlLight=new da(Js[0],Js[1],Js[2],Js[3]),this.hlLight.position.x=this.selectedBlock.getCube().position.x,this.hlLight.position.y=this.selectedBlock.getCube().position.y+this.selectedBlock.yScale/2+1,this.hlLight.position.z=this.selectedBlock.getCube().position.z,this.scene.add(this.hlLight),this.selectedDiv&&this.selectedDiv.removeDiv(),this.selectedDiv=new na("transaction select","sideDiv",!0);let i=new un("transaction from","sideDiv","From: "+String(this.clickedBlock.node1).substring(0,20)+"...");if(this.clickedBlock.node2){let s=new un("transaction to","sideDiv","To: "+String(this.clickedBlock.node2).substring(0,20)+"...");this.selectedDiv.addBlock(i,s)}else this.selectedDiv.addBlock(i);let r=0;if(this.clickedBlock.transactions.sort(function(s,a){return new Date(a.time)-new Date(s.time)}),this.clickedBlock.transactions.forEach(s=>{if(s.amount>0){let a=new na("tCont","sideDiv",!0),o;s.to&&(o=new un("transaction to","sideDiv","To: "+String(s.to)));let c=new un("transaction amount","sideDiv","Amount: "+String(s.amount)),l=new Date(s.time),u=String(l.getMonth())+"-"+String(l.getDay())+"-"+String(l.getFullYear());u=="NaN-NaN-NaN"&&(u="N/A");let d=new un("transaction time","sideDiv","Time: "+u);o?a.addBlock(o,c,d):a.addBlock(c,d),this.selectedDiv.addBlock(a),r+=1}}),r==0){let s=new na("tCont","sideDiv",!0),a=new un("transaction","sideDiv","Amount: NA");s.addBlock(a),this.selectedDiv.addBlock(s)}this.selectedBlock.toggleSelect(!0)}}onWheelEvent(e){if(!this.canScroll)return;e.deltaX;let t=e.deltaY;t>0&&this.camera.position.y<Wv?this.cameraMode==0&&(this.camera.position.y+=.2):t<0&&this.camera.position.y>Xv&&this.cameraMode==0&&(this.camera.position.y-=.2)}onMouseUp(e){if(this.isMouseHold=!1,this.transactionsGrid.canDrag=!0,this.lastMouse.x==this.mouse.x&&this.lastMouse.y==this.mouse.y){if(this.clickedBlock){this.clickedBlock.toggleSelect(!1);let t=document.getElementById("sideDiv");t.style.width="0px",t.style.padding="10px 0px 10px 0px",this.scene.remove(this.hlLight)}this.clickedBlock=this.highlightedBlock}}update(){if(this.transitioning){this.cameraTVal+=.008,this.cameraTVal>=1&&(this.transitioning=!1,this.cameraTVal=1,console.log("transition:",1));let e;this.cameraMode==0?e=this.cameraGridView:e=this.cameraBarView,nr(this.storedCamera.position.x,e.position.x,this.cameraTVal);let t=nr(this.storedCamera.position.y,e.position.y,this.cameraTVal),i=nr(this.storedCamera.position.z,e.position.z,this.cameraTVal),r=nr(this.storedCamera.lookAtDelta.x,e.lookAtDelta.x,this.cameraTVal),s=nr(this.storedCamera.lookAtDelta.y,e.lookAtDelta.y,this.cameraTVal),a=nr(this.storedCamera.lookAtDelta.z,e.lookAtDelta.z,this.cameraTVal);this.camera.position.set(this.camera.position.x,t,i),this.camera.lookAt(this.camera.position.x+r,this.camera.position.y+s,this.camera.position.z+a),this.cameraTVal>=1&&(this.cameraTVal=0)}else this.isMouseHold||(this.cameraAccel.x*=Nu,this.cameraAccel.y*=Nu,Math.abs(this.cameraAccel.x)<.005&&(this.cameraAccel.x=0),Math.abs(this.cameraAccel.y)<.005&&(this.cameraAccel.y=0),this.camera.position.x+=-this.cameraAccel.x,this.camera.position.z+=this.cameraAccel.y,this.bindCamera()),this.cameraMode==1&&(this.camera.position.z=this.cameraBarView.position.z);if(this.isDataLoaded&&this.transactionsGrid.isLoaded){let e=(Bu+Fu)*Dn;for(let s=-Ys;s<=Ys;s++)for(let a=-Ys;a<=Ys;a++){let o=Math.floor(this.camera.position.x/e)+s,c=Math.floor(this.camera.position.z/e)+a;o>=0&&c>=0&&(this.loadedChunks.get([o,c].toString())||(this.loadedChunks.set([o,c].toString(),!0),this.cameraMode==0?this.transactionsGrid.loadBlocks(o*Dn,c*Dn,Dn,!1):this.transactionsGrid.loadBars(o*Dn,Dn)))}let t=Math.floor(this.camera.position.x/e),i=Math.floor(this.camera.position.z/e);Array.from(this.loadedChunks).forEach(s=>{let a=s[0].split(",").map(o=>Number(o));this.loadedChunks.get([a[0],a[1]].toString())&&(Math.abs(a[0]-t)>Ou||Math.abs(a[1]-i)>Ou)&&(this.loadedChunks.set([a[0],a[1]].toString(),!1),this.transactionsGrid.unloadBlocks(a[0]*Dn,a[1]*Dn,Dn))})}this.bindCamera()}clearChunks(){this.loadedChunks=new Map}setCamera(e){this.transitioning=!0,e==0?(this.storedCamera={position:this.camera.position.clone(),lookAtDelta:this.cameraBarView.lookAtDelta},this.addressDiv1.style.height="4px",this.addressDiv2.style.height="4px"):e==1&&(this.storedCamera={position:this.camera.position.clone(),lookAtDelta:this.cameraGridView.lookAtDelta},this.addressDiv1.style.height="0px",this.addressDiv2.style.height="0px"),this.cameraMode=e}bindCamera(){if(this.isDataLoaded){if(!this.transactionsGrid.nodeArray){console.log("no array yet");return}let e=(Bu+Fu)*this.transactionsGrid.nodeArray.length;this.camera.position.x>e&&(this.camera.position.x=e),this.camera.position.x<0&&(this.camera.position.x=0),this.camera.position.z>e&&(this.camera.position.z=e),this.camera.position.z<0&&(this.camera.position.z=0)}}}function of(n,e){return function(){return n.apply(e,arguments)}}const{toString:jv}=Object.prototype,{getPrototypeOf:Ic}=Object,Ba=(n=>e=>{const t=jv.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),wn=n=>(n=n.toLowerCase(),e=>Ba(e)===n),Fa=n=>e=>typeof e===n,{isArray:wr}=Array,jr=Fa("undefined");function $v(n){return n!==null&&!jr(n)&&n.constructor!==null&&!jr(n.constructor)&&Qt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const cf=wn("ArrayBuffer");function Zv(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&cf(n.buffer),e}const Yv=Fa("string"),Qt=Fa("function"),lf=Fa("number"),ka=n=>n!==null&&typeof n=="object",Kv=n=>n===!0||n===!1,ia=n=>{if(Ba(n)!=="object")return!1;const e=Ic(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Jv=wn("Date"),Qv=wn("File"),ey=wn("Blob"),ty=wn("FileList"),ny=n=>ka(n)&&Qt(n.pipe),iy=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Qt(n.append)&&((e=Ba(n))==="formdata"||e==="object"&&Qt(n.toString)&&n.toString()==="[object FormData]"))},ry=wn("URLSearchParams"),sy=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vs(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),wr(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,n[o],o,n)}}function uf(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ff=n=>!jr(n)&&n!==df;function tc(){const{caseless:n}=ff(this)&&this||{},e={},t=(i,r)=>{const s=n&&uf(e,r)||r;ia(e[s])&&ia(i)?e[s]=tc(e[s],i):ia(i)?e[s]=tc({},i):wr(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&vs(arguments[i],t);return e}const ay=(n,e,t,{allOwnKeys:i}={})=>(vs(e,(r,s)=>{t&&Qt(r)?n[s]=of(r,t):n[s]=r},{allOwnKeys:i}),n),oy=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),cy=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},ly=(n,e,t,i)=>{let r,s,a;const o={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)a=r[s],(!i||i(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&Ic(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},uy=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},dy=n=>{if(!n)return null;if(wr(n))return n;let e=n.length;if(!lf(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},fy=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Ic(Uint8Array)),hy=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},py=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},my=wn("HTMLFormElement"),gy=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),zu=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),_y=wn("RegExp"),hf=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};vs(t,(r,s)=>{let a;(a=e(r,s,n))!==!1&&(i[s]=a||r)}),Object.defineProperties(n,i)},vy=n=>{hf(n,(e,t)=>{if(Qt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Qt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},yy=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return wr(n)?i(n):i(String(n).split(e)),t},xy=()=>{},Sy=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Do="abcdefghijklmnopqrstuvwxyz",Hu="0123456789",pf={DIGIT:Hu,ALPHA:Do,ALPHA_DIGIT:Do+Do.toUpperCase()+Hu},Ey=(n=16,e=pf.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function by(n){return!!(n&&Qt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const My=n=>{const e=new Array(10),t=(i,r)=>{if(ka(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=wr(i)?[]:{};return vs(i,(a,o)=>{const c=t(a,r+1);!jr(c)&&(s[o]=c)}),e[r]=void 0,s}}return i};return t(n,0)},Ty=wn("AsyncFunction"),wy=n=>n&&(ka(n)||Qt(n))&&Qt(n.then)&&Qt(n.catch),K={isArray:wr,isArrayBuffer:cf,isBuffer:$v,isFormData:iy,isArrayBufferView:Zv,isString:Yv,isNumber:lf,isBoolean:Kv,isObject:ka,isPlainObject:ia,isUndefined:jr,isDate:Jv,isFile:Qv,isBlob:ey,isRegExp:_y,isFunction:Qt,isStream:ny,isURLSearchParams:ry,isTypedArray:fy,isFileList:ty,forEach:vs,merge:tc,extend:ay,trim:sy,stripBOM:oy,inherits:cy,toFlatObject:ly,kindOf:Ba,kindOfTest:wn,endsWith:uy,toArray:dy,forEachEntry:hy,matchAll:py,isHTMLForm:my,hasOwnProperty:zu,hasOwnProp:zu,reduceDescriptors:hf,freezeMethods:vy,toObjectSet:yy,toCamelCase:gy,noop:xy,toFiniteNumber:Sy,findKey:uf,global:df,isContextDefined:ff,ALPHABET:pf,generateString:Ey,isSpecCompliantForm:by,toJSONObject:My,isAsyncFn:Ty,isThenable:wy};function $e(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}K.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mf=$e.prototype,gf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{gf[n]={value:n}});Object.defineProperties($e,gf);Object.defineProperty(mf,"isAxiosError",{value:!0});$e.from=(n,e,t,i,r,s)=>{const a=Object.create(mf);return K.toFlatObject(n,a,function(c){return c!==Error.prototype},o=>o!=="isAxiosError"),$e.call(a,n.message,e,t,i,r),a.cause=n,a.name=n.name,s&&Object.assign(a,s),a};const Ay=null;function nc(n){return K.isPlainObject(n)||K.isArray(n)}function _f(n){return K.endsWith(n,"[]")?n.slice(0,-2):n}function Vu(n,e,t){return n?n.concat(e).map(function(r,s){return r=_f(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function Ry(n){return K.isArray(n)&&!n.some(nc)}const Cy=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function za(n,e,t){if(!K.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=K.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!K.isUndefined(h[m])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,a=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(r))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(K.isDate(_))return _.toISOString();if(!c&&K.isBlob(_))throw new $e("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(_)||K.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,m,h){let f=_;if(_&&!h&&typeof _=="object"){if(K.endsWith(m,"{}"))m=i?m:m.slice(0,-2),_=JSON.stringify(_);else if(K.isArray(_)&&Ry(_)||(K.isFileList(_)||K.endsWith(m,"[]"))&&(f=K.toArray(_)))return m=_f(m),f.forEach(function(v,T){!(K.isUndefined(v)||v===null)&&e.append(a===!0?Vu([m],T,s):a===null?m:m+"[]",l(v))}),!1}return nc(_)?!0:(e.append(Vu(h,m,s),l(_)),!1)}const d=[],p=Object.assign(Cy,{defaultVisitor:u,convertValue:l,isVisitable:nc});function g(_,m){if(!K.isUndefined(_)){if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(_),K.forEach(_,function(f,E){(!(K.isUndefined(f)||f===null)&&r.call(e,f,K.isString(E)?E.trim():E,m,p))===!0&&g(f,m?m.concat(E):[E])}),d.pop()}}if(!K.isObject(n))throw new TypeError("data must be an object");return g(n),e}function Gu(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Dc(n,e){this._pairs=[],n&&za(n,this,e)}const vf=Dc.prototype;vf.append=function(e,t){this._pairs.push([e,t])};vf.toString=function(e){const t=e?function(i){return e.call(this,i,Gu)}:Gu;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Ly(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yf(n,e,t){if(!e)return n;const i=t&&t.encode||Ly,r=t&&t.serialize;let s;if(r?s=r(e,t):s=K.isURLSearchParams(e)?e.toString():new Dc(e,t).toString(i),s){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class Wu{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(i){i!==null&&e(i)})}}const xf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Py=typeof URLSearchParams<"u"?URLSearchParams:Dc,Iy=typeof FormData<"u"?FormData:null,Dy=typeof Blob<"u"?Blob:null,Uy={isBrowser:!0,classes:{URLSearchParams:Py,FormData:Iy,Blob:Dy},protocols:["http","https","file","blob","url","data"]},Sf=typeof window<"u"&&typeof document<"u",Ny=(n=>Sf&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Oy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",By=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sf,hasStandardBrowserEnv:Ny,hasStandardBrowserWebWorkerEnv:Oy},Symbol.toStringTag,{value:"Module"})),xn={...By,...Uy};function Fy(n,e){return za(n,new xn.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,s){return xn.isNode&&K.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function ky(n){return K.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function zy(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Ef(n){function e(t,i,r,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),c=s>=t.length;return a=!a&&K.isArray(r)?r.length:a,c?(K.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!o):((!r[a]||!K.isObject(r[a]))&&(r[a]=[]),e(t,i,r[a],s)&&K.isArray(r[a])&&(r[a]=zy(r[a])),!o)}if(K.isFormData(n)&&K.isFunction(n.entries)){const t={};return K.forEachEntry(n,(i,r)=>{e(ky(i),r,t,0)}),t}return null}function Hy(n,e,t){if(K.isString(n))try{return(e||JSON.parse)(n),K.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const ys={transitional:xf,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=K.isObject(e);if(s&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r?JSON.stringify(Ef(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Fy(e,this.formSerializer).toString();if((o=K.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return za(o?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),Hy(e)):e}],transformResponse:[function(e){const t=this.transitional||ys.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&K.isString(e)&&(i&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?$e.from(o,$e.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xn.classes.FormData,Blob:xn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],n=>{ys.headers[n]={}});const Vy=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gy=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!t||e[t]&&Vy[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Xu=Symbol("internals");function Nr(n){return n&&String(n).trim().toLowerCase()}function ra(n){return n===!1||n==null?n:K.isArray(n)?n.map(ra):String(n)}function Wy(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Xy=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Uo(n,e,t,i,r){if(K.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!K.isString(e)){if(K.isString(i))return e.indexOf(i)!==-1;if(K.isRegExp(i))return i.test(e)}}function qy(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function jy(n,e){const t=K.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}class en{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(o,c,l){const u=Nr(c);if(!u)throw new Error("header name must be a non-empty string");const d=K.findKey(r,u);(!d||r[d]===void 0||l===!0||l===void 0&&r[d]!==!1)&&(r[d||c]=ra(o))}const a=(o,c)=>K.forEach(o,(l,u)=>s(l,u,c));return K.isPlainObject(e)||e instanceof this.constructor?a(e,t):K.isString(e)&&(e=e.trim())&&!Xy(e)?a(Gy(e),t):e!=null&&s(t,e,i),this}get(e,t){if(e=Nr(e),e){const i=K.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Wy(r);if(K.isFunction(t))return t.call(this,r,i);if(K.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Nr(e),e){const i=K.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Uo(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(a){if(a=Nr(a),a){const o=K.findKey(i,a);o&&(!t||Uo(i,i[o],o,t))&&(delete i[o],r=!0)}}return K.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Uo(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return K.forEach(this,(r,s)=>{const a=K.findKey(i,s);if(a){t[a]=ra(r),delete t[s];return}const o=e?qy(s):String(s).trim();o!==s&&delete t[s],t[o]=ra(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return K.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&K.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Xu]=this[Xu]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Nr(a);i[o]||(jy(r,a),i[o]=!0)}return K.isArray(e)?e.forEach(s):s(e),this}}en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(en.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});K.freezeMethods(en);function No(n,e){const t=this||ys,i=e||t,r=en.from(i.headers);let s=i.data;return K.forEach(n,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function bf(n){return!!(n&&n.__CANCEL__)}function xs(n,e,t){$e.call(this,n??"canceled",$e.ERR_CANCELED,e,t),this.name="CanceledError"}K.inherits(xs,$e,{__CANCEL__:!0});function $y(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new $e("Request failed with status code "+t.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Zy=xn.hasStandardBrowserEnv?{write(n,e,t,i,r,s){const a=[n+"="+encodeURIComponent(e)];K.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),K.isString(i)&&a.push("path="+i),K.isString(r)&&a.push("domain="+r),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Yy(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Ky(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Mf(n,e){return n&&!Yy(e)?Ky(n,e):e}const Jy=xn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(s){let a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(a){const o=K.isString(a)?r(a):a;return o.protocol===i.protocol&&o.host===i.host}}():function(){return function(){return!0}}();function Qy(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function ex(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=i[s];a||(a=l),t[r]=c,i[r]=l;let d=s,p=0;for(;d!==r;)p+=t[d++],d=d%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),l-a<e)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function qu(n,e){let t=0;const i=ex(50,250);return r=>{const s=r.loaded,a=r.lengthComputable?r.total:void 0,o=s-t,c=i(o),l=s<=a;t=s;const u={loaded:s,total:a,progress:a?s/a:void 0,bytes:o,rate:c||void 0,estimated:c&&a&&l?(a-s)/c:void 0,event:r};u[e?"download":"upload"]=!0,n(u)}}const tx=typeof XMLHttpRequest<"u",nx=tx&&function(n){return new Promise(function(t,i){let r=n.data;const s=en.from(n.headers).normalize();let{responseType:a,withXSRFToken:o}=n,c;function l(){n.cancelToken&&n.cancelToken.unsubscribe(c),n.signal&&n.signal.removeEventListener("abort",c)}let u;if(K.isFormData(r)){if(xn.hasStandardBrowserEnv||xn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((u=s.getContentType())!==!1){const[m,...h]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([m||"multipart/form-data",...h].join("; "))}}let d=new XMLHttpRequest;if(n.auth){const m=n.auth.username||"",h=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+h))}const p=Mf(n.baseURL,n.url);d.open(n.method.toUpperCase(),yf(p,n.params,n.paramsSerializer),!0),d.timeout=n.timeout;function g(){if(!d)return;const m=en.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),f={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:m,config:n,request:d};$y(function(v){t(v),l()},function(v){i(v),l()},f),d=null}if("onloadend"in d?d.onloadend=g:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(g)},d.onabort=function(){d&&(i(new $e("Request aborted",$e.ECONNABORTED,n,d)),d=null)},d.onerror=function(){i(new $e("Network Error",$e.ERR_NETWORK,n,d)),d=null},d.ontimeout=function(){let h=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const f=n.transitional||xf;n.timeoutErrorMessage&&(h=n.timeoutErrorMessage),i(new $e(h,f.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,n,d)),d=null},xn.hasStandardBrowserEnv&&(o&&K.isFunction(o)&&(o=o(n)),o||o!==!1&&Jy(p))){const m=n.xsrfHeaderName&&n.xsrfCookieName&&Zy.read(n.xsrfCookieName);m&&s.set(n.xsrfHeaderName,m)}r===void 0&&s.setContentType(null),"setRequestHeader"in d&&K.forEach(s.toJSON(),function(h,f){d.setRequestHeader(f,h)}),K.isUndefined(n.withCredentials)||(d.withCredentials=!!n.withCredentials),a&&a!=="json"&&(d.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&d.addEventListener("progress",qu(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",qu(n.onUploadProgress)),(n.cancelToken||n.signal)&&(c=m=>{d&&(i(!m||m.type?new xs(null,n,d):m),d.abort(),d=null)},n.cancelToken&&n.cancelToken.subscribe(c),n.signal&&(n.signal.aborted?c():n.signal.addEventListener("abort",c)));const _=Qy(p);if(_&&xn.protocols.indexOf(_)===-1){i(new $e("Unsupported protocol "+_+":",$e.ERR_BAD_REQUEST,n));return}d.send(r||null)})},ic={http:Ay,xhr:nx};K.forEach(ic,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const ju=n=>`- ${n}`,ix=n=>K.isFunction(n)||n===null||n===!1,Tf={getAdapter:n=>{n=K.isArray(n)?n:[n];const{length:e}=n;let t,i;const r={};for(let s=0;s<e;s++){t=n[s];let a;if(i=t,!ix(t)&&(i=ic[(a=String(t)).toLowerCase()],i===void 0))throw new $e(`Unknown adapter '${a}'`);if(i)break;r[a||"#"+s]=i}if(!i){const s=Object.entries(r).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(ju).join(`
`):" "+ju(s[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return i},adapters:ic};function Oo(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new xs(null,n)}function $u(n){return Oo(n),n.headers=en.from(n.headers),n.data=No.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Tf.getAdapter(n.adapter||ys.adapter)(n).then(function(i){return Oo(n),i.data=No.call(n,n.transformResponse,i),i.headers=en.from(i.headers),i},function(i){return bf(i)||(Oo(n),i&&i.response&&(i.response.data=No.call(n,n.transformResponse,i.response),i.response.headers=en.from(i.response.headers))),Promise.reject(i)})}const Zu=n=>n instanceof en?{...n}:n;function mr(n,e){e=e||{};const t={};function i(l,u,d){return K.isPlainObject(l)&&K.isPlainObject(u)?K.merge.call({caseless:d},l,u):K.isPlainObject(u)?K.merge({},u):K.isArray(u)?u.slice():u}function r(l,u,d){if(K.isUndefined(u)){if(!K.isUndefined(l))return i(void 0,l,d)}else return i(l,u,d)}function s(l,u){if(!K.isUndefined(u))return i(void 0,u)}function a(l,u){if(K.isUndefined(u)){if(!K.isUndefined(l))return i(void 0,l)}else return i(void 0,u)}function o(l,u,d){if(d in e)return i(l,u);if(d in n)return i(void 0,l)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(l,u)=>r(Zu(l),Zu(u),!0)};return K.forEach(Object.keys(Object.assign({},n,e)),function(u){const d=c[u]||r,p=d(n[u],e[u],u);K.isUndefined(p)&&d!==o||(t[u]=p)}),t}const wf="1.6.8",Uc={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Uc[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Yu={};Uc.transitional=function(e,t,i){function r(s,a){return"[Axios v"+wf+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new $e(r(a," has been removed"+(t?" in "+t:"")),$e.ERR_DEPRECATED);return t&&!Yu[a]&&(Yu[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};function rx(n,e,t){if(typeof n!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],a=e[s];if(a){const o=n[s],c=o===void 0||a(o,s,n);if(c!==!0)throw new $e("option "+s+" must be "+c,$e.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new $e("Unknown option "+s,$e.ERR_BAD_OPTION)}}const rc={assertOptions:rx,validators:Uc},Yn=rc.validators;class Ci{constructor(e){this.defaults=e,this.interceptors={request:new Wu,response:new Wu}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=mr(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&rc.assertOptions(i,{silentJSONParsing:Yn.transitional(Yn.boolean),forcedJSONParsing:Yn.transitional(Yn.boolean),clarifyTimeoutError:Yn.transitional(Yn.boolean)},!1),r!=null&&(K.isFunction(r)?t.paramsSerializer={serialize:r}:rc.assertOptions(r,{encode:Yn.function,serialize:Yn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&K.merge(s.common,s[t.method]);s&&K.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),t.headers=en.concat(a,s);const o=[];let c=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(c=c&&m.synchronous,o.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,d=0,p;if(!c){const _=[$u.bind(this),void 0];for(_.unshift.apply(_,o),_.push.apply(_,l),p=_.length,u=Promise.resolve(t);d<p;)u=u.then(_[d++],_[d++]);return u}p=o.length;let g=t;for(d=0;d<p;){const _=o[d++],m=o[d++];try{g=_(g)}catch(h){m.call(this,h);break}}try{u=$u.call(this,g)}catch(_){return Promise.reject(_)}for(d=0,p=l.length;d<p;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=mr(this.defaults,e);const t=Mf(e.baseURL,e.url);return yf(t,e.params,e.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(e){Ci.prototype[e]=function(t,i){return this.request(mr(i||{},{method:e,url:t,data:(i||{}).data}))}});K.forEach(["post","put","patch"],function(e){function t(i){return function(s,a,o){return this.request(mr(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Ci.prototype[e]=t(),Ci.prototype[e+"Form"]=t(!0)});class Nc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new xs(s,a,o),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Nc(function(r){e=r}),cancel:e}}}function sx(n){return function(t){return n.apply(null,t)}}function ax(n){return K.isObject(n)&&n.isAxiosError===!0}const sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sc).forEach(([n,e])=>{sc[e]=n});function Af(n){const e=new Ci(n),t=of(Ci.prototype.request,e);return K.extend(t,Ci.prototype,e,{allOwnKeys:!0}),K.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Af(mr(n,r))},t}const gt=Af(ys);gt.Axios=Ci;gt.CanceledError=xs;gt.CancelToken=Nc;gt.isCancel=bf;gt.VERSION=wf;gt.toFormData=za;gt.AxiosError=$e;gt.Cancel=gt.CanceledError;gt.all=function(e){return Promise.all(e)};gt.spread=sx;gt.isAxiosError=ax;gt.mergeConfig=mr;gt.AxiosHeaders=en;gt.formToJSON=n=>Ef(K.isHTMLForm(n)?new FormData(n):n);gt.getAdapter=Tf.getAdapter;gt.HttpStatusCode=sc;gt.default=gt;async function ox(n){try{return(await gt.get(n)).data.data}catch(e){throw console.error("Axios error:",e),e}}async function Rf(n,e=t=>{}){try{console.log("get data"),console.log(n);const t=await ox(n);console.log("api data"),console.log(t);const i=t.users,r=t.transactions;let s={nodes:Array.from(i),transactions:Array.from(r)};e(s)}catch(t){console.error("Error:",t)}}const cx="This is a 3D heatmap representing transactions between users. The blocks on the grid represent the total sum of transactions between any two users across laid out across the X and Y axis. Smaller, bluer cubes indicate less/smaller transactions while larger, redder cubes indicate more/larger transactions<br /> <br /> The viewer may drag click to move the camera around, scroll up and down to zoom in/out, and double click on any block to see further details on transactions between two users, normal clicking will deselect the block.<br /> <br /> The bottom two sided slider allows the viewer to select a range of time, which will filter only transactions that exist within that time. Clicking update will refresh the scene with only those transactions<br /> <br /> Click this tab again to hide the tab.";function lx(n,e,t){let i=document.createElement("div");i.id="titleDiv",document.body.appendChild(i);let r=document.createElement("div");r.id="helpDiv",document.body.appendChild(r),r.onmousedown=()=>{n.canDrag=!1},r.onmouseenter=()=>{n.canHover=!1,e.canScroll=!1},r.onmouseleave=()=>{n.canHover=!0,e.canScroll=!0},new un("title","titleDiv","RES LENSES");let s=document.createElement("div");s.id="sideDiv",document.body.appendChild(s),s.style.width="0px",s.onmouseenter=()=>{n.canHover=!1,e.canScroll=!1},s.onmouseleave=()=>{n.canHover=!0,e.canScroll=!0};let a=document.createElement("div");a.id="topDiv",a.onmousedown=()=>{n.canDrag=!1},document.body.appendChild(a);let o=document.createElement("div");o.id="bottomDiv",o.onmousedown=()=>{n.canDrag=!1},o.onmouseenter=()=>{n.canHover=!1},o.onmouseleave=()=>{n.canHover=!0},document.body.appendChild(o),new na("innerBottom","bottomDiv",!1);let c=new un("from display","topDiv","From: NA");n.displayFrom=c;let l=new un("to display","topDiv","To:   NA");n.displayTo=l;let u=new un("amount display","topDiv","Total: NA");n.displayAmount=u;let d=new Ur("SwitchButton","innerBottom");d.button.innerHTML="Switch to ETH",d.button.addEventListener("click",()=>{let h,f;if(d.button.innerHTML=="Switch to RESDB")f="Switch to ETH",h="http://localhost:8080/getData_RESDB";else if(d.button.innerHTML=="Switch to ETH")f="Switch to RESDB",h="http://localhost:8080/getData_ETH";else return;d.button.innerHTML="...",e.isDataLoaded=!1,Rf(h,E=>{e.isDataLoaded=!0,e.loadedChunks=new Map,n.loadData(E),d.button.innerHTML=f})});let p=new Ur("ToggleSortButton","innerBottom");p.button.innerHTML="Sort By Num Transactions",p.button.addEventListener("click",()=>{d.button.innerHTML=="Switch to RESDB"||d.button.innerHTML=="Switch to ETH";let h;if(p.button.innerHTML=="Sort By Num Transactions")n.toggleSort=1,h="Sort By Transactions Total";else if(p.button.innerHTML=="Sort By Transactions Total")n.toggleSort=0,h="Sort By Num Transactions";else return;p.button.innerHTML="...",e.clearChunks(),n.createTempBlocks(),n.loadData(n.dataToLoad),p.button.innerHTML=h});let g=new Ur("ToggleView","innerBottom");g.button.innerHTML="Bar View",g.button.addEventListener("click",()=>{if(g.button.innerHTML=="Grid View")e.setCamera(0),g.button.innerHTML="Bar View";else if(g.button.innerHTML=="Bar View")n.setVerticalOpacities(),e.setCamera(1),g.button.innerHTML="Grid View";else return;n.loadData(n.dataToLoad),e.clearChunks()});let _=!1,m=new un("Help button","helpDiv","?");m.div.onmousedown=()=>{_?(r.style.height="20px",r.style.textAlign="center",m.label.innerHTML="?",m.div.style.fontSize="30px",r.style.overflowY="hidden",_=!1):(r.style.height="calc(100% - 250px)",r.style.textAlign="left",m.label.innerHTML=cx,m.div.style.fontSize="16px",r.style.overflowY="scroll",_=!0)},new Ur("ToggleScale","innerBottom"),new Ur("ToggleSymmetry","innerBottom")}const ux=4001,dx=4100,fx=4200,hx=4900,px=4901,mx=1002,gx=1003,_x=1005,vx=1100,yx=1200,fa=-32700,ha=-32600,pa=-32601,ma=-32602,ga=-32603,_a=-32e3,va=-32001,ya=-32002,xa=-32003,Sa=-32004,Ea=-32005,ba=-32006;class $r extends Error{constructor(e,t){super(e),this.innerError=t,this.name=this.constructor.name,typeof Error.captureStackTrace=="function"?Error.captureStackTrace(new.target.constructor):this.stack=new Error().stack}static convertToString(e,t=!1){if(e==null)return"undefined";const i=JSON.stringify(e,(r,s)=>typeof s=="bigint"?s.toString():s);return t&&["bigint","string"].includes(typeof e)?i.replace(/['\\"]+/g,""):i}toJSON(){return{name:this.name,code:this.code,message:this.message,innerError:this.innerError}}}class Oc extends $r{constructor(e,t){super(`Invalid value given "${$r.convertToString(e,!0)}". Error: ${t}.`),this.name=this.constructor.name}}class ac extends Oc{constructor(e){super(e,"can not parse as byte data"),this.code=mx}}class xx extends Oc{constructor(e){super(e,"can not parse as number data"),this.code=gx}}class Cf extends Oc{constructor(e){super(e,"invalid ethereum address"),this.code=_x}}const Sx="An Rpc error has occured with a code of *code*",tn={[fa]:{message:"Parse error",description:"Invalid JSON"},[ha]:{message:"Invalid request",description:"JSON is not a valid request object	"},[pa]:{message:"Method not found",description:"Method does not exist	"},[ma]:{message:"Invalid params",description:"Invalid method parameters"},[ga]:{message:"Internal error",description:"Internal JSON-RPC error"},[_a]:{message:"Invalid input",description:"Missing or invalid parameters"},[va]:{message:"Resource not found",description:"Requested resource not found"},[ya]:{message:"Resource unavailable",description:"Requested resource not available"},[xa]:{message:"Transaction rejected",description:"Transaction creation failed"},[Sa]:{message:"Method not supported",description:"Method is not implemented"},[Ea]:{message:"Limit exceeded",description:"Request exceeds defined limit"},[ba]:{message:"JSON-RPC version not supported",description:"Version of JSON-RPC protocol is not supported"},[ux]:{name:"User Rejected Request",message:"The user rejected the request."},[dx]:{name:"Unauthorized",message:"The requested method and/or account has not been authorized by the user."},[fx]:{name:"Unsupported Method",message:"The Provider does not support the requested method."},[hx]:{name:"Disconnected",message:"The Provider is disconnected from all chains."},[px]:{name:"Chain Disconnected",message:"The Provider is not connected to the requested chain."},"0-999":{name:"",message:"Not used."},1e3:{name:"Normal Closure",message:"The connection successfully completed the purpose for which it was created."},1001:{name:"Going Away",message:"The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."},1002:{name:"Protocol error",message:"The endpoint is terminating the connection due to a protocol error."},1003:{name:"Unsupported Data",message:"The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)"},1004:{name:"Reserved",message:"Reserved. A meaning might be defined in the future."},1005:{name:"No Status Rcvd",message:"Reserved. Indicates that no status code was provided even though one was expected."},1006:{name:"Abnormal Closure",message:"Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."},1007:{name:"Invalid frame payload data",message:"The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."},1008:{name:"Policy Violation",message:"The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."},1009:{name:"Message Too Big",message:"The endpoint is terminating the connection because a data frame was received that is too large."},1010:{name:"Mandatory Ext.",message:"The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."},1011:{name:"Internal Error",message:"The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."},1012:{name:"Service Restart",message:"The server is terminating the connection because it is restarting."},1013:{name:"Try Again Later",message:"The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."},1014:{name:"Bad Gateway",message:"The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."},1015:{name:"TLS handshake",message:"Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."},"1016-2999":{name:"",message:"For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications."},"3000-3999":{name:"",message:"For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol."},"4000-4999":{name:"",message:"For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."}};class nn extends $r{constructor(e,t){super(t??Sx.replace("*code*",e.error.code.toString())),this.code=e.error.code,this.id=e.id,this.jsonrpc=e.jsonrpc,this.jsonRpcError=e.error}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{error:this.jsonRpcError,id:this.id,jsonRpc:this.jsonrpc})}}class Ex extends nn{constructor(e){super(e,tn[fa].message),this.code=fa}}class bx extends nn{constructor(e){super(e,tn[ha].message),this.code=ha}}class Mx extends nn{constructor(e){super(e,tn[pa].message),this.code=pa}}class Tx extends nn{constructor(e){super(e,tn[ma].message),this.code=ma}}class wx extends nn{constructor(e){super(e,tn[ga].message),this.code=ga}}class Ax extends nn{constructor(e){super(e,tn[_a].message),this.code=_a}}class Rx extends nn{constructor(e){super(e,tn[Sa].message),this.code=Sa}}class Cx extends nn{constructor(e){super(e,tn[ya].message),this.code=ya}}class Lx extends nn{constructor(e){super(e,tn[va].message),this.code=va}}class Px extends nn{constructor(e){super(e,tn[ba].message),this.code=ba}}class Ix extends nn{constructor(e){super(e,tn[xa].message),this.code=xa}}class Dx extends nn{constructor(e){super(e,tn[Ea].message),this.code=Ea}}const rn=new Map;rn.set(fa,{error:Ex});rn.set(ha,{error:bx});rn.set(pa,{error:Mx});rn.set(ma,{error:Tx});rn.set(ga,{error:wx});rn.set(_a,{error:Ax});rn.set(Sa,{error:Rx});rn.set(ya,{error:Cx});rn.set(xa,{error:Ix});rn.set(va,{error:Lx});rn.set(ba,{error:Px});rn.set(Ea,{error:Dx});class Ux extends $r{constructor(e){super(`Format for the type ${e} is unsupported`),this.type=e,this.code=yx}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{type:this.type})}}function Zr(n){if(!Number.isSafeInteger(n)||n<0)throw new Error(`Wrong positive integer: ${n}`)}function Nx(n){if(typeof n!="boolean")throw new Error(`Expected boolean, not ${n}`)}function Ox(n){return n instanceof Uint8Array||n!=null&&typeof n=="object"&&n.constructor.name==="Uint8Array"}function Ha(n,...e){if(!Ox(n))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(n.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`)}function Lf(n){if(typeof n!="function"||typeof n.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Zr(n.outputLen),Zr(n.blockLen)}function Ui(n,e=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(e&&n.finished)throw new Error("Hash#digest() has already been called")}function Bc(n,e){Ha(n);const t=e.outputLen;if(n.length<t)throw new Error(`digestInto() expects output buffer of length at least ${t}`)}const Bx={number:Zr,bool:Nx,bytes:Ha,hash:Lf,exists:Ui,output:Bc},Qs=BigInt(2**32-1),Ku=BigInt(32);function Fx(n,e=!1){return e?{h:Number(n&Qs),l:Number(n>>Ku&Qs)}:{h:Number(n>>Ku&Qs)|0,l:Number(n&Qs)|0}}function kx(n,e=!1){let t=new Uint32Array(n.length),i=new Uint32Array(n.length);for(let r=0;r<n.length;r++){const{h:s,l:a}=Fx(n[r],e);[t[r],i[r]]=[s,a]}return[t,i]}const zx=(n,e,t)=>n<<t|e>>>32-t,Hx=(n,e,t)=>e<<t|n>>>32-t,Vx=(n,e,t)=>e<<t-32|n>>>64-t,Gx=(n,e,t)=>n<<t-32|e>>>64-t,Bo=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Wx=n=>new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength/4));function Pf(n){return n instanceof Uint8Array||n!=null&&typeof n=="object"&&n.constructor.name==="Uint8Array"}const Fo=n=>new DataView(n.buffer,n.byteOffset,n.byteLength),_n=(n,e)=>n<<32-e|n>>>e,Xx=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Xx)throw new Error("Non little-endian hardware is not supported");function Fc(n){if(typeof n!="string")throw new Error(`utf8ToBytes expected string, got ${typeof n}`);return new Uint8Array(new TextEncoder().encode(n))}function Va(n){if(typeof n=="string"&&(n=Fc(n)),!Pf(n))throw new Error(`expected Uint8Array, got ${typeof n}`);return n}function qx(...n){let e=0;for(let i=0;i<n.length;i++){const r=n[i];if(!Pf(r))throw new Error("Uint8Array expected");e+=r.length}const t=new Uint8Array(e);for(let i=0,r=0;i<n.length;i++){const s=n[i];t.set(s,r),r+=s.length}return t}class kc{clone(){return this._cloneInto()}}function If(n){const e=i=>n().update(Va(i)).digest(),t=n();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>n(),e}function jx(n=32){if(Bo&&typeof Bo.getRandomValues=="function")return Bo.getRandomValues(new Uint8Array(n));throw new Error("crypto.getRandomValues must be defined")}const[Df,Uf,Nf]=[[],[],[]],$x=BigInt(0),Or=BigInt(1),Zx=BigInt(2),Yx=BigInt(7),Kx=BigInt(256),Jx=BigInt(113);for(let n=0,e=Or,t=1,i=0;n<24;n++){[t,i]=[i,(2*t+3*i)%5],Df.push(2*(5*i+t)),Uf.push((n+1)*(n+2)/2%64);let r=$x;for(let s=0;s<7;s++)e=(e<<Or^(e>>Yx)*Jx)%Kx,e&Zx&&(r^=Or<<(Or<<BigInt(s))-Or);Nf.push(r)}const[Qx,eS]=kx(Nf,!0),Ju=(n,e,t)=>t>32?Vx(n,e,t):zx(n,e,t),Qu=(n,e,t)=>t>32?Gx(n,e,t):Hx(n,e,t);function tS(n,e=24){const t=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let a=0;a<10;a++)t[a]=n[a]^n[a+10]^n[a+20]^n[a+30]^n[a+40];for(let a=0;a<10;a+=2){const o=(a+8)%10,c=(a+2)%10,l=t[c],u=t[c+1],d=Ju(l,u,1)^t[o],p=Qu(l,u,1)^t[o+1];for(let g=0;g<50;g+=10)n[a+g]^=d,n[a+g+1]^=p}let r=n[2],s=n[3];for(let a=0;a<24;a++){const o=Uf[a],c=Ju(r,s,o),l=Qu(r,s,o),u=Df[a];r=n[u],s=n[u+1],n[u]=c,n[u+1]=l}for(let a=0;a<50;a+=10){for(let o=0;o<10;o++)t[o]=n[a+o];for(let o=0;o<10;o++)n[a+o]^=~t[(o+2)%10]&t[(o+4)%10]}n[0]^=Qx[i],n[1]^=eS[i]}t.fill(0)}class zc extends kc{constructor(e,t,i,r=!1,s=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=i,this.enableXOF=r,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Zr(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Wx(this.state)}keccak(){tS(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Ui(this);const{blockLen:t,state:i}=this;e=Va(e);const r=e.length;for(let s=0;s<r;){const a=Math.min(t-this.pos,r-s);for(let o=0;o<a;o++)i[this.pos++]^=e[s++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:i,blockLen:r}=this;e[i]^=t,t&128&&i===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){Ui(this,!1),Ha(e),this.finish();const t=this.state,{blockLen:i}=this;for(let r=0,s=e.length;r<s;){this.posOut>=i&&this.keccak();const a=Math.min(i-this.posOut,s-r);e.set(t.subarray(this.posOut,this.posOut+a),r),this.posOut+=a,r+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Zr(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Bc(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:i,outputLen:r,rounds:s,enableXOF:a}=this;return e||(e=new zc(t,i,r,a,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=i,e.outputLen=r,e.enableXOF=a,e.destroyed=this.destroyed,e}}const nS=(n,e,t)=>If(()=>new zc(e,n,t)),ed=nS(1,136,256/8);function iS(n){return e=>(Bx.bytes(e),n(e))}(()=>{const n=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,e=typeof Vr<"u"&&typeof Vr.require=="function"&&Vr.require.bind(Vr);return{node:e&&!n?e("crypto"):void 0,web:n}})();const Of=(()=>{const n=iS(ed);return n.create=ed.create,n})();var Ze;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},n.find=(r,s)=>{for(const a of r)if(s(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(Ze||(Ze={}));var oc;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(oc||(oc={}));const de=Ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ti=n=>{switch(typeof n){case"undefined":return de.undefined;case"string":return de.string;case"number":return isNaN(n)?de.nan:de.number;case"boolean":return de.boolean;case"function":return de.function;case"bigint":return de.bigint;case"symbol":return de.symbol;case"object":return Array.isArray(n)?de.array:n===null?de.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?de.promise:typeof Map<"u"&&n instanceof Map?de.map:typeof Set<"u"&&n instanceof Set?de.set:typeof Date<"u"&&n instanceof Date?de.date:de.object;default:return de.unknown}},J=Ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),rS=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class qt extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,c=0;for(;c<a.path.length;){const l=a.path[c];c===a.path.length-1?(o[l]=o[l]||{_errors:[]},o[l]._errors.push(t(a))):o[l]=o[l]||{_errors:[]},o=o[l],c++}}};return r(this),i}static assert(e){if(!(e instanceof qt))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}qt.create=n=>new qt(n);const gr=(n,e)=>{let t;switch(n.code){case J.invalid_type:n.received===de.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case J.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,Ze.jsonStringifyReplacer)}`;break;case J.unrecognized_keys:t=`Unrecognized key(s) in object: ${Ze.joinValues(n.keys,", ")}`;break;case J.invalid_union:t="Invalid input";break;case J.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${Ze.joinValues(n.options)}`;break;case J.invalid_enum_value:t=`Invalid enum value. Expected ${Ze.joinValues(n.options)}, received '${n.received}'`;break;case J.invalid_arguments:t="Invalid function arguments";break;case J.invalid_return_type:t="Invalid function return type";break;case J.invalid_date:t="Invalid date";break;case J.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:Ze.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case J.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case J.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case J.custom:t="Invalid input";break;case J.invalid_intersection_types:t="Intersection results could not be merged";break;case J.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case J.not_finite:t="Number must be finite";break;default:t=e.defaultError,Ze.assertNever(n)}return{message:t}};let Bf=gr;function sS(n){Bf=n}function Ma(){return Bf}const Ta=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],a={...r,path:s};if(r.message!==void 0)return{...r,path:s,message:r.message};let o="";const c=i.filter(l=>!!l).slice().reverse();for(const l of c)o=l(a,{data:e,defaultError:o}).message;return{...r,path:s,message:o}},aS=[];function le(n,e){const t=Ma(),i=Ta({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===gr?void 0:gr].filter(r=>!!r)});n.common.issues.push(i)}class Rt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return we;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t){const s=await r.key,a=await r.value;i.push({key:s,value:a})}return Rt.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return we;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const we=Object.freeze({status:"aborted"}),ar=n=>({status:"dirty",value:n}),Dt=n=>({status:"valid",value:n}),cc=n=>n.status==="aborted",lc=n=>n.status==="dirty",Yr=n=>n.status==="valid",Kr=n=>typeof Promise<"u"&&n instanceof Promise;function wa(n,e,t,i){if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function Ff(n,e,t,i,r){if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var _e;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(_e||(_e={}));var kr,zr;class bn{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const td=(n,e)=>{if(Yr(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new qt(n.common.issues);return this._error=t,this._error}}};function Be(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>{var c,l;const{message:u}=n;return a.code==="invalid_enum_value"?{message:u??o.defaultError}:typeof o.data>"u"?{message:(c=u??i)!==null&&c!==void 0?c:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(l=u??t)!==null&&l!==void 0?l:o.defaultError}},description:r}}class He{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ti(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:ti(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Rt,ctx:{common:e.parent.common,data:e.data,parsedType:ti(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Kr(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ti(e)},s=this._parseSync({data:e,path:r.path,parent:r});return td(r,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ti(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(Kr(r)?r:Promise.resolve(r));return td(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:J.custom,...i(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new mn({schema:this,typeName:Ee.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return En.create(this,this._def)}nullable(){return di.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return pn.create(this,this._def)}promise(){return vr.create(this,this._def)}or(e){return ts.create([this,e],this._def)}and(e){return ns.create(this,e,this._def)}transform(e){return new mn({...Be(this._def),schema:this,typeName:Ee.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new os({...Be(this._def),innerType:this,defaultValue:t,typeName:Ee.ZodDefault})}brand(){return new Hc({typeName:Ee.ZodBranded,type:this,...Be(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new cs({...Be(this._def),innerType:this,catchValue:t,typeName:Ee.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Ss.create(this,e)}readonly(){return ls.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const oS=/^c[^\s-]{8,}$/i,cS=/^[0-9a-z]+$/,lS=/^[0-9A-HJKMNP-TV-Z]{26}$/,uS=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,dS=/^[a-z0-9_-]{21}$/i,fS=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,hS=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,pS="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ko;const mS=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,gS=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,_S=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,kf="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",vS=new RegExp(`^${kf}$`);function zf(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function yS(n){return new RegExp(`^${zf(n)}$`)}function Hf(n){let e=`${kf}T${zf(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function xS(n,e){return!!((e==="v4"||!e)&&mS.test(n)||(e==="v6"||!e)&&gS.test(n))}class hn extends He{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==de.string){const s=this._getOrReturnCtx(e);return le(s,{code:J.invalid_type,expected:de.string,received:s.parsedType}),we}const i=new Rt;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),le(r,{code:J.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),le(r,{code:J.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?le(r,{code:J.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&le(r,{code:J.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")hS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"email",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")ko||(ko=new RegExp(pS,"u")),ko.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"emoji",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")uS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"uuid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")dS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"nanoid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")oS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"cuid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")cS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"cuid2",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")lS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"ulid",code:J.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),le(r,{validation:"url",code:J.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"regex",code:J.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),le(r,{code:J.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),le(r,{code:J.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),le(r,{code:J.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?Hf(s).test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{code:J.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?vS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{code:J.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?yS(s).test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{code:J.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?fS.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"duration",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?xS(e.data,s.version)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"ip",code:J.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?_S.test(e.data)||(r=this._getOrReturnCtx(e,r),le(r,{validation:"base64",code:J.invalid_string,message:s.message}),i.dirty()):Ze.assertNever(s);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(r=>e.test(r),{validation:t,code:J.invalid_string,..._e.errToObj(i)})}_addCheck(e){return new hn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",..._e.errToObj(e)})}url(e){return this._addCheck({kind:"url",..._e.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",..._e.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",..._e.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",..._e.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",..._e.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",..._e.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",..._e.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",..._e.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",..._e.errToObj(e)})}datetime(e){var t,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(i=e==null?void 0:e.local)!==null&&i!==void 0?i:!1,..._e.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,..._e.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",..._e.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,..._e.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,..._e.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,..._e.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,..._e.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,..._e.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,..._e.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,..._e.errToObj(t)})}nonempty(e){return this.min(1,_e.errToObj(e))}trim(){return new hn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new hn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new hn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}hn.create=n=>{var e;return new hn({checks:[],typeName:Ee.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Be(n)})};function SS(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),a=parseInt(e.toFixed(r).replace(".",""));return s%a/Math.pow(10,r)}class ci extends He{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==de.number){const s=this._getOrReturnCtx(e);return le(s,{code:J.invalid_type,expected:de.number,received:s.parsedType}),we}let i;const r=new Rt;for(const s of this._def.checks)s.kind==="int"?Ze.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),le(i,{code:J.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:J.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:J.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?SS(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),le(i,{code:J.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),le(i,{code:J.not_finite,message:s.message}),r.dirty()):Ze.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,_e.toString(t))}gt(e,t){return this.setLimit("min",e,!1,_e.toString(t))}lte(e,t){return this.setLimit("max",e,!0,_e.toString(t))}lt(e,t){return this.setLimit("max",e,!1,_e.toString(t))}setLimit(e,t,i,r){return new ci({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:_e.toString(r)}]})}_addCheck(e){return new ci({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:_e.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:_e.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:_e.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:_e.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:_e.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:_e.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:_e.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:_e.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:_e.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ze.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ci.create=n=>new ci({checks:[],typeName:Ee.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...Be(n)});class li extends He{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==de.bigint){const s=this._getOrReturnCtx(e);return le(s,{code:J.invalid_type,expected:de.bigint,received:s.parsedType}),we}let i;const r=new Rt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:J.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:J.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),le(i,{code:J.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):Ze.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,_e.toString(t))}gt(e,t){return this.setLimit("min",e,!1,_e.toString(t))}lte(e,t){return this.setLimit("max",e,!0,_e.toString(t))}lt(e,t){return this.setLimit("max",e,!1,_e.toString(t))}setLimit(e,t,i,r){return new li({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:_e.toString(r)}]})}_addCheck(e){return new li({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:_e.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:_e.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:_e.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:_e.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:_e.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}li.create=n=>{var e;return new li({checks:[],typeName:Ee.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Be(n)})};class Jr extends He{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==de.boolean){const i=this._getOrReturnCtx(e);return le(i,{code:J.invalid_type,expected:de.boolean,received:i.parsedType}),we}return Dt(e.data)}}Jr.create=n=>new Jr({typeName:Ee.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...Be(n)});class Ni extends He{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==de.date){const s=this._getOrReturnCtx(e);return le(s,{code:J.invalid_type,expected:de.date,received:s.parsedType}),we}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return le(s,{code:J.invalid_date}),we}const i=new Rt;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),le(r,{code:J.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),le(r,{code:J.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):Ze.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ni({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:_e.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:_e.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ni.create=n=>new Ni({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:Ee.ZodDate,...Be(n)});class Aa extends He{_parse(e){if(this._getType(e)!==de.symbol){const i=this._getOrReturnCtx(e);return le(i,{code:J.invalid_type,expected:de.symbol,received:i.parsedType}),we}return Dt(e.data)}}Aa.create=n=>new Aa({typeName:Ee.ZodSymbol,...Be(n)});class Qr extends He{_parse(e){if(this._getType(e)!==de.undefined){const i=this._getOrReturnCtx(e);return le(i,{code:J.invalid_type,expected:de.undefined,received:i.parsedType}),we}return Dt(e.data)}}Qr.create=n=>new Qr({typeName:Ee.ZodUndefined,...Be(n)});class es extends He{_parse(e){if(this._getType(e)!==de.null){const i=this._getOrReturnCtx(e);return le(i,{code:J.invalid_type,expected:de.null,received:i.parsedType}),we}return Dt(e.data)}}es.create=n=>new es({typeName:Ee.ZodNull,...Be(n)});class _r extends He{constructor(){super(...arguments),this._any=!0}_parse(e){return Dt(e.data)}}_r.create=n=>new _r({typeName:Ee.ZodAny,...Be(n)});class Li extends He{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Dt(e.data)}}Li.create=n=>new Li({typeName:Ee.ZodUnknown,...Be(n)});class Wn extends He{_parse(e){const t=this._getOrReturnCtx(e);return le(t,{code:J.invalid_type,expected:de.never,received:t.parsedType}),we}}Wn.create=n=>new Wn({typeName:Ee.ZodNever,...Be(n)});class Ra extends He{_parse(e){if(this._getType(e)!==de.undefined){const i=this._getOrReturnCtx(e);return le(i,{code:J.invalid_type,expected:de.void,received:i.parsedType}),we}return Dt(e.data)}}Ra.create=n=>new Ra({typeName:Ee.ZodVoid,...Be(n)});class pn extends He{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==de.array)return le(t,{code:J.invalid_type,expected:de.array,received:t.parsedType}),we;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(a||o)&&(le(t,{code:a?J.too_big:J.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(le(t,{code:J.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(le(t,{code:J.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>r.type._parseAsync(new bn(t,a,t.path,o)))).then(a=>Rt.mergeArray(i,a));const s=[...t.data].map((a,o)=>r.type._parseSync(new bn(t,a,t.path,o)));return Rt.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new pn({...this._def,minLength:{value:e,message:_e.toString(t)}})}max(e,t){return new pn({...this._def,maxLength:{value:e,message:_e.toString(t)}})}length(e,t){return new pn({...this._def,exactLength:{value:e,message:_e.toString(t)}})}nonempty(e){return this.min(1,e)}}pn.create=(n,e)=>new pn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ee.ZodArray,...Be(e)});function rr(n){if(n instanceof ot){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=En.create(rr(i))}return new ot({...n._def,shape:()=>e})}else return n instanceof pn?new pn({...n._def,type:rr(n.element)}):n instanceof En?En.create(rr(n.unwrap())):n instanceof di?di.create(rr(n.unwrap())):n instanceof Mn?Mn.create(n.items.map(e=>rr(e))):n}class ot extends He{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=Ze.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==de.object){const l=this._getOrReturnCtx(e);return le(l,{code:J.invalid_type,expected:de.object,received:l.parsedType}),we}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Wn&&this._def.unknownKeys==="strip"))for(const l in r.data)a.includes(l)||o.push(l);const c=[];for(const l of a){const u=s[l],d=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new bn(r,d,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof Wn){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of o)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")o.length>0&&(le(r,{code:J.unrecognized_keys,keys:o}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of o){const d=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new bn(r,d,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const d=await u.key,p=await u.value;l.push({key:d,value:p,alwaysSet:u.alwaysSet})}return l}).then(l=>Rt.mergeObjectSync(i,l)):Rt.mergeObjectSync(i,c)}get shape(){return this._def.shape()}strict(e){return _e.errToObj,new ot({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,a,o;const c=(a=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=_e.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new ot({...this._def,unknownKeys:"strip"})}passthrough(){return new ot({...this._def,unknownKeys:"passthrough"})}extend(e){return new ot({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ot({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ee.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ot({...this._def,catchall:e})}pick(e){const t={};return Ze.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new ot({...this._def,shape:()=>t})}omit(e){const t={};return Ze.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new ot({...this._def,shape:()=>t})}deepPartial(){return rr(this)}partial(e){const t={};return Ze.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new ot({...this._def,shape:()=>t})}required(e){const t={};return Ze.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof En;)s=s._def.innerType;t[i]=s}}),new ot({...this._def,shape:()=>t})}keyof(){return Vf(Ze.objectKeys(this.shape))}}ot.create=(n,e)=>new ot({shape:()=>n,unknownKeys:"strip",catchall:Wn.create(),typeName:Ee.ZodObject,...Be(e)});ot.strictCreate=(n,e)=>new ot({shape:()=>n,unknownKeys:"strict",catchall:Wn.create(),typeName:Ee.ZodObject,...Be(e)});ot.lazycreate=(n,e)=>new ot({shape:n,unknownKeys:"strip",catchall:Wn.create(),typeName:Ee.ZodObject,...Be(e)});class ts extends He{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new qt(o.ctx.common.issues));return le(t,{code:J.invalid_union,unionErrors:a}),we}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const c of i){const l={...t,common:{...t.common,issues:[]},parent:null},u=c._parseSync({data:t.data,path:t.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:l}),l.common.issues.length&&a.push(l.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(c=>new qt(c));return le(t,{code:J.invalid_union,unionErrors:o}),we}}get options(){return this._def.options}}ts.create=(n,e)=>new ts({options:n,typeName:Ee.ZodUnion,...Be(e)});const Bn=n=>n instanceof rs?Bn(n.schema):n instanceof mn?Bn(n.innerType()):n instanceof ss?[n.value]:n instanceof ui?n.options:n instanceof as?Ze.objectValues(n.enum):n instanceof os?Bn(n._def.innerType):n instanceof Qr?[void 0]:n instanceof es?[null]:n instanceof En?[void 0,...Bn(n.unwrap())]:n instanceof di?[null,...Bn(n.unwrap())]:n instanceof Hc||n instanceof ls?Bn(n.unwrap()):n instanceof cs?Bn(n._def.innerType):[];class Ga extends He{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==de.object)return le(t,{code:J.invalid_type,expected:de.object,received:t.parsedType}),we;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(le(t,{code:J.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),we)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const a=Bn(s.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,s)}}return new Ga({typeName:Ee.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...Be(i)})}}function uc(n,e){const t=ti(n),i=ti(e);if(n===e)return{valid:!0,data:n};if(t===de.object&&i===de.object){const r=Ze.objectKeys(e),s=Ze.objectKeys(n).filter(o=>r.indexOf(o)!==-1),a={...n,...e};for(const o of s){const c=uc(n[o],e[o]);if(!c.valid)return{valid:!1};a[o]=c.data}return{valid:!0,data:a}}else if(t===de.array&&i===de.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=e[s],c=uc(a,o);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return t===de.date&&i===de.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class ns extends He{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,a)=>{if(cc(s)||cc(a))return we;const o=uc(s.value,a.value);return o.valid?((lc(s)||lc(a))&&t.dirty(),{status:t.value,value:o.data}):(le(i,{code:J.invalid_intersection_types}),we)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}ns.create=(n,e,t)=>new ns({left:n,right:e,typeName:Ee.ZodIntersection,...Be(t)});class Mn extends He{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.array)return le(i,{code:J.invalid_type,expected:de.array,received:i.parsedType}),we;if(i.data.length<this._def.items.length)return le(i,{code:J.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),we;!this._def.rest&&i.data.length>this._def.items.length&&(le(i,{code:J.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new bn(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>Rt.mergeArray(t,a)):Rt.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new Mn({...this._def,rest:e})}}Mn.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Mn({items:n,typeName:Ee.ZodTuple,rest:null,...Be(e)})};class is extends He{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.object)return le(i,{code:J.invalid_type,expected:de.object,received:i.parsedType}),we;const r=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)r.push({key:s._parse(new bn(i,o,i.path,o)),value:a._parse(new bn(i,i.data[o],i.path,o)),alwaysSet:o in i.data});return i.common.async?Rt.mergeObjectAsync(t,r):Rt.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof He?new is({keyType:e,valueType:t,typeName:Ee.ZodRecord,...Be(i)}):new is({keyType:hn.create(),valueType:e,typeName:Ee.ZodRecord,...Be(t)})}}class Ca extends He{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.map)return le(i,{code:J.invalid_type,expected:de.map,received:i.parsedType}),we;const r=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,c],l)=>({key:r._parse(new bn(i,o,i.path,[l,"key"])),value:s._parse(new bn(i,c,i.path,[l,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of a){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return we;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of a){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return we;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}}}}Ca.create=(n,e,t)=>new Ca({valueType:e,keyType:n,typeName:Ee.ZodMap,...Be(t)});class Oi extends He{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.set)return le(i,{code:J.invalid_type,expected:de.set,received:i.parsedType}),we;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(le(i,{code:J.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(le(i,{code:J.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function a(c){const l=new Set;for(const u of c){if(u.status==="aborted")return we;u.status==="dirty"&&t.dirty(),l.add(u.value)}return{status:t.value,value:l}}const o=[...i.data.values()].map((c,l)=>s._parse(new bn(i,c,i.path,l)));return i.common.async?Promise.all(o).then(c=>a(c)):a(o)}min(e,t){return new Oi({...this._def,minSize:{value:e,message:_e.toString(t)}})}max(e,t){return new Oi({...this._def,maxSize:{value:e,message:_e.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Oi.create=(n,e)=>new Oi({valueType:n,minSize:null,maxSize:null,typeName:Ee.ZodSet,...Be(e)});class ur extends He{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==de.function)return le(t,{code:J.invalid_type,expected:de.function,received:t.parsedType}),we;function i(o,c){return Ta({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ma(),gr].filter(l=>!!l),issueData:{code:J.invalid_arguments,argumentsError:c}})}function r(o,c){return Ta({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ma(),gr].filter(l=>!!l),issueData:{code:J.invalid_return_type,returnTypeError:c}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof vr){const o=this;return Dt(async function(...c){const l=new qt([]),u=await o._def.args.parseAsync(c,s).catch(g=>{throw l.addIssue(i(c,g)),l}),d=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(d,s).catch(g=>{throw l.addIssue(r(d,g)),l})})}else{const o=this;return Dt(function(...c){const l=o._def.args.safeParse(c,s);if(!l.success)throw new qt([i(c,l.error)]);const u=Reflect.apply(a,this,l.data),d=o._def.returns.safeParse(u,s);if(!d.success)throw new qt([r(u,d.error)]);return d.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ur({...this._def,args:Mn.create(e).rest(Li.create())})}returns(e){return new ur({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new ur({args:e||Mn.create([]).rest(Li.create()),returns:t||Li.create(),typeName:Ee.ZodFunction,...Be(i)})}}class rs extends He{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}rs.create=(n,e)=>new rs({getter:n,typeName:Ee.ZodLazy,...Be(e)});class ss extends He{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return le(t,{received:t.data,code:J.invalid_literal,expected:this._def.value}),we}return{status:"valid",value:e.data}}get value(){return this._def.value}}ss.create=(n,e)=>new ss({value:n,typeName:Ee.ZodLiteral,...Be(e)});function Vf(n,e){return new ui({values:n,typeName:Ee.ZodEnum,...Be(e)})}class ui extends He{constructor(){super(...arguments),kr.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return le(t,{expected:Ze.joinValues(i),received:t.parsedType,code:J.invalid_type}),we}if(wa(this,kr)||Ff(this,kr,new Set(this._def.values)),!wa(this,kr).has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return le(t,{received:t.data,code:J.invalid_enum_value,options:i}),we}return Dt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return ui.create(e,{...this._def,...t})}exclude(e,t=this._def){return ui.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}kr=new WeakMap;ui.create=Vf;class as extends He{constructor(){super(...arguments),zr.set(this,void 0)}_parse(e){const t=Ze.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==de.string&&i.parsedType!==de.number){const r=Ze.objectValues(t);return le(i,{expected:Ze.joinValues(r),received:i.parsedType,code:J.invalid_type}),we}if(wa(this,zr)||Ff(this,zr,new Set(Ze.getValidEnumValues(this._def.values))),!wa(this,zr).has(e.data)){const r=Ze.objectValues(t);return le(i,{received:i.data,code:J.invalid_enum_value,options:r}),we}return Dt(e.data)}get enum(){return this._def.values}}zr=new WeakMap;as.create=(n,e)=>new as({values:n,typeName:Ee.ZodNativeEnum,...Be(e)});class vr extends He{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==de.promise&&t.common.async===!1)return le(t,{code:J.invalid_type,expected:de.promise,received:t.parsedType}),we;const i=t.parsedType===de.promise?t.data:Promise.resolve(t.data);return Dt(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}vr.create=(n,e)=>new vr({type:n,typeName:Ee.ZodPromise,...Be(e)});class mn extends He{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{le(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(i.data,s);if(i.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return we;const c=await this._def.schema._parseAsync({data:o,path:i.path,parent:i});return c.status==="aborted"?we:c.status==="dirty"||t.value==="dirty"?ar(c.value):c});{if(t.value==="aborted")return we;const o=this._def.schema._parseSync({data:a,path:i.path,parent:i});return o.status==="aborted"?we:o.status==="dirty"||t.value==="dirty"?ar(o.value):o}}if(r.type==="refinement"){const a=o=>{const c=r.refinement(o,s);if(i.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?we:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?we:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Yr(a))return a;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>Yr(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);Ze.assertNever(r)}}mn.create=(n,e,t)=>new mn({schema:n,typeName:Ee.ZodEffects,effect:e,...Be(t)});mn.createWithPreprocess=(n,e,t)=>new mn({schema:e,effect:{type:"preprocess",transform:n},typeName:Ee.ZodEffects,...Be(t)});class En extends He{_parse(e){return this._getType(e)===de.undefined?Dt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}En.create=(n,e)=>new En({innerType:n,typeName:Ee.ZodOptional,...Be(e)});class di extends He{_parse(e){return this._getType(e)===de.null?Dt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}di.create=(n,e)=>new di({innerType:n,typeName:Ee.ZodNullable,...Be(e)});class os extends He{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===de.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}os.create=(n,e)=>new os({innerType:n,typeName:Ee.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Be(e)});class cs extends He{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Kr(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new qt(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new qt(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}cs.create=(n,e)=>new cs({innerType:n,typeName:Ee.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Be(e)});class La extends He{_parse(e){if(this._getType(e)!==de.nan){const i=this._getOrReturnCtx(e);return le(i,{code:J.invalid_type,expected:de.nan,received:i.parsedType}),we}return{status:"valid",value:e.data}}}La.create=n=>new La({typeName:Ee.ZodNaN,...Be(n)});const ES=Symbol("zod_brand");class Hc extends He{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class Ss extends He{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?we:s.status==="dirty"?(t.dirty(),ar(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?we:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new Ss({in:e,out:t,typeName:Ee.ZodPipeline})}}class ls extends He{_parse(e){const t=this._def.innerType._parse(e),i=r=>(Yr(r)&&(r.value=Object.freeze(r.value)),r);return Kr(t)?t.then(r=>i(r)):i(t)}unwrap(){return this._def.innerType}}ls.create=(n,e)=>new ls({innerType:n,typeName:Ee.ZodReadonly,...Be(e)});function Gf(n,e={},t){return n?_r.create().superRefine((i,r)=>{var s,a;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,c=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,l=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...l,fatal:c})}}):_r.create()}const bS={object:ot.lazycreate};var Ee;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ee||(Ee={}));const MS=(n,e={message:`Input not instance of ${n.name}`})=>Gf(t=>t instanceof n,e),Wf=hn.create,Xf=ci.create,TS=La.create,wS=li.create,qf=Jr.create,AS=Ni.create,RS=Aa.create,CS=Qr.create,LS=es.create,PS=_r.create,IS=Li.create,DS=Wn.create,US=Ra.create,NS=pn.create,OS=ot.create,BS=ot.strictCreate,FS=ts.create,kS=Ga.create,zS=ns.create,HS=Mn.create,VS=is.create,GS=Ca.create,WS=Oi.create,XS=ur.create,qS=rs.create,jS=ss.create,$S=ui.create,ZS=as.create,YS=vr.create,nd=mn.create,KS=En.create,JS=di.create,QS=mn.createWithPreprocess,eE=Ss.create,tE=()=>Wf().optional(),nE=()=>Xf().optional(),iE=()=>qf().optional(),rE={string:n=>hn.create({...n,coerce:!0}),number:n=>ci.create({...n,coerce:!0}),boolean:n=>Jr.create({...n,coerce:!0}),bigint:n=>li.create({...n,coerce:!0}),date:n=>Ni.create({...n,coerce:!0})},sE=we;var vn=Object.freeze({__proto__:null,defaultErrorMap:gr,setErrorMap:sS,getErrorMap:Ma,makeIssue:Ta,EMPTY_PATH:aS,addIssueToContext:le,ParseStatus:Rt,INVALID:we,DIRTY:ar,OK:Dt,isAborted:cc,isDirty:lc,isValid:Yr,isAsync:Kr,get util(){return Ze},get objectUtil(){return oc},ZodParsedType:de,getParsedType:ti,ZodType:He,datetimeRegex:Hf,ZodString:hn,ZodNumber:ci,ZodBigInt:li,ZodBoolean:Jr,ZodDate:Ni,ZodSymbol:Aa,ZodUndefined:Qr,ZodNull:es,ZodAny:_r,ZodUnknown:Li,ZodNever:Wn,ZodVoid:Ra,ZodArray:pn,ZodObject:ot,ZodUnion:ts,ZodDiscriminatedUnion:Ga,ZodIntersection:ns,ZodTuple:Mn,ZodRecord:is,ZodMap:Ca,ZodSet:Oi,ZodFunction:ur,ZodLazy:rs,ZodLiteral:ss,ZodEnum:ui,ZodNativeEnum:as,ZodPromise:vr,ZodEffects:mn,ZodTransformer:mn,ZodOptional:En,ZodNullable:di,ZodDefault:os,ZodCatch:cs,ZodNaN:La,BRAND:ES,ZodBranded:Hc,ZodPipeline:Ss,ZodReadonly:ls,custom:Gf,Schema:He,ZodSchema:He,late:bS,get ZodFirstPartyTypeKind(){return Ee},coerce:rE,any:PS,array:NS,bigint:wS,boolean:qf,date:AS,discriminatedUnion:kS,effect:nd,enum:$S,function:XS,instanceof:MS,intersection:zS,lazy:qS,literal:jS,map:GS,nan:TS,nativeEnum:ZS,never:DS,null:LS,nullable:JS,number:Xf,object:OS,oboolean:iE,onumber:nE,optional:KS,ostring:tE,pipeline:eE,preprocess:QS,promise:YS,record:VS,set:WS,strictObject:BS,string:Wf,symbol:RS,transformer:nd,tuple:HS,undefined:CS,union:FS,unknown:IS,void:US,NEVER:sE,ZodIssueCode:J,quotelessJson:rS,ZodError:qt});const aE=n=>n.message?n.message:"unspecified error";class Pa extends $r{constructor(e){super(),this.code=vx,this.errors=e,super.message=`Web3 validator found ${e.length} error[s]:
${this._compileErrors().join(`
`)}`}_compileErrors(){return this.errors.map(aE)}}const oE=["bool","int","uint","bytes","string","address","tuple"],cE=n=>typeof n=="object"&&"type"in n&&"name"in n,lE=n=>typeof n=="string",kt=n=>typeof n=="string"&&/^((-)?0x[0-9a-f]+|(0x))$/i.test(n),uE=["hex","number","blockNumber","blockNumberOrTag","filter","bloom"],Es=n=>{let e=n.replace(/ /,""),t,i=!1,r=[];if(n.includes("[")&&(e=e.slice(0,e.indexOf("[")),r=[...n.matchAll(/(?:\[(\d*)\])/g)].map(s=>parseInt(s[1],10)).map(s=>Number.isNaN(s)?-1:s),i=r.length>0),oE.includes(e))return{baseType:e,isArray:i,baseTypeSize:t,arraySizes:r};if(e.startsWith("int"))t=parseInt(e.substring(3),10),e="int";else if(e.startsWith("uint"))t=parseInt(n.substring(4),10),e="uint";else if(e.startsWith("bytes"))t=parseInt(e.substring(5),10),e="bytes";else return{baseType:void 0,isArray:!1,baseTypeSize:void 0,arraySizes:r};return{baseType:e,isArray:i,baseTypeSize:t,arraySizes:r}},zo=(n,e={})=>{if(Object.keys(e).includes("type"))throw new Pa([{keyword:"eth",message:'Either "eth" or "type" can be presented in schema',params:{eth:n},instancePath:"",schemaPath:""}]);const{baseType:i,baseTypeSize:r}=Es(n);if(!i&&!uE.includes(n))throw new Pa([{keyword:"eth",message:`Eth data type "${n}" is not valid`,params:{eth:n},instancePath:"",schemaPath:""}]);if(i){if(i==="tuple")throw new Error('"tuple" type is not implemented directly.');return{format:`${i}${r??""}`,required:!0}}return n?{format:n,required:!0}:{}},dc=(n,e="/0")=>{const t={type:"array",items:[],maxItems:n.length,minItems:n.length};for(const[i,r]of n.entries()){let s,a,o=[];cE(r)?(s=r.type,a=r.name,o=r.components):typeof r=="string"?(s=r,a=`${e}/${i}`):Array.isArray(r)&&(r[0]&&typeof r[0]=="string"&&r[0].startsWith("tuple")&&!Array.isArray(r[0])&&r[1]&&Array.isArray(r[1])?(s=r[0],a=`${e}/${i}`,o=r[1]):(s="tuple",a=`${e}/${i}`,o=r));const{baseType:c,isArray:l,arraySizes:u}=Es(s);let d,p=t;for(let g=u.length-1;g>0;g-=1)d={type:"array",$id:a,items:[],maxItems:u[g],minItems:u[g]},u[g]<0&&(delete d.maxItems,delete d.minItems),Array.isArray(p.items)?p.items.length===0?p.items=[d]:p.items.push(d):p.items=[p.items,d],p=d;if(c==="tuple"&&!l){const g=dc(o,a);g.$id=a,p.items.push(g)}else if(c==="tuple"&&l){const g=u[0],_=Object.assign({type:"array",$id:a,items:dc(o,a)},g>=0&&{minItems:g,maxItems:g});p.items.push(_)}else if(l){const g=u[0],_=Object.assign({type:"array",$id:a,items:zo(s)},g>=0&&{minItems:g,maxItems:g});p.items.push(_)}else Array.isArray(p.items)?p.items.push(Object.assign({$id:a},zo(s))):p.items.push(Object.assign({$id:a},zo(s)));p=t}return t},dE=n=>dc(n),Vc=n=>{if(!kt(n))throw new Error("Invalid hex string");const[e,t]=n.startsWith("-")?[!0,n.slice(1)]:[!1,n],i=BigInt(t);return i>Number.MAX_SAFE_INTEGER?e?-i:i:i<Number.MIN_SAFE_INTEGER?i:e?-1*Number(i):Number(i)},jf=n=>{if((typeof n=="number"||typeof n=="bigint")&&n<0)return`-0x${n.toString(16).slice(1)}`;if((typeof n=="number"||typeof n=="bigint")&&n>=0)return`0x${n.toString(16)}`;if(typeof n=="string"&&kt(n)){const[e,t]=n.startsWith("-")?[!0,n.slice(1)]:[!1,n],i=t.split(/^(-)?0(x|X)/).slice(-1)[0];return`${e?"-":""}0x${i.replace(/^0+/,"").toLowerCase()}`}if(typeof n=="string"&&!kt(n))return jf(BigInt(n));throw new xx(n)},id=(n,e,t="0")=>{if(typeof n=="string"&&!kt(n))return n.padStart(e,t);const i=typeof n=="string"&&kt(n)?n:jf(n),[r,s]=i.startsWith("-")?["-0x",i.slice(3)]:["0x",i.slice(2)];return`${r}${s.padStart(e,t)}`};function Gc(n){let e="0x";for(const t of n){const i=t.toString(16);e+=i.length===1?`0${i}`:i}return e}const Un={zero:48,nine:57,A:65,F:70,a:97,f:102};function rd(n){if(n>=Un.zero&&n<=Un.nine)return n-Un.zero;if(n>=Un.A&&n<=Un.F)return n-(Un.A-10);if(n>=Un.a&&n<=Un.f)return n-(Un.a-10)}function $f(n){let e=0;if(n.startsWith("0")&&(n[1]==="x"||n[1]==="X")&&(e=2),n.length%2!==0)throw new ac(`hex string has odd length: ${n}`);const t=(n.length-e)/2,i=new Uint8Array(t);for(let r=0,s=e;r<t;r+=1){const a=rd(n.charCodeAt(s++)),o=rd(n.charCodeAt(s++));if(a===void 0||o===void 0)throw new ac(`Invalid byte sequence ("${n[s-2]}${n[s-1]}" in "${n}").`);i[r]=a*16+o}return i}function Zf(n){var e;return!(n instanceof Uint8Array)&&((e=n==null?void 0:n.constructor)===null||e===void 0?void 0:e.name)==="Uint8Array"?Uint8Array.from(n):n}const fc=n=>{var e;return n instanceof Uint8Array||((e=n==null?void 0:n.constructor)===null||e===void 0?void 0:e.name)==="Uint8Array"},Yf=(n,e={abiType:"bytes"})=>{if(typeof n!="string"&&!Array.isArray(n)&&!fc(n)||typeof n=="string"&&kt(n)&&n.startsWith("-")||typeof n=="string"&&!kt(n))return!1;let t;if(typeof n=="string"){if(n.length%2!==0)return!1;t=$f(n)}else if(Array.isArray(n)){if(n.some(i=>i<0||i>255||!Number.isInteger(i)))return!1;t=new Uint8Array(n)}else t=n;if(e!=null&&e.abiType){const{baseTypeSize:i}=Es(e.abiType);return i?t.length===i:!0}return e!=null&&e.size?t.length===(e==null?void 0:e.size):!0},fE=n=>{if(!/^(0x)?[0-9a-f]{40}$/i.test(n))return!1;const e=n.slice(2),t=Fc(e.toLowerCase()),i=Gc(Of(Zf(t))).slice(2);for(let r=0;r<40;r+=1)if(parseInt(i[r],16)>7&&e[r].toUpperCase()!==e[r]||parseInt(i[r],16)<=7&&e[r].toLowerCase()!==e[r])return!1;return!0},us=(n,e=!0)=>{if(typeof n!="string"&&!fc(n))return!1;let t;return fc(n)?t=Gc(n):typeof n=="string"&&!kt(n)?t=n.toLowerCase().startsWith("0x")?n:`0x${n}`:t=n,/^(0x)?[0-9a-f]{40}$/i.test(t)?/^(0x|0X)?[0-9a-f]{40}$/.test(t)||/^(0x|0X)?[0-9A-F]{40}$/.test(t)?!0:e?fE(t):!0:!1};var ds;(function(n){n.NUMBER="NUMBER_NUMBER",n.HEX="NUMBER_HEX",n.STR="NUMBER_STR",n.BIGINT="NUMBER_BIGINT"})(ds||(ds={}));var fs;(function(n){n.HEX="BYTES_HEX",n.UINT8ARRAY="BYTES_UINT8ARRAY"})(fs||(fs={}));ds.BIGINT,fs.HEX;ds.HEX,fs.HEX;var hc;(function(n){n.EARLIEST="earliest",n.LATEST="latest",n.PENDING="pending",n.SAFE="safe",n.FINALIZED="finalized"})(hc||(hc={}));var sd;(function(n){n.chainstart="chainstart",n.frontier="frontier",n.homestead="homestead",n.dao="dao",n.tangerineWhistle="tangerineWhistle",n.spuriousDragon="spuriousDragon",n.byzantium="byzantium",n.constantinople="constantinople",n.petersburg="petersburg",n.istanbul="istanbul",n.muirGlacier="muirGlacier",n.berlin="berlin",n.london="london",n.altair="altair",n.arrowGlacier="arrowGlacier",n.grayGlacier="grayGlacier",n.bellatrix="bellatrix",n.merge="merge",n.capella="capella",n.shanghai="shanghai"})(sd||(sd={}));const pc=(n,e)=>{let t=n;for(let i=1;i<e;i+=1)t*=n;return t},Wc=(n,e={abiType:"uint"})=>{if(!["number","string","bigint"].includes(typeof n)||typeof n=="string"&&n.length===0)return!1;let t;if(e!=null&&e.abiType){const{baseTypeSize:r}=Es(e.abiType);r&&(t=r)}else e.bitSize&&(t=e.bitSize);const i=pc(BigInt(2),BigInt(t??256))-BigInt(1);try{const r=typeof n=="string"&&kt(n)?BigInt(Vc(n)):BigInt(n);return r>=0&&r<=i}catch{return!1}},Xc=(n,e={abiType:"int"})=>{if(!["number","string","bigint"].includes(typeof n)||typeof n=="number"&&n>Number.MAX_SAFE_INTEGER)return!1;let t;if(e!=null&&e.abiType){const{baseTypeSize:s,baseType:a}=Es(e.abiType);if(a!=="int")return!1;s&&(t=s)}else e.bitSize&&(t=e.bitSize);const i=pc(BigInt(2),BigInt((t??256)-1)),r=BigInt(-1)*pc(BigInt(2),BigInt((t??256)-1));try{const s=typeof n=="string"&&kt(n)?BigInt(Vc(n)):BigInt(n);return s>=r&&s<=i}catch{return!1}},hE=n=>!!(Xc(n)||typeof n=="string"&&/[0-9.]/.test(n)&&n.indexOf(".")===n.lastIndexOf(".")||typeof n=="number"),Kf=n=>Wc(n),Jf=n=>Object.values(hc).includes(n),mc=n=>Jf(n)||Kf(n),pE=n=>typeof n!="string"||!/^(0x)?[0-9a-f]{512}$/i.test(n)?!1:!!(/^(0x)?[0-9a-f]{512}$/.test(n)||/^(0x)?[0-9A-F]{512}$/.test(n)),mE=n=>["number","string","boolean"].includes(typeof n)?typeof n=="boolean"?!0:typeof n=="string"&&!kt(n)?n==="1"||n==="0":typeof n=="string"&&kt(n)?n==="0x1"||n==="0x0":n===1||n===0:!1,xi=n=>n==null,ad=n=>typeof n!="string"||!/^(0x)?[0-9a-f]{64}$/i.test(n)?!1:!!(/^(0x)?[0-9a-f]{64}$/.test(n)||/^(0x)?[0-9A-F]{64}$/.test(n)),gE=n=>{const e=["fromBlock","toBlock","address","topics","blockHash"];if(xi(n)||typeof n!="object"||!Object.keys(n).every(t=>e.includes(t))||!xi(n.fromBlock)&&!mc(n.fromBlock)||!xi(n.toBlock)&&!mc(n.toBlock))return!1;if(!xi(n.address)){if(Array.isArray(n.address)){if(!n.address.every(t=>us(t)))return!1}else if(!us(n.address))return!1}return!(!xi(n.topics)&&!n.topics.every(t=>xi(t)?!0:Array.isArray(t)?t.every(i=>ad(i)):!!ad(t)))},Bi={address:n=>us(n),bloom:n=>pE(n),blockNumber:n=>Kf(n),blockTag:n=>Jf(n),blockNumberOrTag:n=>mc(n),bool:n=>mE(n),bytes:n=>Yf(n),filter:n=>gE(n),hex:n=>kt(n),uint:n=>Wc(n),int:n=>Xc(n),number:n=>hE(n),string:n=>lE(n)};for(let n=8;n<=256;n+=8)Bi[`int${n}`]=e=>Xc(e,{bitSize:n}),Bi[`uint${n}`]=e=>Wc(e,{bitSize:n});for(let n=1;n<=32;n+=1)Bi[`bytes${n}`]=e=>Yf(e,{size:n});Bi.bytes256=Bi.bytes;const Hr=n=>{if((!(n!=null&&n.type)||(n==null?void 0:n.type)==="object")&&(n!=null&&n.properties)){const e={};for(const t of Object.keys(n.properties)){const i=Hr(n.properties[t]);i&&(e[t]=i)}return Array.isArray(n.required)?vn.object(e).partial().required(n.required.reduce((t,i)=>Object.assign(Object.assign({},t),{[i]:!0}),{})):vn.object(e).partial()}if((n==null?void 0:n.type)==="array"&&(n!=null&&n.items)){if(Array.isArray(n.items)&&n.items.length>1&&n.maxItems!==void 0&&new Set(n.items.map(i=>i.$id)).size===n.items.length){const i=[];for(const r of n.items){const s=Hr(r);s&&i.push(s)}return vn.tuple(i)}const e=Array.isArray(n.items)?n.items[0]:n.items;let t=vn.array(Hr(e));return t=n.minItems!==void 0?t.min(n.minItems):t,t=n.maxItems!==void 0?t.max(n.maxItems):t,t}if(n.oneOf&&Array.isArray(n.oneOf))return vn.union(n.oneOf.map(e=>Hr(e)));if(n!=null&&n.format){if(!Bi[n.format])throw new Ux(n.format);return vn.any().refine(Bi[n.format],e=>({params:{value:e,format:n.format}}))}return n!=null&&n.type&&(n==null?void 0:n.type)!=="object"&&typeof vn[String(n.type)]=="function"?vn[String(n.type)]():vn.object({data:vn.any()}).partial()};class or{static factory(){return or.validatorInstance||(or.validatorInstance=new or),or.validatorInstance}validate(e,t,i){var r,s;const o=Hr(e).safeParse(t);if(!o.success){const c=this.convertErrors((s=(r=o.error)===null||r===void 0?void 0:r.issues)!==null&&s!==void 0?s:[]);if(c){if(i!=null&&i.silent)return c;throw new Pa(c)}}}convertErrors(e){if(e&&Array.isArray(e)&&e.length>0)return e.map(t=>{var i;let r,s,a,o;o=t.path.join("/");const c=String(t.path[t.path.length-1]),l=t.path.join("/");if(t.code===J.too_big)s="maxItems",o=`${l}/maxItems`,a={limit:t.maximum},r=`must NOT have more than ${t.maximum} items`;else if(t.code===J.too_small)s="minItems",o=`${l}/minItems`,a={limit:t.minimum},r=`must NOT have fewer than ${t.minimum} items`;else if(t.code===J.custom){const{value:u,format:d}=(i=t.params)!==null&&i!==void 0?i:{};typeof u>"u"?r=`value at "/${o}" is required`:r=`value "${typeof u=="object"?JSON.stringify(u):u}" at "/${o}" must pass "${d}" validation`,a={value:u}}return{keyword:s??c,instancePath:l?`/${l}`:"",schemaPath:o?`#${o}`:"#",params:a??{value:t.message},message:r??t.message}})}}class _E{constructor(){this._validator=or.factory()}validateJSONSchema(e,t,i){return this._validator.validate(e,t,i)}validate(e,t,i={silent:!1}){var r,s;const a=dE(e);if(!(Array.isArray(a.items)&&((r=a.items)===null||r===void 0?void 0:r.length)===0&&t.length===0)){if(Array.isArray(a.items)&&((s=a.items)===null||s===void 0?void 0:s.length)===0&&t.length!==0)throw new Pa([{instancePath:"/0",schemaPath:"/",keyword:"required",message:"empty schema against data can not be validated",params:t}]);return this._validator.validate(a,t,i)}}}const qc=new _E;function vE(n){var e;return n instanceof Uint8Array||((e=n==null?void 0:n.constructor)===null||e===void 0?void 0:e.name)==="Uint8Array"}BigInt(0),BigInt(1),BigInt(1e3),BigInt(1e3),BigInt(1e3),BigInt(1e3),BigInt(1e6),BigInt(1e6),BigInt(1e6),BigInt(1e6),BigInt(1e9),BigInt(1e9),BigInt(1e9),BigInt(1e9),BigInt(1e9),BigInt(1e12),BigInt(1e12),BigInt(1e12),BigInt(1e15),BigInt(1e15),BigInt(1e15),BigInt("1000000000000000000"),BigInt("1000000000000000000000"),BigInt("1000000000000000000000"),BigInt("1000000000000000000000000"),BigInt("1000000000000000000000000000"),BigInt("1000000000000000000000000000000");const od=n=>{if(qc.validate(["bytes"],[n]),vE(n))return n;if(Array.isArray(n))return new Uint8Array(n);if(typeof n=="string")return $f(n);throw new ac(n)},Qf=n=>typeof n=="string"&&n.slice(0,2).toLowerCase()!=="0x"?od(`0x${n}`):od(n),yE=n=>(qc.validate(["hex"],[n]),Vc(n)),xE=Fc,SE=n=>{if(!us(n,!1))throw new Cf(n);const e=n.toLowerCase().replace(/^0x/i,""),t=Gc(Of(Zf(xE(e))));if(xi(t)||t==="0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")return"";let i="0x";const r=t.replace(/^0x/i,"");for(let s=0;s<e.length;s+=1)parseInt(r[s],16)>7?i+=e[s].toUpperCase():i+=e[s];return i};var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const EE=(n,e,t="0")=>typeof n=="string"?kt(n)?id(n,e,t):n.padStart(e,t):(qc.validate(["int"],[n]),id(n,e,t)),cd=EE;var ld;(function(n){n.CONFIG_CHANGE="CONFIG_CHANGE"})(ld||(ld={}));var ud={exports:{}};(function(n,e){var t=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Wr<"u"&&Wr,i=function(){function s(){this.fetch=!1,this.DOMException=t.DOMException}return s.prototype=t,new s}();(function(s){(function(a){var o=typeof s<"u"&&s||typeof self<"u"&&self||typeof o<"u"&&o,c={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function l(y){return y&&DataView.prototype.isPrototypeOf(y)}if(c.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(y){return y&&u.indexOf(Object.prototype.toString.call(y))>-1};function p(y){if(typeof y!="string"&&(y=String(y)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(y)||y==="")throw new TypeError('Invalid character in header field name: "'+y+'"');return y.toLowerCase()}function g(y){return typeof y!="string"&&(y=String(y)),y}function _(y){var w={next:function(){var I=y.shift();return{done:I===void 0,value:I}}};return c.iterable&&(w[Symbol.iterator]=function(){return w}),w}function m(y){this.map={},y instanceof m?y.forEach(function(w,I){this.append(I,w)},this):Array.isArray(y)?y.forEach(function(w){this.append(w[0],w[1])},this):y&&Object.getOwnPropertyNames(y).forEach(function(w){this.append(w,y[w])},this)}m.prototype.append=function(y,w){y=p(y),w=g(w);var I=this.map[y];this.map[y]=I?I+", "+w:w},m.prototype.delete=function(y){delete this.map[p(y)]},m.prototype.get=function(y){return y=p(y),this.has(y)?this.map[y]:null},m.prototype.has=function(y){return this.map.hasOwnProperty(p(y))},m.prototype.set=function(y,w){this.map[p(y)]=g(w)},m.prototype.forEach=function(y,w){for(var I in this.map)this.map.hasOwnProperty(I)&&y.call(w,this.map[I],I,this)},m.prototype.keys=function(){var y=[];return this.forEach(function(w,I){y.push(I)}),_(y)},m.prototype.values=function(){var y=[];return this.forEach(function(w){y.push(w)}),_(y)},m.prototype.entries=function(){var y=[];return this.forEach(function(w,I){y.push([I,w])}),_(y)},c.iterable&&(m.prototype[Symbol.iterator]=m.prototype.entries);function h(y){if(y.bodyUsed)return Promise.reject(new TypeError("Already read"));y.bodyUsed=!0}function f(y){return new Promise(function(w,I){y.onload=function(){w(y.result)},y.onerror=function(){I(y.error)}})}function E(y){var w=new FileReader,I=f(w);return w.readAsArrayBuffer(y),I}function v(y){var w=new FileReader,I=f(w);return w.readAsText(y),I}function T(y){for(var w=new Uint8Array(y),I=new Array(w.length),q=0;q<w.length;q++)I[q]=String.fromCharCode(w[q]);return I.join("")}function R(y){if(y.slice)return y.slice(0);var w=new Uint8Array(y.byteLength);return w.set(new Uint8Array(y)),w.buffer}function L(){return this.bodyUsed=!1,this._initBody=function(y){this.bodyUsed=this.bodyUsed,this._bodyInit=y,y?typeof y=="string"?this._bodyText=y:c.blob&&Blob.prototype.isPrototypeOf(y)?this._bodyBlob=y:c.formData&&FormData.prototype.isPrototypeOf(y)?this._bodyFormData=y:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(y)?this._bodyText=y.toString():c.arrayBuffer&&c.blob&&l(y)?(this._bodyArrayBuffer=R(y.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(y)||d(y))?this._bodyArrayBuffer=R(y):this._bodyText=y=Object.prototype.toString.call(y):this._bodyText="",this.headers.get("content-type")||(typeof y=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(y)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var y=h(this);if(y)return y;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var y=h(this);return y||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(E)}),this.text=function(){var y=h(this);if(y)return y;if(this._bodyBlob)return v(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(T(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}var C=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function P(y){var w=y.toUpperCase();return C.indexOf(w)>-1?w:y}function S(y,w){if(!(this instanceof S))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');w=w||{};var I=w.body;if(y instanceof S){if(y.bodyUsed)throw new TypeError("Already read");this.url=y.url,this.credentials=y.credentials,w.headers||(this.headers=new m(y.headers)),this.method=y.method,this.mode=y.mode,this.signal=y.signal,!I&&y._bodyInit!=null&&(I=y._bodyInit,y.bodyUsed=!0)}else this.url=String(y);if(this.credentials=w.credentials||this.credentials||"same-origin",(w.headers||!this.headers)&&(this.headers=new m(w.headers)),this.method=P(w.method||this.method||"GET"),this.mode=w.mode||this.mode||null,this.signal=w.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&I)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(I),(this.method==="GET"||this.method==="HEAD")&&(w.cache==="no-store"||w.cache==="no-cache")){var q=/([?&])_=[^&]*/;if(q.test(this.url))this.url=this.url.replace(q,"$1_="+new Date().getTime());else{var V=/\?/;this.url+=(V.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}S.prototype.clone=function(){return new S(this,{body:this._bodyInit})};function b(y){var w=new FormData;return y.trim().split("&").forEach(function(I){if(I){var q=I.split("="),V=q.shift().replace(/\+/g," "),H=q.join("=").replace(/\+/g," ");w.append(decodeURIComponent(V),decodeURIComponent(H))}}),w}function O(y){var w=new m,I=y.replace(/\r?\n[\t ]+/g," ");return I.split("\r").map(function(q){return q.indexOf(`
`)===0?q.substr(1,q.length):q}).forEach(function(q){var V=q.split(":"),H=V.shift().trim();if(H){var N=V.join(":").trim();w.append(H,N)}}),w}L.call(S.prototype);function z(y,w){if(!(this instanceof z))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');w||(w={}),this.type="default",this.status=w.status===void 0?200:w.status,this.ok=this.status>=200&&this.status<300,this.statusText=w.statusText===void 0?"":""+w.statusText,this.headers=new m(w.headers),this.url=w.url||"",this._initBody(y)}L.call(z.prototype),z.prototype.clone=function(){return new z(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},z.error=function(){var y=new z(null,{status:0,statusText:""});return y.type="error",y};var Z=[301,302,303,307,308];z.redirect=function(y,w){if(Z.indexOf(w)===-1)throw new RangeError("Invalid status code");return new z(null,{status:w,headers:{location:y}})},a.DOMException=o.DOMException;try{new a.DOMException}catch{a.DOMException=function(w,I){this.message=w,this.name=I;var q=Error(w);this.stack=q.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function U(y,w){return new Promise(function(I,q){var V=new S(y,w);if(V.signal&&V.signal.aborted)return q(new a.DOMException("Aborted","AbortError"));var H=new XMLHttpRequest;function N(){H.abort()}H.onload=function(){var ee={status:H.status,statusText:H.statusText,headers:O(H.getAllResponseHeaders()||"")};ee.url="responseURL"in H?H.responseURL:ee.headers.get("X-Request-URL");var ae="response"in H?H.response:H.responseText;setTimeout(function(){I(new z(ae,ee))},0)},H.onerror=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},H.ontimeout=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},H.onabort=function(){setTimeout(function(){q(new a.DOMException("Aborted","AbortError"))},0)};function G(ee){try{return ee===""&&o.location.href?o.location.href:ee}catch{return ee}}H.open(V.method,G(V.url),!0),V.credentials==="include"?H.withCredentials=!0:V.credentials==="omit"&&(H.withCredentials=!1),"responseType"in H&&(c.blob?H.responseType="blob":c.arrayBuffer&&V.headers.get("Content-Type")&&V.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(H.responseType="arraybuffer")),w&&typeof w.headers=="object"&&!(w.headers instanceof m)?Object.getOwnPropertyNames(w.headers).forEach(function(ee){H.setRequestHeader(ee,g(w.headers[ee]))}):V.headers.forEach(function(ee,ae){H.setRequestHeader(ae,ee)}),V.signal&&(V.signal.addEventListener("abort",N),H.onreadystatechange=function(){H.readyState===4&&V.signal.removeEventListener("abort",N)}),H.send(typeof V._bodyInit>"u"?null:V._bodyInit)})}return U.polyfill=!0,o.fetch||(o.fetch=U,o.Headers=m,o.Request=S,o.Response=z),a.Headers=m,a.Request=S,a.Response=z,a.fetch=U,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var r=t.fetch?t:i;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,n.exports=e})(ud,ud.exports);var dd;(function(n){n.PROVIDER_CHANGED="PROVIDER_CHANGED",n.BEFORE_PROVIDER_CHANGE="BEFORE_PROVIDER_CHANGE"})(dd||(dd={}));class eh extends kc{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,Lf(e);const i=Va(t);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(i.length>r?e.create().update(i).digest():i);for(let a=0;a<s.length;a++)s[a]^=54;this.iHash.update(s),this.oHash=e.create();for(let a=0;a<s.length;a++)s[a]^=106;this.oHash.update(s),s.fill(0)}update(e){return Ui(this),this.iHash.update(e),this}digestInto(e){Ui(this),Ha(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:i,finished:r,destroyed:s,blockLen:a,outputLen:o}=this;return e=e,e.finished=r,e.destroyed=s,e.blockLen=a,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const th=(n,e,t)=>new eh(n,e).update(t).digest();th.create=(n,e)=>new eh(n,e);function bE(n,e,t,i){if(typeof n.setBigUint64=="function")return n.setBigUint64(e,t,i);const r=BigInt(32),s=BigInt(4294967295),a=Number(t>>r&s),o=Number(t&s),c=i?4:0,l=i?0:4;n.setUint32(e+c,a,i),n.setUint32(e+l,o,i)}class ME extends kc{constructor(e,t,i,r){super(),this.blockLen=e,this.outputLen=t,this.padOffset=i,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Fo(this.buffer)}update(e){Ui(this);const{view:t,buffer:i,blockLen:r}=this;e=Va(e);const s=e.length;for(let a=0;a<s;){const o=Math.min(r-this.pos,s-a);if(o===r){const c=Fo(e);for(;r<=s-a;a+=r)this.process(c,a);continue}i.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===r&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Ui(this),Bc(e,this),this.finished=!0;const{buffer:t,view:i,blockLen:r,isLE:s}=this;let{pos:a}=this;t[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>r-a&&(this.process(i,0),a=0);for(let d=a;d<r;d++)t[d]=0;bE(i,r-8,BigInt(this.length*8),s),this.process(i,0);const o=Fo(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)o.setUint32(4*d,u[d],s)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const i=e.slice(0,t);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:i,length:r,finished:s,destroyed:a,pos:o}=this;return e.length=r,e.pos=o,e.finished=s,e.destroyed=a,r%t&&e.buffer.set(i),e}}const TE=(n,e,t)=>n&e^~n&t,wE=(n,e,t)=>n&e^n&t^e&t,AE=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Kn=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Jn=new Uint32Array(64);class RE extends ME{constructor(){super(64,32,8,!1),this.A=Kn[0]|0,this.B=Kn[1]|0,this.C=Kn[2]|0,this.D=Kn[3]|0,this.E=Kn[4]|0,this.F=Kn[5]|0,this.G=Kn[6]|0,this.H=Kn[7]|0}get(){const{A:e,B:t,C:i,D:r,E:s,F:a,G:o,H:c}=this;return[e,t,i,r,s,a,o,c]}set(e,t,i,r,s,a,o,c){this.A=e|0,this.B=t|0,this.C=i|0,this.D=r|0,this.E=s|0,this.F=a|0,this.G=o|0,this.H=c|0}process(e,t){for(let d=0;d<16;d++,t+=4)Jn[d]=e.getUint32(t,!1);for(let d=16;d<64;d++){const p=Jn[d-15],g=Jn[d-2],_=_n(p,7)^_n(p,18)^p>>>3,m=_n(g,17)^_n(g,19)^g>>>10;Jn[d]=m+Jn[d-7]+_+Jn[d-16]|0}let{A:i,B:r,C:s,D:a,E:o,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const p=_n(o,6)^_n(o,11)^_n(o,25),g=u+p+TE(o,c,l)+AE[d]+Jn[d]|0,m=(_n(i,2)^_n(i,13)^_n(i,22))+wE(i,r,s)|0;u=l,l=c,c=o,o=a+g|0,a=s,s=r,r=i,i=g+m|0}i=i+this.A|0,r=r+this.B|0,s=s+this.C|0,a=a+this.D|0,o=o+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(i,r,s,a,o,c,l,u)}roundClean(){Jn.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const CE=If(()=>new RE);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const nh=BigInt(0),Wa=BigInt(1),LE=BigInt(2);function Tn(n){return n instanceof Uint8Array||n!=null&&typeof n=="object"&&n.constructor.name==="Uint8Array"}const PE=Array.from({length:256},(n,e)=>e.toString(16).padStart(2,"0"));function yr(n){if(!Tn(n))throw new Error("Uint8Array expected");let e="";for(let t=0;t<n.length;t++)e+=PE[n[t]];return e}function ih(n){const e=n.toString(16);return e.length&1?`0${e}`:e}function jc(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);return BigInt(n===""?"0":`0x${n}`)}const Nn={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function fd(n){if(n>=Nn._0&&n<=Nn._9)return n-Nn._0;if(n>=Nn._A&&n<=Nn._F)return n-(Nn._A-10);if(n>=Nn._a&&n<=Nn._f)return n-(Nn._a-10)}function xr(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);const e=n.length,t=e/2;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(t);for(let r=0,s=0;r<t;r++,s+=2){const a=fd(n.charCodeAt(s)),o=fd(n.charCodeAt(s+1));if(a===void 0||o===void 0){const c=n[s]+n[s+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+s)}i[r]=a*16+o}return i}function Pi(n){return jc(yr(n))}function $c(n){if(!Tn(n))throw new Error("Uint8Array expected");return jc(yr(Uint8Array.from(n).reverse()))}function Sr(n,e){return xr(n.toString(16).padStart(e*2,"0"))}function Zc(n,e){return Sr(n,e).reverse()}function IE(n){return xr(ih(n))}function cn(n,e,t){let i;if(typeof e=="string")try{i=xr(e)}catch(s){throw new Error(`${n} must be valid hex string, got "${e}". Cause: ${s}`)}else if(Tn(e))i=Uint8Array.from(e);else throw new Error(`${n} must be hex string or Uint8Array`);const r=i.length;if(typeof t=="number"&&r!==t)throw new Error(`${n} expected ${t} bytes, got ${r}`);return i}function hs(...n){let e=0;for(let r=0;r<n.length;r++){const s=n[r];if(!Tn(s))throw new Error("Uint8Array expected");e+=s.length}let t=new Uint8Array(e),i=0;for(let r=0;r<n.length;r++){const s=n[r];t.set(s,i),i+=s.length}return t}function DE(n,e){if(n.length!==e.length)return!1;let t=0;for(let i=0;i<n.length;i++)t|=n[i]^e[i];return t===0}function UE(n){if(typeof n!="string")throw new Error(`utf8ToBytes expected string, got ${typeof n}`);return new Uint8Array(new TextEncoder().encode(n))}function NE(n){let e;for(e=0;n>nh;n>>=Wa,e+=1);return e}function OE(n,e){return n>>BigInt(e)&Wa}const BE=(n,e,t)=>n|(t?Wa:nh)<<BigInt(e),Yc=n=>(LE<<BigInt(n-1))-Wa,Ho=n=>new Uint8Array(n),hd=n=>Uint8Array.from(n);function rh(n,e,t){if(typeof n!="number"||n<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");let i=Ho(n),r=Ho(n),s=0;const a=()=>{i.fill(1),r.fill(0),s=0},o=(...d)=>t(r,i,...d),c=(d=Ho())=>{r=o(hd([0]),d),i=o(),d.length!==0&&(r=o(hd([1]),d),i=o())},l=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let d=0;const p=[];for(;d<e;){i=o();const g=i.slice();p.push(g),d+=i.length}return hs(...p)};return(d,p)=>{a(),c(d);let g;for(;!(g=p(l()));)c();return a(),g}}const FE={bigint:n=>typeof n=="bigint",function:n=>typeof n=="function",boolean:n=>typeof n=="boolean",string:n=>typeof n=="string",stringOrUint8Array:n=>typeof n=="string"||Tn(n),isSafeInteger:n=>Number.isSafeInteger(n),array:n=>Array.isArray(n),field:(n,e)=>e.Fp.isValid(n),hash:n=>typeof n=="function"&&Number.isSafeInteger(n.outputLen)};function bs(n,e,t={}){const i=(r,s,a)=>{const o=FE[s];if(typeof o!="function")throw new Error(`Invalid validator "${s}", expected function`);const c=n[r];if(!(a&&c===void 0)&&!o(c,n))throw new Error(`Invalid param ${String(r)}=${c} (${typeof c}), expected ${s}`)};for(const[r,s]of Object.entries(e))i(r,s,!1);for(const[r,s]of Object.entries(t))i(r,s,!0);return n}const kE=Object.freeze(Object.defineProperty({__proto__:null,bitGet:OE,bitLen:NE,bitMask:Yc,bitSet:BE,bytesToHex:yr,bytesToNumberBE:Pi,bytesToNumberLE:$c,concatBytes:hs,createHmacDrbg:rh,ensureBytes:cn,equalBytes:DE,hexToBytes:xr,hexToNumber:jc,isBytes:Tn,numberToBytesBE:Sr,numberToBytesLE:Zc,numberToHexUnpadded:ih,numberToVarBytesBE:IE,utf8ToBytes:UE,validateObject:bs},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const bt=BigInt(0),dt=BigInt(1),bi=BigInt(2),zE=BigInt(3),gc=BigInt(4),pd=BigInt(5),md=BigInt(8);BigInt(9);BigInt(16);function Nt(n,e){const t=n%e;return t>=bt?t:e+t}function HE(n,e,t){if(t<=bt||e<bt)throw new Error("Expected power/modulo > 0");if(t===dt)return bt;let i=dt;for(;e>bt;)e&dt&&(i=i*n%t),n=n*n%t,e>>=dt;return i}function Zt(n,e,t){let i=n;for(;e-- >bt;)i*=i,i%=t;return i}function _c(n,e){if(n===bt||e<=bt)throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);let t=Nt(n,e),i=e,r=bt,s=dt;for(;t!==bt;){const o=i/t,c=i%t,l=r-s*o;i=t,t=c,r=s,s=l}if(i!==dt)throw new Error("invert: does not exist");return Nt(r,e)}function VE(n){const e=(n-dt)/bi;let t,i,r;for(t=n-dt,i=0;t%bi===bt;t/=bi,i++);for(r=bi;r<n&&HE(r,e,n)!==n-dt;r++);if(i===1){const a=(n+dt)/gc;return function(c,l){const u=c.pow(l,a);if(!c.eql(c.sqr(u),l))throw new Error("Cannot find square root");return u}}const s=(t+dt)/bi;return function(o,c){if(o.pow(c,e)===o.neg(o.ONE))throw new Error("Cannot find square root");let l=i,u=o.pow(o.mul(o.ONE,r),t),d=o.pow(c,s),p=o.pow(c,t);for(;!o.eql(p,o.ONE);){if(o.eql(p,o.ZERO))return o.ZERO;let g=1;for(let m=o.sqr(p);g<l&&!o.eql(m,o.ONE);g++)m=o.sqr(m);const _=o.pow(u,dt<<BigInt(l-g-1));u=o.sqr(_),d=o.mul(d,_),p=o.mul(p,u),l=g}return d}}function GE(n){if(n%gc===zE){const e=(n+dt)/gc;return function(i,r){const s=i.pow(r,e);if(!i.eql(i.sqr(s),r))throw new Error("Cannot find square root");return s}}if(n%md===pd){const e=(n-pd)/md;return function(i,r){const s=i.mul(r,bi),a=i.pow(s,e),o=i.mul(r,a),c=i.mul(i.mul(o,bi),a),l=i.mul(o,i.sub(c,i.ONE));if(!i.eql(i.sqr(l),r))throw new Error("Cannot find square root");return l}}return VE(n)}const WE=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function XE(n){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},t=WE.reduce((i,r)=>(i[r]="function",i),e);return bs(n,t)}function qE(n,e,t){if(t<bt)throw new Error("Expected power > 0");if(t===bt)return n.ONE;if(t===dt)return e;let i=n.ONE,r=e;for(;t>bt;)t&dt&&(i=n.mul(i,r)),r=n.sqr(r),t>>=dt;return i}function jE(n,e){const t=new Array(e.length),i=e.reduce((s,a,o)=>n.is0(a)?s:(t[o]=s,n.mul(s,a)),n.ONE),r=n.inv(i);return e.reduceRight((s,a,o)=>n.is0(a)?s:(t[o]=n.mul(s,t[o]),n.mul(s,a)),r),t}function sh(n,e){const t=e!==void 0?e:n.toString(2).length,i=Math.ceil(t/8);return{nBitLength:t,nByteLength:i}}function $E(n,e,t=!1,i={}){if(n<=bt)throw new Error(`Expected Field ORDER > 0, got ${n}`);const{nBitLength:r,nByteLength:s}=sh(n,e);if(s>2048)throw new Error("Field lengths over 2048 bytes are not supported");const a=GE(n),o=Object.freeze({ORDER:n,BITS:r,BYTES:s,MASK:Yc(r),ZERO:bt,ONE:dt,create:c=>Nt(c,n),isValid:c=>{if(typeof c!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);return bt<=c&&c<n},is0:c=>c===bt,isOdd:c=>(c&dt)===dt,neg:c=>Nt(-c,n),eql:(c,l)=>c===l,sqr:c=>Nt(c*c,n),add:(c,l)=>Nt(c+l,n),sub:(c,l)=>Nt(c-l,n),mul:(c,l)=>Nt(c*l,n),pow:(c,l)=>qE(o,c,l),div:(c,l)=>Nt(c*_c(l,n),n),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>_c(c,n),sqrt:i.sqrt||(c=>a(o,c)),invertBatch:c=>jE(o,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>t?Zc(c,s):Sr(c,s),fromBytes:c=>{if(c.length!==s)throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);return t?$c(c):Pi(c)}});return Object.freeze(o)}function ah(n){if(typeof n!="bigint")throw new Error("field order must be bigint");const e=n.toString(2).length;return Math.ceil(e/8)}function oh(n){const e=ah(n);return e+Math.ceil(e/2)}function ZE(n,e,t=!1){const i=n.length,r=ah(e),s=oh(e);if(i<16||i<s||i>1024)throw new Error(`expected ${s}-1024 bytes of input, got ${i}`);const a=t?Pi(n):$c(n),o=Nt(a,e-dt)+dt;return t?Zc(o,r):Sr(o,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const YE=BigInt(0),Vo=BigInt(1);function KE(n,e){const t=(r,s)=>{const a=s.negate();return r?a:s},i=r=>{const s=Math.ceil(e/r)+1,a=2**(r-1);return{windows:s,windowSize:a}};return{constTimeNegate:t,unsafeLadder(r,s){let a=n.ZERO,o=r;for(;s>YE;)s&Vo&&(a=a.add(o)),o=o.double(),s>>=Vo;return a},precomputeWindow(r,s){const{windows:a,windowSize:o}=i(s),c=[];let l=r,u=l;for(let d=0;d<a;d++){u=l,c.push(u);for(let p=1;p<o;p++)u=u.add(l),c.push(u);l=u.double()}return c},wNAF(r,s,a){const{windows:o,windowSize:c}=i(r);let l=n.ZERO,u=n.BASE;const d=BigInt(2**r-1),p=2**r,g=BigInt(r);for(let _=0;_<o;_++){const m=_*c;let h=Number(a&d);a>>=g,h>c&&(h-=p,a+=Vo);const f=m,E=m+Math.abs(h)-1,v=_%2!==0,T=h<0;h===0?u=u.add(t(v,s[f])):l=l.add(t(T,s[E]))}return{p:l,f:u}},wNAFCached(r,s,a,o){const c=r._WINDOW_SIZE||1;let l=s.get(r);return l||(l=this.precomputeWindow(r,c),c!==1&&s.set(r,o(l))),this.wNAF(c,l,a)}}}function ch(n){return XE(n.Fp),bs(n,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...sh(n.n,n.nBitLength),...n,p:n.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function JE(n){const e=ch(n);bs(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:t,Fp:i,a:r}=e;if(t){if(!i.eql(r,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof t!="object"||typeof t.beta!="bigint"||typeof t.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:QE,hexToBytes:eb}=kE,Mi={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(n){const{Err:e}=Mi;if(n.length<2||n[0]!==2)throw new e("Invalid signature integer tag");const t=n[1],i=n.subarray(2,t+2);if(!t||i.length!==t)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:QE(i),l:n.subarray(t+2)}},toSig(n){const{Err:e}=Mi,t=typeof n=="string"?eb(n):n;if(!Tn(t))throw new Error("ui8a expected");let i=t.length;if(i<2||t[0]!=48)throw new e("Invalid signature tag");if(t[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:r,l:s}=Mi._parseInt(t.subarray(2)),{d:a,l:o}=Mi._parseInt(s);if(o.length)throw new e("Invalid signature: left bytes after parsing");return{r,s:a}},hexFromSig(n){const e=l=>Number.parseInt(l[0],16)&8?"00"+l:l,t=l=>{const u=l.toString(16);return u.length&1?`0${u}`:u},i=e(t(n.s)),r=e(t(n.r)),s=i.length/2,a=r.length/2,o=t(s),c=t(a);return`30${t(a+s+4)}02${c}${r}02${o}${i}`}},kn=BigInt(0),Yt=BigInt(1);BigInt(2);const gd=BigInt(3);BigInt(4);function tb(n){const e=JE(n),{Fp:t}=e,i=e.toBytes||((_,m,h)=>{const f=m.toAffine();return hs(Uint8Array.from([4]),t.toBytes(f.x),t.toBytes(f.y))}),r=e.fromBytes||(_=>{const m=_.subarray(1),h=t.fromBytes(m.subarray(0,t.BYTES)),f=t.fromBytes(m.subarray(t.BYTES,2*t.BYTES));return{x:h,y:f}});function s(_){const{a:m,b:h}=e,f=t.sqr(_),E=t.mul(f,_);return t.add(t.add(E,t.mul(_,m)),h)}if(!t.eql(t.sqr(e.Gy),s(e.Gx)))throw new Error("bad generator point: equation left != right");function a(_){return typeof _=="bigint"&&kn<_&&_<e.n}function o(_){if(!a(_))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function c(_){const{allowedPrivateKeyLengths:m,nByteLength:h,wrapPrivateKey:f,n:E}=e;if(m&&typeof _!="bigint"){if(Tn(_)&&(_=yr(_)),typeof _!="string"||!m.includes(_.length))throw new Error("Invalid key");_=_.padStart(h*2,"0")}let v;try{v=typeof _=="bigint"?_:Pi(cn("private key",_,h))}catch{throw new Error(`private key must be ${h} bytes, hex or bigint, not ${typeof _}`)}return f&&(v=Nt(v,E)),o(v),v}const l=new Map;function u(_){if(!(_ instanceof d))throw new Error("ProjectivePoint expected")}class d{constructor(m,h,f){if(this.px=m,this.py=h,this.pz=f,m==null||!t.isValid(m))throw new Error("x required");if(h==null||!t.isValid(h))throw new Error("y required");if(f==null||!t.isValid(f))throw new Error("z required")}static fromAffine(m){const{x:h,y:f}=m||{};if(!m||!t.isValid(h)||!t.isValid(f))throw new Error("invalid affine point");if(m instanceof d)throw new Error("projective point not allowed");const E=v=>t.eql(v,t.ZERO);return E(h)&&E(f)?d.ZERO:new d(h,f,t.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(m){const h=t.invertBatch(m.map(f=>f.pz));return m.map((f,E)=>f.toAffine(h[E])).map(d.fromAffine)}static fromHex(m){const h=d.fromAffine(r(cn("pointHex",m)));return h.assertValidity(),h}static fromPrivateKey(m){return d.BASE.multiply(c(m))}_setWindowSize(m){this._WINDOW_SIZE=m,l.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!t.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:m,y:h}=this.toAffine();if(!t.isValid(m)||!t.isValid(h))throw new Error("bad point: x or y not FE");const f=t.sqr(h),E=s(m);if(!t.eql(f,E))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:m}=this.toAffine();if(t.isOdd)return!t.isOdd(m);throw new Error("Field doesn't support isOdd")}equals(m){u(m);const{px:h,py:f,pz:E}=this,{px:v,py:T,pz:R}=m,L=t.eql(t.mul(h,R),t.mul(v,E)),C=t.eql(t.mul(f,R),t.mul(T,E));return L&&C}negate(){return new d(this.px,t.neg(this.py),this.pz)}double(){const{a:m,b:h}=e,f=t.mul(h,gd),{px:E,py:v,pz:T}=this;let R=t.ZERO,L=t.ZERO,C=t.ZERO,P=t.mul(E,E),S=t.mul(v,v),b=t.mul(T,T),O=t.mul(E,v);return O=t.add(O,O),C=t.mul(E,T),C=t.add(C,C),R=t.mul(m,C),L=t.mul(f,b),L=t.add(R,L),R=t.sub(S,L),L=t.add(S,L),L=t.mul(R,L),R=t.mul(O,R),C=t.mul(f,C),b=t.mul(m,b),O=t.sub(P,b),O=t.mul(m,O),O=t.add(O,C),C=t.add(P,P),P=t.add(C,P),P=t.add(P,b),P=t.mul(P,O),L=t.add(L,P),b=t.mul(v,T),b=t.add(b,b),P=t.mul(b,O),R=t.sub(R,P),C=t.mul(b,S),C=t.add(C,C),C=t.add(C,C),new d(R,L,C)}add(m){u(m);const{px:h,py:f,pz:E}=this,{px:v,py:T,pz:R}=m;let L=t.ZERO,C=t.ZERO,P=t.ZERO;const S=e.a,b=t.mul(e.b,gd);let O=t.mul(h,v),z=t.mul(f,T),Z=t.mul(E,R),U=t.add(h,f),y=t.add(v,T);U=t.mul(U,y),y=t.add(O,z),U=t.sub(U,y),y=t.add(h,E);let w=t.add(v,R);return y=t.mul(y,w),w=t.add(O,Z),y=t.sub(y,w),w=t.add(f,E),L=t.add(T,R),w=t.mul(w,L),L=t.add(z,Z),w=t.sub(w,L),P=t.mul(S,y),L=t.mul(b,Z),P=t.add(L,P),L=t.sub(z,P),P=t.add(z,P),C=t.mul(L,P),z=t.add(O,O),z=t.add(z,O),Z=t.mul(S,Z),y=t.mul(b,y),z=t.add(z,Z),Z=t.sub(O,Z),Z=t.mul(S,Z),y=t.add(y,Z),O=t.mul(z,y),C=t.add(C,O),O=t.mul(w,y),L=t.mul(U,L),L=t.sub(L,O),O=t.mul(U,z),P=t.mul(w,P),P=t.add(P,O),new d(L,C,P)}subtract(m){return this.add(m.negate())}is0(){return this.equals(d.ZERO)}wNAF(m){return g.wNAFCached(this,l,m,h=>{const f=t.invertBatch(h.map(E=>E.pz));return h.map((E,v)=>E.toAffine(f[v])).map(d.fromAffine)})}multiplyUnsafe(m){const h=d.ZERO;if(m===kn)return h;if(o(m),m===Yt)return this;const{endo:f}=e;if(!f)return g.unsafeLadder(this,m);let{k1neg:E,k1:v,k2neg:T,k2:R}=f.splitScalar(m),L=h,C=h,P=this;for(;v>kn||R>kn;)v&Yt&&(L=L.add(P)),R&Yt&&(C=C.add(P)),P=P.double(),v>>=Yt,R>>=Yt;return E&&(L=L.negate()),T&&(C=C.negate()),C=new d(t.mul(C.px,f.beta),C.py,C.pz),L.add(C)}multiply(m){o(m);let h=m,f,E;const{endo:v}=e;if(v){const{k1neg:T,k1:R,k2neg:L,k2:C}=v.splitScalar(h);let{p:P,f:S}=this.wNAF(R),{p:b,f:O}=this.wNAF(C);P=g.constTimeNegate(T,P),b=g.constTimeNegate(L,b),b=new d(t.mul(b.px,v.beta),b.py,b.pz),f=P.add(b),E=S.add(O)}else{const{p:T,f:R}=this.wNAF(h);f=T,E=R}return d.normalizeZ([f,E])[0]}multiplyAndAddUnsafe(m,h,f){const E=d.BASE,v=(R,L)=>L===kn||L===Yt||!R.equals(E)?R.multiplyUnsafe(L):R.multiply(L),T=v(this,h).add(v(m,f));return T.is0()?void 0:T}toAffine(m){const{px:h,py:f,pz:E}=this,v=this.is0();m==null&&(m=v?t.ONE:t.inv(E));const T=t.mul(h,m),R=t.mul(f,m),L=t.mul(E,m);if(v)return{x:t.ZERO,y:t.ZERO};if(!t.eql(L,t.ONE))throw new Error("invZ was invalid");return{x:T,y:R}}isTorsionFree(){const{h:m,isTorsionFree:h}=e;if(m===Yt)return!0;if(h)return h(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:m,clearCofactor:h}=e;return m===Yt?this:h?h(d,this):this.multiplyUnsafe(e.h)}toRawBytes(m=!0){return this.assertValidity(),i(d,this,m)}toHex(m=!0){return yr(this.toRawBytes(m))}}d.BASE=new d(e.Gx,e.Gy,t.ONE),d.ZERO=new d(t.ZERO,t.ONE,t.ZERO);const p=e.nBitLength,g=KE(d,e.endo?Math.ceil(p/2):p);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:c,weierstrassEquation:s,isWithinCurveOrder:a}}function nb(n){const e=ch(n);return bs(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function ib(n){const e=nb(n),{Fp:t,n:i}=e,r=t.BYTES+1,s=2*t.BYTES+1;function a(y){return kn<y&&y<t.ORDER}function o(y){return Nt(y,i)}function c(y){return _c(y,i)}const{ProjectivePoint:l,normPrivateKeyToScalar:u,weierstrassEquation:d,isWithinCurveOrder:p}=tb({...e,toBytes(y,w,I){const q=w.toAffine(),V=t.toBytes(q.x),H=hs;return I?H(Uint8Array.from([w.hasEvenY()?2:3]),V):H(Uint8Array.from([4]),V,t.toBytes(q.y))},fromBytes(y){const w=y.length,I=y[0],q=y.subarray(1);if(w===r&&(I===2||I===3)){const V=Pi(q);if(!a(V))throw new Error("Point is not on curve");const H=d(V);let N=t.sqrt(H);const G=(N&Yt)===Yt;return(I&1)===1!==G&&(N=t.neg(N)),{x:V,y:N}}else if(w===s&&I===4){const V=t.fromBytes(q.subarray(0,t.BYTES)),H=t.fromBytes(q.subarray(t.BYTES,2*t.BYTES));return{x:V,y:H}}else throw new Error(`Point of length ${w} was invalid. Expected ${r} compressed bytes or ${s} uncompressed bytes`)}}),g=y=>yr(Sr(y,e.nByteLength));function _(y){const w=i>>Yt;return y>w}function m(y){return _(y)?o(-y):y}const h=(y,w,I)=>Pi(y.slice(w,I));class f{constructor(w,I,q){this.r=w,this.s=I,this.recovery=q,this.assertValidity()}static fromCompact(w){const I=e.nByteLength;return w=cn("compactSignature",w,I*2),new f(h(w,0,I),h(w,I,2*I))}static fromDER(w){const{r:I,s:q}=Mi.toSig(cn("DER",w));return new f(I,q)}assertValidity(){if(!p(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!p(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(w){return new f(this.r,this.s,w)}recoverPublicKey(w){const{r:I,s:q,recovery:V}=this,H=C(cn("msgHash",w));if(V==null||![0,1,2,3].includes(V))throw new Error("recovery id invalid");const N=V===2||V===3?I+e.n:I;if(N>=t.ORDER)throw new Error("recovery id 2 or 3 invalid");const G=V&1?"03":"02",ee=l.fromHex(G+g(N)),ae=c(N),fe=o(-H*ae),xe=o(q*ae),De=l.BASE.multiplyAndAddUnsafe(ee,fe,xe);if(!De)throw new Error("point at infinify");return De.assertValidity(),De}hasHighS(){return _(this.s)}normalizeS(){return this.hasHighS()?new f(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return xr(this.toDERHex())}toDERHex(){return Mi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return xr(this.toCompactHex())}toCompactHex(){return g(this.r)+g(this.s)}}const E={isValidPrivateKey(y){try{return u(y),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const y=oh(e.n);return ZE(e.randomBytes(y),e.n)},precompute(y=8,w=l.BASE){return w._setWindowSize(y),w.multiply(BigInt(3)),w}};function v(y,w=!0){return l.fromPrivateKey(y).toRawBytes(w)}function T(y){const w=Tn(y),I=typeof y=="string",q=(w||I)&&y.length;return w?q===r||q===s:I?q===2*r||q===2*s:y instanceof l}function R(y,w,I=!0){if(T(y))throw new Error("first arg must be private key");if(!T(w))throw new Error("second arg must be public key");return l.fromHex(w).multiply(u(y)).toRawBytes(I)}const L=e.bits2int||function(y){const w=Pi(y),I=y.length*8-e.nBitLength;return I>0?w>>BigInt(I):w},C=e.bits2int_modN||function(y){return o(L(y))},P=Yc(e.nBitLength);function S(y){if(typeof y!="bigint")throw new Error("bigint expected");if(!(kn<=y&&y<P))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Sr(y,e.nByteLength)}function b(y,w,I=O){if(["recovered","canonical"].some(be=>be in I))throw new Error("sign() legacy options not supported");const{hash:q,randomBytes:V}=e;let{lowS:H,prehash:N,extraEntropy:G}=I;H==null&&(H=!0),y=cn("msgHash",y),N&&(y=cn("prehashed msgHash",q(y)));const ee=C(y),ae=u(w),fe=[S(ae),S(ee)];if(G!=null){const be=G===!0?V(t.BYTES):G;fe.push(cn("extraEntropy",be))}const xe=hs(...fe),De=ee;function Ae(be){const Qe=L(be);if(!p(Qe))return;const Fe=c(Qe),k=l.BASE.multiply(Qe).toAffine(),rt=o(k.x);if(rt===kn)return;const ge=o(Fe*o(De+rt*ae));if(ge===kn)return;let Ce=(k.x===rt?0:2)|Number(k.y&Yt),Re=ge;return H&&_(ge)&&(Re=m(ge),Ce^=1),new f(rt,Re,Ce)}return{seed:xe,k2sig:Ae}}const O={lowS:e.lowS,prehash:!1},z={lowS:e.lowS,prehash:!1};function Z(y,w,I=O){const{seed:q,k2sig:V}=b(y,w,I),H=e;return rh(H.hash.outputLen,H.nByteLength,H.hmac)(q,V)}l.BASE._setWindowSize(8);function U(y,w,I,q=z){var k;const V=y;if(w=cn("msgHash",w),I=cn("publicKey",I),"strict"in q)throw new Error("options.strict was renamed to lowS");const{lowS:H,prehash:N}=q;let G,ee;try{if(typeof V=="string"||Tn(V))try{G=f.fromDER(V)}catch(rt){if(!(rt instanceof Mi.Err))throw rt;G=f.fromCompact(V)}else if(typeof V=="object"&&typeof V.r=="bigint"&&typeof V.s=="bigint"){const{r:rt,s:ge}=V;G=new f(rt,ge)}else throw new Error("PARSE");ee=l.fromHex(I)}catch(rt){if(rt.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(H&&G.hasHighS())return!1;N&&(w=e.hash(w));const{r:ae,s:fe}=G,xe=C(w),De=c(fe),Ae=o(xe*De),be=o(ae*De),Qe=(k=l.BASE.multiplyAndAddUnsafe(ee,Ae,be))==null?void 0:k.toAffine();return Qe?o(Qe.x)===ae:!1}return{CURVE:e,getPublicKey:v,getSharedSecret:R,sign:Z,verify:U,ProjectivePoint:l,Signature:f,utils:E}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function rb(n){return{hash:n,hmac:(e,...t)=>th(n,e,qx(...t)),randomBytes:jx}}function sb(n,e){const t=i=>ib({...n,...rb(i)});return Object.freeze({...t(e),create:t})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const lh=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),_d=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),ab=BigInt(1),vc=BigInt(2),vd=(n,e)=>(n+e/vc)/e;function ob(n){const e=lh,t=BigInt(3),i=BigInt(6),r=BigInt(11),s=BigInt(22),a=BigInt(23),o=BigInt(44),c=BigInt(88),l=n*n*n%e,u=l*l*n%e,d=Zt(u,t,e)*u%e,p=Zt(d,t,e)*u%e,g=Zt(p,vc,e)*l%e,_=Zt(g,r,e)*g%e,m=Zt(_,s,e)*_%e,h=Zt(m,o,e)*m%e,f=Zt(h,c,e)*h%e,E=Zt(f,o,e)*m%e,v=Zt(E,t,e)*u%e,T=Zt(v,a,e)*_%e,R=Zt(T,i,e)*l%e,L=Zt(R,vc,e);if(!yc.eql(yc.sqr(L),n))throw new Error("Cannot find square root");return L}const yc=$E(lh,void 0,void 0,{sqrt:ob}),Kc=sb({a:BigInt(0),b:BigInt(7),Fp:yc,n:_d,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:n=>{const e=_d,t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-ab*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=t,a=BigInt("0x100000000000000000000000000000000"),o=vd(s*n,e),c=vd(-i*n,e);let l=Nt(n-o*t-c*r,e),u=Nt(-o*i-c*s,e);const d=l>a,p=u>a;if(d&&(l=e-l),p&&(u=e-u),l>a||u>a)throw new Error("splitScalar: Endomorphism failed, k="+n);return{k1neg:d,k1:l,k2neg:p,k2:u}}}},CE);BigInt(0);Kc.ProjectivePoint;const cb=Object.freeze(Object.defineProperty({__proto__:null,secp256k1:Kc},Symbol.toStringTag,{value:"Module"}));var Go;const lb=(Go=Kc)!==null&&Go!==void 0?Go:cb;BigInt("0xffffffffffffffff");BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");const ub=lb.CURVE.n;ub/BigInt(2);var yd;(function(n){n[n.Mainnet=1]="Mainnet",n[n.Goerli=5]="Goerli",n[n.Sepolia=11155111]="Sepolia"})(yd||(yd={}));var xd;(function(n){n.Chainstart="chainstart",n.Homestead="homestead",n.Dao="dao",n.TangerineWhistle="tangerineWhistle",n.SpuriousDragon="spuriousDragon",n.Byzantium="byzantium",n.Constantinople="constantinople",n.Petersburg="petersburg",n.Istanbul="istanbul",n.MuirGlacier="muirGlacier",n.Berlin="berlin",n.London="london",n.ArrowGlacier="arrowGlacier",n.GrayGlacier="grayGlacier",n.MergeForkIdTransition="mergeForkIdTransition",n.Merge="merge",n.Shanghai="shanghai",n.ShardingForkDev="shardingFork"})(xd||(xd={}));var Sd;(function(n){n.ProofOfStake="pos",n.ProofOfWork="pow",n.ProofOfAuthority="poa"})(Sd||(Sd={}));var Ed;(function(n){n.Ethash="ethash",n.Clique="clique",n.Casper="casper"})(Ed||(Ed={}));var bd;(function(n){n.PolygonMainnet="polygon-mainnet",n.PolygonMumbai="polygon-mumbai",n.ArbitrumRinkebyTestnet="arbitrum-rinkeby-testnet",n.ArbitrumOne="arbitrum-one",n.xDaiChain="x-dai-chain",n.OptimisticKovan="optimistic-kovan",n.OptimisticEthereum="optimistic-ethereum"})(bd||(bd={}));var Md;(function(n){n[n.Number=0]="Number",n[n.BigInt=1]="BigInt",n[n.Uint8Array=2]="Uint8Array",n[n.PrefixedHexString=3]="PrefixedHexString"})(Md||(Md={}));var Vn={};Object.defineProperty(Vn,"__esModule",{value:!0});Vn.RLP=Vn.utils=Vn.decode=Vn.encode=void 0;function Jc(n){if(Array.isArray(n)){const t=[];let i=0;for(let r=0;r<n.length;r++){const s=Jc(n[r]);t.push(s),i+=s.length}return Sc(wd(i,192),...t)}const e=mh(n);return e.length===1&&e[0]<128?e:Sc(wd(e.length,128),e)}Vn.encode=Jc;function ir(n,e,t){if(t>n.length)throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");return n.slice(e,t)}function Td(n){if(n[0]===0)throw new Error("invalid RLP: extra zeros");return fh(dh(n))}function wd(n,e){if(n<56)return Uint8Array.from([n+e]);const t=Ec(n),i=t.length/2,r=Ec(e+55+i);return Uint8Array.from(Ia(r+t))}function uh(n,e=!1){if(typeof n>"u"||n===null||n.length===0)return Uint8Array.from([]);const t=mh(n),i=xc(t);if(e)return i;if(i.remainder.length!==0)throw new Error("invalid RLP: remainder must be zero");return i.data}Vn.decode=uh;function xc(n){let e,t,i,r,s;const a=[],o=n[0];if(o<=127)return{data:n.slice(0,1),remainder:n.slice(1)};if(o<=183){if(e=o-127,o===128?i=Uint8Array.from([]):i=ir(n,1,e),e===2&&i[0]<128)throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");return{data:i,remainder:n.slice(e)}}else if(o<=191){if(t=o-182,n.length-1<t)throw new Error("invalid RLP: not enough bytes for string length");if(e=Td(ir(n,1,t)),e<=55)throw new Error("invalid RLP: expected string length to be greater than 55");return i=ir(n,t,e+t),{data:i,remainder:n.slice(e+t)}}else if(o<=247){for(e=o-191,r=ir(n,1,e);r.length;)s=xc(r),a.push(s.data),r=s.remainder;return{data:a,remainder:n.slice(e)}}else{if(t=o-246,e=Td(ir(n,1,t)),e<56)throw new Error("invalid RLP: encoded list too short");const c=t+e;if(c>n.length)throw new Error("invalid RLP: total length is larger than the data");for(r=ir(n,t,c);r.length;)s=xc(r),a.push(s.data),r=s.remainder;return{data:a,remainder:n.slice(c)}}}const db=Array.from({length:256},(n,e)=>e.toString(16).padStart(2,"0"));function dh(n){let e="";for(let t=0;t<n.length;t++)e+=db[n[t]];return e}function fh(n){const e=Number.parseInt(n,16);if(Number.isNaN(e))throw new Error("Invalid byte sequence");return e}function Ia(n){if(typeof n!="string")throw new TypeError("hexToBytes: expected string, got "+typeof n);if(n.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const e=new Uint8Array(n.length/2);for(let t=0;t<e.length;t++){const i=t*2;e[t]=fh(n.slice(i,i+2))}return e}function Sc(...n){if(n.length===1)return n[0];const e=n.reduce((i,r)=>i+r.length,0),t=new Uint8Array(e);for(let i=0,r=0;i<n.length;i++){const s=n[i];t.set(s,r),r+=s.length}return t}function hh(n){return new TextEncoder().encode(n)}function Ec(n){if(n<0)throw new Error("Invalid integer as argument, must be unsigned!");const e=n.toString(16);return e.length%2?`0${e}`:e}function fb(n){return n.length%2?`0${n}`:n}function ph(n){return n.length>=2&&n[0]==="0"&&n[1]==="x"}function hb(n){return typeof n!="string"?n:ph(n)?n.slice(2):n}function mh(n){if(n instanceof Uint8Array)return n;if(typeof n=="string")return ph(n)?Ia(fb(hb(n))):hh(n);if(typeof n=="number"||typeof n=="bigint")return n?Ia(Ec(n)):Uint8Array.from([]);if(n==null)return Uint8Array.from([]);throw new Error("toBytes: received unsupported type "+typeof n)}Vn.utils={bytesToHex:dh,concatBytes:Sc,hexToBytes:Ia,utf8ToBytes:hh};Vn.RLP={encode:Jc,decode:uh};var pb={};/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */(function(n){(function(e){e(typeof DO_NOT_EXPORT_CRC>"u"?n:{})})(function(e){e.version="1.2.2";function t(){for(var P=0,S=new Array(256),b=0;b!=256;++b)P=b,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,P=P&1?-306674912^P>>>1:P>>>1,S[b]=P;return typeof Int32Array<"u"?new Int32Array(S):S}var i=t();function r(P){var S=0,b=0,O=0,z=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(O=0;O!=256;++O)z[O]=P[O];for(O=0;O!=256;++O)for(b=P[O],S=256+O;S<4096;S+=256)b=z[S]=b>>>8^P[b&255];var Z=[];for(O=1;O!=16;++O)Z[O-1]=typeof Int32Array<"u"?z.subarray(O*256,O*256+256):z.slice(O*256,O*256+256);return Z}var s=r(i),a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],p=s[6],g=s[7],_=s[8],m=s[9],h=s[10],f=s[11],E=s[12],v=s[13],T=s[14];function R(P,S){for(var b=S^-1,O=0,z=P.length;O<z;)b=b>>>8^i[(b^P.charCodeAt(O++))&255];return~b}function L(P,S){for(var b=S^-1,O=P.length-15,z=0;z<O;)b=T[P[z++]^b&255]^v[P[z++]^b>>8&255]^E[P[z++]^b>>16&255]^f[P[z++]^b>>>24]^h[P[z++]]^m[P[z++]]^_[P[z++]]^g[P[z++]]^p[P[z++]]^d[P[z++]]^u[P[z++]]^l[P[z++]]^c[P[z++]]^o[P[z++]]^a[P[z++]]^i[P[z++]];for(O+=15;z<O;)b=b>>>8^i[(b^P[z++])&255];return~b}function C(P,S){for(var b=S^-1,O=0,z=P.length,Z=0,U=0;O<z;)Z=P.charCodeAt(O++),Z<128?b=b>>>8^i[(b^Z)&255]:Z<2048?(b=b>>>8^i[(b^(192|Z>>6&31))&255],b=b>>>8^i[(b^(128|Z&63))&255]):Z>=55296&&Z<57344?(Z=(Z&1023)+64,U=P.charCodeAt(O++)&1023,b=b>>>8^i[(b^(240|Z>>8&7))&255],b=b>>>8^i[(b^(128|Z>>2&63))&255],b=b>>>8^i[(b^(128|U>>6&15|(Z&3)<<4))&255],b=b>>>8^i[(b^(128|U&63))&255]):(b=b>>>8^i[(b^(224|Z>>12&15))&255],b=b>>>8^i[(b^(128|Z>>6&63))&255],b=b>>>8^i[(b^(128|Z&63))&255]);return~b}e.table=i,e.bstr=R,e.buf=L,e.str=C})})(pb);var Ad;(function(n){n[n.EIP155ReplayProtection=155]="EIP155ReplayProtection",n[n.EIP1559FeeMarket=1559]="EIP1559FeeMarket",n[n.EIP2718TypedTransaction=2718]="EIP2718TypedTransaction",n[n.EIP2930AccessLists=2930]="EIP2930AccessLists"})(Ad||(Ad={}));const mb=2;Qf(mb.toString(16).padStart(2,"0"));const gb=1;Qf(gb.toString(16).padStart(2,"0"));class Et{constructor(e){if(this.toAddress=()=>{if(this.isDirect()){const t=this._iban.slice(4),i=Et._parseInt(t,36),r=cd(i,40);return SE(r)}throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35")},Et.isIndirect(e)||Et.isDirect(e))this._iban=e;else throw new Error("Invalid IBAN was provided")}static isDirect(e){return e.length===34||e.length===35}isDirect(){return Et.isDirect(this._iban)}static isIndirect(e){return e.length===20}isIndirect(){return Et.isIndirect(this._iban)}static isValid(e){return/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(e)&&Et._mod9710(Et._iso13616Prepare(e))===1}isValid(){return Et.isValid(this._iban)}static fromBban(e){const t="XE",r=`0${(98-this._mod9710(this._iso13616Prepare(`${t}00${e}`))).toString()}`.slice(-2);return new Et(`${t}${r}${e}`)}static createIndirect(e){return Et.fromBban(`ETH${e.institution}${e.identifier}`)}static fromAddress(e){if(!us(e))throw new Cf(e);const i=BigInt(yE(e)).toString(36),r=cd(i,15);return Et.fromBban(r.toUpperCase())}static toIban(e){return Et.fromAddress(e).toString()}client(){return this.isIndirect()?this._iban.slice(11):""}checksum(){return this._iban.slice(2,4)}institution(){return this.isIndirect()?this._iban.slice(7,11):""}toString(){return this._iban}}Et._iso13616Prepare=n=>{const i=n.toUpperCase();return`${i.slice(4)}${i.slice(0,4)}`.split("").map(s=>{const a=s.charCodeAt(0);return a>=65&&a<=90?a-65+10:s}).join("")};Et._parseInt=(n,e)=>[...n].reduce((t,i)=>BigInt(parseInt(i,e))+BigInt(e)*t,BigInt(0));Et._mod9710=n=>{let e=n,t;for(;e.length>2;)t=e.slice(0,9),e=`${(parseInt(t,10)%97).toString()}${e.slice(t.length)}`;return parseInt(e,10)%97};Et.toAddress=n=>new Et(n).toAddress();(function(n,e){if(n.setImmediate)return;var t=1,i={},r=!1,s=n.document,a;function o(E){typeof E!="function"&&(E=new Function(""+E));for(var v=new Array(arguments.length-1),T=0;T<v.length;T++)v[T]=arguments[T+1];var R={callback:E,args:v};return i[t]=R,a(t),t++}function c(E){delete i[E]}function l(E){var v=E.callback,T=E.args;switch(T.length){case 0:v();break;case 1:v(T[0]);break;case 2:v(T[0],T[1]);break;case 3:v(T[0],T[1],T[2]);break;default:v.apply(e,T);break}}function u(E){if(r)setTimeout(u,0,E);else{var v=i[E];if(v){r=!0;try{l(v)}finally{c(E),r=!1}}}}function d(){a=function(E){process.nextTick(function(){u(E)})}}function p(){if(n.postMessage&&!n.importScripts){var E=!0,v=n.onmessage;return n.onmessage=function(){E=!1},n.postMessage("","*"),n.onmessage=v,E}}function g(){var E="setImmediate$"+Math.random()+"$",v=function(T){T.source===n&&typeof T.data=="string"&&T.data.indexOf(E)===0&&u(+T.data.slice(E.length))};n.addEventListener?n.addEventListener("message",v,!1):n.attachEvent("onmessage",v),a=function(T){n.postMessage(E+T,"*")}}function _(){var E=new MessageChannel;E.port1.onmessage=function(v){var T=v.data;u(T)},a=function(v){E.port2.postMessage(v)}}function m(){var E=s.documentElement;a=function(v){var T=s.createElement("script");T.onreadystatechange=function(){u(v),T.onreadystatechange=null,E.removeChild(T),T=null},E.appendChild(T)}}function h(){a=function(E){setTimeout(u,0,E)}}var f=Object.getPrototypeOf&&Object.getPrototypeOf(n);f=f&&f.setTimeout?f:n,{}.toString.call(n.process)==="[object process]"?d():p()?g():n.MessageChannel?_():s&&"onreadystatechange"in s.createElement("script")?m():h(),f.setImmediate=o,f.clearImmediate=c})(typeof self>"u"?Wr:self);const _b={type:"object",properties:{address:{format:"address"},storageKeys:{type:"array",items:{format:"bytes32"}}}},Qc={type:"array",items:Object.assign({},_b)};Object.assign({},Qc);const Rd={type:"string",enum:["goerli","kovan","mainnet","rinkeby","ropsten","sepolia"]},Cd={type:"string",enum:["arrowGlacier","berlin","byzantium","chainstart","constantinople","dao","homestead","istanbul","london","merge","muirGlacier","petersburg","shanghai","spuriousDragon","tangerineWhistle"]},vb={type:"object",properties:{name:{format:"string"},networkId:{format:"uint"},chainId:{format:"uint"}}},yb={type:"object",properties:{from:{format:"address"},to:{oneOf:[{format:"address"},{type:"null"}]},value:{format:"uint"},gas:{format:"uint"},gasPrice:{format:"uint"},effectiveGasPrice:{format:"uint"},type:{format:"uint"},maxFeePerGas:{format:"uint"},maxPriorityFeePerGas:{format:"uint"},accessList:Object.assign({},Qc),data:{format:"bytes"},input:{format:"bytes"},nonce:{format:"uint"},chain:Object.assign({},Rd),hardfork:Object.assign({},Cd),chainId:{format:"uint"},networkId:{format:"uint"},common:{type:"object",properties:{customChain:Object.assign({},vb),baseChain:Object.assign({},Rd),hardfork:Object.assign({},Cd)}},gasLimit:{format:"uint"},v:{format:"uint"},r:{format:"bytes32"},s:{format:"bytes32"}}},xb={type:"object",properties:Object.assign(Object.assign({},yb.properties),{blockHash:{format:"bytes32"},blockNumber:{format:"uint"},hash:{format:"bytes32"},transactionIndex:{format:"uint"},from:{format:"address"},to:{oneOf:[{format:"address"},{type:"null"}]},value:{format:"uint"},gas:{format:"uint"},gasPrice:{format:"uint"},effectiveGasPrice:{format:"uint"},type:{format:"uint"},maxFeePerGas:{format:"uint"},maxPriorityFeePerGas:{format:"uint"},accessList:Object.assign({},Qc),data:{format:"bytes"},input:{format:"bytes"},nonce:{format:"uint"},gasLimit:{format:"uint"},v:{format:"uint"},r:{format:"bytes32"},s:{format:"bytes32"}})};Object.assign({},xb);const Sb={type:"object",properties:{index:{format:"uint"},validatorIndex:{format:"uint"},address:{format:"address"},amount:{format:"uint"}}};Object.assign({},Sb);const Eb={type:"object",properties:{removed:{format:"bool"},logIndex:{format:"uint"},transactionIndex:{format:"uint"},transactionHash:{format:"bytes32"},blockHash:{format:"bytes32"},blockNumber:{format:"uint"},address:{format:"address"},data:{format:"bytes"},topics:{type:"array",items:{format:"bytes32"}}}};Object.assign({},Eb);const bb={type:"object",properties:{key:{format:"bytes32"},value:{format:"uint"},proof:{type:"array",items:{format:"bytes32"}}}};Object.assign({},bb);fs.HEX,ds.NUMBER;const Er=new Map;let ea=BigInt(256);for(let n=8;n<=256;n+=8)Er.set(`uint${n}`,{min:BigInt(0),max:ea-BigInt(1)}),Er.set(`int${n}`,{min:-ea/BigInt(2),max:ea/BigInt(2)-BigInt(1)}),ea*=BigInt(256);Er.set("int",Er.get("int256"));Er.set("uint",Er.get("uint256"));BigInt(1)<<BigInt(256);async function Mb(){const n="BQYd0rsSmffBzkLkUs5bJkqCPlHKZPiz";JSON.stringify({query:`
  query ($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
    ethereum(network: $network) {
      transfers(
        options: {desc: "block.height", limit: $limit, offset: $offset}
        time: {since: $from, till: $till}
        amount: {gt: 0}
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        sender {
          address
          annotation
        }
        receiver {
          address
          annotation
        }
        currency {
          address
          symbol
        }
        amount
        amount_usd: amount(in: USD)
        transaction {
          hash
        }
        external
      }
    }
  }  
  `,variables:{limit:5,offset:0,network:"ethclassic",from:"2024-04-05T10:04:56.000Z",till:"2024-04-05T10:34:56.999Z",dateFormat:"%Y-%m-%d"}})}function Tb(){let n=Ov();const e=n.scene,t=n.camera,i=n.renderer,r=n.lights,s=new Vv(e,t),a=new qv(e,t,s);let o="http://localhost:8080/getData_RESDB",c=new URLSearchParams(window.location.search),u=Object.fromEntries(c.entries()).link;u&&(o=u),Rf(o,E=>{s.loadData(E),a.isDataLoaded=!0,lx(s,a,E)});function d(E){a.onMouseMove(E)}function p(E){a.onMouseDown(E)}function g(E){a.onMouseUp(E)}function _(E){a.onWheelEvent(E)}function m(E){a.onMouseDblClick(E)}function h(E){a.onMouseClick(E)}window.addEventListener("mousemove",d,!1),document.body.addEventListener("mousedown",p,!0),document.body.addEventListener("mouseup",g,!0),document.body.addEventListener("wheel",_,!0),document.body.addEventListener("dblclick",m,!0),document.body.addEventListener("click",h,!0);function f(){requestAnimationFrame(f),a.update(),s.update(),r.position.x=t.position.x,r.position.z=t.position.z,i.render(e,t)}Mb(),f()}Tb()});export default wb();
