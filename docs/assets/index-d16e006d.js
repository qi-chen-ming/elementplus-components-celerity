import{d as Xe,e as v,h as Qe,j as Ye,c as Ze,a as F,b as T,w as A,u as E,i as et,F as tt,r as B,p as nt,k as rt,o as ot,t as V,f as I,_ as st}from"./index-cb92fd23.js";const it=`# 表格\r
\r
可配置型表格,支持更多自定义\r
\r
## 按需引入\r
\r
\`\`\`js\r
import table from 'elementplus-components-celerity/ecc-table';\r
\r
app.use(table);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<ecc-table\r
  :options="options"\r
  :data="tableData"\r
  elementLoadingText="加载中..."\r
  elementLoadingBackground="rgba(0,0,0,.8)"\r
  :element-loading-svg="svg"\r
  element-loading-svg-view-box="-10, -10, 50, 50"\r
  isEditRow\r
  pagination\r
  stripe\r
  border\r
  :total="total"\r
  :currentPage="current"\r
  :pageSize="pageSize"\r
  v-model:editRowIndex="editRowIndex"\r
  @confirm="confirm"\r
  @close="close"\r
  @size-change="handleSizeChange"\r
  @current-change="handleCurrentChange"\r
>\r
  <!-- 可编辑单元-data数据的模板 -->\r
  <template #date="{ scope }">\r
    <el-icon-timer></el-icon-timer>\r
    <span style="margin-left: 10px">{{ scope.row.date }}</span>\r
  </template>\r
  <!-- 可编辑单元-name名字的模板 -->\r
  <template #name="{ scope }">\r
    <el-popover effect="light" trigger="hover" placement="top">\r
      <template #default>\r
        <p>姓名: {{ scope.row.name }}</p>\r
        <p>住址: {{ scope.row.address }}</p>\r
      </template>\r
      <template #reference>\r
        <div class="name-wrapper">\r
          <el-tag size="default">{{ scope.row.name }}</el-tag>\r
        </div>\r
      </template>\r
    </el-popover>\r
  </template>\r
  <template #editRow="scope">\r
    <el-button size="small" type="primary" @click="sure(scope.scope)"\r
      >确认</el-button\r
    >\r
    <el-button size="small" type="danger" @click="cancel(scope.scope)"\r
      >取消</el-button\r
    >\r
  </template>\r
  <template #action="scope">\r
    <el-button size="small" type="primary" @click="edit(scope.scope)"\r
      >编辑</el-button\r
    >\r
    <el-button size="small" type="danger" @click="remove(scope.scope)"\r
      >删除</el-button\r
    >\r
  </template>\r
</ecc-table>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-table/index.vue)\r
\r
## Props\r
\r
| 属性                     | 说明                     | 类型           | 可选值            | 默认值        |\r
| :----------------------- | ------------------------ | -------------- | ----------------- | ------------- |\r
| options                  | 表格的配置               | TableOptions[] | 必填              | -             |\r
| data                     | 表格数据                 | any[]          | 必填              | -             |\r
| elementLoadingText       | 加载文案                 | string         | -                 | -             |\r
| elementLoadingSpinner    | 加载图标名               | string         | -                 | -             |\r
| elementLoadingBackground | 加载背景颜色             | string         | -                 | -             |\r
| elementLoadingSvg        | 加载图标是 svg           | string         | -                 | -             |\r
| elementLoadingSvgViewBox | 加载图是 svg 的配置      | string         | -                 | -             |\r
| editIcon                 | 加载图是 svg 的配置      | string         | -                 | Edit          |\r
| elementLoadingSvgViewBox | 加载图是 svg 的配置      | string         | -                 | -             |\r
| isEditRow                | 是否可以编辑行           | boolean        | true/false        | false         |\r
| pagination               | 是否显示分页             | boolean        | true/false        | false         |\r
| paginationAlign          | 显示分页的对齐方式       | string         | left/center/right | left          |\r
| currentPage              | 当前是第几页             | number         | -                 | 1             |\r
| pageSize                 | 当前一页多少条数据       | number         | -                 | 10            |\r
| pageSizes                | 显示分页数据多少条的选项 | number[]       | -                 | [10,20,30,40] |\r
| total                    | 数据总条数               | number         | -                 | 0             |\r
\r
## TableOptions 数据格式\r
\r
| key      | 说明                 | 类型              |\r
| :------- | -------------------- | ----------------- |\r
| prop     | 表格数据字段名       | string            |\r
| label    | 表格表头名称         | string            |\r
| width    | 表格单元格宽度       | string/number     |\r
| align    | 表格单元格对齐方式   | left/center/right |\r
| slot     | 自定义列模版的插槽名 | string            |\r
| action   | 是否是操作项         | boolean           |\r
| editable | 是否可以编辑         | boolean           |\r
\r
## 事件\r
\r
| 事件名         | 说明                           | 参数              |\r
| :------------- | ------------------------------ | ----------------- |\r
| comfirm        | 可编辑单元格确认事件           | scope: 当前行数据 |\r
| cancel         | 可编辑单元格取消事件           | scope: 当前行数据 |\r
| size-change    | 分页当前显示条数改变时触发事件 | val: 当前页条数   |\r
| current-change | 分页当前页改变时触发           | val: 当前页       |\r
\r
## slots 插槽\r
\r
| 名称     | 说明                   |\r
| :------- | ---------------------- |\r
| cellEdit | 自定义可编辑单元格内容 |\r
| editRow  | 自定义可编辑行按钮内容 |\r
| action   | 自定义编辑区域内容     |\r
`;function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ne}=Object.prototype,{getPrototypeOf:fe}=Object,de=(e=>t=>{const n=Ne.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>de(t)===e),Q=e=>t=>typeof t===e,{isArray:k}=Array,z=Q("undefined");function at(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&L(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Pe=N("ArrayBuffer");function ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Pe(e.buffer),t}const lt=Q("string"),L=Q("function"),Le=Q("number"),pe=e=>e!==null&&typeof e=="object",ut=e=>e===!0||e===!1,$=e=>{if(de(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=N("Date"),dt=N("File"),pt=N("Blob"),ht=N("FileList"),mt=e=>pe(e)&&L(e.pipe),wt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ne.call(e)===t||L(e.toString)&&e.toString()===t)},yt=N("URLSearchParams"),bt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Fe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!z(e)&&e!==Fe;function ae(){const{caseless:e}=De(this)&&this||{},t={},n=(r,o)=>{const s=e&&Be(t,o)||o;$(t[s])&&$(r)?t[s]=ae(t[s],r):$(r)?t[s]=ae({},r):k(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&H(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(o,s)=>{n&&L(o)?e[s]=Ce(o,n):e[s]=o},{allOwnKeys:r}),e),Et=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),St=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Rt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_t=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},At=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Tt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ct=N("HTMLFormElement"),Nt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pt=N("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Lt=e=>{ke(e,(t,n)=>{if(L(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(L(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Ft=()=>{},Dt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),re="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Ue={DIGIT:ge,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+ge},kt=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ut(e){return!!(e&&L(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),n=(r,o)=>{if(pe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=k(r)?[]:{};return H(r,(i,l)=>{const d=n(i,o+1);!z(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},a={isArray:k,isArrayBuffer:Pe,isBuffer:at,isFormData:wt,isArrayBufferView:ct,isString:lt,isNumber:Le,isBoolean:ut,isObject:pe,isPlainObject:$,isUndefined:z,isDate:ft,isFile:dt,isBlob:pt,isRegExp:Pt,isFunction:L,isStream:mt,isURLSearchParams:yt,isTypedArray:At,isFileList:ht,forEach:H,merge:ae,extend:gt,trim:bt,stripBOM:Et,inherits:St,toFlatObject:Rt,kindOf:de,kindOfTest:N,endsWith:Ot,toArray:_t,forEachEntry:xt,matchAll:Tt,isHTMLForm:Ct,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:ke,freezeMethods:Lt,toObjectSet:Bt,toCamelCase:Nt,noop:Ft,toFiniteNumber:Dt,findKey:Be,global:Fe,isContextDefined:De,ALPHABET:Ue,generateString:kt,isSpecCompliantForm:Ut,toJSONObject:vt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=m.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(m,je);Object.defineProperty(ve,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const jt=null;function ce(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(o,s){return o=ze(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(ce)}const It=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Y(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,_){return!a.isUndefined(_[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,_){let R=f;if(f&&!_&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&zt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(R=a.toArray(f)))return h=ze(h),R.forEach(function(O,U){!(a.isUndefined(O)||O===null)&&t.append(i===!0?Ee([h],U,s):i===null?h:h+"[]",c(O))}),!1}return ce(f)?!0:(t.append(Ee(_,h,s),c(f)),!1)}const p=[],b=Object.assign(It,{defaultVisitor:u,convertValue:c,isVisitable:ce});function w(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(R,y){(!(a.isUndefined(R)||R===null)&&o.call(t,R,a.isString(y)?y.trim():y,h,b))===!0&&w(R,h?h.concat(y):[y])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&Y(e,this,t)}const Ie=he.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function He(e,t,n){if(!t)return e;const r=n&&n.encode||Ht,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Mt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Re=Mt,Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:he,Jt=typeof FormData<"u"?FormData:null,Vt=typeof Blob<"u"?Blob:null,$t=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Wt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),x={isBrowser:!0,classes:{URLSearchParams:qt,FormData:Jt,Blob:Vt},isStandardBrowserEnv:$t,isStandardBrowserWebWorkerEnv:Wt,protocols:["http","https","file","blob","url","data"]};function Kt(e,t){return Y(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Gt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function qe(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Xt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Gt(r),o,n,0)}),n}return null}const Qt={"Content-Type":void 0};function Yt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Z={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Y(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Yt(t)):t}],transformResponse:[function(t){const n=this.transitional||Z.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Z.headers[t]={}});a.forEach(["post","put","patch"],function(t){Z.headers[t]=a.merge(Qt)});const me=Z,Zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),en=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const nn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function rn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,c){const u=j(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=W(l))}const i=(l,d)=>a.forEach(l,(c,u)=>s(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!nn(t)?i(en(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=j(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return tn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=j(i),i){const l=a.findKey(r,i);l&&(!n||oe(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||oe(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=W(o),delete n[s];return}const l=t?rn(s):String(s).trim();l!==s&&delete n[s],n[l]=W(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=j(i);r[l]||(on(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(ee.prototype);a.freezeMethods(ee);const C=ee;function se(e,t){const n=this||me,r=t||n,o=C.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Je(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const an=x.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!cn(t)?ln(e,t):t}const un=x.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const w=u&&c-u;return w?Math.round(b*1e3/w):void 0}}function _e(e,t){let n=0;const r=dn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const pn=typeof XMLHttpRequest<"u",hn=pn&&function(e){return new Promise(function(n,r){let o=e.data;const s=C.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(x.isStandardBrowserEnv||x.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(w+":"+f))}const u=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),He(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const w=C.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};sn(function(R){n(R),d()},function(R){r(R),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Me;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},x.isStandardBrowserEnv){const w=(e.withCredentials||un(u))&&e.xsrfCookieName&&an.read(e.xsrfCookieName);w&&s.set(e.xsrfHeaderName,w)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",_e(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",_e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{c&&(r(!w||w.type?new M(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=fn(u);if(b&&x.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},K={http:jt,xhr:hn};a.forEach(K,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const mn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?K[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(K,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:K};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Ae(e){return ie(e),e.headers=C.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),mn.getAdapter(e.adapter||me.adapter)(e).then(function(r){return ie(e),r.data=se.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Je(r)||(ie(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof C?e.toJSON():e;function D(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(xe(c),xe(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const p=d[u]||o,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const $e="1.3.5",we={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};we.transitional=function(t,n,r){function o(s,i){return"[Axios v"+$e+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function wn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const le={assertOptions:wn,validators:we},P=le.validators;class X{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:le.assertOptions(o,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=C.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,b;if(!d){const f=[Ae.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);p<b;)u=u.then(f[p++],f[p++]);return u}b=l.length;let w=n;for(p=0;p<b;){const f=l[p++],h=l[p++];try{w=f(w)}catch(_){h.call(this,_);break}}try{u=Ae.call(this,w)}catch(f){return Promise.reject(f)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=D(this.defaults,t);const n=Ve(t.baseURL,t.url);return He(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){X.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(D(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}X.prototype[t]=n(),X.prototype[t+"Form"]=n(!0)});const G=X;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new M(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(o){t=o}),cancel:t}}}const yn=ye;function bn(e){return function(n){return e.apply(null,n)}}function gn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});const En=ue;function We(e){const t=new G(e),n=Ce(G.prototype.request,t);return a.extend(n,G.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return We(D(e,o))},n}const g=We(me);g.Axios=G;g.CanceledError=M;g.CancelToken=yn;g.isCancel=Je;g.VERSION=$e;g.toFormData=Y;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=bn;g.isAxiosError=gn;g.mergeConfig=D;g.AxiosHeaders=C;g.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=En;g.default=g;const Sn=g,Rn=e=>(nt("data-v-7dea46be"),e=e(),rt(),e),On={class:"ecc-components-show"},_n=Rn(()=>F("h1",{class:"ecc-h1"},"组件示例",-1)),An={style:{"margin-left":"10px"}},xn={class:"name-wrapper"},Tn=I("确认"),Cn=I("取消"),Nn=I("编辑"),Pn=I("删除"),Ln=Xe({__name:"index",setup(e){let t=[{prop:"date",label:"日期",align:"center",slot:"date",editable:!0},{prop:"name",label:"姓名",align:"center",slot:"name"},{prop:"address",label:"地址",align:"center",editable:!0},{label:"操作",action:!0,align:"center"}],n=v([]),r=v(""),o=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,s=Qe({}),i=v(1),l=v(10),d=v(0),c=()=>{Sn.post("/api/list",{current:i.value,pageSize:l.value}).then(y=>{y.data.code==="200"&&(n.value=y.data.data.rows,d.value=y.data.data.total)})},u=y=>{l.value=y,c()},p=y=>{i.value=y,c()};Ye(()=>{c()});let b=y=>{s=Object.assign({},y.row),r.value="edit",console.log("点击编辑按钮")},w=y=>{var O;(O=n.value)==null||O.map((U,te)=>{var q;U==y.row&&((q=n.value)==null||q.splice(te,1))})},f=y=>{console.log("点击确认按钮"),y.row.rowEdit=!1,r.value=""},h=y=>{for(let O in y.row)y.row[O]=s[O];y.row.rowEdit=!1},_=y=>{},R=y=>{};return(y,O)=>{const U=B("el-icon-timer"),te=B("el-tag"),q=B("el-popover"),J=B("el-button"),Ke=B("ecc-table"),Ge=B("v-md-preview");return ot(),Ze(tt,null,[F("div",On,[_n,T(Ke,{options:E(t),data:E(n),elementLoadingText:"加载中...",elementLoadingBackground:"rgba(0,0,0,.8)","element-loading-svg":E(o),"element-loading-svg-view-box":"-10, -10, 50, 50",isEditRow:"",pagination:"",stripe:"",border:"",total:E(d),currentPage:E(i),pageSize:E(l),editRowIndex:E(r),"onUpdate:editRowIndex":O[0]||(O[0]=S=>et(r)?r.value=S:r=S),onConfirm:E(_),onClose:E(R),onSizeChange:E(u),onCurrentChange:E(p)},{date:A(({scope:S})=>[T(U),F("span",An,V(S.row.date),1)]),name:A(({scope:S})=>[T(q,{effect:"light",trigger:"hover",placement:"top"},{default:A(()=>[F("p",null,"姓名: "+V(S.row.name),1),F("p",null,"住址: "+V(S.row.address),1)]),reference:A(()=>[F("div",xn,[T(te,{size:"default"},{default:A(()=>[I(V(S.row.name),1)]),_:2},1024)])]),_:2},1024)]),editRow:A(S=>[T(J,{size:"small",type:"primary",onClick:ne=>E(f)(S.scope)},{default:A(()=>[Tn]),_:2},1032,["onClick"]),T(J,{size:"small",type:"danger",onClick:ne=>E(h)(S.scope)},{default:A(()=>[Cn]),_:2},1032,["onClick"])]),action:A(S=>[T(J,{size:"small",type:"primary",onClick:ne=>E(b)(S.scope)},{default:A(()=>[Nn]),_:2},1032,["onClick"]),T(J,{size:"small",type:"danger",onClick:ne=>E(w)(S.scope)},{default:A(()=>[Pn]),_:2},1032,["onClick"])]),_:1},8,["options","data","element-loading-svg","total","currentPage","pageSize","editRowIndex","onConfirm","onClose","onSizeChange","onCurrentChange"])]),T(Ge,{text:E(it)},null,8,["text"])],64)}}});const Fn=st(Ln,[["__scopeId","data-v-7dea46be"]]);export{Fn as default};