"use strict";(()=>{function Ft(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Wr(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xe={duration:.5,overwrite:!1,delay:0},bn,it,I,At=1e8,H=1/At,dn=Math.PI*2,Vo=dn/4,qo=0,zr=Math.sqrt,Yo=Math.cos,Uo=Math.sin,J=function(e){return typeof e=="string"},Y=function(e){return typeof e=="function"},zt=function(e){return typeof e=="number"},Si=function(e){return typeof e>"u"},Lt=function(e){return typeof e=="object"},ut=function(e){return e!==!1},vn=function(){return typeof window<"u"},fi=function(e){return Y(e)||J(e)},Rr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},at=Array.isArray,Ko=/random\([^)]+\)/g,jo=/,\s*/g,Er=/(?:-?\.?\d|\.)+/gi,xn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,le=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sn=/[+-]=-?[.\d]+/,Xo=/[^,'"\[\]\s]+/gi,Zo=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,B,Pt,hn,Tn,wt={},wi={},Hr,Nr=function(e){return(wi=xe(e,wt))&&ot},Ti=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ze=function(e,t){return!t&&console.warn(e)},Ir=function(e,t){return e&&(wt[e]=t)&&wi&&(wi[e]=t)||wt},Qe=function(){return 0},Qo={suppressEvents:!0,isStart:!0,kill:!1},pi={suppressEvents:!0,kill:!1},Jo={suppressEvents:!0},Cn={},Bt=[],un={},Gr,dt={},rn={},Mr=30,gi=[],An="",kn=function(e){var t=e[0],i,n;if(Lt(t)||Y(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=gi.length;n--&&!gi[n].targetTest(t););i=gi[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new On(e[n],i)))||e.splice(n,1);return e},Vt=function(e){return e._gsap||kn(kt(e))[0]._gsap},En=function(e,t,i){return(i=e[t])&&Y(i)?e[t]():Si(i)&&e.getAttribute&&e.getAttribute(t)||i},st=function(e,t){return(e=e.split(",")).forEach(t)||e},U=function(e){return Math.round(e*1e5)/1e5||0},G=function(e){return Math.round(e*1e7)/1e7||0},ce=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},ts=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},_i=function(){var e=Bt.length,t=Bt.slice(0),i,n;for(un={},Bt.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Mn=function(e){return!!(e._initted||e._startAt||e.add)},Br=function(e,t,i,n){Bt.length&&!it&&_i(),e.render(t,i,n||!!(it&&t<0&&Mn(e))),Bt.length&&!it&&_i()},Vr=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xo).length<2?t:J(e)?e.trim():e},qr=function(e){return e},_t=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},es=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},xe=function(e,t){for(var i in t)e[i]=t[i];return e},Pr=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Lt(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},bi=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Ue=function(e){var t=e.parent||B,i=e.keyframes?es(at(e.keyframes)):_t;if(ut(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},is=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Yr=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Ci=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},qt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ae=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ns=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mn=function(e,t,i,n){return e._startAt&&(it?e._startAt.revert(pi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},rs=function a(e){return!e||e._ts&&a(e.parent)},Or=function(e){return e._repeat?Se(e._tTime,e=e.duration()+e._rDelay)*e:0},Se=function(e,t){var i=Math.floor(e=G(e/t));return e&&i===e?i-1:i},vi=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ai=function(e){return e._end=G(e._start+(e._tDur/Math.abs(e._ts||e._rts||H)||0))},ki=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=G(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ai(e),i._dirty||ae(i,e)),e},Ur=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=vi(e.rawTime(),t),(!t._dur||ei(0,t.totalDuration(),i)-t._tTime>H)&&t.render(i,!0)),ae(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-H}},Ot=function(e,t,i,n){return t.parent&&qt(t),t._start=G((zt(i)?i:i||e!==B?Ct(e,i,t):e._time)+t._delay),t._end=G(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yr(e,t,"_first","_last",e._sort?"_start":0),fn(t)||(e._recent=t),n||Ur(e,t),e._ts<0&&ki(e,e._tTime),e},Kr=function(e,t){return(wt.ScrollTrigger||Ti("scrollTrigger",t))&&wt.ScrollTrigger.create(t,e)},jr=function(e,t,i,n,r){if($n(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!it&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gr!==ht.frame)return Bt.push(e),e._lazy=[r,n],1},as=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},fn=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},os=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&as(e)&&!(!e._initted&&fn(e))||(e._ts<0||e._dp._ts<0)&&!fn(e))?0:1,s=e._rDelay,l=0,c,d,m;if(s&&e._repeat&&(l=ei(0,e._tDur,t),d=Se(l,s),e._yoyo&&d&1&&(o=1-o),d!==Se(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||it||n||e._zTime===H||!t&&e._zTime){if(!e._initted&&jr(e,t,n,i,l))return;for(m=e._zTime,e._zTime=t||(i?H:0),i||(i=t&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&mn(e,t,i,!0),e._onUpdate&&!i&&yt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qt(e,1),!i&&!it&&(yt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ss=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Te=function(e,t,i,n){var r=e._repeat,o=G(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:G(o*(r+1)+e._rDelay*r):o,s>0&&!n&&ki(e,e._tTime=e._tDur*s),e.parent&&Ai(e),i||ae(e.parent,e),e},Lr=function(e){return e instanceof rt?ae(e):Te(e,e._dur)},ls={_start:0,endTime:Qe,totalDuration:Qe},Ct=function a(e,t,i){var n=e.labels,r=e._recent||ls,o=e.duration()>=At?r.endTime(!1):e._dur,s,l,c;return J(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&i&&(l=l/100*(at(i)?i[0]:i).totalDuration()),s>1?a(e,t.substr(0,s-1),i)+l:o+l)):t==null?o:+t},Ke=function(e,t,i){var n=zt(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],s,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(s=o,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ut(l.vars.inherit)&&l.parent;o.immediateRender=ut(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new j(t[0],o,t[r+1])},Yt=function(e,t){return e||e===0?t(e):t},ei=function(e,t,i){return i<e?e:i>t?t:i},nt=function(e,t){return!J(e)||!(t=Zo.exec(e))?"":t[1]},cs=function(e,t,i){return Yt(i,function(n){return ei(e,t,n)})},pn=[].slice,Xr=function(e,t){return e&&Lt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lt(e[0]))&&!e.nodeType&&e!==Pt},ds=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return J(n)&&!t||Xr(n,1)?(r=i).push.apply(r,kt(n)):i.push(n)})||i},kt=function(e,t,i){return I&&!t&&I.selector?I.selector(e):J(e)&&!i&&(hn||!Ce())?pn.call((t||Tn).querySelectorAll(e),0):at(e)?ds(e,i):Xr(e)?pn.call(e,0):e?[e]:[]},gn=function(e){return e=kt(e)[0]||Ze("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return kt(t,i.querySelectorAll?i:i===e?Ze("Invalid scope")||Tn.createElement("div"):e)}},Zr=function(e){return e.sort(function(){return .5-Math.random()})},Qr=function(e){if(Y(e))return e;var t=Lt(e)?e:{each:e},i=oe(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},s=n>0&&n<1,l=isNaN(n)||s,c=t.axis,d=n,m=n;return J(n)?d=m={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(d=n[0],m=n[1]),function(u,f,g){var h=(g||t).length,p=o[h],w,_,x,b,v,C,y,A,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,At])[1],!T){for(y=-At;y<(y=g[T++].getBoundingClientRect().left)&&T<h;);T<h&&T--}for(p=o[h]=[],w=l?Math.min(T,h)*d-.5:n%T,_=T===At?0:l?h*m/T-.5:n/T|0,y=0,A=At,C=0;C<h;C++)x=C%T-w,b=_-(C/T|0),p[C]=v=c?Math.abs(c==="y"?b:x):zr(x*x+b*b),v>y&&(y=v),v<A&&(A=v);n==="random"&&Zr(p),p.max=y-A,p.min=A,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(T>h?h-1:c?c==="y"?h/T:T:Math.max(T,h/T))||0)*(n==="edges"?-1:1),p.b=h<0?r-h:r,p.u=nt(t.amount||t.each)||0,i=i&&h<0?Ss(i):i}return h=(p[u]-p.min)/p.max||0,G(p.b+(i?i(h):h)*p.v)+p.u}},yn=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=G(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(zt(i)?0:nt(i))}},Jr=function(e,t){var i=at(e),n,r;return!i&&Lt(e)&&(n=i=e.radius||At,e.values?(e=kt(e.values),(r=!zt(e[0]))&&(n*=n)):e=yn(e.increment)),Yt(t,i?Y(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=At,d=0,m=e.length,u,f;m--;)r?(u=e[m].x-s,f=e[m].y-l,u=u*u+f*f):u=Math.abs(e[m]-s),u<c&&(c=u,d=m);return d=!n||c<=n?e[d]:o,r||d===o||zt(o)?d:d+nt(o)}:yn(e))},ta=function(e,t,i,n){return Yt(at(e)?!t:i===!0?!!(i=0):!n,function(){return at(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},hs=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},us=function(e,t){return function(i){return e(parseFloat(i))+(t||nt(i))}},ms=function(e,t,i){return ia(e,t,0,1,i)},ea=function(e,t,i){return Yt(i,function(n){return e[~~t(n)]})},fs=function a(e,t,i){var n=t-e;return at(e)?ea(e,a(0,e.length),t):Yt(i,function(r){return(n+(r-e)%n)%n+e})},ps=function a(e,t,i){var n=t-e,r=n*2;return at(e)?ea(e,a(0,e.length-1),t):Yt(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},Ae=function(e){return e.replace(Ko,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(jo);return ta(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},ia=function(e,t,i,n,r){var o=t-e,s=n-i;return Yt(r,function(l){return i+((l-e)/o*s||0)})},gs=function a(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=J(e),s={},l,c,d,m,u;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(at(e)&&!at(t)){for(d=[],m=e.length,u=m-2,c=1;c<m;c++)d.push(a(e[c-1],e[c]));m--,r=function(g){g*=m;var h=Math.min(u,~~g);return d[h](g-h)},i=t}else n||(e=xe(at(e)?[]:{},e));if(!d){for(l in t)Ln.call(s,e,l,"get",t[l]);r=function(g){return zn(g,s)||(o?e.p:e)}}}return Yt(i,r)},Dr=function(e,t,i){var n=e.labels,r=At,o,s,l;for(o in n)s=n[o]-t,s<0==!!i&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},yt=function(e,t,i){var n=e.vars,r=n[t],o=I,s=e._ctx,l,c,d;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Bt.length&&_i(),s&&(I=s),d=l?r.apply(c,l):r.call(c),I=o,d},qe=function(e){return qt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!it),e.progress()<1&&yt(e,"onInterrupt"),e},ve,na=[],ra=function(e){if(e)if(e=!e.name&&e.default||e,vn()||e.headless){var t=e.name,i=Y(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Qe,render:zn,add:Ln,kill:Ds,modifier:Ls,rawVars:0},o={targetTest:0,get:0,getSetter:Ei,aliases:{},register:0};if(Ce(),e!==n){if(dt[t])return;_t(n,_t(bi(e,r),o)),xe(n.prototype,xe(r,bi(e,o))),dt[n.prop=t]=n,e.targetTest&&(gi.push(n),Cn[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ir(t,n),e.register&&e.register(ot,n,lt)}else na.push(e)},R=255,Ye={aqua:[0,R,R],lime:[0,R,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,R],navy:[0,0,128],white:[R,R,R],olive:[128,128,0],yellow:[R,R,0],orange:[R,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[R,0,0],pink:[R,192,203],cyan:[0,R,R],transparent:[R,R,R,0]},an=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*R+.5|0},aa=function(e,t,i){var n=e?zt(e)?[e>>16,e>>8&R,e&R]:0:Ye.black,r,o,s,l,c,d,m,u,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ye[e])n=Ye[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&R,n&R,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&R,e&R]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Er),!t)l=+n[0]%360/360,c=+n[1]/100,d=+n[2]/100,o=d<=.5?d*(c+1):d+c-d*c,r=d*2-o,n.length>3&&(n[3]*=1),n[0]=an(l+1/3,r,o),n[1]=an(l,r,o),n[2]=an(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(xn),i&&n.length<4&&(n[3]=1),n}else n=e.match(Er)||Ye.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/R,o=n[1]/R,s=n[2]/R,m=Math.max(r,o,s),u=Math.min(r,o,s),d=(m+u)/2,m===u?l=c=0:(f=m-u,c=d>.5?f/(2-m-u):f/(m+u),l=m===r?(o-s)/f+(o<s?6:0):m===o?(s-r)/f+2:(r-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(d*100+.5)),i&&n.length<4&&(n[3]=1),n},oa=function(e){var t=[],i=[],n=-1;return e.split(Wt).forEach(function(r){var o=r.match(le)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},$r=function(e,t,i){var n="",r=(e+n).match(Wt),o=t?"hsla(":"rgba(",s=0,l,c,d,m;if(!r)return e;if(r=r.map(function(u){return(u=aa(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(d=oa(e),l=i.c,l.join(n)!==d.c.join(n)))for(c=e.replace(Wt,"1").split(le),m=c.length-1;s<m;s++)n+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(d.length?d:r.length?r:i).shift());if(!c)for(c=e.split(Wt),m=c.length-1;s<m;s++)n+=c[s]+r[s];return n+c[m]},Wt=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ye)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),ys=/hsl[a]?\(/,Pn=function(e){var t=e.join(" "),i;if(Wt.lastIndex=0,Wt.test(t))return i=ys.test(t),e[1]=$r(e[1],i),e[0]=$r(e[0],i,oa(e[1])),!0},Je,ht=(function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,o=r,s=[],l,c,d,m,u,f,g=function h(p){var w=a()-n,_=p===!0,x,b,v,C;if((w>e||w<0)&&(i+=w-t),n+=w,v=n-i,x=v-o,(x>0||_)&&(C=++m.frame,u=v-m.time*1e3,m.time=v=v/1e3,o+=x+(x>=r?4:r-x),b=1),_||(l=c(h)),b)for(f=0;f<s.length;f++)s[f](v,u,C,p)};return m={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Hr&&(!hn&&vn()&&(Pt=hn=window,Tn=Pt.document||{},wt.gsap=ot,(Pt.gsapVersions||(Pt.gsapVersions=[])).push(ot.version),Nr(wi||Pt.GreenSockGlobals||!Pt.gsap&&Pt||{}),na.forEach(ra)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&m.sleep(),c=d||function(p){return setTimeout(p,o-m.time*1e3+1|0)},Je=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Je=0,c=Qe},lagSmoothing:function(p,w){e=p||1/0,t=Math.min(w||33,e)},fps:function(p){r=1e3/(p||240),o=m.time*1e3+r},add:function(p,w,_){var x=w?function(b,v,C,y){p(b,v,C,y),m.remove(x)}:p;return m.remove(p),s[_?"unshift":"push"](x),Ce(),x},remove:function(p,w){~(w=s.indexOf(p))&&s.splice(w,1)&&f>=w&&f--},_listeners:s},m})(),Ce=function(){return!Je&&ht.wake()},L={},ws=/^[\d.\-M][\d.\-,\s]/,_s=/["']/g,bs=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,s,l,c;r<o;r++)l=i[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[n]=isNaN(c)?c.replace(_s,"").trim():+c,n=l.substr(s+1).trim();return t},vs=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},xs=function(e){var t=(e+"").split("("),i=L[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[bs(t[1])]:vs(e).split(",").map(Vr)):L._CE&&ws.test(e)?L._CE("",e):i},Ss=function(e){return function(t){return 1-e(1-t)}},oe=function(e,t){return e&&(Y(e)?e:L[e]||xs(e))||t},de=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return st(e,function(s){L[s]=wt[s]=r,L[o=s.toLowerCase()]=i;for(var l in r)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=r[l]}),r},sa=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},on=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/dn*(Math.asin(1/n)||0),s=function(d){return d===1?1:n*Math.pow(2,-10*d)*Uo((d-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:sa(s);return r=dn/r,l.config=function(c,d){return a(e,c,d)},l},sn=function a(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:sa(i);return n.config=function(r){return a(e,r)},n};st("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;de(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;de("Elastic",on("in"),on("out"),on());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(s){return s<t?a*s*s:s<i?a*Math.pow(s-1.5/e,2)+.75:s<n?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};de("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);de("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});de("Circ",function(a){return-(zr(1-a*a)-1)});de("Sine",function(a){return a===1?1:-Yo(a*Vo)+1});de("Back",sn("in"),sn("out"),sn());L.SteppedEase=L.steps=wt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-H;return function(s){return((n*ei(0,o,s)|0)+r)*i}}};Xe.ease=L["quad.out"];st("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return An+=a+","+a+"Params,"});var On=function(e,t){this.id=qo++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:En,this.set=t?t.getSetter:Ei},ti=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Te(this,+t.duration,1,1),this.data=t.data,I&&(this._ctx=I,I.data.push(this)),Je||ht.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Te(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Ce(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ki(this,i),!r._dp||r.parent||Ur(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ot(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===H||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Br(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Or(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Or(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Se(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-H?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?vi(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-H?0:this._rts,this.totalTime(ei(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Ai(this),ns(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ce(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==H&&(this._tTime-=H)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=G(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Ot(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ut(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vi(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Jo);var n=it;return it=i,Mn(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),it=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Lr(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Lr(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Ct(this,i),ut(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ut(n)),this._dur||(this._zTime=-H),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-H:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-H,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-H)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var s=Y(i)?i:qr,l=function(){var d=n.then;n.then=null,r&&r(),Y(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=d),o(s),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){qe(this)},a})();_t(ti.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-H,_prom:0,_ps:!1,_rts:1});var rt=(function(a){Wr(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ut(i.sortChildren),B&&Ot(i.parent||B,Ft(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Kr(Ft(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return Ke(0,arguments,this),this},t.from=function(n,r,o){return Ke(1,arguments,this),this},t.fromTo=function(n,r,o,s){return Ke(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,Ue(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new j(n,r,Ct(this,o),1),this},t.call=function(n,r,o){return Ot(this,j.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,s,l,c,d){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=d,o.parent=this,new j(n,o,Ct(this,l)),this},t.staggerFrom=function(n,r,o,s,l,c,d){return o.runBackwards=1,Ue(o).immediateRender=ut(o.immediateRender),this.staggerTo(n,r,o,s,l,c,d)},t.staggerFromTo=function(n,r,o,s,l,c,d,m){return s.startAt=o,Ue(s).immediateRender=ut(s.immediateRender),this.staggerTo(n,r,s,l,c,d,m)},t.render=function(n,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=n<=0?0:G(n),m=this._zTime<0!=n<0&&(this._initted||!c),u,f,g,h,p,w,_,x,b,v,C,y;if(this!==B&&d>l&&n>=0&&(d=l),d!==this._tTime||o||m){if(s!==this._time&&c&&(d+=this._time-s,n+=this._time-s),u=d,b=this._start,x=this._ts,w=!x,m&&(c||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,o);if(u=G(d%p),d===l?(h=this._repeat,u=c):(v=G(d/p),h=~~v,h&&h===v&&(u=c,h--),u>c&&(u=c)),v=Se(this._tTime,p),!s&&this._tTime&&v!==h&&this._tTime-v*p-this._dur<=0&&(v=h),C&&h&1&&(u=c-u,y=1),h!==v&&!this._lock){var A=C&&v&1,T=A===(C&&h&1);if(h<v&&(A=!A),s=A?0:d%c?c:d,this._lock=1,this.render(s||(y?0:G(h*p)),r,!c)._lock=0,this._tTime=d,!r&&this.parent&&yt(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,v=h),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,s=A?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=ss(this,G(s),G(u)),_&&(d-=u-(u=_._start))),this._tTime=d,this._time=u,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&d&&c&&!r&&!v&&(yt(this,"onStart"),this._tTime!==d))return this;if(u>=s&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&_!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!w){_=0,g&&(d+=this._zTime=-H);break}}f=g}else{f=this._last;for(var S=n<0?n:u;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&_!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,o||it&&Mn(f)),u!==this._time||!this._ts&&!w){_=0,g&&(d+=this._zTime=S?-H:H);break}}f=g}}if(_&&!r&&(this.pause(),_.render(u>=s?0:-H)._zTime=u>=s?1:-1,this._ts))return this._start=b,Ai(this),this.render(n,r,o);this._onUpdate&&!r&&yt(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&s)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&qt(this,1),!r&&!(n<0&&!s)&&(d||s||!l)&&(yt(this,d===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(zt(r)||(r=Ct(this,r,n)),!(n instanceof ti)){if(at(n))return n.forEach(function(s){return o.add(s,r)}),this;if(J(n))return this.addLabel(n,r);if(Y(n))n=j.delayedCall(0,n);else return this}return this!==n?Ot(this,n,r):this},t.getChildren=function(n,r,o,s){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-At);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof j?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return J(n)?this.removeLabel(n):Y(n)?this.killTweensOf(n):(n.parent===this&&Ci(this,n),n===this._recent&&(this._recent=this._last),ae(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=G(ht.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Ct(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var s=j.delayedCall(0,r||Qe,o);return s.data="isPause",this._hasPause=1,Ot(this,s,Ct(this,n))},t.removePause=function(n){var r=this._first;for(n=Ct(this,n);r;)r._start===n&&r.data==="isPause"&&qt(r),r=r._next},t.killTweensOf=function(n,r,o){for(var s=this.getTweensOf(n,o),l=s.length;l--;)Gt!==s[l]&&s[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],s=kt(n),l=this._first,c=zt(r),d;l;)l instanceof j?ts(l._targets,s)&&(c?(!Gt||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(d=l.getTweensOf(s,r)).length&&o.push.apply(o,d),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,s=Ct(o,n),l=r,c=l.startAt,d=l.onStart,m=l.onStartParams,u=l.immediateRender,f,g=j.to(o,_t({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||H,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Te(g,p,0,1).render(g._time,!0,!0),f=1}d&&d.apply(g,m||[])}},r));return u?g.render(0):g},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,_t({startAt:{time:Ct(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Dr(this,Ct(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Dr(this,Ct(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+H)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,c;for(n=G(n);s;)s._start>=o&&(s._start+=n,s._end+=n),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return ae(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ae(this)},t.totalDuration=function(n){var r=0,o=this,s=o._last,l=At,c,d,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(m=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Ot(o,s,d-s._delay,1)._lock=0):l=d,d<0&&s._ts&&(r-=d,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=G(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Te(o,o===B&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(B._ts&&(Br(B,vi(n,B)),Gr=ht.frame),ht.frame>=Mr){Mr+=mt.autoSleep||120;var r=B._first;if((!r||!r._ts)&&mt.autoSleep&&ht._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ht.sleep()}}},e})(ti);_t(rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ts=function(e,t,i,n,r,o,s){var l=new lt(this._pt,e,t,0,1,Wn,null,r),c=0,d=0,m,u,f,g,h,p,w,_;for(l.b=i,l.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=Ae(n)),o&&(_=[i,n],o(_,e,t),i=_[0],n=_[1]),u=i.match(nn)||[];m=nn.exec(n);)g=m[0],h=n.substring(c,m.index),f?f=(f+1)%5:h.substr(-5)==="rgba("&&(f=1),g!==u[d++]&&(p=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:p,c:g.charAt(1)==="="?ce(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=nn.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=s,(Sn.test(n)||w)&&(l.e=0),this._pt=l,l},Ln=function(e,t,i,n,r,o,s,l,c,d){Y(n)&&(n=n(r||0,e,o));var m=e[t],u=i!=="get"?i:Y(m)?c?e[t.indexOf("set")||!Y(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():m,f=Y(m)?c?Ms:da:Fn,g;if(J(n)&&(~n.indexOf("random(")&&(n=Ae(n)),n.charAt(1)==="="&&(g=ce(u,n)+(nt(u)||0),(g||g===0)&&(n=g))),!d||u!==n||wn)return!isNaN(u*n)&&n!==""?(g=new lt(this._pt,e,t,+u||0,n-(u||0),typeof m=="boolean"?Os:ha,0,f),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!m&&!(t in e)&&Ti(t,n),Ts.call(this,e,t,u,n,f,l||mt.stringFilter,c))},Cs=function(e,t,i,n,r){if(Y(e)&&(e=je(e,r,t,i,n)),!Lt(e)||e.style&&e.nodeType||at(e)||Rr(e))return J(e)?je(e,r,t,i,n):e;var o={},s;for(s in e)o[s]=je(e[s],r,t,i,n);return o},Dn=function(e,t,i,n,r,o){var s,l,c,d;if(dt[e]&&(s=new dt[e]).init(r,s.rawVars?t[e]:Cs(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new lt(i._pt,r,e,0,1,s.render,s,0,s.priority),i!==ve))for(c=i._ptLookup[i._targets.indexOf(r)],d=s._props.length;d--;)c[s._props[d]]=l;return s},Gt,wn,$n=function a(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,s=n.immediateRender,l=n.lazy,c=n.onUpdate,d=n.runBackwards,m=n.yoyoEase,u=n.keyframes,f=n.autoRevert,g=e._dur,h=e._startAt,p=e._targets,w=e.parent,_=w&&w.data==="nested"?w.vars.targets:p,x=e._overwrite==="auto"&&!bn,b=e.timeline,v=n.easeReverse||m,C,y,A,T,S,E,P,O,$,W,F,z,q;if(b&&(!u||!r)&&(r="none"),e._ease=oe(r,Xe.ease),e._rEase=v&&(oe(v)||e._ease),e._from=!b&&!!n.runBackwards,e._from&&(e.ratio=1),!b||u&&!n.stagger){if(O=p[0]?Vt(p[0]).harness:0,z=O&&n[O.prop],C=bi(n,Cn),h&&(h._zTime<0&&h.progress(1),t<0&&d&&s&&!f?h.render(-1,!0):h.revert(d&&g?pi:Qo),h._lazy=0),o){if(qt(e._startAt=j.set(p,_t({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!h&&ut(l),startAt:null,delay:0,onUpdate:c&&function(){return yt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(it||!s&&!f)&&e._startAt.revert(pi),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&g&&!h){if(t&&(s=!1),A=_t({overwrite:!1,data:"isFromStart",lazy:s&&!h&&ut(l),immediateRender:s,stagger:0,parent:w},C),z&&(A[O.prop]=z),qt(e._startAt=j.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(it?e._startAt.revert(pi):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,H,H);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ut(l)||l&&!g,y=0;y<p.length;y++){if(S=p[y],P=S._gsap||kn(p)[y]._gsap,e._ptLookup[y]=W={},un[P.id]&&Bt.length&&_i(),F=_===p?y:_.indexOf(S),O&&($=new O).init(S,z||C,e,F,_)!==!1&&(e._pt=T=new lt(e._pt,S,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(St){W[St]=T}),$.priority&&(E=1)),!O||z)for(A in C)dt[A]&&($=Dn(A,C,e,F,S,_))?$.priority&&(E=1):W[A]=T=Ln.call(e,S,A,"get",C[A],F,_,0,n.stringFilter);e._op&&e._op[y]&&e.kill(S,e._op[y]),x&&e._pt&&(Gt=e,B.killTweensOf(S,W,e.globalTime(t)),q=!e.parent,Gt=0),e._pt&&l&&(un[P.id]=1)}E&&Rn(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,u&&t<=0&&b.render(At,!0,!0)},As=function(e,t,i,n,r,o,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,m,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return wn=1,e.vars[t]="+=0",$n(e,s),wn=0,l?Ze(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(f=c.length;f--;)m=c[f],d=m._pt||m,d.s=(n||n===0)&&!r?n:d.s+(n||0)+o*d.c,d.c=i-d.s,m.e&&(m.e=U(i)+nt(m.e)),m.b&&(m.b=d.s+nt(m.b))},ks=function(e,t){var i=e[0]?Vt(e[0]).harness:0,n=i&&i.aliases,r,o,s,l;if(!n)return t;r=xe({},t);for(o in n)if(o in r)for(l=n[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},Es=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,s;if(at(t))s=i[e]||(i[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},je=function(e,t,i,n,r){return Y(e)?e.call(t,i,n,r):J(e)&&~e.indexOf("random(")?Ae(e):e},la=An+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ca={};st(la+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return ca[a]=1});var j=(function(a){Wr(e,a);function e(i,n,r,o){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=a.call(this,o?n:Ue(n))||this;var l=s.vars,c=l.duration,d=l.delay,m=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,h=l.defaults,p=l.scrollTrigger,w=n.parent||B,_=(at(i)||Rr(i)?zt(i[0]):"length"in n)?[i]:kt(i),x,b,v,C,y,A,T,S;if(s._targets=_.length?kn(_):Ze("GSAP target "+i+" not found. https://gsap.com",!mt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||u||fi(c)||fi(d)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(x=s.timeline=new rt({data:"nested",defaults:h||{},targets:w&&w.data==="nested"?w.vars.targets:_}),x.kill(),x.parent=x._dp=Ft(s),x._start=0,u||fi(c)||fi(d)){if(C=_.length,T=u&&Qr(u),Lt(u))for(y in u)~la.indexOf(y)&&(S||(S={}),S[y]=u[y]);for(b=0;b<C;b++)v=bi(n,ca),v.stagger=0,E&&(v.easeReverse=E),S&&xe(v,S),A=_[b],v.duration=+je(c,Ft(s),b,A,_),v.delay=(+je(d,Ft(s),b,A,_)||0)-s._delay,!u&&C===1&&v.delay&&(s._delay=d=v.delay,s._start+=d,v.delay=0),x.to(A,v,T?T(b,A,_):0),x._ease=L.none;x.duration()?c=d=0:s.timeline=0}else if(g){Ue(_t(x.vars.defaults,{ease:"none"})),x._ease=oe(g.ease||n.ease||"none");var P=0,O,$,W;if(at(g))g.forEach(function(F){return x.to(_,F,">")}),x.duration();else{v={};for(y in g)y==="ease"||y==="easeEach"||Es(y,g[y],v,g.easeEach);for(y in v)for(O=v[y].sort(function(F,z){return F.t-z.t}),P=0,b=0;b<O.length;b++)$=O[b],W={ease:$.e,duration:($.t-(b?O[b-1].t:0))/100*c},W[y]=$.v,x.to(_,W,P),P+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||s.duration(c=x.duration())}else s.timeline=0;return f===!0&&!bn&&(Gt=Ft(s),B.killTweensOf(_),Gt=0),Ot(w,Ft(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(m||!c&&!g&&s._start===G(w._time)&&ut(m)&&rs(Ft(s))&&w.data!=="nested")&&(s._tTime=-H,s.render(Math.max(0,-d)||0)),p&&Kr(Ft(s),p),s}var t=e.prototype;return t.render=function(n,r,o){var s=this._time,l=this._tDur,c=this._dur,d=n<0,m=n>l-H&&!d?l:n<H?0:n,u,f,g,h,p,w,_,x;if(!c)os(this,n,r,o);else if(m!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=m,x=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+n,r,o);if(u=G(m%h),m===l?(g=this._repeat,u=c):(p=G(m/h),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),w=this._yoyo&&g&1,w&&(u=c-u),p=Se(this._tTime,h),u===s&&!o&&this._initted&&g===p)return this._tTime=m,this;g!==p&&this.vars.repeatRefresh&&!w&&!this._lock&&u!==h&&this._initted&&(this._lock=o=1,this.render(G(h*g),!0).invalidate()._lock=0)}if(!this._initted){if(jr(this,d?n:u,o,r,m))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var b=u<s;if(b!==this._inv){var v=b?s:c-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=_=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=_=this._ease(u/c);if(this._from&&(this.ratio=_=1-_),this._tTime=m,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&m&&!r&&!p&&(yt(this,"onStart"),this._tTime!==m))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;x&&x.render(n<0?n:x._dur*x._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(d&&mn(this,n,r,o),yt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&yt(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(d&&!this._onUpdate&&mn(this,n,!0,!0),(n||!c)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&qt(this,1),!r&&!(d&&!s)&&(m||s||w)&&(yt(this,m===l?"onComplete":"onReverseComplete",!0),this._prom&&!(m<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,s,l){Je||ht.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||$n(this,c),d=this._ease(c/this._dur),As(this,n,r,o,s,d,c,l)?this.resetTo(n,r,o,s,1):(ki(this,0),this.parent||Yr(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qe(this):this.scrollTrigger&&this.scrollTrigger.kill(!!it),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Gt&&Gt.vars.overwrite!==!0)._first||qe(this),this.parent&&o!==this.timeline.totalDuration()&&Te(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=n?kt(n):s,c=this._ptLookup,d=this._pt,m,u,f,g,h,p,w;if((!r||r==="all")&&is(s,l))return r==="all"&&(this._pt=0),qe(this);for(m=this._op=this._op||[],r!=="all"&&(J(r)&&(h={},st(r,function(_){return h[_]=1}),r=h),r=ks(s,r)),w=s.length;w--;)if(~l.indexOf(s[w])){u=c[w],r==="all"?(m[w]=r,g=u,f={}):(f=m[w]=m[w]||{},g=r);for(h in g)p=u&&u[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&Ci(this,p,"_pt"),delete u[h]),f!=="all"&&(f[h]=1)}return this._initted&&!this._pt&&d&&qe(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Ke(1,arguments)},e.delayedCall=function(n,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(n,r,o){return Ke(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return B.killTweensOf(n,r,o)},e})(ti);_t(j.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});st("staggerTo,staggerFrom,staggerFromTo",function(a){j[a]=function(){var e=new rt,t=pn.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Fn=function(e,t,i){return e[t]=i},da=function(e,t,i){return e[t](i)},Ms=function(e,t,i,n){return e[t](n.fp,i)},Ps=function(e,t,i){return e.setAttribute(t,i)},Ei=function(e,t){return Y(e[t])?da:Si(e[t])&&e.setAttribute?Ps:Fn},ha=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Os=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wn=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},zn=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Ls=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},Ds=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ci(this,t,"_pt"):t.dep||(i=1),t=n;return!i},$s=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Rn=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},lt=(function(){function a(t,i,n,r,o,s,l,c,d){this.t=i,this.s=r,this.c=o,this.p=n,this.r=s||ha,this.d=l||this,this.set=c||Fn,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=$s,this.m=i,this.mt=r,this.tween=n},a})();st(An+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Cn[a]=1});wt.TweenMax=wt.TweenLite=j;wt.TimelineLite=wt.TimelineMax=rt;B=new rt({sortChildren:!1,defaults:Xe,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mt.stringFilter=Pn;var se=[],yi={},Fs=[],Fr=0,Ws=0,ln=function(e){return(yi[e]||Fs).map(function(t){return t()})},_n=function(){var e=Date.now(),t=[];e-Fr>2&&(ln("matchMediaInit"),se.forEach(function(i){var n=i.queries,r=i.conditions,o,s,l,c;for(s in n)o=Pt.matchMedia(n[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,c=1);c&&(i.revert(),l&&t.push(i))}),ln("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Fr=e,ln("matchMedia"))},ua=(function(){function a(t,i){this.selector=i&&gn(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Ws++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){Y(i)&&(r=n,n=i,i=Y);var o=this,s=function(){var c=I,d=o.selector,m;return c&&c!==o&&c.data.push(o),r&&(o.selector=gn(r)),I=o,m=n.apply(o,arguments),Y(m)&&o._r.push(m),I=c,o.selector=d,o.isReverted=!1,m};return o.last=s,i===Y?s(o,function(l){return o.add(null,l)}):i?o[i]=s:s},e.ignore=function(i){var n=I;I=null,i(this),I=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof j&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,m){return m.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof rt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof j)&&c.revert&&c.revert(i);r._r.forEach(function(d){return d(i,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var o=se.length;o--;)se[o].id===this.id&&se.splice(o,1)},e.revert=function(i){this.kill(i||{})},a})(),zs=(function(){function a(t){this.contexts=[],this.scope=t,I&&I.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){Lt(i)||(i={matches:i});var o=new ua(0,r||this.scope),s=o.conditions={},l,c,d;I&&!o.selector&&(o.selector=I.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?d=1:(l=Pt.matchMedia(i[c]),l&&(se.indexOf(o)<0&&se.push(o),(s[c]=l.matches)&&(d=1),l.addListener?l.addListener(_n):l.addEventListener("change",_n)));return d&&n(o,function(m){return o.add(null,m)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a})(),xi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return ra(n)})},timeline:function(e){return new rt(e)},getTweensOf:function(e,t){return B.getTweensOf(e,t)},getProperty:function(e,t,i,n){J(e)&&(e=kt(e)[0]);var r=Vt(e||{}).get,o=i?qr:Vr;return i==="native"&&(i=""),e&&(t?o((dt[t]&&dt[t].get||r)(e,t,i,n)):function(s,l,c){return o((dt[s]&&dt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,i){if(e=kt(e),e.length>1){var n=e.map(function(d){return ot.quickSetter(d,t,i)}),r=n.length;return function(d){for(var m=r;m--;)n[m](d)}}e=e[0]||{};var o=dt[t],s=Vt(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(d){var m=new o;ve._pt=0,m.init(e,i?d+i:d,ve,0,[e]),m.render(1,m),ve._pt&&zn(1,ve)}:s.set(e,l);return o?c:function(d){return c(e,l,i?d+i:d,s,1)}},quickTo:function(e,t,i){var n,r=ot.to(e,_t((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,d){return r.resetTo(t,l,c,d)};return o.tween=r,o},isTweening:function(e){return B.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=oe(e.ease,Xe.ease)),Pr(Xe,e||{})},config:function(e){return Pr(mt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!dt[s]&&!wt[s]&&Ze(t+" effect requires "+s+" plugin.")}),rn[t]=function(s,l,c){return i(kt(s),_t(l||{},r),c)},o&&(rt.prototype[t]=function(s,l,c){return this.add(rn[t](s,Lt(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){L[e]=oe(t)},parseEase:function(e,t){return arguments.length?oe(e,t):L},getById:function(e){return B.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new rt(e),n,r;for(i.smoothChildTiming=ut(e.smoothChildTiming),B.remove(i),i._dp=0,i._time=i._tTime=B._time,n=B._first;n;)r=n._next,(t||!(!n._dur&&n instanceof j&&n.vars.onComplete===n._targets[0]))&&Ot(i,n,n._start-n._delay),n=r;return Ot(B,i,0),i},context:function(e,t){return e?new ua(e,t):I},matchMedia:function(e){return new zs(e)},matchMediaRefresh:function(){return se.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||_n()},addEventListener:function(e,t){var i=yi[e]||(yi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yi[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:fs,wrapYoyo:ps,distribute:Qr,random:ta,snap:Jr,normalize:ms,getUnit:nt,clamp:cs,splitColor:aa,toArray:kt,selector:gn,mapRange:ia,pipe:hs,unitize:us,interpolate:gs,shuffle:Zr},install:Nr,effects:rn,ticker:ht,updateRoot:rt.updateRoot,plugins:dt,globalTimeline:B,core:{PropTween:lt,globals:Ir,Tween:j,Timeline:rt,Animation:ti,getCache:Vt,_removeLinkedListItem:Ci,reverting:function(){return it},context:function(e){return e&&I&&(I.data.push(e),e._ctx=I),I},suppressOverwrites:function(e){return bn=e}}};st("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return xi[a]=j[a]});ht.add(rt.updateRoot);ve=xi.to({},{duration:0});var Rs=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Hs=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Rs(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},cn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(s){var l,c;if(J(r)&&(l={},st(r,function(d){return l[d]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Hs(s,r)}}}},ot=xi.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,s,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)it?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},cn("roundProps",yn),cn("modifiers"),cn("snap",Jr))||xi;j.version=rt.version=ot.version="3.15.0";Hr=1;vn()&&Ce();var Ns=L.Power0,Is=L.Power1,Gs=L.Power2,Bs=L.Power3,Vs=L.Power4,qs=L.Linear,Ys=L.Quad,Us=L.Cubic,Ks=L.Quart,js=L.Quint,Xs=L.Strong,Zs=L.Elastic,Qs=L.Back,Js=L.SteppedEase,tl=L.Bounce,el=L.Sine,il=L.Expo,nl=L.Circ;var ma,Ut,Ee,Vn,fe,rl,fa,qn,al=function(){return typeof window<"u"},Ht={},me=180/Math.PI,Me=Math.PI/180,ke=Math.atan2,pa=1e8,Yn=/([A-Z])/g,ol=/(left|right|width|margin|padding|x)/i,sl=/[\s,\(]\S/,Dt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ll=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cl=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dl=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hl=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Sa=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ta=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ul=function(e,t,i){return e.style[t]=i},ml=function(e,t,i){return e.style.setProperty(t,i)},fl=function(e,t,i){return e._gsap[t]=i},pl=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},gl=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},yl=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},V="transform",ft=V+"Origin",wl=function a(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in Ht&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Dt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Rt(n,s)}):this.tfm[e]=o.x?o[e]:Rt(n,e),e===ft&&(this.tfm.zOrigin=o.zOrigin);else return Dt.transform.split(",").forEach(function(s){return a.call(i,s,t)});if(this.props.indexOf(V)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ft,t,"")),e=V}(r||t)&&this.props.push(e,t,r[e])},Ca=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_l=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Yn,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=qn(),(!r||!r.isStart)&&!i[V]&&(Ca(i),n.zOrigin&&i[ft]&&(i[ft]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Aa=function(e,t){var i={target:e,props:[],revert:_l,save:wl};return e._gsap||ot.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},ka,In=function(e,t){var i=Ut.createElementNS?Ut.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ut.createElement(e);return i&&i.style?i:Ut.createElement(e)},bt=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Yn,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,Pe(t)||t,1)||""},ga="O,Moz,ms,Ms,Webkit".split(","),Pe=function(e,t,i){var n=t||fe,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ga[o]+e in r););return o<0?null:(o===3?"ms":o>=0?ga[o]:"")+e},Gn=function(){al()&&window.document&&(ma=window,Ut=ma.document,Ee=Ut.documentElement,fe=In("div")||{style:{}},rl=In("div"),V=Pe(V),ft=V+"Origin",fe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ka=!!Pe("perspective"),qn=ot.core.reverting,Vn=1)},ya=function(e){var t=e.ownerSVGElement,i=In("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Ee.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Ee.removeChild(i),r},wa=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ea=function(e){var t,i;try{t=e.getBBox()}catch{t=ya(e),i=1}return t&&(t.width||t.height)||i||(t=ya(e)),t&&!t.width&&!t.x&&!t.y?{x:+wa(e,["x","cx","x1"])||0,y:+wa(e,["y","cy","y1"])||0,width:0,height:0}:t},Ma=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ea(e))},jt=function(e,t){if(t){var i=e.style,n;t in Ht&&t!==ft&&(t=V),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Yn,"-$1").toLowerCase())):i.removeAttribute(t)}},Kt=function(e,t,i,n,r,o){var s=new lt(e._pt,t,i,0,1,o?Ta:Sa);return e._pt=s,s.b=n,s.e=r,e._props.push(i),s},_a={deg:1,rad:1,turn:1},bl={grid:1,flex:1},Xt=function a(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",s=fe.style,l=ol.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),m=100,u=n==="px",f=n==="%",g,h,p,w;if(n===o||!r||_a[n]||_a[o])return r;if(o!=="px"&&!u&&(r=a(e,t,i,"px")),w=e.getCTM&&Ma(e),(f||o==="%")&&(Ht[t]||~t.indexOf("adius")))return g=w?e.getBBox()[l?"width":"height"]:e[d],U(f?r/g*m:r/100*g);if(s[l?"width":"height"]=m+(u?o:n),h=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,w&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Ut||!h.appendChild)&&(h=Ut.body),p=h._gsap,p&&f&&p.width&&l&&p.time===ht.time&&!p.uncache)return U(r/p.width*m);if(f&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=m+n,g=e[d],_?e.style[t]=_:jt(e,t)}else(f||o==="%")&&!bl[bt(h,"display")]&&(s.position=bt(e,"position")),h===e&&(s.position="static"),h.appendChild(fe),g=fe[d],h.removeChild(fe),s.position="absolute";return l&&f&&(p=Vt(h),p.time=ht.time,p.width=h[d]),U(u?g*r/m:g&&r?m/g*r:0)},Rt=function(e,t,i,n){var r;return Vn||Gn(),t in Dt&&t!=="transform"&&(t=Dt[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ht[t]&&t!=="transform"?(r=ri(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Pi(bt(e,ft))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Mi[t]&&Mi[t](e,t,i)||bt(e,t)||En(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Xt(e,t,r,i)+i:r},vl=function(e,t,i,n){if(!i||i==="none"){var r=Pe(t,e,1),o=r&&bt(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=bt(e,"borderTopColor"))}var s=new lt(this._pt,e.style,t,0,1,Wn),l=0,c=0,d,m,u,f,g,h,p,w,_,x,b,v;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=bt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(h=e.style[t],e.style[t]=n,n=bt(e,t)||n,h?e.style[t]=h:jt(e,t)),d=[i,n],Pn(d),i=d[0],n=d[1],u=i.match(le)||[],v=n.match(le)||[],v.length){for(;m=le.exec(n);)p=m[0],_=n.substring(l,m.index),g?g=(g+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(g=1),p!==(h=u[c++]||"")&&(f=parseFloat(h)||0,b=h.substr((f+"").length),p.charAt(1)==="="&&(p=ce(f,p)+b),w=parseFloat(p),x=p.substr((w+"").length),l=le.lastIndex-x.length,x||(x=x||mt.units[t]||b,l===n.length&&(n+=x,s.e+=x)),b!==x&&(f=Xt(e,t,h,x)||0),s._pt={_next:s._pt,p:_||c===1?_:",",s:f,c:w-f,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=t==="display"&&n==="none"?Ta:Sa;return Sn.test(n)&&(s.e=0),this._pt=s,s},ba={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xl=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=ba[i]||i,t[1]=ba[n]||n,t.join(" ")},Sl=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,s,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Ht[s]&&(l=1,s=s==="transformOrigin"?ft:V),jt(i,s);l&&(jt(i,V),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",ri(i,1),o.uncache=1,Ca(n)))}},Mi={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new lt(e._pt,t,i,0,0,Sl);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},ni=[1,0,0,1,0,0],Pa={},Oa=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},va=function(e){var t=bt(e,V);return Oa(t)?ni:t.substr(7).match(xn).map(U)},Un=function(e,t){var i=e._gsap||Vt(e),n=e.style,r=va(e),o,s,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ni:r):(r===ni&&!e.offsetParent&&e!==Ee&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,Ee.appendChild(e)),r=va(e),l?n.display=l:jt(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):Ee.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Bn=function(e,t,i,n,r,o){var s=e._gsap,l=r||Un(e,!0),c=s.xOrigin||0,d=s.yOrigin||0,m=s.xOffset||0,u=s.yOffset||0,f=l[0],g=l[1],h=l[2],p=l[3],w=l[4],_=l[5],x=t.split(" "),b=parseFloat(x[0])||0,v=parseFloat(x[1])||0,C,y,A,T;i?l!==ni&&(y=f*p-g*h)&&(A=b*(p/y)+v*(-h/y)+(h*_-p*w)/y,T=b*(-g/y)+v*(f/y)-(f*_-g*w)/y,b=A,v=T):(C=Ea(e),b=C.x+(~x[0].indexOf("%")?b/100*C.width:b),v=C.y+(~(x[1]||x[0]).indexOf("%")?v/100*C.height:v)),n||n!==!1&&s.smooth?(w=b-c,_=v-d,s.xOffset=m+(w*f+_*h)-w,s.yOffset=u+(w*g+_*p)-_):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[ft]="0px 0px",o&&(Kt(o,s,"xOrigin",c,b),Kt(o,s,"yOrigin",d,v),Kt(o,s,"xOffset",m,s.xOffset),Kt(o,s,"yOffset",u,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},ri=function(e,t){var i=e._gsap||new On(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",s="deg",l=getComputedStyle(e),c=bt(e,ft)||"0",d,m,u,f,g,h,p,w,_,x,b,v,C,y,A,T,S,E,P,O,$,W,F,z,q,St,N,Q,X,ct,gt,Tt;return d=m=u=h=p=w=_=x=b=0,f=g=1,i.svg=!!(e.getCTM&&Ma(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[V]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[V]!=="none"?l[V]:"")),n.scale=n.rotate=n.translate="none"),y=Un(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Bn(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,y)),v=i.xOrigin||0,C=i.yOrigin||0,y!==ni&&(E=y[0],P=y[1],O=y[2],$=y[3],d=W=y[4],m=F=y[5],y.length===6?(f=Math.sqrt(E*E+P*P),g=Math.sqrt($*$+O*O),h=E||P?ke(P,E)*me:0,_=O||$?ke(O,$)*me+h:0,_&&(g*=Math.abs(Math.cos(_*Me))),i.svg&&(d-=v-(v*E+C*O),m-=C-(v*P+C*$))):(Tt=y[6],ct=y[7],N=y[8],Q=y[9],X=y[10],gt=y[11],d=y[12],m=y[13],u=y[14],A=ke(Tt,X),p=A*me,A&&(T=Math.cos(-A),S=Math.sin(-A),z=W*T+N*S,q=F*T+Q*S,St=Tt*T+X*S,N=W*-S+N*T,Q=F*-S+Q*T,X=Tt*-S+X*T,gt=ct*-S+gt*T,W=z,F=q,Tt=St),A=ke(-O,X),w=A*me,A&&(T=Math.cos(-A),S=Math.sin(-A),z=E*T-N*S,q=P*T-Q*S,St=O*T-X*S,gt=$*S+gt*T,E=z,P=q,O=St),A=ke(P,E),h=A*me,A&&(T=Math.cos(A),S=Math.sin(A),z=E*T+P*S,q=W*T+F*S,P=P*T-E*S,F=F*T-W*S,E=z,W=q),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,w=180-w),f=U(Math.sqrt(E*E+P*P+O*O)),g=U(Math.sqrt(F*F+Tt*Tt)),A=ke(W,F),_=Math.abs(A)>2e-4?A*me:0,b=gt?1/(gt<0?-gt:gt):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Oa(bt(e,V)),z&&e.setAttribute("transform",z))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(f*=-1,_+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=U(f),i.scaleY=U(g),i.rotation=U(h)+s,i.rotationX=U(p)+s,i.rotationY=U(w)+s,i.skewX=_+s,i.skewY=x+s,i.transformPerspective=b+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[ft]=Pi(c)),i.xOffset=i.yOffset=0,i.force3D=mt.force3D,i.renderTransform=i.svg?Cl:ka?La:Tl,i.uncache=0,i},Pi=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hn=function(e,t,i){var n=nt(t);return U(parseFloat(t)+parseFloat(Xt(e,"x",i+"px",n)))+n},Tl=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,La(e,t)},he="0deg",ii="0px",ue=") ",La=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,l=i.z,c=i.rotation,d=i.rotationY,m=i.rotationX,u=i.skewX,f=i.skewY,g=i.scaleX,h=i.scaleY,p=i.transformPerspective,w=i.force3D,_=i.target,x=i.zOrigin,b="",v=w==="auto"&&e&&e!==1||w===!0;if(x&&(m!==he||d!==he)){var C=parseFloat(d)*Me,y=Math.sin(C),A=Math.cos(C),T;C=parseFloat(m)*Me,T=Math.cos(C),o=Hn(_,o,y*T*-x),s=Hn(_,s,-Math.sin(C)*-x),l=Hn(_,l,A*T*-x+x)}p!==ii&&(b+="perspective("+p+ue),(n||r)&&(b+="translate("+n+"%, "+r+"%) "),(v||o!==ii||s!==ii||l!==ii)&&(b+=l!==ii||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+ue),c!==he&&(b+="rotate("+c+ue),d!==he&&(b+="rotateY("+d+ue),m!==he&&(b+="rotateX("+m+ue),(u!==he||f!==he)&&(b+="skew("+u+", "+f+ue),(g!==1||h!==1)&&(b+="scale("+g+", "+h+ue),_.style[V]=b||"translate(0, 0)"},Cl=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,l=i.rotation,c=i.skewX,d=i.skewY,m=i.scaleX,u=i.scaleY,f=i.target,g=i.xOrigin,h=i.yOrigin,p=i.xOffset,w=i.yOffset,_=i.forceCSS,x=parseFloat(o),b=parseFloat(s),v,C,y,A,T;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=Me,c*=Me,v=Math.cos(l)*m,C=Math.sin(l)*m,y=Math.sin(l-c)*-u,A=Math.cos(l-c)*u,c&&(d*=Me,T=Math.tan(c-d),T=Math.sqrt(1+T*T),y*=T,A*=T,d&&(T=Math.tan(d),T=Math.sqrt(1+T*T),v*=T,C*=T)),v=U(v),C=U(C),y=U(y),A=U(A)):(v=m,A=u,C=y=0),(x&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(x=Xt(f,"x",o,"px"),b=Xt(f,"y",s,"px")),(g||h||p||w)&&(x=U(x+g-(g*v+h*y)+p),b=U(b+h-(g*C+h*A)+w)),(n||r)&&(T=f.getBBox(),x=U(x+n/100*T.width),b=U(b+r/100*T.height)),T="matrix("+v+","+C+","+y+","+A+","+x+","+b+")",f.setAttribute("transform",T),_&&(f.style[V]=T)},Al=function(e,t,i,n,r){var o=360,s=J(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?me:1),c=l-n,d=n+c+"deg",m,u;return s&&(m=r.split("_")[1],m==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),m==="cw"&&c<0?c=(c+o*pa)%o-~~(c/o)*o:m==="ccw"&&c>0&&(c=(c-o*pa)%o-~~(c/o)*o)),e._pt=u=new lt(e._pt,t,i,n,c,ll),u.e=d,u.u="deg",e._props.push(i),u},xa=function(e,t){for(var i in t)e[i]=t[i];return e},kl=function(e,t,i){var n=xa({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,l,c,d,m,u,f,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[V]=t,s=ri(i,1),jt(i,V),i.setAttribute("transform",c)):(c=getComputedStyle(i)[V],o[V]=t,s=ri(i,1),o[V]=c);for(l in Ht)c=n[l],d=s[l],c!==d&&r.indexOf(l)<0&&(f=nt(c),g=nt(d),m=f!==g?Xt(i,l,c,g):parseFloat(c),u=parseFloat(d),e._pt=new lt(e._pt,s,l,m,u-m,Nn),e._pt.u=g||0,e._props.push(l));xa(s,n)};st("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(s){return e<2?a+s:"border"+s+a});Mi[e>1?"border"+a:a]=function(s,l,c,d,m){var u,f;if(arguments.length<4)return u=o.map(function(g){return Rt(s,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},o.forEach(function(g,h){return f[g]=u[h]=u[h]||u[(h-1)/2|0]}),s.init(l,f,m)}});var Kn={name:"css",register:Gn,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,s=e.style,l=i.vars.startAt,c,d,m,u,f,g,h,p,w,_,x,b,v,C,y,A,T;Vn||Gn(),this.styles=this.styles||Aa(e),A=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(d=t[h],!(dt[h]&&Dn(h,t,i,n,e,r)))){if(f=typeof d,g=Mi[h],f==="function"&&(d=d.call(i,n,e,r),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Ae(d)),g)g(this,e,h,d,i)&&(y=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",Wt.lastIndex=0,Wt.test(c)||(p=nt(c),w=nt(d),w?p!==w&&(c=Xt(e,h,c,w)+w):p&&(d+=p)),this.add(s,"setProperty",c,d,n,r,0,0,h),o.push(h),A.push(h,0,s[h]);else if(f!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(i,n,e,r):l[h],J(c)&&~c.indexOf("random(")&&(c=Ae(c)),nt(c+"")||c==="auto"||(c+=mt.units[h]||nt(Rt(e,h))||""),(c+"").charAt(1)==="="&&(c=Rt(e,h))):c=Rt(e,h),u=parseFloat(c),_=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),_&&(d=d.substr(2)),m=parseFloat(d),h in Dt&&(h==="autoAlpha"&&(u===1&&Rt(e,"visibility")==="hidden"&&m&&(u=0),A.push("visibility",0,s.visibility),Kt(this,s,"visibility",u?"inherit":"hidden",m?"inherit":"hidden",!m)),h!=="scale"&&h!=="transform"&&(h=Dt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),x=h in Ht,x){if(this.styles.save(h),T=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=bt(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=d,d=bt(e,"perspective"),S?e.style.perspective=S:jt(e,"perspective")}m=parseFloat(d)}if(b||(v=e._gsap,v.renderTransform&&!t.parseTransform||ri(e,t.parseTransform),C=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new lt(this._pt,s,V,0,1,v.renderTransform,v,0,-1),b.dep=1),h==="scale")this._pt=new lt(this._pt,v,"scaleY",v.scaleY,(_?ce(v.scaleY,_+m):m)-v.scaleY||0,Nn),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){A.push(ft,0,s[ft]),d=xl(d),v.svg?Bn(e,d,0,C,0,this):(w=parseFloat(d.split(" ")[2])||0,w!==v.zOrigin&&Kt(this,v,"zOrigin",v.zOrigin,w),Kt(this,s,h,Pi(c),Pi(d)));continue}else if(h==="svgOrigin"){Bn(e,d,1,C,0,this);continue}else if(h in Pa){Al(this,v,h,u,_?ce(u,_+d):d);continue}else if(h==="smoothOrigin"){Kt(this,v,"smooth",v.smooth,d);continue}else if(h==="force3D"){v[h]=d;continue}else if(h==="transform"){kl(this,d,e);continue}}else h in s||(h=Pe(h)||h);if(x||(m||m===0)&&(u||u===0)&&!sl.test(d)&&h in s)p=(c+"").substr((u+"").length),m||(m=0),w=nt(d)||(h in mt.units?mt.units[h]:p),p!==w&&(u=Xt(e,h,c,w)),this._pt=new lt(this._pt,x?v:s,h,u,(_?ce(u,_+m):m)-u,!x&&(w==="px"||h==="zIndex")&&t.autoRound!==!1?hl:Nn),this._pt.u=w||0,x&&T!==d?(this._pt.b=c,this._pt.e=T,this._pt.r=dl):p!==w&&w!=="%"&&(this._pt.b=c,this._pt.r=cl);else if(h in s)vl.call(this,e,h,c,_?_+d:d);else if(h in e)this.add(e,h,c||e[h],_?_+d:d,n,r);else if(h!=="parseTransform"){Ti(h,d);continue}x||(h in s?A.push(h,0,s[h]):typeof e[h]=="function"?A.push(h,2,e[h]()):A.push(h,1,c||e[h])),o.push(h)}}y&&Rn(this)},render:function(e,t){if(t.tween._time||!qn())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rt,aliases:Dt,getSetter:function(e,t,i){var n=Dt[t];return n&&n.indexOf(",")<0&&(t=n),t in Ht&&t!==ft&&(e._gsap.x||Rt(e,"x"))?i&&fa===i?t==="scale"?pl:fl:(fa=i||{})&&(t==="scale"?gl:yl):e.style&&!Si(e.style[t])?ul:~t.indexOf("-")?ml:Ei(e,t)},core:{_removeProperty:jt,_getMatrix:Un}};ot.utils.checkPrefix=Pe;ot.core.getStyleSaver=Aa;(function(a,e,t,i){var n=st(a+","+e+","+t,function(r){Ht[r]=1});st(e,function(r){mt.units[r]="deg",Pa[r]=1}),Dt[n[13]]=a+","+e,st(i,function(r){var o=r.split(":");Dt[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");st("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){mt.units[a]="px"});ot.registerPlugin(Kn);var jn=ot.registerPlugin(Kn)||ot,id=jn.core.Tween;var Da={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},pt={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Xn={sunny:"26",rainy:"18",snowy:"2",stormy:"16",windy:"20",cloudy:"15",foggy:"12","partly-cloudy":"23",pouring:"14","snowy-rainy":"3","clear-night":"8",sleety:"1","snowy-stormy":"0","light-rain":"20","sleety-stormy":"-1"},Zn={sunny:"Sunny",rainy:"Rainy",snowy:"Snowy",stormy:"Thunderstorm",windy:"Windy",cloudy:"Cloudy",foggy:"Foggy","partly-cloudy":"Partly Cloudy",pouring:"Pouring Rain","snowy-rainy":"Mixed Precipitation","clear-night":"Clear Night",sleety:"Sleet","snowy-stormy":"Snowy Thunderstorm","light-rain":"Light Rain","sleety-stormy":"Sleet Storm"};var $a={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},Oe={humidity:"65%",windSpeed:"10 km/h",pressure:"1013 hPa",indoorTemperature:"22\xB0",indoorHumidity:"45%"},Fa="1.2.0",Wa={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}},za={daily:7,hourly:12},Ra=24;function El(a){return["sunny","clear-night","partly-cloudy","cloudy","rainy","light-rain","pouring","stormy","snowy","snowy-rainy","snowy-stormy","sleety","sleety-stormy","windy","foggy"].includes(a)}function Ha(a,e=-1/0,t=1/0){return typeof a=="number"&&!isNaN(a)&&a>=e&&a<=t}function oi(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function M(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Le(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0}function Et(a,e,t=0){if(!isFinite(a))return"--";let i=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:t,maximumFractionDigits:t}).format(a)}catch{return a.toFixed(t)}}function Oi(a,e,t){if(a?.localize)try{let i=a.localize(e);if(i&&i!==e)return i}catch{}return t}function Na(a,e){if(!isFinite(a))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,e,...t){a&&console.log(`[AWC Dev] ${e}`,...t)}function tt(a,e){let t=a.engine_settings||{},i=(o,s,l,c)=>Ha(o,l,c)?o:s,n=i(t.windSpeed,pt.windSpeed,.1,15),r=n;return Ha(e,0,200)&&(r=Math.max(.1,Math.min(15,e/10*n))),{windSpeed:r,rainCount:i(t.rainCount,pt.rainCount,.1,10),leafCount:i(t.leafCount,pt.leafCount,.1,10),snowCount:i(t.snowCount,pt.snowCount,.1,10),cloudBaseSize:i(t.cloudBaseSize,pt.cloudBaseSize,.3,2.5),cloudCount:i(t.cloudCount,pt.cloudCount,1,20),splashBounce:i(t.splashBounce,pt.splashBounce,40,120)}}function Qn(a){a.forEach(e=>{e!=null&&clearTimeout(e)}),a.length=0}function Ia(a){let e=new Set;return a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;e.add(n)})}),e}function Li(a){window.AnimatedWeatherCardGsap&&Ia(a).forEach(e=>e.pause())}function Di(a){window.AnimatedWeatherCardGsap&&Ia(a).forEach(e=>e.resume())}function Jn(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function Zt(a,e,t,i,n){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";if(e&&El(a))return a;if(e)return console.warn(`Invalid dev mode condition: ${a}, using sunny`),"sunny";let r=a.toLowerCase();if(r.includes("sleet")&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"sleety-stormy";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"snowy-stormy";if(r.includes("lightning")||r.includes("thunder")||r.includes("storm"))return"stormy";if(r.includes("fog")||r.includes("mist"))return"foggy";if(r.includes("heavy")&&r.includes("rain"))return"pouring";if(r.includes("pouring")||r.includes("downpour"))return"pouring";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("rain")||r.includes("drizzle")))return"snowy-rainy";if(r.includes("light")&&(r.includes("rain")||r.includes("drizzle")))return"light-rain";if(r.includes("rain")||r.includes("drizzle"))return"rainy";if(r.includes("sleet")||r.includes("hail"))return"sleety";if(r.includes("snow"))return"snowy";if(r.includes("wind"))return"windy";if(r.includes("partly")&&r.includes("cloud"))return"partly-cloudy";if(r.includes("cloud")||r.includes("overcast"))return"cloudy";if(r.includes("clear")||r.includes("sunny")){let o=new Date,s;if(n)try{let m=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(m.find(u=>u.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=t??6,c=i??20;return(s<l||s>=c)&&r.includes("clear")?"clear-night":"sunny"}return"sunny"}function si(a,e,t){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),t||ai("rain");if(!e||!e.isEnabled())return t||ai(a);let i=Wa[a];if(!i)return console.warn(`No color scheme found for animation type: ${a}`),t||ai(a);try{let n=e.getCurrentState(),r=e.getTimeAwareColor(i);return oi(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),t||ai(a))}catch(n){return console.error("Error getting time-aware color:",n),t||ai(a)}}function ai(a){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return t||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var $i=class $i{constructor(e,t,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=e,this.config=t,this.cardConfig=i,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(e){let t=this.state;this.state=e,k(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=e?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!$i.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};$i.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Z=$i;var Qt=class{constructor(e,t,i){this.layer=e;this.create=t;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let i=0;i<e;i++){let n=this.create(i);this.layer.appendChild(n);let r={el:n};this.items.push(r),t.push(n),this.run(r,!0)}return t}run(e,t){this.running&&(e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause())}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function De(a,e){return e&&a.progress(Math.random()),a}var Ml=420*230;function $e(a,e){return Math.min(3,Math.max(.6,a*e/Ml))||1}function D(a,e){return a+Math.random()*(e-a)}var Pl={light:10,rain:18,storm:24,pouring:32},Ol={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Ll={light:16,rain:24,storm:34,pouring:42},Dl=.3,$l=16,Fl=8,Wl=[10,30],Ga="http://www.w3.org/2000/svg";function zl(a,e,t,i){let n=0,r=0,o=0;for(let s=1;s<=16;s++){let l=s/16,c=2*(1-l)*l*a+l*l*t,d=2*(1-l)*l*e+l*l*i;n+=Math.hypot(c-r,d-o),r=c,o=d}return n}function Rl(a,e,t,i){return Math.max(4,Math.round(Pl[a]*e*$e(t,i)))}var Fi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=this.rainKind(),o=Rl(r,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,c=Ll[r],d=r==="pouring"?3:2.4;this.splashLayer=t,this.splashColor=s,this.splashBounce=i.splashBounce/pt.splashBounce,this.pool=new Qt(t,()=>{let m=D(1,d),u=document.createElement("div");return u.className="raindrop",u.style.cssText=`
                    width: ${m.toFixed(2)}px;
                    height: ${c}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${m.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,u.dataset.width=m.toFixed(2),u},(m,u,f)=>this.fall(m,n,r,c,l,u,f)),this.pool.start(o).forEach(m=>this.addParticle(m)),k(this.config.devMode,`Rain animation started - ${o} drops (${r})`)}fall(t,i,n,r,o,s,l){let c=i.offsetWidth,d=i.offsetHeight,[m,u]=Ol[n],f=D(m,u),g=D(6,Math.max(7,c-6)),h=this.rainConfig.splashEnabled&&Math.random()<Dl,p=-r,w=h?d-r:o?d+D(60,120):d,_=Math.max(.25,(w-p)/f),x=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,x/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(b.fromTo(t,{y:p},{y:w,duration:_,ease:"none"}),h)b.call(()=>this.createSplash(g+x/2,d),[],_),b.to(t,{scaleY:0,duration:r/f,ease:"none"},_);else if(o){let v=(d-r-p)/f;b.to(t,{opacity:0,duration:_-v,ease:"power1.in"},v)}return De(b,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,i);for(let n of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%$l;let o=D(.22,.28),s=D(4,10)*this.splashBounce,l=n*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:t-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:t-1+l,duration:o,ease:"power1.out"},0).to(r,{y:i-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:i-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(t,i){let n=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(Ga,"svg"),r.classList.add("rain-rebound");let h=document.createElementNS(Ga,"path");h.setAttribute("fill","none"),h.style.stroke=this.splashColor,r.appendChild(h),n.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%Fl;let o=r.firstChild,[s,l]=Wl,c=D(s,l)*this.splashBounce,d=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,m=D(6,18);o.setAttribute("d",`M 0,0 Q ${d.toFixed(1)},${(-2*c).toFixed(1)} ${(2*d).toFixed(1)},${m.toFixed(1)}`);let u=zl(d,-2*c,2*d,m),f=Math.min(u*.45,6+c*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(u+f).toFixed(1)}`;let g=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:t,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?si("lightning",t,"var(--weather-storm-rain-color)"):si("rain",t,"var(--weather-rain-color)")}};var Hl=36,Jt=[2,6],tr=[20,38],Ba=10,Nl=.6;function Il(a,e,t){return Math.max(6,Math.round(Hl*a*$e(e,t)))}function ir(a){return Math.min(2.2,Math.max(.3,a/pt.windSpeed))}var Wi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Il(i.snowCount,n.offsetWidth,n.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=ir(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new Qt(t,()=>this.createFlake(o),(c,d,m)=>this.fall(c,n,l,s,d,m)),this.pool.start(r).forEach(c=>this.addParticle(c)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}createFlake(t){let i=D(Jt[0],Jt[1]),n=(i-Jt[0])/(Jt[1]-Jt[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=i.toFixed(2),r.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-Ba});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:Ba,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),r}fall(t,i,n,r,o,s){let l=i.offsetWidth,c=i.offsetHeight,d=parseFloat(t.dataset.size||"4"),m=(d-Jt[0])/(Jt[1]-Jt[0]),u=(tr[0]+(tr[1]-tr[0])*m)*D(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<Nl,g=-d*2,h=f?c-this.pileHeight()-d:r?c+D(60,120):c+d,p=h-g,w=Math.max(.5,p/u),_=p*D(.04,.13)*n,x=D(-_,Math.max(1,l-d));window.AnimatedWeatherCardGsap.set(t,{x,opacity:parseFloat(t.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(t,{y:g},{y:h,x:x+_,duration:w,ease:"none"}),f)b.call(()=>this.addToAccumulation(),[],w),b.to(t,{opacity:0,duration:.6,ease:"power1.out"},w);else if(r){let v=Math.min(w,(c-g)/u);b.to(t,{opacity:0,duration:Math.max(.1,w-v),ease:"power1.in"},v)}return De(b,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!t?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let r=Math.min(i,n+.8);t.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(t,{scaleY:r/i,opacity:Math.min(.9,r/i),duration:.3,ease:"power2.out"})}};var Gl=30,Va=[150,230],Bl=.3,zi=6,Ri=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...i},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Math.max(6,Math.round(Gl*i.snowCount*$e(n.offsetWidth,n.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=ir(i.windSpeed)*.5;this.pool=new Qt(t,()=>{let l=D(1.5,3.5),c=document.createElement("div");return c.className="sleet-particle-gsap",c.dataset.size=l.toFixed(2),c.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,c},(l,c,d)=>this.fall(l,n,s,o,c,d)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}fall(t,i,n,r,o,s){let l=i.offsetWidth,c=i.offsetHeight,d=parseFloat(t.dataset.size||"2"),m=D(Va[0],Va[1]),u=Math.random()<Bl,f=-d*2,g=u?c-d:r?c+D(60,120):c+d,h=g-f,p=Math.max(.3,h/m),w=h*D(.03,.08)*n,_=D(-w,Math.max(1,l-d));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:D(.8,1),rotation:D(0,360)});let x=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(x.fromTo(t,{y:f},{y:g,x:_+w,duration:p,ease:"none"}),u)x.call(()=>this.addToPile(i),[],p),x.to(t,{opacity:0,duration:.3,ease:"power1.out"},p);else if(r){let b=Math.min(p,(c-f)/m);x.to(t,{opacity:0,duration:Math.max(.1,p-b),ease:"power1.in"},b)}return De(x,s)}addToPile(t){if(this.state!=="active")return;let i=t.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${zi}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=zi)return;let r=Math.min(zi,n+.4);i.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(i,{scaleY:r/zi,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};var nr=[90,160];function Ya(a,e,t,i,n,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,c=20+Math.random()*Math.max(40,l-40),d=Math.random(),m=d<.25,u=d>.8&&c>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*t;o.style.width=o.style.height=f+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let h=-f-10,p=s+(r?60+Math.random()*80:f+10),w=(nr[0]+Math.random()*(nr[1]-nr[0]))*Fe(e.windSpeed)*(m?.6:1),_=(p-h)/w,x=Math.min(_,(s-h)/w),b=u?-(60+Math.random()*80):m?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:h,y:c,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),n&&n(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:p,duration:_,ease:"none"},0).to(o,{y:c+b,duration:_,ease:m?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:_,ease:"none"},0),r&&_>x&&v.to(o,{opacity:0,duration:_-x,ease:"power1.in"},x),o}function Ua(a,e,t,i,n,r){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,c=s>.8;o.style.position="absolute",o.style.height=(c?2:1)*t+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let d=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${d} 50%, transparent 100%)`;let m=Math.max(15,(20+Math.random()*60)*t);o.style.width=m+"px";let u=i.offsetWidth,f=i.offsetHeight,g=f*.15+Math.random()*(f*.7);window.AnimatedWeatherCardGsap.set(o,{x:-m,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(o);let p=(u+m*2)/(Vl*Fe(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),r&&r(o)}}).to(o,{scaleX:1,opacity:c?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:u+m,rotation:l?g>f/2?5:-5:0,duration:p,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,p*.3)},p-Math.min(.5,p*.3)),o}var Vl=230,ql=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Fe(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/pt.windSpeed)))}var Yl=12;function Ul(a){let e=Math.round(70*a),t=Math.round(35*a);return{width:e,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:e-Math.round(9*a)-t,y:Math.round(-13*a),size:t}]}}var Ka=a=>a>0?Math.ceil(a*3)+1:0,qa=new Map;function Kl(a,e,t,i){let n=[a,e,t,i].join(","),r=qa.get(n);if(r)return r;let o=Ka(t),s=Math.ceil((a+2*o)*i),l=Math.ceil((e+2*o)*i),c=()=>{let f=document.createElement("canvas");return f.width=s,f.height=l,[f,f.getContext("2d")]},d=null,[m,u]=c();if(u){let[f,g,h]=[o*i,o*i,Math.min(50,a/2,e/2)*i],[p,w]=[f+a*i,g+e*i];if(u.fillStyle="#000",u.beginPath(),u.moveTo(f+h,g),u.arcTo(p,g,p,w,h),u.arcTo(p,w,f,w,h),u.arcTo(f,w,f,g,h),u.arcTo(f,g,p,g,h),u.closePath(),u.fill(),t>0){let[_,x]=c();x&&(x.shadowColor="#000",x.shadowBlur=2*t*i,x.shadowOffsetX=s,x.drawImage(m,-s,0),d=_.toDataURL())}else d=m.toDataURL()}return d&&qa.set(n,d),d}function li(a){a.querySelectorAll(".cloud-track, .cloud-gsap").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function jl(a){return Math.min(1,Math.max(.5,a/160))||1}function ja(a,e,t,i,n){let r=i.offsetWidth,o=i.offsetHeight,s=ql,l=Fe(e.windSpeed),c=[],d=t||e.cloudCount,m=jl(o);return s.forEach((u,f)=>{let g=Math.ceil(f===0||f===1?d*.4:d*.6);for(let h=1;h<=g;h++){let p=document.createElement("div");p.className=`cloud-gsap cloud-gsap-${u.name}-${h}`;let w=e.cloudBaseSize*u.scale,_=1+(h-1)*.15,x=Math.max(.3,Math.min(2.5,w))*_*m,b=Ul(x);p.style.position="absolute",p.style.opacity=u.opacity.toString(),p.style.zIndex=(10+f).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][f],C=n?.color_palette==="theme"?0:u.blur,y=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(N=>({x:N.x,y:N.y,width:N.size,height:N.size}))],A=Math.min(3,Math.max(1,window.devicePixelRatio||1)),T=y.map(N=>Kl(N.width,N.height,C,A)),S=T.every(Boolean),E=S?Ka(C):0;if(p.style.width=b.width+"px",p.style.height=b.height+"px",S)p.classList.add("cloud-masked"),y.forEach((N,Q)=>{let X=document.createElement("div");X.style.position="absolute",X.style.left=N.x-E+"px",X.style.top=N.y-E+"px",X.style.width=N.width+2*E+"px",X.style.height=N.height+2*E+"px",X.style.background=v;for(let ct of["-webkit-",""])X.style.setProperty(`${ct}mask-image`,`url("${T[Q]}")`),X.style.setProperty(`${ct}mask-size`,"100% 100%"),X.style.setProperty(`${ct}mask-repeat`,"no-repeat");p.appendChild(X)});else{p.style.borderRadius="50px",p.style.background=v,C>0&&(p.style.filter=`blur(${C}px)`);for(let N of b.puffs){let Q=document.createElement("div");Q.style.position="absolute",Q.style.left=N.x+"px",Q.style.top=N.y+"px",Q.style.width=N.size+"px",Q.style.height=N.size+"px",Q.style.borderRadius="50px",Q.style.background=v,p.appendChild(Q)}}let P=b.width+2*E,$=[[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][f][h-1]||15+f*10,W=Math.max(150+f*50,P+Yl),F=u.speed*l*(.9+Math.random()*.2),z=(r+2*W)/F,q=document.createElement("div");q.className="cloud-track",q.appendChild(p),window.AnimatedWeatherCardGsap.set(p,{opacity:u.opacity}),window.AnimatedWeatherCardGsap.set(q,{xPercent:0,x:-W,y:o*$/100}),a.appendChild(q);let St=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});St.fromTo(q,{xPercent:0,x:-W},{xPercent:100,x:W,duration:z,ease:"none"}),St.progress(Math.random()),c.push(St)}}),c}function Xa(a){let e=a.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function Za(a,e,t,i,n){let r=document.createElement("div");r.className=`fog-layer fog-layer-${t}`;let o=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],c=l[t]||l[2],d=n.custom_colors?.fog_color,m=n.color_palette==="default"?oi(d)?d:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),f=o*c.scale;r.style.cssText=`
        position: absolute;
        top: ${20+t*15}%;
        left: -50%;
        width: ${f}px;
        height: ${c.height}px;
        opacity: ${c.opacity};
        filter: blur(${c.blur}px);
        pointer-events: none;
        z-index: ${5+t};
        overflow: visible;
    `;for(let C=0;C<u;C++){let y=document.createElement("div"),A=f/u*(2+Math.random()*1.2),T=c.height*(1.2+Math.random()*1.6),S=f/u*C-A*.3,E=(Math.random()-.5)*(c.height*.5);y.style.cssText=`
            position: absolute;
            left: ${S}px;
            top: ${E}px;
            width: ${A}px;
            height: ${T}px;
            background: radial-gradient(ellipse ${A/2}px ${T/2}px at center, 
                ${m} 0%, 
                ${m} 40%, 
                transparent 70%);
            border-radius: ${A/2}px ${T/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,r.appendChild(y)}a.appendChild(r);let g=e.windSpeed*(.5+Math.random()*.5),h=15/c.speed,p=Math.max(8,h/g),w=o*c.scale,_=-w,x=o+w;window.AnimatedWeatherCardGsap.set(r,{x:_,opacity:c.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});b.to(r,{x,duration:p,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:_})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(r,{opacity:c.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function Hi(a){a.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var Xl=3,Zl=2,Qa=[900,1400],Ja=[1800,2600],Ni=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...i},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let i=tt(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(Xl*i.leafCount));if(this.leaves.size<n){let r=Ya(this.layer(),i,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(r),this.addParticle(r)}this.scheduleLeaf(D(Qa[0],Qa[1])/Math.max(.5,i.leafCount))},t)}scheduleSwoosh(t){let i=tt(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<Zl){let n=Ua(this.layer(),i,1,this.card(),this.cardConfig,r=>this.forget(r,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(D(Ja[0],Ja[1]))}},t)}forget(t,i){i.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),Li(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){Di(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var ci=[6e3,18e3],Ql=[1500,6e3],to=.16,Ii=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:ci[0],maxInterval:ci[1],...i},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[i,n]=Ql;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!t||!i)return;let n=i.offsetWidth,r=i.offsetHeight,o=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),c=30+Math.random()*(n-60),d=20*o,m=20,u=[c+",0"];for(let p=0;p<m;p++){let w=c+(Math.random()*d-d/2),_=r/m*(p+1);u.push(w+","+_)}l.setAttribute("d","M"+u.join(" L"));let f=this.element.timeOfDayManager,g=si("lightning",f,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let h=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=h,h.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let p=-6*o;h.to(i,{y:p,duration:.06,ease:"power2.out"},to).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},to+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),i.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var Jl=["dawn","day","dusk","night"],di=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],tc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},no=(a,e,t)=>Math.min(e,Math.max(a,t)),te=(a,e,t)=>a+(e-a)*t;function ec(a,e,t){let i=(e-a+540)%360-180;return(a+i*t+360)%360}function Nt(a,e,t){let i=([h,p,w])=>[h,p*Math.cos(w*Math.PI/180),p*Math.sin(w*Math.PI/180)],[n,r,o]=i(a),[s,l,c]=i(e),d=te(n,s,t),m=te(r,l,t),u=te(o,c,t),f=Math.hypot(m,u),g=f<1e-6?a[2]:(Math.atan2(u,m)*180/Math.PI+360)%360;return[d,f,g]}function rr([a,e,t]){let i=t*Math.PI/180,n=e*Math.cos(i),r=e*Math.sin(i),o=(a+.3963377774*n+.2158037573*r)**3,s=(a-.1055613458*n-.0638541728*r)**3,l=(a-.0894841775*n-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var ic=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function vt(a){let e=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=rr(a);if(!e(t)){let i=0,n=a[1];for(let r=0;r<24;r++){let o=(i+n)/2;e(rr([a[0],o,a[2]]))?i=o:n=o}t=rr([a[0],i,a[2]])}return t.map(i=>ic(no(0,1,i)))}var ro=a=>Math.round(no(0,1,a)*255);function Mt(a){return"#"+a.map(e=>ro(e).toString(16).padStart(2,"0")).join("")}function eo(a,e){return`rgba(${a.map(ro).join(", ")}, ${Number(e.toFixed(3))})`}function ar(a,e){return[.15+(a[0]-.15)*.42,a[1]*te(.75,.5,e),ec(a[2],262,.45)]}function nc(a,e){let t=tc[a],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:te(.46,.28,t.overcast)};if(a==="clear-night"){if(e==="dawn"||e==="dusk"){let r=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:Nt(t.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(e){case"night":return{top:ar(t.top,t.overcast),mid:ar(t.mid,t.overcast),bottom:ar(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:te(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:Nt(t.top,[t.top[0]*.8,.075,292],.5*i),mid:Nt(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:Nt(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:Nt(t.glow,[.82,.13,58],i),glowAlpha:te(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:Nt(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:Nt(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:Nt(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:Nt(t.glow,[.88,.09,40],i),glowAlpha:te(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function rc(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function pe(a,e){let t=nc(a,e);return{top:Mt(vt(t.top)),mid:Mt(vt(t.mid)),bottom:Mt(vt(t.bottom)),glow:eo(vt(t.glow),t.glowAlpha),scrim:eo(vt(rc(t.top)),t.scrimAlpha)}}var ee=[.985,.006,250],We=.8,ao=.55,oo=.4,Gi={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},so={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},lo={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64},co={rx:.36,ry:.62,cx:.9,cy:-.14,fade:.64};function ie(a,e){let t=i=>`${Math.round(i*100)}%`;return`radial-gradient(${t(a.rx)} ${t(a.ry)} at ${t(a.cx)} ${t(a.cy)}, ${e}, transparent ${t(a.fade)})`}function ho(){let a=[];for(let e of di)for(let t of Jl){let i=pe(e,t),n=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;a.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return a.join(`
`)}function ze(a,e,t){return a==null||!Number.isFinite(a)?t?"day":"night":a<-6?"night":a<6?e?"dawn":"dusk":"day"}var $t=3.2,ne="cubic-bezier(0.37, 0, 0.63, 1)",uo={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},mo=Object.keys(uo),Re=mo.filter(a=>a.startsWith("--awc-sky-"));function fo(){return mo.map(a=>`${a} ${$t}s ${ne}`).join(`,
            `)}var io=!1;function He(){if(io)return;io=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[e,t]of Object.entries(uo))try{a.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var Bi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");li(t);let r=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(r=Math.max(1,Math.round(r*.6))),this.cloudTimelines=ja(t,i,r,n,this.cardConfig),this.startWindFactor=Fe(i.windSpeed),k(this.config.devMode,`Clouds animation started with ${r} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[];let t=this.element.querySelector(this.layerSelector);t&&li(t),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Clouds animation resumed")}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=tt(this.cardConfig,this.realWindSpeed),i=Fe(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:$t,ease:"sine.inOut",overwrite:!0})})}};var Vi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...i},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");Hi(n),this.fogTimelines=[];for(let r=0;r<this.fogConfig.layerCount;r++){let o=Za(t,i,r,n,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Fog animation resumed")}};var ac=1/3,oc=.35,qi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...i},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed);this.element.querySelector(".animated-weather-card")?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(s),s.remove()});let r=Math.max(15,Math.round(i.cloudCount*5)),o=document.createElement("div");o.className="stars-field";for(let s=0;s<r;s++){let l=document.createElement("div");l.className="star-gsap";let c=1+Math.random()*3,d=.3+Math.random()*.5;if(l.style.cssText=`
                width: ${c.toFixed(2)}px;
                height: ${c.toFixed(2)}px;
                left: ${(Math.random()*100).toFixed(2)}%;
                top: ${(Math.random()*70).toFixed(2)}%;
                opacity: ${d.toFixed(2)};
            `,Math.random()<ac){let m=3+Math.random()*4;l.classList.add("twinkle"),l.style.setProperty("--star-o",d.toFixed(2)),l.style.setProperty("--star-dim",(d*(1-Math.random()*oc)).toFixed(2)),l.style.animationDuration=`${m.toFixed(2)}s`,l.style.animationDelay=`${(-Math.random()*m).toFixed(2)}s`}o.appendChild(l)}if(t.appendChild(o),this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"}),this.starsConfig.showMoon){let s=document.createElement("div");s.className="moon-gsap",t.appendChild(s),this.addParticle(s),window.AnimatedWeatherCardGsap.fromTo(s,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"})}k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}};var Yi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var Ui=class{constructor(e,t,i,n){this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let i={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(e){case"rain":n=new Fi(this.element,{...i,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new Wi(this.element,{...i,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new Ri(this.element,{...i,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":n=new Ni(this.element,{...i,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new Ii(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:ci[0],maxInterval:ci[1]},this.config,this.realWindSpeed);break;case"clouds":n=new Bi(this.element,{...i,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":n=new Vi(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":n=new qi(this.element,{...i,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new Yi(this.element,i,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await n.start(),this.activeAnimations.set(e,n),k(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),n}catch(i){return console.error(`Failed to start modular ${e} animation:`,i),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),k(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(i){console.error(`Error stopping modular ${e} animation:`,i)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(i){console.error(`Error pausing modular ${e} animation:`,i)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(i){console.error(`Error resuming modular ${e} animation:`,i)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,i]of this.activeAnimations)try{i.setWindSpeed(e)}catch(n){console.warn(`Failed to update wind speed for ${t}:`,n)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var Ne=class{constructor(e,t,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=e,this.config=t,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new Ui(e,t,n,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}async startAnimation(e,t){let i=this.animations[e];if(i.isActive){k(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let n=t?.intensity??i.intensity??1,r=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(e,!0);try{let o=await this.modularBridge.startModularAnimation(e,n);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!o){i.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}k(this.config.dev_mode,`Started ${e} animation with intensity ${n}`)}catch(o){console.error(`Failed to start ${e} animation:`,o),i.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),k(this.config.dev_mode,`Stopped ${e} animation`)}catch(i){console.error(`Error stopping ${e} animation:`,i)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),k(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),k(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(i=>{let n=t.overrides?.[i];return this.startAnimation(i,n)})),k(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${e}-active`;t?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var Ki=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:Number(a);return Number.isFinite(e)?e:null},ji=a=>typeof a=="string"?a.trim():"";function sc(a){if(!a||typeof a!="object")return null;let e=a,t=typeof e.id=="number"?String(e.id):ji(e.id);return t?{id:t,label:ji(e.flight_number)||ji(e.callsign),aircraftCode:ji(e.aircraft_code),altitudeFt:Ki(e.altitude),groundSpeedKt:Ki(e.ground_speed),heading:Ki(e.heading),verticalSpeed:Ki(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function po(a,e){if(!a||!e)return null;let t=a.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=t.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let r of i){let o=sc(r);o&&n.push(o)}return n}var Xi=class{constructor(){this.known=null}update(e){if(!e)return[];let t=e.filter(o=>!o.onGround),i=new Set(t.map(o=>o.id));if(this.known===null)return this.known=i,[];let n=[],r=new Set;for(let o of t)this.known.has(o.id)||r.has(o.id)||(r.add(o.id),n.push(o));return this.known=i,n}reset(){this.known=null}};var Zi=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}setDevOverride(e){this.devTimePhaseOverride=e,this.updateState()}clearDevOverride(){this.devTimePhaseOverride=void 0,this.updateState()}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=new Date,t,i;if(!this.config.useBrowserTime&&this.config.timeZone){let s=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(s.find(l=>l.type==="hour")?.value||"0",10),i=parseInt(s.find(l=>l.type==="minute")?.value||"0",10)}else t=e.getHours(),i=e.getMinutes();let n=t+i/60,r;if(this.devTimePhaseOverride)r=this.devTimePhaseOverride;else{let s=this.config.sunriseHour,l=this.config.sunsetHour,c=(s-1+24)%24,d=(s+.5)%24,m=(l-.5+24)%24,u=(l+1)%24,f=(g,h,p)=>h<=p?g>=h&&g<p:g>=h||g<p;f(n,c,d)?r="dawn":f(n,d,m)?r="day":f(n,m,u)?r="dusk":r="night"}let o={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:t,timePhase:r};!this.currentState||this.currentState.timePhase!==o.timePhase?(this.currentState=o,this.notifyListeners(o)):this.currentState=o}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},$a.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(e,t,i){let n=e.replace("#",""),r=t.replace("#",""),o=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),c=parseInt(r.substring(0,2),16),d=parseInt(r.substring(2,4),16),m=parseInt(r.substring(4,6),16),u=Math.round(o*(1-i)+c*i),f=Math.round(s*(1-i)+d*i),g=Math.round(l*(1-i)+m*i),h=u.toString(16).padStart(2,"0"),p=f.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${h}${p}${w}`}};var ge=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var lc=ho(),cc=Mt(vt(ee)),go=a=>`${Math.round(a*100)}%`,dc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,hc=48,or=()=>`
${ge("animated-weather-card")}
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
          --awc-secondary: ${We};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${cc};
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
            ${fo()};
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
        ${lc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${ie(Gi,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${go(oo)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${go(ao)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${ie(so,"var(--awc-sky-glow)")}; }
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
          background-image: ${dc};
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
           smudges; draw them as faint, crisp shapes instead (their masks
           are crisp; the filter is for clouds without a canvas) */
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
          --awc-sky-glow-layer: ${ie(lo,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${hc}px;
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
          transition: opacity ${$t/2}s ${ne};
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
          transition: transform ${$t}s ${ne};
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

`;var uc={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function sr(a,e){try{let t=a.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return Le(uc,e.state)||e.state}var mc=180;function wo(a,e){let t=e.note_entity?a?.states[e.note_entity]:void 0;if(!t)return null;let i=s=>typeof s=="string"?s.trim():"",n=t.state==="unknown"||t.state==="unavailable"?"":i(t.state),r=i(t.attributes?.[e.note_attribute||"note"]);if(!n&&!r)return null;let o=Date.parse(t.attributes?.generated_at);return{line:n||r,note:r||n,writtenAt:Number.isNaN(o)?null:o}}function _o(a,e){let t=Number(e.note_max_age??mc);return a.writtenAt===null||!(t>0)?null:a.writtenAt+t*6e4}function lr(a,e,t){if(e.dev_mode){let i=fc(e,t);if(a&&e.sun_entity){let n=a.states[e.sun_entity];n&&(i.sun={sunrise:n.attributes.next_rising||null,sunset:n.attributes.next_setting||null,dawn:n.attributes.next_dawn||null,dusk:n.attributes.next_dusk||null,noon:n.attributes.next_noon||null,elevation:n.attributes.elevation??null,aboveHorizon:n.state==="above_horizon"})}return i}return a?gc(a,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--"}}function fc(a,e){let n=Xn[e||"sunny"]||"22",r=bo(a)?Et(parseFloat(n),void 0,1):n,o=a.name||"",s=Oe.humidity,l=Oe.windSpeed,c=parseFloat(l.split(" ")[0])||15,d=Oe.pressure,u=Zn[e||"sunny"]||e||"sunny",f=Oe.indoorTemperature,g=Oe.indoorHumidity,h=new Date,p=new Date(h.getFullYear(),h.getMonth(),h.getDate(),6,14),w=new Date(h.getFullYear(),h.getMonth(),h.getDate(),18,32),_=new Date(h.getFullYear(),h.getMonth(),h.getDate(),5,45),x=new Date(h.getFullYear(),h.getMonth(),h.getDate(),19,1),b=new Date(h.getFullYear(),h.getMonth(),h.getDate(),12,23),v=Date.now(),C={sunrise:p.toISOString(),sunset:w.toISOString(),dawn:_.toISOString(),dusk:x.toISOString(),noon:b.toISOString(),elevation:42.5,aboveHorizon:v>=p.getTime()&&v<=w.getTime()};return{temperature:r,weatherCondition:u,location:o,humidity:s,windSpeed:l,windSpeedValue:c,windBearing:null,pressure:d,pressureValue:null,feelsLike:null,indoorTemperature:f,indoorHumidity:g,sun:C}}var pc={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function yo(a){let e=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(e)?(e%360+360)%360:typeof a=="string"?pc[a.trim().toUpperCase()]??null:null}function bo(a){return Number(a.temperature_decimals)===1?1:0}function gc(a,e){if(!e.entity)throw new Error("Weather entity is required");let t=a.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let i;if(e.outdoor_sensor_entity){let S=a.states[e.outdoor_sensor_entity];S&&S.state&&!isNaN(parseFloat(S.state))?i=parseFloat(S.state):i=t.attributes.temperature}else i=t.attributes.temperature;let n=bo(e),r=S=>Et(n?S:Math.round(S),a,n),o=i!=null&&!isNaN(i)?r(i):"--",s=sr(a,t),l=e.name||t.attributes.friendly_name||"",c=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?Et(Math.round(E),a)+"%":null},d="--";if(e.humidity_sensor_entity){let S=a.states[e.humidity_sensor_entity];d=S&&c(S.state)||c(t.attributes.humidity)||"--"}else d=c(t.attributes.humidity)||"--";let m="--",u=10,f=(S,E)=>{let P=typeof S=="number"?S:parseFloat(S);return isFinite(P)?(u=Na(P,E||"km/h"),m=Et(Math.round(P),a)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?a.states[e.wind_speed_sensor_entity]:void 0;g&&f(g.state,g.attributes?.unit_of_measurement)||f(t.attributes.wind_speed,t.attributes.wind_speed_unit);let h=e.wind_direction_sensor_entity?a.states[e.wind_direction_sensor_entity]:void 0,p=yo(h?.state)??yo(t.attributes.wind_bearing),w=(S,E)=>{let P=typeof S=="number"?S:parseFloat(S);if(!isFinite(P))return null;let O=E.toLowerCase()==="inhg"?2:0;return Et(P,a,O)+" "+E},_=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?E:null},x="--",b=null;if(e.pressure_sensor_entity){let S=a.states[e.pressure_sensor_entity];if(S){let E=S.attributes.unit_of_measurement||"hPa",P=w(S.state,E);P&&(x=P,b=_(S.state))}if(x==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";x=w(t.attributes.pressure,E)||"--",b=_(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let S=t.attributes.pressure_unit||"hPa";x=w(t.attributes.pressure,S)||"--",b=_(t.attributes.pressure)}let v=null,C;if(e.feels_like_entity&&(C=a.states[e.feels_like_entity]?.state),C===void 0&&t.attributes.apparent_temperature!==void 0&&(C=t.attributes.apparent_temperature),C!==void 0){let S=typeof C=="number"?C:parseFloat(C);isFinite(S)&&(v=r(S)+"\xB0")}let y="--";if(e.indoor_temperature_entity){let S=a.states[e.indoor_temperature_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(y=r(parseFloat(S.state))+"\xB0")}let A="--";if(e.indoor_humidity_entity){let S=a.states[e.indoor_humidity_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(A=Et(Math.round(parseFloat(S.state)),a)+"%")}let T;if(e.sun_entity){let S=a.states[e.sun_entity];S&&(T={sunrise:S.attributes.next_rising||null,sunset:S.attributes.next_setting||null,dawn:S.attributes.next_dawn||null,dusk:S.attributes.next_dusk||null,noon:S.attributes.next_noon||null,elevation:S.attributes.elevation??null,aboveHorizon:S.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:d,windSpeed:m,windSpeedValue:u,windBearing:p,pressure:x,pressureValue:b,feelsLike:v,indoorTemperature:y,indoorHumidity:A,sun:T}}var cr={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note",now:"Now",today:"Today",forecast_hourly:"Hourly forecast",forecast_daily:"Daily forecast",high:"High",low:"Low",precipitation:"Precipitation",no_forecast:"No forecast yet"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",now:"Jetzt",today:"Heute",forecast_hourly:"St\xFCndliche Vorhersage",forecast_daily:"T\xE4gliche Vorhersage",high:"H\xF6chstwert",low:"Tiefstwert",precipitation:"Niederschlag",no_forecast:"Noch keine Vorhersage"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",now:"Ahora",today:"Hoy",forecast_hourly:"Pron\xF3stico por horas",forecast_daily:"Pron\xF3stico diario",high:"M\xE1xima",low:"M\xEDnima",precipitation:"Precipitaci\xF3n",no_forecast:"A\xFAn no hay pron\xF3stico"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",now:"Maint.",today:"Auj.",forecast_hourly:"Pr\xE9visions horaires",forecast_daily:"Pr\xE9visions quotidiennes",high:"Max.",low:"Min.",precipitation:"Pr\xE9cipitations",no_forecast:"Pas encore de pr\xE9visions"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",now:"Ora",today:"Oggi",forecast_hourly:"Previsioni orarie",forecast_daily:"Previsioni giornaliere",high:"Massima",low:"Minima",precipitation:"Precipitazioni",no_forecast:"Ancora nessuna previsione"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",now:"Nu",today:"Vandaag",forecast_hourly:"Verwachting per uur",forecast_daily:"Verwachting per dag",high:"Hoogste",low:"Laagste",precipitation:"Neerslag",no_forecast:"Nog geen verwachting"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",now:"Teraz",today:"Dzi\u015B",forecast_hourly:"Prognoza godzinowa",forecast_daily:"Prognoza dzienna",high:"Maks.",low:"Min.",precipitation:"Opady",no_forecast:"Brak prognozy"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",now:"Agora",today:"Hoje",forecast_hourly:"Previs\xE3o por hora",forecast_daily:"Previs\xE3o di\xE1ria",high:"M\xE1xima",low:"M\xEDnima",precipitation:"Precipita\xE7\xE3o",no_forecast:"Ainda sem previs\xE3o"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota",now:"Acum",today:"Azi",forecast_hourly:"Prognoz\u0103 orar\u0103",forecast_daily:"Prognoz\u0103 zilnic\u0103",high:"Maxima",low:"Minima",precipitation:"Precipita\u021Bii",no_forecast:"\xCEnc\u0103 nu exist\u0103 prognoz\u0103"}};function ye(a){return a?.locale?.language||a?.language||"en"}function re(a){return`${ye(a)}|${a?.locale?.time_format??""}`}function et(a,e,t={}){let i=ye(a).toLowerCase();return(cr[i]?.[e]??cr[i.split("-")[0]]?.[e]??cr.en[e]).replace(/\{(\w+)\}/g,(r,o)=>t[o]??"")}function yc(a){let e=a?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?ye(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function It(a,e){if(!a)return"--";let t=new Date(a);if(isNaN(t.getTime()))return"--";let i=yc(e),n={hour:"numeric",minute:"2-digit"};i!==void 0&&(n.hourCycle=i?"h12":"h23");try{return new Intl.DateTimeFormat(e?ye(e):void 0,n).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function dr(a,e){let t=Math.round(Math.abs(a)*60),i=Math.floor(t/60),n=t%60,r=Intl.DurationFormat;if(r&&e)try{return new r(ye(e),{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return i>0?`${i}h ${n}m`:`${n}m`}function we(a,e){let t=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${M(t[1])}<span class="${e}">${M(t[2])}</span>`:M(a)}function hr(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function Ge(a,e){return{entity:e,tap_action:hr(a?.tap_action),hold_action:hr(a?.hold_action),double_tap_action:hr(a?.double_tap_action)}}function Ie(a){return!!a&&a.action!=="none"}function vo(a){return a.tap_action?Ie(a.tap_action):!!a.entity}function hi(a,e,t){let i=e[`${t}_action`];if(t==="tap"&&!i){e.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}Ie(i)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function Be(a,e,t){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let i=null,n=!1,r,o,s=()=>{clearTimeout(r),r=void 0},l=()=>{i=null,s()},c=()=>{Ie(t().double_tap_action)?o?(clearTimeout(o),o=void 0,hi(e,t(),"double_tap")):o=setTimeout(()=>{o=void 0,hi(e,t(),"tap")},250):hi(e,t(),"tap")};a.addEventListener("pointerdown",d=>{d.button===0&&(i={x:d.clientX,y:d.clientY},n=!1,s(),Ie(t().hold_action)&&(r=setTimeout(()=>{r=void 0,n=!0,hi(e,t(),"hold")},500)))}),a.addEventListener("pointermove",d=>{i&&Math.hypot(d.clientX-i.x,d.clientY-i.y)>10&&l()}),a.addEventListener("pointerup",()=>{let d=!!i&&!n;l(),d&&c()}),a.addEventListener("pointercancel",l),a.addEventListener("pointerleave",l),a.addEventListener("keydown",d=>{d.key!=="Enter"&&d.key!==" "||!vo(t())||(d.preventDefault(),hi(e,t(),"tap"))}),a.addEventListener("contextmenu",d=>{Ie(t().hold_action)&&d.preventDefault()})}function _e(a,e,t){vo(e)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(t?a.setAttribute("role",t):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let i=Ie(e.hold_action);a.style.userSelect=i?"none":"",a.style.setProperty("-webkit-user-select",i?"none":""),a.style.setProperty("-webkit-touch-callout",i?"none":"")}var ur=new Map;function ui(a,e){let t=ur.get(a);if(t)return t;let i=new Promise((n,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(d=>/animated-weather-card(?:\.min)?\.js/.test(d.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,c=document.createElement("script");c.src=l,c.type="module",c.async=!0,c.onload=()=>e()?n():r(new Error(`${l} loaded but registered nothing`)),c.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(c)});return i.catch(()=>ur.delete(a)),ur.set(a,i),i}function Ve(a){return ui("animated-weather-card-editor",()=>!!customElements.get(a))}var xo=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function So(a){let e=a.color_palette||"default",t=a.custom_colors||{},i="";if(e!=="theme"){let r=d=>{if(typeof d!="string"||!xo.test(d))return null;let m=d.replace("#","");m.length===3&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]);let u=parseInt(m,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(d,m,u)=>"#"+(d<<16|m<<8|u).toString(16).padStart(6,"0"),s=(d,m)=>{let u=r(d);if(!u)return d;let f=1-m/100;return o(Math.max(0,Math.floor(u.r*f)),Math.max(0,Math.floor(u.g*f)),Math.max(0,Math.floor(u.b*f)))},l=(d,m)=>{let u=r(d);if(!u)return d;let f=m/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*f)),Math.min(255,Math.floor(u.g+(255-u.g)*f)),Math.min(255,Math.floor(u.b+(255-u.b)*f)))},c=(d,m)=>{let u=t[d];if(!u||typeof u!="string"||!xo.test(u))return;let f=l(u,12),g=s(u,22);i+=`--weather-${m}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${u} 55%, ${g} 100%); `};c("sunny_bg","sunny"),c("rainy_bg","rainy"),c("snowy_bg","snowy"),c("stormy_bg","stormy"),c("windy_bg","windy"),c("cloudy_bg","cloudy")}let n=(r,o)=>{r&&oi(r)&&(i+=o.replace(/\$\{value\}/g,r))};return n(t.text_color,"--weather-text-color: ${value} !important; "),n(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(t.rain_color,"--weather-rain-color: ${value} !important; "),n(t.snow_color,"--weather-snow-color: ${value} !important; "),i}var pr={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"};function wc(a){return Le(pr,a)===void 0?"mdi:weather-night":`mdi:moon-${a.replace(/_moon$/,"").replace(/_/g,"-")}`}function mr(a,e){let t=n=>n.startsWith("sensor.")&&Le(pr,e.states[n]?.state)!==void 0,i=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return i?{sun_entity:a,moon_entity:i}:{sun_entity:a}}var be=1e3,Qi=300,_c={horizon:196,peak:34,trough:276,twilightRy:78},bc={horizon:200,peak:96,trough:262,twilightRy:44},vc=124,To=16;function xc(a,e){if(a<1)return 1;let t=Math.max(2,Math.floor((e+To)/(vc+To))),i=Math.ceil(a/t);return Math.ceil(a/i)}function Ao(a,e,t){let i=t-e;if(i<=0||i>=24)return 0;if(a>=e&&a<=t)return Math.sin(Math.PI*(a-e)/i);let n=((a-t)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var tn=a=>a/24*be,ko=(a,e)=>a>=0?e.horizon-a*(e.horizon-e.peak):e.horizon-a*(e.trough-e.horizon);function Sc(a,e,t){let i=[];for(let n=0;n<=240;n++){let r=n/10;i.push(`${tn(r).toFixed(1)},${ko(Ao(r,a,e),t).toFixed(1)}`)}return"M"+i.join(" L")}function Ji(a){if(!a)return 0;let e=new Date(a);return isNaN(e.getTime())?0:e.getHours()+e.getMinutes()/60+e.getSeconds()/3600}var Tc=a=>we(a,"st-ampm");He();var Co=Mt(vt(ee)),Cc=`
${ge("")}
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
        --st-text: ${Co};
        --st-secondary: ${Co};
        --st-secondary-opacity: ${We};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${ie(Gi,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Re.map(a=>`${a} ${$t}s ${ne}`).join(", ")};
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
`,fr=class extends HTMLElement{constructor(){super();this.config={};this._shadow=this.attachShadow({mode:"open"})}setConfig(t){if(!t.sun_entity)throw new Error("Please define a sun_entity (e.g. sun.sun)");this.config={...t},this._render()}set hass(t){let i=this.config.sun_entity||"",n=this.config.moon_entity||"",r=this._hass?.states[i],o=t.states[i],s=this._hass?.states[n]?.state,l=t.states[n]?.state,c=re(this._hass)!==re(t),d=this.config.weather_entity||"",m=d&&this._hass?.states[d]?.state!==t.states[d]?.state;this._hass=t;let u=r?.attributes?.elevation,f=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(f||0))>=.5||n&&s!==l||c||m)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>this._render(),6e4)),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let i=t.querySelector(".st-metrics");for(let n of["regular","compact","short","tight"]){if(t.dataset.fit=n,i){let r=Array.from(i.children).filter(o=>getComputedStyle(o).display!=="none").length;i.style.setProperty("--st-cols",String(xc(r,i.clientWidth)))}if(t.scrollHeight<=t.clientHeight+1)return}}_actions(){return Ge(this.config,this.config.sun_entity)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_skyCondition(t){let i=this.config.weather_entity,n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let r=Zt(n,!1,void 0,void 0,this._hass?.config?.time_zone);if(di.includes(r))return r}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await Ve("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return mr(r.find(o=>o.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let i=t.state,n;try{n=this._hass.formatEntityState?.(t)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||Le(pr,i)||i.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:wc(i)}}_render(){let t=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=new Date,o=r.getHours()+r.getMinutes()/60,s=Ji(t.sunrise),l=Ji(t.sunset),c=t.dawn?Ji(t.dawn):Math.max(0,s-.5),d=t.dusk?Ji(t.dusk):Math.min(24,l+.5),m=l-s,u=t.aboveHorizon,f=u?t.sunset:t.sunrise,g=new Date(f).getTime()-r.getTime(),h=this._hass,p=ct=>M(et(h,ct)),w=ct=>Tc(It(ct,h)),_=g>0?et(h,"in_duration",{duration:dr(g/36e5,h)}):"",x=ze(t.elevation,t.rising,t.aboveHorizon),b=pe(this._skyCondition(x),x),v=n?{"--awc-sky-top":b.top,"--awc-sky-mid":b.mid,"--awc-sky-bottom":b.bottom,"--awc-sky-glow":b.glow,"--awc-sky-scrim":b.scrim}:null,C=this.config.compact?bc:_c,y=Sc(s,l,C),A=`${y} L${be},${C.horizon} L0,${C.horizon} Z`,T=Ao(o,s,l),S=o/24*100,E=ko(T,C)/Qi*100,P=(ct,gt)=>{let Tt=Math.max(70,Math.abs(gt)/24*be*2.4);return`<ellipse cx="${tn(ct).toFixed(1)}" cy="${C.horizon}" rx="${Tt.toFixed(1)}" ry="${C.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},O=!!this.config.compact,$=this.config.show_header!==!1,W=$?`
            <div class="st-hero">
                ${this.config.title&&!O?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    <ha-icon icon="${u?"mdi:weather-sunset-down":"mdi:weather-sunset-up"}"></ha-icon>
                    <span>${p(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(f)}</div>
                ${_?`<div class="st-countdown">${M(_)}</div>`:""}
            </div>`:this.config.title&&!O?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",F=(ct,gt,Tt,Go,Bo=!1)=>`
                <div class="st-metric" data-kind="${M(ct)}">
                    <div class="st-metric-label"><ha-icon icon="${M(gt)}"></ha-icon><span title="${M(Tt)}">${M(Tt)}</span></div>
                    <div class="st-metric-value${Bo?" wrap":""}">${Go}</div>
                </div>`,z=!O&&this.config.show_details!==!1,q=O&&$?`
                        <div class="st-chart-note">${p(u?"sunrise":"sunset")}<span class="st-chart-note-time">${w(u?t.sunrise:t.sunset)}</span></div>`:"",St=z?`
            <div class="st-metrics">
                ${u?F("sunrise","mdi:weather-sunset-up",p("sunrise"),w(t.sunrise)):F("sunset","mdi:weather-sunset-down",p("sunset"),w(t.sunset))}
                ${F("noon","mdi:white-balance-sunny",p("solar_noon"),w(t.noon))}
                ${F("daylight","mdi:timer-sand",p("daylight"),M(dr(m,h)))}
                ${F("first-light","mdi:weather-sunset",p("first_light"),w(t.dawn))}
                ${F("last-light","mdi:weather-night",p("last_light"),w(t.dusk))}
                ${i?F("moon",i.icon,p("moon"),M(i.phaseName),!0):""}
            </div>`:"",N=this.config.sun_entity?h?.states[this.config.sun_entity]:void 0,Q="";try{Q=N&&h?.formatEntityState?.(N)||""}catch{}let X=[`${et(h,"sunrise")} ${It(t.sunrise,h)}`,`${et(h,"sunset")} ${It(t.sunset,h)}`,Q].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${W}
                    <div class="st-chart" role="img" aria-label="${M(X)}">
                        <svg viewBox="0 0 ${be} ${Qi}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${be}" height="${C.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${C.horizon}" width="${be}" height="${Qi-C.horizon}"/></clipPath>
                            </defs>
                            ${P(s,s-c)}
                            ${P(l,d-l)}
                            <path d="${A}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${C.horizon}" x2="${be}" y2="${C.horizon}" class="st-horizon"/>
                            <line x1="${tn(o).toFixed(1)}" y1="0" x2="${tn(o).toFixed(1)}" y2="${Qi}" class="st-now-line"/>
                            <path d="${y}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${y}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${T<0?"below":""}" style="left: ${S.toFixed(2)}%; top: ${E.toFixed(2)}%;"></div>${q}
                    </div>
                    ${St}`,v)}_mount(t,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${Cc}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),Be(n.parentElement,this,()=>this._actions())),_e(n.parentElement,this._actions());let r=!!i;n.classList.toggle("sky",r),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",r);for(let o of Re)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);n.innerHTML=t,this._fit()}};customElements.define("animated-sun-tracker-card",fr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...mr(e,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...mr(e,a),compact:!0}}]:null});function Mo(a){if(!a)return"cloudy";if(a==="clear-night")return"clear-night";let e=Zt(a,!1);return e==="clear-night"?"sunny":e}var Po=`
    <radialGradient id="fc-sun" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color: var(--fc-sun-core)"/>
        <stop offset="0.55" style="stop-color: var(--fc-sun-mid)"/>
        <stop offset="1" style="stop-color: var(--fc-sun-rim)"/>
    </radialGradient>
    <radialGradient id="fc-sun-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color: var(--fc-sun-halo); stop-opacity: 0.6"/>
        <stop offset="1" style="stop-color: var(--fc-sun-halo); stop-opacity: 0"/>
    </radialGradient>
    <radialGradient id="fc-moon" cx="38%" cy="38%" r="70%">
        <stop offset="0" style="stop-color: var(--fc-moon-light)"/>
        <stop offset="1" style="stop-color: var(--fc-moon-shade)"/>
    </radialGradient>
    <radialGradient id="fc-moon-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" style="stop-color: var(--fc-moon-halo); stop-opacity: 0.4"/>
        <stop offset="1" style="stop-color: var(--fc-moon-halo); stop-opacity: 0"/>
    </radialGradient>
    <linearGradient id="fc-cloud" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color: var(--fc-cloud-top)"/>
        <stop offset="1" style="stop-color: var(--fc-cloud-bottom)"/>
    </linearGradient>
    <linearGradient id="fc-cloud-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color: var(--fc-storm-top)"/>
        <stop offset="1" style="stop-color: var(--fc-storm-bottom)"/>
    </linearGradient>`,K=a=>+a.toFixed(2),Ac="M9.5 23H23a5 5 0 0 0 .9-9.92A7.5 7.5 0 0 0 9.8 13.3a4.9 4.9 0 0 0-.3 9.7Z";function xt(a,e,t,{dark:i=!1,back:n=!1}={}){return`<g class="g-cloud${n?" back":""}"><path d="${Ac}" fill="${i?"url(#fc-cloud-dark)":"url(#fc-cloud)"}" transform="translate(${K(a)} ${K(e)}) scale(${t}) translate(-17 -15.5)"/></g>`}function wr(a,e,t){return`<circle class="g-halo" cx="${a}" cy="${e}" r="${K(t*2)}" fill="url(#fc-sun-halo)"/><circle class="g-sun" cx="${a}" cy="${e}" r="${t}" fill="url(#fc-sun)"/>`}function kc(a,e,t,i=t*.86,n=t*.62,r=-40){let o=r*Math.PI/180,s=(n*n+t*t-i*i)/(2*n),l=Math.acos(Math.max(-1,Math.min(1,s/t))),c=[a+t*Math.cos(o-l),e+t*Math.sin(o-l)],d=[a+t*Math.cos(o+l),e+t*Math.sin(o+l)];return`M${K(c[0])} ${K(c[1])}A${t} ${t} 0 1 0 ${K(d[0])} ${K(d[1])}A${K(i)} ${K(i)} 0 0 1 ${K(c[0])} ${K(c[1])}Z`}function Oo(a,e,t){return`<circle class="g-halo" cx="${a}" cy="${e}" r="${K(t*1.9)}" fill="url(#fc-moon-halo)"/><path class="g-moon" d="${kc(a,e,t)}" fill="url(#fc-moon)"/>`}function Ec(){return'<circle class="g-star" cx="25" cy="8" r="0.9"/><circle class="g-star" cx="27.5" cy="15" r="0.7" style="animation-delay: -1.6s"/>'}function mi(a,e=!1){let t=e?4.6:3.4;return a.map((i,n)=>`<line class="g-drop${e?" heavy":""}" x1="${i}" y1="23.2" x2="${K(i-1.3)}" y2="${K(23.2+t)}" style="animation-delay: ${K(-n*.37)}s"/>`).join("")}function gr(a){return a.map((e,t)=>{let i=27.2+t%2*1.2;return`<path class="g-flake" d="${[0,60,120].map(r=>{let o=2.1*Math.cos(r*Math.PI/180),s=2.1*Math.sin(r*Math.PI/180);return`M${K(e-o)} ${K(i-s)}L${K(e+o)} ${K(i+s)}`}).join("")}" style="animation-delay: ${K(-t*.9)}s"/>`}).join("")}function Eo(a){return a.map((e,t)=>`<circle class="g-pellet" cx="${e}" cy="${K(26.4+t%2*1.6)}" r="1.15" style="animation-delay: ${K(-t*.45)}s"/>`).join("")}function yr(){return'<path class="g-bolt" d="M17.6 19.2 13.4 25.4h3.2l-1.7 5.2 5.4-7.2h-3.3l1.9-4.2Z"/>'}function Mc(){return'<path class="g-fog" d="M6 21.5h20M8.5 25.5h17M6 29.5h14"/>'}function Pc(){return'<path class="g-wind" d="M4 12.5h14.5a3.2 3.2 0 1 0-3.2-3.2"/><path class="g-wind" d="M4 17.5h20.3a3.6 3.6 0 1 1-3.6 3.6" style="animation-delay: -0.8s"/><path class="g-wind" d="M7 22.5h8" style="animation-delay: -1.6s"/>'}var Oc=a=>a?Oo(21.5,10.5,5.6):wr(21.5,10.5,5.6);function Lo(a,e=!1){let t;switch(a){case"sunny":case"clear-night":t=e||a==="clear-night"?Oo(15,16,8.2)+Ec():wr(16,16,7.4);break;case"partly-cloudy":t=Oc(e)+xt(14,19.5,.86);break;case"cloudy":t=xt(20,12.5,.66,{back:!0})+xt(14.5,18,.9);break;case"windy":t=Pc();break;case"foggy":t=xt(16,11.5,.78)+Mc();break;case"light-rain":t=xt(16,14,.9)+mi([13,19]);break;case"rainy":t=xt(16,14,.9)+mi([11,16,21]);break;case"pouring":t=xt(16,13.5,.94,{dark:!0})+mi([9.5,14,18.5,23],!0);break;case"stormy":t=xt(16,13.5,.94,{dark:!0})+mi([10.5,23.5])+yr();break;case"snowy":t=xt(16,14,.9)+gr([10.5,16,21.5]);break;case"snowy-rainy":t=xt(16,14,.9)+mi([11,21])+gr([16]);break;case"sleety":t=xt(16,14,.9)+Eo([11,16,21]);break;case"snowy-stormy":t=xt(16,13.5,.94,{dark:!0})+gr([10,23])+yr();break;case"sleety-stormy":t=xt(16,13.5,.94,{dark:!0})+Eo([10.5,23])+yr();break;default:t=wr(16,16,7.4)}return`<svg class="fc-glyph" viewBox="0 0 32 32" data-kind="${a}" aria-hidden="true" focusable="false">${t}</svg>`}var Lc=za,Do=Ra,Dc=46,zo=20,$c=10,_r=4,Fc={daily:1,hourly:2},en=a=>typeof a=="number"&&isFinite(a)?a:null,br=36e5,vr=a=>{let e=new Date(a);return e.setHours(0,0,0,0),e.getTime()};function Wc(a,e,t,i,n=()=>!1){let r=vr(t),o=[],s=(a??[]).map(l=>({entry:l,time:Date.parse(l?.datetime)})).filter(({time:l})=>!isNaN(l)).sort((l,c)=>l.time-c.time);for(let{entry:l,time:c}of s){if(o.length>=i)break;let d=e==="hourly"?c<=t&&t<c+br:vr(c)===r;if(e==="hourly"?c+br<=t:vr(c)<r)continue;let u=e==="hourly"?typeof l.is_daytime=="boolean"?!l.is_daytime:n(c+br/2):!1;o.push({datetime:l.datetime,time:c,condition:l.condition,kind:Mo(l.condition),night:u||l.condition==="clear-night",high:en(l.temperature),low:en(l.templow),chance:en(l.precipitation_probability),amount:en(l.precipitation),current:d})}return o}function zc(a,e){return a>0?Math.max(1,Math.min(e,Math.floor((a-2*zo)/Dc))):e}function Rc(a){let e=a.flatMap(n=>[n.high,n.low]).filter(n=>n!==null);if(!e.length)return null;let t=Math.min(...e),i=Math.max(...e);if(i-t<_r){let n=(i+t)/2;t=n-_r/2,i=n+_r/2}return{lo:t,hi:i}}function Ro(a){let e=a.length;if(e<2)return"";let t=s=>+s.toFixed(2),i=[],n=[];for(let s=0;s<e-1;s++)i.push(a[s+1].x-a[s].x),n.push((a[s+1].y-a[s].y)/i[s]);let r=[n[0]];for(let s=1;s<e-1;s++)r.push(n[s-1]*n[s]<=0?0:(n[s-1]+n[s])/2);r.push(n[e-2]);for(let s=0;s<e-1;s++){if(n[s]===0){r[s]=0,r[s+1]=0;continue}let l=r[s]/n[s],c=r[s+1]/n[s],d=Math.hypot(l,c);d>3&&(r[s]=3/d*l*n[s],r[s+1]=3/d*c*n[s])}let o="";for(let s=0;s<e-1;s++){let l=a[s],c=a[s+1],d=i[s]/3;o+=`C${t(l.x+d)},${t(l.y+r[s]*d)} ${t(c.x-d)},${t(c.y-r[s+1]*d)} ${t(c.x)},${t(c.y)}`}return o}function xr(a,e){let t=[],i=[];for(let n=0;n<a;n++)e(n)?i.push(n):i.length&&(t.push(i),i=[]);return i.length&&t.push(i),t}var Sr=a=>a.length<2?"":`M${+a[0].x.toFixed(2)},${+a[0].y.toFixed(2)}${Ro(a)}`,$o=1e3,Fo=100;He();var Wo=Mt(vt(ee)),Hc=`
${ge("")}
    :host {
        display: block;
        height: 100%;
        --fc-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
    }
    ha-card {
        height: 100%;
        overflow: hidden;
    }
    ha-card.sky {
        background: none;
        border-color: transparent;
    }
    .fc-defs { position: absolute; width: 0; height: 0; overflow: hidden; }

    .fc-card {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 18px ${zo}px 16px;
        container: fc / inline-size;
        font-family: var(--fc-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--fc-text);
        /* Theme palette: the theme's text, the high line in its primary
           color and the low in its secondary text color; the sun in Home
           Assistant's sun color, the rest of the weather in its icon color */
        --fc-text: var(--primary-text-color);
        --fc-secondary: var(--secondary-text-color);
        --fc-secondary-opacity: 1;
        --fc-high: var(--primary-color);
        --fc-low: var(--secondary-text-color);
        --fc-band: var(--primary-color);
        --fc-band-opacity: 0.08;
        --fc-sun-core: var(--state-sun-above_horizon-color, #ffc107);
        --fc-sun-mid: var(--state-sun-above_horizon-color, #ffc107);
        --fc-sun-rim: var(--state-sun-above_horizon-color, #ffc107);
        --fc-sun-halo: transparent;
        --fc-moon-light: var(--secondary-text-color);
        --fc-moon-shade: var(--secondary-text-color);
        --fc-moon-halo: transparent;
        --fc-cloud-top: var(--state-icon-color, var(--secondary-text-color));
        --fc-cloud-bottom: var(--state-icon-color, var(--secondary-text-color));
        --fc-cloud-back-opacity: 0.45;
        --fc-storm-top: var(--secondary-text-color);
        --fc-storm-bottom: var(--secondary-text-color);
        --fc-rain: var(--primary-color);
        --fc-snow: var(--secondary-text-color);
        --fc-bolt: var(--warning-color, #ffa600);
        --fc-air: var(--secondary-text-color);
    }

    /* Colorized: the weather card's sky, and weather drawn in its light */
    .fc-card.sky {
        --fc-text: ${Wo};
        --fc-secondary: ${Wo};
        --fc-secondary-opacity: ${We};
        --fc-high: rgba(255, 232, 180, 0.95);
        --fc-low: rgba(206, 222, 255, 0.72);
        --fc-band: #ffffff;
        --fc-band-opacity: 0.1;
        --fc-sun-core: #fffaf0;
        --fc-sun-mid: #ffe3a3;
        --fc-sun-rim: #ffb547;
        --fc-sun-halo: #ffc86e;
        --fc-moon-light: #ffffff;
        --fc-moon-shade: #c9d2e6;
        --fc-moon-halo: #c8d6ff;
        --fc-cloud-top: #ffffff;
        --fc-cloud-bottom: #d9e2f0;
        --fc-cloud-back-opacity: 0.55;
        --fc-storm-top: #d3d9e4;
        --fc-storm-bottom: #8f9aae;
        --fc-rain: #b8dcff;
        --fc-snow: #ffffff;
        --fc-bolt: #ffd56b;
        --fc-air: rgba(255, 255, 255, 0.85);
        background:
            ${ie(co,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Re.map(a=>`${a} ${$t}s ${ne}`).join(", ")};
    }

    /* \u2500\u2500 Header \u2500\u2500 */
    .fc-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        min-width: 0;
        margin-bottom: 12px;
        flex-shrink: 0;
    }
    .fc-title {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.01em;
        opacity: 0.94;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .fc-eyebrow {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }
    .fc-eyebrow ha-icon {
        --mdc-icon-size: 13px;
        margin-top: -0.5px;
        flex-shrink: 0;
    }
    .fc-card:not(.sky) .fc-eyebrow ha-icon { color: var(--state-icon-color, var(--primary-color)); }

    /* \u2500\u2500 Slots: one column each, the same columns in every row \u2500\u2500 */
    .fc-row {
        display: grid;
        grid-template-columns: repeat(var(--fc-n, 7), minmax(0, 1fr));
        text-align: center;
        flex-shrink: 0;
    }
    /* The time sits in the sun's glow on the right, so it's full-strength text */
    .fc-when {
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
    }
    .fc-when.current { font-weight: 650; }
    .fc-ampm { font-size: 0.8em; margin-left: 0.12em; }
    .fc-glyphs { margin-top: 6px; }
    .fc-glyph-box {
        display: flex;
        justify-content: center;
    }
    .fc-glyph {
        display: block;
        width: 30px;
        height: 30px;
        overflow: visible;
    }

    /* \u2500\u2500 The glyphs' parts \u2500\u2500 */
    .g-cloud.back { opacity: var(--fc-cloud-back-opacity); }
    .g-drop {
        stroke: var(--fc-rain);
        stroke-width: 1.7;
        stroke-linecap: round;
    }
    .g-drop.heavy { stroke-width: 2; }
    .g-flake {
        stroke: var(--fc-snow);
        stroke-width: 1.3;
        stroke-linecap: round;
        fill: none;
    }
    .g-pellet { fill: var(--fc-snow); }
    .g-bolt { fill: var(--fc-bolt); }
    .g-fog,
    .g-wind {
        fill: none;
        stroke: var(--fc-air);
        stroke-width: 1.8;
        stroke-linecap: round;
    }
    .g-star { fill: var(--fc-moon-light); }
    .g-halo, .g-cloud, .g-drop, .g-flake, .g-pellet, .g-star, .g-fog, .g-wind {
        transform-box: fill-box;
        transform-origin: center;
    }

    /* Motion is weather: drops fall, flakes drift, the cloud breathes with
       the wind. Slow and small, behind the numbers. */
    @keyframes fc-fall {
        0% { transform: translateY(-1.5px); opacity: 0; }
        25% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(2.5px); opacity: 0; }
    }
    @keyframes fc-drift {
        0% { transform: translate(0, -1.5px) rotate(0deg); opacity: 0; }
        25% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translate(-0.8px, 2px) rotate(60deg); opacity: 0; }
    }
    @keyframes fc-sway { from { transform: translateX(-0.6px); } to { transform: translateX(0.6px); } }
    @keyframes fc-breathe { from { transform: scale(0.92); opacity: 0.8; } to { transform: scale(1.04); opacity: 1; } }
    @keyframes fc-twinkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    @keyframes fc-flash { 0%, 86%, 92%, 100% { opacity: 1; } 88%, 95% { opacity: 0.35; } }
    @keyframes fc-gust { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -48; } }
    @keyframes fc-roll { from { transform: translateX(-1.2px); } to { transform: translateX(1.2px); } }

    .fc-card.moving .g-drop { animation: fc-fall 1.1s linear infinite; }
    .fc-card.moving .g-drop.heavy { animation-duration: 0.8s; }
    .fc-card.moving .g-flake { animation: fc-drift 2.8s linear infinite; }
    .fc-card.moving .g-pellet { animation: fc-fall 0.9s linear infinite; }
    .fc-card.moving .g-cloud { animation: fc-sway 5s ease-in-out infinite alternate; }
    .fc-card.moving .g-cloud.back { animation-duration: 7s; animation-direction: alternate-reverse; }
    .fc-card.moving .g-halo { animation: fc-breathe 4.5s ease-in-out infinite alternate; }
    .fc-card.moving .g-star { animation: fc-twinkle 3.2s ease-in-out infinite; }
    .fc-card.moving .g-bolt { animation: fc-flash 5s linear infinite; }
    .fc-card.moving .g-fog { animation: fc-roll 4s ease-in-out infinite alternate; }
    .fc-card.moving .g-wind { stroke-dasharray: 16 8; animation: fc-gust 3s linear infinite; }
    .fc-card.paused * { animation-play-state: paused !important; }
    @media (prefers-reduced-motion: reduce) {
        .fc-card.moving * { animation: none !important; }
    }

    /* \u2500\u2500 Temperatures: the high and low as two lines across the slots \u2500\u2500 */
    .fc-chart {
        position: relative;
        flex: 1 1 104px;
        min-height: 72px;
        /* A tall frame gives the lines room, not a mountain range */
        max-height: 168px;
        margin: 4px 0;
    }
    .fc-plot {
        position: absolute;
        /* Room above for the highs' numbers and below for the lows' */
        inset: 22px 0 22px;
    }
    .fc-chart.single .fc-plot { inset: 22px 0 8px; }
    .fc-plot svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    .fc-band { fill: var(--fc-band); opacity: var(--fc-band-opacity); }
    .fc-line {
        fill: none;
        stroke-width: 2.25;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }
    .fc-line.high { stroke: var(--fc-high); }
    .fc-line.low { stroke: var(--fc-low); }
    .fc-dot {
        position: absolute;
        width: 6px;
        height: 6px;
        margin: -3px 0 0 -3px;
        border-radius: 50%;
    }
    .fc-dot.high { background: var(--fc-high); }
    .fc-dot.low { background: var(--fc-low); }
    /* The hour or day under way: its dots ringed */
    .fc-dot.current { box-shadow: 0 0 0 2.5px rgba(255, 255, 255, 0.28); }
    .fc-card:not(.sky) .fc-dot.current { box-shadow: 0 0 0 2.5px var(--divider-color, rgba(0, 0, 0, 0.12)); }
    .fc-temp {
        position: absolute;
        transform: translate(-50%, calc(-100% - 6px));
        font-size: 15px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: -0.01em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
    }
    /* The low reads below its line, in the quiet tier: the two never rely on color alone */
    .fc-temp.low {
        transform: translate(-50%, 6px);
        font-size: 13px;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }

    /* Without the lines: the high over the low in each slot, the low in the quiet tier */
    .fc-temps { margin: 6px 0 4px; }
    .fc-temps-cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
    }
    .fc-temps-high {
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.01em;
    }
    .fc-temps-low {
        font-size: 13px;
        font-weight: 500;
        line-height: 16px;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }

    /* \u2500\u2500 Precipitation \u2500\u2500 */
    .fc-wet {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        min-height: 16px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }
    .fc-wet svg { width: 8px; height: 10px; flex-shrink: 0; fill: var(--fc-rain); }
    .fc-card.sky .fc-wet svg { fill: currentColor; }

    /* Fit to the frame, stepped down until nothing overflows (see _fit) */
    .fc-card[data-fit="short"] .fc-head { display: none; }
    .fc-card[data-fit="tight"] .fc-head { display: none; }
    .fc-card[data-fit="tight"] { padding-block: 12px 10px; }
    .fc-card[data-fit="tight"] .fc-glyph { width: 24px; height: 24px; }
    .fc-card[data-fit="tight"] .fc-glyphs { margin-top: 2px; }
    .fc-card[data-fit="tight"] .fc-chart { min-height: 56px; }
    .fc-card[data-fit="tight"] .fc-plot { inset: 19px 0 19px; }
    .fc-card[data-fit="tight"] .fc-temps { margin: 2px 0; }

    @container fc (min-width: 640px) {
        .fc-when { font-size: 14px; }
        .fc-glyph { width: 34px; height: 34px; }
        .fc-temp { font-size: 17px; line-height: 18px; }
        .fc-temp.low { font-size: 14px; }
        .fc-temps-high { font-size: 17px; line-height: 20px; }
        .fc-temps-low { font-size: 14px; line-height: 18px; }
        .fc-wet { font-size: 13px; }
    }

    .fc-no-data {
        margin: auto;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        color: var(--fc-secondary);
        opacity: var(--fc-secondary-opacity);
    }
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
        border: 0;
    }
`,Nc='<svg viewBox="0 0 8 10" aria-hidden="true"><path d="M4 0.6C4 0.6 0.8 4.6 0.8 6.6a3.2 3.2 0 0 0 6.4 0C7.2 4.6 4 0.6 4 0.6Z"/></svg>',Tr=class extends HTMLElement{constructor(){super();this.config={};this._forecast=null;this._subscribedTo="";this._fitSlots=0;this._content="";this._seen={};this._shadow=this.attachShadow({mode:"open"})}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity (e.g. weather.forecast_home)");if(t.forecast_type!==void 0&&t.forecast_type!=="daily"&&t.forecast_type!=="hourly")throw new Error("forecast_type must be daily or hourly");let i=t.entity!==this.config.entity||t.forecast_type!==this.config.forecast_type;this.config={...t},i&&(this._unsubscribe(),this._forecast=null),this._content="",this._subscribe(),this._render()}set hass(t){let i=this._hass;this._hass=t,i?.connection!==t.connection&&this._unsubscribe(),this._subscribe();let n=t.states[this.config.entity||""],r=t.states[this._sunId()],o=re(t);n===this._seen.entity&&r===this._seen.sun&&o===this._seen.locale||(this._seen={entity:n,sun:r,locale:o},this._render())}connectedCallback(){this._clock||(this._clock=setInterval(()=>this._render(),6e4)),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this)),!this._intersection&&typeof IntersectionObserver<"u"&&(this._intersection=new IntersectionObserver(([t])=>{this._shadow.querySelector(".fc-card")?.classList.toggle("paused",!t.isIntersecting)}),this._intersection.observe(this)),this._subscribe()}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._intersection?.disconnect(),this._intersection=void 0,this._unsubscribe()}_kind(){return this.config.forecast_type==="hourly"?"hourly":"daily"}_sunId(){return this.config.sun_entity||"sun.sun"}_wantedSlots(){let t=Number(this.config.forecast_slots);return!isFinite(t)||t<1?Lc[this._kind()]:Math.min(Do,Math.round(t))}_supported(){let t=Number(this._hass?.states[this.config.entity||""]?.attributes?.supported_features);return!isFinite(t)||(t&Fc[this._kind()])!==0}_subscribe(){let t=this._hass,i=this.config.entity;if(!t||!i||!this.isConnected||!t.connection?.subscribeMessage)return;let n=`${i}|${this._kind()}`;if(this._subscribedTo!==n&&(this._unsubscribe(),!(!t.states[i]||!this._supported()))){this._subscribedTo=n;try{this._subscription=t.connection.subscribeMessage(r=>{this._subscribedTo===n&&(this._forecast=Array.isArray(r?.forecast)?r.forecast:null,this._render())},{type:"weather/subscribe_forecast",entity_id:i,forecast_type:this._kind()}),this._subscription.catch(()=>{})}catch{this._subscription=void 0}}}_unsubscribe(){this._subscription?.then(t=>{typeof t=="function"&&t()}).catch(()=>{}),this._subscription=void 0,this._subscribedTo=""}_actions(){return Ge(this.config,this.config.entity)}getCardSize(){return this._lines()?4:3}getGridOptions(){return{columns:12,rows:this._lines()?4:3,min_columns:6,min_rows:3}}_lines(){return this.config?.show_lines!==!1}static async getConfigElement(){return customElements.get("animated-weather-forecast-editor")||await Ve("animated-weather-forecast-editor"),document.createElement("animated-weather-forecast-editor")}static getStubConfig(t,i=[],n=[]){return{entity:[...i,...n,...Object.keys(t?.states??{})].find(o=>o.startsWith("weather."))??"weather.forecast_home"}}_sky(){let t=this._hass?.states[this._sunId()],i=this._hass?.states[this.config.entity||""]?.state,n=t?ze(typeof t.attributes.elevation=="number"?t.attributes.elevation:null,!!t.attributes.rising,t.state==="above_horizon"):i==="clear-night"?"night":"day";if(i&&i!=="unavailable"&&i!=="unknown"){let r=Zt(i,!1,void 0,void 0,this._hass?.config?.time_zone);if(di.includes(r))return r==="sunny"||r==="clear-night"?{condition:n==="night"?"clear-night":"sunny",phase:n}:{condition:r,phase:n}}return{condition:n==="night"?"clear-night":"sunny",phase:n}}_nightAt(){let t=this._hass?.states[this._sunId()],i=o=>{let s=typeof o=="string"?Date.parse(o):NaN;if(isNaN(s))return null;let l=new Date(s);return l.getHours()+l.getMinutes()/60},n=i(t?.attributes?.next_rising)??6,r=i(t?.attributes?.next_setting)??20;return o=>{let s=new Date(o),l=s.getHours()+s.getMinutes()/60;return n<r?l<n||l>=r:l>=r&&l<n}}_slotLabel(t){let i=this._hass;if(t.current)return M(et(i,this._kind()==="hourly"?"now":"today"));if(this._kind()==="daily")try{return M(new Intl.DateTimeFormat(ye(i),{weekday:"short"}).format(new Date(t.time)))}catch{return M(new Date(t.time).toDateString().slice(0,3))}return we(It(t.datetime,i).replace(/:00(?=\s?[AaPp])/,""),"fc-ampm")}_degrees(t){return`${Et(Math.round(t),this._hass,0)}\xB0`}_wetText(t,i){if(t.chance!==null)return t.chance>=$c?`${Et(Math.round(t.chance),this._hass,0)}%`:"";if(t.amount!==null&&t.amount>0){let n=t.amount<10?1:0;return`${Et(t.amount,this._hass,n)}${i==="in"?"\u2033":` ${i}`}`}return""}_render(){let t=this._hass,i=t?.states[this.config.entity||""],n=this.config.color_palette!=="theme",{condition:r,phase:o}=this._sky(),s=pe(r,o),l=n?{"--awc-sky-top":s.top,"--awc-sky-mid":s.mid,"--awc-sky-bottom":s.bottom,"--awc-sky-glow":s.glow,"--awc-sky-scrim":s.scrim}:null,c=p=>M(et(t,p)),d=this._kind(),m=this.config.show_header===!1?"":`
            <div class="fc-head">
                ${this.config.title?`<div class="fc-title">${M(this.config.title)}</div>`:`<div class="fc-eyebrow"><ha-icon icon="${d==="hourly"?"mdi:clock-outline":"mdi:calendar-blank-outline"}"></ha-icon><span>${c(d==="hourly"?"forecast_hourly":"forecast_daily")}</span></div>`}
            </div>`,u=Array.isArray(i?.attributes?.forecast)?i.attributes.forecast:null,f=this._wantedSlots(),g=this._fitSlots?Math.min(this._fitSlots,f):f,h=Wc(this._forecast??u,d,Date.now(),g,this._nightAt());if(!i||!h.length){this._mount(`${m}<div class="fc-no-data">${c("no_forecast")}</div>`,l);return}this._mount(m+this._forecastHtml(h,i),l)}_forecastHtml(t,i){let n=this._hass,r=t.length,o=y=>(y+.5)/r*100,s=Rc(t),l=y=>s?(s.hi-y)/(s.hi-s.lo)*100:50,c=(y,A)=>({x:o(y)/100*$o,y:l(A)/100*Fo}),d=y=>c(y,t[y].high),m=y=>c(y,t[y].low),u=xr(r,y=>t[y].high!==null).map(y=>Sr(y.map(d))),f=xr(r,y=>t[y].low!==null).map(y=>Sr(y.map(m))),g=t.some(y=>y.low!==null),h=xr(r,y=>t[y].high!==null&&t[y].low!==null).filter(y=>y.length>1).map(y=>{let A=y.map(m).reverse();return`${Sr(y.map(d))}L${+A[0].x.toFixed(2)},${+A[0].y.toFixed(2)}${Ro(A)}Z`}),p=t.map((y,A)=>{let T=E=>`left: ${o(A).toFixed(2)}%; top: ${l(E).toFixed(2)}%`,S=y.current?" current":"";return(y.high!==null?`<span class="fc-dot high${S}" style="${T(y.high)}"></span><span class="fc-temp high" style="${T(y.high)}">${M(this._degrees(y.high))}</span>`:"")+(y.low!==null?`<span class="fc-dot low${S}" style="${T(y.low)}"></span><span class="fc-temp low" style="${T(y.low)}">${M(this._degrees(y.low))}</span>`:"")}).join(""),w=String(i.attributes?.precipitation_unit||"mm"),_=this.config.show_precipitation!==!1&&t.some(y=>y.chance!==null||y.amount!==null),x=t.map(y=>this._wetText(y,w)),b=t.map(y=>`<div class="fc-glyph-box">${Lo(y.kind,y.night)}</div>`).join(""),v=y=>this._slotLabel(y).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(),C=t.map((y,A)=>{let T=[y.condition?M(sr(n,{...i,state:y.condition})):"",y.high!==null?`${M(et(n,"high"))} ${M(this._degrees(y.high))}`:"",y.low!==null?`${M(et(n,"low"))} ${M(this._degrees(y.low))}`:"",_&&x[A]?`${M(et(n,"precipitation"))} ${M(x[A])}`:""].filter(Boolean);return`<li>${v(y)}: ${T.join(", ")}</li>`}).join("");return`
            <svg class="fc-defs" aria-hidden="true" focusable="false"><defs>${Po}</defs></svg>
            <div class="fc-visual" aria-hidden="true" style="display: contents; --fc-n: ${r}">
                <div class="fc-row fc-times">${t.map(y=>`<div class="fc-when${y.current?" current":""}">${this._slotLabel(y)}</div>`).join("")}</div>
                <div class="fc-row fc-glyphs">${b}</div>
                ${this._lines()?`<div class="fc-chart${g?"":" single"}">
                    <div class="fc-plot">
                        <svg viewBox="0 0 ${$o} ${Fo}" preserveAspectRatio="none">
                            ${h.map(y=>`<path class="fc-band" d="${y}"/>`).join("")}
                            ${f.filter(Boolean).map(y=>`<path class="fc-line low" d="${y}"/>`).join("")}
                            ${u.filter(Boolean).map(y=>`<path class="fc-line high" d="${y}"/>`).join("")}
                        </svg>
                        ${p}
                    </div>
                </div>`:`<div class="fc-row fc-temps">${t.map(y=>`<div class="fc-temps-cell">${y.high!==null?`<span class="fc-temps-high">${M(this._degrees(y.high))}</span>`:""}${y.low!==null?`<span class="fc-temps-low">${M(this._degrees(y.low))}</span>`:""}</div>`).join("")}</div>`}
                ${_?`<div class="fc-row fc-precip">${x.map(y=>`<div class="fc-wet">${y?`${Nc}<span>${M(y)}</span>`:""}</div>`).join("")}</div>`:""}
            </div>
            <ul class="visually-hidden">${C}</ul>`}_fit(){let t=this._shadow.querySelector(".fc-card");if(!t)return;let i=zc(t.clientWidth,Do);if(t.clientWidth>0&&i!==this._fitSlots){this._fitSlots=i,this._render();return}for(let n of["regular","short","tight"])if(t.dataset.fit=n,t.scrollHeight<=t.clientHeight+1)return}_mount(t,i){let n=this._shadow.querySelector(".fc-card");n||(this._shadow.innerHTML=`<style>${Hc}</style><ha-card><div class="fc-card"></div></ha-card>`,n=this._shadow.querySelector(".fc-card"),this._content="",Be(n.parentElement,this,()=>this._actions())),_e(n.parentElement,this._actions());let r=!!i;n.classList.toggle("sky",r),n.classList.toggle("moving",this.config.animate!==!1),n.parentElement?.classList.toggle("sky",r);for(let o of Re)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);t!==this._content&&(this._content=t,n.innerHTML=t),this._fit()}};customElements.define("animated-weather-forecast-card",Tr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-forecast-card",name:"Animated Weather Forecast",description:"The hourly or daily forecast under the weather card's sky: the weather, the high and low as lines, and the chance of rain",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Daily",config:{type:"custom:animated-weather-forecast-card",entity:e}},{label:"Hourly",config:{type:"custom:animated-weather-forecast-card",entity:e,forecast_type:"hourly"}}]:null});He();var Ho=a=>`Wind from ${Math.round(a)}\xB0`,No=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",Cr=a=>a?"mdi:weather-sunset-down":"mdi:weather-sunset-up",Ic=18,Gc=450,Bc=1600;function Ar(a,e){return e?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var Vc=400,qc=120,Yc=220,Uc=24;window.AnimatedWeatherCardGsap=jn;var Io=["regular","compact","short","tight","minimal"],Kc=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...Io.map(a=>[a,"none"])],kr=class extends HTMLElement{constructor(){super(...arguments);this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this.devTimeOverride=!1;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new Xi;this.writtenNote=null;this.noteComing=!1}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return Ar(r.find(o=>o.startsWith("weather."))??Da.entity,t)}actionsConfig(){return this.config?.dev_mode?{}:Ge(this.config,this.config?.entity)}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=o=>o===void 0||typeof o=="number"&&isFinite(o)&&o>=0&&o<=23;if(!i(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!i(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let n=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0),this.config=t;let r=this.querySelector(".weather-info");if(r&&_e(r,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let o=this.animationController;this._animationGeneration++,this.animationController=new Ne(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),o&&o.stopAllAnimations().catch(s=>k(this.config?.dev_mode,"Error stopping previous animation controller:",s))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&!!t.auto_pause!=!!n&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.applySizeState(),this.devPanel?.isOpen&&this.devPanel.dock()}),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new Ne(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new Ne(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass&&!this.config.dev_mode)return;Jn(this),this.stopPlanes();let t=this.config.color_palette||"default",i;try{i=lr(this.hass,this.config,this.currentDevCondition)}catch(O){let $=O?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  <ha-icon class="awc-empty-icon" icon="mdi:weather-cloudy-alert"></ha-icon>
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${M($)}</div>
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
            `;return}let{temperature:n,weatherCondition:r,location:o,humidity:s,windSpeed:l,windSpeedValue:c,windBearing:d,pressure:m,pressureValue:u,feelsLike:f,indoorTemperature:g,indoorHumidity:h,sun:p}=i,w=this.updatePressureTrend(u);this.currentWindSpeedValue=c;let _=p?.aboveHorizon??!1,x=p?It(_?p.sunset:p.sunrise,this._hass):"--",b=this.config.show_sun!==!1&&!!p&&x!=="--",v=!!this.config.compact,C=So(this.config),y=this.config.show_attribute_icons!==!1,A=this.config.show_attribute_labels!==!1,T=(O,$,W,F,z="")=>{let q=y||A?`<div class="attribute-label">${y?`<ha-icon class="attribute-icon" icon="${$}"></ha-icon>`:""}${A?`<span>${M(W)}</span>`:""}</div>`:"";return`<div class="attribute" data-kind="${O}">${q}<div class="attribute-value"><span class="attribute-text">${F}</span>${z}</div></div>`},S=typeof d=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${d+180}deg);" aria-label="${Ho(d)}"></ha-icon>`:"",E=w?`<ha-icon class="pressure-trend ${w}" icon="${No(w)}" aria-label="Pressure ${w}"></ha-icon>`:"",P=this.config.show_attributes!==!1?`
              <div class="weather-attributes${A?"":" values-only"}">${[T("humidity","mdi:water-percent",Oi(this._hass,"ui.card.weather.attributes.humidity","Humidity"),M(s)),T("wind","mdi:weather-windy",Oi(this._hass,"ui.card.weather.attributes.wind_speed","Wind"),M(l),S),T("pressure","mdi:gauge",Oi(this._hass,"ui.card.weather.attributes.air_pressure","Pressure"),M(m),E),b?T("sun",Cr(_),et(this._hass,_?"sunset":"sunrise"),we(x,"awc-ampm")):""].join("")}</div>`:"";this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions loading ${t==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${v?' data-variant="compact"':""} style="${M(C)}">
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
                ${!v&&this.config.show_location!==!1&&o?`<div class="location">${M(o)}</div>`:""}
                <div class="temperature" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>
                ${v?`<div class="compact-meta">${M(this.compactMeta(o,f))}</div>`:`<div class="hero-meta">${this.heroMetaHtml(f,g,h)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${v?"":P}
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
        ${or()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill()}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",i,"important");let n=()=>{let r=t.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${i} !important; }`};n(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},Vc)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&!this.config.dev_mode}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}ui("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?wo(this._hass,this.config):this.writtenNote,i=t?_o(t,this.config):null;if(!t||i===null)return t;let n=i-Date.now();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${M(t?.note??"")}</span><span class="note-short">${M(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let i=t.querySelector(".note-long"),n=t.querySelector(".note-short"),r=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),c=et(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||t.hidden?(l&&(l.textContent=c),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,c);return}r&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!t.hidden||r)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||r){this.noteTyping?.finish(),i&&(i.textContent=o.note),n&&(n.textContent=o.line),t.hidden=!1,this.applySizeState(),r&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,o.note,s),this.fadeThrough(n,o.line,s)}compactMeta(t,i){return[this.config?.show_location!==!1?t:"",i?`${et(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,i=M(et(this._hass,"indoors")),n='<ha-icon class="indoor-icon" icon="mdi:home-thermometer-outline"></ha-icon>';if(t==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let r=`<span class="indoor-label">${i}</span>`;return t==="both"?n+r:r}heroMetaHtml(t,i,n){let r=[];t&&r.push(`<span class="feels-like">${M(et(this._hass,"feels_like"))} ${M(t)}</span>`);let o=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}mountDevPanel(){if(!this.config?.dev_mode){this.devPanel?.disconnect(),this.devPanel=void 0;return}let t=window.AnimatedWeatherCardDevPanel;if(t){this.devPanel??(this.devPanel=new t(this)),this.devPanel.mount();return}ui("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevPanel).then(()=>{this.isConnected&&this.mountDevPanel()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}attachEventListeners(){this.mountDevPanel(),this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(Be(t,this,()=>this.actionsConfig()),_e(t,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>{this.initializeAnimations(),this.config?.dev_mode&&!this.currentDevCondition&&(this.currentDevCondition="sunny")},100);this.pendingTimeouts.push(i)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),Li(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),Di(this)),this.devPanel?.updatePauseButton()}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return tt(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n)return;this.clearAnimations();let r;if(i.dev_mode)r=this.currentDevCondition||"sunny";else{if(!this.hass||!i.entity)return;let m=this.hass.states[i.entity];if(!m)return;r=m.state.toLowerCase()}let o=Zt(r,i.dev_mode??!1,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone),s=(i.color_palette||"default")==="theme"?"theme-colors":"",l=n.classList.contains("loading"),c=(...m)=>{n.className=["animated-weather-card",o,...m,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},d=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||d){c(i.animate===!1?"static":""),this.currentWeatherClass=o;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=o,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(o)),this.startPlanes()}},i.dev_mode?50:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),Jn(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(li(this),n.querySelectorAll(".star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(Hi(i),Xa(i));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),Qn(this.pendingTimeouts)}set hass(t){let i=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),!i){this.render(),this.initializeAnimations();return}if(re(i)!==re(t)){this.render(),this.initializeAnimations();return}if(this.config.dev_mode||!this.config.entity)return;let n=i.states[this.config.entity],r=t.states[this.config.entity];if(!n||!r){this.render(),this.initializeAnimations();return}if(n.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=c=>c==null?"__missing__":String(c),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","friendly_name"];for(let c of l)if(s(n.attributes[c])!==s(r.attributes[c])){o=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(o=!0),!o){let c=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.humidity_sensor_entity,this.config.pressure_sensor_entity,this.config.wind_speed_sensor_entity,this.config.wind_direction_sensor_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity];for(let d of c){if(!d)continue;let m=i.states[d]?.state,u=t.states[d]?.state;if(m!==u){o=!0;break}}}if(o)this._updateDataInPlace();else{let c=this.config.sun_entity||"sun.sun";i.states[c]!==t.states[c]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass&&!this.config.dev_mode)return;let t;try{t=lr(this._hass,this.config,this.currentDevCondition)}catch{return}let{temperature:i,weatherCondition:n,humidity:r,windSpeed:o,windSpeedValue:s,windBearing:l,pressure:c,pressureValue:d,feelsLike:m,indoorTemperature:u,indoorHumidity:f,sun:g}=t;this.currentWindSpeedValue=s;let h=(b,v)=>{b&&b.textContent!==v&&(b.textContent=v)};this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),n);let p=(b,v)=>{h(this.querySelector(`.weather-attributes .attribute[data-kind="${b}"] .attribute-text`),v)};p("humidity",r),p("wind",o),p("pressure",c),this.syncValueIcon("wind","wind-bearing-arrow",typeof l=="number"?{icon:"mdi:navigation",transform:`rotate(${l+180}deg)`,label:Ho(l)}:null);let w=this.updatePressureTrend(d);if(this.syncValueIcon("pressure","pressure-trend",w?{icon:No(w),label:`Pressure ${w}`,className:w}:null),g){let b=this.querySelector('.weather-attributes .attribute[data-kind="sun"]'),v=b?.querySelector(".attribute-text"),C=we(It(g.aboveHorizon?g.sunset:g.sunrise,this._hass),"awc-ampm");v&&v.innerHTML!==C&&(v.innerHTML=C),h(b?.querySelector(".attribute-label > span")??null,et(this._hass,g.aboveHorizon?"sunset":"sunrise"));let y=b?.querySelector(".attribute-icon");y&&y.getAttribute("icon")!==Cr(g.aboveHorizon)&&y.setAttribute("icon",Cr(g.aboveHorizon))}let _=this.querySelector(".compact-meta");_&&h(_,this.compactMeta(t.location,m)),h(this.querySelector(".location"),t.location);let x=this.querySelector(".hero-meta");if(x){let b=this.heroMetaHtml(m,u,f);x.innerHTML!==b&&(x.innerHTML=b)}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(s)}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,i,n){let r=this.querySelector(`.weather-attributes .attribute[data-kind="${t}"] .attribute-value`);if(!r)return;let o=r.querySelector(`.${i}`);if(!n){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[i,n.className].filter(Boolean).join(" "),o.getAttribute("icon")!==n.icon&&o.setAttribute("icon",n.icon),o.setAttribute("aria-label",n.label),o.style.transform=n.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(t.querySelectorAll(".note-long, .note-short")).map(u=>{let f=u.textContent??"",g=document.createElement("span");g.className="note-typed";let h=document.createElement("span");return h.className="note-untyped",h.textContent=f,u.replaceChildren(g,h),{span:u,text:f,typed:g,rest:h}}),n=Math.max(0,...i.map(u=>u.text.length)),r=Math.min(Bc,Math.max(Gc,n*Ic)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),c=0,d={text:i.map(u=>u.text).join(""),finish:()=>{s(c);for(let u of i)u.span.textContent=u.text;this.noteTyping===d&&(this.noteTyping=void 0)}},m=()=>{let u=Math.min(1,(Date.now()-l)/r);for(let f of i){let g=Math.round(u*f.text.length);f.typed.textContent=f.text.slice(0,g),f.rest.textContent=f.text.slice(g)}u<1?c=o(m):d.finish()};this.noteTyping=d,c=o(m)}fadeThrough(t,i,n){if(!t)return;let r=this.heroTextPending.get(t);if((r??t.textContent)===i)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||o){t.textContent=i,n?.();return}if(this.heroTextPending.set(t,i),r!==void 0)return;let s=()=>{let c=this.heroTextPending.get(t);this.heroTextPending.delete(t),c!==void 0&&(t.textContent=c),n?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:qc,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:Yc,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.config.dev_mode)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){ui("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new t(this,{intensity:1,scale:1,devMode:this.config.dev_mode||!1},this.config);this.planes=i,i.start().then(()=>{this.animationsPaused&&i.pause()}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(i=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let i=this.flightTracker.update(po(this._hass,this.config.flights_entity));i.length&&this.flyPlanes(i)}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride)?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}disconnectedCallback(){this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.devPanel?.disconnect(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Qn(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new Zi({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let i=t.attributes?.elevation;return ze(typeof i=="number"?i:Number(i),!!t.attributes?.rising,t.state!=="below_horizon")}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let i=this.currentSkyPhase();t.dataset.phase!==i&&(t.dataset.phase=i)}applySizeState(){let t=this.querySelector(".animated-weather-card"),i=t?.querySelector(".weather-info");if(!t||!i)return;let n=t.querySelector(".main-weather-info"),r=t.querySelector(".weather-attributes");if(t.dataset.height="regular",r){let d=t.dataset.metrics;t.dataset.metrics="row";let m=Array.from(r.children),u=parseFloat(getComputedStyle(r).columnGap)||0,f=m.reduce((p,w)=>p+w.getBoundingClientRect().width,0)+u*Math.max(0,m.length-1),g=r.clientWidth-f,h=g<-.5||d==="grid"&&g<Uc;t.dataset.metrics=h?"grid":"row"}let o=t.dataset.variant==="compact",s=o?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),c=()=>i.scrollHeight>i.clientHeight+1||!o&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1;if(!l||l.hidden){delete t.dataset.note;for(let d of Io)if(t.dataset.height=d,!c())return;return}for(let[d,m]of Kc)if(t.dataset.height=d,t.dataset.note=m,!c())return}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:this.noteEnabled()?{columns:12,rows:5,min_columns:6,min_rows:3}:{columns:12,rows:4,min_columns:6,min_rows:3}}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Ve("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",kr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Ar(e,a)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Ar(e,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=pe("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Fa} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${Mt(vt(ee))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
