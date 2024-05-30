(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self;function aa(a){a:{var b=["CLOSURE_FLAGS"];for(var c=n,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}a=b&&b[a];return null!=a?a:!1};function ba(a){a=a.o;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function ca(a,b){return a.g?a.m.slice(0,a.g.index)+b+a.m.slice(a.g.index):a.m+b}function da(a){let b="&act=1&ri=1";a.h&&a.o&&(b+=ba(a));return ca(a,b)}function ea(a,b){return a.h&&a.i||a.l?1==b?a.h?a.i:ca(a,"&dct=1"):2==b?ca(a,"&ri=2"):ca(a,"&ri=16"):a.m}
var fa=class{constructor({url:a,Z:b}){this.m=a;this.o=b;b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}}};function ha(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function ia(a){let b=0;for(const c in a)b++};/*

 SPDX-License-Identifier: Apache-2.0
*/
var r=class{constructor(a){this.g=a}toString(){return this.g}},ka=new r("about:invalid#zClosurez");class la{constructor(a){this.ha=a}}function t(a){return new la(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const ma=new la(a=>/^[^:]*([/?#]|$)/.test(a));var na=t("http"),pa=t("https"),qa=t("ftp"),ra=t("mailto"),sa=t("intent"),ta=t("market"),ua=t("itms"),va=t("itms-appss");const wa=[t("data"),na,pa,ra,qa,ma];function xa(a,b=wa){if(a instanceof r)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof la&&d.ha(a))return new r(a)}}function ya(a,b=wa){return xa(a,b)||ka}var za=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Aa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};function Ba(a){n.setTimeout(()=>{throw a;},0)};var Ca=aa(610401301),Da=aa(188588736);var Ea;const Fa=n.navigator;Ea=Fa?Fa.userAgentData||null:null;function Ga(a){return Ca?Ea?Ea.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function u(a){var b;a:{if(b=n.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function v(){return Ca?!!Ea&&0<Ea.brands.length:!1}function Ia(){return v()?Ga("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")};function Ja(){return u("iPhone")&&!u("iPod")&&!u("iPad")};function Ka(a){Ka[" "](a);return a}Ka[" "]=function(){};var La=Ja(),Ma=u("iPad");var Na=Ja()||u("iPod"),Oa=u("iPad");!u("Android")||Ia();Ia();u("Safari")&&(Ia()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?Ga("Microsoft Edge"):u("Edg/"))||v()&&Ga("Opera"));var Pa={},Qa=null;function w(a){return Array.prototype.slice.call(a)};var x=Symbol(),Ra=Symbol(),Sa=Symbol();function y(a,b,c){return c?a|b:a&~b}var z=(a,b)=>{a[x]=b;return a};function A(a){a[x]|=34;return a}function Ta(a,b){z(b,(a|0)&-14591)}function Ua(a,b){z(b,(a|34)&-14557)}function Va(a){a=a>>14&1023;return 0===a?536870912:a};var Wa={},Xa={};function Ya(a){return!(!a||"object"!==typeof a||a.ka!==Xa)}function Za(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let $a;function ab(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=a[x]|0;if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;z(a,d|1);return!0}var bb;const cb=[];z(cb,55);bb=Object.freeze(cb);function db(a){if(a&2)throw Error();}
class eb{constructor(a,b,c){this.i=0;this.g=a;this.h=b;this.l=c}next(){if(this.i<this.g.length){const a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.l,a):a}}return{done:!0,value:void 0}}[Symbol.iterator](){return new eb(this.g,this.h,this.l)}}class fb{}class gb{}Object.freeze(new fb);Object.freeze(new gb);let ib;function jb(a){a=Error(a);Aa(a,"warning");return a};function kb(a){if(!Number.isFinite(a))throw jb("enum");return a|0}function lb(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}function D(a){return null==a||"string"===typeof a?a:void 0}function nb(a,b,c,d){if(null!=a&&"object"===typeof a&&a.D===Wa)return a;if(!Array.isArray(a))return c?d&2?(a=b[Ra])?b=a:(a=new b,A(a.j),b=b[Ra]=a):b=new b:b=void 0,b;let e=c=a[x]|0;0===e&&(e|=d&32);e|=d&2;e!==c&&z(a,e);return new b(a)}
function ob(a,b,c){if(b){if("string"!==typeof a)throw Error();return a}let d;return null!=(d=D(a))?d:c?"":void 0};let pb;const qb={},vb=(()=>class extends Map{constructor(){super()}})();function wb(a){return a}function xb(a){if(a.s&2)throw Error("Cannot mutate an immutable Map");}
var E=class extends vb{constructor(a,b,c=wb,d=wb){super();let e=a[x]|0;e|=64;z(a,e);this.s=e;this.B=b;this.v=c;this.K=this.B?yb:d;for(let f=0;f<a.length;f++){const h=a[f],g=c(h[0],!1,!0);let k=h[1];b?void 0===k&&(k=null):k=d(h[1],!1,!0,void 0,void 0,e);super.set(g,k)}}Y(a=zb){if(0!==this.size)return this.H(a)}H(a=zb){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}clear(){xb(this);super.clear()}delete(a){xb(this);return super.delete(this.v(a,
!0,!1))}entries(){var a=this.W();return new eb(a,Ab,this)}keys(){return this.ia()}values(){var a=this.W();return new eb(a,E.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){xb(this);a=this.v(a,!0,!1);return null==a?this:null==b?(super.delete(a),this):super.set(a,this.K(b,!0,!0,this.B,!1,this.s))}has(a){return super.has(this.v(a,!1,!1))}get(a){a=this.v(a,!1,!1);const b=super.get(a);if(void 0!==b){var c=this.B;return c?(c=this.K(b,!1,!0,c,this.ga,this.s),
c!==b&&super.set(a,c),c):b}}W(){return Array.from(super.keys())}ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};E.prototype.toJSON=void 0;E.prototype.ka=Xa;function yb(a,b,c,d,e,f){a=nb(a,d,c,f);e&&(a=Bb(a));return a}function zb(a){return a}function Ab(a){return[a,this.get(a)]}let Cb;function Db(){return Cb||(Cb=new E(A([]),void 0,void 0,void 0,qb))};function Eb(a,b){return Fb(b)}function Fb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(ab(a,void 0,0))return}else{if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof E)return a.Y()}}return a};function Gb(a,b,c){a=w(a);var d=a.length;const e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(const f in e)b[f]=c(e[f])}return a}function Hb(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=ab(a,void 0,0)?void 0:e&&(a[x]|0)&2?a:Ib(a,b,c,void 0!==d,e);else if(Za(a)){const f={};for(let h in a)f[h]=Hb(a[h],b,c,d,e);a=f}else a=b(a,d);return a}}
function Ib(a,b,c,d,e){const f=d||c?a[x]|0:0;d=d?!!(f&32):void 0;a=w(a);for(let h=0;h<a.length;h++)a[h]=Hb(a[h],b,c,d,e);c&&c(f,a);return a}function Jb(a){return Hb(a,Kb,void 0,void 0,!1)}function Kb(a){return a.D===Wa?a.toJSON():a instanceof E?a.Y(Jb):Fb(a)};function Lb(a,b,c=Ua){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[x]|0;d&2||(b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16))),a=b?z(a,(d|34)&-12293):Ib(a,Lb,d&4?Ua:c,!0,!0));return a}a.D===Wa?(c=a.j,d=c[x],a=d&2?a:Mb(a,c,d,!0)):a instanceof E&&!(a.s&2)&&(c=A(a.H(Lb)),a=new E(c,a.B,a.v,a.K));return a}}function Nb(a){const b=a.j;return Mb(a,b,b[x],!1)}function Mb(a,b,c,d){a=a.constructor;pb=b=Ob(b,c,d);b=new a(b);pb=void 0;return b}
function Ob(a,b,c){const d=c||b&2?Ua:Ta,e=!!(b&32);a=Gb(a,b,f=>Lb(f,e,d));a[x]=a[x]|32|(c?2:0);return a}function Bb(a){const b=a.j,c=b[x];return c&2?Mb(a,b,c,!1):a};function F(a,b){a=a.j;return G(a,a[x],b)}function Pb(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}function G(a,b,c,d){if(-1===c)return null;const e=Va(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(Pb(a,b,e,c)&&null!=Sa){var h;a=null!=(h=ib)?h:ib={};h=a[Sa]||0;4<=h||(a[Sa]=h+1,h=Error(),Aa(h,"incident"),Ba(h))}return d}return Pb(a,b,e,c)}}function Qb(a,b,c){const d=a.j;let e=d[x];db(e);H(d,e,b,c);return a}
function H(a,b,c,d,e){const f=Va(b);if(c>=f||e){let h=b;if(b&256)e=a[a.length-1];else{if(null==d)return h;e=a[f+(+!!(b&512)-1)]={};h|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);h!==b&&z(a,h);return h}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function I(a,b,c){return void 0!==Rb(a,b,c)}function Sb(a,b,c){a=G(a,b,c);return Array.isArray(a)?a:bb}function Tb(a,b){0===a&&(a=K(a,b));return a=y(a,1,!0)}function Ub(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Vb(a,b,c,d,e,f){const h=b&2;a:{var g=c,k=b&2;c=!1;if(null==g){if(k){a=Db();break a}g=[]}else if(g.constructor===E){if(0==(g.s&2)||k){a=g;break a}g=g.H()}else Array.isArray(g)?c=!!((g[x]|0)&2):g=[];if(k){if(!g.length){a=Db();break a}c||(c=!0,A(g))}else if(c){c=!1;k=w(g);for(g=0;g<k.length;g++){const l=k[g]=w(k[g]);Array.isArray(l[1])&&(l[1]=A(l[1]))}g=k}c||((g[x]|0)&64?g[x]&=-33:32&b&&(g[x]|=32));f=new E(g,e,ob,f);H(a,b,d,f,!1);a=f}if(null==a)return a;!h&&e&&(a.ga=!0);return a}
function Wb(a,b){a=a.j;const c=a[x];return Vb(a,c,G(a,c,b),b,void 0,ob)}function Rb(a,b,c){a=a.j;let d=a[x];const e=G(a,d,c,!1);b=nb(e,b,!1,d);b!==e&&null!=b&&H(a,d,c,b,!1);return b}function L(a,b,c){b=Rb(a,b,c);if(null==b)return b;a=a.j;let d=a[x];if(!(d&2)){const e=Bb(b);e!==b&&(b=e,H(a,d,c,b,!1))}return b}function K(a,b){a=y(a,2,!!(2&b));a=y(a,32,!0);return a=y(a,2048,!1)}function Xb(a,b,c){32&b&&c||(a=y(a,32,!1));return a}
function Yb(a,b){a=a.j;let c=a[x];const d=2&c?1:2;let e=Sb(a,c,b);var f=e[x]|0;if(!(4&f)){if(4&f||Object.isFrozen(e))e=w(e),f=K(f,c),c=H(a,c,b,e);for(var h=0,g=0;h<e.length;h++){const k=D(e[h]);null!=k&&(e[g++]=k)}g<h&&(e.length=g);f=Tb(f,c);f=y(f,20,!0);f=y(f,4096,!1);f=y(f,8192,!1);z(e,f);2&f&&Object.freeze(e)}Ub(f)||(h=f,f=(g=1===d||4===d&&!!(32&f))?y(f,2,!0):Xb(f,c,!1),f!==h&&z(e,f),g&&Object.freeze(e));2===d&&Ub(f)&&(e=w(e),f=K(f,c),f=Xb(f,c,!1),z(e,f),H(a,c,b,e));return e}
function Zb(a,b){a=F(a,b);return null==a?a:Number.isFinite(a)?a|0:void 0}function O(a,b){return null!=a?a:b}function P(a,b,c=!1){a=F(a,b);return O(null==a||"boolean"===typeof a?a:"number"===typeof a?!!a:void 0,c)}function Q(a,b){return O(D(F(a,b)),"")}function R(a,b,c=0){return O(Zb(a,b),c)}function $b(a,b,c){if(null!=c&&"boolean"!==typeof c)throw a=typeof c,Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);return Qb(a,b,c)}
function ac(a,b,c){if(null!=c){if("number"!==typeof c)throw jb("int32");if(!Number.isFinite(c))throw jb("int32");c|=0}Qb(a,b,c)}function S(a,b,c){if(null!=c&&"string"!==typeof c)throw Error();return Qb(a,b,c)}function bc(a,b,c){Qb(a,b,null==c?c:kb(c))};function cc(a){$a=!0;try{return JSON.stringify(a.toJSON(),Eb)}finally{$a=!1}}var T=class{constructor(a){a:{null==a&&(a=pb);pb=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error("narr");b=a[x]|0;if(b&2048)throw Error("farr");if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,Za(c[d]))){b|=256;c=d-(+!!(b&512)-1);if(1024<=c)throw Error("pvtlmt");b=b&-16760833|(c&1023)<<14}}z(a,b)}this.j=a}toJSON(){return $a?dc(this,this.j,!1):dc(this,Ib(this.j,Kb,void 0,void 0,!1),!0)}};
T.prototype.D=Wa;T.prototype.toString=function(){return dc(this,this.j,!1).toString()};
function dc(a,b,c){var d=Da?void 0:a.constructor.A;const e=(c?a.j:b)[x];a=b.length;if(!a)return b;let f,h;if(Za(c=b[a-1])){a:{var g=c;let m={},p=!1;for(var k in g){let q=g[k];if(Array.isArray(q)){let B=q;if(ab(q,d,+k)||Ya(q)&&0===q.size)q=null;q!=B&&(p=!0)}null!=q?m[k]=q:p=!0}if(p){for(var l in m){g=m;break a}g=null}}g!=c&&(f=!0);a--}for(k=+!!(e&512)-1;0<a;a--){l=a-1;c=b[l];l-=k;if(!(null==c||ab(c,d,l)||Ya(c)&&0===c.size))break;h=!0}if(!f&&!h)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b};var ec=class extends T{};var fc=class extends T{constructor(){super()}};var gc=class extends T{};var hc=class extends T{};var ic=class extends T{u(){return Q(this,3)}X(a){$b(this,5,a)}};var U=class extends T{u(){return Q(this,1)}X(a){$b(this,2,a)}};var jc=class extends T{};function kc(a){a=a.j;var b=a[x],c=b,d=!(2&b),e=!!(2&c);b=e?1:2;d&&(d=!e);e=Sb(a,c,7);var f=e[x]|0;const h=!!(4&f);if(!h){f=Tb(f,c);var g=e,k=c,l=!!(2&f);l&&(k=y(k,2,!0));let m=!l,p=!0,q=0,B=0;for(;q<g.length;q++){const C=nb(g[q],ic,!1,k);if(C instanceof ic){if(!l){const J=!!((C.j[x]|0)&2);m&&(m=!J);p&&(p=J)}g[B++]=C}}B<q&&(g.length=B);f=y(f,4,!0);f=y(f,16,p);f=y(f,8,m);z(g,f);l&&Object.freeze(g)}if(d&&!(8&f||!e.length&&(1===b||4===b&&32&f))){Ub(f)&&(e=w(e),f=K(f,c),c=H(a,c,7,e));d=e;g=f;for(f=0;f<
d.length;f++)k=d[f],l=Bb(k),k!==l&&(d[f]=l);g=y(g,8,!0);g=y(g,16,!d.length);z(d,g);f=g}Ub(f)||(d=f,f=(g=1===b||4===b&&!!(32&f))?y(f,!e.length||16&f&&(!h||32&f)?2:2048,!0):Xb(f,c,!1),f!==d&&z(e,f),g&&Object.freeze(e));2===b&&Ub(f)&&(e=w(e),f=K(f,c),f=Xb(f,c,!1),z(e,f),H(a,c,7,e));return e}var lc=class extends T{};lc.A=[6,7];function mc(a){a=a.j;const b=a[x];return Vb(a,b,G(a,b,1),1,lc)}var nc=class extends T{};nc.A=[17];var oc=class extends T{};var pc=class extends T{constructor(){super()}};function qc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var rc={capture:!0},sc={passive:!0},tc=qc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function uc(a){return a?a.passive&&tc()?a:a.capture||!1:!1}function V(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,uc(d))};function vc(a,b){if(b instanceof r)if(b instanceof r)b=b.g;else throw Error("");else b=za.test(b)?b:void 0;a.href=void 0===b?ka.toString():b};var wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)xc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var zc=/#|$/;
function Ac(a,b){var c=a.search(zc),d=yc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}var Bc=/[?&]($|#)/;function Cc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var Dc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let Ec=[];const Fc=()=>{const a=Ec;Ec=[];for(const b of a)try{b()}catch(c){}};
var Gc=a=>{Ec.push(a);1==Ec.length&&(window.Promise?Promise.resolve().then(Fc):window.setImmediate?setImmediate(Fc):setTimeout(Fc,0))},Hc=a=>{var b=W;"complete"===b.readyState||"interactive"===b.readyState?Gc(a):b.addEventListener("DOMContentLoaded",a)},Mc=a=>{var b=window;"complete"===b.document.readyState?Gc(a):b.addEventListener("load",a)};function Nc(a=document){return a.createElement("img")};function Oc(a,b,c=null,d=!1){Pc(a,b,c,d)}function Pc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Nc(a.document);if(c||d){const f=h=>{c&&c(h);if(d){h=a.google_image_requests;const g=Array.prototype.indexOf.call(h,e,void 0);0<=g&&Array.prototype.splice.call(h,g,1)}e.removeEventListener&&e.removeEventListener("load",f,uc());e.removeEventListener&&e.removeEventListener("error",f,uc())};V(e,"load",f);V(e,"error",f)}e.src=b;a.google_image_requests.push(e)};let Qc=0;function Rc(a){return(a=Sc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Sc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function Tc(a){if(!(.01<Math.random())){var b=Sc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Rc(a)}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Oc(b,a,void 0,!1)}};var W=document,Uc=window;const Vc=[na,pa,ra,qa,ma,ta,ua,sa,va];function Wc(a,b){if(a instanceof r)return a;const c=ya(a,Vc);c===ka&&b(a);return c}
var Xc=a=>{var b=`${"http:"===Uc.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)xc(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var Yc=a=>{var b=W;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Zc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const $c=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var ad=class{constructor(a,b){this.g=a;this.h=b}},bd=class{constructor(a,b){this.url=a;this.V=!!b;this.depth=null}};let cd=null;function dd(){const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function ed(){const a=n.performance;return a&&a.now?a.now():null};var fd=class{constructor(a,b){var c=ed()||dd();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const X=n.performance,gd=!!(X&&X.mark&&X.measure&&X.clearMarks),hd=qc(()=>{var a;if(a=gd){var b;if(null===cd){cd="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(cd=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=cd;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function id(a){a&&X&&hd()&&(X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class jd{constructor(){var a=window;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=hd()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new fd(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;X&&hd()&&X.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(ed()||dd())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;X&&hd()&&X.mark(b);!this.g||
2048<this.h.length||this.h.push(a)}}};function kd(a,b){const c={};c[a]=b;return[c]}function ld(a,b,c,d,e){const f=[];Cc(a,function(h,g){(h=md(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)}
function md(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(md(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ld(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function nd(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function od(a,b){let c="https://pagead2.googlesyndication.com"+b,d=nd(a)-b.length;if(0>d)return"";a.g.sort(function(f,h){return f-h});b=null;let e="";for(let f=0;f<a.g.length;f++){const h=a.g[f],g=a.h[h];for(let k=0;k<g.length;k++){if(!d){b=null==b?h:b;break}let l=ld(g[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=null==b?h:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class pd{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function qd(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function rd(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{id(e),c=a.m(b,new Zc(f,{message:qd(f)}),void 0,void 0)}catch(h){a.l(217,h)}if(c){let h,g;null==(h=window.console)||null==(g=h.error)||g.call(h,f)}else throw f;}return d}function sd(a,b){var c=td;return(...d)=>rd(c,a,()=>b.apply(void 0,d))}
var wd=class{constructor(a=null){this.pinger=ud;this.g=a;this.h=null;this.i=!1;this.m=this.l}l(a,b,c,d,e){e=e||"jserror";let f;try{const N=new pd;var h=N;h.g.push(1);h.h[1]=kd("context",a);b.error&&b.meta&&b.id||(b=new Zc(b,{message:qd(b)}));if(b.msg){h=N;var g=b.msg.substring(0,512);h.g.push(2);h.h[2]=kd("msg",g)}var k=b.meta||{};b=k;if(this.h)try{this.h(b)}catch(M){}if(d)try{d(b)}catch(M){}d=N;k=[k];d.g.push(3);d.h[3]=k;d=n;k=[];let Ha;b=null;do{var l=d;try{var m;if(m=!!l&&null!=l.location.href)b:{try{Ka(l.foo);
m=!0;break b}catch(M){}m=!1}var p=m}catch(M){p=!1}p?(Ha=l.location.href,b=l.document&&l.document.referrer||null):(Ha=b,b=null);k.push(new bd(Ha||""));try{d=l.parent}catch(M){d=null}}while(d&&l!=d);for(let M=0,Ic=k.length-1;M<=Ic;++M)k[M].depth=Ic-M;l=n;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(p=1;p<k.length;++p){var q=k[p];q.url||(q.url=l.location.ancestorOrigins[p-1]||"",q.V=!0)}var B=k;let rb=new bd(n.location.href,!1);l=null;const sb=B.length-
1;for(q=sb;0<=q;--q){var C=B[q];!l&&$c.test(C.url)&&(l=C);if(C.url&&!C.V){rb=C;break}}C=null;const Ud=B.length&&B[sb].url;0!=rb.depth&&Ud&&(C=B[sb]);f=new ad(rb,C);if(f.h){B=N;var J=f.h.url||"";B.g.push(4);B.h[4]=kd("top",J)}var tb={url:f.g.url||""};if(f.g.url){var ub=f.g.url.match(wc),oa=ub[1],Jc=ub[3],Kc=ub[4];J="";oa&&(J+=oa+":");Jc&&(J+="//",J+=Jc,Kc&&(J+=":"+Kc));var Lc=J}else Lc="";oa=N;tb=[tb,{url:Lc}];oa.g.push(5);oa.h[5]=tb;vd(this.pinger,e,N,this.i,c)}catch(N){try{vd(this.pinger,e,{context:"ecmserr",
rctx:a,msg:qd(N),url:f&&f.g.url},this.i,c)}catch(Ha){}}return!0}};class xd{};function vd(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof pd?f=c:(f=new pd,Cc(c,(g,k)=>{var l=f;const m=l.l++;g=kd(k,g);l.g.push(m);l.h[m]=g}));const h=od(f,"/pagead/gen_204?id="+b+"&");h&&Oc(n,h)}catch(f){}}function yd(){var a=ud,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}class zd{constructor(){this.g=Math.random()}};let ud,td;const Y=new jd;var Ad=()=>{window.google_measure_js_timing||(Y.g=!1,Y.h!=Y.i.google_js_reporting_queue&&(hd()&&Array.prototype.forEach.call(Y.h,id,void 0),Y.h.length=0))};(a=>{ud=null!=a?a:new zd;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());yd();td=new wd(Y);td.h=b=>{const c=Qc;0!==c&&(b.jc=String(c),b.shv=Rc(c))};td.i=!0;"complete"==window.document.readyState?Ad():Y.g&&V(window,"load",()=>{Ad()})})();
var Bd=(a,b)=>sd(a,b),Cd=(a,b)=>{var c=xd;var d="U";c.U&&c.hasOwnProperty(d)||(d=new c,c.U=d);c=[];!b.eid&&c.length&&(b.eid=c.toString());vd(ud,a,b,!0)};function Dd(a=window){return a};ia({va:0,ua:1,ra:2,ma:3,sa:4,na:5,ta:6,pa:7,qa:8,la:9,oa:10,wa:11});ia({ya:0,za:1,xa:2});function Ed(a){var b=new Fd,c=b.j;const d=c[x]|0;db(b.j[x]);var e=d&2;b=G(c,d,1,!1);Array.isArray(b)||(b=bb);const f=!!(d&32);let h=b[x]|0;0===h&&f&&!e?(h|=33,z(b,h)):h&1||(h|=1,z(b,h));if(e)h&2||A(b),Object.freeze(b);else if(2&h||2048&h)b=w(b),e=1,f&&(e|=32),z(b,e),H(c,d,1,b,!1);c=b;if(Array.isArray(a))for(var g=0;g<a.length;g++)c.push(kb(a[g]));else for(g of a)c.push(kb(g))}var Fd=class extends T{constructor(){super()}};Fd.A=[1];[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);Ed([1,8,9,10,11,12,2,3,4,5,15,16]);Ed([1,6,7,9,10,11,12,2,3,4,5,13,14]);Ed([1,6,7,9,10,11,12,2,3,4,5,13,14]);new Fd;var Gd=(a,b)=>{b=Q(a,2)||b;if(!b)return"";if(P(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];Wb(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Hd=(a,b=[])=>{b=0<b.length?b:Yc("data-asoch-targets");a=mc(a);const c=[];for(let g=0;g<b.length;++g){var d=b[g].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let k of e)if(!a.has(k)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var h=a.get(e[d]);f=Nb(f).toJSON();h=h.toJSON();const k=Math.max(f.length,h.length);for(let l=0;l<k;++l)null==f[l]&&(f[l]=h[l]);f=new lc(f)}e=Wb(f,4);null!=Zb(f,5)&&e.set("nb",R(f,5,0).toString());c.push({element:b[g],data:f})}else Cd("gdn-asoch",{type:1,data:d})}return c},Kd=(a,b,c,d)=>{c=Gd(b,c);if(0!==c.length){var e=609===d;if("2"===Ac(c,"ase")&&1087!==d){var f;const h=!(null==(f=W.featurePolicy)||!f.allowedFeatures().includes("attribution-reporting"));f=e?4:h?6:5;let g=
"";e||h&&!Id(c)?(c=Jd(c,"nis",f.toString()),a.setAttribute("attributionsrc",g)):h&&Id(c)&&(g=Jd(da(new fa({url:c})),"nis",f.toString()),a.setAttribute("attributionsrc",g))}e&&I(b,ec,24)&&(e=L(b,ec,24),a.setAttribute("attributionDestination",Q(e,2)),a.setAttribute("attributionSourceNonce",Q(e,1)));vc(a,Wc(c,Xc(d)));a.target||(a.target=null!=D(F(b,11))?Q(b,11):"_top")}},Ld=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!P(a,1)){const c=b.element;Kd(c,a,c.href,609)}},Md=(a,b,c)=>{b=encodeURIComponent(b);
const d=encodeURIComponent(c);c=new RegExp("[?&]"+b+"=([^&]+)");const e=c.exec(a);b=b+"="+d;return e?a.replace(c,e[0].charAt(0)+b):a.replace("?","?"+b+"&")},Id=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),Nd=a=>{const b=n.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&I(a,jc,8)){const d=Q(L(a,jc,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,Q(L(a,jc,8),6));break}}},Od=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&I(a,U,12)&&(d.push(L(a,U,12)),c.push(L(a,U,12).u()));e=(f,h)=>
{if(h)for(const g of d)h[g.u()]&&g.X(!0)};a=n.oneAfmaInstance;for(const f of c){let h;null==(h=a)||h.canOpenAndroidApp(f,e,()=>{},b)}},Qd=(a,b,c,d)=>{if(!b||!I(b,jc,8))return!1;const e=L(b,jc,8);let f=Q(e,2);Wb(b,10).forEach((g,k)=>{f=Md(f,k,g)});Pd(b)&&P(b,15)&&!/[?&]label=/.test(c)&&(c=Jd(c,"label","deep_link_fallback"));const h=g=>d.openStoreOverlay(g,void 0,Q(e,6));return d.redirectForStoreU2({clickUrl:c,trackingUrl:Q(e,3),finalUrl:f,pingFunc:P(b,13)?d.httpTrack:d.click,openFunc:(null==a?0:P(a,
1))?h:d.openIntentOrNativeApp,isExternalClickUrl:P(b,13)})},Rd=(a,b,c,d)=>{c&&c.startsWith("intent:")?d.openIntentOrNativeApp(c):a?b?d.openBrowser(c):d.openChromeCustomTab(c):d.openSystemBrowser(c,{useFirstPackage:!0,useRunningProcess:!0})},Td=(a,b,c,d,e,f,h,g=!1,k=!1,l=!1)=>{const m=P(e,15);if(m&&null!=D(F(e,22)))Rd(c,d,Q(e,22),h);else{var p=Id(f);if(a&&b&&(!m||!p)&&(f=g?Sd(f):Sd(f,h.click,l),k&&(null==e?0:P(e,21,!1))))return;Rd(c,d,f,h)}},Sd=(a,b=null,c=!1)=>{if(null!==b){const e=new fa({url:a});
if(e.h&&e.i||e.l){if(e.l&&c){a=da(e);var d=encodeURIComponent("ase");c=encodeURIComponent("3");d=new RegExp("[?&]"+d+"=([^&]+)","g");let f=0;const h=[];for(let g=d.exec(a);null!==g;){if(g[1]==c){let k="?"==g[0].charAt(0)?1:0;h.push(a.slice(f,g.index+k));f=g.index+g[0].length+k}g=d.exec(a)}h.push(a.slice(f));b(h.join(""))}else b(da(e));return ea(e,1)}}else return{Z:b}={},b=new fa({url:a,Z:b}),b.h&&b.i||b.l?navigator.sendBeacon?navigator.sendBeacon(da(b),"")?ea(b,1):ea(b,2):ea(b,0):a;return a},Vd=(a,
b=!0)=>{b&&Uc.fetch?Uc.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Oc(Uc,a)}):Oc(Uc,a)},Jd=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Pd=a=>{for(const b of kc(a))if(3===R(b,1,0)&&Q(b,2))return!0;return!1};var Z=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";var Wd=class extends T{constructor(){super()}};function Xd(a,b){return S(a,2,b)}function Yd(a,b){return S(a,3,b)}function Zd(a,b){return S(a,4,b)}function $d(a,b){return S(a,5,b)}function ae(a,b){return S(a,9,b)}
function be(a,b){{const m=a.j;let p=m[x];db(p);if(null==b)H(m,p,10);else{var c=b[x]|0,d=c,e=!!(2&c)||!!(2048&c),f=e||Object.isFrozen(b),h;if(h=!f)h=!1;var g=!0,k=!0;for(let q=0;q<b.length;q++){var l=b[q];e||(l=!!((l.j[x]|0)&2),g&&(g=!l),k&&(k=l))}e||(c=y(c,5,!0),c=y(c,8,g),c=y(c,16,k));if(h||f&&c!==d)b=w(b),d=0,c=K(c,p),c=Xb(c,p,!0);c!==d&&z(b,c);H(m,p,10,b)}}return a}function ce(a,b){return $b(a,11,b)}function de(a,b){return S(a,1,b)}function ee(a,b){return $b(a,7,b)}var fe=class extends T{constructor(){super()}};
fe.A=[10,6];const ge="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function he(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function ie(a){let b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function je(){var a=window;if(!ie(a))return null;const b=he(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ge).then(c=>{null!=b.uach||(b.uach=c);return c});return b.uach_promise=a}
function ke(a){let b;return ce(be($d(Xd(de(Zd(ee(ae(Yd(new fe,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new Wd;d=S(d,1,c.brand);return S(d,2,c.version)}))||[]),a.wow64||!1)}function le(){let a,b;return null!=(b=null==(a=je())?void 0:a.then(c=>ke(c)))?b:null};function me(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==D(F(c,2))&&S(c,2,a.href)}}function ne(a,b){return ha(a,c=>c.element===b)}function oe(a){Hc(Bd(556,()=>{new pe(a||{})}))}
function qe(a,b){if(!b.defaultPrevented||a.I===b){for(var c,d,e=b.target;(!c||!d)&&e;){d||"A"!=e.tagName||(d=e);var f=e.hasAttribute("data-asoch-targets"),h=e.hasAttribute("data-asoch-fixed-value");if(!c)if(h)c=new lc(JSON.parse(e.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==e.tagName||f)if(f=f&&"true"===e.getAttribute("data-asoch-is-dynamic")?Hd(a.h,[e]):a.g,f=ne(f,e))c=f.data;e=e.parentElement}e=c&&!P(c,1);if(a.C&&a.l&&b.defaultPrevented)re(a,b,d,e?c:a.l);else{if(e){if(!a.C&&b.defaultPrevented){re(a,
b,d,c);return}f=c;for(var g of Yb(f,6))Vd(g)}a.L&&e&&P(c,21,!1)&&(Dc(b),(g=c)&&Q(g,2)&&(f=Md(Q(g,2),"ae","1"),S(g,2,f)));if(d&&e){c=e?c:null;(g=ne(a.g,d))?g=g.data:(g=new lc,S(g,2,d.href),S(g,11,d.target||"_top"),a.g.push({element:d,data:g}));Kd(d,c||g,Q(g,2),557);se(a,b,d,c);for(var k of Yb(a.h,17))g=W.body,e={},"function"===typeof window.CustomEvent?f=new CustomEvent(k,e):(f=document.createEvent("CustomEvent"),f.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail)),g.dispatchEvent(f);if(null==
c?0:null!=D(F(c,19))){k=new fc;null!=Zb(c,5)?(g=k,e=R(c,5,0),bc(g,1,e)):(g=Z(d.href,"nb"),""!=g&&bc(k,1,+g));g=Z(d.href,"nx");""!=g&&ac(k,2,+g);g=Z(d.href,"ny");""!=g&&ac(k,3,+g);g=Z(d.href,"bg");""!=g&&S(k,4,g);g=Z(d.href,"nm");""!=g&&ac(k,5,+g);g=Z(d.href,"mb");""!=g&&ac(k,6,+g);g=d.href;e=g.search(zc);f=0;for(var l=[];0<=(h=yc(g,f,"bg",e));)l.push(g.substring(f,h)),f=Math.min(g.indexOf("&",h)+1||e,e);l.push(g.slice(f));g=l.join("").replace(Bc,"$1");vc(d,Wc(g,Xc(1211)));f=Q(c,19);g=null!=lb(F(c,
20))?O(lb(F(c,20)),0):null;h=cc(k);k=a.o;e=Dd(n);l=new pc;f=S(l,1,f);f=S(f,4,h);f=S(f,10,Date.now().toString());null!==g&&ac(f,2,g);null!==k&&S(f,3,k);bc(f,9,7);var m;null==e||null==(m=e.fence)||m.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation_start",eventData:JSON.stringify(f),destination:["buyer"],once:!0});var p;null==e||null==(p=e.fence)||p.reportEvent({eventType:"click",destination:["component-seller"]})}P(a.h,16)||a.O?te(a,b,d,c):(m="",(p=n.oneAfmaInstance)&&(m=p.appendClickSignals(d.href)),
ue(a,b,d,c,m))}}}}
function re(a,b,c,d){if(a.I===b&&a.J){const f=new hc(a.J),h=Q(d,9);var e="";switch(R(f,4,1)){case 2:if(O(lb(F(f,2)),0))e="blocked_fast_click";else if(Q(f,1)||Q(f,7))e="blocked_border_click";break;case 3:e=W;e=e.getElementById?e.getElementById("common_15click_anchor"):null;const g=window;if("function"===typeof g.copfcChm&&e){d=Nb(d);bc(d,5,12);Wb(d,4).set("nb",(12).toString());const k=ne(a.g,e);k?k.data=d:a.g.push({element:e,data:d});!a.T&&c&&(se(a,b,c,d),S(d,2,c.href));g.copfcChm(b,Gd(d,e.href),null,
I(f,gc,10)?cc(L(f,gc,10)):null);a.T&&se(a,b,e,d)}e="onepointfiveclick_first_click"}h&&e&&Vd(h+"&label="+e,!1);Tc(a.P)}}
function se(a,b,c,d){if(!P(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(vc(c,Wc(e[0],Xc(557)));!c.id;)if(f="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),!W.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,W.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===
typeof window.ja&&window.ja(f,d?R(d,5,0):0);"function"===typeof window.vti&&window.vti(c);a.i&&"function"===typeof window.ss&&(a.S?window.ss(f,1,a.i):window.ss(a.i,1));0<e.length&&(a=0<a.o.length&&(null==d||null==D(F(d,19)))?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1],vc(c,Wc(a,Xc(557))))}}
async function te(a,b,c,d){let e="";var f=n.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.O)){if(a.ca)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=Jd(e,"nas",f.encodedNas)}}ue(a,b,c,d,e)}
function ue(a,b,c,d,e){a.N++;0>a.F&&(a.F=Date.now());const f=P(a.h,2),h=f&&300<Date.now()-a.R,g=n.oneAfmaInstance;g?(Dc(b),(()=>{var k=P(d,13)?e:g.logScionEventAndAddParam(e);if(!a.G&&d&&I(d,U,12)){var l=L(d,U,12).u();var m="";if(0<kc(d).length)for(const p of kc(d))m+=Q(p,2)+" "+p.u()+" ";P(L(d,U,12),2)?(g.click(k),g.openAndroidApp(l),l=!0):l=!1}else l=!1;l||Qd(a.m,d,k,g)||Td(f,h,a.ea,a.G,d,k,g,a.da,a.L,a.aa)})()):(b=window,a.ba&&b.pawsig&&"function"===typeof b.pawsig.clk?(Cd("paw_sigs",{msg:"click",
count:a.N.toString(),elapsed:(Date.now()-a.F).toString()}),b.pawsig.clk(c)):h&&(b=null!=c.getAttribute("attributionsrc")&&"6"===Ac(c.getAttribute("attributionsrc"),"nis")?Sd(c.href,()=>{}):Sd(c.href),b!==c.href&&vc(c,Wc(b,Xc(599)))));h&&(a.R=Date.now());Tc(a.P)}
var pe=class{constructor(a){this.G=Na||La||Oa||Ma;var b=Yc("data-asoch-meta");if(1!==b.length)Cd("gdn-asoch",{type:2,data:b.length});else{this.P=70;this.h=new nc(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.M=a["extra-meta"]?new nc(JSON.parse(a["extra-meta"])):null;this.O="true"===a["is-fsn"];this.ca="true"===a["is-tap-disabled-for-fsn"];this.m=a["ios-store-overlay-config"]?new oc(JSON.parse(a["ios-store-overlay-config"])):null;this.ea="true"===a["use-cct-over-browser"];this.T="true"===
a["correct-redirect-url-for-och-15-click"];this.da="true"===a["send-click-ping-by-js-in-och"];this.C="true"===a["default-msg-in-och"];this.ba="true"===a["enable-paw"];this.L="true"===a["allow-redirection-muted-in-och"];this.aa="true"===a["check-afma-in-sonic"];this.o="";b=le();null!=b&&b.then(d=>{var e=cc(d);d=[];for(var f=0,h=0;h<e.length;h++){var g=e.charCodeAt(h);255<g&&(d[f++]=g&255,g>>=8);d[f++]=g}e=3;void 0===e&&(e=0);if(!Qa)for(Qa={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
h=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var k=f.concat(h[g].split(""));Pa[g]=k;for(var l=0;l<k.length;l++){var m=k[l];void 0===Qa[m]&&(Qa[m]=l)}}e=Pa[e];f=Array(Math.floor(d.length/3));h=e[64]||"";for(g=k=0;k<d.length-2;k+=3){var p=d[k],q=d[k+1];m=d[k+2];l=e[p>>2];p=e[(p&3)<<4|q>>4];q=e[(q&15)<<2|m>>6];m=e[m&63];f[g++]=l+p+q+m}l=0;m=h;switch(d.length-k){case 2:l=d[k+1],m=e[(l&15)<<2]||h;case 1:d=d[k],f[g]=e[d>>2]+e[(d&3)<<4|l>>4]+m+h}this.o=f.join("")});this.g=Hd(this.h);this.C&&(this.l=null,
mc(this.h).forEach(d=>{null!=this.l||null==D(F(d,2))||null==D(F(d,9))||P(d,13)||(this.l=d)}));this.fa=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.R=-Infinity;this.F=this.N=0;this.i=Q(this.h,5)||"";this.S=P(this.h,11);this.M&&(this.S=P(this.M,11));this.J=this.I=null;P(this.h,3)||(Ld(this.g),$b(this.h,3,!0));me(this.g);a=n.oneAfmaInstance;!this.G&&a&&Od(this.g,this.fa);var c;if(a&&(null==(c=this.m)?0:P(c,2)))switch(c=()=>{const d=O(lb(F(this.m,4)),0);0<d?n.setTimeout(()=>{Nd(this.g)},
d):Nd(this.g)},R(this.m,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:Mc(c);break;default:Nd(this.g)}V(W,"click",Bd(557,d=>{qe(this,d)}),rc);V(W,"auxclick",Bd(557,d=>{1===d.button&&qe(this,d)}),rc);this.i&&"function"===typeof window.ss&&V(W.body,"mouseover",Bd(626,()=>{window.ss(this.i,0)}),sc);"function"===typeof window.ivti&&window.ivti(W.body);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,e)=>{this.I=d;this.J=e})}}};var ve=Bd(555,a=>oe(a));Qc=70;const we=Sc(70,document.currentScript);if(null==we)throw Error("JSC not found 70");const xe={},ye=we.attributes;for(let a=ye.length-1;0<=a;a--){const b=ye[a].name;0===b.indexOf("data-jcp-")&&(xe[b.substring(9)]=ye[a].value)}ve(xe);}).call(this);
