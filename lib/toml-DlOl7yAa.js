import{N as e}from"./index.js";import"os";import"crypto";import"fs";import"path";import"http";import"https";import"net";import"tls";import"events";import"assert";import"util";import"stream";import"buffer";import"querystring";import"stream/web";import"node:stream";import"node:util";import"node:events";import"worker_threads";import"perf_hooks";import"util/types";import"async_hooks";import"console";import"url";import"zlib";import"string_decoder";import"diagnostics_channel";import"child_process";import"timers";import"node:fs";import"node:os";import"node:path";import"node:fs/promises";import"node:url";import"node:assert";import"node:process";import"node:v8";import"node:module";import"node:crypto";import"node:tty";import"node:perf_hooks";import"node:vm";import"module";import"process";import"tty";import"v8";import"node:child_process";
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
 */class t extends Error{line;column;codeblock;constructor(e,t){const[n,r]=function(e,t){let n=e.slice(0,t).split(/\r\n|\n|\r/g);return[n.length,n.pop().length+1]}(t.toml,t.ptr),i=function(e,t,n){let r=e.split(/\r\n|\n|\r/g),i="",o=1+(0|Math.log10(t+1));for(let e=t-1;e<=t+1;e++){let l=r[e-1];l&&(i+=e.toString().padEnd(o," "),i+=":  ",i+=l,i+="\n",e===t&&(i+=" ".repeat(o+n+2),i+="^\n"))}return i}(t.toml,n,r);super(`Invalid TOML document: ${e}\n\n${i}`,t),this.line=n,this.column=r,this.codeblock=i}}
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
 */function n(e,t=0,n=e.length){let r=e.indexOf("\n",t);return"\r"===e[r-1]&&r--,r<=n?r:-1}function r(e,n){for(let r=n;r<e.length;r++){let i=e[r];if("\n"===i)return r;if("\r"===i&&"\n"===e[r+1])return r+1;if(i<" "&&"\t"!==i||""===i)throw new t("control characters are not allowed in comments",{toml:e,ptr:n})}return e.length}function i(e,t,n,o){let l;for(;" "===(l=e[t])||"\t"===l||!n&&("\n"===l||"\r"===l&&"\n"===e[t+1]);)t++;return o||"#"!==l?t:i(e,r(e,t),n)}function o(e,r,i,o,l=!1){if(!o)return(r=n(e,r))<0?e.length:r;for(let t=r;t<e.length;t++){let r=e[t];if("#"===r)t=n(e,t);else{if(r===i)return t+1;if(r===o)return t;if(l&&("\n"===r||"\r"===r&&"\n"===e[t+1]))return t}}throw new t("cannot find end of structure",{toml:e,ptr:r})}function l(e,t){let n=e[t],r=n===e[t+1]&&e[t+1]===e[t+2]?e.slice(t,t+3):n;t+=r.length-1;do{t=e.indexOf(r,++t)}while(t>-1&&"'"!==n&&"\\"===e[t-1]&&"\\"!==e[t-2]);return t>-1&&(t+=r.length,r.length>1&&(e[t]===n&&t++,e[t]===n&&t++)),t}
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
 */let s=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i;class a extends Date{#e=!1;#t=!1;#n=null;constructor(e){let t=!0,n=!0,r="Z";if("string"==typeof e){let i=e.match(s);i?(i[1]||(t=!1,e=`0000-01-01T${e}`),n=!!i[2],i[2]&&+i[2]>23?e="":(r=i[3]||null,e=e.toUpperCase(),!r&&n&&(e+="Z"))):e=""}super(e),isNaN(this.getTime())||(this.#e=t,this.#t=n,this.#n=r)}isDateTime(){return this.#e&&this.#t}isLocal(){return!this.#e||!this.#t||!this.#n}isDate(){return this.#e&&!this.#t}isTime(){return this.#t&&!this.#e}isValid(){return this.#e||this.#t}toISOString(){let e=super.toISOString();if(this.isDate())return e.slice(0,10);if(this.isTime())return e.slice(11,23);if(null===this.#n)return e.slice(0,-1);if("Z"===this.#n)return e;let t=60*+this.#n.slice(1,3)+ +this.#n.slice(4,6);return t="-"===this.#n[0]?t:-t,new Date(this.getTime()-6e4*t).toISOString().slice(0,-1)+this.#n}static wrapAsOffsetDateTime(e,t="Z"){let n=new a(e);return n.#n=t,n}static wrapAsLocalDateTime(e){let t=new a(e);return t.#n=null,t}static wrapAsLocalDate(e){let t=new a(e);return t.#t=!1,t.#n=null,t}static wrapAsLocalTime(e){let t=new a(e);return t.#e=!1,t.#n=null,t
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
 */}}let f=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,d=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,p=/^[+-]?0[0-9_]/,u=/^[0-9a-f]{4,8}$/i,c={b:"\b",t:"\t",n:"\n",f:"\f",r:"\r",'"':'"',"\\":"\\"};function m(e,n=0,r=e.length){let o="'"===e[n],l=e[n++]===e[n]&&e[n]===e[n+1];l&&(r-=2,"\r"===e[n+=2]&&n++,"\n"===e[n]&&n++);let s,a=0,f="",d=n;for(;n<r-1;){let r=e[n++];if("\n"===r||"\r"===r&&"\n"===e[n]){if(!l)throw new t("newlines are not allowed in strings",{toml:e,ptr:n-1})}else if(r<" "&&"\t"!==r||""===r)throw new t("control characters are not allowed in strings",{toml:e,ptr:n-1});if(s){if(s=!1,"u"===r||"U"===r){let i=e.slice(n,n+="u"===r?4:8);if(!u.test(i))throw new t("invalid unicode escape",{toml:e,ptr:a});try{f+=String.fromCodePoint(parseInt(i,16))}catch{throw new t("invalid unicode escape",{toml:e,ptr:a})}}else if(!l||"\n"!==r&&" "!==r&&"\t"!==r&&"\r"!==r){if(!(r in c))throw new t("unrecognized escape sequence",{toml:e,ptr:a});f+=c[r]}else{if("\n"!==e[n=i(e,n-1,!0)]&&"\r"!==e[n])throw new t("invalid escape: only line-ending whitespace may be escaped",{toml:e,ptr:a});n=i(e,n)}d=n}else!o&&"\\"===r&&(a=n-1,s=!0,f+=e.slice(d,a))}return f+e.slice(d,r-1)}function h(e,n,r){if("true"===e)return!0;if("false"===e)return!1;if("-inf"===e)return-1/0;if("inf"===e||"+inf"===e)return 1/0;if("nan"===e||"+nan"===e||"-nan"===e)return NaN;if("-0"===e)return 0;let i;if((i=f.test(e))||d.test(e)){if(p.test(e))throw new t("leading zeroes are not allowed",{toml:n,ptr:r});let o=+e.replace(/_/g,"");if(isNaN(o))throw new t("invalid number",{toml:n,ptr:r});if(i&&!Number.isSafeInteger(o))throw new t("integer value cannot be represented losslessly",{toml:n,ptr:r});return o}let o=new a(e);if(!o.isValid())throw new t("invalid value",{toml:n,ptr:r});return o}
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
 */function w(e,s,a,f){if(0===f)throw new t("document contains excessively nested structures. aborting.",{toml:e,ptr:s});let d,p=e[s];if("["===p||"{"===p){let[i,l]="["===p?function(e,n,i){let o,l=[];for(n++;"]"!==(o=e[n++])&&o;){if(","===o)throw new t("expected value, found comma",{toml:e,ptr:n-1});if("#"===o)n=r(e,n);else if(" "!==o&&"\t"!==o&&"\n"!==o&&"\r"!==o){let t=w(e,n-1,"]",i-1);l.push(t[0]),n=t[1]}}if(!o)throw new t("unfinished array encountered",{toml:e,ptr:n});return[l,n]}
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
 */(e,s,f):function(e,n,r){let i,o={},l=new Set,s=0;for(n++;"}"!==(i=e[n++])&&i;){if("\n"===i)throw new t("newlines are not allowed in inline tables",{toml:e,ptr:n-1});if("#"===i)throw new t("inline tables cannot contain comments",{toml:e,ptr:n-1});if(","===i)throw new t("expected key-value, found comma",{toml:e,ptr:n-1});if(" "!==i&&"\t"!==i){let i,a=o,f=!1,[d,p]=b(e,n-1);for(let r=0;r<d.length;r++){if(r&&(a=f?a[i]:a[i]={}),i=d[r],(f=Object.hasOwn(a,i))&&("object"!=typeof a[i]||l.has(a[i])))throw new t("trying to redefine an already defined value",{toml:e,ptr:n});!f&&"__proto__"===i&&Object.defineProperty(a,i,{enumerable:!0,configurable:!0,writable:!0})}if(f)throw new t("trying to redefine an already defined value",{toml:e,ptr:n});let[u,c]=w(e,p,"}",r-1);l.add(u),a[i]=u,s=","===e[(n=c)-1]?n-1:0}}if(s)throw new t("trailing commas are not allowed in inline tables",{toml:e,ptr:s});if(!i)throw new t("unfinished table encountered",{toml:e,ptr:n});return[o,n]}(e,s,f),d=o(e,l,",",a);if("}"===a){let r=n(e,l,d);if(r>-1)throw new t("newlines are not allowed in inline tables",{toml:e,ptr:r})}return[i,d]}if('"'===p||"'"===p){d=l(e,s);let n=m(e,s,d);if(a){if(d=i(e,d,"]"!==a),e[d]&&","!==e[d]&&e[d]!==a&&"\n"!==e[d]&&"\r"!==e[d])throw new t("unexpected character encountered",{toml:e,ptr:d});d+=+(","===e[d])}return[n,d]}d=o(e,s,",",a);let u=function(e,n,i,o){let l=e.slice(n,i),s=l.indexOf("#");s>-1&&(r(e,s),l=l.slice(0,s));let a=l.trimEnd();if(!o){let r=l.indexOf("\n",a.length);if(r>-1)throw new t("newlines are not allowed in inline tables",{toml:e,ptr:n+r})}return[a,s]}(e,s,d-+(","===e[d-1]),"]"===a);if(!u[0])throw new t("incomplete key-value declaration: no value specified",{toml:e,ptr:s});return a&&u[1]>-1&&(d=i(e,s+u[1]),d+=+(","===e[d])),[h(u[0],e,s),d]}
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
 */let g=/^[a-zA-Z0-9-_]+[ \t]*$/;function b(e,r,o="="){let s=r-1,a=[],f=e.indexOf(o,r);if(f<0)throw new t("incomplete key-value: cannot find end of key",{toml:e,ptr:r});do{let i=e[r=++s];if(" "!==i&&"\t"!==i)if('"'===i||"'"===i){if(i===e[r+1]&&i===e[r+2])throw new t("multiline strings are not allowed in keys",{toml:e,ptr:r});let d=l(e,r);if(d<0)throw new t("unfinished string encountered",{toml:e,ptr:r});s=e.indexOf(".",d);let p=e.slice(d,s<0||s>f?f:s),u=n(p);if(u>-1)throw new t("newlines are not allowed in keys",{toml:e,ptr:r+s+u});if(p.trimStart())throw new t("found extra tokens after the string part",{toml:e,ptr:d});if(f<d&&(f=e.indexOf(o,d),f<0))throw new t("incomplete key-value: cannot find end of key",{toml:e,ptr:r});a.push(m(e,r,d))}else{s=e.indexOf(".",r);let n=e.slice(r,s<0||s>f?f:s);if(!g.test(n))throw new t("only letter, numbers, dashes and underscores are allowed in keys",{toml:e,ptr:r});a.push(n.trimEnd())}}while(s+1&&s<f);return[a,i(e,f+1,!0,!0)]}function y(e,t,n,r){let i,o,l=t,s=n,a=!1;for(let t=0;t<e.length;t++){if(t){if(l=a?l[i]:l[i]={},s=(o=s[i]).c,0===r&&(1===o.t||2===o.t))return null;if(2===o.t){let e=l.length-1;l=l[e],s=s[e].c}}if(i=e[t],(a=Object.hasOwn(l,i))&&0===s[i]?.t&&s[i]?.d)return null;a||("__proto__"===i&&(Object.defineProperty(l,i,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(s,i,{enumerable:!0,configurable:!0,writable:!0})),s[i]={t:t<e.length-1&&2===r?3:r,d:!1,i:0,c:{}})}if(o=s[i],o.t!==r&&(1!==r||3!==o.t)||(2===r&&(o.d||(o.d=!0,l[i]=[]),l[i].push(l={}),o.c[o.i++]=o={t:1,d:!1,i:0,c:{}}),o.d))return null;if(o.d=!0,1===r)l=a?l[i]:l[i]={};else if(0===r&&a)return null;return[i,l,o.c]}function v(n){const r=function(e){let n={},r={},o=n,l=r;for(let s=i(e,0);s<e.length;){if("["===e[s]){let i="["===e[++s],a=b(e,s+=+i,"]");if(i){if("]"!==e[a[1]-1])throw new t("expected end of table declaration",{toml:e,ptr:a[1]-1});a[1]++}let f=y(a[0],n,r,i?2:1);if(!f)throw new t("trying to redefine an already defined table or value",{toml:e,ptr:s});l=f[2],o=f[1],s=a[1]}else{let n=b(e,s),r=y(n[0],o,l,0);if(!r)throw new t("trying to redefine an already defined table or value",{toml:e,ptr:s});let i=w(e,n[1],void 0,1e3);r[1][r[0]]=i[0],s=i[1]}if(s=i(e,s,!0),e[s]&&"\n"!==e[s]&&"\r"!==e[s])throw new t("each key-value declaration must be followed by an end-of-line",{toml:e,ptr:s});s=i(e,s)}return n}(n);return e(n,r,{preserveIndentation:!1}),r}export{v as parseTOML};
