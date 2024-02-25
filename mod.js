// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,d,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,g,"e-0$1"),r.alternate&&(t=l.call(t,v,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var A=String.fromCharCode,E=isNaN,S=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function F(r){var n,e,t,a,o,f,c,s,l,p,g,v,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(n=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,E(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,v=t.padRight,y=void 0,(y=g-p.length)<0?p:p=v?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,e,t,i;for(e=[],i=0,t=T.exec(r);t;)(n=r.slice(i,T.lastIndex-t[0].length)).length&&e.push(n),e.push(V(t)),i=T.lastIndex,t=T.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function I(r){var n,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return F.apply(null,n)}var U=Object.prototype,x=U.toString,O=U.__defineGetter__,k=U.__defineSetter__,N=U.__lookupGetter__,P=U.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(N.call(r,n)||P.call(r,n)?(t=r.__proto__,r.__proto__=U,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,e.get),o&&k&&k.call(r,n,e.set),r};function W(r,n,e){R(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}var $={};W($,"isSameValuef",(function(r,n){return r===n?0!==r||1/r==1/n:r!=r&&n!=n})),W($,"isSameValueZerof",(function(r,n){return r===n||r!=r&&n!=n}));var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return G&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var C=Object.prototype.hasOwnProperty;var L,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";L=M()?function(r){var n,e,t,i,a;if(null==r)return H.call(r);e=r[q],a=q,n=null!=(i=r)&&C.call(i,a);try{r[q]=void 0}catch(n){return H.call(r)}return t=H.call(r),n?r[q]=e:delete r[q],t}:function(r){return H.call(r)};var z=L,B="function"==typeof Float32Array;var X=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null;var D,J="function"==typeof Float32Array?Float32Array:void 0;D=function(){var r,n,e;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,5e40]),e=n,r=(B&&e instanceof Float32Array||"[object Float32Array]"===z(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===X}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var nr,er="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,e;if("function"!=typeof rr)return!1;try{n=new rr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(Q&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=nr,ir=new K(1),ar=new tr(ir.buffer);function or(r){return ir[0]=r,ar[0]}var ur=127;var fr=new K(1);new tr(fr.buffer)[0]=2139095040;var cr=fr[0],sr=new K(1);new tr(sr.buffer)[0]=4286578688;var lr=sr[0];function pr(r){return r!=r}var gr=Math.floor;function vr(r){return gr(r)===r}function yr(r){return vr(r/2)}function hr(r){return yr(r>0?r-1:r+1)}var dr=Number,wr=dr.NEGATIVE_INFINITY;function br(r){return r===X||r===wr}var mr=Math.sqrt;function Ar(r){return Math.abs(r)}function Er(r,n,e){R(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Sr="function"==typeof Float64Array;var _r="function"==typeof Float64Array?Float64Array:null;var Fr,Tr="function"==typeof Float64Array?Float64Array:void 0;Fr=function(){var r,n,e;if("function"!=typeof _r)return!1;try{n=new _r([1,3.14,-3.14,NaN]),e=n,r=(Sr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var Vr=Fr,jr="function"==typeof Uint8Array;var Ir="function"==typeof Uint8Array?Uint8Array:null;var Ur,xr="function"==typeof Uint8Array?Uint8Array:void 0;Ur=function(){var r,n,e;if("function"!=typeof Ir)return!1;try{n=new Ir(n=[1,3.14,-3.14,256,257]),e=n,r=(jr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var Or=Ur,kr="function"==typeof Uint16Array;var Nr="function"==typeof Uint16Array?Uint16Array:null;var Pr,Rr="function"==typeof Uint16Array?Uint16Array:void 0;Pr=function(){var r,n,e;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(kr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Wr,$r={uint16:Pr,uint8:Or};(Wr=new $r.uint16(1))[0]=4660;var Gr,Mr,Hr=52===new $r.uint8(Wr.buffer)[0];!0===Hr?(Gr=1,Mr=0):(Gr=0,Mr=1);var Cr={HIGH:Gr,LOW:Mr},Lr=new Vr(1),Zr=new tr(Lr.buffer),qr=Cr.HIGH,zr=Cr.LOW;function Br(r,n,e,t){return Lr[0]=r,n[t]=Zr[qr],n[t+e]=Zr[zr],n}function Xr(r){return Br(r,[0,0],1,0)}Er(Xr,"assign",Br);var Yr=!0===Hr?0:1,Dr=new Vr(1),Jr=new tr(Dr.buffer);function Kr(r,n){return Dr[0]=r,Jr[Yr]=n>>>0,Dr[0]}function Qr(r){return 0|r}var rn,nn,en=2147483647,tn=2147483648,an=!0===Hr?1:0,on=new Vr(1),un=new tr(on.buffer);function fn(r){return on[0]=r,un[an]}!0===Hr?(rn=1,nn=0):(rn=0,nn=1);var cn={HIGH:rn,LOW:nn},sn=new Vr(1),ln=new tr(sn.buffer),pn=cn.HIGH,gn=cn.LOW;function vn(r,n){return ln[pn]=r,ln[gn]=n,sn[0]}var yn=[0,0];function hn(r,n){var e,t;return Xr.assign(r,yn,1,0),e=yn[0],e&=en,t=fn(n),vn(e|=t&=tn,yn[1])}var dn=1072693247,wn=1e300,bn=1e-300;var mn=!0===Hr?1:0,An=new Vr(1),En=new tr(An.buffer);function Sn(r,n){return An[0]=r,En[mn]=n>>>0,An[0]}var _n=1023;var Fn=1048575,Tn=1048576,Vn=1072693248,jn=536870912,In=524288,Un=20,xn=9007199254740992,On=.9617966939259756,kn=.9617967009544373,Nn=-7.028461650952758e-9,Pn=[1,1.5],Rn=[0,.5849624872207642],Wn=[0,1.350039202129749e-8];var $n=1.4426950408889634,Gn=1.4426950216293335,Mn=1.9259629911266175e-8;var Hn=1023,Cn=-1023,Ln=-1074,Zn=22250738585072014e-324,qn=4503599627370496;function zn(r,n,e,t){return pr(r)||br(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Ar(r)<Zn?(n[t]=r*qn,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}Er((function(r){return zn(r,[0,0],1,0)}),"assign",zn);var Bn=2146435072;var Xn=2220446049250313e-31,Yn=2148532223,Dn=[0,0],Jn=[0,0];function Kn(r,n){var e,t;return 0===n||0===r||pr(r)||br(r)?r:(zn(r,Dn,1,0),r=Dn[0],n+=Dn[1],n+=function(r){var n=fn(r);return(n=(n&Bn)>>>20)-_n|0}(r),n<Ln?hn(0,r):n>Hn?r<0?wr:X:(n<=Cn?(n+=52,t=Xn):t=1,Xr.assign(r,Jn,1,0),e=Jn[0],e&=Yn,t*vn(e|=n+_n<<20,Jn[1])))}var Qn=.6931471805599453,re=1048575;var ne=1048576,ee=1071644672,te=20,ie=.6931471824645996,ae=-1.904654299957768e-9;var oe=1072693247,ue=1105199104,fe=1139802112,ce=1083179008,se=1072693248,le=1083231232,pe=3230714880,ge=31,ve=1e300,ye=1e-300,he=8008566259537294e-32,de=[0,0],we=[0,0];function be(r,n){var e,t,i,a,o,u,f,c,s,l,p,g,v,y;if(pr(r)||pr(n))return NaN;if(Xr.assign(n,de,1,0),o=de[0],0===de[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mr(r);if(-.5===n)return 1/mr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(br(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ar(r)<1==(n===X)?0:X}(r,n)}if(Xr.assign(r,de,1,0),a=de[0],0===de[1]){if(0===a)return function(r,n){return n===wr?X:n===X?0:n>0?hr(n)?r:0:hr(n)?hn(X,r):X}(r,n);if(1===r)return 1;if(-1===r&&hr(n))return-1;if(br(r))return r===wr?be(-0,-n):n<0?0:X}if(r<0&&!1===vr(n))return(r-r)/(r-r);if(i=Ar(r),e=a&en|0,t=o&en|0,f=o>>>ge|0,u=(u=a>>>ge|0)&&hr(n)?-1:1,t>ue){if(t>fe)return function(r,n){return(fn(r)&en)<=dn?n<0?wn*wn:bn*bn:n>0?wn*wn:bn*bn}(r,n);if(e<oe)return 1===f?u*ve*ve:u*ye*ye;if(e>se)return 0===f?u*ve*ve:u*ye*ye;p=function(r,n){var e,t,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*Mn-a*$n)-((t=Kr(t=(o=Gn*i)+u,0))-o),r[0]=t,r[1]=e,r}(we,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,g,v,y,h,d,w,b,m,A,E,S;return m=0,e<Tn&&(m-=53,e=fn(n*=xn)),m+=(e>>Un)-_n|0,e=(A=e&Fn|0)|Vn|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,e-=Tn),o=Kr(i=(w=(n=Sn(n,e))-(c=Pn[E]))*(b=1/(n+c)),0),t=(e>>1|jn)+In,f=Sn(0,t+=E<<18),d=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),f=Kr(f=3+(a=o*o)+(d+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),l=Kr(l=(w=o*f)+(b=u*f+(d-(f-3-a))*i),0),p=kn*l,y=(g=Nn*l+(b-(l-w))*On+Wn[E])-((v=Kr(v=p+g+(s=Rn[E])+(h=m),0))-h-s-p),r[0]=v,r[1]=y,r}(we,i,e);if(g=(l=(n-(c=Kr(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Xr.assign(g,de,1,0),v=Qr(de[0]),y=Qr(de[1]),v>=ce){if(0!=(v-ce|y))return u*ve*ve;if(l+he>g-s)return u*ve*ve}else if((v&en)>=le){if(0!=(v-pe|y))return u*ye*ye;if(l<=g-s)return u*ye*ye}return g=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&en|0)>>te)-_n|0,c=0,s>ee&&(i=Sn(0,((c=r+(ne>>l+1)>>>0)&~(re>>(l=((c&en)>>te)-_n|0)))>>>0),c=(c&re|ne)>>te-l>>>0,r<0&&(c=-c),n-=i),r=Qr(r=fn(f=1-((f=(a=(i=Kr(i=e+n,0))*ie)+(o=(e-(i-n))*Qn+i*ae))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<te>>>0)>>te<=0?Kn(f,c):Sn(f,r)}(v,s,l),u*g}var me="function"==typeof Math.fround?Math.fround:null,Ae=new K(1);var Ee="function"==typeof me?me:function(r){return Ae[0]=r,Ae[0]};var Se=new tr(1),_e=new K(Se.buffer);var Fe=11754943508222875e-54;var Te=8388608;function Ve(r,n,e,t){return r!=r||r===cr||r===lr?(n[t]=r,n[t+e]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<Fe?(r=Ee(r*Te),n[t]=r,n[t+e]=-23,n):(n[t]=r,n[t+e]=0,n)}function je(r){return Ve(r,[0,0],1,0)}Er(je,"assign",Ve);function Ie(r){return"number"==typeof r}var Ue=dr.prototype.toString;var xe=M();function Oe(r){return"object"==typeof r&&(r instanceof dr||(xe?function(r){try{return Ue.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function ke(r){return Ie(r)||Oe(r)}function Ne(r){return r<X&&r>wr&&vr(r)}function Pe(r){return Ie(r)&&Ne(r)}function Re(r){return Oe(r)&&Ne(r.valueOf())}function We(r){return Pe(r)||Re(r)}function $e(r){return Pe(r)&&r>=0}function Ge(r){return Re(r)&&r.valueOf()>=0}function Me(r){return $e(r)||Ge(r)}function He(r){return"string"==typeof r}Er(ke,"isPrimitive",Ie),Er(ke,"isObject",Oe),Er(We,"isPrimitive",Pe),Er(We,"isObject",Re),Er(Me,"isPrimitive",$e),Er(Me,"isObject",Ge);var Ce=String.prototype.valueOf;var Le=M();function Ze(r){return"object"==typeof r&&(r instanceof String||(Le?function(r){try{return Ce.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function qe(r){return He(r)||Ze(r)}Er(qe,"isPrimitive",He),Er(qe,"isObject",Ze);var ze=9007199254740991,Be=void 0!==String.prototype.repeat;var Xe=String.prototype.repeat;var Ye=Be?function(r,n){return Xe.call(r,n)}:function(r,n){var e,t;if(0===r.length||0===n)return"";for(e="",t=n;1==(1&t)&&(e+=r),0!=(t>>>=1);)r+=r;return e},De=Math.ceil;function Je(r,n,e){var t;if(!He(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!$e(n))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!He(t=e))throw new TypeError(I("invalid argument. Third argument must be a string. Value: `%s`.",t));if(0===t.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else t=" ";if(n>ze)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return function(r,n,e){var t=(n-r.length)/e.length;return t<=0?r:(t=De(t),r+Ye(e,t))}(r,n,t)}var Ke=9007199254740991,Qe=Math.ceil;function rt(r,n,e){var t;if(!He(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!$e(n))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!He(t=e))throw new TypeError(I("invalid argument. Third argument must be a string. Value: `%s`.",t));if(0===t.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else t=" ";if(n>Ke)throw new RangeError(I("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return function(r,n,e){var t=(n-r.length)/e.length;return t<=0?r:(t=Qe(t),Ye(e,t)+r)}(r,n,t)}function nt(r,n){if(!He(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));if(!$e(n))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return Ye(r,n)}function et(r){for(var n,e="";r>0;)e=(n=r/2)===(r=gr(n))?"0"+e:"1"+e;return e}var tt=149,it=24;var at={};W(at,"assert",$),W(at,"exponentf",(function(r){var n=or(r);return(n=(2139095040&n)>>>23)-ur})),W(at,"fromBinaryStringf",(function(r){var n,e,t;if(32!==r.length)throw new Error(I("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(n="1"===r[0]?-1:1,t=parseInt(r.substring(1,9),2)-ur,e=function(r){var n,e=0;for(n=0;n<r.length;n++)"1"===r[n]&&(e+=be(2,-(n+1)));return e}(r.substring(9)),-127===t){if(0===e)return 1===n?0:-0;t=-126}else{if(128===t)return 0===e?1===n?cr:lr:NaN;e+=1}return Ee(n*e*be(2,t))})),W(at,"fromWordf",(function(r){return Se[0]=r,_e[0]})),W(at,"normalizef",je),W(at,"signbitf",(function(r){return!!(or(r)>>>31)})),W(at,"significandf",(function(r){return 8388607&or(r)})),W(at,"toBinaryStringf",(function(r){var n,e,t,i,a,o,u;if(e=r<0||1/r===lr?"1":"0",r===cr||r===lr)return e+(i=nt("1",8))+(t=nt("0",23));if(r!=r)return e+(i=nt("1",8))+(t="1"+nt("0",22));if(0===r)return e+(i=nt("0",8))+(t=nt("0",23));if(o=(r=Ar(r))-(a=gr(r)),a=et(a),o=function(r){var n,e,t,i;if(n="",0===r)return n;for(i=tt,t=0;t<tt&&((e=2*r)>=1?(r=e-1,n+="1",i===tt&&(i=t)):(r=e,n+="0"),!(1===e||t-i>it));t++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return t=a+o,i<0?(i<=-127&&(n=126),t=t.substring(n)):t=t.substring(1),e+(i=rt(i=et(i+ur),8,"0"))+(t=Je(t,23,"0").substring(0,23))})),W(at,"float32ToInt32",(function(r){return 0|r})),W(at,"float32ToUint32",(function(r){return r>>>0})),W(at,"toWordf",or);var ot={};W(ot,"base",at);export{at as base,ot as default};
//# sourceMappingURL=mod.js.map
