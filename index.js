// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function E(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,S=isNaN,F=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,a,o,f,l,s,p;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),f+=t.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(j(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function V(r){return"string"==typeof r}function U(r){var e,n,t;if(!V(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return x.apply(null,n)}var O=Object.prototype,N=O.toString,$=O.__defineGetter__,P=O.__defineSetter__,R=O.__lookupGetter__,C=O.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(R.call(r,e)||C.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&P&&P.call(r,e,n.set),r};function M(r,e,n){G(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var L=W();function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var H,X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";H=Z()?function(r){var e,n,t,i,a;if(null==r)return X.call(r);n=r[q],a=q,e=null!=(i=r)&&Y.call(i,a);try{r[q]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[q]=n:delete r[q],t}:function(r){return X.call(r)};var B,D=H,J="function"==typeof Float32Array,K=Number.POSITIVE_INFINITY,Q="function"==typeof Float32Array?Float32Array:null,rr="function"==typeof Float32Array?Float32Array:void 0;B=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,5e40]),n=e,r=(J&&n instanceof Float32Array||"[object Float32Array]"===D(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===K}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,nr=B,tr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=er,ur=new nr(1),cr=new or(ur.buffer);function fr(r){return ur[0]=r,cr[0]}var lr,sr=127,pr=W(),gr=Object.prototype.toString,yr=Object.prototype.hasOwnProperty,dr="function"==typeof Symbol?Symbol.toStringTag:"";lr=pr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return gr.call(r);n=r[dr],a=dr,e=null!=(i=r)&&yr.call(i,a);try{r[dr]=void 0}catch(e){return gr.call(r)}return t=gr.call(r),e?r[dr]=n:delete r[dr],t}:function(r){return gr.call(r)};var hr,vr=lr,wr="function"==typeof Float32Array,br=Number.POSITIVE_INFINITY,mr="function"==typeof Float32Array?Float32Array:null,Ar="function"==typeof Float32Array?Float32Array:void 0;hr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr([1,3.14,-3.14,5e40]),n=e,r=(wr&&n instanceof Float32Array||"[object Float32Array]"===vr(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===br}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Er,_r=hr,Sr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,Tr="function"==typeof Uint32Array?Uint32Array:void 0;Er=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Sr&&n instanceof Uint32Array||"[object Uint32Array]"===vr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var xr=Er,Ir=new _r(1);new xr(Ir.buffer)[0]=2139095040;var jr=Ir[0],kr=new _r(1);new xr(kr.buffer)[0]=4286578688;var Vr=kr[0],Ur=127;function Or(r){return r!=r}var Nr=Math.floor;function $r(r){return Nr(r)===r}function Pr(r){return $r(r/2)}function Rr(r){return Pr(r>0?r-1:r+1)}var Cr=Number.NEGATIVE_INFINITY;function Gr(r){return r===br||r===Cr}var Mr=Math.sqrt;function Wr(r){return Math.abs(r)}var Lr="function"==typeof Object.defineProperty?Object.defineProperty:null,Zr=Object.defineProperty,Hr=Object.prototype,Xr=Hr.toString,Yr=Hr.__defineGetter__,zr=Hr.__defineSetter__,qr=Hr.__lookupGetter__,Br=Hr.__lookupSetter__,Dr=function(){try{return Lr({},"x",{}),!0}catch(r){return!1}}()?Zr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Xr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===Xr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(qr.call(r,e)||Br.call(r,e)?(t=r.__proto__,r.__proto__=Hr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Yr&&Yr.call(r,e,n.get),o&&zr&&zr.call(r,e,n.set),r};function Jr(r,e,n){Dr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Kr,Qr="function"==typeof Float64Array,re="function"==typeof Float64Array?Float64Array:null,ee="function"==typeof Float64Array?Float64Array:void 0;Kr=function(){var r,e,n;if("function"!=typeof re)return!1;try{e=new re([1,3.14,-3.14,NaN]),n=e,r=(Qr&&n instanceof Float64Array||"[object Float64Array]"===vr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ne,te=Kr,ie="function"==typeof Uint8Array,ae="function"==typeof Uint8Array?Uint8Array:null,oe="function"==typeof Uint8Array?Uint8Array:void 0;ne=function(){var r,e,n;if("function"!=typeof ae)return!1;try{e=new ae(e=[1,3.14,-3.14,256,257]),n=e,r=(ie&&n instanceof Uint8Array||"[object Uint8Array]"===vr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?oe:function(){throw new Error("not implemented")};var ue,ce=ne,fe="function"==typeof Uint16Array,le="function"==typeof Uint16Array?Uint16Array:null,se="function"==typeof Uint16Array?Uint16Array:void 0;ue=function(){var r,e,n;if("function"!=typeof le)return!1;try{e=new le(e=[1,3.14,-3.14,65536,65537]),n=e,r=(fe&&n instanceof Uint16Array||"[object Uint16Array]"===vr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?se:function(){throw new Error("not implemented")};var pe,ge={uint16:ue,uint8:ce};(pe=new ge.uint16(1))[0]=4660;var ye,de,he=52===new ge.uint8(pe.buffer)[0];!0===he?(ye=1,de=0):(ye=0,de=1);var ve={HIGH:ye,LOW:de},we=new te(1),be=new xr(we.buffer),me=ve.HIGH,Ae=ve.LOW;function Ee(r,e,n,t){return we[0]=r,e[t]=be[me],e[t+n]=be[Ae],e}function _e(r){return Ee(r,[0,0],1,0)}Jr(_e,"assign",Ee);var Se=!0===he?0:1,Fe=new te(1),Te=new xr(Fe.buffer);function xe(r,e){return Fe[0]=r,Te[Se]=e>>>0,Fe[0]}function Ie(r){return 0|r}var je,ke,Ve=2147483647,Ue=!0===he?1:0,Oe=new te(1),Ne=new xr(Oe.buffer);function $e(r){return Oe[0]=r,Ne[Ue]}!0===he?(je=1,ke=0):(je=0,ke=1);var Pe={HIGH:je,LOW:ke},Re=new te(1),Ce=new xr(Re.buffer),Ge=Pe.HIGH,Me=Pe.LOW;function We(r,e){return Ce[Ge]=r,Ce[Me]=e,Re[0]}var Le=[0,0];function Ze(r,e){var n,t;return _e.assign(r,Le,1,0),n=Le[0],n&=Ve,t=$e(e),We(n|=t&=2147483648,Le[1])}var He=!0===he?1:0,Xe=new te(1),Ye=new xr(Xe.buffer);function ze(r,e){return Xe[0]=r,Ye[He]=e>>>0,Xe[0]}var qe=1023,Be=1048576,De=[1,1.5],Je=[0,.5849624872207642],Ke=[0,1.350039202129749e-8];function Qe(r,e,n,t){return Or(r)||Gr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Wr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Jr((function(r){return Qe(r,[0,0],1,0)}),"assign",Qe);var rn=[0,0],en=[0,0];function nn(r,e){var n,t;return 0===e||0===r||Or(r)||Gr(r)?r:(Qe(r,rn,1,0),e+=rn[1],e+=function(r){var e=$e(r);return(e=(2146435072&e)>>>20)-qe|0}(r=rn[0]),e<-1074?Ze(0,r):e>1023?r<0?Cr:br:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,_e.assign(r,en,1,0),n=en[0],n&=2148532223,t*We(n|=e+qe<<20,en[1])))}var tn=1048575,an=1048576,on=1083179008,un=1e300,cn=1e-300,fn=[0,0],ln=[0,0];function sn(r,e){var n,t,i,a,o,u,c,f,l,s,p,g,y,d;if(Or(r)||Or(e))return NaN;if(_e.assign(e,fn,1,0),o=fn[0],0===fn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Mr(r);if(-.5===e)return 1/Mr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Gr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Wr(r)<1==(e===br)?0:br}(r,e)}if(_e.assign(r,fn,1,0),a=fn[0],0===fn[1]){if(0===a)return function(r,e){return e===Cr?br:e===br?0:e>0?Rr(e)?r:0:Rr(e)?Ze(br,r):br}(r,e);if(1===r)return 1;if(-1===r&&Rr(e))return-1;if(Gr(r))return r===Cr?sn(-0,-e):e<0?0:br}if(r<0&&!1===$r(e))return(r-r)/(r-r);if(i=Wr(r),n=a&Ve|0,t=o&Ve|0,c=o>>>31|0,u=(u=a>>>31|0)&&Rr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return($e(r)&Ve)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*un*un:u*cn*cn;if(n>1072693248)return 0===c?u*un*un:u*cn*cn;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=xe(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(ln,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,l,s,p,g,y,d,h,v,w,b,m,A,E,_;return m=0,n<Be&&(m-=53,n=$e(e*=9007199254740992)),m+=(n>>20)-qe|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Be),o=xe(i=(w=(e=ze(e,n))-(f=De[E]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ze(0,t+=E<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=xe(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(g=-7.028461650952758e-9*(s=xe(s=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(s-w))+Ke[E])-((y=xe(y=(p=.9617967009544373*s)+g+(l=Je[E])+(h=m),0))-h-l-p),r[0]=y,r[1]=d,r}(ln,i,n);if(g=(s=(e-(f=xe(e,0)))*p[0]+e*p[1])+(l=f*p[0]),_e.assign(g,fn,1,0),y=Ie(fn[0]),d=Ie(fn[1]),y>=on){if(0!=(y-on|d))return u*un*un;if(s+8008566259537294e-32>g-l)return u*un*un}else if((y&Ve)>=1083231232){if(0!=(y-3230714880|d))return u*cn*cn;if(s<=g-l)return u*cn*cn}return g=function(r,e,n){var t,i,a,o,u,c,f,l,s,p;return s=((l=r&Ve|0)>>20)-qe|0,f=0,l>1071644672&&(i=ze(0,((f=r+(an>>s+1)>>>0)&~(tn>>(s=((f&Ve)>>20)-qe|0)))>>>0),f=(f&tn|an)>>20-s>>>0,r<0&&(f=-f),e-=i),r=Ie(r=$e(c=1-((c=(a=.6931471824645996*(i=xe(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?nn(c,f):ze(c,r)}(y,l,s),u*g}function pn(r){return"number"==typeof r}function gn(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function yn(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+gn(i):gn(i)+r,t&&(r="-"+r)),r}var dn=String.prototype.toLowerCase,hn=String.prototype.toUpperCase;function vn(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!pn(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=yn(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=yn(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===hn.call(r.specifier)?hn.call(n):dn.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function wn(r){return"string"==typeof r}var bn=Math.abs,mn=String.prototype.toLowerCase,An=String.prototype.toUpperCase,En=String.prototype.replace,_n=/e\+(\d)$/,Sn=/e-(\d)$/,Fn=/^(\d+)$/,Tn=/^(\d+)e/,xn=/\.0$/,In=/\.0*e/,jn=/(\..*[^0])0*e/;function kn(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!pn(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":bn(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=En.call(n,jn,"$1e"),n=En.call(n,In,"e"),n=En.call(n,xn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=En.call(n,_n,"e+0$1"),n=En.call(n,Sn,"e-0$1"),r.alternate&&(n=En.call(n,Fn,"$1."),n=En.call(n,Tn,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===An.call(r.specifier)?An.call(n):mn.call(n)}function Vn(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Un(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Vn(t):Vn(t)+r}var On=String.fromCharCode,Nn=isNaN,$n=Array.isArray;function Pn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Rn(r){var e,n,t,i,a,o,u,c,f;if(!$n(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(wn(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Pn(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Nn(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Nn(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=vn(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Nn(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Nn(a)?String(t.arg):On(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=kn(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=yn(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Un(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Cn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gn(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Mn(r){var e,n,t,i;for(n=[],i=0,t=Cn.exec(r);t;)(e=r.slice(i,Cn.lastIndex-t[0].length)).length&&n.push(e),n.push(Gn(t)),i=Cn.lastIndex,t=Cn.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Wn(r){return"string"==typeof r}function Ln(r){var e,n,t;if(!Wn(r))throw new TypeError(Ln("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Mn(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Rn.apply(null,n)}var Zn="function"==typeof Math.fround?Math.fround:null,Hn=new _r(1),Xn="function"==typeof Zn?Zn:function(r){return Hn[0]=r,Hn[0]},Yn=new or(1),zn=new nr(Yn.buffer);function qn(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Bn=new nr(1);new or(Bn.buffer)[0]=2139095040;var Dn=Bn[0],Jn=new nr(1);new or(Jn.buffer)[0]=4286578688;var Kn=Jn[0],Qn="function"==typeof Math.fround?Math.fround:null,rt=new nr(1),et="function"==typeof Qn?Qn:function(r){return rt[0]=r,rt[0]};function nt(r,e,n,t){return r!=r||r===Dn||r===Kn?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<11754943508222875e-54?(r=et(8388608*r),e[t]=r,e[t+n]=-23,e):(e[t]=r,e[t+n]=0,e)}function tt(r){return nt(r,[0,0],1,0)}qn(tt,"assign",nt);var it=Math.floor;function at(r){return"number"==typeof r}var ot=Number,ut=ot.prototype.toString,ct=Z();function ft(r){return"object"==typeof r&&(r instanceof ot||(ct?function(r){try{return ut.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function lt(r){return at(r)||ft(r)}qn(lt,"isPrimitive",at),qn(lt,"isObject",ft);var st=ot.NEGATIVE_INFINITY;function pt(r){return r<K&&r>st&&it(e=r)===e;var e}function gt(r){return at(r)&&pt(r)}function yt(r){return ft(r)&&pt(r.valueOf())}function dt(r){return gt(r)||yt(r)}function ht(r){return gt(r)&&r>=0}function vt(r){return yt(r)&&r.valueOf()>=0}function wt(r){return ht(r)||vt(r)}function bt(r){return"string"==typeof r}qn(dt,"isPrimitive",gt),qn(dt,"isObject",yt),qn(wt,"isPrimitive",ht),qn(wt,"isObject",vt);var mt=String.prototype.valueOf,At=Z();function Et(r){return"object"==typeof r&&(r instanceof String||(At?function(r){try{return mt.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function _t(r){return bt(r)||Et(r)}qn(_t,"isPrimitive",bt),qn(_t,"isObject",Et);var St=9007199254740991,Ft=void 0!==String.prototype.repeat,Tt=String.prototype.repeat,xt=Ft?function(r,e){return Tt.call(r,e)}:function(r,e){var n,t;if(0===r.length||0===e)return"";for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n},It=Math.ceil;function jt(r,e,n){var t=(e-r.length)/n.length;return t<=0?r:(t=It(t),r+xt(n,t))}var kt=9007199254740991,Vt=Math.ceil;function Ut(r,e,n){var t=(e-r.length)/n.length;return t<=0?r:(t=Vt(t),xt(n,t)+r)}function Ot(r,e){if(!bt(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ht(e))throw new TypeError(U("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));return xt(r,e)}function Nt(r){for(var e,n="";r>0;)n=(e=r/2)===(r=it(e))?"0"+n:"1"+n;return n}var $t={};M($t,"exponentf",(function(r){var e=fr(r);return(e=(2139095040&e)>>>23)-sr})),M($t,"fromBinaryStringf",(function(r){var e,n,t;if(32!==r.length)throw new Error(Ln("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(e="1"===r[0]?-1:1,t=parseInt(r.substring(1,9),2)-Ur,n=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=sn(2,-(e+1)));return n}(r.substring(9)),-127===t){if(0===n)return 1===e?0:-0;t=-126}else{if(128===t)return 0===n?1===e?jr:Vr:NaN;n+=1}return Xn(e*n*sn(2,t))})),M($t,"fromWordf",(function(r){return Yn[0]=r,zn[0]})),M($t,"normalizef",tt),M($t,"signbitf",(function(r){return!!(fr(r)>>>31)})),M($t,"significandf",(function(r){return 8388607&fr(r)})),M($t,"toBinaryStringf",(function(r){var e,n,t,i,a,o,u;if(n=r<0||1/r===Kn?"1":"0",r===Dn||r===Kn)return n+(i=Ot("1",8))+(t=Ot("0",23));if(r!=r)return n+(i=Ot("1",8))+(t="1"+Ot("0",22));if(0===r)return n+(i=Ot("0",8))+(t=Ot("0",23));if(o=(r=function(r){return Math.abs(r)}(r))-(a=it(r)),a=Nt(a),o=function(r){var e,n,t,i;if(e="",0===r)return e;for(i=149,t=0;t<149&&((n=2*r)>=1?(r=n-1,e+="1",149===i&&(i=t)):(r=n,e+="0"),!(1===n||t-i>24));t++);return e}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){e=u+1;break}i=-e}return t=a+o,i<0?(i<=-127&&(e=126),t=t.substring(e)):t=t.substring(1),i=function(r,e,n){var t;if(!bt(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ht(e))throw new TypeError(U("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!bt(t=n))throw new TypeError(U("invalid argument. Third argument must be a string. Value: `%s`.",t));if(0===t.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else t=" ";if(e>kt)throw new RangeError(U("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Ut(r,e,t)}(i=Nt(i+sr),8,"0"),t=function(r,e,n){var t;if(!bt(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ht(e))throw new TypeError(U("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!bt(t=n))throw new TypeError(U("invalid argument. Third argument must be a string. Value: `%s`.",t));if(0===t.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else t=" ";if(e>St)throw new RangeError(U("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return jt(r,e,t)}(t,23,"0").substring(0,23),n+i+t})),M($t,"float32ToInt32",(function(r){return 0|r})),M($t,"float32ToUint32",(function(r){return r>>>0})),M($t,"toWordf",fr);var Pt={};return M(Pt,"base",$t),Pt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=index.js.map
