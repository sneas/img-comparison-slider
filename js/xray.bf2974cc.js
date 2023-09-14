(()=>{var e={5379:()=>{(()=>{var e={800:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var o=t(15),r=t.n(o),s=t(645),i=t.n(s)()(r());i.push([e.id,'pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#1e1e1e;color:#dcdcdc}.hljs-keyword,.hljs-literal,.hljs-name,.hljs-symbol{color:#569cd6}.hljs-link{color:#569cd6;text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-class,.hljs-number{color:#b8d7a3}.hljs-meta .hljs-string,.hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-formula,.hljs-function,.hljs-params,.hljs-subst,.hljs-title{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a;font-style:italic}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-tag{color:#9b9b9b}.hljs-template-variable,.hljs-variable{color:#bd63c5}.hljs-attr,.hljs-attribute{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-bullet,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-selector-tag{color:#d7ba7d}.hljs-addition{background-color:#144212;display:inline-block;width:100%}.hljs-deletion{background-color:#600;display:inline-block;width:100%}.x-ray__toggle{cursor:pointer}.x-ray__toggle:before{content:" ";display:inline-block;border-top:5px solid rgba(0,0,0,0);border-bottom:5px solid rgba(0,0,0,0);border-left:5px solid currentColor;vertical-align:middle;margin-right:.7rem;transform:translate(5px, -1px);transition:transform .2s ease-out}.x-ray__toggle.x-ray__toggle--active:before{transform:rotate(90deg) translate(-1px, -4px)}.x-ray__code-container{max-height:0;overflow:hidden;transition:max-height .2s ease-out}.x-ray__code-container--visible{max-height:1000px;transition:max-height .15s ease-in}.x-ray__code{margin-bottom:0;padding:7px}',"",{version:3,sources:["webpack://./node_modules/highlight.js/scss/vs2015.scss","webpack://./src/index.scss"],names:[],mappings:"AAAA,cAAA,aAAA,CAAA,eAAA,CAAA,WAAA,CAAA,UAAA,eAAA,CAAA,MAAA,kBAAA,CAAA,aAAA,CAAA,oDAAA,aAAA,CAAA,WAAA,aAAA,CAAA,yBAAA,CAAA,0BAAA,aAAA,CAAA,yBAAA,aAAA,CAAA,qCAAA,aAAA,CAAA,gCAAA,aAAA,CAAA,kEAAA,aAAA,CAAA,0BAAA,aAAA,CAAA,iBAAA,CAAA,aAAA,aAAA,CAAA,8CAAA,aAAA,CAAA,uCAAA,aAAA,CAAA,2BAAA,aAAA,CAAA,cAAA,UAAA,CAAA,eAAA,iBAAA,CAAA,aAAA,eAAA,CAAA,iHAAA,aAAA,CAAA,eAAA,wBAAA,CAAA,oBAAA,CAAA,UAAA,CAAA,eAAA,qBAAA,CAAA,oBAAA,CAAA,UAAA,CCEA,eACE,cAAA,CAEA,sBACE,WAAA,CACA,oBAAA,CAEA,kCAAA,CACA,qCAAA,CACA,kCAAA,CAEA,qBAAA,CACA,kBAAA,CACA,8BAAA,CAEA,iCAAA,CAIA,4CACE,6CAAA,CAKN,uBACE,YAAA,CACA,eAAA,CACA,kCAAA,CAGF,gCACE,iBAAA,CACA,kCAAA,CAGF,aACE,eAAA,CACA,WAAA",sourcesContent:["pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#1e1e1e;color:#dcdcdc}.hljs-keyword,.hljs-literal,.hljs-name,.hljs-symbol{color:#569cd6}.hljs-link{color:#569cd6;text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-class,.hljs-number{color:#b8d7a3}.hljs-meta .hljs-string,.hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-formula,.hljs-function,.hljs-params,.hljs-subst,.hljs-title{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a;font-style:italic}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-tag{color:#9b9b9b}.hljs-template-variable,.hljs-variable{color:#bd63c5}.hljs-attr,.hljs-attribute{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-bullet,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-selector-tag{color:#d7ba7d}.hljs-addition{background-color:#144212;display:inline-block;width:100%}.hljs-deletion{background-color:#600;display:inline-block;width:100%}","@import '~highlight.js/scss/vs2015';\n\n.x-ray__toggle {\n  cursor: pointer;\n\n  &:before {\n    content: ' ';\n    display: inline-block;\n\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 5px solid currentColor;\n\n    vertical-align: middle;\n    margin-right: 0.7rem;\n    transform: translate(5px, -1px);\n\n    transition: transform 0.2s ease-out;\n  }\n\n  &.x-ray__toggle--active {\n    &:before {\n      transform: rotate(90deg) translate(-1px, -4px);\n    }\n  }\n}\n\n.x-ray__code-container {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\n.x-ray__code-container--visible {\n  max-height: 1000px;\n  transition: max-height 0.15s ease-in;\n}\n\n.x-ray__code {\n  margin-bottom: 0;\n  padding: 7px;\n}\n"],sourceRoot:""}]);const a=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},15:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}e.exports=function(e){var t,o=function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var o,r,s=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(o=t.next()).done)&&(s.push(o.value),4!==s.length);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==t.return||t.return()}finally{if(a)throw r}}return s}}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,4);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,4):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=o[1],s=o[3];if(!s)return r;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),l=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[r].concat(l).concat([c]).join("\n")}return[r].join("\n")}},390:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],r=typeof o;"object"!==r&&"function"!==r||Object.isFrozen(o)||n(o)})),e}class t{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const s=e=>!!e.scope;class i{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=o(e)}openNode(e){if(!s(e))return;const n=((e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(e.scope,{prefix:this.classPrefix});this.span(n)}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const a=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n=a({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,n){const t=e.root;n&&(t.scope=`language:${n}`),this.add(t)}toHTML(){return new i(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function d(e){return e?"string"==typeof e?e:e.source:null}function u(e){return A("(?=",e,")")}function g(e){return A("(?:",e,")*")}function h(e){return A("(?:",e,")?")}function A(...e){return e.map((e=>d(e))).join("")}function p(...e){const n=function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e);return"("+(n.capture?"":"?:")+e.map((e=>d(e))).join("|")+")"}function f(e){return new RegExp(e.toString()+"|").exec("").length-1}const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function m(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let o=d(e),r="";for(;o.length>0;){const e=b.exec(o);if(!e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+n):(r+=e[0],"("===e[0]&&t++)}return r})).map((e=>`(${e})`)).join(n)}const x="[a-zA-Z]\\w*",y="[a-zA-Z_]\\w*",_="\\b\\d+(\\.\\d+)?",j="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},E={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},C={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},k=function(e,n,t={}){const o=r({scope:"comment",begin:e,end:n,contains:[]},t);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:A(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},N=k("//","$"),S=k("/\\*","\\*/"),O=k("#","$"),M={scope:"number",begin:_,relevance:0},R={scope:"number",begin:j,relevance:0},L={scope:"number",begin:w,relevance:0},T={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},B={scope:"title",begin:x,relevance:0},I={scope:"title",begin:y,relevance:0},P={begin:"\\.\\s*"+y,relevance:0};var H=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:y,NUMBER_RE:_,C_NUMBER_RE:j,BINARY_NUMBER_RE:w,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=A(n,/.*\b/,e.binary,/\b.*/)),r({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:v,APOS_STRING_MODE:E,QUOTE_STRING_MODE:C,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:k,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:S,HASH_COMMENT_MODE:O,NUMBER_MODE:M,C_NUMBER_MODE:R,BINARY_NUMBER_MODE:L,REGEXP_MODE:T,TITLE_MODE:B,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:P,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function D(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function U(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function $(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=D,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function z(e,n){Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function W(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function G(e,n){void 0===e.relevance&&(e.relevance=1)}const q=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=A(t.beforeMatch,u(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},X=["of","and","for","in","not","or","if","then","parent","list","value"];function F(e,n,t="keyword"){const o=Object.create(null);return"string"==typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach((function(t){Object.assign(o,F(e[t],n,t))})),o;function r(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");o[t[0]]=[e,K(t[0],t[1])]}))}}function K(e,n){return n?Number(n):function(e){return X.includes(e.toLowerCase())}(e)?0:1}const Z={},J=e=>{console.error(e)},V=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Y=(e,n)=>{Z[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Z[`${e}/${n}`]=!0)},Q=new Error;function ee(e,n,{key:t}){let o=0;const r=e[t],s={},i={};for(let e=1;e<=n.length;e++)i[e+o]=r[e],s[e+o]=!0,o+=f(n[e-1]);e[t]=i,e[t]._emit=s,e[t]._multi=!0}function ne(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw J("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Q;if("object"!=typeof e.beginScope||null===e.beginScope)throw J("beginScope must be object"),Q;ee(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw J("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Q;if("object"!=typeof e.endScope||null===e.endScope)throw J("endScope must be object"),Q;ee(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}}(e)}function te(e){function n(n,t){return new RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(m(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),o=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,o)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=r(e.classNameAliases||{}),function t(s,i){const a=s;if(s.isCompiled)return a;[U,W,ne,q].forEach((e=>e(s,i))),e.compilerExtensions.forEach((e=>e(s,i))),s.__beforeBegin=null,[$,z,G].forEach((e=>e(s,i))),s.isCompiled=!0;let c=null;return"object"==typeof s.keywords&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),c=s.keywords.$pattern,delete s.keywords.$pattern),c=c||/\w+/,s.keywords&&(s.keywords=F(s.keywords,e.case_insensitive)),a.keywordPatternRe=n(c,!0),i&&(s.begin||(s.begin=/\B|\b/),a.beginRe=n(a.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(a.endRe=n(a.end)),a.terminatorEnd=d(a.end)||"",s.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(s.end?"|":"")+i.terminatorEnd)),s.illegal&&(a.illegalRe=n(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return r(e,{variants:null},n)}))),e.cachedVariants?e.cachedVariants:oe(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,a)})),s.starts&&t(s.starts,i),a.matcher=function(e){const n=new o;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(a),a}(e)}function oe(e){return!!e&&(e.endsWithParent||oe(e.starts))}class re extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const se=o,ie=r,ae=Symbol("nomatch"),ce=function(e){const o=Object.create(null),r=Object.create(null),s=[];let i=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function f(e){return d.noHighlightRe.test(e)}function b(e,n,t){let o="",r="";"object"==typeof n?(o=e,t=n.ignoreIllegals,r=n.language):(Y("10.7.0","highlight(lang, code, ...args) has been deprecated."),Y("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,o=n),void 0===t&&(t=!0);const s={code:o,language:r};C("before:highlight",s);const i=s.result?s.result:m(s.language,s.code,t);return i.code=s.code,C("after:highlight",i),i}function m(e,n,r,s){const c=Object.create(null);function l(){if(!E.keywords)return void k.addText(N);let e=0;E.keywordPatternRe.lastIndex=0;let n=E.keywordPatternRe.exec(N),t="";for(;n;){t+=N.substring(e,n.index);const r=_.case_insensitive?n[0].toLowerCase():n[0],s=(o=r,E.keywords[o]);if(s){const[e,o]=s;if(k.addText(t),t="",c[r]=(c[r]||0)+1,c[r]<=7&&(S+=o),e.startsWith("_"))t+=n[0];else{const t=_.classNameAliases[e]||e;g(n[0],t)}}else t+=n[0];e=E.keywordPatternRe.lastIndex,n=E.keywordPatternRe.exec(N)}var o;t+=N.substring(e),k.addText(t)}function u(){null!=E.subLanguage?function(){if(""===N)return;let e=null;if("string"==typeof E.subLanguage){if(!o[E.subLanguage])return void k.addText(N);e=m(E.subLanguage,N,!0,C[E.subLanguage]),C[E.subLanguage]=e._top}else e=x(N,E.subLanguage.length?E.subLanguage:null);E.relevance>0&&(S+=e.relevance),k.__addSublanguage(e._emitter,e.language)}():l(),N=""}function g(e,n){""!==e&&(k.startScope(n),k.addText(e),k.endScope())}function h(e,n){let t=1;const o=n.length-1;for(;t<=o;){if(!e._emit[t]){t++;continue}const o=_.classNameAliases[e[t]]||e[t],r=n[t];o?g(r,o):(N=r,l(),N=""),t++}}function A(e,n){return e.scope&&"string"==typeof e.scope&&k.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(g(N,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),N=""):e.beginScope._multi&&(h(e.beginScope,n),N="")),E=Object.create(e,{parent:{value:E}}),E}function p(e,n,o){let r=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,o);if(r){if(e["on:end"]){const o=new t(e);e["on:end"](n,o),o.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,n,o)}function f(e){return 0===E.matcher.regexIndex?(N+=e[0],1):(R=!0,0)}let b={};function y(o,s){const a=s&&s[0];if(N+=o,null==a)return u(),0;if("begin"===b.type&&"end"===s.type&&b.index===s.index&&""===a){if(N+=n.slice(s.index,s.index+1),!i){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=b.rule,n}return 1}if(b=s,"begin"===s.type)return function(e){const n=e[0],o=e.rule,r=new t(o),s=[o.__beforeBegin,o["on:begin"]];for(const t of s)if(t&&(t(e,r),r.isMatchIgnored))return f(n);return o.skip?N+=n:(o.excludeBegin&&(N+=n),u(),o.returnBegin||o.excludeBegin||(N=n)),A(o,e),o.returnBegin?0:n.length}(s);if("illegal"===s.type&&!r){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(E.scope||"<unnamed>")+'"');throw e.mode=E,e}if("end"===s.type){const e=function(e){const t=e[0],o=n.substring(e.index),r=p(E,e,o);if(!r)return ae;const s=E;E.endScope&&E.endScope._wrap?(u(),g(t,E.endScope._wrap)):E.endScope&&E.endScope._multi?(u(),h(E.endScope,e)):s.skip?N+=t:(s.returnEnd||s.excludeEnd||(N+=t),u(),s.excludeEnd&&(N=t));do{E.scope&&k.closeNode(),E.skip||E.subLanguage||(S+=E.relevance),E=E.parent}while(E!==r.parent);return r.starts&&A(r.starts,e),s.returnEnd?0:t.length}(s);if(e!==ae)return e}if("illegal"===s.type&&""===a)return 1;if(M>1e5&&M>3*s.index)throw new Error("potential infinite loop, way more iterations than matches");return N+=a,a.length}const _=w(e);if(!_)throw J(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const j=te(_);let v="",E=s||j;const C={},k=new d.__emitter(d);!function(){const e=[];for(let n=E;n!==_;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>k.openNode(e)))}();let N="",S=0,O=0,M=0,R=!1;try{if(_.__emitTokens)_.__emitTokens(n,k);else{for(E.matcher.considerAll();;){M++,R?R=!1:E.matcher.considerAll(),E.matcher.lastIndex=O;const e=E.matcher.exec(n);if(!e)break;const t=y(n.substring(O,e.index),e);O=e.index+t}y(n.substring(O))}return k.finalize(),v=k.toHTML(),{language:e,value:v,relevance:S,illegal:!1,_emitter:k,_top:E}}catch(t){if(t.message&&t.message.includes("Illegal"))return{language:e,value:se(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:O,context:n.slice(O-100,O+100),mode:t.mode,resultSoFar:v},_emitter:k};if(i)return{language:e,value:se(n),illegal:!1,relevance:0,errorRaised:t,_emitter:k,_top:E};throw t}}function x(e,n){n=n||d.languages||Object.keys(o);const t=function(e){const n={value:se(e),illegal:!1,relevance:0,_top:c,_emitter:new d.__emitter(d)};return n._emitter.addText(e),n}(e),r=n.filter(w).filter(E).map((n=>m(n,e,!1)));r.unshift(t);const s=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0})),[i,a]=s,l=i;return l.secondBest=a,l}function y(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n);if(t){const n=w(t[1]);return n||(V(a.replace("{}",t[1])),V("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>f(e)||w(e)))}(e);if(f(t))return;if(C("before:highlightElement",{el:e,language:t}),e.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),d.throwUnescapedHTML))throw new re("One of your code blocks includes unescaped HTML.",e.innerHTML);n=e;const o=n.textContent,s=t?b(o,{language:t,ignoreIllegals:!0}):x(o);e.innerHTML=s.value,function(e,n,t){const o=n&&r[n]||t;e.classList.add("hljs"),e.classList.add(`language-${o}`)}(e,t,s.language),e.result={language:s.language,re:s.relevance,relevance:s.relevance},s.secondBest&&(e.secondBest={language:s.secondBest.language,relevance:s.secondBest.relevance}),C("after:highlightElement",{el:e,result:s,text:o})}let _=!1;function j(){"loading"!==document.readyState?document.querySelectorAll(d.cssSelector).forEach(y):_=!0}function w(e){return e=(e||"").toLowerCase(),o[e]||o[r[e]]}function v(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=n}))}function E(e){const n=w(e);return n&&!n.disableAutodetect}function C(e,n){const t=e;s.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){_&&j()}),!1),Object.assign(e,{highlight:b,highlightAuto:x,highlightAll:j,highlightElement:y,highlightBlock:function(e){return Y("10.7.0","highlightBlock will be removed entirely in v12.0"),Y("10.7.0","Please use highlightElement now."),y(e)},configure:function(e){d=ie(d,e)},initHighlighting:()=>{j(),Y("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){j(),Y("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(n,t){let r=null;try{r=t(e)}catch(e){if(J("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw e;J(e),r=c}r.name||(r.name=n),o[n]=r,r.rawDefinition=t.bind(null,e),r.aliases&&v(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete o[e];for(const n of Object.keys(r))r[n]===e&&delete r[n]},listLanguages:function(){return Object.keys(o)},getLanguage:w,registerAliases:v,autoDetection:E,inherit:ie,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),s.push(e)},removePlugin:function(e){const n=s.indexOf(e);-1!==n&&s.splice(n,1)}}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString="11.8.0",e.regex={concat:A,lookahead:u,either:p,optional:h,anyNumberOfTimes:g};for(const e in H)"object"==typeof H[e]&&n(H[e]);return Object.assign(e,H),e},le=ce({});le.newInstance=()=>ce({}),e.exports=le,le.HighlightJS=le,le.default=le}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={id:o,exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";const e=t(390);var n=t(800);e.registerLanguage("xml",(function(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(r,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),a=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,a,i,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,s,a,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[a]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}));const o=document.createElement("template");o.innerHTML=`\n  <style>\n    ${n.Z}\n  </style>\n\n  <div class="x-ray__preview">\n    <slot />\n  </div>\n  <div class="x-ray__code-previewer">\n    <a\n      role="button"\n      tabindex="0"\n      class="x-ray__toggle"\n    >Show code</a>\n    <div class="x-ray__code-container">\n      <pre class="x-ray__code hljs"></pre>\n    </div>\n  </div>\n`;class r extends HTMLElement{constructor(){super(),this.code="",this.code=this.querySelector("code:first-child").innerHTML.replace("\x3c!----\x3e",""),this.appendChild(o.content.cloneNode(!0)),this.querySelector(".x-ray__code").innerHTML=e.highlight(((e,n)=>{const t=new RegExp(`^\\s{${n}}`);return e.split("\n").map((e=>e.replace(t,""))).join("\n")})(this.code,(e=>{let n=0;const t=/\S/;for(let o=0;o<e.length;o++)if("\n"!==e.charAt(o)){if(t.test(e.charAt(o)))return n;n++}else n=0;return 0})(this.code)).trim(),{language:"xml"}).value;const n=this.querySelector(".x-ray__toggle"),t=this.querySelector(".x-ray__code-container"),r=()=>{const e=n.classList.toggle("x-ray__toggle--active");t.classList.toggle("x-ray__code-container--visible",e)};n.addEventListener("click",r);const s=["Space","Enter"];n.addEventListener("keypress",(e=>{s.includes(e.code)&&(e.preventDefault(),r())}))}}window.customElements.define("x-ray",r)})()})()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";t(5379)})()})();
//# sourceMappingURL=xray.bf2974cc.js.map