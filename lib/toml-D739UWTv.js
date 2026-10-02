import{a as e}from"./_format-DOXSnndk.js";
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/var t=class extends Error{line;column;codeblock;constructor(e,t){let[n,r]=function(e,t){let n=e.slice(0,t).split(/\r\n|\n|\r/g);return[n.length,n.pop().length+1]}(t.toml,t.ptr),i=function(e,t,n){let r=e.split(/\r\n|\n|\r/g),i="",l=1+(0|Math.log10(t+1));for(let e=t-1;e<=t+1;e++){let o=r[e-1];o&&(i+=e.toString().padEnd(l," "),i+=":  ",i+=o,i+="\n",e===t&&(i+=" ".repeat(l+n+2),i+="^\n"))}return i}(t.toml,n,r);super(`Invalid TOML document: ${e}\n\n${i}`,t),this.line=n,this.column=r,this.codeblock=i}};
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function n(e,t){let n=0;for(;"\\"===e[t-++n];);return--n&&n%2}function r(e,t=0,n=e.length){let r=e.indexOf("\n",t);return"\r"===e[r-1]&&r--,r<=n?r:-1}function i(e,n){for(let r=n;r<e.length;r++){let i=e[r];if("\n"===i)return r;if("\r"===i&&"\n"===e[r+1])return r+1;if(i<" "&&"\t"!==i||""===i)throw new t("control characters are not allowed in comments",{toml:e,ptr:n})}return e.length}function l(e,t,n,r){let o;for(;" "===(o=e[t])||"\t"===o||!n&&("\n"===o||"\r"===o&&"\n"===e[t+1]);)t++;return r||"#"!==o?t:l(e,i(e,t),n)}function o(e,t){let r=e[t],i=r===e[t+1]&&e[t+1]===e[t+2]?e.slice(t,t+3):r;t+=i.length-1;do{t=e.indexOf(i,++t)}while(t>-1&&"'"!==r&&n(e,t));return t>-1&&(t+=i.length,i.length>1&&(e[t]===r&&t++,e[t]===r&&t++)),t}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/let f=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;var s=class e extends Date{#e=!1;#t=!1;#n=null;constructor(e){let t=!0,n=!0,r="Z";if("string"==typeof e){let i=e.match(f);i?(i[1]||(t=!1,e=`0000-01-01T${e}`),n=!!i[2],n&&" "===e[10]&&(e=e.replace(" ","T")),i[2]&&+i[2]>23?e="":(r=i[3]||null,e=e.toUpperCase(),!r&&n&&(e+="Z"))):e=""}super(e),isNaN(this.getTime())||(this.#e=t,this.#t=n,this.#n=r)}isDateTime(){return this.#e&&this.#t}isLocal(){return!this.#e||!this.#t||!this.#n}isDate(){return this.#e&&!this.#t}isTime(){return this.#t&&!this.#e}isValid(){return this.#e||this.#t}toISOString(){let e=super.toISOString();if(this.isDate())return e.slice(0,10);if(this.isTime())return e.slice(11,23);if(null===this.#n)return e.slice(0,-1);if("Z"===this.#n)return e;let t=60*this.#n.slice(1,3)+ +this.#n.slice(4,6);return t="-"===this.#n[0]?t:-t,new Date(this.getTime()-6e4*t).toISOString().slice(0,-1)+this.#n}static wrapAsOffsetDateTime(t,n="Z"){let r=new e(t);return r.#n=n,r}static wrapAsLocalDateTime(t){let n=new e(t);return n.#n=null,n}static wrapAsLocalDate(t){let n=new e(t);return n.#t=!1,n.#n=null,n}static wrapAsLocalTime(t){let n=new e(t);return n.#e=!1,n.#n=null,n}};
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/let a=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,u=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,c=/^[+-]?0[0-9_]/,d=/^[0-9a-f]{2,8}$/i,h={b:"\b",t:"\t",n:"\n",f:"\f",r:"\r",e:"",'"':'"',"\\":"\\"};function w(e,n=0,r=e.length){let i="'"===e[n],o=e[n++]===e[n]&&e[n]===e[n+1];o&&(r-=2,"\r"===e[n+=2]&&n++,"\n"===e[n]&&n++);let f,s=0,a="",u=n;for(;n<r-1;){let r=e[n++];if("\n"===r||"\r"===r&&"\n"===e[n]){if(!o)throw new t("newlines are not allowed in strings",{toml:e,ptr:n-1})}else if(r<" "&&"\t"!==r||""===r)throw new t("control characters are not allowed in strings",{toml:e,ptr:n-1});if(f){if(f=!1,"x"===r||"u"===r||"U"===r){let i=e.slice(n,n+="x"===r?2:"u"===r?4:8);if(!d.test(i))throw new t("invalid unicode escape",{toml:e,ptr:s});try{a+=String.fromCodePoint(parseInt(i,16))}catch{throw new t("invalid unicode escape",{toml:e,ptr:s})}}else if(!o||"\n"!==r&&" "!==r&&"\t"!==r&&"\r"!==r){if(!(r in h))throw new t("unrecognized escape sequence",{toml:e,ptr:s});a+=h[r]}else{if("\n"!==e[n=l(e,n-1,!0)]&&"\r"!==e[n])throw new t("invalid escape: only line-ending whitespace may be escaped",{toml:e,ptr:s});n=l(e,n)}u=n}else!i&&"\\"===r&&(s=n-1,f=!0,a+=e.slice(u,s))}return a+e.slice(u,r-1)}function p(e,n,r,i){if("true"===e)return!0;if("false"===e)return!1;if("-inf"===e)return-1/0;if("inf"===e||"+inf"===e)return 1/0;if("nan"===e||"+nan"===e||"-nan"===e)return NaN;if("-0"===e)return i?0n:0;let l=a.test(e);if(l||u.test(e)){if(c.test(e))throw new t("leading zeroes are not allowed",{toml:n,ptr:r});let o=+(e=e.replace(/_/g,""));if(isNaN(o))throw new t("invalid number",{toml:n,ptr:r});if(l){if((l=!Number.isSafeInteger(o))&&!i)throw new t("integer value cannot be represented losslessly",{toml:n,ptr:r});(l||!0===i)&&(o=BigInt(e))}return o}let o=new s(e);if(!o.isValid())throw new t("invalid value",{toml:n,ptr:r});return o}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function m(e,t,n){let r=e.slice(t,n),l=r.indexOf("#");return l>-1&&(i(e,l),r=r.slice(0,l)),[r.trimEnd(),l]}function g(e,n,i,f,s){if(0===f)throw new t("document contains excessively nested structures. aborting.",{toml:e,ptr:n});let a,u=e[n];if("["===u||"{"===u){let[r,o]="["===u?x(e,n,f,s):v(e,n,f,s);if(i)if(o=l(e,o),","===e[o])o++;else if(e[o]!==i)throw new t("expected comma or end of structure",{toml:e,ptr:o});return[r,o]}if('"'===u||"'"===u){a=o(e,n);let r=w(e,n,a);if(i){if(a=l(e,a),e[a]&&","!==e[a]&&e[a]!==i&&"\n"!==e[a]&&"\r"!==e[a])throw new t("unexpected character encountered",{toml:e,ptr:a});a+=+(","===e[a])}return[r,a]}a=function(e,n,i,l,o=!1){if(!l)return(n=r(e,n))<0?e.length:n;for(let t=n;t<e.length;t++){let n=e[t];if("#"===n)t=r(e,t);else{if(n===i)return t+1;if(n===l||o&&("\n"===n||"\r"===n&&"\n"===e[t+1]))return t}}throw new t("cannot find end of structure",{toml:e,ptr:n})}(e,n,",",i);let c=m(e,n,a-+(","===e[a-1]));if(!c[0])throw new t("incomplete key-value declaration: no value specified",{toml:e,ptr:n});return i&&c[1]>-1&&(a=l(e,n+c[1]),a+=+(","===e[a])),[p(c[0],e,n,s),a]}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/let b=/^[a-zA-Z0-9-_]+[ \t]*$/;function y(e,n,i="="){let f=n-1,s=[],a=e.indexOf(i,n);if(a<0)throw new t("incomplete key-value: cannot find end of key",{toml:e,ptr:n});do{let l=e[n=++f];if(" "!==l&&"\t"!==l)if('"'===l||"'"===l){if(l===e[n+1]&&l===e[n+2])throw new t("multiline strings are not allowed in keys",{toml:e,ptr:n});let u=o(e,n);if(u<0)throw new t("unfinished string encountered",{toml:e,ptr:n});f=e.indexOf(".",u);let c=e.slice(u,f<0||f>a?a:f),d=r(c);if(d>-1)throw new t("newlines are not allowed in keys",{toml:e,ptr:n+f+d});if(c.trimStart())throw new t("found extra tokens after the string part",{toml:e,ptr:u});if(a<u&&(a=e.indexOf(i,u),a<0))throw new t("incomplete key-value: cannot find end of key",{toml:e,ptr:n});s.push(w(e,n,u))}else{f=e.indexOf(".",n);let r=e.slice(n,f<0||f>a?a:f);if(!b.test(r))throw new t("only letter, numbers, dashes and underscores are allowed in keys",{toml:e,ptr:n});s.push(r.trimEnd())}}while(f+1&&f<a);return[s,l(e,a+1,!0,!0)]}function v(e,n,r,l){let o,f={},s=new Set;for(n++;"}"!==(o=e[n++])&&o;){if(","===o)throw new t("expected value, found comma",{toml:e,ptr:n-1});if("#"===o)n=i(e,n);else if(" "!==o&&"\t"!==o&&"\n"!==o&&"\r"!==o){let i,o=f,a=!1,[u,c]=y(e,n-1);for(let r=0;r<u.length;r++){if(r&&(o=a?o[i]:o[i]={}),i=u[r],(a=Object.hasOwn(o,i))&&("object"!=typeof o[i]||s.has(o[i])))throw new t("trying to redefine an already defined value",{toml:e,ptr:n});!a&&"__proto__"===i&&Object.defineProperty(o,i,{enumerable:!0,configurable:!0,writable:!0})}if(a)throw new t("trying to redefine an already defined value",{toml:e,ptr:n});let[d,h]=g(e,c,"}",r-1,l);s.add(d),o[i]=d,n=h}}if(!o)throw new t("unfinished table encountered",{toml:e,ptr:n});return[f,n]}function x(e,n,r,l){let o,f=[];for(n++;"]"!==(o=e[n++])&&o;){if(","===o)throw new t("expected value, found comma",{toml:e,ptr:n-1});if("#"===o)n=i(e,n);else if(" "!==o&&"\t"!==o&&"\n"!==o&&"\r"!==o){let t=g(e,n-1,"]",r-1,l);f.push(t[0]),n=t[1]}}if(!o)throw new t("unfinished array encountered",{toml:e,ptr:n});return[f,n]}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function O(e,t,n,r){let i,l,o=t,f=n,s=!1;for(let t=0;t<e.length;t++){if(t){if(o=s?o[i]:o[i]={},f=(l=f[i]).c,0===r&&(1===l.t||2===l.t))return null;if(2===l.t){let e=o.length-1;o=o[e],f=f[e].c}}if(i=e[t],(s=Object.hasOwn(o,i))&&0===f[i]?.t&&f[i]?.d)return null;s||("__proto__"===i&&(Object.defineProperty(o,i,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(f,i,{enumerable:!0,configurable:!0,writable:!0})),f[i]={t:t<e.length-1&&2===r?3:r,d:!1,i:0,c:{}})}if(l=f[i],l.t!==r&&(1!==r||3!==l.t)||(2===r&&(l.d||(l.d=!0,o[i]=[]),o[i].push(o={}),l.c[l.i++]=l={t:1,d:!1,i:0,c:{}}),l.d))return null;if(l.d=!0,1===r)o=s?o[i]:o[i]={};else if(0===r&&s)return null;return[i,o,l.c]}function _(n){let r=function(e,{maxDepth:n=1e3,integersAsBigInt:r}={}){let i={},o={},f=i,s=o;for(let a=l(e,0);a<e.length;){if("["===e[a]){let n="["===e[++a],r=y(e,a+=+n,"]");if(n){if("]"!==e[r[1]-1])throw new t("expected end of table declaration",{toml:e,ptr:r[1]-1});r[1]++}let l=O(r[0],i,o,n?2:1);if(!l)throw new t("trying to redefine an already defined table or value",{toml:e,ptr:a});s=l[2],f=l[1],a=r[1]}else{let i=y(e,a),l=O(i[0],f,s,0);if(!l)throw new t("trying to redefine an already defined table or value",{toml:e,ptr:a});let o=g(e,i[1],void 0,n,r);l[1][l[0]]=o[0],a=o[1]}if(a=l(e,a,!0),e[a]&&"\n"!==e[a]&&"\r"!==e[a])throw new t("each key-value declaration must be followed by an end-of-line",{toml:e,ptr:a});a=l(e,a)}return i}(n);return e(n,r,{preserveIndentation:!1}),r}export{_ as parseTOML};
