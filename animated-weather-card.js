"use strict";(()=>{function Lt(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ca(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}var lt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Re={duration:.5,overwrite:!1,delay:0},gn,Z,z,_t=1e8,N=1/_t,on=Math.PI*2,vo=on/4,xo=0,Ta=Math.sqrt,So=Math.cos,Co=Math.sin,K=function(e){return typeof e=="string"},q=function(e){return typeof e=="function"},Dt=function(e){return typeof e=="number"},pi=function(e){return typeof e>"u"},kt=function(e){return typeof e=="object"},st=function(e){return e!==!1},yn=function(){return typeof window<"u"},ri=function(e){return q(e)||K(e)},Aa=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tt=Array.isArray,To=/random\([^)]+\)/g,Ao=/,\s*/g,ga=/(?:-?\.?\d|\.)+/gi,wn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,te=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qi=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_n=/[+-]=-?[.\d]+/,ko=/[^,'"\[\]\s]+/gi,Eo=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,G,Tt,sn,bn,mt={},di={},ka,Ea=function(e){return(di=he(e,mt))&&et},fi=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ne=function(e,t){return!t&&console.warn(e)},Ma=function(e,t){return e&&(mt[e]=t)&&di&&(di[e]=t)||mt},ze=function(){return 0},Mo={suppressEvents:!0,isStart:!0,kill:!1},oi={suppressEvents:!0,kill:!1},Po={suppressEvents:!0},vn={},zt=[],ln={},Pa,rt={},Ji={},ya=30,si=[],xn="",Sn=function(e){var t=e[0],i,n;if(kt(t)||q(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=si.length;n--&&!si[n].targetTest(t););i=si[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new kn(e[n],i)))||e.splice(n,1);return e},$t=function(e){return e._gsap||Sn(bt(e))[0]._gsap},Cn=function(e,t,i){return(i=e[t])&&q(i)?e[t]():pi(i)&&e.getAttribute&&e.getAttribute(t)||i},it=function(e,t){return(e=e.split(",")).forEach(t)||e},V=function(e){return Math.round(e*1e5)/1e5||0},I=function(e){return Math.round(e*1e7)/1e7||0},ee=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Lo=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},ci=function(){var e=zt.length,t=zt.slice(0),i,n;for(ln={},zt.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Tn=function(e){return!!(e._initted||e._startAt||e.add)},La=function(e,t,i,n){zt.length&&!Z&&ci(),e.render(t,i,n||!!(Z&&t<0&&Tn(e))),zt.length&&!Z&&ci()},Oa=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ko).length<2?t:K(e)?e.trim():e},Da=function(e){return e},pt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Oo=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},he=function(e,t){for(var i in t)e[i]=t[i];return e},wa=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=kt(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},hi=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Fe=function(e){var t=e.parent||G,i=e.keyframes?Oo(tt(e.keyframes)):pt;if(st(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Do=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Fa=function(e,t,i,n,a){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e[n],s;if(a)for(s=t[a];r&&r[a]>s;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=r,t.parent=t._dp=e,t},gi=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t._prev,r=t._next;a?a._next=r:e[i]===t&&(e[i]=r),r?r._prev=a:e[n]===t&&(e[n]=a),t._next=t._prev=t.parent=null},It=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zt=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Fo=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dn=function(e,t,i,n){return e._startAt&&(Z?e._startAt.revert(oi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Wo=function o(e){return!e||e._ts&&o(e.parent)},_a=function(e){return e._repeat?ue(e._tTime,e=e.duration()+e._rDelay)*e:0},ue=function(e,t){var i=Math.floor(e=I(e/t));return e&&i===e?i-1:i},ui=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yi=function(e){return e._end=I(e._start+(e._tDur/Math.abs(e._ts||e._rts||N)||0))},wi=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=I(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yi(e),i._dirty||Zt(i,e)),e},Wa=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ui(e.rawTime(),t),(!t._dur||Ge(0,t.totalDuration(),i)-t._tTime>N)&&t.render(i,!0)),Zt(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-N}},At=function(e,t,i,n){return t.parent&&It(t),t._start=I((Dt(i)?i:i||e!==G?wt(e,i,t):e._time)+t._delay),t._end=I(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Fa(e,t,"_first","_last",e._sort?"_start":0),cn(t)||(e._recent=t),n||Wa(e,t),e._ts<0&&wi(e,e._tTime),e},Ha=function(e,t){return(mt.ScrollTrigger||fi("scrollTrigger",t))&&mt.ScrollTrigger.create(t,e)},Ra=function(e,t,i,n,a){if(Pn(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!Z&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pa!==ot.frame)return zt.push(e),e._lazy=[a,n],1},Ho=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},cn=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ro=function(e,t,i,n){var a=e.ratio,r=t<0||!t&&(!e._start&&Ho(e)&&!(!e._initted&&cn(e))||(e._ts<0||e._dp._ts<0)&&!cn(e))?0:1,s=e._rDelay,l=0,d,c,h;if(s&&e._repeat&&(l=Ge(0,e._tDur,t),c=ue(l,s),e._yoyo&&c&1&&(r=1-r),c!==ue(e._tTime,s)&&(a=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==a||Z||n||e._zTime===N||!t&&e._zTime){if(!e._initted&&Ra(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?N:0),i||(i=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,d=e._pt;d;)d.r(r,d.d),d=d._next;t<0&&dn(e,t,i,!0),e._onUpdate&&!i&&ut(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&ut(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&It(e,1),!i&&!Z&&(ut(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},No=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},me=function(e,t,i,n){var a=e._repeat,r=I(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=r/e._dur),e._dur=r,e._tDur=a?a<0?1e10:I(r*(a+1)+e._rDelay*a):r,s>0&&!n&&wi(e,e._tTime=e._tDur*s),e.parent&&yi(e),i||Zt(e.parent,e),e},ba=function(e){return e instanceof J?Zt(e):me(e,e._dur)},zo={_start:0,endTime:ze,totalDuration:ze},wt=function o(e,t,i){var n=e.labels,a=e._recent||zo,r=e.duration()>=_t?a.endTime(!1):e._dur,s,l,d;return K(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),d=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(s<0?a:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=r),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),d&&i&&(l=l/100*(tt(i)?i[0]:i).totalDuration()),s>1?o(e,t.substr(0,s-1),i)+l:r+l)):t==null?r:+t},We=function(e,t,i){var n=Dt(t[1]),a=(n?2:1)+(e<2?0:1),r=t[a],s,l;if(n&&(r.duration=t[1]),r.parent=i,e){for(s=r,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=st(l.vars.inherit)&&l.parent;r.immediateRender=st(s.immediateRender),e<2?r.runBackwards=1:r.startAt=t[a-1]}return new Y(t[0],r,t[a+1])},Gt=function(e,t){return e||e===0?t(e):t},Ge=function(e,t,i){return i<e?e:i>t?t:i},Q=function(e,t){return!K(e)||!(t=Eo.exec(e))?"":t[1]},$o=function(e,t,i){return Gt(i,function(n){return Ge(e,t,n)})},hn=[].slice,Na=function(e,t){return e&&kt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&kt(e[0]))&&!e.nodeType&&e!==Tt},Io=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var a;return K(n)&&!t||Na(n,1)?(a=i).push.apply(a,bt(n)):i.push(n)})||i},bt=function(e,t,i){return z&&!t&&z.selector?z.selector(e):K(e)&&!i&&(sn||!pe())?hn.call((t||bn).querySelectorAll(e),0):tt(e)?Io(e,i):Na(e)?hn.call(e,0):e?[e]:[]},un=function(e){return e=bt(e)[0]||Ne("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bt(t,i.querySelectorAll?i:i===e?Ne("Invalid scope")||bn.createElement("div"):e)}},za=function(e){return e.sort(function(){return .5-Math.random()})},$a=function(e){if(q(e))return e;var t=kt(e)?e:{each:e},i=Qt(t.ease),n=t.from||0,a=parseFloat(t.base)||0,r={},s=n>0&&n<1,l=isNaN(n)||s,d=t.axis,c=n,h=n;return K(n)?c=h={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(c=n[0],h=n[1]),function(m,p,g){var u=(g||t).length,f=r[u],y,w,_,v,b,T,S,k,C;if(!f){if(C=t.grid==="auto"?0:(t.grid||[1,_t])[1],!C){for(S=-_t;S<(S=g[C++].getBoundingClientRect().left)&&C<u;);C<u&&C--}for(f=r[u]=[],y=l?Math.min(C,u)*c-.5:n%C,w=C===_t?0:l?u*h/C-.5:n/C|0,S=0,k=_t,T=0;T<u;T++)_=T%C-y,v=w-(T/C|0),f[T]=b=d?Math.abs(d==="y"?v:_):Ta(_*_+v*v),b>S&&(S=b),b<k&&(k=b);n==="random"&&za(f),f.max=S-k,f.min=k,f.v=u=(parseFloat(t.amount)||parseFloat(t.each)*(C>u?u-1:d?d==="y"?u/C:C:Math.max(C,u/C))||0)*(n==="edges"?-1:1),f.b=u<0?a-u:a,f.u=Q(t.amount||t.each)||0,i=i&&u<0?ts(i):i}return u=(f[m]-f.min)/f.max||0,I(f.b+(i?i(u):u)*f.v)+f.u}},mn=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=I(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Dt(i)?0:Q(i))}},Ia=function(e,t){var i=tt(e),n,a;return!i&&kt(e)&&(n=i=e.radius||_t,e.values?(e=bt(e.values),(a=!Dt(e[0]))&&(n*=n)):e=mn(e.increment)),Gt(t,i?q(e)?function(r){return a=e(r),Math.abs(a-r)<=n?a:r}:function(r){for(var s=parseFloat(a?r.x:r),l=parseFloat(a?r.y:0),d=_t,c=0,h=e.length,m,p;h--;)a?(m=e[h].x-s,p=e[h].y-l,m=m*m+p*p):m=Math.abs(e[h]-s),m<d&&(d=m,c=h);return c=!n||d<=n?e[c]:r,a||c===r||Dt(r)?c:c+Q(r)}:mn(e))},Ga=function(e,t,i,n){return Gt(tt(e)?!t:i===!0?!!(i=0):!n,function(){return tt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Go=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(a,r){return r(a)},n)}},Bo=function(e,t){return function(i){return e(parseFloat(i))+(t||Q(i))}},qo=function(e,t,i){return qa(e,t,0,1,i)},Ba=function(e,t,i){return Gt(i,function(n){return e[~~t(n)]})},Vo=function o(e,t,i){var n=t-e;return tt(e)?Ba(e,o(0,e.length),t):Gt(i,function(a){return(n+(a-e)%n)%n+e})},Yo=function o(e,t,i){var n=t-e,a=n*2;return tt(e)?Ba(e,o(0,e.length-1),t):Gt(i,function(r){return r=(a+(r-e)%a)%a||0,e+(r>n?a-r:r)})},fe=function(e){return e.replace(To,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Ao);return Ga(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},qa=function(e,t,i,n,a){var r=t-e,s=n-i;return Gt(a,function(l){return i+((l-e)/r*s||0)})},Uo=function o(e,t,i,n){var a=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!a){var r=K(e),s={},l,d,c,h,m;if(i===!0&&(n=1)&&(i=null),r)e={p:e},t={p:t};else if(tt(e)&&!tt(t)){for(c=[],h=e.length,m=h-2,d=1;d<h;d++)c.push(o(e[d-1],e[d]));h--,a=function(g){g*=h;var u=Math.min(m,~~g);return c[u](g-u)},i=t}else n||(e=he(tt(e)?[]:{},e));if(!c){for(l in t)En.call(s,e,l,"get",t[l]);a=function(g){return Dn(g,s)||(r?e.p:e)}}}return Gt(i,a)},va=function(e,t,i){var n=e.labels,a=_t,r,s,l;for(r in n)s=n[r]-t,s<0==!!i&&s&&a>(s=Math.abs(s))&&(l=r,a=s);return l},ut=function(e,t,i){var n=e.vars,a=n[t],r=z,s=e._ctx,l,d,c;if(a)return l=n[t+"Params"],d=n.callbackScope||e,i&&zt.length&&ci(),s&&(z=s),c=l?a.apply(d,l):a.call(d),z=r,c},Oe=function(e){return It(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Z),e.progress()<1&&ut(e,"onInterrupt"),e},ce,Va=[],Ya=function(e){if(e)if(e=!e.name&&e.default||e,yn()||e.headless){var t=e.name,i=q(e),n=t&&!i&&e.init?function(){this._props=[]}:e,a={init:ze,render:Dn,add:En,kill:cs,modifier:ds,rawVars:0},r={targetTest:0,get:0,getSetter:_i,aliases:{},register:0};if(pe(),e!==n){if(rt[t])return;pt(n,pt(hi(e,a),r)),he(n.prototype,he(a,hi(e,r))),rt[n.prop=t]=n,e.targetTest&&(si.push(n),vn[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ma(t,n),e.register&&e.register(et,n,nt)}else Va.push(e)},R=255,De={aqua:[0,R,R],lime:[0,R,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,R],navy:[0,0,128],white:[R,R,R],olive:[128,128,0],yellow:[R,R,0],orange:[R,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[R,0,0],pink:[R,192,203],cyan:[0,R,R],transparent:[R,R,R,0]},tn=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*R+.5|0},Ua=function(e,t,i){var n=e?Dt(e)?[e>>16,e>>8&R,e&R]:0:De.black,a,r,s,l,d,c,h,m,p,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),De[e])n=De[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),r=e.charAt(2),s=e.charAt(3),e="#"+a+a+r+r+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&R,n&R,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&R,e&R]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(ga),!t)l=+n[0]%360/360,d=+n[1]/100,c=+n[2]/100,r=c<=.5?c*(d+1):c+d-c*d,a=c*2-r,n.length>3&&(n[3]*=1),n[0]=tn(l+1/3,a,r),n[1]=tn(l,a,r),n[2]=tn(l-1/3,a,r);else if(~e.indexOf("="))return n=e.match(wn),i&&n.length<4&&(n[3]=1),n}else n=e.match(ga)||De.transparent;n=n.map(Number)}return t&&!g&&(a=n[0]/R,r=n[1]/R,s=n[2]/R,h=Math.max(a,r,s),m=Math.min(a,r,s),c=(h+m)/2,h===m?l=d=0:(p=h-m,d=c>.5?p/(2-h-m):p/(h+m),l=h===a?(r-s)/p+(r<s?6:0):h===r?(s-a)/p+2:(a-r)/p+4,l*=60),n[0]=~~(l+.5),n[1]=~~(d*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},Ka=function(e){var t=[],i=[],n=-1;return e.split(Ot).forEach(function(a){var r=a.match(te)||[];t.push.apply(t,r),i.push(n+=r.length+1)}),t.c=i,t},xa=function(e,t,i){var n="",a=(e+n).match(Ot),r=t?"hsla(":"rgba(",s=0,l,d,c,h;if(!a)return e;if(a=a.map(function(m){return(m=Ua(m,t,1))&&r+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),i&&(c=Ka(e),l=i.c,l.join(n)!==c.c.join(n)))for(d=e.replace(Ot,"1").split(te),h=d.length-1;s<h;s++)n+=d[s]+(~l.indexOf(s)?a.shift()||r+"0,0,0,0)":(c.length?c:a.length?a:i).shift());if(!d)for(d=e.split(Ot),h=d.length-1;s<h;s++)n+=d[s]+a[s];return n+d[h]},Ot=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in De)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),Ko=/hsl[a]?\(/,An=function(e){var t=e.join(" "),i;if(Ot.lastIndex=0,Ot.test(t))return i=Ko.test(t),e[1]=xa(e[1],i),e[0]=xa(e[0],i,Ka(e[1])),!0},$e,ot=(function(){var o=Date.now,e=500,t=33,i=o(),n=i,a=1e3/240,r=a,s=[],l,d,c,h,m,p,g=function u(f){var y=o()-n,w=f===!0,_,v,b,T;if((y>e||y<0)&&(i+=y-t),n+=y,b=n-i,_=b-r,(_>0||w)&&(T=++h.frame,m=b-h.time*1e3,h.time=b=b/1e3,r+=_+(_>=a?4:a-_),v=1),w||(l=d(u)),v)for(p=0;p<s.length;p++)s[p](b,m,T,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return m/(1e3/(f||60))},wake:function(){ka&&(!sn&&yn()&&(Tt=sn=window,bn=Tt.document||{},mt.gsap=et,(Tt.gsapVersions||(Tt.gsapVersions=[])).push(et.version),Ea(di||Tt.GreenSockGlobals||!Tt.gsap&&Tt||{}),Va.forEach(Ya)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),d=c||function(f){return setTimeout(f,r-h.time*1e3+1|0)},$e=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),$e=0,d=ze},lagSmoothing:function(f,y){e=f||1/0,t=Math.min(y||33,e)},fps:function(f){a=1e3/(f||240),r=h.time*1e3+a},add:function(f,y,w){var _=y?function(v,b,T,S){f(v,b,T,S),h.remove(_)}:f;return h.remove(f),s[w?"unshift":"push"](_),pe(),_},remove:function(f,y){~(y=s.indexOf(f))&&s.splice(y,1)&&p>=y&&p--},_listeners:s},h})(),pe=function(){return!$e&&ot.wake()},D={},jo=/^[\d.\-M][\d.\-,\s]/,Xo=/["']/g,Zo=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],a=1,r=i.length,s,l,d;a<r;a++)l=i[a],s=a!==r-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),t[n]=isNaN(d)?d.replace(Xo,"").trim():+d,n=l.substr(s+1).trim();return t},Qo=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Jo=function(e){var t=(e+"").split("("),i=D[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Zo(t[1])]:Qo(e).split(",").map(Oa)):D._CE&&jo.test(e)?D._CE("",e):i},ts=function(e){return function(t){return 1-e(1-t)}},Qt=function(e,t){return e&&(q(e)?e:D[e]||Jo(e))||t},ie=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:n},r;return it(e,function(s){D[s]=mt[s]=a,D[r=s.toLowerCase()]=i;for(var l in a)D[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=D[s+"."+l]=a[l]}),a},ja=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},en=function o(e,t,i){var n=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),r=a/on*(Math.asin(1/n)||0),s=function(c){return c===1?1:n*Math.pow(2,-10*c)*Co((c-r)*a)+1},l=e==="out"?s:e==="in"?function(d){return 1-s(1-d)}:ja(s);return a=on/a,l.config=function(d,c){return o(e,d,c)},l},nn=function o(e,t){t===void 0&&(t=1.70158);var i=function(r){return r?--r*r*((t+1)*r+t)+1:0},n=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:ja(i);return n.config=function(a){return o(e,a)},n};it("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ie(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});D.Linear.easeNone=D.none=D.Linear.easeIn;ie("Elastic",en("in"),en("out"),en());(function(o,e){var t=1/e,i=2*t,n=2.5*t,a=function(s){return s<t?o*s*s:s<i?o*Math.pow(s-1.5/e,2)+.75:s<n?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};ie("Bounce",function(r){return 1-a(1-r)},a)})(7.5625,2.75);ie("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ie("Circ",function(o){return-(Ta(1-o*o)-1)});ie("Sine",function(o){return o===1?1:-So(o*vo)+1});ie("Back",nn("in"),nn("out"),nn());D.SteppedEase=D.steps=mt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),a=t?1:0,r=1-N;return function(s){return((n*Ge(0,r,s)|0)+a)*i}}};Re.ease=D["quad.out"];it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return xn+=o+","+o+"Params,"});var kn=function(e,t){this.id=xo++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cn,this.set=t?t.getSetter:_i},Ie=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,me(this,+t.duration,1,1),this.data=t.data,z&&(this._ctx=z,z.data.push(this)),$e||ot.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,me(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(pe(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(wi(this,i),!a._dp||a.parent||Wa(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&At(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===N||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),La(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_a(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_a(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,n):this._repeat?ue(this._tTime,a)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-N?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?ui(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-N?0:this._rts,this.totalTime(Ge(-Math.abs(this._delay),this.totalDuration(),a),n!==!1),yi(this),Fo(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(pe(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==N&&(this._tTime-=N)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=I(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&At(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(st(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ui(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Po);var n=Z;return Z=i,Tn(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Z=n,this},e.globalTime=function(i){for(var n=this,a=arguments.length?i:n.rawTime();n;)a=n._start+a/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ba(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ba(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(wt(this,i),st(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,st(n)),this._dur||(this._zTime=-N),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-N:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-N,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=n&&a<this.endTime(!0)-N)},e.eventCallback=function(i,n,a){var r=this.vars;return arguments.length>1?(n?(r[i]=n,a&&(r[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=n)):delete r[i],this):r[i]},e.then=function(i){var n=this,a=n._prom;return new Promise(function(r){var s=q(i)?i:Da,l=function(){var c=n.then;n.then=null,a&&a(),q(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),r(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Oe(this)},o})();pt(Ie.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-N,_prom:0,_ps:!1,_rts:1});var J=(function(o){Ca(e,o);function e(i,n){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=st(i.sortChildren),G&&At(i.parent||G,Lt(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Ha(Lt(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(n,a,r){return We(0,arguments,this),this},t.from=function(n,a,r){return We(1,arguments,this),this},t.fromTo=function(n,a,r,s){return We(2,arguments,this),this},t.set=function(n,a,r){return a.duration=0,a.parent=this,Fe(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Y(n,a,wt(this,r),1),this},t.call=function(n,a,r){return At(this,Y.delayedCall(0,n,a),r)},t.staggerTo=function(n,a,r,s,l,d,c){return r.duration=a,r.stagger=r.stagger||s,r.onComplete=d,r.onCompleteParams=c,r.parent=this,new Y(n,r,wt(this,l)),this},t.staggerFrom=function(n,a,r,s,l,d,c){return r.runBackwards=1,Fe(r).immediateRender=st(r.immediateRender),this.staggerTo(n,a,r,s,l,d,c)},t.staggerFromTo=function(n,a,r,s,l,d,c,h){return s.startAt=r,Fe(s).immediateRender=st(s.immediateRender),this.staggerTo(n,a,s,l,d,c,h)},t.render=function(n,a,r){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=n<=0?0:I(n),h=this._zTime<0!=n<0&&(this._initted||!d),m,p,g,u,f,y,w,_,v,b,T,S;if(this!==G&&c>l&&n>=0&&(c=l),c!==this._tTime||r||h){if(s!==this._time&&d&&(c+=this._time-s,n+=this._time-s),m=c,v=this._start,_=this._ts,y=!_,h&&(d||(s=this._zTime),(n||!a)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,f=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(f*100+n,a,r);if(m=I(c%f),c===l?(u=this._repeat,m=d):(b=I(c/f),u=~~b,u&&u===b&&(m=d,u--),m>d&&(m=d)),b=ue(this._tTime,f),!s&&this._tTime&&b!==u&&this._tTime-b*f-this._dur<=0&&(b=u),T&&u&1&&(m=d-m,S=1),u!==b&&!this._lock){var k=T&&b&1,C=k===(T&&u&1);if(u<b&&(k=!k),s=k?0:c%d?d:c,this._lock=1,this.render(s||(S?0:I(u*f)),a,!d)._lock=0,this._tTime=c,!a&&this.parent&&ut(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=u),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,C&&(this._lock=2,s=k?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=No(this,I(s),I(m)),w&&(c-=m-(m=w._start))),this._tTime=c,this._time=m,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&d&&!a&&!b&&(ut(this,"onStart"),this._tTime!==c))return this;if(m>=s&&n>=0)for(p=this._first;p;){if(g=p._next,(p._act||m>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(n,a,r);if(p.render(p._ts>0?(m-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(m-p._start)*p._ts,a,r),m!==this._time||!this._ts&&!y){w=0,g&&(c+=this._zTime=-N);break}}p=g}else{p=this._last;for(var x=n<0?n:m;p;){if(g=p._prev,(p._act||x<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(n,a,r);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,a,r||Z&&Tn(p)),m!==this._time||!this._ts&&!y){w=0,g&&(c+=this._zTime=x?-N:N);break}}p=g}}if(w&&!a&&(this.pause(),w.render(m>=s?0:-N)._zTime=m>=s?1:-1,this._ts))return this._start=v,yi(this),this.render(n,a,r);this._onUpdate&&!a&&ut(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&It(this,1),!a&&!(n<0&&!s)&&(c||s||!l)&&(ut(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,a){var r=this;if(Dt(a)||(a=wt(this,a,n)),!(n instanceof Ie)){if(tt(n))return n.forEach(function(s){return r.add(s,a)}),this;if(K(n))return this.addLabel(n,a);if(q(n))n=Y.delayedCall(0,n);else return this}return this!==n?At(this,n,a):this},t.getChildren=function(n,a,r,s){n===void 0&&(n=!0),a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=-_t);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof Y?a&&l.push(d):(r&&l.push(d),n&&l.push.apply(l,d.getChildren(!0,a,r)))),d=d._next;return l},t.getById=function(n){for(var a=this.getChildren(1,1,1),r=a.length;r--;)if(a[r].vars.id===n)return a[r]},t.remove=function(n){return K(n)?this.removeLabel(n):q(n)?this.killTweensOf(n):(n.parent===this&&gi(this,n),n===this._recent&&(this._recent=this._last),Zt(this))},t.totalTime=function(n,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=I(ot.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),o.prototype.totalTime.call(this,n,a),this._forcing=0,this):this._tTime},t.addLabel=function(n,a){return this.labels[n]=wt(this,a),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,a,r){var s=Y.delayedCall(0,a||ze,r);return s.data="isPause",this._hasPause=1,At(this,s,wt(this,n))},t.removePause=function(n){var a=this._first;for(n=wt(this,n);a;)a._start===n&&a.data==="isPause"&&It(a),a=a._next},t.killTweensOf=function(n,a,r){for(var s=this.getTweensOf(n,r),l=s.length;l--;)Nt!==s[l]&&s[l].kill(n,a);return this},t.getTweensOf=function(n,a){for(var r=[],s=bt(n),l=this._first,d=Dt(a),c;l;)l instanceof Y?Lo(l._targets,s)&&(d?(!Nt||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&r.push(l):(c=l.getTweensOf(s,a)).length&&r.push.apply(r,c),l=l._next;return r},t.tweenTo=function(n,a){a=a||{};var r=this,s=wt(r,n),l=a,d=l.startAt,c=l.onStart,h=l.onStartParams,m=l.immediateRender,p,g=Y.to(r,pt({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(d&&"time"in d?d.time:r._time))/r.timeScale())||N,onStart:function(){if(r.pause(),!p){var f=a.duration||Math.abs((s-(d&&"time"in d?d.time:r._time))/r.timeScale());g._dur!==f&&me(g,f,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},a));return m?g.render(0):g},t.tweenFromTo=function(n,a,r){return this.tweenTo(a,pt({startAt:{time:wt(this,n)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),va(this,wt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),va(this,wt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+N)},t.shiftChildren=function(n,a,r){r===void 0&&(r=0);var s=this._first,l=this.labels,d;for(n=I(n);s;)s._start>=r&&(s._start+=n,s._end+=n),s=s._next;if(a)for(d in l)l[d]>=r&&(l[d]+=n);return Zt(this)},t.invalidate=function(n){var a=this._first;for(this._lock=0;a;)a.invalidate(n),a=a._next;return o.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var a=this._first,r;a;)r=a._next,this.remove(a),a=r;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Zt(this)},t.totalDuration=function(n){var a=0,r=this,s=r._last,l=_t,d,c,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-n:n));if(r._dirty){for(h=r.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&r._sort&&s._ts&&!r._lock?(r._lock=1,At(r,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(a-=c,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=I(c/r._ts),r._time-=c,r._tTime-=c),r.shiftChildren(-c,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=d;me(r,r===G&&r._time>a?r._time:a,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(n){if(G._ts&&(La(G,ui(n,G)),Pa=ot.frame),ot.frame>=ya){ya+=lt.autoSleep||120;var a=G._first;if((!a||!a._ts)&&lt.autoSleep&&ot._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ot.sleep()}}},e})(Ie);pt(J.prototype,{_lock:0,_hasPause:0,_forcing:0});var es=function(e,t,i,n,a,r,s){var l=new nt(this._pt,e,t,0,1,On,null,a),d=0,c=0,h,m,p,g,u,f,y,w;for(l.b=i,l.e=n,i+="",n+="",(y=~n.indexOf("random("))&&(n=fe(n)),r&&(w=[i,n],r(w,e,t),i=w[0],n=w[1]),m=i.match(Qi)||[];h=Qi.exec(n);)g=h[0],u=n.substring(d,h.index),p?p=(p+1)%5:u.substr(-5)==="rgba("&&(p=1),g!==m[c++]&&(f=parseFloat(m[c-1])||0,l._pt={_next:l._pt,p:u||c===1?u:",",s:f,c:g.charAt(1)==="="?ee(f,g)-f:parseFloat(g)-f,m:p&&p<4?Math.round:0},d=Qi.lastIndex);return l.c=d<n.length?n.substring(d,n.length):"",l.fp=s,(_n.test(n)||y)&&(l.e=0),this._pt=l,l},En=function(e,t,i,n,a,r,s,l,d,c){q(n)&&(n=n(a||0,e,r));var h=e[t],m=i!=="get"?i:q(h)?d?e[t.indexOf("set")||!q(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():h,p=q(h)?d?os:Qa:Ln,g;if(K(n)&&(~n.indexOf("random(")&&(n=fe(n)),n.charAt(1)==="="&&(g=ee(m,n)+(Q(m)||0),(g||g===0)&&(n=g))),!c||m!==n||pn)return!isNaN(m*n)&&n!==""?(g=new nt(this._pt,e,t,+m||0,n-(m||0),typeof h=="boolean"?ls:Ja,0,p),d&&(g.fp=d),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&fi(t,n),es.call(this,e,t,m,n,p,l||lt.stringFilter,d))},is=function(e,t,i,n,a){if(q(e)&&(e=He(e,a,t,i,n)),!kt(e)||e.style&&e.nodeType||tt(e)||Aa(e))return K(e)?He(e,a,t,i,n):e;var r={},s;for(s in e)r[s]=He(e[s],a,t,i,n);return r},Mn=function(e,t,i,n,a,r){var s,l,d,c;if(rt[e]&&(s=new rt[e]).init(a,s.rawVars?t[e]:is(t[e],n,a,r,i),i,n,r)!==!1&&(i._pt=l=new nt(i._pt,a,e,0,1,s.render,s,0,s.priority),i!==ce))for(d=i._ptLookup[i._targets.indexOf(a)],c=s._props.length;c--;)d[s._props[c]]=l;return s},Nt,pn,Pn=function o(e,t,i){var n=e.vars,a=n.ease,r=n.startAt,s=n.immediateRender,l=n.lazy,d=n.onUpdate,c=n.runBackwards,h=n.yoyoEase,m=n.keyframes,p=n.autoRevert,g=e._dur,u=e._startAt,f=e._targets,y=e.parent,w=y&&y.data==="nested"?y.vars.targets:f,_=e._overwrite==="auto"&&!gn,v=e.timeline,b=n.easeReverse||h,T,S,k,C,x,E,P,M,O,$,W,H,j;if(v&&(!m||!a)&&(a="none"),e._ease=Qt(a,Re.ease),e._rEase=b&&(Qt(b)||e._ease),e._from=!v&&!!n.runBackwards,e._from&&(e.ratio=1),!v||m&&!n.stagger){if(M=f[0]?$t(f[0]).harness:0,H=M&&n[M.prop],T=hi(n,vn),u&&(u._zTime<0&&u.progress(1),t<0&&c&&s&&!p?u.render(-1,!0):u.revert(c&&g?oi:Mo),u._lazy=0),r){if(It(e._startAt=Y.set(f,pt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!u&&st(l),startAt:null,delay:0,onUpdate:d&&function(){return ut(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Z||!s&&!p)&&e._startAt.revert(oi),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!u){if(t&&(s=!1),k=pt({overwrite:!1,data:"isFromStart",lazy:s&&!u&&st(l),immediateRender:s,stagger:0,parent:y},T),H&&(k[M.prop]=H),It(e._startAt=Y.set(f,k)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Z?e._startAt.revert(oi):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,N,N);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&st(l)||l&&!g,S=0;S<f.length;S++){if(x=f[S],P=x._gsap||Sn(f)[S]._gsap,e._ptLookup[S]=$={},ln[P.id]&&zt.length&&ci(),W=w===f?S:w.indexOf(x),M&&(O=new M).init(x,H||T,e,W,w)!==!1&&(e._pt=C=new nt(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(St){$[St]=C}),O.priority&&(E=1)),!M||H)for(k in T)rt[k]&&(O=Mn(k,T,e,W,x,w))?O.priority&&(E=1):$[k]=C=En.call(e,x,k,"get",T[k],W,w,0,n.stringFilter);e._op&&e._op[S]&&e.kill(x,e._op[S]),_&&e._pt&&(Nt=e,G.killTweensOf(x,$,e.globalTime(t)),j=!e.parent,Nt=0),e._pt&&l&&(ln[P.id]=1)}E&&Fn(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!j,m&&t<=0&&v.render(_t,!0,!0)},ns=function(e,t,i,n,a,r,s,l){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,m,p;if(!d)for(d=e._ptCache[t]=[],m=e._ptLookup,p=e._targets.length;p--;){if(c=m[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return pn=1,e.vars[t]="+=0",Pn(e,s),pn=0,l?Ne(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(p=d.length;p--;)h=d[p],c=h._pt||h,c.s=(n||n===0)&&!a?n:c.s+(n||0)+r*c.c,c.c=i-c.s,h.e&&(h.e=V(i)+Q(h.e)),h.b&&(h.b=c.s+Q(h.b))},as=function(e,t){var i=e[0]?$t(e[0]).harness:0,n=i&&i.aliases,a,r,s,l;if(!n)return t;a=he({},t);for(r in n)if(r in a)for(l=n[r].split(","),s=l.length;s--;)a[l[s]]=a[r];return a},rs=function(e,t,i,n){var a=t.ease||n||"power1.inOut",r,s;if(tt(t))s=i[e]||(i[e]=[]),t.forEach(function(l,d){return s.push({t:d/(t.length-1)*100,v:l,e:a})});else for(r in t)s=i[r]||(i[r]=[]),r==="ease"||s.push({t:parseFloat(e),v:t[r],e:a})},He=function(e,t,i,n,a){return q(e)?e.call(t,i,n,a):K(e)&&~e.indexOf("random(")?fe(e):e},Xa=xn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Za={};it(Xa+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Za[o]=1});var Y=(function(o){Ca(e,o);function e(i,n,a,r){var s;typeof n=="number"&&(a.duration=n,n=a,a=null),s=o.call(this,r?n:Fe(n))||this;var l=s.vars,d=l.duration,c=l.delay,h=l.immediateRender,m=l.stagger,p=l.overwrite,g=l.keyframes,u=l.defaults,f=l.scrollTrigger,y=n.parent||G,w=(tt(i)||Aa(i)?Dt(i[0]):"length"in n)?[i]:bt(i),_,v,b,T,S,k,C,x;if(s._targets=w.length?Sn(w):Ne("GSAP target "+i+" not found. https://gsap.com",!lt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||m||ri(d)||ri(c)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(_=s.timeline=new J({data:"nested",defaults:u||{},targets:y&&y.data==="nested"?y.vars.targets:w}),_.kill(),_.parent=_._dp=Lt(s),_._start=0,m||ri(d)||ri(c)){if(T=w.length,C=m&&$a(m),kt(m))for(S in m)~Xa.indexOf(S)&&(x||(x={}),x[S]=m[S]);for(v=0;v<T;v++)b=hi(n,Za),b.stagger=0,E&&(b.easeReverse=E),x&&he(b,x),k=w[v],b.duration=+He(d,Lt(s),v,k,w),b.delay=(+He(c,Lt(s),v,k,w)||0)-s._delay,!m&&T===1&&b.delay&&(s._delay=c=b.delay,s._start+=c,b.delay=0),_.to(k,b,C?C(v,k,w):0),_._ease=D.none;_.duration()?d=c=0:s.timeline=0}else if(g){Fe(pt(_.vars.defaults,{ease:"none"})),_._ease=Qt(g.ease||n.ease||"none");var P=0,M,O,$;if(tt(g))g.forEach(function(W){return _.to(w,W,">")}),_.duration();else{b={};for(S in g)S==="ease"||S==="easeEach"||rs(S,g[S],b,g.easeEach);for(S in b)for(M=b[S].sort(function(W,H){return W.t-H.t}),P=0,v=0;v<M.length;v++)O=M[v],$={ease:O.e,duration:(O.t-(v?M[v-1].t:0))/100*d},$[S]=O.v,_.to(w,$,P),P+=$.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return p===!0&&!gn&&(Nt=Lt(s),G.killTweensOf(w),Nt=0),At(y,Lt(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(h||!d&&!g&&s._start===I(y._time)&&st(h)&&Wo(Lt(s))&&y.data!=="nested")&&(s._tTime=-N,s.render(Math.max(0,-c)||0)),f&&Ha(Lt(s),f),s}var t=e.prototype;return t.render=function(n,a,r){var s=this._time,l=this._tDur,d=this._dur,c=n<0,h=n>l-N&&!c?l:n<N?0:n,m,p,g,u,f,y,w,_;if(!d)Ro(this,n,a,r);else if(h!==this._tTime||!n||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(m=h,_=this.timeline,this._repeat){if(u=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(u*100+n,a,r);if(m=I(h%u),h===l?(g=this._repeat,m=d):(f=I(h/u),g=~~f,g&&g===f?(m=d,g--):m>d&&(m=d)),y=this._yoyo&&g&1,y&&(m=d-m),f=ue(this._tTime,u),m===s&&!r&&this._initted&&g===f)return this._tTime=h,this;g!==f&&this.vars.repeatRefresh&&!y&&!this._lock&&m!==u&&this._initted&&(this._lock=r=1,this.render(I(u*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ra(this,c?n:m,r,a,h))return this._tTime=0,this;if(s!==this._time&&!(r&&this.vars.repeatRefresh&&g!==f))return this;if(d!==this._dur)return this.render(n,a,r)}if(this._rEase){var v=m<s;if(v!==this._inv){var b=v?s:d-s;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(m/d);if(this._from&&(this.ratio=w=1-w),this._tTime=h,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!a&&!f&&(ut(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;_&&_.render(n<0?n:_._dur*_._ease(m/this._dur),a,r)||this._startAt&&(this._zTime=n),this._onUpdate&&!a&&(c&&dn(this,n,a,r),ut(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!a&&this.parent&&ut(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&dn(this,n,!0,!0),(n||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&It(this,1),!a&&!(c&&!s)&&(h||s||y)&&(ut(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),o.prototype.invalidate.call(this,n)},t.resetTo=function(n,a,r,s,l){$e||ot.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Pn(this,d),c=this._ease(d/this._dur),ns(this,n,a,r,s,c,d,l)?this.resetTo(n,a,r,s,1):(wi(this,0),this.parent||Fa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,a){if(a===void 0&&(a="all"),!n&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Oe(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Z),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(n,a,Nt&&Nt.vars.overwrite!==!0)._first||Oe(this),this.parent&&r!==this.timeline.totalDuration()&&me(this,this._dur*this.timeline._tDur/r,0,1),this}var s=this._targets,l=n?bt(n):s,d=this._ptLookup,c=this._pt,h,m,p,g,u,f,y;if((!a||a==="all")&&Do(s,l))return a==="all"&&(this._pt=0),Oe(this);for(h=this._op=this._op||[],a!=="all"&&(K(a)&&(u={},it(a,function(w){return u[w]=1}),a=u),a=as(s,a)),y=s.length;y--;)if(~l.indexOf(s[y])){m=d[y],a==="all"?(h[y]=a,g=m,p={}):(p=h[y]=h[y]||{},g=a);for(u in g)f=m&&m[u],f&&((!("kill"in f.d)||f.d.kill(u)===!0)&&gi(this,f,"_pt"),delete m[u]),p!=="all"&&(p[u]=1)}return this._initted&&!this._pt&&c&&Oe(this),this},e.to=function(n,a){return new e(n,a,arguments[2])},e.from=function(n,a){return We(1,arguments)},e.delayedCall=function(n,a,r,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:s})},e.fromTo=function(n,a,r){return We(2,arguments)},e.set=function(n,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(n,a)},e.killTweensOf=function(n,a,r){return G.killTweensOf(n,a,r)},e})(Ie);pt(Y.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});it("staggerTo,staggerFrom,staggerFromTo",function(o){Y[o]=function(){var e=new J,t=hn.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Ln=function(e,t,i){return e[t]=i},Qa=function(e,t,i){return e[t](i)},os=function(e,t,i,n){return e[t](n.fp,i)},ss=function(e,t,i){return e.setAttribute(t,i)},_i=function(e,t){return q(e[t])?Qa:pi(e[t])&&e.setAttribute?ss:Ln},Ja=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ls=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},On=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Dn=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ds=function(e,t,i,n){for(var a=this._pt,r;a;)r=a._next,a.p===n&&a.modifier(e,t,i),a=r},cs=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?gi(this,t,"_pt"):t.dep||(i=1),t=n;return!i},hs=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Fn=function(e){for(var t=e._pt,i,n,a,r;t;){for(i=t._next,n=a;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:r)?t._prev._next=t:a=t,(t._next=n)?n._prev=t:r=t,t=i}e._pt=a},nt=(function(){function o(t,i,n,a,r,s,l,d,c){this.t=i,this.s=a,this.c=r,this.p=n,this.r=s||Ja,this.d=l||this,this.set=d||Ln,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,n,a){this.mSet=this.mSet||this.set,this.set=hs,this.m=i,this.mt=a,this.tween=n},o})();it(xn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return vn[o]=1});mt.TweenMax=mt.TweenLite=Y;mt.TimelineLite=mt.TimelineMax=J;G=new J({sortChildren:!1,defaults:Re,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});lt.stringFilter=An;var Jt=[],li={},us=[],Sa=0,ms=0,an=function(e){return(li[e]||us).map(function(t){return t()})},fn=function(){var e=Date.now(),t=[];e-Sa>2&&(an("matchMediaInit"),Jt.forEach(function(i){var n=i.queries,a=i.conditions,r,s,l,d;for(s in n)r=Tt.matchMedia(n[s]).matches,r&&(l=1),r!==a[s]&&(a[s]=r,d=1);d&&(i.revert(),l&&t.push(i))}),an("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Sa=e,an("matchMedia"))},tr=(function(){function o(t,i){this.selector=i&&un(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ms++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,n,a){q(i)&&(a=n,n=i,i=q);var r=this,s=function(){var d=z,c=r.selector,h;return d&&d!==r&&d.data.push(r),a&&(r.selector=un(a)),z=r,h=n.apply(r,arguments),q(h)&&r._r.push(h),z=d,r.selector=c,r.isReverted=!1,h};return r.last=s,i===q?s(r,function(l){return r.add(null,l)}):i?r[i]=s:s},e.ignore=function(i){var n=z;z=null,i(this),z=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof o?i.push.apply(i,n.getTweens()):n instanceof Y&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var a=this;if(i?(function(){for(var s=a.getTweens(),l=a.data.length,d;l--;)d=a.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=a.data.length;l--;)d=a.data[l],d instanceof J?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Y)&&d.revert&&d.revert(i);a._r.forEach(function(c){return c(i,a)}),a.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var r=Jt.length;r--;)Jt[r].id===this.id&&Jt.splice(r,1)},e.revert=function(i){this.kill(i||{})},o})(),ps=(function(){function o(t){this.contexts=[],this.scope=t,z&&z.data.push(this)}var e=o.prototype;return e.add=function(i,n,a){kt(i)||(i={matches:i});var r=new tr(0,a||this.scope),s=r.conditions={},l,d,c;z&&!r.selector&&(r.selector=z.selector),this.contexts.push(r),n=r.add("onMatch",n),r.queries=i;for(d in i)d==="all"?c=1:(l=Tt.matchMedia(i[d]),l&&(Jt.indexOf(r)<0&&Jt.push(r),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(fn):l.addEventListener("change",fn)));return c&&n(r,function(h){return r.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},o})(),mi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Ya(n)})},timeline:function(e){return new J(e)},getTweensOf:function(e,t){return G.getTweensOf(e,t)},getProperty:function(e,t,i,n){K(e)&&(e=bt(e)[0]);var a=$t(e||{}).get,r=i?Da:Oa;return i==="native"&&(i=""),e&&(t?r((rt[t]&&rt[t].get||a)(e,t,i,n)):function(s,l,d){return r((rt[s]&&rt[s].get||a)(e,s,l,d))})},quickSetter:function(e,t,i){if(e=bt(e),e.length>1){var n=e.map(function(c){return et.quickSetter(c,t,i)}),a=n.length;return function(c){for(var h=a;h--;)n[h](c)}}e=e[0]||{};var r=rt[t],s=$t(e),l=s.harness&&(s.harness.aliases||{})[t]||t,d=r?function(c){var h=new r;ce._pt=0,h.init(e,i?c+i:c,ce,0,[e]),h.render(1,h),ce._pt&&Dn(1,ce)}:s.set(e,l);return r?d:function(c){return d(e,l,i?c+i:c,s,1)}},quickTo:function(e,t,i){var n,a=et.to(e,pt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),r=function(l,d,c){return a.resetTo(t,l,d,c)};return r.tween=a,r},isTweening:function(e){return G.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qt(e.ease,Re.ease)),wa(Re,e||{})},config:function(e){return wa(lt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,a=e.defaults,r=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!rt[s]&&!mt[s]&&Ne(t+" effect requires "+s+" plugin.")}),Ji[t]=function(s,l,d){return i(bt(s),pt(l||{},a),d)},r&&(J.prototype[t]=function(s,l,d){return this.add(Ji[t](s,kt(l)?l:(d=l)&&{},this),d)})},registerEase:function(e,t){D[e]=Qt(t)},parseEase:function(e,t){return arguments.length?Qt(e,t):D},getById:function(e){return G.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new J(e),n,a;for(i.smoothChildTiming=st(e.smoothChildTiming),G.remove(i),i._dp=0,i._time=i._tTime=G._time,n=G._first;n;)a=n._next,(t||!(!n._dur&&n instanceof Y&&n.vars.onComplete===n._targets[0]))&&At(i,n,n._start-n._delay),n=a;return At(G,i,0),i},context:function(e,t){return e?new tr(e,t):z},matchMedia:function(e){return new ps(e)},matchMediaRefresh:function(){return Jt.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||fn()},addEventListener:function(e,t){var i=li[e]||(li[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=li[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Vo,wrapYoyo:Yo,distribute:$a,random:Ga,snap:Ia,normalize:qo,getUnit:Q,clamp:$o,splitColor:Ua,toArray:bt,selector:un,mapRange:qa,pipe:Go,unitize:Bo,interpolate:Uo,shuffle:za},install:Ea,effects:Ji,ticker:ot,updateRoot:J.updateRoot,plugins:rt,globalTimeline:G,core:{PropTween:nt,globals:Ma,Tween:Y,Timeline:J,Animation:Ie,getCache:$t,_removeLinkedListItem:gi,reverting:function(){return Z},context:function(e){return e&&z&&(z.data.push(e),e._ctx=z),z},suppressOverwrites:function(e){return gn=e}}};it("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return mi[o]=Y[o]});ot.add(J.updateRoot);ce=mi.to({},{duration:0});var fs=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},gs=function(e,t){var i=e._targets,n,a,r;for(n in t)for(a=i.length;a--;)r=e._ptLookup[a][n],r&&(r=r.d)&&(r._pt&&(r=fs(r,n)),r&&r.modifier&&r.modifier(t[n],e,i[a],n))},rn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,a,r){r._onInit=function(s){var l,d;if(K(a)&&(l={},it(a,function(c){return l[c]=1}),a=l),t){l={};for(d in a)l[d]=t(a[d]);a=l}gs(s,a)}}}},et=mi.registerPlugin({name:"attr",init:function(e,t,i,n,a){var r,s,l;this.tween=i;for(r in t)l=e.getAttribute(r)||"",s=this.add(e,"setAttribute",(l||0)+"",t[r],n,a,0,0,r),s.op=r,s.b=l,this._props.push(r)},render:function(e,t){for(var i=t._pt;i;)Z?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},rn("roundProps",mn),rn("modifiers"),rn("snap",Ia))||mi;Y.version=J.version=et.version="3.15.0";ka=1;yn()&&pe();var ys=D.Power0,ws=D.Power1,_s=D.Power2,bs=D.Power3,vs=D.Power4,xs=D.Linear,Ss=D.Quad,Cs=D.Cubic,Ts=D.Quart,As=D.Quint,ks=D.Strong,Es=D.Elastic,Ms=D.Back,Ps=D.SteppedEase,Ls=D.Bounce,Os=D.Sine,Ds=D.Expo,Fs=D.Circ;var er,Bt,ye,$n,oe,Ws,ir,In,Hs=function(){return typeof window<"u"},Wt={},re=180/Math.PI,we=Math.PI/180,ge=Math.atan2,nr=1e8,Gn=/([A-Z])/g,Rs=/(left|right|width|margin|padding|x)/i,Ns=/[\s,\(]\S/,Et={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zs=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$s=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Is=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gs=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},hr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ur=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Bs=function(e,t,i){return e.style[t]=i},qs=function(e,t,i){return e.style.setProperty(t,i)},Vs=function(e,t,i){return e._gsap[t]=i},Ys=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Us=function(e,t,i,n,a){var r=e._gsap;r.scaleX=r.scaleY=i,r.renderTransform(a,r)},Ks=function(e,t,i,n,a){var r=e._gsap;r[t]=i,r.renderTransform(a,r)},B="transform",dt=B+"Origin",js=function o(e,t){var i=this,n=this.target,a=n.style,r=n._gsap;if(e in Wt&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Et[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Ft(n,s)}):this.tfm[e]=r.x?r[e]:Ft(n,e),e===dt&&(this.tfm.zOrigin=r.zOrigin);else return Et.transform.split(",").forEach(function(s){return o.call(i,s,t)});if(this.props.indexOf(B)>=0)return;r.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(dt,t,"")),e=B}(a||t)&&this.props.push(e,t,a[e])},mr=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xs=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,a,r;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Gn,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)n[r]=this.tfm[r];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=In(),(!a||!a.isStart)&&!i[B]&&(mr(i),n.zOrigin&&i[dt]&&(i[dt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},pr=function(e,t){var i={target:e,props:[],revert:Xs,save:js};return e._gsap||et.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},fr,Rn=function(e,t){var i=Bt.createElementNS?Bt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bt.createElement(e);return i&&i.style?i:Bt.createElement(e)},ft=function o(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Gn,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&o(e,_e(t)||t,1)||""},ar="O,Moz,ms,Ms,Webkit".split(","),_e=function(e,t,i){var n=t||oe,a=n.style,r=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(ar[r]+e in a););return r<0?null:(r===3?"ms":r>=0?ar[r]:"")+e},Nn=function(){Hs()&&window.document&&(er=window,Bt=er.document,ye=Bt.documentElement,oe=Rn("div")||{style:{}},Ws=Rn("div"),B=_e(B),dt=B+"Origin",oe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fr=!!_e("perspective"),In=et.core.reverting,$n=1)},rr=function(e){var t=e.ownerSVGElement,i=Rn("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),a;n.style.display="block",i.appendChild(n),ye.appendChild(i);try{a=n.getBBox()}catch{}return i.removeChild(n),ye.removeChild(i),a},or=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},gr=function(e){var t,i;try{t=e.getBBox()}catch{t=rr(e),i=1}return t&&(t.width||t.height)||i||(t=rr(e)),t&&!t.width&&!t.x&&!t.y?{x:+or(e,["x","cx","x1"])||0,y:+or(e,["y","cy","y1"])||0,width:0,height:0}:t},yr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gr(e))},Vt=function(e,t){if(t){var i=e.style,n;t in Wt&&t!==dt&&(t=B),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Gn,"-$1").toLowerCase())):i.removeAttribute(t)}},qt=function(e,t,i,n,a,r){var s=new nt(e._pt,t,i,0,1,r?ur:hr);return e._pt=s,s.b=n,s.e=a,e._props.push(i),s},sr={deg:1,rad:1,turn:1},Zs={grid:1,flex:1},Yt=function o(e,t,i,n){var a=parseFloat(i)||0,r=(i+"").trim().substr((a+"").length)||"px",s=oe.style,l=Rs.test(t),d=e.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),h=100,m=n==="px",p=n==="%",g,u,f,y;if(n===r||!a||sr[n]||sr[r])return a;if(r!=="px"&&!m&&(a=o(e,t,i,"px")),y=e.getCTM&&yr(e),(p||r==="%")&&(Wt[t]||~t.indexOf("adius")))return g=y?e.getBBox()[l?"width":"height"]:e[c],V(p?a/g*h:a/100*g);if(s[l?"width":"height"]=h+(m?r:n),u=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!d?e:e.parentNode,y&&(u=(e.ownerSVGElement||{}).parentNode),(!u||u===Bt||!u.appendChild)&&(u=Bt.body),f=u._gsap,f&&p&&f.width&&l&&f.time===ot.time&&!f.uncache)return V(a/f.width*h);if(p&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=h+n,g=e[c],w?e.style[t]=w:Vt(e,t)}else(p||r==="%")&&!Zs[ft(u,"display")]&&(s.position=ft(e,"position")),u===e&&(s.position="static"),u.appendChild(oe),g=oe[c],u.removeChild(oe),s.position="absolute";return l&&p&&(f=$t(u),f.time=ot.time,f.width=u[c]),V(m?g*a/h:g&&a?h/g*a:0)},Ft=function(e,t,i,n){var a;return $n||Nn(),t in Et&&t!=="transform"&&(t=Et[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wt[t]&&t!=="transform"?(a=Ve(e,n),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:vi(ft(e,dt))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||n||~(a+"").indexOf("calc("))&&(a=bi[t]&&bi[t](e,t,i)||ft(e,t)||Cn(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?Yt(e,t,a,i)+i:a},Qs=function(e,t,i,n){if(!i||i==="none"){var a=_e(t,e,1),r=a&&ft(e,a,1);r&&r!==i?(t=a,i=r):t==="borderColor"&&(i=ft(e,"borderTopColor"))}var s=new nt(this._pt,e.style,t,0,1,On),l=0,d=0,c,h,m,p,g,u,f,y,w,_,v,b;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=ft(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(u=e.style[t],e.style[t]=n,n=ft(e,t)||n,u?e.style[t]=u:Vt(e,t)),c=[i,n],An(c),i=c[0],n=c[1],m=i.match(te)||[],b=n.match(te)||[],b.length){for(;h=te.exec(n);)f=h[0],w=n.substring(l,h.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),f!==(u=m[d++]||"")&&(p=parseFloat(u)||0,v=u.substr((p+"").length),f.charAt(1)==="="&&(f=ee(p,f)+v),y=parseFloat(f),_=f.substr((y+"").length),l=te.lastIndex-_.length,_||(_=_||lt.units[t]||v,l===n.length&&(n+=_,s.e+=_)),v!==_&&(p=Yt(e,t,u,_)||0),s._pt={_next:s._pt,p:w||d===1?w:",",s:p,c:y-p,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=t==="display"&&n==="none"?ur:hr;return _n.test(n)&&(s.e=0),this._pt=s,s},lr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Js=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=lr[i]||i,t[1]=lr[n]||n,t.join(" ")},tl=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,a=t.u,r=i._gsap,s,l,d;if(a==="all"||a===!0)n.cssText="",l=1;else for(a=a.split(","),d=a.length;--d>-1;)s=a[d],Wt[s]&&(l=1,s=s==="transformOrigin"?dt:B),Vt(i,s);l&&(Vt(i,B),r&&(r.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ve(i,1),r.uncache=1,mr(n)))}},bi={clearProps:function(e,t,i,n,a){if(a.data!=="isFromStart"){var r=e._pt=new nt(e._pt,t,i,0,0,tl);return r.u=n,r.pr=-10,r.tween=a,e._props.push(i),1}}},qe=[1,0,0,1,0,0],wr={},_r=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dr=function(e){var t=ft(e,B);return _r(t)?qe:t.substr(7).match(wn).map(V)},Bn=function(e,t){var i=e._gsap||$t(e),n=e.style,a=dr(e),r,s,l,d;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?qe:a):(a===qe&&!e.offsetParent&&e!==ye&&!i.svg&&(l=n.display,n.display="block",r=e.parentNode,(!r||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,s=e.nextElementSibling,ye.appendChild(e)),a=dr(e),l?n.display=l:Vt(e,"display"),d&&(s?r.insertBefore(e,s):r?r.appendChild(e):ye.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},zn=function(e,t,i,n,a,r){var s=e._gsap,l=a||Bn(e,!0),d=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,m=s.yOffset||0,p=l[0],g=l[1],u=l[2],f=l[3],y=l[4],w=l[5],_=t.split(" "),v=parseFloat(_[0])||0,b=parseFloat(_[1])||0,T,S,k,C;i?l!==qe&&(S=p*f-g*u)&&(k=v*(f/S)+b*(-u/S)+(u*w-f*y)/S,C=v*(-g/S)+b*(p/S)-(p*w-g*y)/S,v=k,b=C):(T=gr(e),v=T.x+(~_[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(_[1]||_[0]).indexOf("%")?b/100*T.height:b)),n||n!==!1&&s.smooth?(y=v-d,w=b-c,s.xOffset=h+(y*p+w*u)-y,s.yOffset=m+(y*g+w*f)-w):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=b,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[dt]="0px 0px",r&&(qt(r,s,"xOrigin",d,v),qt(r,s,"yOrigin",c,b),qt(r,s,"xOffset",h,s.xOffset),qt(r,s,"yOffset",m,s.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Ve=function(e,t){var i=e._gsap||new kn(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,a=i.scaleX<0,r="px",s="deg",l=getComputedStyle(e),d=ft(e,dt)||"0",c,h,m,p,g,u,f,y,w,_,v,b,T,S,k,C,x,E,P,M,O,$,W,H,j,St,at,gt,Pt,Ct,ht,yt;return c=h=m=u=f=y=w=_=v=0,p=g=1,i.svg=!!(e.getCTM&&yr(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[B]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[B]!=="none"?l[B]:"")),n.scale=n.rotate=n.translate="none"),S=Bn(e,i.svg),i.svg&&(i.uncache?(j=e.getBBox(),d=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),zn(e,H||d,!!H||i.originIsAbsolute,i.smooth!==!1,S)),b=i.xOrigin||0,T=i.yOrigin||0,S!==qe&&(E=S[0],P=S[1],M=S[2],O=S[3],c=$=S[4],h=W=S[5],S.length===6?(p=Math.sqrt(E*E+P*P),g=Math.sqrt(O*O+M*M),u=E||P?ge(P,E)*re:0,w=M||O?ge(M,O)*re+u:0,w&&(g*=Math.abs(Math.cos(w*we))),i.svg&&(c-=b-(b*E+T*M),h-=T-(b*P+T*O))):(yt=S[6],Ct=S[7],at=S[8],gt=S[9],Pt=S[10],ht=S[11],c=S[12],h=S[13],m=S[14],k=ge(yt,Pt),f=k*re,k&&(C=Math.cos(-k),x=Math.sin(-k),H=$*C+at*x,j=W*C+gt*x,St=yt*C+Pt*x,at=$*-x+at*C,gt=W*-x+gt*C,Pt=yt*-x+Pt*C,ht=Ct*-x+ht*C,$=H,W=j,yt=St),k=ge(-M,Pt),y=k*re,k&&(C=Math.cos(-k),x=Math.sin(-k),H=E*C-at*x,j=P*C-gt*x,St=M*C-Pt*x,ht=O*x+ht*C,E=H,P=j,M=St),k=ge(P,E),u=k*re,k&&(C=Math.cos(k),x=Math.sin(k),H=E*C+P*x,j=$*C+W*x,P=P*C-E*x,W=W*C-$*x,E=H,$=j),f&&Math.abs(f)+Math.abs(u)>359.9&&(f=u=0,y=180-y),p=V(Math.sqrt(E*E+P*P+M*M)),g=V(Math.sqrt(W*W+yt*yt)),k=ge($,W),w=Math.abs(k)>2e-4?k*re:0,v=ht?1/(ht<0?-ht:ht):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_r(ft(e,B)),H&&e.setAttribute("transform",H))),Math.abs(w)>90&&Math.abs(w)<270&&(a?(p*=-1,w+=u<=0?180:-180,u+=u<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+r,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+r,i.z=m+r,i.scaleX=V(p),i.scaleY=V(g),i.rotation=V(u)+s,i.rotationX=V(f)+s,i.rotationY=V(y)+s,i.skewX=w+s,i.skewY=_+s,i.transformPerspective=v+r,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(n[dt]=vi(d)),i.xOffset=i.yOffset=0,i.force3D=lt.force3D,i.renderTransform=i.svg?il:fr?br:el,i.uncache=0,i},vi=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wn=function(e,t,i){var n=Q(t);return V(parseFloat(t)+parseFloat(Yt(e,"x",i+"px",n)))+n},el=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,br(e,t)},ne="0deg",Be="0px",ae=") ",br=function(e,t){var i=t||this,n=i.xPercent,a=i.yPercent,r=i.x,s=i.y,l=i.z,d=i.rotation,c=i.rotationY,h=i.rotationX,m=i.skewX,p=i.skewY,g=i.scaleX,u=i.scaleY,f=i.transformPerspective,y=i.force3D,w=i.target,_=i.zOrigin,v="",b=y==="auto"&&e&&e!==1||y===!0;if(_&&(h!==ne||c!==ne)){var T=parseFloat(c)*we,S=Math.sin(T),k=Math.cos(T),C;T=parseFloat(h)*we,C=Math.cos(T),r=Wn(w,r,S*C*-_),s=Wn(w,s,-Math.sin(T)*-_),l=Wn(w,l,k*C*-_+_)}f!==Be&&(v+="perspective("+f+ae),(n||a)&&(v+="translate("+n+"%, "+a+"%) "),(b||r!==Be||s!==Be||l!==Be)&&(v+=l!==Be||b?"translate3d("+r+", "+s+", "+l+") ":"translate("+r+", "+s+ae),d!==ne&&(v+="rotate("+d+ae),c!==ne&&(v+="rotateY("+c+ae),h!==ne&&(v+="rotateX("+h+ae),(m!==ne||p!==ne)&&(v+="skew("+m+", "+p+ae),(g!==1||u!==1)&&(v+="scale("+g+", "+u+ae),w.style[B]=v||"translate(0, 0)"},il=function(e,t){var i=t||this,n=i.xPercent,a=i.yPercent,r=i.x,s=i.y,l=i.rotation,d=i.skewX,c=i.skewY,h=i.scaleX,m=i.scaleY,p=i.target,g=i.xOrigin,u=i.yOrigin,f=i.xOffset,y=i.yOffset,w=i.forceCSS,_=parseFloat(r),v=parseFloat(s),b,T,S,k,C;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=we,d*=we,b=Math.cos(l)*h,T=Math.sin(l)*h,S=Math.sin(l-d)*-m,k=Math.cos(l-d)*m,d&&(c*=we,C=Math.tan(d-c),C=Math.sqrt(1+C*C),S*=C,k*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),b*=C,T*=C)),b=V(b),T=V(T),S=V(S),k=V(k)):(b=h,k=m,T=S=0),(_&&!~(r+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(_=Yt(p,"x",r,"px"),v=Yt(p,"y",s,"px")),(g||u||f||y)&&(_=V(_+g-(g*b+u*S)+f),v=V(v+u-(g*T+u*k)+y)),(n||a)&&(C=p.getBBox(),_=V(_+n/100*C.width),v=V(v+a/100*C.height)),C="matrix("+b+","+T+","+S+","+k+","+_+","+v+")",p.setAttribute("transform",C),w&&(p.style[B]=C)},nl=function(e,t,i,n,a){var r=360,s=K(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?re:1),d=l-n,c=n+d+"deg",h,m;return s&&(h=a.split("_")[1],h==="short"&&(d%=r,d!==d%(r/2)&&(d+=d<0?r:-r)),h==="cw"&&d<0?d=(d+r*nr)%r-~~(d/r)*r:h==="ccw"&&d>0&&(d=(d-r*nr)%r-~~(d/r)*r)),e._pt=m=new nt(e._pt,t,i,n,d,zs),m.e=c,m.u="deg",e._props.push(i),m},cr=function(e,t){for(var i in t)e[i]=t[i];return e},al=function(e,t,i){var n=cr({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",r=i.style,s,l,d,c,h,m,p,g;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),r[B]=t,s=Ve(i,1),Vt(i,B),i.setAttribute("transform",d)):(d=getComputedStyle(i)[B],r[B]=t,s=Ve(i,1),r[B]=d);for(l in Wt)d=n[l],c=s[l],d!==c&&a.indexOf(l)<0&&(p=Q(d),g=Q(c),h=p!==g?Yt(i,l,d,g):parseFloat(d),m=parseFloat(c),e._pt=new nt(e._pt,s,l,h,m-h,Hn),e._pt.u=g||0,e._props.push(l));cr(s,n)};it("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",n="Bottom",a="Left",r=(e<3?[t,i,n,a]:[t+a,t+i,n+i,n+a]).map(function(s){return e<2?o+s:"border"+s+o});bi[e>1?"border"+o:o]=function(s,l,d,c,h){var m,p;if(arguments.length<4)return m=r.map(function(g){return Ft(s,g,d)}),p=m.join(" "),p.split(m[0]).length===5?m[0]:p;m=(c+"").split(" "),p={},r.forEach(function(g,u){return p[g]=m[u]=m[u]||m[(u-1)/2|0]}),s.init(l,p,h)}});var qn={name:"css",register:Nn,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,a){var r=this._props,s=e.style,l=i.vars.startAt,d,c,h,m,p,g,u,f,y,w,_,v,b,T,S,k,C;$n||Nn(),this.styles=this.styles||pr(e),k=this.styles.props,this.tween=i;for(u in t)if(u!=="autoRound"&&(c=t[u],!(rt[u]&&Mn(u,t,i,n,e,a)))){if(p=typeof c,g=bi[u],p==="function"&&(c=c.call(i,n,e,a),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=fe(c)),g)g(this,e,u,c,i)&&(S=1);else if(u.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(u)+"").trim(),c+="",Ot.lastIndex=0,Ot.test(d)||(f=Q(d),y=Q(c),y?f!==y&&(d=Yt(e,u,d,y)+y):f&&(c+=f)),this.add(s,"setProperty",d,c,n,a,0,0,u),r.push(u),k.push(u,0,s[u]);else if(p!=="undefined"){if(l&&u in l?(d=typeof l[u]=="function"?l[u].call(i,n,e,a):l[u],K(d)&&~d.indexOf("random(")&&(d=fe(d)),Q(d+"")||d==="auto"||(d+=lt.units[u]||Q(Ft(e,u))||""),(d+"").charAt(1)==="="&&(d=Ft(e,u))):d=Ft(e,u),m=parseFloat(d),w=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),h=parseFloat(c),u in Et&&(u==="autoAlpha"&&(m===1&&Ft(e,"visibility")==="hidden"&&h&&(m=0),k.push("visibility",0,s.visibility),qt(this,s,"visibility",m?"inherit":"hidden",h?"inherit":"hidden",!h)),u!=="scale"&&u!=="transform"&&(u=Et[u],~u.indexOf(",")&&(u=u.split(",")[0]))),_=u in Wt,_){if(this.styles.save(u),C=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=ft(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=c,c=ft(e,"perspective"),x?e.style.perspective=x:Vt(e,"perspective")}h=parseFloat(c)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ve(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new nt(this._pt,s,B,0,1,b.renderTransform,b,0,-1),v.dep=1),u==="scale")this._pt=new nt(this._pt,b,"scaleY",b.scaleY,(w?ee(b.scaleY,w+h):h)-b.scaleY||0,Hn),this._pt.u=0,r.push("scaleY",u),u+="X";else if(u==="transformOrigin"){k.push(dt,0,s[dt]),c=Js(c),b.svg?zn(e,c,0,T,0,this):(y=parseFloat(c.split(" ")[2])||0,y!==b.zOrigin&&qt(this,b,"zOrigin",b.zOrigin,y),qt(this,s,u,vi(d),vi(c)));continue}else if(u==="svgOrigin"){zn(e,c,1,T,0,this);continue}else if(u in wr){nl(this,b,u,m,w?ee(m,w+c):c);continue}else if(u==="smoothOrigin"){qt(this,b,"smooth",b.smooth,c);continue}else if(u==="force3D"){b[u]=c;continue}else if(u==="transform"){al(this,c,e);continue}}else u in s||(u=_e(u)||u);if(_||(h||h===0)&&(m||m===0)&&!Ns.test(c)&&u in s)f=(d+"").substr((m+"").length),h||(h=0),y=Q(c)||(u in lt.units?lt.units[u]:f),f!==y&&(m=Yt(e,u,d,y)),this._pt=new nt(this._pt,_?b:s,u,m,(w?ee(m,w+h):h)-m,!_&&(y==="px"||u==="zIndex")&&t.autoRound!==!1?Gs:Hn),this._pt.u=y||0,_&&C!==c?(this._pt.b=d,this._pt.e=C,this._pt.r=Is):f!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=$s);else if(u in s)Qs.call(this,e,u,d,w?w+c:c);else if(u in e)this.add(e,u,d||e[u],w?w+c:c,n,a);else if(u!=="parseTransform"){fi(u,c);continue}_||(u in s?k.push(u,0,s[u]):typeof e[u]=="function"?k.push(u,2,e[u]()):k.push(u,1,d||e[u])),r.push(u)}}S&&Fn(this)},render:function(e,t){if(t.tween._time||!In())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ft,aliases:Et,getSetter:function(e,t,i){var n=Et[t];return n&&n.indexOf(",")<0&&(t=n),t in Wt&&t!==dt&&(e._gsap.x||Ft(e,"x"))?i&&ir===i?t==="scale"?Ys:Vs:(ir=i||{})&&(t==="scale"?Us:Ks):e.style&&!pi(e.style[t])?Bs:~t.indexOf("-")?qs:_i(e,t)},core:{_removeProperty:Vt,_getMatrix:Bn}};et.utils.checkPrefix=_e;et.core.getStyleSaver=pr;(function(o,e,t,i){var n=it(o+","+e+","+t,function(a){Wt[a]=1});it(e,function(a){lt.units[a]="deg",wr[a]=1}),Et[n[13]]=o+","+e,it(i,function(a){var r=a.split(":");Et[r[1]]=n[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){lt.units[o]="px"});et.registerPlugin(qn);var Vn=et.registerPlugin(qn)||et,vd=Vn.core.Tween;var vr={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},ct={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Yn={sunny:"26",rainy:"18",snowy:"2",stormy:"16",windy:"20",cloudy:"15",foggy:"12","partly-cloudy":"23",pouring:"14","snowy-rainy":"3","clear-night":"8",sleety:"1","snowy-stormy":"0","light-rain":"20","sleety-stormy":"-1"},Un={sunny:"Sunny",rainy:"Rainy",snowy:"Snowy",stormy:"Thunderstorm",windy:"Windy",cloudy:"Cloudy",foggy:"Foggy","partly-cloudy":"Partly Cloudy",pouring:"Pouring Rain","snowy-rainy":"Mixed Precipitation","clear-night":"Clear Night",sleety:"Sleet","snowy-stormy":"Snowy Thunderstorm","light-rain":"Light Rain","sleety-stormy":"Sleet Storm"};var xr={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},be={humidity:"65%",windSpeed:"10 km/h",pressure:"1013 hPa",indoorTemperature:"22\xB0",indoorHumidity:"45%"},Sr="1.1.1",Cr={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function rl(o){return["sunny","clear-night","partly-cloudy","cloudy","rainy","light-rain","pouring","stormy","snowy","snowy-rainy","snowy-stormy","sleety","sleety-stormy","windy","foggy"].includes(o)}function Tr(o,e=-1/0,t=1/0){return typeof o=="number"&&!isNaN(o)&&o>=e&&o<=t}function Ue(o){return typeof o!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(o)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(o)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(o.toLowerCase())}function L(o){return o==null?"":String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ve(o,e){return Object.prototype.hasOwnProperty.call(o,e)?o[e]:void 0}function xi(o){let e=customElements.get("ha-input")||!customElements.get("ha-textfield")?"ha-input":"ha-textfield",{id:t,label:i,value:n,placeholder:a,hint:r,type:s,min:l,max:d}=o,c=[`id="${L(t)}"`,`label="${L(i)}"`,`value="${L(n)}"`,a?`placeholder="${L(a)}"`:"",s?`type="${s}"`:"",l!==void 0?`min="${l}"`:"",d!==void 0?`max="${d}"`:"",r?e==="ha-input"?`hint="${L(r)}"`:`helper="${L(r)}" helperPersistent`:""].filter(Boolean);return`<${e} ${c.join(" ")}></${e}>`}function se(o,e,t=0){if(!isFinite(o))return"--";let i=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:t,maximumFractionDigits:t}).format(o)}catch{return o.toFixed(t)}}function xe(o,e,t){if(o?.localize)try{let i=o.localize(e);if(i&&i!==e)return i}catch{}return t}function Ar(o,e){if(!isFinite(o))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return o*3.6;case"mph":return o*1.609344;case"ft/s":return o*1.09728;case"kn":case"kt":case"knots":return o*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,o),1.5)*3.6;default:return o}}function A(o,e,...t){o&&console.log(`[AWC Dev] ${e}`,...t)}function X(o,e){let t=o.engine_settings||{},i=(r,s,l,d)=>Tr(r,l,d)?r:s,n=i(t.windSpeed,ct.windSpeed,.1,15),a=n;return Tr(e,0,200)&&(a=Math.max(.1,Math.min(15,e/10*n))),{windSpeed:a,rainCount:i(t.rainCount,ct.rainCount,.1,10),leafCount:i(t.leafCount,ct.leafCount,.1,10),snowCount:i(t.snowCount,ct.snowCount,.1,10),cloudBaseSize:i(t.cloudBaseSize,ct.cloudBaseSize,.3,2.5),cloudCount:i(t.cloudCount,ct.cloudCount,1,20),splashBounce:i(t.splashBounce,ct.splashBounce,40,120)}}function Kn(o){o.forEach(e=>{e!=null&&clearTimeout(e)}),o.length=0}function kr(o){let e=new Set;return o.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;e.add(n)})}),e}function Si(o){window.AnimatedWeatherCardGsap&&kr(o).forEach(e=>e.pause())}function Ci(o){window.AnimatedWeatherCardGsap&&kr(o).forEach(e=>e.resume())}function jn(o){window.AnimatedWeatherCardGsap&&o.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function Ti(o,e,t,i,n){if(typeof o!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";if(e&&rl(o))return o;if(e)return console.warn(`Invalid dev mode condition: ${o}, using sunny`),"sunny";let a=o.toLowerCase();if(a.includes("sleet")&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"sleety-stormy";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"snowy-stormy";if(a.includes("lightning")||a.includes("thunder")||a.includes("storm"))return"stormy";if(a.includes("fog")||a.includes("mist"))return"foggy";if(a.includes("heavy")&&a.includes("rain"))return"pouring";if(a.includes("pouring")||a.includes("downpour"))return"pouring";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("rain")||a.includes("drizzle")))return"snowy-rainy";if(a.includes("light")&&(a.includes("rain")||a.includes("drizzle")))return"light-rain";if(a.includes("rain")||a.includes("drizzle"))return"rainy";if(a.includes("sleet")||a.includes("hail"))return"sleety";if(a.includes("snow"))return"snowy";if(a.includes("wind"))return"windy";if(a.includes("partly")&&a.includes("cloud"))return"partly-cloudy";if(a.includes("cloud")||a.includes("overcast"))return"cloudy";if(a.includes("clear")||a.includes("sunny")){let r=new Date,s;if(n)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(r);s=parseInt(h.find(m=>m.type==="hour")?.value||"0",10)}catch{s=r.getHours()}else s=r.getHours();let l=t??6,d=i??20;return(s<l||s>=d)&&a.includes("clear")?"clear-night":"sunny"}return"sunny"}function Ke(o,e,t){if(typeof o!="string"||!o.trim())return console.warn("Invalid animation type provided"),t||Ye("rain");if(!e||!e.isEnabled())return t||Ye(o);let i=Cr[o];if(!i)return console.warn(`No color scheme found for animation type: ${o}`),t||Ye(o);try{let n=e.getCurrentState(),a=e.getTimeAwareColor(i);return Ue(a)?a:(console.warn(`Invalid color returned from time manager: ${a}`),t||Ye(o))}catch(n){return console.error("Error getting time-aware color:",n),t||Ye(o)}}function Ye(o){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[o];return t||(console.warn(`Unknown animation type: ${o}, using white as fallback`),"#FFFFFF")}var Ai=class Ai{constructor(e,t,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=e,this.config=t,this.cardConfig=i,this.state="created",queueMicrotask(()=>A(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){A(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),A(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),A(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{A(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{A(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),A(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(e){let t=this.state;this.state=e,A(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=e?"block":"none",A(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!Ai.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",A(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],A(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};Ai.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var U=Ai;var Ut=class{constructor(e,t,i){this.layer=e;this.create=t;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let i=0;i<e;i++){let n=this.create(i);this.layer.appendChild(n);let a={el:n};this.items.push(a),t.push(n),this.run(a,!0)}return t}run(e,t){this.running&&(e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause())}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function Se(o,e){return e&&o.progress(Math.random()),o}var ol=420*230;function Ce(o,e){return Math.min(3,Math.max(.6,o*e/ol))||1}function F(o,e){return o+Math.random()*(e-o)}var sl={light:10,rain:18,storm:24,pouring:32},ll={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},dl={light:16,rain:24,storm:34,pouring:42},cl=.3,hl=16,ul=8,ml=[10,30],Er="http://www.w3.org/2000/svg";function pl(o,e,t,i){let n=0,a=0,r=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*o+l*l*t,c=2*(1-l)*l*e+l*l*i;n+=Math.hypot(d-a,c-r),a=d,r=c}return n}function fl(o,e,t,i){return Math.max(4,Math.round(sl[o]*e*Ce(t,i)))}var ki=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=a,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},A(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=X(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),a=this.rainKind(),r=fl(a,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,d=dl[a],c=a==="pouring"?3:2.4;this.splashLayer=t,this.splashColor=s,this.splashBounce=i.splashBounce/ct.splashBounce,this.pool=new Ut(t,()=>{let h=F(1,c),m=document.createElement("div");return m.className="raindrop",m.style.cssText=`
                    width: ${h.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${h.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,m.dataset.width=h.toFixed(2),m},(h,m,p)=>this.fall(h,n,a,d,l,m,p)),this.pool.start(r).forEach(h=>this.addParticle(h)),A(this.config.devMode,`Rain animation started - ${r} drops (${a})`)}fall(t,i,n,a,r,s,l){let d=i.offsetWidth,c=i.offsetHeight,[h,m]=ll[n],p=F(h,m),g=F(6,Math.max(7,d-6)),u=this.rainConfig.splashEnabled&&Math.random()<cl,f=-a,y=u?c-a:r?c+F(60,120):c,w=Math.max(.25,(y-f)/p),_=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(v.fromTo(t,{y:f},{y,duration:w,ease:"none"}),u)v.call(()=>this.createSplash(g+_/2,c),[],w),v.to(t,{scaleY:0,duration:a/p,ease:"none"},w);else if(r){let b=(c-a-f)/p;v.to(t,{opacity:0,duration:w-b,ease:"power1.in"},b)}return Se(v,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),A(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,i);for(let n of[-1,1]){let a=this.splashDots[this.nextSplashDot];a||(a=document.createElement("div"),a.className="rain-splash",a.style.background=this.splashColor,this.splashLayer.appendChild(a),this.splashDots[this.nextSplashDot]=a),this.nextSplashDot=(this.nextSplashDot+1)%hl;let r=F(.22,.28),s=F(4,10)*this.splashBounce,l=n*F(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(a),window.AnimatedWeatherCardGsap.set(a,{x:t-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(a,{x:t-1+l,duration:r,ease:"power1.out"},0).to(a,{y:i-2-s,duration:r*.45,ease:"power2.out"},0).to(a,{y:i-2,duration:r*.55,ease:"power2.in"},r*.45).to(a,{opacity:0,duration:r*.4,ease:"power1.in"},r*.6)}}}createRebound(t,i){let n=this.splashLayer,a=this.rebounds[this.nextRebound];if(!a){a=document.createElementNS(Er,"svg"),a.classList.add("rain-rebound");let u=document.createElementNS(Er,"path");u.setAttribute("fill","none"),u.style.stroke=this.splashColor,a.appendChild(u),n.appendChild(a),this.rebounds[this.nextRebound]=a}this.nextRebound=(this.nextRebound+1)%ul;let r=a.firstChild,[s,l]=ml,d=F(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*F(10,24)*this.splashBounce,h=F(6,18);r.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${h.toFixed(1)}`);let m=pl(c,-2*d,2*c,h),p=Math.min(m*.45,6+d*.3);r.style.strokeDasharray=`${p.toFixed(1)} ${(m+p).toFixed(1)}`;let g=F(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([a,r]),window.AnimatedWeatherCardGsap.set(a,{x:t,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(r,{strokeDashoffset:p,strokeWidth:1.6},{strokeDashoffset:-m,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(a,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?Ke("lightning",t,"var(--weather-storm-rain-color)"):Ke("rain",t,"var(--weather-rain-color)")}};var gl=36,Kt=[2,6],Xn=[20,38],Mr=10,yl=.6;function wl(o,e,t){return Math.max(6,Math.round(gl*o*Ce(e,t)))}function Qn(o){return Math.min(2.2,Math.max(.3,o/ct.windSpeed))}var Ei=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=a,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},A(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=X(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),a=wl(i.snowCount,n.offsetWidth,n.offsetHeight),r="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Qn(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new Ut(t,()=>this.createFlake(r),(d,c,h)=>this.fall(d,n,l,s,c,h)),this.pool.start(a).forEach(d=>this.addParticle(d)),A(this.config.devMode,`Snow animation started - ${a} flakes`)}createFlake(t){let i=F(Kt[0],Kt[1]),n=(i-Kt[0])/(Kt[1]-Kt[0]),a=document.createElement("div");a.className="snowflake",a.dataset.size=i.toFixed(2),a.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,a.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(a,{transformOrigin:"50% -500%",rotation:-Mr});let r=window.AnimatedWeatherCardGsap.to(a,{rotation:Mr,duration:F(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return r.progress(Math.random()),this.swings.push(r),a}fall(t,i,n,a,r,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(t.dataset.size||"4"),h=(c-Kt[0])/(Kt[1]-Kt[0]),m=(Xn[0]+(Xn[1]-Xn[0])*h)*F(.9,1.1),p=this.snowConfig.accumulation&&Math.random()<yl,g=-c*2,u=p?d-this.pileHeight()-c:a?d+F(60,120):d+c,f=u-g,y=Math.max(.5,f/m),w=f*F(.04,.13)*n,_=F(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:parseFloat(t.dataset.opacity||"0.7")});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:r});if(v.fromTo(t,{y:g},{y:u,x:_+w,duration:y,ease:"none"}),p)v.call(()=>this.addToAccumulation(),[],y),v.to(t,{opacity:0,duration:.6,ease:"power1.out"},y);else if(a){let b=Math.min(y,(d-g)/m);v.to(t,{opacity:0,duration:Math.max(.1,y-b),ease:"power1.in"},b)}return Se(v,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),A(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),A(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),A(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: ${i}px;
            background: linear-gradient(to top, #ffffff, transparent);
            transform-origin: 50% 100%;
            transform: scaleY(0);
            pointer-events: none;
            z-index: 5;
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!t?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let a=Math.min(i,n+.8);t.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(t,{scaleY:a/i,opacity:Math.min(.9,a/i),duration:.3,ease:"power2.out"})}};var _l=30,Pr=[150,230],bl=.3,Mi=6,Pi=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=a,this.sleetConfig={particleCount:40,...i},A(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=X(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),a=Math.max(6,Math.round(_l*i.snowCount*Ce(n.offsetWidth,n.offsetHeight))),r=this.cardConfig.spill_particles!==!1,s=Qn(i.windSpeed)*.5;this.pool=new Ut(t,()=>{let l=F(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,n,s,r,d,c)),this.pool.start(a).forEach(l=>this.addParticle(l)),A(this.config.devMode,`Sleet animation started - ${a} pellets`)}fall(t,i,n,a,r,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(t.dataset.size||"2"),h=F(Pr[0],Pr[1]),m=Math.random()<bl,p=-c*2,g=m?d-c:a?d+F(60,120):d+c,u=g-p,f=Math.max(.3,u/h),y=u*F(.03,.08)*n,w=F(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:w,opacity:F(.8,1),rotation:F(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:r});if(_.fromTo(t,{y:p},{y:g,x:w+y,duration:f,ease:"none"}),m)_.call(()=>this.addToPile(i),[],f),_.to(t,{opacity:0,duration:.3,ease:"power1.out"},f);else if(a){let v=Math.min(f,(d-p)/h);_.to(t,{opacity:0,duration:Math.max(.1,f-v),ease:"power1.in"},v)}return Se(_,s)}addToPile(t){if(this.state!=="active")return;let i=t.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${Mi}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=Mi)return;let a=Math.min(Mi,n+.4);i.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(i,{scaleY:a/Mi,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),A(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Sleet animation resumed")}};var Jn=[90,160];function Lr(o,e,t,i,n,a=!0){let r=document.createElement("div");r.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),h=c<.25,m=c>.8&&d>100;r.style.position="absolute",r.style.borderRadius="0 100% 0 100%",r.style.transformOrigin="center",r.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let p=(Math.random()*8+6)*t;r.style.width=r.style.height=p+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];r.style.background=g[Math.floor(Math.random()*g.length)];let u=-p-10,f=s+(a?60+Math.random()*80:p+10),y=(Jn[0]+Math.random()*(Jn[1]-Jn[0]))*Te(e.windSpeed)*(h?.6:1),w=(f-u)/y,_=Math.min(w,(s-u)/y),v=m?-(60+Math.random()*80):h?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(r,{x:u,y:d,rotation:Math.random()*360,opacity:0}),o.appendChild(r);let b=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{r.parentNode&&r.parentNode.removeChild(r),n&&n(r)}});return b.to(r,{opacity:.85,duration:.25,ease:"power1.out"},0).to(r,{x:f,duration:w,ease:"none"},0).to(r,{y:d+v,duration:w,ease:h?"sine.in":"sine.inOut"},0).to(r,{rotation:`+=${120+Math.random()*180}`,duration:w,ease:"none"},0),a&&w>_&&b.to(r,{opacity:0,duration:w-_,ease:"power1.in"},_),r}function Or(o,e,t,i,n,a){let r=document.createElement("div");r.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,d=s>.8;r.style.position="absolute",r.style.height=(d?2:1)*t+"px",r.style.borderRadius=l?"2px 1px":"1px",r.style.transformOrigin="left center",r.style.zIndex="10";let c=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";r.style.background=`linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`;let h=Math.max(15,(20+Math.random()*60)*t);r.style.width=h+"px";let m=i.offsetWidth,p=i.offsetHeight,g=p*.15+Math.random()*(p*.7);window.AnimatedWeatherCardGsap.set(r,{x:-h,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),o.appendChild(r);let f=(m+h*2)/(vl*Te(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{r.parentNode&&r.parentNode.removeChild(r),a&&a(r)}}).to(r,{scaleX:1,opacity:d?.35:.22,duration:.3,ease:"power2.out"},0).to(r,{x:m+h,rotation:l?g>p/2?5:-5:0,duration:f,ease:"none"},0).to(r,{opacity:0,scaleX:.3,duration:Math.min(.5,f*.3)},f-Math.min(.5,f*.3)),r}var vl=230,xl=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Te(o){return Math.min(2.2,Math.max(.6,Math.sqrt(o/ct.windSpeed)))}var Sl=12;function je(o){o.querySelectorAll(".cloud-track, .cloud-gsap").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function Cl(o){return Math.min(1,Math.max(.5,o/160))||1}function Dr(o,e,t,i,n){let a=i.offsetWidth,r=i.offsetHeight,s=xl,l=Te(e.windSpeed),d=[],c=t||e.cloudCount,h=Cl(r);return s.forEach((m,p)=>{let g=Math.ceil(p===0||p===1?c*.4:c*.6);for(let u=1;u<=g;u++){let f=document.createElement("div");f.className=`cloud-gsap cloud-gsap-${m.name}-${u}`;let y=e.cloudBaseSize*m.scale,w=1+(u-1)*.15,_=Math.max(.3,Math.min(2.5,y))*w*h,v=70,b=26,T=44,S=44,k=35,C=35,x=Math.round(v*_),E=Math.round(b*_);f.style.position="absolute",f.style.width=x+"px",f.style.height=E+"px",f.style.borderRadius="50px",f.style.opacity=m.opacity.toString(),f.style.zIndex=(10+p).toString(),m.blur>0&&(f.style.filter=`blur(${m.blur}px)`);let P=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][p];f.style.background=P;let M=document.createElement("div");M.style.position="absolute",M.style.width=Math.round(T*_)+"px",M.style.height=Math.round(S*_)+"px",M.style.top=Math.round(-22*_)+"px",M.style.left=Math.round(9*_)+"px",M.style.borderRadius="50px",M.style.background=P,f.appendChild(M);let O=document.createElement("div");O.style.position="absolute",O.style.width=Math.round(k*_)+"px",O.style.height=Math.round(C*_)+"px",O.style.top=Math.round(-13*_)+"px",O.style.right=Math.round(9*_)+"px",O.style.borderRadius="50px",O.style.background=P,f.appendChild(O);let W=[[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][p][u-1]||15+p*10,H=Math.max(150+p*50,x+Sl),j=m.speed*l*(.9+Math.random()*.2),St=(a+2*H)/j,at=document.createElement("div");at.className="cloud-track",at.appendChild(f),window.AnimatedWeatherCardGsap.set(f,{opacity:m.opacity}),window.AnimatedWeatherCardGsap.set(at,{xPercent:0,x:-H,y:r*W/100}),o.appendChild(at);let gt=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});gt.fromTo(at,{xPercent:0,x:-H},{xPercent:100,x:H,duration:St,ease:"none"}),gt.progress(Math.random()),d.push(gt)}}),d}function Fr(o){let e=o.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function Wr(o,e,t,i,n){let a=document.createElement("div");a.className=`fog-layer fog-layer-${t}`;let r=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[t]||l[2],c=n.custom_colors?.fog_color,h=n.color_palette==="default"?Ue(c)?c:"#e0e0e0":"var(--secondary-text-color)",m=3+Math.floor(Math.random()*3),p=r*d.scale;a.style.cssText=`
        position: absolute;
        top: ${20+t*15}%;
        left: -50%;
        width: ${p}px;
        height: ${d.height}px;
        opacity: ${d.opacity};
        filter: blur(${d.blur}px);
        pointer-events: none;
        z-index: ${5+t};
        overflow: visible;
    `;for(let T=0;T<m;T++){let S=document.createElement("div"),k=p/m*(2+Math.random()*1.2),C=d.height*(1.2+Math.random()*1.6),x=p/m*T-k*.3,E=(Math.random()-.5)*(d.height*.5);S.style.cssText=`
            position: absolute;
            left: ${x}px;
            top: ${E}px;
            width: ${k}px;
            height: ${C}px;
            background: radial-gradient(ellipse ${k/2}px ${C/2}px at center, 
                ${h} 0%, 
                ${h} 40%, 
                transparent 70%);
            border-radius: ${k/2}px ${C/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,a.appendChild(S)}o.appendChild(a);let g=e.windSpeed*(.5+Math.random()*.5),u=15/d.speed,f=Math.max(8,u/g),y=r*d.scale,w=-y,_=r+y;window.AnimatedWeatherCardGsap.set(a,{x:w,opacity:d.opacity});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});v.to(a,{x:_,duration:f,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(a,{x:w})}});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return b.to(a,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:v,opacity:b}}function Li(o){o.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var Tl=3,Al=2,Hr=[900,1400],Rr=[1800,2600],Oi=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=a,this.windConfig={leafCount:3,swooshEnabled:!0,...i},A(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(F(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(F(300,900)),A(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let i=X(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(Tl*i.leafCount));if(this.leaves.size<n){let a=Lr(this.layer(),i,1,this.card(),r=>this.forget(r,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(a),this.addParticle(a)}this.scheduleLeaf(F(Hr[0],Hr[1])/Math.max(.5,i.leafCount))},t)}scheduleSwoosh(t){let i=X(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<Al){let n=Or(this.layer(),i,1,this.card(),this.cardConfig,a=>this.forget(a,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(F(Rr[0],Rr[1]))}},t)}forget(t,i){i.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),A(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),Si(this.layer()),A(this.config.devMode,"Wind animation paused")}async onResume(){Ci(this.layer()),this.clearTimers(),this.scheduleLeaf(F(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(F(600,1500)),A(this.config.devMode,"Wind animation resumed")}};var Xe=[6e3,18e3],kl=[1500,6e3],Nr=.16,Di=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=a,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:Xe[0],maxInterval:Xe[1],...i},A(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[i,n]=kl;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),A(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!t||!i)return;let n=i.offsetWidth,a=i.offsetHeight,r=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(n-60),c=20*r,h=20,m=[d+",0"];for(let f=0;f<h;f++){let y=d+(Math.random()*c-c/2),w=a/h*(f+1);m.push(y+","+w)}l.setAttribute("d","M"+m.join(" L"));let p=this.element.timeOfDayManager,g=Ke("lightning",p,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*r).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let u=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=u,u.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let f=-6*r;u.to(i,{y:f,duration:.06,ease:"power2.out"},Nr).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},Nr+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(a=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(a.querySelector("path")),a.parentNode&&a.parentNode.removeChild(a)}),i.style.opacity="0"),A(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),A(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),A(this.config.devMode,"Lightning animation resumed")}};var El=["dawn","day","dusk","night"],ia=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],Ml={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},Ir=(o,e,t)=>Math.min(e,Math.max(o,t)),jt=(o,e,t)=>o+(e-o)*t;function Pl(o,e,t){let i=(e-o+540)%360-180;return(o+i*t+360)%360}function Ht(o,e,t){let i=([u,f,y])=>[u,f*Math.cos(y*Math.PI/180),f*Math.sin(y*Math.PI/180)],[n,a,r]=i(o),[s,l,d]=i(e),c=jt(n,s,t),h=jt(a,l,t),m=jt(r,d,t),p=Math.hypot(h,m),g=p<1e-6?o[2]:(Math.atan2(m,h)*180/Math.PI+360)%360;return[c,p,g]}function ta([o,e,t]){let i=t*Math.PI/180,n=e*Math.cos(i),a=e*Math.sin(i),r=(o+.3963377774*n+.2158037573*a)**3,s=(o-.1055613458*n-.0638541728*a)**3,l=(o-.0894841775*n-1.291485548*a)**3;return[4.0767416621*r-3.3077115913*s+.2309699292*l,-1.2684380046*r+2.6097574011*s-.3413193965*l,-.0041960863*r-.7034186147*s+1.707614701*l]}var Ll=o=>o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055;function xt(o){let e=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=ta(o);if(!e(t)){let i=0,n=o[1];for(let a=0;a<24;a++){let r=(i+n)/2;e(ta([o[0],r,o[2]]))?i=r:n=r}t=ta([o[0],i,o[2]])}return t.map(i=>Ll(Ir(0,1,i)))}var Gr=o=>Math.round(Ir(0,1,o)*255);function Rt(o){return"#"+o.map(e=>Gr(e).toString(16).padStart(2,"0")).join("")}function zr(o,e){return`rgba(${o.map(Gr).join(", ")}, ${Number(e.toFixed(3))})`}function ea(o,e){return[.15+(o[0]-.15)*.42,o[1]*jt(.75,.5,e),Pl(o[2],262,.45)]}function Ol(o,e){let t=Ml[o],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:jt(.46,.28,t.overcast)};if(o==="clear-night"){if(e==="dawn"||e==="dusk"){let a=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:Ht(t.bottom,a,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(e){case"night":return{top:ea(t.top,t.overcast),mid:ea(t.mid,t.overcast),bottom:ea(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:jt(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:Ht(t.top,[t.top[0]*.8,.075,292],.5*i),mid:Ht(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:Ht(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:Ht(t.glow,[.82,.13,58],i),glowAlpha:jt(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:Ht(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:Ht(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:Ht(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:Ht(t.glow,[.88,.09,40],i),glowAlpha:jt(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Dl(o){return[.16,Math.min(.04,o[1]*.6),o[2]]}function Ze(o,e){let t=Ol(o,e);return{top:Rt(xt(t.top)),mid:Rt(xt(t.mid)),bottom:Rt(xt(t.bottom)),glow:zr(xt(t.glow),t.glowAlpha),scrim:zr(xt(Dl(t.top)),t.scrimAlpha)}}var Ae=[.985,.006,250],Fi=.8,Br=.55,qr=.4,Wi={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},Vr={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},Yr={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64};function ke(o,e){let t=i=>`${Math.round(i*100)}%`;return`radial-gradient(${t(o.rx)} ${t(o.ry)} at ${t(o.cx)} ${t(o.cy)}, ${e}, transparent ${t(o.fade)})`}function Ur(){let o=[];for(let e of ia)for(let t of El){let i=Ze(e,t),n=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;o.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return o.join(`
`)}function Hi(o,e,t){return o==null||!Number.isFinite(o)?t?"day":"night":o<-6?"night":o<6?e?"dawn":"dusk":"day"}var Xt=3.2,Ee="cubic-bezier(0.37, 0, 0.63, 1)",Kr={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},jr=Object.keys(Kr),na=jr.filter(o=>o.startsWith("--awc-sky-"));function Xr(){return jr.map(o=>`${o} ${Xt}s ${Ee}`).join(`,
            `)}var $r=!1;function Ri(){if($r)return;$r=!0;let o=globalThis.CSS;if(o?.registerProperty)for(let[e,t]of Object.entries(Kr))try{o.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var Ni=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.realWindSpeed=a,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},A(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=X(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");je(t);let a=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(a=Math.max(1,Math.round(a*.6))),this.cloudTimelines=Dr(t,i,a,n,this.cardConfig),this.startWindFactor=Te(i.windSpeed),A(this.config.devMode,`Clouds animation started with ${a} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[];let t=this.element.querySelector(this.layerSelector);t&&je(t),A(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),A(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),A(this.config.devMode,"Clouds animation resumed")}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=X(this.cardConfig,this.realWindSpeed),i=Te(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:Xt,ease:"sine.inOut",overwrite:!0})})}};var zi=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=a,this.fogConfig={layerCount:3,...i},A(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let i=X(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");Li(n),this.fogTimelines=[];for(let a=0;a<this.fogConfig.layerCount;a++){let r=Wr(t,i,a,n,this.cardConfig);this.fogTimelines.push(r.movement),this.fogTimelines.push(r.opacity)}A(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),A(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),A(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),A(this.config.devMode,"Fog animation resumed")}};var Fl=1/3,Wl=.35,$i=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=a,this.starsConfig={starCount:30,showMoon:!0,...i},A(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=X(this.cardConfig,this.realWindSpeed);this.element.querySelector(".animated-weather-card")?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(s),s.remove()});let a=Math.max(15,Math.round(i.cloudCount*5)),r=document.createElement("div");r.className="stars-field";for(let s=0;s<a;s++){let l=document.createElement("div");l.className="star-gsap";let d=1+Math.random()*3,c=.3+Math.random()*.5;if(l.style.cssText=`
                width: ${d.toFixed(2)}px;
                height: ${d.toFixed(2)}px;
                left: ${(Math.random()*100).toFixed(2)}%;
                top: ${(Math.random()*70).toFixed(2)}%;
                opacity: ${c.toFixed(2)};
            `,Math.random()<Fl){let h=3+Math.random()*4;l.classList.add("twinkle"),l.style.setProperty("--star-o",c.toFixed(2)),l.style.setProperty("--star-dim",(c*(1-Math.random()*Wl)).toFixed(2)),l.style.animationDuration=`${h.toFixed(2)}s`,l.style.animationDelay=`${(-Math.random()*h).toFixed(2)}s`}r.appendChild(l)}if(t.appendChild(r),this.addParticle(r),window.AnimatedWeatherCardGsap.fromTo(r,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"}),this.starsConfig.showMoon){let s=document.createElement("div");s.className="moon-gsap",t.appendChild(s),this.addParticle(s),window.AnimatedWeatherCardGsap.fromTo(s,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"})}A(this.config.devMode,`Stars animation started with ${a} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),A(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),A(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),A(this.config.devMode,"Stars animation resumed")}};var Ii=class extends U{constructor(t,i,n,a){super(t,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";A(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){A(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",A(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),A(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),A(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),A(this.config.devMode,"Sun animation resumed")}};var Gi=class{constructor(e,t,i,n){this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let i={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(e){case"rain":n=new ki(this.element,{...i,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new Ei(this.element,{...i,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new Pi(this.element,{...i,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":n=new Oi(this.element,{...i,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new Di(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:Xe[0],maxInterval:Xe[1]},this.config,this.realWindSpeed);break;case"clouds":n=new Ni(this.element,{...i,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":n=new zi(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":n=new $i(this.element,{...i,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new Ii(this.element,i,this.config);break;default:return A(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await n.start(),this.activeAnimations.set(e,n),A(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),n}catch(i){return console.error(`Failed to start modular ${e} animation:`,i),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),A(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(i){console.error(`Error stopping modular ${e} animation:`,i)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(i){console.error(`Error pausing modular ${e} animation:`,i)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(i){console.error(`Error resuming modular ${e} animation:`,i)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,i]of this.activeAnimations)try{i.setWindSpeed(e)}catch(n){console.warn(`Failed to update wind speed for ${t}:`,n)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var Me=class{constructor(e,t,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=e,this.config=t,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new Gi(e,t,n,this.currentWindSpeed),A(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}async startAnimation(e,t){let i=this.animations[e];if(i.isActive){A(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let n=t?.intensity??i.intensity??1,a=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(e,!0);try{let r=await this.modularBridge.startModularAnimation(e,n);if(a!==this.generation){A(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!r){i.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}A(this.config.dev_mode,`Started ${e} animation with intensity ${n}`)}catch(r){console.error(`Failed to start ${e} animation:`,r),i.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),A(this.config.dev_mode,`Stopped ${e} animation`)}catch(i){console.error(`Error stopping ${e} animation:`,i)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),A(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),A(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(i=>{let n=t.overrides?.[i];return this.startAnimation(i,n)})),A(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${e}-active`;t?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var Bi=o=>{if(o==null||o==="")return null;let e=typeof o=="number"?o:Number(o);return Number.isFinite(e)?e:null},qi=o=>typeof o=="string"?o.trim():"";function Hl(o){if(!o||typeof o!="object")return null;let e=o,t=typeof e.id=="number"?String(e.id):qi(e.id);return t?{id:t,label:qi(e.flight_number)||qi(e.callsign),aircraftCode:qi(e.aircraft_code),altitudeFt:Bi(e.altitude),groundSpeedKt:Bi(e.ground_speed),heading:Bi(e.heading),verticalSpeed:Bi(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function Zr(o,e){if(!o||!e)return null;let t=o.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=t.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let a of i){let r=Hl(a);r&&n.push(r)}return n}var Vi=class{constructor(){this.known=null}update(e){if(!e)return[];let t=e.filter(r=>!r.onGround),i=new Set(t.map(r=>r.id));if(this.known===null)return this.known=i,[];let n=[],a=new Set;for(let r of t)this.known.has(r.id)||a.has(r.id)||(a.add(r.id),n.push(r));return this.known=i,n}reset(){this.known=null}};var Yi=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}setDevOverride(e){this.devTimePhaseOverride=e,this.updateState()}clearDevOverride(){this.devTimePhaseOverride=void 0,this.updateState()}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=new Date,t,i;if(!this.config.useBrowserTime&&this.config.timeZone){let s=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(s.find(l=>l.type==="hour")?.value||"0",10),i=parseInt(s.find(l=>l.type==="minute")?.value||"0",10)}else t=e.getHours(),i=e.getMinutes();let n=t+i/60,a;if(this.devTimePhaseOverride)a=this.devTimePhaseOverride;else{let s=this.config.sunriseHour,l=this.config.sunsetHour,d=(s-1+24)%24,c=(s+.5)%24,h=(l-.5+24)%24,m=(l+1)%24,p=(g,u,f)=>u<=f?g>=u&&g<f:g>=u||g<f;p(n,d,c)?a="dawn":p(n,c,h)?a="day":p(n,h,m)?a="dusk":a="night"}let r={isDaytime:a==="day"||a==="dawn",isNighttime:a==="night"||a==="dusk",isDawn:a==="dawn",isDusk:a==="dusk",currentHour:t,timePhase:a};!this.currentState||this.currentState.timePhase!==r.timePhase?(this.currentState=r,this.notifyListeners(r)):this.currentState=r}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},xr.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(e,t,i){let n=e.replace("#",""),a=t.replace("#",""),r=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),d=parseInt(a.substring(0,2),16),c=parseInt(a.substring(2,4),16),h=parseInt(a.substring(4,6),16),m=Math.round(r*(1-i)+d*i),p=Math.round(s*(1-i)+c*i),g=Math.round(l*(1-i)+h*i),u=m.toString(16).padStart(2,"0"),f=p.toString(16).padStart(2,"0"),y=g.toString(16).padStart(2,"0");return`#${u}${f}${y}`}};var Qe=o=>`
        ${o} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Rl=Ur(),Nl=Rt(xt(Ae)),Qr=o=>`${Math.round(o*100)}%`,zl=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,$l=48,aa=()=>`
${Qe("animated-weather-card")}
        /* \u2500\u2500 Reduced motion (WCAG 2.3.3): static sky, no weather motion \u2500\u2500\u2500\u2500\u2500 */
        @media (prefers-reduced-motion: reduce) {
          .animated-weather-card *,
          .animated-weather-card *::before,
          .animated-weather-card *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
          /* Weather motion goes; the sun stays, still */
          .animated-weather-card .animation-container {
            display: none !important;
          }
        }

        /* \u2500\u2500 Frame \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* The sky is the card: in the colorized palette ha-card's own fill and
           border step aside so the sky reaches the rounded edge. Theme mode
           keeps ha-card's frame and blends with the dashboard. */
        ha-card:has(> .animated-weather-card) {
          height: 100%;
          overflow: hidden;
          isolation: isolate;
        }
        /* spill_particles (default on): rain, snow, sleet and leaves fall out
           of the card onto the dashboard, and clouds can rise a little above
           its top edge. The sky, sun, planes and text stay inside the rounded
           frame either way. */
        ha-card:has(> .animated-weather-card[data-spill]) { overflow: visible; }
        ha-card:has(> .animated-weather-card:not(.theme-colors)) {
          background: none;
          border-color: transparent;
        }

        .animated-weather-card {
          --awc-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
          --awc-font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
          --awc-ease: cubic-bezier(0.25, 1, 0.5, 1);
          --awc-pad: 20px;
          --awc-secondary: ${Fi};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${Nl};
          --weather-text-shadow: var(--weather-text-shadow-color, rgba(6, 12, 28, 0.22));
          --weather-sun-primary: var(--weather-sun-color-primary, #ffd67a);
          --weather-sun-secondary: var(--weather-sun-color-secondary, #ffb547);
          --weather-sun-glow: var(--weather-sun-glow-color, rgba(255, 214, 140, 0.55));
          --weather-sun-halo: var(--weather-sun-halo-color, rgba(255, 214, 140, 0.24));
          --weather-rain-color: var(--weather-rain-particle-color, rgba(222, 234, 255, 0.62));
          --weather-storm-rain-color: var(--weather-storm-rain-particle-color, rgba(206, 214, 236, 0.5));
          --weather-snow-color: var(--weather-snow-particle-color, #f7fbff);
          --weather-wind-color: var(--weather-wind-particle-color, rgba(255, 255, 255, 0.4));
          --awc-cloud-far: rgba(214, 226, 242, 0.85);
          --awc-cloud-mid: rgba(232, 239, 248, 0.92);
          --awc-cloud-near: rgba(248, 250, 253, 0.96);

          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          min-height: 168px;
          border-radius: var(--ha-card-border-radius, 12px);
          overflow: hidden;
          isolation: isolate;
          container: awc / inline-size;
          color: var(--weather-text-color);
          font-family: var(--awc-font);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          /* Day \u2192 dusk \u2192 night and condition changes cross-fade through the
             registered sky, sun and cloud colors, all on one curve */
          transition:
            ${Xr()};
        }

        /* clip-path only hides what lies past the card: a fog bank or a cloud
           track still widens the page and brings up its scrollbars. Layout
           containment leaves spilled weather painted but never scrolled to. */
        .animated-weather-card[data-spill] { overflow: visible; contain: layout; }

        .animated-weather-card.no-transitions,
        .animated-weather-card.no-transitions * {
          transition: none !important;
        }

        /* \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        ${Rl}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${ke(Wi,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${Qr(qr)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${Qr(Br)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${ke(Vr,"var(--awc-sky-glow)")}; }
        }

        /* Edge falloff: the frame darkens slightly, like a lens */
        .sky::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(150% 120% at 40% 30%, transparent 58%, rgba(4, 8, 20, 0.2) 100%);
        }

        .sky::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: ${zl};
          background-size: 160px 160px;
          opacity: 0.07;
          mix-blend-mode: overlay;
        }

        /* Theme overrides: --weather-<condition>-background replaces the whole sky */
        .animated-weather-card.sunny { --awc-sky-override: var(--weather-sunny-background); }
        .animated-weather-card.partly-cloudy { --awc-sky-override: var(--weather-partly-cloudy-background); }
        .animated-weather-card.windy { --awc-sky-override: var(--weather-windy-background); }
        .animated-weather-card.cloudy { --awc-sky-override: var(--weather-cloudy-background); }
        .animated-weather-card.foggy { --awc-sky-override: var(--weather-foggy-background); }
        .animated-weather-card.light-rain { --awc-sky-override: var(--weather-light-rain-background); }
        .animated-weather-card.rainy { --awc-sky-override: var(--weather-rainy-background); }
        .animated-weather-card.pouring { --awc-sky-override: var(--weather-pouring-background); }
        .animated-weather-card.stormy { --awc-sky-override: var(--weather-stormy-background); }
        .animated-weather-card.snowy { --awc-sky-override: var(--weather-snowy-background); }
        .animated-weather-card.snowy-rainy { --awc-sky-override: var(--weather-snowy-rainy-background); }
        .animated-weather-card.sleety { --awc-sky-override: var(--weather-sleety-background); }
        .animated-weather-card.snowy-stormy { --awc-sky-override: var(--weather-snowy-stormy-background); }
        .animated-weather-card.sleety-stormy { --awc-sky-override: var(--weather-sleety-stormy-background); }
        .animated-weather-card.clear-night { --awc-sky-override: var(--weather-clear-night-background); }

        /* Overcast and night skies get greyer, dimmer clouds */
        .animated-weather-card.cloudy,
        .animated-weather-card.foggy {
          --awc-cloud-far: rgba(170, 182, 198, 0.8);
          --awc-cloud-mid: rgba(196, 206, 220, 0.88);
          --awc-cloud-near: rgba(222, 229, 238, 0.94);
        }
        .animated-weather-card[data-phase="night"] {
          --awc-cloud-far: rgba(96, 108, 132, 0.7);
          --awc-cloud-mid: rgba(122, 134, 158, 0.78);
          --awc-cloud-near: rgba(150, 162, 186, 0.85);
          --weather-rain-color: var(--weather-rain-particle-color, rgba(180, 198, 230, 0.48));
        }
        .animated-weather-card[data-phase="dusk"] {
          --awc-cloud-near: rgba(255, 226, 214, 0.94);
          --awc-cloud-mid: rgba(236, 210, 214, 0.9);
          --weather-sun-primary: var(--weather-sun-color-primary, #ffc58a);
          --weather-sun-secondary: var(--weather-sun-color-secondary, #ff9a5c);
          --weather-sun-glow: var(--weather-sun-glow-color, rgba(255, 170, 110, 0.55));
          --weather-sun-halo: var(--weather-sun-halo-color, rgba(255, 170, 110, 0.24));
        }
        .animated-weather-card[data-phase="dawn"] {
          --awc-cloud-near: rgba(255, 234, 228, 0.94);
          --weather-sun-primary: var(--weather-sun-color-primary, #ffe0b0);
          --weather-sun-secondary: var(--weather-sun-color-secondary, #ffb98a);
        }

        /* \u2500\u2500 Theme palette: blend with the dashboard \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .animated-weather-card.theme-colors {
          --weather-text-color: var(--primary-text-color);
          --weather-text-shadow: transparent;
          --awc-secondary: 1;
          --weather-rain-color: var(--weather-rain-particle-color, var(--primary-color, #03a9f4));
          --weather-storm-rain-color: var(--weather-storm-rain-particle-color, var(--secondary-text-color, #8a8a8a));
          --weather-snow-color: var(--weather-snow-particle-color, var(--secondary-text-color, #9a9a9a));
          --weather-wind-color: var(--secondary-text-color, rgba(0, 0, 0, 0.3));
          --weather-sun-primary: var(--weather-sun-color-primary, var(--state-sun-above_horizon-color, #ffc107));
          --weather-sun-secondary: var(--weather-sun-color-secondary, var(--state-sun-above_horizon-color, #ff9800));
          --weather-sun-glow: transparent;
          --awc-cloud-far: var(--secondary-text-color, #888);
          --awc-cloud-mid: var(--secondary-text-color, #888);
          --awc-cloud-near: var(--secondary-text-color, #888);
          /* Icons take the theme's icon colour, as Home Assistant's own
             cards do for sensors (the tile card's default) */
          --awc-icon-color: var(--state-icon-color, var(--primary-color));
          /* The hero temperature carries the theme's primary colour */
          --awc-hero-color: var(--primary-color, var(--primary-text-color));
          border-radius: 0;
        }
        .animated-weather-card.theme-colors .sky { display: none; }
        /* Without a sky behind them, blurred translucent clouds read as
           smudges; draw them as faint, crisp shapes instead */
        .animated-weather-card.theme-colors .cloud-gsap {
          opacity: 0.16 !important;
          filter: none !important;
        }
        .animated-weather-card.theme-colors .secondary,
        .animated-weather-card.theme-colors .attribute-label,
        .animated-weather-card.theme-colors .hero-meta {
          color: var(--secondary-text-color);
        }
        .animated-weather-card.theme-colors .weather-info { text-shadow: none; }
        .animated-weather-card.theme-colors .attribute-icon,
        .animated-weather-card.theme-colors .indoor-icon {
          color: var(--awc-icon-color);
        }
        .animated-weather-card.theme-colors .temperature {
          color: var(--awc-hero-color);
        }

        /* \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .weather-skeleton {
          position: absolute;
          inset: 0;
          z-index: 30;
          display: none;
          flex-direction: column;
          padding: var(--awc-pad);
          gap: 10px;
        }
        .animated-weather-card.loading .weather-skeleton { display: flex; }
        .animated-weather-card.loading .weather-content { opacity: 0; }
        .animated-weather-card.loading .animation-layer,
        .animated-weather-card.loading .animation-container { display: none !important; }

        .skeleton-line {
          height: 12px;
          width: 34%;
          border-radius: 6px;
          background: currentColor;
          opacity: 0.12;
          animation: awcSkeleton 1.6s ease-in-out infinite;
        }
        .skeleton-line.large { height: 56px; width: 38%; border-radius: 12px; }
        .skeleton-line.medium { width: 26%; }
        .skeleton-line.small { width: 100%; height: 30px; margin-top: auto; border-radius: 8px; }
        @keyframes awcSkeleton {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.16; }
        }

        /* \u2500\u2500 Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* Clips the sky-borne layer (sun, moon, clouds, planes, lightning) to
           the frame even when precipitation is allowed to spill. */
        .weather-content {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          border-radius: inherit;
          overflow: hidden;
          transition: opacity 0.5s var(--awc-ease);
        }

        .weather-info {
          position: relative;
          z-index: 30;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: var(--awc-pad);
          min-height: 0;
          text-shadow: 0 1px 12px var(--weather-text-shadow);
        }

        .main-weather-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          /* Safety net for frames shorter than the content: the hero gives
             way at its bottom edge and the metric row is never cut. The
             card normally steps down first (see applySizeState). */
          flex: 0 1 auto;
          min-height: 0;
          clip-path: inset(-60px -60px 0 -60px);
        }
        /* Never squash a line to fit: let it overflow so the card can
           measure it and step down to a compact layout instead. */
        .main-weather-info > *,
        .weather-attributes { flex-shrink: 0; }

        .location {
          font-size: 15px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: -0.01em;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          opacity: 0.94;
        }

        .temperature {
          font-family: var(--awc-font-display);
          font-size: 80px;
          font-weight: 200;
          line-height: 0.9;
          letter-spacing: -0.045em;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
          /* Optical alignment: big numerals carry extra left side-bearing */
          margin: 4px 0 0 -0.055em;
          white-space: nowrap;
        }
        /* inline-block so a new value can rise into place (fadeThrough) */
        .temperature-value { display: inline-block; }
        .temperature .degree {
          font-weight: 200;
          letter-spacing: 0;
          margin-left: 0.02em;
        }

        .weather-desc {
          margin-top: 8px;
          font-size: 17px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.012em;
        }
        /* Conditions come in the user's language and casing ("Partly cloudy",
           "Teilweise bew\xF6lkt"); only make sure they start with a capital */
        .weather-desc::first-letter { text-transform: uppercase; }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 2px 14px;
          margin-top: 2px;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: -0.006em;
          font-variant-numeric: tabular-nums;
          opacity: var(--awc-secondary);
        }
        .hero-meta:empty { display: none; }
        .indoor-climate-inline { white-space: nowrap; }
        .indoor-label { font-weight: 400; margin-right: 4px; }
        .indoor-icon {
          --mdc-icon-size: 14px;
          margin-right: 4px;
          /* Sits on the line like a letter: centred on the digits beside it */
          vertical-align: -1.5px;
        }
        .awc-visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }
        /* "6:32" + a smaller "PM", matching the sun tracker */
        .awc-ampm {
          font-size: 0.7em;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-left: 0.24em;
        }
        .indoor-sep { margin: 0 4px; opacity: 0.6; }

        /* \u2500\u2500 Note \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* A sentence about the weather, last under the hero. It comes in two
           lengths, both in the markup: the height step shows the one that
           fits (see the adaptive height rules below). Full-strength text at
           the quiet tier's size, not its tint: on a narrow card the second
           half of a line runs into the sun's glow, where the tint falls
           below 4.5:1 (sky.test.ts samples it). A sentence is read, not
           glanced at. */
        .weather-note {
          margin: 10px 0 0;
          max-width: 46ch;
          font-size: 15px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.006em;
          text-wrap: pretty;
          /* Whole or not at all: the fit shows a length only if all of it
             fits, and treats a clamped one as not fitting (applySizeState).
             The clamp only stops runaway text from growing the card. */
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          overflow: hidden;
        }
        .weather-note[hidden],
        .weather-note .note-short { display: none; }
        /* Which length, or none: the fit decides (NOTE_FIT_STEPS) */
        .animated-weather-card[data-note="line"] .weather-note { -webkit-line-clamp: 2; line-clamp: 2; }
        .animated-weather-card[data-note="line"] .note-long { display: none; }
        .animated-weather-card[data-note="line"] .note-short { display: inline; }
        .animated-weather-card[data-note="none"] .weather-note { display: none; }
        /* While a new note is written: a status in its place, typing dots
           and what's happening, the size of the note it stands for (two
           lines, or one), so nothing moves when the note arrives. A plain
           block, unclamped: a clamp would read the status as text cut
           short, and the fit would turn it away. */
        .note-status { display: none; }
        .weather-note[data-writing] {
          display: block;
          box-sizing: border-box;
          /* The hero column sizes its lines to their text: take the note's
             full measure (max-width: 46ch) instead */
          width: 100%;
          height: 40px;
        }
        .animated-weather-card .weather-note[data-writing] { -webkit-line-clamp: none; line-clamp: none; }
        /* Outranks the length rules above, which show one span or the other */
        .animated-weather-card .weather-note[data-writing] > .note-long,
        .animated-weather-card .weather-note[data-writing] > .note-short { display: none; }
        /* The secondary tint, short and at the left: well inside the part
           of the card the glow leaves at AA (x up to 0.55 on narrow cards,
           see sky.test.ts). A much longer status would need checking. */
        .weather-note[data-writing] > .note-status {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 20px;
          opacity: var(--awc-secondary);
          white-space: nowrap;
          overflow: hidden;
        }
        .note-dots { display: inline-flex; gap: 3px; flex: none; }
        .note-dots i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
          animation: awcNoteDot 1.2s ease-in-out infinite;
        }
        .note-dots i:nth-child(2) { animation-delay: 0.15s; }
        .note-dots i:nth-child(3) { animation-delay: 0.3s; }
        @keyframes awcNoteDot {
          0%, 70%, 100% { opacity: 0.3; transform: none; }
          35% { opacity: 1; transform: translateY(-2px); }
        }
        .note-phrase { overflow: hidden; text-overflow: ellipsis; }
        .animated-weather-card[data-note="line"] .weather-note[data-writing] { height: 20px; }
        /* Typing in: the rest of the note is laid out but not yet shown, so
           its lines already break where they'll end up. No caret: even one
           with no width can change where a line breaks. */
        .note-untyped { color: transparent; text-shadow: none; }

        /* \u2500\u2500 Metrics \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .weather-attributes {
          position: relative;
          display: grid;
          grid-auto-flow: column;
          /* Columns hug their content and share the leftover space, so the
             longest label (PRESSURE) never truncates */
          grid-auto-columns: max-content;
          justify-content: space-between;
          column-gap: 24px;
          row-gap: 14px;
          margin-top: auto;
          padding-top: 14px;
        }
        .weather-attributes::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: currentColor;
          opacity: 0.2;
        }
        .animated-weather-card.theme-colors .weather-attributes::before {
          background: var(--divider-color, rgba(0, 0, 0, 0.12));
          opacity: 1;
        }

        .attribute {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .attribute-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          line-height: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          opacity: var(--awc-secondary);
        }
        .attribute-label > span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .attribute-icon {
          --mdc-icon-size: 13px;
          flex-shrink: 0;
          /* Optical: centred on the capitals of the uppercase label */
          margin-top: -0.5px;
        }

        .attribute-value {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 16px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: -0.012em;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
          min-width: 0;
        }
        .attribute-text {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .wind-bearing-arrow,
        .pressure-trend {
          --mdc-icon-size: 14px;
          flex-shrink: 0;
          opacity: var(--awc-secondary);
        }

        /* One row when the (localized) labels fit, else a 2\xD72 grid. Measured
           in applySizeState, since label length depends on the language. */
        .animated-weather-card[data-metrics="grid"] .weather-attributes {
          grid-auto-flow: row;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          justify-content: stretch;
        }

        /* Values only (labels hidden): give the numbers a touch more presence */
        .weather-attributes.values-only .attribute-value { font-size: 18px; }
        .weather-attributes.values-only .attribute { flex-direction: row; align-items: center; gap: 6px; }
        .weather-attributes.values-only .attribute-icon { --mdc-icon-size: 16px; opacity: var(--awc-secondary); }

        /* \u2500\u2500 Adaptive layout: width \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        @container awc (max-width: 319px) {
          .weather-info, .weather-skeleton { --awc-pad: 16px; }
          .temperature { font-size: 64px; font-weight: 250; }
          .weather-desc { font-size: 16px; line-height: 21px; margin-top: 6px; }
          .hero-meta, .weather-note { font-size: 14px; }
          .attribute-value { font-size: 16px; }
        }
        @container awc (max-width: 259px) {
          .temperature { font-size: 56px; font-weight: 300; }
          .location { font-size: 14px; }
          .hero-meta, .weather-note { display: none; }
        }
        @container awc (min-width: 460px) {
          .weather-info, .weather-skeleton { --awc-pad: 24px; }
          .location { font-size: 16px; }
          .temperature { font-size: 96px; letter-spacing: -0.05em; }
          .weather-desc { font-size: 18px; line-height: 24px; }
          .attribute-value { font-size: 18px; line-height: 24px; }
        }
        /* Wide frames (wall tablets, full-width rows): hero left, metrics right */
        @container awc (min-width: 640px) {
          .weather-info, .weather-skeleton { --awc-pad: 28px; }
          .weather-info {
            flex-direction: row;
            align-items: flex-end;
            gap: 40px;
          }
          .main-weather-info { flex: 1; align-self: stretch; justify-content: flex-end; }
          .temperature { font-size: 120px; }
          /* [data-metrics] beats the measured row/grid rules: wide cards
             always use this two-column block */
          .weather-attributes,
          .animated-weather-card[data-metrics] .weather-attributes {
            flex: 0 0 auto;
            width: auto;
            margin-top: 0;
            padding: 0 0 4px 24px;
            grid-auto-flow: row;
            grid-template-columns: repeat(2, max-content);
            column-gap: 56px;
            justify-content: end;
            row-gap: 18px;
          }
          .weather-attributes::before {
            top: 0;
            bottom: 4px;
            left: 0;
            right: auto;
            width: 1px;
            height: auto;
          }
        }

        /* \u2500\u2500 Adaptive layout: height (stepped down until nothing overflows) \u2500
           Each step keeps the one before it and gives up a little more:
           compact drops the line under the condition, short shrinks the
           temperature, tight drops the location, minimal drops the metric
           labels and shrinks the temperature again. A phone's sections row
           (353 \xD7 248) lands on tight, with the labels. */
        .animated-weather-card[data-height="compact"] .hero-meta,
        .animated-weather-card[data-height="short"] .hero-meta,
        .animated-weather-card[data-height="tight"] .hero-meta,
        .animated-weather-card[data-height="minimal"] .hero-meta { display: none; }
        .animated-weather-card[data-height="short"] .weather-info,
        .animated-weather-card[data-height="tight"] .weather-info,
        .animated-weather-card[data-height="minimal"] .weather-info { gap: 12px; }
        .animated-weather-card[data-height="short"] .temperature,
        .animated-weather-card[data-height="tight"] .temperature { font-size: 60px; font-weight: 250; }
        .animated-weather-card[data-height="short"] .weather-desc,
        .animated-weather-card[data-height="tight"] .weather-desc { margin-top: 4px; }
        .animated-weather-card[data-height="short"] .weather-attributes,
        .animated-weather-card[data-height="tight"] .weather-attributes { padding-top: 10px; }
        .animated-weather-card[data-height="tight"] .location,
        .animated-weather-card[data-height="minimal"] .location,
        .animated-weather-card[data-height="minimal"] .attribute-label > span { display: none; }
        /* Minimal: icon beside value, so the numbers keep their meaning */
        .animated-weather-card[data-height="minimal"] .attribute { flex-direction: row; align-items: center; gap: 6px; }
        .animated-weather-card[data-height="minimal"] .attribute-icon { --mdc-icon-size: 15px; }
        .animated-weather-card[data-height="minimal"] .temperature { font-size: 52px; font-weight: 300; }
        .animated-weather-card[data-height="minimal"] .weather-desc { margin-top: 2px; }
        .animated-weather-card[data-height="minimal"] .weather-attributes { padding-top: 8px; }

        /* Close, with a note only: everything at its regular size, with
           short's gaps, so a longer note's third line fits where there's
           a line's room less one gap: 12 px back before the note shortens */
        .animated-weather-card[data-height="close"] .weather-info { gap: 12px; }
        .animated-weather-card[data-height="close"] .weather-desc { margin-top: 4px; }
        .animated-weather-card[data-height="close"] .weather-attributes { padding-top: 10px; }
        .animated-weather-card[data-height="close"] .weather-note { margin-top: 6px; }

        /* Snug, with a note only: short's sizes, keeping the location and
           the line under the condition, so the note's one-line version fits
           without either giving way. A phone's five-row section (353 \xD7 312,
           metrics in a labelled grid) has 155 px for the hero; snug needs
           152 with the note 6 px below the line above it. At 10 px it no
           longer fits. */
        .animated-weather-card[data-height="snug"] .weather-info { gap: 12px; }
        .animated-weather-card[data-height="snug"] .temperature { font-size: 60px; font-weight: 250; }
        .animated-weather-card[data-height="snug"] .weather-desc { margin-top: 4px; }
        .animated-weather-card[data-height="snug"] .weather-attributes { padding-top: 10px; }
        .animated-weather-card[data-height="snug"] .weather-note { margin-top: 6px; }

        /* \u2500\u2500 Compact: the hero on one line, the sky still moving behind \u2500\u2500 */
        /* The temperature leads on the left; the condition, then where and
           what it feels like, sit beside it; the sun keeps its corner of the
           sky on the right, at mid-height. Built to share a column with the
           compact sun tracker. */
        .animated-weather-card[data-variant="compact"] { min-height: 0; }
        .animated-weather-card[data-variant="compact"] .weather-info {
          flex-direction: row;
          align-items: center;
          gap: 0;
          padding-block: 16px;
        }
        .animated-weather-card[data-variant="compact"] .main-weather-info {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          grid-template-areas: "temp desc" "temp meta";
          column-gap: 14px;
          align-items: center;
          align-content: center;
          justify-content: start;
          flex: 1 1 auto;
          align-self: center;
          /* Text stops short of the sun */
          margin-right: calc(14% + 22px);
          clip-path: none;
        }
        .animated-weather-card[data-variant="compact"] .temperature {
          grid-area: temp;
          font-size: 56px;
          /* 1, not the hero's 0.9: the numerals must fit their box here, or
             the fit check reads them as overflowing the strip */
          line-height: 1;
          font-weight: 200;
          letter-spacing: -0.045em;
          margin: 0 0 0 -0.055em;
        }
        .animated-weather-card[data-variant="compact"] .weather-desc,
        .animated-weather-card[data-variant="compact"] .compact-meta {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .animated-weather-card[data-variant="compact"] .weather-desc {
          grid-area: desc;
          align-self: end;
          margin: 0;
          font-size: 16px;
          line-height: 21px;
        }
        .compact-meta {
          grid-area: meta;
          align-self: start;
          margin-top: 2px;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: -0.004em;
          font-variant-numeric: tabular-nums;
          opacity: var(--awc-secondary);
        }
        .compact-meta:empty { display: none; }
        .animated-weather-card[data-variant="compact"] .sun {
          top: 50%;
          left: 86%;
          width: 30px;
          height: 30px;
        }
        .animated-weather-card[data-variant="compact"].theme-colors .sun { width: 26px; height: 26px; }
        .animated-weather-card[data-variant="compact"] .moon-gsap {
          top: 50%;
          left: 86%;
          width: 26px;
          height: 26px;
        }
        /* The light sits around the sun at mid-height */
        .animated-weather-card[data-variant="compact"] .sky {
          --awc-sky-glow-layer: ${ke(Yr,"var(--awc-sky-glow)")};
        }
        /* Loading: the temperature and condition placeholders, side by side */
        .animated-weather-card[data-variant="compact"] .weather-skeleton {
          flex-direction: row;
          align-items: center;
          gap: 14px;
        }
        .animated-weather-card[data-variant="compact"] .skeleton-line:not(.large):not(.medium) { display: none; }
        .animated-weather-card[data-variant="compact"] .skeleton-line.large { width: 72px; height: 44px; }
        .animated-weather-card[data-variant="compact"] .skeleton-line.medium { width: 30%; }
        /* Short frames (a one-row section): smaller numerals, then one line.
           The strip has no step past tight: minimal looks the same. */
        .animated-weather-card[data-variant="compact"][data-height="short"] .temperature { font-size: 44px; font-weight: 250; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .weather-info,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .weather-info { padding-block: 8px; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .temperature,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .temperature { font-size: 36px; font-weight: 300; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .main-weather-info,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .main-weather-info { grid-template-areas: "temp desc"; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .weather-desc,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .weather-desc { align-self: center; font-size: 15px; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .compact-meta,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .compact-meta { display: none; }

        /* \u2500\u2500 Animation layers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .animation-layer {
          position: absolute;
          inset: 0;
          z-index: 20;
          pointer-events: none;
          contain: style;
        }

        .animation-container {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          transition: opacity 0.6s var(--awc-ease);
        }

        /* Condition change: the old weather fades out (0.4s, see
           CONDITION_FADE_OUT_MS) before the new one starts, while the sky
           cross-fades through its registered colors. !important beats the
           inline opacity GSAP keeps writing to clouds and stars. */
        .animated-weather-card.condition-out .animation-container,
        .animated-weather-card.condition-out .cloud-gsap,
        .animated-weather-card.condition-out .star-gsap,
        .animated-weather-card.condition-out .moon-gsap,
        .animated-weather-card.condition-out .snow-accumulation,
        .animated-weather-card.condition-out .sleet-accumulation {
          opacity: 0 !important;
          transition: opacity 0.4s cubic-bezier(0.5, 0, 0.75, 0) !important;
        }
        /* Fog always stays in the frame, corners included */
        .animation-container.fog-container {
          clip-path: inset(0 round var(--ha-card-border-radius, 12px));
        }
        /* Spill: precipitation escapes the sides and bottom, never the top;
           wind carries leaves out to the right */
        .animated-weather-card[data-spill] .rain-container,
        .animated-weather-card[data-spill] .snow-container,
        .animated-weather-card[data-spill] .sleet-container,
        .animated-weather-card[data-spill] .lightning-container {
          clip-path: inset(0 -200px -200px -200px);
        }
        .animated-weather-card[data-spill] .wind-container {
          clip-path: inset(0 -500px -200px 0);
        }

        /* Clouds drift in front of the sun, stars and planes, in their own
           layer. In the frame by default; with spill they can rise past the
           top edge, fading out over the top half of CLOUD_OVERHANG_PX. The sides and
           bottom stay closed: clouds cross the card, not the dashboard. */
        .clouds-container {
          --awc-cloud-overhang: 0px;
          z-index: 25;
          clip-path: inset(0 round var(--ha-card-border-radius, 12px));
        }
        .clouds-layer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: var(--awc-cloud-overhang);
        }
        .animated-weather-card[data-spill] .clouds-container {
          --awc-cloud-overhang: ${$l}px;
          top: calc(-1 * var(--awc-cloud-overhang));
          clip-path: inset(0 round 0 0 var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px));
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 calc(var(--awc-cloud-overhang) / 2));
          mask-image: linear-gradient(to bottom, transparent 0, #000 calc(var(--awc-cloud-overhang) / 2));
        }

        .rain-layer, .snow-layer, .sleet-layer, .wind-layer {
          position: absolute;
          inset: 0;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s var(--awc-ease);
        }

        .animated-weather-card.rainy .rain-layer,
        .animated-weather-card.stormy .rain-layer,
        .animated-weather-card.pouring .rain-layer,
        .animated-weather-card.snowy-rainy .rain-layer,
        .animated-weather-card.light-rain .rain-layer { opacity: 1; }
        .animated-weather-card.snowy .snow-layer,
        .animated-weather-card.snowy-rainy .snow-layer,
        .animated-weather-card.snowy-stormy .snow-layer { opacity: 1; }
        .animated-weather-card.sleety .sleet-layer,
        .animated-weather-card.sleety-stormy .sleet-layer { opacity: 1; }
        .animated-weather-card.windy .wind-layer { opacity: 1; }

        .animated-weather-card.individual-rain-active .rain-layer { opacity: 1; }
        .animated-weather-card.individual-snow-active .snow-layer { opacity: 1; }
        .animated-weather-card.individual-sleet-active .sleet-layer { opacity: 1; }
        .animated-weather-card.individual-wind-active .wind-layer { opacity: 1; }
        .animated-weather-card.individual-clouds-active .cloud-gsap { opacity: 1; }
        .animated-weather-card.individual-fog-active .fog-layer { opacity: 1; }
        .animated-weather-card.individual-stars-active .star-gsap,
        .animated-weather-card.individual-stars-active .moon-gsap { opacity: 1; }
        .animated-weather-card.individual-sun-active .sun { opacity: 1; }

        /* \u2500\u2500 Sun: a light source, not a disc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .sun {
          position: absolute;
          top: 20%;
          left: 84%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at 50% 50%, #fffaf0 0%, #fff3d6 34%, var(--weather-sun-primary) 70%, var(--weather-sun-secondary) 100%);
          box-shadow:
            0 0 18px 4px var(--weather-sun-glow),
            0 0 64px 18px var(--weather-sun-halo);
          opacity: 0;
          transition: opacity ${Xt/2}s ${Ee};
          animation: awcSunBreathe 9s ease-in-out infinite;
        }
        .sun::before {
          content: '';
          position: absolute;
          inset: -90%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--weather-sun-glow) 0%, transparent 62%);
          opacity: 0.55;
          animation: awcSunCorona 7s ease-in-out infinite alternate;
        }
        /* The sun's height follows the time of day on a full-card track (a
           transform, so .sun keeps its breathing): low at dawn and dusk and
           below the horizon at night, so it sets downward and rises upward. */
        .sun-track {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: transform ${Xt}s ${Ee};
        }
        .animated-weather-card[data-phase="dusk"] .sun-track,
        .animated-weather-card[data-phase="dawn"] .sun-track { transform: translateY(14%); }
        .animated-weather-card[data-phase="night"] .sun-track { transform: translateY(26%); }

        .animated-weather-card.sunny .sun { opacity: 1; }
        .animated-weather-card.partly-cloudy .sun { opacity: 0.85; }
        .animated-weather-card.rainy .sun,
        .animated-weather-card.snowy .sun,
        .animated-weather-card.stormy .sun,
        .animated-weather-card.windy .sun,
        .animated-weather-card.cloudy .sun,
        .animated-weather-card.foggy .sun,
        .animated-weather-card.snowy-rainy .sun,
        .animated-weather-card.clear-night .sun,
        .animated-weather-card[data-phase="night"] .sun {
          opacity: 0 !important;
        }
        /* animate: false is fully still: the light stays, the breathing stops */
        .animated-weather-card.static .sun,
        .animated-weather-card.static .sun::before { animation: none; }
        .animated-weather-card.theme-colors .sun { box-shadow: none !important; }
        .animated-weather-card.theme-colors .moon-gsap::before { display: none; }
        .animated-weather-card.theme-colors .sun {
          width: 32px;
          height: 32px;
          background: radial-gradient(circle, var(--weather-sun-primary) 0 62%, var(--weather-sun-secondary) 100%);
        }
        .animated-weather-card.theme-colors .sun::before { display: none; }

        @keyframes awcSunBreathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.04); }
        }
        @keyframes awcSunCorona {
          0% { transform: scale(0.96); opacity: 0.45; }
          100% { transform: scale(1.08); opacity: 0.65; }
        }

        /* \u2500\u2500 Lightning: the sky lights up from inside the cloud deck \u2500\u2500\u2500\u2500\u2500\u2500 */
        .lightning {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          background:
            radial-gradient(110% 80% at 50% 0%, rgba(232, 238, 255, 0.62) 0%, rgba(214, 224, 255, 0.16) 55%, transparent 85%);
        }
        .lightning svg path {
          filter: drop-shadow(0 0 4px rgba(214, 228, 255, 0.95)) drop-shadow(0 0 14px rgba(170, 196, 255, 0.6));
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .animated-weather-card.theme-colors .lightning {
          background: radial-gradient(110% 80% at 50% 0%, rgba(128, 128, 140, 0.2), transparent 80%);
        }

        /* \u2500\u2500 Stars and moon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .stars-field { position: absolute; inset: 0; pointer-events: none; }
        .star-gsap {
          position: absolute;
          border-radius: 50%;
          background: white;
          pointer-events: none;
        }
        .star-gsap.twinkle { animation: awcTwinkle 5s ease-in-out infinite alternate; }
        @keyframes awcTwinkle {
          from { opacity: var(--star-o); }
          to { opacity: var(--star-dim); }
        }
        /* The moon takes the sun's place in the top-right, clear of the
           temperature: soft maria, a steady disc and a slowly breathing halo. */
        .moon-gsap {
          position: absolute;
          left: 84%;
          top: 20%;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background:
            radial-gradient(circle at 38% 40%, rgba(160, 166, 180, 0.28) 0 12%, transparent 13%),
            radial-gradient(circle at 62% 62%, rgba(160, 166, 180, 0.22) 0 9%, transparent 10%),
            radial-gradient(circle at 58% 32%, rgba(160, 166, 180, 0.16) 0 6%, transparent 7%),
            radial-gradient(circle at 34% 30%, #fbfaf4 0%, #ece8dc 55%, #cfcabc 100%);
          opacity: 0;
          pointer-events: none;
        }
        .moon-gsap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: 0 0 16px 2px rgba(226, 232, 255, 0.28), 0 0 56px 12px rgba(190, 206, 255, 0.12);
          animation: awcMoonHalo 6s ease-in-out infinite alternate;
        }
        @keyframes awcMoonHalo {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
        .stars-field.paused .star-gsap,
        .moon-gsap.paused::before { animation-play-state: paused; }
        /* While the card is paused (hidden or off-screen) its CSS loops rest too */
        animated-weather-card[data-paused] .animated-weather-card *,
        animated-weather-card[data-paused] .animated-weather-card *::before {
          animation-play-state: paused !important;
        }

        /* \u2500\u2500 Particles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .wind-swoosh-gsap { position: absolute; transform-origin: left center; }
        .leaf-gsap { position: absolute; border-radius: 0 100% 0 100%; transform-origin: center; }
        /* A full-width track carries each cloud; the track is what moves */
        .cloud-track { position: absolute; top: 0; left: 0; width: 100%; height: 0; will-change: transform; }
        .raindrop { position: absolute; pointer-events: none; }
        .rain-rebound {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
          overflow: visible;
          opacity: 0;
          pointer-events: none;
        }
        .rain-rebound path { stroke-linecap: round; }
        .rain-splash {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        .snowflake { position: absolute; border-radius: 50%; pointer-events: none; }

        /* \u2500\u2500 Planes (Flightradar24) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* Inside .animation-layer at z-index 5: in front of the sun, stars and
           moon, behind the clouds (their own layer above) and the text. */
        .planes-layer {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          transition: opacity 0.3s var(--awc-ease);
        }
        .plane-gsap {
          position: absolute;
          top: 0;
          left: 0;
          color: var(--weather-plane-color, var(--weather-text-color, #fff));
          will-change: transform, opacity;
        }
        .plane-body { position: relative; line-height: 0; }
        .plane-svg {
          display: block;
          width: 100%;
          height: auto;
          opacity: 0.9;
          filter: drop-shadow(0 1px 2px rgba(6, 12, 28, 0.25));
        }
        /* At night a plane is its lights: the outline only faintly there.
           At dusk and dawn, with the sun just below the horizon, a plane up
           high is still in sunlight: it keeps its outline, lights on. */
        .animated-weather-card[data-phase="night"] .plane-gsap.night .plane-svg { opacity: 0.22; filter: none; }
        /* Its lights, where they are on the aircraft (aircraft.ts), in a
           fixed size whatever the plane's: steady red or green at the near
           wingtip, white strobes that flash twice, the red beacon on the
           belly, and white at the tail. A plane flying right shows its
           right side, whose wingtip is green; flying left, its red left. */
        .plane-light {
          position: absolute;
          width: 2px;
          height: 2px;
          margin: -1px 0 0 -1px;
          border-radius: 50%;
        }
        .plane-light.nav { background: #3ee07a; box-shadow: 0 0 3px 1px rgba(62, 224, 122, 0.7); }
        .plane-gsap.westbound .plane-light.nav { background: #ff4d40; box-shadow: 0 0 3px 1px rgba(255, 77, 64, 0.7); }
        .plane-light.tail { background: #f6f3ea; box-shadow: 0 0 2px rgba(246, 243, 234, 0.6); }
        .plane-light.strobe,
        .plane-light.beacon {
          width: 3px;
          height: 3px;
          margin: -1.5px 0 0 -1.5px;
          opacity: 0;
        }
        .plane-light.strobe {
          background: #fbfbff;
          box-shadow: 0 0 6px 2px rgba(251, 251, 255, 0.8);
          animation: planeStrobe 1.2s steps(1, end) infinite;
        }
        .plane-light.beacon {
          background: #ff3b30;
          box-shadow: 0 0 5px 1px rgba(255, 59, 48, 0.85);
          animation: planeBeacon 1s steps(1, end) infinite 0.35s;
        }
        @keyframes planeStrobe {
          0% { opacity: 1; }
          5% { opacity: 0; }
          13% { opacity: 1; }
          18%, 100% { opacity: 0; }
        }
        @keyframes planeBeacon {
          0% { opacity: 1; }
          12%, 100% { opacity: 0; }
        }
        /* A flight tracker's tag: beside the plane at fuselage height, on
           the open-sky side (right), so it adds no height to the plane */
        .plane-label {
          position: absolute;
          top: 50%;
          left: calc(100% + 6px);
          transform: translateY(-50%);
          font-size: 10px;
          font-weight: 600;
          line-height: 12px;
          letter-spacing: 0.04em;
          white-space: nowrap;
          color: var(--weather-text-color, #fff);
          opacity: 0.72;
          text-shadow: 0 1px 4px var(--weather-text-shadow);
          font-variant-numeric: tabular-nums;
        }

`;var Il={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function Gl(o,e){try{let t=o.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return ve(Il,e.state)||e.state}var Bl=180;function to(o,e){let t=e.note_entity?o?.states[e.note_entity]:void 0;if(!t)return null;let i=s=>typeof s=="string"?s.trim():"",n=t.state==="unknown"||t.state==="unavailable"?"":i(t.state),a=i(t.attributes?.[e.note_attribute||"note"]);if(!n&&!a)return null;let r=Date.parse(t.attributes?.generated_at);return{line:n||a,note:a||n,writtenAt:Number.isNaN(r)?null:r}}function eo(o,e){let t=Number(e.note_max_age??Bl);return o.writtenAt===null||!(t>0)?null:o.writtenAt+t*6e4}function ra(o,e,t){if(e.dev_mode){let i=ql(e,t);if(o&&e.sun_entity){let n=o.states[e.sun_entity];n&&(i.sun={sunrise:n.attributes.next_rising||null,sunset:n.attributes.next_setting||null,dawn:n.attributes.next_dawn||null,dusk:n.attributes.next_dusk||null,noon:n.attributes.next_noon||null,elevation:n.attributes.elevation??null,aboveHorizon:n.state==="above_horizon"})}return i}return o?Yl(o,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--"}}function ql(o,e){let n=Yn[e||"sunny"]||"22",a=io(o)?se(parseFloat(n),void 0,1):n,r=o.name||"",s=be.humidity,l=be.windSpeed,d=parseFloat(l.split(" ")[0])||15,c=be.pressure,m=Un[e||"sunny"]||e||"sunny",p=be.indoorTemperature,g=be.indoorHumidity,u=new Date,f=new Date(u.getFullYear(),u.getMonth(),u.getDate(),6,14),y=new Date(u.getFullYear(),u.getMonth(),u.getDate(),18,32),w=new Date(u.getFullYear(),u.getMonth(),u.getDate(),5,45),_=new Date(u.getFullYear(),u.getMonth(),u.getDate(),19,1),v=new Date(u.getFullYear(),u.getMonth(),u.getDate(),12,23),b=Date.now(),T={sunrise:f.toISOString(),sunset:y.toISOString(),dawn:w.toISOString(),dusk:_.toISOString(),noon:v.toISOString(),elevation:42.5,aboveHorizon:b>=f.getTime()&&b<=y.getTime()};return{temperature:a,weatherCondition:m,location:r,humidity:s,windSpeed:l,windSpeedValue:d,windBearing:null,pressure:c,pressureValue:null,feelsLike:null,indoorTemperature:p,indoorHumidity:g,sun:T}}var Vl={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function Jr(o){let e=typeof o=="number"?o:typeof o=="string"?parseFloat(o):NaN;return isFinite(e)?(e%360+360)%360:typeof o=="string"?Vl[o.trim().toUpperCase()]??null:null}function io(o){return Number(o.temperature_decimals)===1?1:0}function Yl(o,e){if(!e.entity)throw new Error("Weather entity is required");let t=o.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let i;if(e.outdoor_sensor_entity){let x=o.states[e.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?i=parseFloat(x.state):i=t.attributes.temperature}else i=t.attributes.temperature;let n=io(e),a=x=>se(n?x:Math.round(x),o,n),r=i!=null&&!isNaN(i)?a(i):"--",s=Gl(o,t),l=e.name||t.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?se(Math.round(E),o)+"%":null},c="--";if(e.humidity_sensor_entity){let x=o.states[e.humidity_sensor_entity];c=x&&d(x.state)||d(t.attributes.humidity)||"--"}else c=d(t.attributes.humidity)||"--";let h="--",m=10,p=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(m=Ar(P,E||"km/h"),h=se(Math.round(P),o)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?o.states[e.wind_speed_sensor_entity]:void 0;g&&p(g.state,g.attributes?.unit_of_measurement)||p(t.attributes.wind_speed,t.attributes.wind_speed_unit);let u=e.wind_direction_sensor_entity?o.states[e.wind_direction_sensor_entity]:void 0,f=Jr(u?.state)??Jr(t.attributes.wind_bearing),y=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let M=E.toLowerCase()==="inhg"?2:0;return se(P,o,M)+" "+E},w=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",v=null;if(e.pressure_sensor_entity){let x=o.states[e.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=y(x.state,E);P&&(_=P,v=w(x.state))}if(_==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";_=y(t.attributes.pressure,E)||"--",v=w(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let x=t.attributes.pressure_unit||"hPa";_=y(t.attributes.pressure,x)||"--",v=w(t.attributes.pressure)}let b=null,T;if(e.feels_like_entity&&(T=o.states[e.feels_like_entity]?.state),T===void 0&&t.attributes.apparent_temperature!==void 0&&(T=t.attributes.apparent_temperature),T!==void 0){let x=typeof T=="number"?T:parseFloat(T);isFinite(x)&&(b=a(x)+"\xB0")}let S="--";if(e.indoor_temperature_entity){let x=o.states[e.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(S=a(parseFloat(x.state))+"\xB0")}let k="--";if(e.indoor_humidity_entity){let x=o.states[e.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(k=se(Math.round(parseFloat(x.state)),o)+"%")}let C;if(e.sun_entity){let x=o.states[e.sun_entity];x&&(C={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:r,weatherCondition:s,location:l,humidity:c,windSpeed:h,windSpeedValue:m,windBearing:f,pressure:_,pressureValue:v,feelsLike:b,indoorTemperature:S,indoorHumidity:k,sun:C}}var oa={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota"}};function Je(o){return o?.locale?.language||o?.language||"en"}function Pe(o){return`${Je(o)}|${o?.locale?.time_format??""}`}function vt(o,e,t={}){let i=Je(o).toLowerCase();return(oa[i]?.[e]??oa[i.split("-")[0]]?.[e]??oa.en[e]).replace(/\{(\w+)\}/g,(a,r)=>t[r]??"")}function Ul(o){let e=o?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?Je(o):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function le(o,e){if(!o)return"--";let t=new Date(o);if(isNaN(t.getTime()))return"--";let i=Ul(e),n={hour:"numeric",minute:"2-digit"};i!==void 0&&(n.hourCycle=i?"h12":"h23");try{return new Intl.DateTimeFormat(e?Je(e):void 0,n).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function sa(o,e){let t=Math.round(Math.abs(o)*60),i=Math.floor(t/60),n=t%60,a=Intl.DurationFormat;if(a&&e)try{return new a(Je(e),{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return i>0?`${i}h ${n}m`:`${n}m`}function ti(o,e){let t=o.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${L(t[1])}<span class="${e}">${L(t[2])}</span>`:L(o)}function ii(o){return o&&typeof o=="object"&&typeof o.action=="string"?o:void 0}function ni(o,e){return{entity:e,tap_action:ii(o?.tap_action),hold_action:ii(o?.hold_action),double_tap_action:ii(o?.double_tap_action)}}function Le(o){return!!o&&o.action!=="none"}function no(o){return o.tap_action?Le(o.tap_action):!!o.entity}function ei(o,e,t){let i=e[`${t}_action`];if(t==="tap"&&!i){e.entity&&o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}Le(i)&&o.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function Ui(o,e,t){if(o.dataset.actionsBound)return;o.dataset.actionsBound="1";let i=null,n=!1,a,r,s=()=>{clearTimeout(a),a=void 0},l=()=>{i=null,s()},d=()=>{Le(t().double_tap_action)?r?(clearTimeout(r),r=void 0,ei(e,t(),"double_tap")):r=setTimeout(()=>{r=void 0,ei(e,t(),"tap")},250):ei(e,t(),"tap")};o.addEventListener("pointerdown",c=>{c.button===0&&(i={x:c.clientX,y:c.clientY},n=!1,s(),Le(t().hold_action)&&(a=setTimeout(()=>{a=void 0,n=!0,ei(e,t(),"hold")},500)))}),o.addEventListener("pointermove",c=>{i&&Math.hypot(c.clientX-i.x,c.clientY-i.y)>10&&l()}),o.addEventListener("pointerup",()=>{let c=!!i&&!n;l(),c&&d()}),o.addEventListener("pointercancel",l),o.addEventListener("pointerleave",l),o.addEventListener("keydown",c=>{c.key!=="Enter"&&c.key!==" "||!no(t())||(c.preventDefault(),ei(e,t(),"tap"))}),o.addEventListener("contextmenu",c=>{Le(t().hold_action)&&c.preventDefault()})}function ai(o,e,t){no(e)?(o.setAttribute("role","button"),o.tabIndex=0,o.style.cursor="pointer"):(t?o.setAttribute("role",t):o.removeAttribute("role"),o.removeAttribute("tabindex"),o.style.cursor="");let i=Le(e.hold_action);o.style.userSelect=i?"none":"",o.style.setProperty("-webkit-user-select",i?"none":""),o.style.setProperty("-webkit-touch-callout",i?"none":"")}var ao=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function ro(o){let e=o.color_palette||"default",t=o.custom_colors||{},i="";if(e!=="theme"){let a=c=>{if(typeof c!="string"||!ao.test(c))return null;let h=c.replace("#","");h.length===3&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);let m=parseInt(h,16);return{r:m>>16&255,g:m>>8&255,b:m&255}},r=(c,h,m)=>"#"+(c<<16|h<<8|m).toString(16).padStart(6,"0"),s=(c,h)=>{let m=a(c);if(!m)return c;let p=1-h/100;return r(Math.max(0,Math.floor(m.r*p)),Math.max(0,Math.floor(m.g*p)),Math.max(0,Math.floor(m.b*p)))},l=(c,h)=>{let m=a(c);if(!m)return c;let p=h/100;return r(Math.min(255,Math.floor(m.r+(255-m.r)*p)),Math.min(255,Math.floor(m.g+(255-m.g)*p)),Math.min(255,Math.floor(m.b+(255-m.b)*p)))},d=(c,h)=>{let m=t[c];if(!m||typeof m!="string"||!ao.test(m))return;let p=l(m,12),g=s(m,22);i+=`--weather-${h}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${p} 0%, ${m} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let n=(a,r)=>{a&&Ue(a)&&(i+=r.replace(/\$\{value\}/g,a))};return n(t.text_color,"--weather-text-color: ${value} !important; "),n(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(t.rain_color,"--weather-rain-color: ${value} !important; "),n(t.snow_color,"--weather-snow-color: ${value} !important; "),i}var Ki=["tap_action","hold_action","double_tap_action"],Kl={tap_action:["ui.panel.lovelace.editor.card.generic.tap_action","Tap behavior"],hold_action:["ui.panel.lovelace.editor.card.generic.hold_action","Hold behavior"],double_tap_action:["ui.panel.lovelace.editor.card.generic.double_tap_action","Double tap behavior"]},so=(o,e)=>xe(o,...Kl[e]),jl=Ki.map(o=>({name:o,selector:{ui_action:{default_action:o==="tap_action"?"more-info":"none"}},context:{entity_id:"entity"}}));function lo(o,e,t,i){let n={...t},a=s=>{n={...n,...s},i(s)},r=()=>{let s=document.createElement("ha-form");s.hass=e,s.data={...n},s.schema=jl,s.computeLabel=l=>so(e,l.name),s.addEventListener("value-changed",l=>{l.stopPropagation();let d=l.detail?.value??{},c={};for(let h of Ki){let m=ii(d[h]);JSON.stringify(m)!==JSON.stringify(n[h])&&(c[h]=m)}s.data={...n,...c},Object.keys(c).length&&a(c)}),o.replaceChildren(s)};if(customElements.get("ha-form")){r();return}ho(o,e,()=>n,a),customElements.whenDefined("ha-form").then(()=>{o.isConnected&&r()}),Xl()}function co(o,e){let t=o?.querySelector("ha-form");t&&e&&(t.hass=e)}async function Xl(){try{await(await(await window.loadCardHelpers?.())?.createCardElement({type:"tile",entity:"sun.sun"}))?.constructor?.getConfigElement?.()}catch{}}var la=[{value:"default",label:"Default"},{value:"more-info",label:"More info"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open a URL"},{value:"none",label:"Nothing"}],oo={navigate:{key:"navigation_path",label:"Path",placeholder:"/lovelace/weather"},url:{key:"url_path",label:"URL",placeholder:"https://"}};function ho(o,e,t,i){o.innerHTML=Ki.map(n=>{let a=t()[n],r=a?oo[a.action]:void 0;return`<div class="option"><ha-select data-action="${n}" label="${L(so(e,n))}"></ha-select></div>`+(r?`<div class="option">${xi({id:`${n}-${r.key}`,label:r.label,placeholder:r.placeholder,value:typeof a?.[r.key]=="string"?a[r.key]:""})}</div>`:"")}).join("");for(let n of Ki){let a=t()[n],r=o.querySelector(`[data-action="${n}"]`);if(!r)continue;let s=a&&!la.some(h=>h.value===a.action)?[...la,{value:a.action,label:`${a.action} (set in YAML)`}]:la,l=()=>{r.options=s,r.value=a?.action??"default"};customElements.get("ha-select")?l():customElements.whenDefined("ha-select").then(l),r.addEventListener("selected",(h=>{let m=h.detail?.value;!m||m===(t()[n]?.action??"default")||(i({[n]:m==="default"?void 0:{action:m}}),ho(o,e,t,i))})),r.addEventListener("closed",h=>h.stopPropagation());let d=a?oo[a.action]:void 0;(d?o.querySelector(`#${n}-${d.key}`):null)?.addEventListener("input",h=>{let m=h.target.value.trim(),{[d.key]:p,...g}=t()[n]??{action:a.action};i({[n]:{...g,action:a.action,...m?{[d.key]:m}:{}}})})}}var ua={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"};function Zl(o){return ve(ua,o)===void 0?"mdi:weather-night":`mdi:moon-${o.replace(/_moon$/,"").replace(/_/g,"-")}`}function da(o,e){let t=n=>n.startsWith("sensor.")&&ve(ua,e.states[n]?.state)!==void 0,i=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return i?{sun_entity:o,moon_entity:i}:{sun_entity:o}}var de=1e3,ji=300,Ql={horizon:196,peak:34,trough:276,twilightRy:78},Jl={horizon:200,peak:96,trough:262,twilightRy:44},td=124,uo=16;function ed(o,e){if(o<1)return 1;let t=Math.max(2,Math.floor((e+uo)/(td+uo))),i=Math.ceil(o/t);return Math.ceil(o/i)}function po(o,e,t){let i=t-e;if(i<=0||i>=24)return 0;if(o>=e&&o<=t)return Math.sin(Math.PI*(o-e)/i);let n=((o-t)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var Zi=o=>o/24*de,fo=(o,e)=>o>=0?e.horizon-o*(e.horizon-e.peak):e.horizon-o*(e.trough-e.horizon);function id(o,e,t){let i=[];for(let n=0;n<=240;n++){let a=n/10;i.push(`${Zi(a).toFixed(1)},${fo(po(a,o,e),t).toFixed(1)}`)}return"M"+i.join(" L")}function Xi(o){if(!o)return 0;let e=new Date(o);return isNaN(e.getTime())?0:e.getHours()+e.getMinutes()/60+e.getSeconds()/3600}var nd=o=>ti(o,"st-ampm");Ri();var mo=Rt(xt(Ae)),ad=`
${Qe("")}
    :host {
        display: block;
        height: 100%;
        --st-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
        --st-font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
    }

    ha-card {
        height: 100%;
        overflow: hidden;
    }
    ha-card.sky {
        background: none;
        border-color: transparent;
    }

    .st-card {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 220px;
        padding: 20px;
        gap: 14px;
        container: st / inline-size;
        font-family: var(--st-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--st-text);
        --st-text: var(--primary-text-color);
        --st-secondary: var(--secondary-text-color);
        --st-secondary-opacity: 1;
        /* Theme palette: the headline time and the day's arc in the theme's
           primary color, with a faint tint of it under the arc (an amber
           fill turns muddy on dark themes), icons in its icon color, and no
           twilight glows */
        --st-path: var(--primary-color);
        --st-path-night: var(--secondary-text-color);
        --st-horizon: var(--divider-color, rgba(0, 0, 0, 0.12));
        --st-icon: var(--state-icon-color, var(--primary-color));
        --st-hero: var(--primary-color, var(--primary-text-color));
        --st-day-fill: var(--primary-color);
        --st-day-fill-opacity: 0.08;
        --st-twilight: var(--state-sun-above_horizon-color, #ffb300);
        --st-twilight-opacity: 0;
    }

    /* Colorized: the card's sky follows the sun */
    .st-card.sky {
        --st-text: ${mo};
        --st-secondary: ${mo};
        --st-secondary-opacity: ${Fi};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${ke(Wi,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${na.map(o=>`${o} ${Xt}s ${Ee}`).join(", ")};
    }

    /* \u2500\u2500 Headline: the next sunrise or sunset \u2500\u2500 */
    .st-hero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        min-width: 0;
    }
    .st-title {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.01em;
        margin-bottom: 6px;
        opacity: 0.94;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .st-eyebrow,
    .st-metric-label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
    /* Long labels (German "Sonnenh\xF6chststand") end in an ellipsis rather
       than running into the next column; the full word is in the title */
    .st-metric-label { min-width: 0; }
    .st-metric-label > span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .st-eyebrow ha-icon,
    .st-metric-label ha-icon {
        --mdc-icon-size: 13px;
        /* Optical: centred on the capitals of the uppercase label */
        margin-top: -0.5px;
        flex-shrink: 0;
    }
    .st-time {
        margin: 6px 0 0 -0.04em;
        font-family: var(--st-font-display);
        font-size: 52px;
        font-weight: 250;
        line-height: 0.95;
        letter-spacing: -0.035em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
    }
    .st-ampm {
        font-size: 0.42em;
        font-weight: 500;
        letter-spacing: 0.02em;
        margin-left: 0.32em;
    }
    .st-countdown {
        margin-top: 6px;
        font-size: 15px;
        line-height: 20px;
        font-variant-numeric: tabular-nums;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }

    /* \u2500\u2500 Sun path \u2500\u2500 */
    .st-chart {
        position: relative;
        flex: 1 1 auto;
        min-height: 64px;
        /* The path stretches to the chart, so cap its height: the arc keeps
           the same gentle shape in a tall frame instead of becoming a peak */
        max-height: 96px;
        margin: auto -20px;
    }
    .st-chart svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    .st-path-day,
    .st-path-night {
        fill: none;
        stroke-width: 2.25;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }
    .st-path-day { stroke: var(--st-path); }
    .st-path-night { stroke: var(--st-path-night); stroke-dasharray: 2 5; }
    .st-day-fill { fill: var(--st-day-fill); opacity: var(--st-day-fill-opacity); }
    .st-twilight { opacity: var(--st-twilight-opacity); }
    .st-horizon {
        stroke: var(--st-horizon);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
    }
    .st-now-line {
        stroke: var(--st-horizon);
        stroke-width: 1;
        stroke-dasharray: 2 4;
        vector-effect: non-scaling-stroke;
    }

    /* The sun (or the moon, when it's below the horizon) at this moment */
    .st-dot {
        position: absolute;
        width: 14px;
        height: 14px;
        margin: -7px 0 0 -7px;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 50%, #fffaf0 0%, #ffe3a3 55%, #ffb547 100%);
        box-shadow: 0 0 10px 3px rgba(255, 200, 110, 0.55), 0 0 30px 10px rgba(255, 200, 110, 0.22);
    }
    .st-dot.below {
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        background: radial-gradient(circle at 40% 40%, #ffffff 0%, #dfe6f5 70%, #b9c3d8 100%);
        box-shadow: 0 0 10px 2px rgba(200, 214, 255, 0.35);
    }
    /* Theme palette: a flat sun in Home Assistant's sun color, like the
       weather card's. Below the horizon it takes the night path's color:
       HA's indigo for a set sun is too faint on dark themes. */
    .st-card:not(.sky) .st-dot {
        box-shadow: none;
        background: var(--state-sun-above_horizon-color, #ffc107);
    }
    .st-card:not(.sky) .st-dot.below {
        background: var(--st-path-night);
    }
    .st-card:not(.sky) .st-eyebrow ha-icon,
    .st-card:not(.sky) .st-metric-label ha-icon {
        color: var(--st-icon);
    }
    /* The headline time is the tracker's hero, like the weather card's temperature */
    .st-card:not(.sky) .st-time {
        color: var(--st-hero);
    }

    /* \u2500\u2500 Facts \u2500\u2500 */
    .st-metrics {
        position: relative;
        display: grid;
        /* The column count comes from _fit (detailColumns) */
        grid-template-columns: repeat(var(--st-cols, 2), minmax(0, 1fr));
        gap: 14px 16px;
        padding-top: 14px;
        flex-shrink: 0;
    }
    .st-metrics::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: currentColor;
        opacity: 0.2;
    }
    .st-card:not(.sky) .st-metrics::before {
        background: var(--divider-color, rgba(0, 0, 0, 0.12));
        opacity: 1;
    }
    .st-metric {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
    }
    .st-metric-value {
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: -0.012em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .st-metric-value .st-ampm { font-size: 0.7em; margin-left: 0.24em; }
    /* Moon phase names are long; let them wrap rather than truncate */
    .st-metric-value.wrap {
        white-space: normal;
        text-wrap: balance;
    }

    /* Fit to the frame, stepped down until nothing overflows (see _fit) */
    .st-card[data-fit="compact"] .st-metric[data-kind="first-light"],
    .st-card[data-fit="compact"] .st-metric[data-kind="last-light"],
    .st-card[data-fit="short"] .st-metric[data-kind="first-light"],
    .st-card[data-fit="short"] .st-metric[data-kind="last-light"],
    .st-card[data-fit="short"] .st-countdown,
    .st-card[data-fit="tight"] .st-countdown,
    .st-card[data-fit="tight"] .st-metrics { display: none; }
    .st-card[data-fit="short"] .st-time,
    .st-card[data-fit="tight"] .st-time { font-size: 40px; }
    .st-card[data-fit="short"],
    .st-card[data-fit="tight"] { gap: 10px; }
    .st-card[data-fit="short"] .st-chart,
    .st-card[data-fit="tight"] .st-chart { min-height: 44px; }

    @container st (max-width: 299px) {
        .st-time { font-size: 44px; }
        .st-metric-value { font-size: 16px; }
    }
    @container st (min-width: 460px) {
        .st-time { font-size: 60px; }
        .st-metric-value { font-size: 18px; line-height: 24px; }
    }

    /* \u2500\u2500 Compact: the next sunrise or sunset beside the sun's day \u2500\u2500
       One line, built to sit under a weather card: same left edge and
       label style, the time a quiet step down from the temperature. */
    .st-card.compact {
        flex-direction: row;
        align-items: center;
        gap: 20px;
        min-height: 0;
        padding: 16px 20px;
    }
    /* Under a weather card the real sun is just above, so no second light
       source: the sky's gradient and scrim only */
    .st-card.sky.compact {
        /* From the sky's mid tone down: under a weather card it reads as
           the lower sky, not a brighter strip below a darker card */
        background:
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-mid) 0%, var(--awc-sky-bottom) 100%);
        --st-twilight-opacity: 0.3;
    }
    .st-card.compact .st-hero { flex: 0 0 auto; }
    .st-card.compact .st-time { font-size: 34px; margin-top: 5px; }
    .st-card.compact .st-countdown { margin-top: 5px; font-size: 13px; line-height: 18px; }
    .st-card.compact .st-chart {
        flex: 1 1 auto;
        align-self: stretch;
        max-height: none;
        /* Full height of the card, out to its right edge */
        margin: -16px -20px -16px 0;
        /* The path fades in beside the headline instead of starting at a hard edge */
        -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 36px);
        mask-image: linear-gradient(90deg, transparent 0, #000 36px);
    }
    .st-card.compact[data-fit] .st-chart { min-height: 0; }
    /* The other event, small, in the open sky at the top-right */
    .st-chart-note {
        position: absolute;
        top: 14px;
        right: 20px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
    .st-chart-note .st-chart-note-time {
        margin-left: 4px;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        font-variant-numeric: tabular-nums;
    }
    .st-chart-note .st-ampm { font-size: 1em; margin-left: 0.2em; font-weight: 500; }
    @container st (max-width: 419px) {
        .st-chart-note { display: none; }
    }
    /* Short frames (a one-row section): the countdown goes, then the label */
    .st-card.compact[data-fit="short"],
    .st-card.compact[data-fit="tight"] { gap: 16px; }
    .st-card.compact[data-fit="short"] .st-time,
    .st-card.compact[data-fit="tight"] .st-time { font-size: 28px; }
    .st-card.compact[data-fit="tight"] .st-eyebrow { display: none; }
    .st-card.compact[data-fit="tight"] { padding-block: 12px; }
    .st-card.compact[data-fit="tight"] .st-chart { margin-block: -12px; }
    .st-card.compact[data-fit="tight"] .st-time { margin-top: 0; }

    .st-no-data {
        margin: auto;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
`,ca=class extends HTMLElement{constructor(){super();this.config={};this._shadow=this.attachShadow({mode:"open"})}setConfig(t){if(!t.sun_entity)throw new Error("Please define a sun_entity (e.g. sun.sun)");this.config={...t},this._render()}set hass(t){let i=this.config.sun_entity||"",n=this.config.moon_entity||"",a=this._hass?.states[i],r=t.states[i],s=this._hass?.states[n]?.state,l=t.states[n]?.state,d=Pe(this._hass)!==Pe(t),c=this.config.weather_entity||"",h=c&&this._hass?.states[c]?.state!==t.states[c]?.state;this._hass=t;let m=a?.attributes?.elevation,p=r?.attributes?.elevation;(!a||a.state!==r?.state||a.attributes?.next_rising!==r?.attributes?.next_rising||a.attributes?.next_setting!==r?.attributes?.next_setting||Math.abs((m||0)-(p||0))>=.5||n&&s!==l||d||h)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>this._render(),6e4)),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let i=t.querySelector(".st-metrics");for(let n of["regular","compact","short","tight"]){if(t.dataset.fit=n,i){let a=Array.from(i.children).filter(r=>getComputedStyle(r).display!=="none").length;i.style.setProperty("--st-cols",String(ed(a,i.clientWidth)))}if(t.scrollHeight<=t.clientHeight+1)return}}_actions(){return ni(this.config,this.config.sun_entity)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_skyCondition(t){let i=this.config.weather_entity,n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let a=Ti(n,!1,void 0,void 0,this._hass?.config?.time_zone);if(ia.includes(a))return a}return t==="night"?"clear-night":"sunny"}static getConfigElement(){return document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,i=[],n=[]){let a=[...i,...n,...Object.keys(t?.states??{})];return da(a.find(r=>r.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let i=t.state,n;try{n=this._hass.formatEntityState?.(t)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||ve(ua,i)||i.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase()),icon:Zl(i)}}_render(){let t=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let a=new Date,r=a.getHours()+a.getMinutes()/60,s=Xi(t.sunrise),l=Xi(t.sunset),d=t.dawn?Xi(t.dawn):Math.max(0,s-.5),c=t.dusk?Xi(t.dusk):Math.min(24,l+.5),h=l-s,m=t.aboveHorizon,p=m?t.sunset:t.sunrise,g=new Date(p).getTime()-a.getTime(),u=this._hass,f=Ct=>L(vt(u,Ct)),y=Ct=>nd(le(Ct,u)),w=g>0?vt(u,"in_duration",{duration:sa(g/36e5,u)}):"",_=Hi(t.elevation,t.rising,t.aboveHorizon),v=Ze(this._skyCondition(_),_),b=n?{"--awc-sky-top":v.top,"--awc-sky-mid":v.mid,"--awc-sky-bottom":v.bottom,"--awc-sky-glow":v.glow,"--awc-sky-scrim":v.scrim}:null,T=this.config.compact?Jl:Ql,S=id(s,l,T),k=`${S} L${de},${T.horizon} L0,${T.horizon} Z`,C=po(r,s,l),x=r/24*100,E=fo(C,T)/ji*100,P=(Ct,ht)=>{let yt=Math.max(70,Math.abs(ht)/24*de*2.4);return`<ellipse cx="${Zi(Ct).toFixed(1)}" cy="${T.horizon}" rx="${yt.toFixed(1)}" ry="${T.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},M=!!this.config.compact,O=this.config.show_header!==!1,$=O?`
            <div class="st-hero">
                ${this.config.title&&!M?`<div class="st-title">${L(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    <ha-icon icon="${m?"mdi:weather-sunset-down":"mdi:weather-sunset-up"}"></ha-icon>
                    <span>${f(m?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${y(p)}</div>
                ${w?`<div class="st-countdown">${L(w)}</div>`:""}
            </div>`:this.config.title&&!M?`<div class="st-hero"><div class="st-title">${L(this.config.title)}</div></div>`:"",W=(Ct,ht,yt,_o,bo=!1)=>`
                <div class="st-metric" data-kind="${L(Ct)}">
                    <div class="st-metric-label"><ha-icon icon="${L(ht)}"></ha-icon><span title="${L(yt)}">${L(yt)}</span></div>
                    <div class="st-metric-value${bo?" wrap":""}">${_o}</div>
                </div>`,H=!M&&this.config.show_details!==!1,j=M&&O?`
                        <div class="st-chart-note">${f(m?"sunrise":"sunset")}<span class="st-chart-note-time">${y(m?t.sunrise:t.sunset)}</span></div>`:"",St=H?`
            <div class="st-metrics">
                ${m?W("sunrise","mdi:weather-sunset-up",f("sunrise"),y(t.sunrise)):W("sunset","mdi:weather-sunset-down",f("sunset"),y(t.sunset))}
                ${W("noon","mdi:white-balance-sunny",f("solar_noon"),y(t.noon))}
                ${W("daylight","mdi:timer-sand",f("daylight"),L(sa(h,u)))}
                ${W("first-light","mdi:weather-sunset",f("first_light"),y(t.dawn))}
                ${W("last-light","mdi:weather-night",f("last_light"),y(t.dusk))}
                ${i?W("moon",i.icon,f("moon"),L(i.phaseName),!0):""}
            </div>`:"",at=this.config.sun_entity?u?.states[this.config.sun_entity]:void 0,gt="";try{gt=at&&u?.formatEntityState?.(at)||""}catch{}let Pt=[`${vt(u,"sunrise")} ${le(t.sunrise,u)}`,`${vt(u,"sunset")} ${le(t.sunset,u)}`,gt].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${$}
                    <div class="st-chart" role="img" aria-label="${L(Pt)}">
                        <svg viewBox="0 0 ${de} ${ji}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${de}" height="${T.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${T.horizon}" width="${de}" height="${ji-T.horizon}"/></clipPath>
                            </defs>
                            ${P(s,s-d)}
                            ${P(l,c-l)}
                            <path d="${k}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${T.horizon}" x2="${de}" y2="${T.horizon}" class="st-horizon"/>
                            <line x1="${Zi(r).toFixed(1)}" y1="0" x2="${Zi(r).toFixed(1)}" y2="${ji}" class="st-now-line"/>
                            <path d="${S}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${S}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${C<0?"below":""}" style="left: ${x.toFixed(2)}%; top: ${E.toFixed(2)}%;"></div>${j}
                    </div>
                    ${St}`,b)}_mount(t,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${ad}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),Ui(n.parentElement,this,()=>this._actions())),ai(n.parentElement,this._actions());let a=!!i;n.classList.toggle("sky",a),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",a);for(let r of na)i?n.style.setProperty(r,i[r]):n.style.removeProperty(r);n.innerHTML=t,this._fit()}},rd=`
    .st-editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 4px 0;
    }
    .st-editor .st-switches {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 4px;
    }
    .st-editor .st-switch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        min-height: 48px;
        font-size: 14px;
        color: var(--primary-text-color);
        cursor: pointer;
    }
    .st-editor .st-switch small {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: var(--secondary-text-color);
    }
    .st-editor .st-actions-title {
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 16px;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
    }
    .st-editor #st-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`,ha=class extends HTMLElement{constructor(){super(...arguments);this._config={};this._initialized=!1}setConfig(t){let i=JSON.stringify(t)===JSON.stringify(this._config);this._config={...t},this._initialized&&!i&&this._render()}set hass(t){this._hass=t,this._initialized&&this.isConnected&&(this._updatePickers(),co(this.querySelector("#st-actions"),t))}async connectedCallback(){this._config=this._config||{},await this._ensureEntityPickerLoaded(),this._render(),this._initialized=!0,this._hass&&this._updatePickers()}disconnectedCallback(){this.innerHTML=""}async _ensureEntityPickerLoaded(){if(!customElements.get("ha-entity-picker"))try{let i=await(await window.loadCardHelpers()).createCardElement({type:"entities",entities:[]}),n=a=>{(a.reason?.message?.includes("localize")||a.reason?.message?.includes("hass"))&&a.preventDefault()};window.addEventListener("unhandledrejection",n);try{await i.constructor.getConfigElement()}catch{}setTimeout(()=>window.removeEventListener("unhandledrejection",n),2e3)}catch{}}_render(){let t=this._config,i=(n,a,r,s)=>`
                    <label class="st-switch" for="${n}">
                        <span>${a}<small>${r}</small></span>
                        <ha-switch id="${n}" ${s?"checked":""}></ha-switch>
                    </label>`;this.innerHTML=`
            <style>${rd}</style>
            <div class="st-editor">
                <ha-entity-picker id="sun-picker" allow-custom-entity></ha-entity-picker>
                <ha-entity-picker id="moon-picker" allow-custom-entity></ha-entity-picker>
                <ha-entity-picker id="weather-picker" allow-custom-entity></ha-entity-picker>
                ${xi({id:"title",label:"Title (optional)",value:t.title})}
                <div class="st-switches">
                    ${i("compact","Compact","One line: the next sunrise or sunset beside the sun's path",!!t.compact)}
                    ${i("show_header","Next sunrise or sunset","The headline time and countdown",t.show_header!==!1)}
                    ${i("show_details","Details","First and last light, solar noon, daylight, moon",t.show_details!==!1)}
                    ${i("theme_palette","Blend with dashboard theme","Use theme colors instead of the sky",t.color_palette==="theme")}
                </div>
                <div class="st-actions-title">Interactions</div>
                <div id="st-actions"></div>
            </div>
        `,this._updatePickers(),this._attachListeners(),lo(this.querySelector("#st-actions"),this._hass,ni(this._config,this._config.sun_entity),n=>this._update(n))}_updatePickers(){let t=[{id:"#sun-picker",value:this._config.sun_entity||"",label:"Sun entity",domains:["sun"]},{id:"#moon-picker",value:this._config.moon_entity||"",label:"Moon phase entity (optional)",domains:["sensor"]},{id:"#weather-picker",value:this._config.weather_entity||"",label:"Share the sky of a weather entity (optional)",domains:["weather"]}];for(let i of t){let n=this.querySelector(i.id);n&&(this._hass&&(n.hass=this._hass),n.value=i.value,n.label=i.label,n.includeDomains=i.domains)}}_attachListeners(){this.querySelector("#sun-picker")?.addEventListener("value-changed",i=>{this._update({sun_entity:i.detail.value})}),this.querySelector("#moon-picker")?.addEventListener("value-changed",i=>{this._update({moon_entity:i.detail.value||void 0})}),this.querySelector("#weather-picker")?.addEventListener("value-changed",i=>{this._update({weather_entity:i.detail.value||void 0})}),this.querySelector("#title")?.addEventListener("input",i=>{this._update({title:i.target.value||void 0})});let t=(i,n)=>{this.querySelector(`#${i}`)?.addEventListener("change",a=>{this._update(n(a.target.checked))})};t("compact",i=>({compact:i||void 0})),t("show_header",i=>({show_header:i})),t("show_details",i=>({show_details:i})),t("theme_palette",i=>({color_palette:i?"theme":void 0}))}_update(t){let i={...this._config,...t};for(let n of Object.keys(i))(i[n]===void 0||i[n]==="")&&delete i[n];this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};customElements.define("animated-sun-tracker-card",ca);customElements.define("animated-sun-tracker-editor",ha);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(o,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...da(e,o)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...da(e,o),compact:!0}}]:null});Ri();var go=o=>`Wind from ${Math.round(o)}\xB0`,yo=o=>o==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",ma=o=>o?"mdi:weather-sunset-down":"mdi:weather-sunset-up",od=18,sd=450,ld=1600;function pa(o,e){return e?.states["sun.sun"]?{entity:o,sun_entity:"sun.sun"}:{entity:o}}var dd=400,cd=120,hd=220,ud=24;window.AnimatedWeatherCardGsap=Vn;var wo=["regular","compact","short","tight","minimal"],md=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...wo.map(o=>[o,"none"])],Mt=class Mt extends HTMLElement{constructor(){super(...arguments);this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this.devTimeOverride=!1;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new Vi;this.writtenNote=null;this.noteComing=!1}static getStubConfig(t,i=[],n=[]){let a=[...i,...n,...Object.keys(t?.states??{})];return pa(a.find(r=>r.startsWith("weather."))??vr.entity,t)}actionsConfig(){return this.config?.dev_mode?{}:ni(this.config,this.config?.entity)}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=r=>r===void 0||typeof r=="number"&&isFinite(r)&&r>=0&&r<=23;if(!i(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!i(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let n=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0),this.config=t;let a=this.querySelector(".weather-info");if(a&&ai(a,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let r=this.animationController;this._animationGeneration++,this.animationController=new Me(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),r&&r.stopAllAnimations().catch(s=>A(this.config?.dev_mode,"Error stopping previous animation controller:",s))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&!!t.auto_pause!=!!n&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.applySizeState(),this.devPanel?.isOpen&&this.devPanel.dock()}),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new Me(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new Me(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass&&!this.config.dev_mode)return;jn(this),this.stopPlanes();let t=this.config.color_palette||"default",i;try{i=ra(this.hass,this.config,this.currentDevCondition)}catch(M){let O=M?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  <ha-icon class="awc-empty-icon" icon="mdi:weather-cloudy-alert"></ha-icon>
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${L(O)}</div>
                  <div class="awc-empty-hint">Open the card editor to choose a weather entity.</div>
                </div>
                <style>
                  .awc-empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 32px 16px;
                    text-align: center;
                    color: var(--primary-text-color, #333);
                  }
                  .awc-empty-icon {
                    --mdc-icon-size: 48px;
                    color: var(--secondary-text-color, #888);
                  }
                  .awc-empty-title {
                    font-size: 1.1rem;
                    font-weight: 500;
                  }
                  .awc-empty-message {
                    font-size: 0.9rem;
                    color: var(--secondary-text-color, #888);
                  }
                  .awc-empty-hint {
                    font-size: 0.85rem;
                    color: var(--secondary-text-color, #888);
                    opacity: 0.8;
                  }
                </style>
              </ha-card>
            `;return}let{temperature:n,weatherCondition:a,location:r,humidity:s,windSpeed:l,windSpeedValue:d,windBearing:c,pressure:h,pressureValue:m,feelsLike:p,indoorTemperature:g,indoorHumidity:u,sun:f}=i,y=this.updatePressureTrend(m);this.currentWindSpeedValue=d;let w=f?.aboveHorizon??!1,_=f?le(w?f.sunset:f.sunrise,this._hass):"--",v=this.config.show_sun!==!1&&!!f&&_!=="--",b=!!this.config.compact,T=ro(this.config),S=this.config.show_attribute_icons!==!1,k=this.config.show_attribute_labels!==!1,C=(M,O,$,W,H="")=>{let j=S||k?`<div class="attribute-label">${S?`<ha-icon class="attribute-icon" icon="${O}"></ha-icon>`:""}${k?`<span>${L($)}</span>`:""}</div>`:"";return`<div class="attribute" data-kind="${M}">${j}<div class="attribute-value"><span class="attribute-text">${W}</span>${H}</div></div>`},x=typeof c=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${c+180}deg);" aria-label="${go(c)}"></ha-icon>`:"",E=y?`<ha-icon class="pressure-trend ${y}" icon="${yo(y)}" aria-label="Pressure ${y}"></ha-icon>`:"",P=this.config.show_attributes!==!1?`
              <div class="weather-attributes${k?"":" values-only"}">${[C("humidity","mdi:water-percent",xe(this._hass,"ui.card.weather.attributes.humidity","Humidity"),L(s)),C("wind","mdi:weather-windy",xe(this._hass,"ui.card.weather.attributes.wind_speed","Wind"),L(l),x),C("pressure","mdi:gauge",xe(this._hass,"ui.card.weather.attributes.air_pressure","Pressure"),L(h),E),v?C("sun",ma(w),vt(this._hass,w?"sunset":"sunrise"),ti(_,"awc-ampm")):""].join("")}</div>`:"";this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions loading ${t==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${b?' data-variant="compact"':""} style="${L(T)}">
          <div class="sky" aria-hidden="true"></div>
          <div class="weather-skeleton" aria-hidden="true">
            <div class="skeleton-line"></div>
            <div class="skeleton-line large"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line small"></div>
          </div>
          <div class="weather-content">
            <!-- Sky-borne animation layer (decorative) -->
            <div class="animation-layer" role="presentation" aria-hidden="true">
              <div class="sun-track"><div class="sun"></div></div>
              <div class="lightning" id="lightning"></div>
              <div class="planes-layer"></div>
            </div>

            <div class="weather-info" role="group" aria-label="Current weather">
              <div class="main-weather-info">
                ${!b&&this.config.show_location!==!1&&r?`<div class="location">${L(r)}</div>`:""}
                <div class="temperature" aria-live="polite"><span class="temperature-value">${L(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${L(a)}</div>
                ${b?`<div class="compact-meta">${L(this.compactMeta(r,p))}</div>`:`<div class="hero-meta">${this.heroMetaHtml(p,g,u)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${b?"":P}
            </div>
          </div>

          <!-- Precipitation and wind containers (decorative) -->
          <div class="animation-container rain-container" aria-hidden="true">
            <div class="rain-layer"></div>
          </div>
          <div class="animation-container snow-container" aria-hidden="true">
            <div class="snow-layer"></div>
          </div>
          <div class="animation-container sleet-container" aria-hidden="true">
            <div class="sleet-layer"></div>
          </div>
          <div class="animation-container wind-container" aria-hidden="true">
            <div class="wind-layer"></div>
          </div>
          <div class="animation-container lightning-container" aria-hidden="true">
            <div class="lightning"></div>
          </div>
          <div class="animation-container clouds-container" aria-hidden="true">
            <div class="clouds-layer"></div>
          </div>
          <div class="animation-container fog-container" aria-hidden="true"></div>
          <div class="animation-container stars-container" aria-hidden="true"></div>
          <div class="animation-container sun-container" aria-hidden="true"></div>
        </div>
      </ha-card>
      
      <style>
        ${aa()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill()}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",i,"important");let n=()=>{let a=t.shadowRoot;if(!a)return;let r=a.querySelector("#awc-overflow");r||(r=document.createElement("style"),r.id="awc-overflow",a.appendChild(r)),r.textContent=`:host { overflow: ${i} !important; }`};n(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},dd)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&!this.config.dev_mode}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}Mt.loadSiblingBundle("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?to(this._hass,this.config):this.writtenNote,i=t?eo(t,this.config):null;if(!t||i===null)return t;let n=i-Date.now();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${L(t?.note??"")}</span><span class="note-short">${L(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let i=t.querySelector(".note-long"),n=t.querySelector(".note-short"),a=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),d=vt(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!a||t.hidden?(l&&(l.textContent=d),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}a&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let r=this.currentNote();if(!r){this.noteTyping?.finish(),(!t.hidden||a)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||a){this.noteTyping?.finish(),i&&(i.textContent=r.note),n&&(n.textContent=r.line),t.hidden=!1,this.applySizeState(),a&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===r.note+r.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,r.note,s),this.fadeThrough(n,r.line,s)}compactMeta(t,i){return[this.config?.show_location!==!1?t:"",i?`${vt(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,i=L(vt(this._hass,"indoors")),n='<ha-icon class="indoor-icon" icon="mdi:home-thermometer-outline"></ha-icon>';if(t==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let a=`<span class="indoor-label">${i}</span>`;return t==="both"?n+a:a}heroMetaHtml(t,i,n){let a=[];t&&a.push(`<span class="feels-like">${L(vt(this._hass,"feels_like"))} ${L(t)}</span>`);let r=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&r.length&&a.push(`<span class="indoor-climate-inline">${this.indoorLead()}${r.map(s=>L(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),a.join("")}mountDevPanel(){if(!this.config?.dev_mode){this.devPanel?.disconnect(),this.devPanel=void 0;return}let t=window.AnimatedWeatherCardDevPanel;if(t){this.devPanel??(this.devPanel=new t(this)),this.devPanel.mount();return}Mt.loadSiblingBundle("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevPanel).then(()=>{this.isConnected&&this.mountDevPanel()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}attachEventListeners(){this.mountDevPanel(),this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(Ui(t,this,()=>this.actionsConfig()),ai(t,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>{this.initializeAnimations(),this.config?.dev_mode&&!this.currentDevCondition&&(this.currentDevCondition="sunny")},100);this.pendingTimeouts.push(i)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),Si(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),Ci(this)),this.devPanel?.updatePauseButton()}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return X(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n)return;this.clearAnimations();let a;if(i.dev_mode)a=this.currentDevCondition||"sunny";else{if(!this.hass||!i.entity)return;let h=this.hass.states[i.entity];if(!h)return;a=h.state.toLowerCase()}let r=Ti(a,i.dev_mode??!1,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone),s=(i.color_palette||"default")==="theme"?"theme-colors":"",l=n.classList.contains("loading"),d=(...h)=>{n.className=["animated-weather-card",r,...h,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},c=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||c){d(i.animate===!1?"static":""),this.currentWeatherClass=r;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(d(),this.animationsPaused){this.currentWeatherClass=r,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(r)),this.startPlanes()}},i.dev_mode?50:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),jn(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(r=>{r.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(je(this),n.querySelectorAll(".star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(Li(i),Fr(i));let a=this.querySelector(".lightning");a&&(a.classList.remove("flash"),a.innerHTML=""),Kn(this.pendingTimeouts)}set hass(t){let i=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),!i){this.render(),this.initializeAnimations();return}if(Pe(i)!==Pe(t)){this.render(),this.initializeAnimations();return}if(this.config.dev_mode||!this.config.entity)return;let n=i.states[this.config.entity],a=t.states[this.config.entity];if(!n||!a){this.render(),this.initializeAnimations();return}if(n.state!==a.state){this._updateDataInPlace(),this.transitionCondition();return}let r=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","friendly_name"];for(let d of l)if(s(n.attributes[d])!==s(a.attributes[d])){r=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(r=!0),!r){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.humidity_sensor_entity,this.config.pressure_sensor_entity,this.config.wind_speed_sensor_entity,this.config.wind_direction_sensor_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity];for(let c of d){if(!c)continue;let h=i.states[c]?.state,m=t.states[c]?.state;if(h!==m){r=!0;break}}}if(r)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";i.states[d]!==t.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass&&!this.config.dev_mode)return;let t;try{t=ra(this._hass,this.config,this.currentDevCondition)}catch{return}let{temperature:i,weatherCondition:n,humidity:a,windSpeed:r,windSpeedValue:s,windBearing:l,pressure:d,pressureValue:c,feelsLike:h,indoorTemperature:m,indoorHumidity:p,sun:g}=t;this.currentWindSpeedValue=s;let u=(v,b)=>{v&&v.textContent!==b&&(v.textContent=b)};this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),n);let f=(v,b)=>{u(this.querySelector(`.weather-attributes .attribute[data-kind="${v}"] .attribute-text`),b)};f("humidity",a),f("wind",r),f("pressure",d),this.syncValueIcon("wind","wind-bearing-arrow",typeof l=="number"?{icon:"mdi:navigation",transform:`rotate(${l+180}deg)`,label:go(l)}:null);let y=this.updatePressureTrend(c);if(this.syncValueIcon("pressure","pressure-trend",y?{icon:yo(y),label:`Pressure ${y}`,className:y}:null),g){let v=this.querySelector('.weather-attributes .attribute[data-kind="sun"]'),b=v?.querySelector(".attribute-text"),T=ti(le(g.aboveHorizon?g.sunset:g.sunrise,this._hass),"awc-ampm");b&&b.innerHTML!==T&&(b.innerHTML=T),u(v?.querySelector(".attribute-label > span")??null,vt(this._hass,g.aboveHorizon?"sunset":"sunrise"));let S=v?.querySelector(".attribute-icon");S&&S.getAttribute("icon")!==ma(g.aboveHorizon)&&S.setAttribute("icon",ma(g.aboveHorizon))}let w=this.querySelector(".compact-meta");w&&u(w,this.compactMeta(t.location,h)),u(this.querySelector(".location"),t.location);let _=this.querySelector(".hero-meta");if(_){let v=this.heroMetaHtml(h,m,p);_.innerHTML!==v&&(_.innerHTML=v)}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(s)}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,i,n){let a=this.querySelector(`.weather-attributes .attribute[data-kind="${t}"] .attribute-value`);if(!a)return;let r=a.querySelector(`.${i}`);if(!n){r?.remove();return}r||(r=document.createElement("ha-icon"),a.appendChild(r)),r.className=[i,n.className].filter(Boolean).join(" "),r.getAttribute("icon")!==n.icon&&r.setAttribute("icon",n.icon),r.setAttribute("aria-label",n.label),r.style.transform=n.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(t.querySelectorAll(".note-long, .note-short")).map(m=>{let p=m.textContent??"",g=document.createElement("span");g.className="note-typed";let u=document.createElement("span");return u.className="note-untyped",u.textContent=p,m.replaceChildren(g,u),{span:m,text:p,typed:g,rest:u}}),n=Math.max(0,...i.map(m=>m.text.length)),a=Math.min(ld,Math.max(sd,n*od)),r=window.requestAnimationFrame?.bind(window)??(m=>window.setTimeout(()=>m(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:i.map(m=>m.text).join(""),finish:()=>{s(d);for(let m of i)m.span.textContent=m.text;this.noteTyping===c&&(this.noteTyping=void 0)}},h=()=>{let m=Math.min(1,(Date.now()-l)/a);for(let p of i){let g=Math.round(m*p.text.length);p.typed.textContent=p.text.slice(0,g),p.rest.textContent=p.text.slice(g)}m<1?d=r(h):c.finish()};this.noteTyping=c,d=r(h)}fadeThrough(t,i,n){if(!t)return;let a=this.heroTextPending.get(t);if((a??t.textContent)===i)return;let r=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||r){t.textContent=i,n?.();return}if(this.heroTextPending.set(t,i),a!==void 0)return;let s=()=>{let d=this.heroTextPending.get(t);this.heroTextPending.delete(t),d!==void 0&&(t.textContent=d),n?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:cd,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:hd,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.config.dev_mode)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){Mt.loadSiblingBundle("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new t(this,{intensity:1,scale:1,devMode:this.config.dev_mode||!1},this.config);this.planes=i,i.start().then(()=>{this.animationsPaused&&i.pause()}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(i=>A(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let i=this.flightTracker.update(Zr(this._hass,this.config.flights_entity));i.length&&this.flyPlanes(i)}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride)?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}disconnectedCallback(){this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.devPanel?.disconnect(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Kn(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new Yi({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(A(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let i=t.attributes?.elevation;return Hi(typeof i=="number"?i:Number(i),!!t.attributes?.rising,t.state!=="below_horizon")}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let i=this.currentSkyPhase();t.dataset.phase!==i&&(t.dataset.phase=i)}applySizeState(){let t=this.querySelector(".animated-weather-card"),i=t?.querySelector(".weather-info");if(!t||!i)return;let n=t.querySelector(".main-weather-info"),a=t.querySelector(".weather-attributes");if(t.dataset.height="regular",a){let c=t.dataset.metrics;t.dataset.metrics="row";let h=Array.from(a.children),m=parseFloat(getComputedStyle(a).columnGap)||0,p=h.reduce((f,y)=>f+y.getBoundingClientRect().width,0)+m*Math.max(0,h.length-1),g=a.clientWidth-p,u=g<-.5||c==="grid"&&g<ud;t.dataset.metrics=u?"grid":"row"}let r=t.dataset.variant==="compact",s=r?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),d=()=>i.scrollHeight>i.clientHeight+1||!r&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1;if(!l||l.hidden){delete t.dataset.note;for(let c of wo)if(t.dataset.height=c,!d())return;return}for(let[c,h]of md)if(t.dataset.height=c,t.dataset.note=h,!d())return}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:this.noteEnabled()?{columns:12,rows:5,min_columns:6,min_rows:3}:{columns:12,rows:4,min_columns:6,min_rows:3}}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Mt.loadSiblingBundle("animated-weather-card-editor",()=>!!customElements.get("animated-weather-card-editor")),document.createElement("animated-weather-card-editor")}static loadSiblingBundle(t,i){let n=Mt.bundleLoads.get(t);if(n)return n;let a=new Promise((r,s)=>{let d=Array.from(document.querySelectorAll("script[src]")).find(m=>/animated-weather-card(?:\.min)?\.js/.test(m.src)),c=d?d.src.replace(/animated-weather-card(\.min)?\.js/,`${t}$1.js`):`${t}.js`,h=document.createElement("script");h.src=c,h.type="module",h.async=!0,h.onload=()=>i()?r():s(new Error(`${c} loaded but registered nothing`)),h.onerror=()=>s(new Error(`Failed to load ${c}`)),document.head.appendChild(h)});return a.catch(()=>Mt.bundleLoads.delete(t)),Mt.bundleLoads.set(t,a),a}};Mt.bundleLoads=new Map;var fa=Mt;customElements.define("animated-weather-card",fa);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(o,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...pa(e,o)}},{label:"Compact",config:{type:"custom:animated-weather-card",...pa(e,o),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let o=Ze("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Sr} `,[`background: linear-gradient(90deg, ${o.top}, ${o.mid} 55%, ${o.bottom})`,`color: ${Rt(xt(Ae))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${o.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
