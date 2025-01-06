import{N as e,C as t}from"./index.js";import"os";import"crypto";import"fs";import"path";import"http";import"https";import"net";import"tls";import"events";import"assert";import"util";import"stream";import"buffer";import"querystring";import"stream/web";import"node:stream";import"node:util";import"node:events";import"worker_threads";import"perf_hooks";import"util/types";import"async_hooks";import"console";import"url";import"zlib";import"string_decoder";import"diagnostics_channel";import"child_process";import"timers";import"node:fs";import"node:os";import"node:path";import"node:fs/promises";import"module";import"vm";import"process";import"v8";import"tty";import"node:module";import"node:url";import"node:assert";import"node:process";import"node:v8";import"node:child_process";var n,r,i,o=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),a=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},s=(e,t,n)=>(a(e,t,"read from private field"),n?n.call(e):t.get(e)),f=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},u=(e,t,n,r)=>(a(e,t,"write to private field"),t.set(e,n),n);class c extends Error{constructor(e,t){const[n,r]=
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
 */
function(e,t){let n=e.slice(0,t).split(/\r\n|\n|\r/g);return[n.length,n.pop().length+1]}(t.toml,t.ptr),i=function(e,t,n){let r=e.split(/\r\n|\n|\r/g),i="",o=1+(0|Math.log10(t+1));for(let e=t-1;e<=t+1;e++){let l=r[e-1];l&&(i+=e.toString().padEnd(o," "),i+=":  ",i+=l,i+="\n",e===t&&(i+=" ".repeat(o+n+2),i+="^\n"))}return i}(t.toml,n,r);super(`Invalid TOML document: ${e}\n\n${i}`,t),l(this,"line"),l(this,"column"),l(this,"codeblock"),this.line=n,this.column=r,this.codeblock=i}}
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
 */function d(e,t=0,n=e.length){let r=e.indexOf("\n",t);return"\r"===e[r-1]&&r--,r<=n?r:-1}function p(e,t){for(let n=t;n<e.length;n++){let r=e[n];if("\n"===r)return n;if("\r"===r&&"\n"===e[n+1])return n+1;if(r<" "&&"\t"!==r||""===r)throw new c("control characters are not allowed in comments",{toml:e,ptr:t})}return e.length}function m(e,t,n,r){let i;for(;" "===(i=e[t])||"\t"===i||!n&&("\n"===i||"\r"===i&&"\n"===e[t+1]);)t++;return r||"#"!==i?t:m(e,p(e,t),n)}function h(e,t,n,r,i=!1){if(!r)return(t=d(e,t))<0?e.length:t;for(let o=t;o<e.length;o++){let t=e[o];if("#"===t)o=d(e,o);else{if(t===n)return o+1;if(t===r)return o;if(i&&("\n"===t||"\r"===t&&"\n"===e[o+1]))return o}}throw new c("cannot find end of structure",{toml:e,ptr:t})}function w(e,t){let n=e[t],r=n===e[t+1]&&e[t+1]===e[t+2]?e.slice(t,t+3):n;t+=r.length-1;do{t=e.indexOf(r,++t)}while(t>-1&&"'"!==n&&"\\"===e[t-1]&&"\\"!==e[t-2]);return t>-1&&(t+=r.length,r.length>1&&(e[t]===n&&t++,e[t]===n&&t++)),t}
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
 */let g=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i;const y=class e extends Date{constructor(e){let t=!0,o=!0,l="Z";if("string"==typeof e){let n=e.match(g);n?(n[1]||(t=!1,e=`0000-01-01T${e}`),o=!!n[2],n[2]&&+n[2]>23?e="":(l=n[3]||null,e=e.toUpperCase(),!l&&o&&(e+="Z"))):e=""}super(e),f(this,n,!1),f(this,r,!1),f(this,i,null),isNaN(this.getTime())||(u(this,n,t),u(this,r,o),u(this,i,l))}isDateTime(){return s(this,n)&&s(this,r)}isLocal(){return!s(this,n)||!s(this,r)||!s(this,i)}isDate(){return s(this,n)&&!s(this,r)}isTime(){return s(this,r)&&!s(this,n)}isValid(){return s(this,n)||s(this,r)}toISOString(){let e=super.toISOString();if(this.isDate())return e.slice(0,10);if(this.isTime())return e.slice(11,23);if(null===s(this,i))return e.slice(0,-1);if("Z"===s(this,i))return e;let t=60*+s(this,i).slice(1,3)+ +s(this,i).slice(4,6);return t="-"===s(this,i)[0]?t:-t,new Date(this.getTime()-6e4*t).toISOString().slice(0,-1)+s(this,i)}static wrapAsOffsetDateTime(t,n="Z"){let r=new e(t);return u(r,i,n),r}static wrapAsLocalDateTime(t){let n=new e(t);return u(n,i,null),n}static wrapAsLocalDate(t){let n=new e(t);return u(n,r,!1),u(n,i,null),n}static wrapAsLocalTime(t){let r=new e(t);return u(r,n,!1),u(r,i,null),r}};n=new WeakMap,r=new WeakMap,i=new WeakMap;let b=y,v=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,O=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,_=/^[+-]?0[0-9_]/,k=/^[0-9a-f]{4,8}$/i,T={b:"\b",t:"\t",n:"\n",f:"\f",r:"\r",'"':'"',"\\":"\\"};
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
 */function x(e,t=0,n=e.length){let r="'"===e[t],i=e[t++]===e[t]&&e[t]===e[t+1];i&&(n-=2,"\r"===e[t+=2]&&t++,"\n"===e[t]&&t++);let o,l=0,a="",s=t;for(;t<n-1;){let n=e[t++];if("\n"===n||"\r"===n&&"\n"===e[t]){if(!i)throw new c("newlines are not allowed in strings",{toml:e,ptr:t-1})}else if(n<" "&&"\t"!==n||""===n)throw new c("control characters are not allowed in strings",{toml:e,ptr:t-1});if(o){if(o=!1,"u"===n||"U"===n){let r=e.slice(t,t+="u"===n?4:8);if(!k.test(r))throw new c("invalid unicode escape",{toml:e,ptr:l});try{a+=String.fromCodePoint(parseInt(r,16))}catch{throw new c("invalid unicode escape",{toml:e,ptr:l})}}else if(!i||"\n"!==n&&" "!==n&&"\t"!==n&&"\r"!==n){if(!(n in T))throw new c("unrecognized escape sequence",{toml:e,ptr:l});a+=T[n]}else{if("\n"!==e[t=m(e,t-1,!0)]&&"\r"!==e[t])throw new c("invalid escape: only line-ending whitespace may be escaped",{toml:e,ptr:l});t=m(e,t)}s=t}else!r&&"\\"===n&&(l=t-1,o=!0,a+=e.slice(s,l))}return a+e.slice(s,n-1)}function $(e,t,n){if("true"===e)return!0;if("false"===e)return!1;if("-inf"===e)return-1/0;if("inf"===e||"+inf"===e)return 1/0;if("nan"===e||"+nan"===e||"-nan"===e)return NaN;if("-0"===e)return 0;let r;if((r=v.test(e))||O.test(e)){if(_.test(e))throw new c("leading zeroes are not allowed",{toml:t,ptr:n});let i=+e.replace(/_/g,"");if(isNaN(i))throw new c("invalid number",{toml:t,ptr:n});if(r&&!Number.isSafeInteger(i))throw new c("integer value cannot be represented losslessly",{toml:t,ptr:n});return i}let i=new b(e);if(!i.isValid())throw new c("invalid value",{toml:t,ptr:n});return i}
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
 */function S(e,t,n){let r,i=e[t];if("["===i||"{"===i){let[r,o]="["===i?function(e,t){let n,r=[];for(t++;"]"!==(n=e[t++])&&n;){if(","===n)throw new c("expected value, found comma",{toml:e,ptr:t-1});if("#"===n)t=p(e,t);else if(" "!==n&&"\t"!==n&&"\n"!==n&&"\r"!==n){let n=S(e,t-1,"]");r.push(n[0]),t=n[1]}}if(!n)throw new c("unfinished array encountered",{toml:e,ptr:t});return[r,t]}
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
 */(e,t):function(e,t){let n,r={},i=new Set,o=0;for(t++;"}"!==(n=e[t++])&&n;){if("\n"===n)throw new c("newlines are not allowed in inline tables",{toml:e,ptr:t-1});if("#"===n)throw new c("inline tables cannot contain comments",{toml:e,ptr:t-1});if(","===n)throw new c("expected key-value, found comma",{toml:e,ptr:t-1});if(" "!==n&&"\t"!==n){let n,l=r,a=!1,[s,f]=N(e,t-1);for(let r=0;r<s.length;r++){if(r&&(l=a?l[n]:l[n]={}),n=s[r],(a=Object.hasOwn(l,n))&&("object"!=typeof l[n]||i.has(l[n])))throw new c("trying to redefine an already defined value",{toml:e,ptr:t});!a&&"__proto__"===n&&Object.defineProperty(l,n,{enumerable:!0,configurable:!0,writable:!0})}if(a)throw new c("trying to redefine an already defined value",{toml:e,ptr:t});let[u,d]=S(e,f,"}");i.add(u),l[n]=u,o=","===e[(t=d)-1]?t-1:0}}if(o)throw new c("trailing commas are not allowed in inline tables",{toml:e,ptr:o});if(!n)throw new c("unfinished table encountered",{toml:e,ptr:t});return[r,t]}(e,t),l=h(e,o,",",n);if("}"===n){let t=d(e,o,l);if(t>-1)throw new c("newlines are not allowed in inline tables",{toml:e,ptr:t})}return[r,l]}if('"'===i||"'"===i){r=w(e,t);let i=x(e,t,r);if(n){if(r=m(e,r,"]"!==n),e[r]&&","!==e[r]&&e[r]!==n&&"\n"!==e[r]&&"\r"!==e[r])throw new c("unexpected character encountered",{toml:e,ptr:r});r+=+(","===e[r])}return[i,r]}r=h(e,t,",",n);let o=function(e,t,n,r){let i=e.slice(t,n),o=i.indexOf("#");o>-1&&(p(e,o),i=i.slice(0,o));let l=i.trimEnd();if(!r){let n=i.indexOf("\n",l.length);if(n>-1)throw new c("newlines are not allowed in inline tables",{toml:e,ptr:t+n})}return[l,o]}(e,t,r-+(","===e[r-1]),"]"===n);if(!o[0])throw new c("incomplete key-value declaration: no value specified",{toml:e,ptr:t});return n&&o[1]>-1&&(r=m(e,t+o[1]),r+=+(","===e[r])),[$(o[0],e,t),r]}
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
 */let j=/^[a-zA-Z0-9-_]+[ \t]*$/;function N(e,t,n="="){let r=t-1,i=[],o=e.indexOf(n,t);if(o<0)throw new c("incomplete key-value: cannot find end of key",{toml:e,ptr:t});do{let l=e[t=++r];if(" "!==l&&"\t"!==l)if('"'===l||"'"===l){if(l===e[t+1]&&l===e[t+2])throw new c("multiline strings are not allowed in keys",{toml:e,ptr:t});let a=w(e,t);if(a<0)throw new c("unfinished string encountered",{toml:e,ptr:t});r=e.indexOf(".",a);let s=e.slice(a,r<0||r>o?o:r),f=d(s);if(f>-1)throw new c("newlines are not allowed in keys",{toml:e,ptr:t+r+f});if(s.trimStart())throw new c("found extra tokens after the string part",{toml:e,ptr:a});if(o<a&&(o=e.indexOf(n,a),o<0))throw new c("incomplete key-value: cannot find end of key",{toml:e,ptr:t});i.push(x(e,t,a))}else{r=e.indexOf(".",t);let n=e.slice(t,r<0||r>o?o:r);if(!j.test(n))throw new c("only letter, numbers, dashes and underscores are allowed in keys",{toml:e,ptr:t});i.push(n.trimEnd())}}while(r+1&&r<o);return[i,m(e,o+1,!0,!0)]}function E(e,t,n,r){let i,o,l=t,a=n,s=!1;for(let t=0;t<e.length;t++){if(t){if(l=s?l[i]:l[i]={},a=(o=a[i]).c,0===r&&(1===o.t||2===o.t))return null;if(2===o.t){let e=l.length-1;l=l[e],a=a[e].c}}if(i=e[t],(s=Object.hasOwn(l,i))&&0===a[i]?.t&&a[i]?.d)return null;s||("__proto__"===i&&(Object.defineProperty(l,i,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(a,i,{enumerable:!0,configurable:!0,writable:!0})),a[i]={t:t<e.length-1&&2===r?3:r,d:!1,i:0,c:{}})}if(o=a[i],o.t!==r&&(1!==r||3!==o.t)||(2===r&&(o.d||(o.d=!0,l[i]=[]),l[i].push(l={}),o.c[o.i++]=o={t:1,d:!1,i:0,c:{}}),o.d))return null;if(o.d=!0,1===r)l=s?l[i]:l[i]={};else if(0===r&&s)return null;return[i,l,o.c]}
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
 */
const A=/^[a-z0-9-_]+$/i;function D(e){let t=typeof e;if("object"===t){if(Array.isArray(e))return"array";if(e instanceof Date)return"date"}return t}function I(e){for(let t=0;t<e.length;t++)if("object"!==D(e[t]))return!1;return 0!=e.length}function z(e){return JSON.stringify(e).replace(/\x7f/g,"\\u007f")}function L(e,t=D(e)){if("number"===t)return isNaN(e)?"nan":e===1/0?"inf":e===-1/0?"-inf":e.toString();if("bigint"===t||"boolean"===t)return e.toString();if("string"===t)return z(e);if("date"===t){if(isNaN(e.getTime()))throw new TypeError("cannot serialize invalid date");return e.toISOString()}return"object"===t?function(e){let t=Object.keys(e);if(0===t.length)return"{}";let n="{ ";for(let r=0;r<t.length;r++){let i=t[r];r&&(n+=", "),n+=A.test(i)?i:z(i),n+=" = ",n+=L(e[i])}return n+" }"}(e):"array"===t?function(e){if(0===e.length)return"[]";let t="[ ";for(let n=0;n<e.length;n++){if(n&&(t+=", "),null===e[n]||void 0===e[n])throw new TypeError("arrays cannot contain null or undefined values");t+=L(e[n])}return t+" ]"}(e):void 0}function M(e,t){let n="";for(let r=0;r<e.length;r++)n+=`[[${t}]]\n`,n+=Z(e[r],t),n+="\n\n";return n}function Z(e,t=""){let n="",r="",i=Object.keys(e);for(let o=0;o<i.length;o++){let l=i[o];if(null!==e[l]&&void 0!==e[l]){let i=D(e[l]);if("symbol"===i||"function"===i)throw new TypeError(`cannot serialize values of type '${i}'`);let o=A.test(l)?l:z(l);if("array"===i&&I(e[l]))r+=M(e[l],t?`${t}.${o}`:o);else if("object"===i){let n=t?`${t}.${o}`:o;r+=`[${n}]\n`,r+=Z(e[l],n),r+="\n\n"}else n+=o,n+=" = ",n+=L(e[l],i),n+="\n"}}return`${n}\n${r}`.trim()}function C(t){const n=function(e){let t={},n={},r=t,i=n;for(let o=m(e,0);o<e.length;){if("["===e[o]){let l="["===e[++o],a=N(e,o+=+l,"]");if(l){if("]"!==e[a[1]-1])throw new c("expected end of table declaration",{toml:e,ptr:a[1]-1});a[1]++}let s=E(a[0],t,n,l?2:1);if(!s)throw new c("trying to redefine an already defined table or value",{toml:e,ptr:o});i=s[2],r=s[1],o=a[1]}else{let t=N(e,o),n=E(t[0],r,i,0);if(!n)throw new c("trying to redefine an already defined table or value",{toml:e,ptr:o});let l=S(e,t[1]);n[1][n[0]]=l[0],o=l[1]}if(o=m(e,o,!0),e[o]&&"\n"!==e[o]&&"\r"!==e[o])throw new c("each key-value declaration must be followed by an end-of-line",{toml:e,ptr:o});o=m(e,o)}return t}(t);return e(t,n,{preserveIndentation:!1}),n}function P(e){const n=t(e,{preserveIndentation:!1}),r=function(e){if("object"!==D(e))throw new TypeError("stringify can only be called with an object");return Z(e)}(e);return n.whitespace.start+r+n.whitespace.end}export{C as parseTOML,P as stringifyTOML};
