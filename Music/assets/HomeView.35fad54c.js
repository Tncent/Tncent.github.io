import{u as e,t,c as n,p as a,i as o,a as l,b as s,d as r,e as i,r as u,o as d,h as c,f,g as v,j as p,k as h,l as m,m as g,n as x,q as b,s as w,v as y,w as _,x as C,y as P,z as S,A as k,B as D,C as z,D as $,E as I,V as A,F as j,G as E,H as N,T as R,I as O,J as L,K as F,L as M,M as T,N as U,O as V,_ as B,P as Z,Q as X,R as Y,S as W,U as K,W as H,X as G,Y as q,Z as J,$ as Q,a0 as ee,a1 as te,a2 as ne,a3 as ae,a4 as oe,a5 as le,a6 as se,a7 as re,a8 as ie,a9 as ue,aa as de,ab as ce,ac as fe,ad as ve,ae as pe,af as he,ag as me}from"./index.8c222edc.js";import{_ as ge}from"./Skeleton.2af31e85.js";import{C as xe}from"./CoverLists.f02ddca3.js";import{N as be}from"./headers.9774b89e.js";import{A as we}from"./ArtistLists.491e4419.js";import{_ as ye,a as _e}from"./Tabs.3737cafc.js";import{_ as Ce,a as Pe}from"./Grid.633dfea7.js";import"./use-houdini.316adbdf.js";import"./Add.055214c0.js";import"./get-slot.65c4337d.js";var Se;const ke=(Se={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(e){return null==Se?void 0:Se[e]});var De=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ze=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var $e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Ie=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var Ae="\\ud800-\\udfff",je="\\u2700-\\u27bf",Ee="a-z\\xdf-\\xf6\\xf8-\\xff",Ne="A-Z\\xc0-\\xd6\\xd8-\\xde",Re="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Oe="["+Re+"]",Le="\\d+",Fe="["+je+"]",Me="["+Ee+"]",Te="[^"+Ae+Re+Le+je+Ee+Ne+"]",Ue="(?:\\ud83c[\\udde6-\\uddff]){2}",Ve="[\\ud800-\\udbff][\\udc00-\\udfff]",Be="["+Ne+"]",Ze="(?:"+Me+"|"+Te+")",Xe="(?:"+Be+"|"+Te+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",We="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",He="[\\ufe0e\\ufe0f]?",Ge=He+Ke+("(?:\\u200d(?:"+["[^"+Ae+"]",Ue,Ve].join("|")+")"+He+Ke+")*"),qe="(?:"+[Fe,Ue,Ve].join("|")+")"+Ge,Je=RegExp([Be+"?"+Me+"+"+Ye+"(?="+[Oe,Be,"$"].join("|")+")",Xe+"+"+We+"(?="+[Oe,Be+Ze,"$"].join("|")+")",Be+"?"+Ze+"+"+Ye,Be+"+"+We,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Le,qe].join("|"),"g");function Qe(e,n,a){return e=t(e),void 0===(n=a?void 0:n)?function(e){return Ie.test(e)}(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.match($e)||[]}(e):e.match(n)||[]}var et,tt=RegExp("['’]","g");const nt=(et=function(n,a,o){return a=a.toLowerCase(),n+(o?e(t(a).toLowerCase()):a)},function(e){return function(e,t,n,a){var o=-1,l=null==e?0:e.length;for(a&&l&&(n=e[++o]);++o<l;)n=t(n,e[o],o,e);return n}(Qe(function(e){return(e=t(e))&&e.replace(De,ke).replace(ze,"")}(e).replace(tt,"")),et,"")});function at(e,t,a){return n(e,{key:`carousel-item-duplicate-${t}-${a}`})}function ot(e,t,n){return n?0===e?t-3:e===t-1?0:e-1:e}function lt(e,t){return t?e+1:e}function st(e){return window.TouchEvent&&e instanceof window.TouchEvent}function rt(e,t){let{offsetWidth:n,offsetHeight:a}=e;if(t){const t=getComputedStyle(e);n=n-parseFloat(t.getPropertyValue("padding-left"))-parseFloat(t.getPropertyValue("padding-right")),a=a-parseFloat(t.getPropertyValue("padding-top"))-parseFloat(t.getPropertyValue("padding-bottom"))}return{width:n,height:a}}function it(e,t,n){return e<t?t:e>n?n:e}const ut=s("n-carousel-methods"),dt=(e="unknown",t="component")=>{const n=o(ut);return n||l(e,`\`${t}\` must be placed inside \`n-carousel\`.`),n},ct=r({name:"CarouselDots",props:{total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},setup(e){const{mergedClsPrefixRef:t}=i(e),n=u([]),a=dt();function o(e){var t;null===(t=n.value[e])||void 0===t||t.focus()}return d((()=>n.value.length=0)),{mergedClsPrefix:t,dotEls:n,handleKeydown:function(t,n){switch(t.key){case"Enter":case" ":return t.preventDefault(),void a.to(n)}e.keyboard&&function(e){var t;if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)return;const n=null===(t=document.activeElement)||void 0===t?void 0:t.nodeName.toLowerCase();if("input"===n||"textarea"===n)return;const{code:l}=e,s="PageUp"===l||"ArrowUp"===l,r="PageDown"===l||"ArrowDown"===l,i="PageUp"===l||"ArrowRight"===l,u="PageDown"===l||"ArrowLeft"===l,d=a.isVertical(),c=d?s:i,f=d?r:u;if(!c&&!f)return;e.preventDefault(),c&&!a.isNextDisabled()?(a.next(),o(a.currentIndexRef.value)):f&&!a.isPrevDisabled()&&(a.prev(),o(a.currentIndexRef.value))}(t)},handleMouseenter:function(t){"hover"===e.trigger&&a.to(t)},handleClick:function(t){"click"===e.trigger&&a.to(t)}}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return c("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},f(this.total,(n=>{const a=n===this.currentIndex;return c("div",{"aria-selected":a,ref:e=>t.push(e),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,a&&`${e}-carousel__dot--active`],key:n,onClick:()=>this.handleClick(n),onMouseenter:()=>this.handleMouseenter(n),onKeydown:e=>this.handleKeydown(e,n)})})))}}),ft=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),vt=c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),pt=r({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=i(e),{isVertical:n,isPrevDisabled:a,isNextDisabled:o,prev:l,next:s}=dt();return{mergedClsPrefix:t,isVertical:n,isPrevDisabled:a,isNextDisabled:o,prev:l,next:s}},render(){const{mergedClsPrefix:e}=this;return c("div",{class:`${e}-carousel__arrow-group`},c("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},ft),c("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},vt))}}),ht="CarouselItem",mt=r({name:ht,setup(e){const{mergedClsPrefixRef:t}=i(e),n=dt(nt(ht),`n-${nt(ht)}`),a=u(),o=v((()=>{const{value:e}=a;return e?n.getSlideIndex(e):-1})),l=v((()=>n.isPrev(o.value))),s=v((()=>n.isNext(o.value))),r=v((()=>n.isActive(o.value))),d=v((()=>n.getSlideStyle(o.value)));return p((()=>n.addSlide(a.value))),h((()=>{n.removeSlide(a.value)})),{mergedClsPrefix:t,selfElRef:a,isPrev:l,isNext:s,isActive:r,index:o,style:d,handleClick:function(e){const{value:t}=o;void 0!==t&&(null==n||n.onCarouselItemClick(t,e))}}},render(){var e;const{$slots:t,mergedClsPrefix:n,isPrev:a,isNext:o,isActive:l,index:s,style:r}=this;return c("div",{ref:"selfElRef",class:[`${n}-carousel__slide`,{[`${n}-carousel__slide--current`]:l,[`${n}-carousel__slide--prev`]:a,[`${n}-carousel__slide--next`]:o}],role:"option",tabindex:"-1","data-index":s,"aria-hidden":!l,style:r,onClickCapture:this.handleClick},null===(e=t.default)||void 0===e?void 0:e.call(t,{isPrev:a,isNext:o,isActive:l,index:s}))}}),gt=m("carousel","\n position: relative;\n width: 100%;\n height: 100%;\n touch-action: pan-y;\n overflow: hidden;\n",[g("slides","\n display: flex;\n width: 100%;\n height: 100%;\n transition-timing-function: var(--n-bezier);\n transition-property: transform;\n ",[g("slide","\n flex-shrink: 0;\n position: relative;\n width: 100%;\n height: 100%;\n outline: none;\n overflow: hidden;\n ",[x("> img","\n display: block;\n ")])]),g("dots","\n position: absolute;\n display: flex;\n flex-wrap: nowrap;\n ",[b("dot",[g("dot","\n height: var(--n-dot-size);\n width: var(--n-dot-size);\n background-color: var(--n-dot-color);\n border-radius: 50%;\n cursor: pointer;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[x("&:focus","\n background-color: var(--n-dot-color-focus);\n "),b("active","\n background-color: var(--n-dot-color-active);\n ")])]),b("line",[g("dot","\n border-radius: 9999px;\n width: var(--n-dot-line-width);\n height: 4px;\n background-color: var(--n-dot-color);\n cursor: pointer;\n transition:\n width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[x("&:focus","\n background-color: var(--n-dot-color-focus);\n "),b("active","\n width: var(--n-dot-line-width-active);\n background-color: var(--n-dot-color-active);\n ")])])]),g("arrow","\n transition: background-color .3s var(--n-bezier);\n cursor: pointer;\n height: 28px;\n width: 28px;\n display: flex;\n align-items: center;\n justify-content: center;\n background-color: rgba(255, 255, 255, .2);\n color: var(--n-arrow-color);\n border-radius: 8px;\n user-select: none;\n -webkit-user-select: none;\n font-size: 18px;\n ",[x("svg","\n height: 1em;\n width: 1em;\n "),x("&:hover","\n background-color: rgba(255, 255, 255, .3);\n ")]),b("vertical","\n touch-action: pan-x;\n ",[g("slides","\n flex-direction: column;\n "),b("fade",[g("slide","\n top: 50%;\n left: unset;\n transform: translateY(-50%);\n ")]),b("card",[g("slide","\n top: 50%;\n left: unset;\n transform: translateY(-50%) translateZ(-400px);\n ",[b("current","\n transform: translateY(-50%) translateZ(0);\n "),b("prev","\n transform: translateY(-100%) translateZ(-200px);\n "),b("next","\n transform: translateY(0%) translateZ(-200px);\n ")])])]),b("usercontrol",[g("slides",[x(">",[x("div","\n position: absolute;\n top: 50%;\n left: 50%;\n width: 100%;\n height: 100%;\n transform: translate(-50%, -50%);\n ")])])]),b("left",[g("dots","\n transform: translateY(-50%);\n top: 50%;\n left: 12px;\n flex-direction: column;\n ",[b("line",[g("dot","\n width: 4px;\n height: var(--n-dot-line-width);\n margin: 4px 0;\n transition:\n height .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[b("active","\n height: var(--n-dot-line-width-active);\n ")])])]),g("dot","\n margin: 4px 0;\n ")]),g("arrow-group","\n position: absolute;\n display: flex;\n flex-wrap: nowrap;\n "),b("vertical",[g("arrow","\n transform: rotate(90deg);\n ")]),b("show-arrow",[b("bottom",[g("dots","\n transform: translateX(0);\n bottom: 18px;\n left: 18px;\n ")]),b("top",[g("dots","\n transform: translateX(0);\n top: 18px;\n left: 18px;\n ")]),b("left",[g("dots","\n transform: translateX(0);\n top: 18px;\n left: 18px;\n ")]),b("right",[g("dots","\n transform: translateX(0);\n top: 18px;\n right: 18px;\n ")])]),b("left",[g("arrow-group","\n bottom: 12px;\n left: 12px;\n flex-direction: column;\n ",[x("> *:first-child","\n margin-bottom: 12px;\n ")])]),b("right",[g("dots","\n transform: translateY(-50%);\n top: 50%;\n right: 12px;\n flex-direction: column;\n ",[b("line",[g("dot","\n width: 4px;\n height: var(--n-dot-line-width);\n margin: 4px 0;\n transition:\n height .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[b("active","\n height: var(--n-dot-line-width-active);\n ")])])]),g("dot","\n margin: 4px 0;\n "),g("arrow-group","\n bottom: 12px;\n right: 12px;\n flex-direction: column;\n ",[x("> *:first-child","\n margin-bottom: 12px;\n ")])]),b("top",[g("dots","\n transform: translateX(-50%);\n top: 12px;\n left: 50%;\n ",[b("line",[g("dot","\n margin: 0 4px;\n ")])]),g("dot","\n margin: 0 4px;\n "),g("arrow-group","\n top: 12px;\n right: 12px;\n ",[x("> *:first-child","\n margin-right: 12px;\n ")])]),b("bottom",[g("dots","\n transform: translateX(-50%);\n bottom: 12px;\n left: 50%;\n ",[b("line",[g("dot","\n margin: 0 4px;\n ")])]),g("dot","\n margin: 0 4px;\n "),g("arrow-group","\n bottom: 12px;\n right: 12px;\n ",[x("> *:first-child","\n margin-right: 12px;\n ")])]),b("fade",[g("slide","\n position: absolute;\n opacity: 0;\n transition-property: opacity;\n pointer-events: none;\n ",[b("current","\n opacity: 1;\n pointer-events: auto;\n ")])]),b("card",[g("slides","\n perspective: 1000px;\n "),g("slide","\n position: absolute;\n left: 50%;\n opacity: 0;\n transform: translateX(-50%) translateZ(-400px);\n transition-property: opacity, transform;\n ",[b("current","\n opacity: 1;\n transform: translateX(-50%) translateZ(0);\n z-index: 1;\n "),b("prev","\n opacity: 0.4;\n transform: translateX(-100%) translateZ(-200px);\n "),b("next","\n opacity: 0.4;\n transform: translateX(0%) translateZ(-200px);\n ")])])]),xt=["transitionDuration","transitionTimingFunction"],bt=Object.assign(Object.assign({},D.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let wt=!1;const yt=r({name:"Carousel",props:bt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=i(e),o=u(null),l=u(null),s=u([]),r={value:[]},d=v((()=>"vertical"===e.direction)),c=v((()=>d.value?"height":"width")),f=v((()=>d.value?"bottom":"right")),m=v((()=>"slide"===e.effect)),g=v((()=>e.loop&&1===e.slidesPerView&&m.value)),x=v((()=>"custom"===e.effect)),b=v((()=>!m.value||e.centeredSlides?1:e.slidesPerView)),I=v((()=>x.value?1:e.slidesPerView)),A=v((()=>"auto"===b.value||"auto"===e.slidesPerView&&e.centeredSlides)),j=u({width:0,height:0}),E=v((()=>{const{value:t}=s;if(!t.length)return[];const{value:n}=A;if(n)return t.map((e=>rt(e)));const{value:a}=I,{value:o}=j,{value:l}=c;let r=o[l];if("auto"!==a){const{spaceBetween:t}=e;r=(r-(a-1)*t)*(1/Math.max(1,a))}const i=Object.assign(Object.assign({},o),{[l]:r});return t.map((()=>i))})),N=v((()=>{const{value:t}=E;if(!t.length)return[];const{centeredSlides:n,spaceBetween:a}=e,{value:o}=c,{[o]:l}=j.value;let s=0;return t.map((({[o]:e})=>{let t=s;return n&&(t+=(e-l)/2),s+=e+a,t}))})),R=u(!1),T=v((()=>{const{transitionStyle:t}=e;return t?w(t,xt):{}})),U=v((()=>x.value?0:function(e){if(void 0===e)return 0;if("number"==typeof e)return e;const t=e.match(/^((\d+)?\.?\d+?)(ms|s)?$/);if(t){const[,e,,n="ms"]=t;return Number(e)*("ms"===n?1:1e3)}return 0}(T.value.transitionDuration))),V=v((()=>{const{value:t}=s;if(!t.length)return[];const n=!(A.value||1===I.value),a=e=>{if(n){const{value:t}=c;return{[t]:`${E.value[e][t]}px`}}};if(x.value)return t.map(((e,t)=>a(t)));const{effect:o,spaceBetween:l}=e,{value:r}=f;return t.reduce(((e,t,n)=>{const s=Object.assign(Object.assign({},a(n)),{[`margin-${r}`]:`${l}px`});return e.push(s),!R.value||"fade"!==o&&"card"!==o||Object.assign(s,T.value),e}),[])})),B=v((()=>{const{value:e}=b,{length:t}=s.value;if("auto"!==e)return Math.max(t-e,0)+1;{const{value:e}=E,{length:n}=e;if(!n)return t;const{value:a}=N,{value:o}=c,l=j.value[o];let s=e[e.length-1][o],r=n;for(;r>1&&s<l;)r--,s+=a[r]-a[r-1];return it(r+1,1,n)}})),Z=v((()=>{return e=B.value,g.value&&e>3?e-2:e;var e})),X=lt(e.defaultIndex,g.value),Y=u(ot(X,B.value,g.value)),W=y(_(e,"currentIndex"),Y),K=v((()=>lt(W.value,g.value)));function H(t){var n,a;const o=ot(t=it(t,0,B.value-1),B.value,g.value),{value:l}=W;o!==W.value&&(Y.value=o,null===(n=e["onUpdate:currentIndex"])||void 0===n||n.call(e,o,l),null===(a=e.onUpdateCurrentIndex)||void 0===a||a.call(e,o,l))}function G(t=K.value){return n=t,a=B.value,o=e.loop,n<0?null:0===n?o?a-1:null:n-1;var n,a,o}function q(t=K.value){return n=t,a=B.value,o=e.loop,n>a-1?null:n===a-1?o?0:null:n+1;var n,a,o}function J(e){return K.value===ve(e)}function Q(){return null===G()}function ee(){return null===q()}function te(e){const t=it(lt(e,g.value),0,B.value);e===W.value&&t===K.value||H(t)}function ne(){const e=G();null!==e&&H(e)}function ae(){const e=q();null!==e&&H(e)}let oe=!1,le=0;const se=u({});function re(e,t=0){se.value=Object.assign({},T.value,{transform:d.value?`translateY(${-e}px)`:`translateX(${-e}px)`,transitionDuration:`${t}ms`})}function ie(e=0){m.value?ue(K.value,e):0!==le&&(!oe&&e>0&&(oe=!0),re(le=0,e))}function ue(e,t){const n=de(e);n!==le&&t>0&&(oe=!0),le=de(K.value),re(n,t)}function de(e){let t;return t=e>=B.value-1?ce():N.value[e]||0,t}function ce(){if("auto"===b.value){const{value:e}=c,{[e]:t}=j.value,{value:n}=N,a=n[n.length-1];let o;if(void 0===a)o=t;else{const{value:t}=E;o=a+t[t.length-1][e]}return o-t}{const{value:e}=N;return e[B.value-1]||0}}const fe={currentIndexRef:W,to:te,prev:function(){oe&&g.value||ne()},next:function(){oe&&g.value||ae()},isVertical:()=>d.value,isHorizontal:()=>!d.value,isPrev:function(e){const t=ve(e);return null!==t&&G()===t},isNext:function(e){const t=ve(e);return null!==t&&q()===t},isActive:J,isPrevDisabled:Q,isNextDisabled:ee,getSlideIndex:ve,getSlideStyle:function(t){const n=ve(t);if(-1!==n){const t=[V.value[n]],a=fe.isPrev(n),o=fe.isNext(n);return a&&t.push(e.prevSlideStyle||""),o&&t.push(e.nextSlideStyle||""),O(t)}},addSlide:function(e){if(!e)return;s.value.push(e)},removeSlide:function(e){if(!e)return;const t=ve(e);-1!==t&&s.value.splice(t,1)},onCarouselItemClick:function(t,n){let a=!oe&&!ye&&!_e;"card"===e.effect&&a&&!J(t)&&(te(t),a=!1);a||(n.preventDefault(),n.stopPropagation())}};function ve(e){return"number"==typeof e?e:e?s.value.indexOf(e):-1}a(ut,fe);let pe=null;function he(){pe&&(clearInterval(pe),pe=null)}function me(){he();!e.autoplay||Z.value<2||(pe=window.setInterval(ae,e.interval))}let ge=0,xe=0,be=0,we=0,ye=!1,_e=!1;function Ce(t){var n;if(wt)return;if(!(null===(n=l.value)||void 0===n?void 0:n.contains(L(t))))return;wt=!0,ye=!0,_e=!1,we=Date.now(),he(),"touchstart"===t.type||t.target.isContentEditable||t.preventDefault();const a=st(t)?t.touches[0]:t;d.value?xe=a.clientY:ge=a.clientX,e.touchable&&(F("touchmove",document,Pe,{passive:!0}),F("touchend",document,Se),F("touchcancel",document,Se)),e.draggable&&(F("mousemove",document,Pe),F("mouseup",document,Se))}function Pe(e){const{value:t}=d,{value:n}=c,a=st(e)?e.touches[0]:e,o=t?a.clientY-xe:a.clientX-ge,l=j.value[n];be=it(o,-l,l),e.cancelable&&e.preventDefault(),m.value&&re(le-be,0)}function Se(){const{value:e}=K;let t=e;if(!oe&&0!==be&&m.value){const e=le-be,n=[...N.value.slice(0,B.value-1),ce()];let a=null;for(let o=0;o<n.length;o++){const l=Math.abs(n[o]-e);if(null!==a&&a<l)break;a=l,t=o}}if(t===e){const n=Date.now()-we,{value:a}=c,o=j.value[a];be>o/2||be/n>.4?t=G(e):(be<-o/2||be/n<-.4)&&(t=q(e))}null!==t&&t!==e?(_e=!0,H(t),k((()=>{g.value&&Y.value===W.value||ie(U.value)}))):ie(U.value),ke(),me()}function ke(){ye&&(wt=!1),ye=!1,ge=0,xe=0,be=0,we=0,M("touchmove",document,Pe),M("touchend",document,Se),M("touchcancel",document,Se),M("mousemove",document,Pe),M("mouseup",document,Se)}function De(e){if(e.preventDefault(),oe)return;let{deltaX:t,deltaY:n}=e;e.shiftKey&&!t&&(t=n);const a=(t||n)>0?1:-1;let o=0,l=0;d.value?l=a:o=a;(l*n>=10||o*t>=10)&&(1!==a||ee()?-1!==a||Q()||ne():ae())}p((()=>{C(me),requestAnimationFrame((()=>R.value=!0))})),h((()=>{ke(),he()})),P((()=>{const{value:e}=s,{value:t}=r,n=new Map,a=e=>n.has(e)?n.get(e):-1;let o=!1;for(let l=0;l<e.length;l++){const a=t.findIndex((t=>t.el===e[l]));a!==l&&(o=!0),n.set(e[l],a)}o&&e.sort(((e,t)=>a(e)-a(t)))})),S(K,((e,t)=>{if(e!==t)if(me(),m.value){if(g.value&&Z.value>2){const{value:n}=B;e===n-2&&1===t?e=0:1===e&&t===n-2&&(e=n-1)}ue(e,U.value)}else ie()}),{immediate:!0}),S([g,b],(()=>{k((()=>H(K.value)))})),S(N,(()=>m.value&&ie()),{deep:!0}),S(m,(e=>{e?ie():(oe=!1,re(le=0))}));const ze=v((()=>({onTouchstartPassive:e.touchable?Ce:void 0,onMousedown:e.draggable?Ce:void 0,onWheel:e.mousewheel?De:void 0}))),$e=v((()=>Object.assign(Object.assign({},w(fe,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Z.value,currentIndex:W.value}))),Ie=v((()=>({total:Z.value,currentIndex:W.value,to:fe.to}))),Ae={getCurrentIndex:()=>W.value,to:te,prev:ne,next:ae},je=D("Carousel","-carousel",gt,z,e,t),Ee=v((()=>{const{common:{cubicBezierEaseInOut:e},self:{dotSize:t,dotColor:n,dotColorActive:a,dotColorFocus:o,dotLineWidth:l,dotLineWidthActive:s,arrowColor:r}}=je.value;return{"--n-bezier":e,"--n-dot-color":n,"--n-dot-color-focus":o,"--n-dot-color-active":a,"--n-dot-size":t,"--n-dot-line-width":l,"--n-dot-line-width-active":s,"--n-arrow-color":r}})),Ne=n?$("carousel",void 0,Ee,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:o,slidesElRef:l,slideVNodes:r,duplicatedable:g,userWantsControl:x,autoSlideSize:A,displayIndex:W,realIndex:K,slideStyles:V,translateStyle:se,slidesControlListeners:ze,handleTransitionEnd:function(){if(m.value&&oe){const{value:e}=K;ue(e,0)}else me();m.value&&(se.value.transitionDuration="0ms"),oe=!1},handleResize:function(){j.value=rt(o.value,!0),me()},handleSlideResize:function(){var e,t;A.value&&(null===(t=(e=E.effect).scheduler)||void 0===t||t.call(e),E.effect.run())},handleMouseenter:function(){e.autoplay&&he()},handleMouseleave:function(){e.autoplay&&me()},isActive:function(e){return W.value===e},arrowSlotProps:$e,dotSlotProps:Ie},Ae),{cssVars:n?void 0:Ee,themeClass:null==Ne?void 0:Ne.themeClass,onRender:null==Ne?void 0:Ne.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:a,userWantsControl:o,slideStyles:l,dotType:s,dotPlacement:r,slidesControlListeners:i,transitionProps:u={},arrowSlotProps:d,dotSlotProps:f,$slots:{default:v,dots:p,arrow:h}}=this,m=v&&I(v())||[];let g=m.reduce(((e,t)=>((e=>{var t;return(null===(t=e.type)||void 0===t?void 0:t.name)===ht})(t)&&e.push(t),e)),[]);return g.length||(g=m.map((e=>c(mt,null,{default:()=>n(e)})))),this.duplicatedable&&(g=function(e){const{length:t}=e;return t>1?(e.push(at(e[0],0,"append")),e.unshift(at(e[t-1],t-1,"prepend")),e):e}(g)),this.slideVNodes.value=g,this.autoSlideSize&&(g=g.map((e=>c(A,{onResize:this.handleSlideResize},{default:()=>e})))),null===(e=this.onRender)||void 0===e||e.call(this),c("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,"vertical"===this.direction&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${r}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,o&&`${t}-carousel--usercontrol`],style:this.cssVars},i,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),c(A,{onResize:this.handleResize},{default:()=>c("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},o?g.map(((e,t)=>c("div",{style:l[t],key:t},E(c(R,Object.assign({},u),{default:()=>e}),[[N,this.isActive(t)]])))):g)}),this.showDots&&f.total>1&&j(p,f,(()=>[c(ct,{key:s+r,total:f.total,currentIndex:f.currentIndex,dotType:s,trigger:this.trigger,keyboard:this.keyboard})])),a&&j(h,d,(()=>[c(pt,null)])))}});const _t={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ct=[V("path",{d:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1L3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z",fill:"currentColor"},null,-1)],Pt=r({name:"RadioFilled",render:function(e,t){return T(),U("svg",_t,Ct)}}),St=["src","onClick"],kt=B({__name:"index",setup(e){const t=Z();let n=u(0),a=u("card"),o=u([]);const l=()=>{window.innerWidth>680?(a.value="card",window.innerWidth>=1200?n.value=window.innerWidth/5.5:n.value=window.innerWidth/5):(a.value="slide",n.value=window.innerWidth/3)};return p((()=>{J().then((e=>{o.value=e.banners})),l(),window.addEventListener("resize",l)})),h((()=>{window.removeEventListener("resize",l)})),(e,l)=>{const s=ge,r=mt,i=yt;return T(),U(G,null,[X(o)[0]?W("",!0):(T(),Y(s,{key:0,style:O({height:X(n)+"px"}),width:"100%",sharp:!1},null,8,["style"])),K(R,null,{default:H((()=>[X(o)[0]?(T(),Y(i,{key:0,autoplay:"",draggable:"",keyboard:"",class:"banner",effect:X(a),style:O({height:X(n)+"px"})},{default:H((()=>[(T(!0),U(G,null,q(X(o),(e=>(T(),Y(r,{class:"item",style:O("card"==X(a)?"width:60%":""),key:e},{default:H((()=>[V("img",{src:e.imageUrl.replace(/^http:/,"https:")+"?imageView&quality=89",alt:"banner",onClick:n=>((e,n,a)=>{switch(e){case 1:t.push(`/song?id=${n}`);break;case 10:t.push(`/album?id=${n}`);break;case 1e3:t.push(`/playlist?id=${n}`);break;case 1004:t.push(`/video?id=${n}`);break;case 3e3:let e=setTimeout((()=>{window.open(a)}),2e3);$message.loading("即将跳转至站外链接",{closable:!0,duration:2e3,onClose:()=>{clearTimeout(e)}})}})(e.targetType,e.targetId,e.url)},null,8,St)])),_:2},1032,["style"])))),128))])),_:1},8,["effect","style"])):W("",!0)])),_:1})],64)}}},[["__scopeId","data-v-6a321a0e"]]),Dt={class:"paplaylists"},zt=B({__name:"PaPlayLists",setup(e){const t=Z();let n=u([]);return p((()=>{((e=null,t=12)=>{ee(e,t).then((e=>{n.value=[],e.result?e.result.forEach((e=>{n.value.push({id:e.id,cover:e.picUrl,name:e.name,playCount:te(e.playCount)})})):$message.error("歌单推荐内容为空")}))})()})),(e,a)=>{const o=be;return T(),U("div",Dt,[K(o,{class:"title",prefix:"bar"},{default:H((()=>[Q(" 推荐歌单 "),V("span",{class:"more",onClick:a[0]||(a[0]=e=>X(t).push("/discover/playlists"))},"更多")])),_:1}),K(xe,{listData:X(n),loadingNum:12,gridCollapsed:!0},null,8,["listData"])])}}},[["__scopeId","data-v-18ee8fde"]]),$t={class:"paartists"},It=B({__name:"PaArtists",setup(e){const t=Z();let n=u([]);const a=(e=-1,t=-1,a=6)=>{ne(e,t,a).then((e=>{n.value=[],e.artists?e.artists.forEach((e=>{n.value.push({id:e.id,name:e.name,cover:e.img1v1Url})})):$message.error("推荐歌手内容为空")}))},o=e=>{n.value=[],a(-1,e)};return p((()=>{a()})),(e,a)=>{const l=ye,s=_e,r=be;return T(),U("div",$t,[K(r,{class:"title",prefix:"bar"},{default:H((()=>[Q(" 歌手推荐 "),K(s,{class:"tab","default-value":-1,size:"small","onUpdate:value":o},{default:H((()=>[K(l,{name:-1},{default:H((()=>[Q(" 全部 ")])),_:1}),K(l,{name:7},{default:H((()=>[Q(" 华语 ")])),_:1}),K(l,{name:96},{default:H((()=>[Q(" 欧美 ")])),_:1}),K(l,{name:8},{default:H((()=>[Q(" 日本 ")])),_:1}),K(l,{name:16},{default:H((()=>[Q(" 韩国 ")])),_:1})])),_:1}),V("span",{class:"more",onClick:a[0]||(a[0]=e=>X(t).push("/discover/artists"))},"更多")])),_:1}),K(we,{listData:X(n),gridCollapsed:!0},null,8,["listData"])])}}},[["__scopeId","data-v-1b9d7825"]]),At={class:"paalbum"},jt=(e=>(le("data-v-c3125cfc"),e=e(),se(),e))((()=>V("span",{class:"more"},"更多",-1))),Et=B({__name:"PaAlbum",setup(e){Z();let t=u([]);return p((()=>{ae().then((e=>{t.value=[],e.albums?e.albums.forEach((e=>{t.value.push({id:e.id,cover:e.picUrl,name:e.name,artist:[e.artist],time:oe(e.publishTime)})})):$message.error("新碟上架内容为空")}))})),(e,n)=>{const a=be;return T(),U("div",At,[K(a,{class:"title",prefix:"bar"},{default:H((()=>[Q(" 新碟上架 "),jt])),_:1}),K(xe,{listType:"album",listData:X(t),loadingNum:12,gridCollapsed:!0},null,8,["listData"])])}}},[["__scopeId","data-v-c3125cfc"]]),Nt=["src"],Rt=(e=>(le("data-v-247fc3db"),e=e(),se(),e))((()=>V("div",{class:"text"},[V("span",{class:"title"},"每日推荐"),V("span",{class:"tip"},"根据你的音乐口味生成 · 每天 6:00 更新")],-1))),Ot=B({__name:"PaDailySongs",setup(e){const t=re(),n=ie(),a=Z();return p((()=>{0===t.getDailySongs.length&&n.userLogin&&ue().then((e=>{e.data.dailySongs?t.setDailySongs(e.data.dailySongs):$message.error("每日推荐获取失败")}))})),(e,n)=>(T(),U("div",{class:"padailysongs",onClick:n[0]||(n[0]=e=>X(a).push("/dailySongs"))},[V("img",{class:"pic",src:X(t).getDailySongs[0]?X(t).getDailySongs[Math.floor(Math.random()*X(t).getDailySongs.length)].album.picUrl.replace(/^http:/,"https:")+"?param=800y800":"/images/pic/pic.jpg",alt:"pic"},null,8,Nt),Rt]))}},[["__scopeId","data-v-247fc3db"]]),Lt=e=>(le("data-v-07c98ee2"),e=e(),se(),e),Ft=Lt((()=>V("div",{class:"gray"},null,-1))),Mt=["src"],Tt={class:"data"},Ut={class:"info"},Vt={class:"controls"},Bt={class:"radio"},Zt={class:"icon"},Xt=Lt((()=>V("span",null,"私人FM",-1))),Yt={key:0,class:"tip"},Wt=B({__name:"PaPersonalFm",setup(e){const t=re(),n=ie(),a=Z(),o=()=>{t.getPersonalFmMode?t.setPlayState(!t.getPlayState):(t.setPersonalFmMode(!0),t.setPlayState(!0))},l=()=>{t.setPersonalFmMode(!0),t.setPlaySongIndex("next")};return p((()=>{t.getPersonalFmData.id||t.setPersonalFmData()})),(e,s)=>{const r=me;return X(t).getPersonalFmData.id?(T(),U("div",{key:0,class:"papersonalfm",style:O("background-image: url("+X(t).getPersonalFmData.album.picUrl.replace(/^http:/,"https:")+"?param=300y300)")},[Ft,V("img",{class:"pic",src:X(t).getPersonalFmData.album.picUrl.replace(/^http:/,"https:")+"?param=300y300",alt:"pic"},null,8,Mt),V("div",Tt,[V("div",Ut,[V("span",{class:"name text-hidden",onClick:s[0]||(s[0]=e=>X(a).push(`/song?id=${X(t).getPersonalFmData.id}`))},de(X(t).getPersonalFmData.name),1),K(ce,{class:"text-hidden",artistsData:X(t).getPersonalFmData.artist},null,8,["artistsData"])]),V("div",Vt,[K(r,{class:"state",size:"46",component:X(t).getPersonalFmMode&&X(t).getPlayState?X(fe):X(ve),onClick:o},null,8,["component"]),K(r,{class:"next",size:"30",component:X(pe),onClick:l},null,8,["component"]),K(r,{class:"dislike",size:"20",component:X(he),onClick:s[1]||(s[1]=e=>X(t).setFmDislike(X(t).getPersonalFmData.id))},null,8,["component"]),V("div",Bt,[V("div",Zt,[K(r,{size:"20",component:X(Pt)},null,8,["component"]),Xt]),X(n).userLogin?W("",!0):(T(),U("span",Yt,"未登录模式"))])])])],4)):W("",!0)}}},[["__scopeId","data-v-07c98ee2"]]),Kt={class:"home"},Ht=B({__name:"HomeView",setup:e=>(e,t)=>{const n=be,a=Pe,o=Ce;return T(),U("div",Kt,[K(kt),K(n,{class:"title",prefix:"bar"},{default:H((()=>[Q(" 专属推荐 ")])),_:1}),K(o,{class:"recommendation",cols:"4","item-responsive":"","x-gap":"20"},{default:H((()=>[K(a,{span:"1 950:2"},{default:H((()=>[K(Ot)])),_:1}),K(a,{span:"3 950:2"},{default:H((()=>[K(Wt)])),_:1})])),_:1}),K(zt),K(It),K(Et)])}},[["__scopeId","data-v-0e71f299"]]);export{Ht as default};
