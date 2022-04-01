// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,i=e.toString,u=e.__defineGetter__,o=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,n,t.get),y&&o&&o.call(r,n,t.set),r},v=n()?c:l,y=v;var g=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})};var s=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return s&&"symbol"==typeof Symbol.toStringTag},p=Object.prototype.toString,b=p;var w=function(r){return b.call(r)},h=Object.prototype.hasOwnProperty;var d=function(r,n){return null!=r&&h.call(r,n)},A="function"==typeof Symbol?Symbol.toStringTag:"",_=d,j=A,E=p;var O=function(r){var n,t,e;if(null==r)return E.call(r);t=r[j],n=_(r,j);try{r[j]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[j]=t:delete r[j],e},T=w,U=O,S=m()?U:T,F=S,P="function"==typeof Float32Array;var I=function(r){return P&&r instanceof Float32Array||"[object Float32Array]"===F(r)},N=Number.POSITIVE_INFINITY,V="function"==typeof Float32Array?Float32Array:null,x=I,H=N,G=V;var M=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,5e40]),r=x(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===H}catch(n){r=!1}return r};var W="function"==typeof Float32Array?Float32Array:void 0,R=function(){throw new Error("not implemented")},L=M()?W:R,k=S,q="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return q&&r instanceof Uint32Array||"[object Uint32Array]"===k(r)},z=B;var C=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,4294967296,4294967297]),r=Y(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=C()?D:J,Q=K,X=new L(1),Z=new Q(X.buffer);var $=function(r){return X[0]=r,Z[0]},rr=$;var nr=function(r){var n=rr(r);return(n=(2139095040&n)>>>23)-127},tr=K,er=new L(1);new tr(er.buffer)[0]=2139095040;var ir=er[0],ur=K,or=new L(1);new ur(or.buffer)[0]=4286578688;var ar=or[0];var fr=function(r){return r!=r},cr=Math.floor,lr=cr;var vr=function(r){return lr(r)===r},yr=vr;var gr=function(r){return yr(r/2)};var sr=function(r){return gr(r>0?r-1:r+1)},mr=Number,pr=mr.NEGATIVE_INFINITY,br=N,wr=pr;var hr=function(r){return r===br||r===wr},dr=Math.sqrt;var Ar=function(r){return Math.abs(r)},_r=S,jr="function"==typeof Float64Array;var Er="function"==typeof Float64Array?Float64Array:null,Or=function(r){return jr&&r instanceof Float64Array||"[object Float64Array]"===_r(r)},Tr=Er;var Ur=function(){var r,n;if("function"!=typeof Tr)return!1;try{n=new Tr([1,3.14,-3.14,NaN]),r=Or(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Sr="function"==typeof Float64Array?Float64Array:void 0,Fr=function(){throw new Error("not implemented")},Pr=Ur()?Sr:Fr,Ir=S,Nr="function"==typeof Uint8Array;var Vr="function"==typeof Uint8Array?Uint8Array:null,xr=function(r){return Nr&&r instanceof Uint8Array||"[object Uint8Array]"===Ir(r)},Hr=Vr;var Gr=function(){var r,n;if("function"!=typeof Hr)return!1;try{n=new Hr(n=[1,3.14,-3.14,256,257]),r=xr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Mr="function"==typeof Uint8Array?Uint8Array:void 0,Wr=function(){throw new Error("not implemented")},Rr=Gr()?Mr:Wr,Lr=S,kr="function"==typeof Uint16Array;var qr="function"==typeof Uint16Array?Uint16Array:null,Br=function(r){return kr&&r instanceof Uint16Array||"[object Uint16Array]"===Lr(r)},Yr=qr;var zr=function(){var r,n;if("function"!=typeof Yr)return!1;try{n=new Yr(n=[1,3.14,-3.14,65536,65537]),r=Br(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Cr,Dr="function"==typeof Uint16Array?Uint16Array:void 0,Jr=function(){throw new Error("not implemented")},Kr={uint16:zr()?Dr:Jr,uint8:Rr};(Cr=new Kr.uint16(1))[0]=4660;var Qr,Xr,Zr=52===new Kr.uint8(Cr.buffer)[0];!0===Zr?(Qr=1,Xr=0):(Qr=0,Xr=1);var $r=K,rn={HIGH:Qr,LOW:Xr},nn=new Pr(1),tn=new $r(nn.buffer),en=rn.HIGH,un=rn.LOW;var on=function(r,n){return nn[0]=n,r[0]=tn[en],r[1]=tn[un],r};var an=function(r,n){return 1===arguments.length?on([0,0],r):on(r,n)},fn=an,cn=K,ln=!0===Zr?0:1,vn=new Pr(1),yn=new cn(vn.buffer);var gn=function(r,n){return vn[0]=r,yn[ln]=n>>>0,vn[0]},sn=gn;var mn=function(r){return 0|r},pn=K,bn=!0===Zr?1:0,wn=new Pr(1),hn=new pn(wn.buffer);var dn,An,_n=function(r){return wn[0]=r,hn[bn]};!0===Zr?(dn=1,An=0):(dn=0,An=1);var jn=K,En={HIGH:dn,LOW:An},On=new Pr(1),Tn=new jn(On.buffer),Un=En.HIGH,Sn=En.LOW;var Fn=function(r,n){return Tn[Un]=r,Tn[Sn]=n,On[0]},Pn=Fn,In=fn,Nn=_n,Vn=Pn,xn=[0,0];var Hn=function(r,n){var t,e;return In(xn,r),t=xn[0],t&=2147483647,e=Nn(n),Vn(t|=e&=2147483648,xn[1])},Gn=sr,Mn=Hn,Wn=pr,Rn=N;var Ln=function(r,n){return n===Wn?Rn:n===Rn?0:n>0?Gn(n)?r:0:Gn(n)?Mn(Rn,r):Rn},kn=_n;var qn=function(r,n){return(2147483647&kn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},Bn=Ar,Yn=N;var zn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Bn(r)<1==(n===Yn)?0:Yn},Cn=K,Dn=!0===Zr?1:0,Jn=new Pr(1),Kn=new Cn(Jn.buffer);var Qn=function(r,n){return Jn[0]=r,Kn[Dn]=n>>>0,Jn[0]};var Xn=_n,Zn=sn,$n=Qn,rt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},nt=1048576,tt=[1,1.5],et=[0,.5849624872207642],it=[0,1.350039202129749e-8];var ut=function(r,n,t){var e,i,u,o,a,f,c,l,v,y,g,s,m,p,b,w,h,d,A,_;return d=0,t<nt&&(d-=53,t=Xn(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,d+=1,t-=nt),e=524288+(t>>1|536870912),a=(h=1/((n=$n(n,t))+(c=tt[_])))*((w=n-c)-(o=Zn(i=w*h,0))*(f=$n(0,e+=_<<18))-o*(n-(f-c))),b=(u=i*i)*u*rt(u),f=Zn(f=3+(u=o*o)+(b+=a*(o+i)),0),m=(g=-7.028461650952758e-9*(v=Zn(v=(w=o*f)+(h=a*f+(b-(f-3-u))*i),0))+.9617966939259756*(h-(v-w))+it[_])-((s=Zn(s=(y=.9617967009544373*v)+g+(l=et[_])+(p=d),0))-p-l-y),r[0]=s,r[1]=m,r};var ot=sn,at=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ft=function(r,n){var t,e,i,u,o;return t=(o=1.9259629911266175e-8*(i=n-1)-1.4426950408889634*(i*i*at(i)))-((e=ot(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=t,r},ct=hr,lt=fr,vt=Ar;var yt=function(r,n){return lt(n)||ct(n)?(r[0]=n,r[1]=0,r):0!==n&&vt(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var gt=function(r,n){return 1===arguments.length?yt([0,0],r):yt(r,n)},st=_n;var mt=function(r){var n=st(r);return(n=(2146435072&n)>>>20)-1023|0},pt=N,bt=pr,wt=fr,ht=hr,dt=Hn,At=gt,_t=mt,jt=fn,Et=Pn,Ot=[0,0],Tt=[0,0];var Ut=function(r,n){var t,e;return 0===n||0===r||wt(r)||ht(r)?r:(At(Ot,r),n+=Ot[1],(n+=_t(r=Ot[0]))<-1074?dt(0,r):n>1023?r<0?bt:pt:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,jt(Tt,r),t=Tt[0],t&=2148532223,e*Et(t|=n+1023<<20,Tt[1])))};var St=_n,Ft=Qn,Pt=sn,It=mn,Nt=Ut,Vt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},xt=2147483647,Ht=1048575,Gt=1048576;var Mt=function(r,n,t){var e,i,u,o,a,f,c,l,v;return v=((l=r&xt|0)>>20)-1023|0,c=0,l>1071644672&&(i=Ft(0,((c=r+(Gt>>v+1)>>>0)&~(Ht>>(v=((c&xt)>>20)-1023|0)))>>>0),c=(c&Ht|Gt)>>20-v>>>0,r<0&&(c=-c),n-=i),a=(o=.6931471805599453*(t-((i=Pt(i=t+n,0))-n))+-1.904654299957768e-9*i)-((f=(u=.6931471824645996*i)+o)-u),e=f-(i=f*f)*Vt(i),r=St(f=1-(f*e/(e-2)-(a+f*a)-f)),r=It(r),f=(r+=c<<20>>>0)>>20<=0?Nt(f,c):Ft(f,r)},Wt=fr,Rt=sr,Lt=hr,kt=vr,qt=dr,Bt=Ar,Yt=fn,zt=sn,Ct=mn,Dt=pr,Jt=N,Kt=Ln,Qt=qn,Xt=zn,Zt=ut,$t=ft,re=Mt,ne=2147483647,te=1083179008,ee=1e300,ie=1e-300,ue=[0,0],oe=[0,0];var ae=function r(n,t){var e,i,u,o,a,f,c,l,v,y,g,s,m,p;if(Wt(n)||Wt(t))return NaN;if(Yt(ue,t),a=ue[0],0===ue[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return qt(n);if(-.5===t)return 1/qt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Lt(t))return Xt(n,t)}if(Yt(ue,n),o=ue[0],0===ue[1]){if(0===o)return Kt(n,t);if(1===n)return 1;if(-1===n&&Rt(t))return-1;if(Lt(n))return n===Dt?r(-0,-t):t<0?0:Jt}if(n<0&&!1===kt(t))return(n-n)/(n-n);if(u=Bt(n),e=o&ne|0,i=a&ne|0,c=a>>>31|0,f=(f=o>>>31|0)&&Rt(t)?-1:1,i>1105199104){if(i>1139802112)return Qt(n,t);if(e<1072693247)return 1===c?f*ee*ee:f*ie*ie;if(e>1072693248)return 0===c?f*ee*ee:f*ie*ie;g=$t(oe,u)}else g=Zt(oe,u,e);if(y=(t-(l=zt(t,0)))*g[0]+t*g[1],v=l*g[0],Yt(ue,s=y+v),m=Ct(ue[0]),p=Ct(ue[1]),m>=te){if(0!=(m-te|p))return f*ee*ee;if(y+8008566259537294e-32>s-v)return f*ee*ee}else if((m&ne)>=1083231232){if(0!=(m-3230714880|p))return f*ie*ie;if(y<=s-v)return f*ie*ie}return f*(s=re(m,v,y))},fe=ae,ce="function"==typeof Math.fround?Math.fround:null,le=new L(1);var ve=ce;"function"!=typeof ve&&(ve=function(r){return le[0]=r,le[0]});var ye=ve,ge=fe;var se=ir,me=ar,pe=127,be=fe,we=ye,he=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=ge(2,-(n+1)));return t};var de=function(r){var n,t,e;if(32!==r.length)throw new Error("invalid argument. Input string must have a length equal to 32. Value: `"+r+"`.");if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,9),2)-pe,t=he(r.substring(9)),-127===e){if(0===t)return 1===n?0:-0;e=-126}else{if(128===e)return 0===t?1===n?se:me:NaN;t+=1}return we(n*t*be(2,e))},Ae=L,_e=new K(1),je=new Ae(_e.buffer);var Ee=function(r){return _e[0]=r,je[0]},Oe=ir,Te=ar,Ue=Ar,Se=ye;var Fe=function(r,n){return n!=n||n===Oe||n===Te?(r[0]=n,r[1]=0,r):0!==n&&Ue(n)<11754943508222875e-54?(n=Se(8388608*n),r[0]=n,r[1]=-23,r):(r[0]=n,r[1]=0,r)};var Pe=function(r,n){return 1===arguments.length?Fe([0,0],r):Fe(r,n)},Ie=Pe,Ne=$;var Ve=function(r){return!!(Ne(r)>>>31)},xe=$;var He=function(r){return 8388607&xe(r)},Ge=v;var Me=function(r,n,t){Ge(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var We=function(r){return"number"==typeof r},Re=mr.prototype.toString;var Le=S,ke=mr,qe=function(r){try{return Re.call(r),!0}catch(r){return!1}},Be=m();var Ye=function(r){return"object"==typeof r&&(r instanceof ke||(Be?qe(r):"[object Number]"===Le(r)))},ze=We,Ce=Ye;var De=Me,Je=function(r){return ze(r)||Ce(r)},Ke=Ye;De(Je,"isPrimitive",We),De(Je,"isObject",Ke);var Qe=N,Xe=pr,Ze=vr;var $e=function(r){return r<Qe&&r>Xe&&Ze(r)},ri=Je.isPrimitive,ni=$e;var ti=function(r){return ri(r)&&ni(r)},ei=Je.isObject,ii=$e;var ui=function(r){return ei(r)&&ii(r.valueOf())},oi=ti,ai=ui;var fi=Me,ci=function(r){return oi(r)||ai(r)},li=ui;fi(ci,"isPrimitive",ti),fi(ci,"isObject",li);var vi=ci.isPrimitive;var yi=function(r){return vi(r)&&r>=0},gi=ci.isObject;var si=function(r){return gi(r)&&r.valueOf()>=0},mi=yi,pi=si;var bi=Me,wi=function(r){return mi(r)||pi(r)},hi=si;bi(wi,"isPrimitive",yi),bi(wi,"isObject",hi);var di=wi;var Ai=function(r){return"string"==typeof r},_i=String.prototype.valueOf;var ji=S,Ei=function(r){try{return _i.call(r),!0}catch(r){return!1}},Oi=m();var Ti=function(r){return"object"==typeof r&&(r instanceof String||(Oi?Ei(r):"[object String]"===ji(r)))},Ui=Ai,Si=Ti;var Fi=Me,Pi=function(r){return Ui(r)||Si(r)},Ii=Ti;Fi(Pi,"isPrimitive",Ai),Fi(Pi,"isObject",Ii);var Ni=Pi,Vi=9007199254740991,xi=di.isPrimitive,Hi=Ni.isPrimitive;var Gi=function(r,n){var t,e;if(!Hi(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!xi(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(0===r.length||0===n)return"";if(r.length*n>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",e=n;1==(1&e)&&(t+=r),0!==(e>>>=1);)r+=r;return t},Mi=Math.ceil,Wi=di.isPrimitive,Ri=Ni.isPrimitive,Li=Gi,ki=Mi,qi=Vi;var Bi=function(r,n,t){var e,i;if(!Ri(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Wi(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(arguments.length>2){if(!Ri(i=t))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(n>qi)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(e=(n-r.length)/i.length)<=0?r:(e=ki(e),r+Li(i,e))},Yi=di.isPrimitive,zi=Ni.isPrimitive,Ci=Gi,Di=Mi,Ji=Vi;var Ki=function(r,n,t){var e,i;if(!zi(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Yi(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(arguments.length>2){if(!zi(i=t))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(n>Ji)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(e=(n-r.length)/i.length)<=0?r:(e=Di(e),Ci(i,e)+r)},Qi=cr;var Xi=ir,Zi=ar,$i=Ar,ru=cr,nu=Bi,tu=Ki,eu=Gi,iu=function(r){for(var n,t="";r>0;)t=(n=r/2)===(r=Qi(n))?"0"+t:"1"+t;return t},uu=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=149,e=0;e<149&&((t=2*r)>=1?(r=t-1,n+="1",149===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>24));e++);return n};var ou=function(r){var n,t,e,i,u,o,a;if(t=r<0||1/r===Zi?"1":"0",r===Xi||r===Zi)return t+(i=eu("1",8))+(e=eu("0",23));if(r!=r)return t+(i=eu("1",8))+(e="1"+eu("0",22));if(0===r)return t+(i=eu("0",8))+(e=eu("0",23));if(o=(r=$i(r))-(u=ru(r)),u=iu(u),o=uu(o),u)i=u.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}i=-n}return e=u+o,i<0?(i<=-127&&(n=126),e=e.substring(n)):e=e.substring(1),i=iu(i+127),t+(i=tu(i,8,"0"))+(e=nu(e,23,"0").substring(0,23))};var au=function(r){return 0|r};var fu=function(r){return r>>>0},cu=g,lu={};cu(lu,"exponentf",nr),cu(lu,"fromBinaryStringf",de),cu(lu,"fromWordf",Ee),cu(lu,"normalizef",Ie),cu(lu,"signbitf",Ve),cu(lu,"significandf",He),cu(lu,"toBinaryStringf",ou),cu(lu,"float32ToInt32",au),cu(lu,"float32ToUint32",fu),cu(lu,"toWordf",$);var vu={};return g(vu,"base",lu),vu}));
//# sourceMappingURL=bundle.js.map
