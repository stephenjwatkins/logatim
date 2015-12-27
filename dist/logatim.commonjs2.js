module.exports=function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";e.exports=o(4)("")},function(e,t){"use strict";e.exports={DEFAULT_LEVEL:"WARN",EOL:"[49m[0m",LOG_METHODS:["trace","debug","info","warn","error"],STORAGE_KEY:"logatimLevel",LEVELS:{TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5}}},function(e,t,o){(function(e){"use strict";function t(){var e={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};return e.colors.grey=e.colors.gray,Object.keys(e).forEach(function(t){var o=e[t];Object.keys(o).forEach(function(t){var n=o[t];e[t]=o[t]={open:"["+n[0]+"m",close:"["+n[1]+"m"}}),Object.defineProperty(e,t,{value:o,enumerable:!1})}),e}Object.defineProperty(e,"exports",{enumerable:!0,get:t})}).call(t,o(6)(e))},function(e,t,o){"use strict";var n=o(1),r=e.exports={};r.setLevel=function(e){if("string"==typeof e&&void 0!==r[e.toUpperCase()]&&(e=n.LEVELS[e.toUpperCase()]),"number"==typeof e&&e>=0&&e<=r.SILENT)return r.persistLevel(e),e;throw"logatim.setLevel() called with invalid level: "+e},r.persistLevel=function(e){var t=(n.LOG_METHODS[e]||"silent").toUpperCase(),o=n.STORAGE_KEY;GLOBAL[o]=t;try{return void(window.localStorage[o]=t)}catch(r){}try{window.document.cookie=encodeURIComponent(o)+"="+t+";"}catch(r){}},r.getPersistedLevel=function(){var e=void 0,t=n.STORAGE_KEY;try{e=window.localStorage[t]}catch(o){}if("undefined"==typeof e)try{var r=window.document.cookie,c=r.indexOf(encodeURIComponent(t)+"=");c&&(e=/^([^;]+)/.exec(r.slice(c))[1])}catch(o){}return void 0===n.LEVELS[e]&&(e=void 0),e=GLOBAL[t]}},function(e,t,o){"use strict";var n=o(2),r=o(3),c=o(5),i=3,u=e.exports=function(e){var t=function(t){return u(e+t)};return t.getLevel=function(){return i},t.setLevel=function(e){return i=e},Object.keys(n).forEach(function(o){Object.defineProperty(t,o,{get:function(){return u(""+e+n[o].open)}})}),t.setLevel(r.getPersistedLevel()||i),c.updateLogMethods(t,u,e,i),t}},function(e,t,o){"use strict";var n=o(1),r=e.exports={},c=function(e){var t=Array.prototype.slice.call(arguments,1),o=t.concat(n.EOL).join("");console[e](o)};r.updateLogMethods=function(e,t,o,r){n.LOG_METHODS.forEach(function(t,n){r>=n?e[t]=c.bind(null,t,o):e[t]=function(){}})}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}]);