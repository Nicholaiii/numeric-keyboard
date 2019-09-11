/*!
 * @nicholai/numeric-keyboard v0.1.1
 * (c) Nicholai Nissen
 * Released under the MIT License.
 */
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var Vue=_interopDefault(require("vue")),type_js=require("lib/utils/type.js"),input_js=require("lib/input.js");require("lib/styles/input.styl");const ZERO="0",ONE="1",TWO="2",THREE="3",FOUR="4",FIVE="5",SIX="6",SEVEN="7",EIGHT="8",NINE="9",DOT=".",DEL="del",ENTER="enter",ESC="esc",BLANK="";var keys=Object.freeze({ZERO:ZERO,ONE:ONE,TWO:TWO,THREE:THREE,FOUR:FOUR,FIVE:FIVE,SIX:SIX,SEVEN:SEVEN,EIGHT:EIGHT,NINE:NINE,DOT:DOT,DEL:DEL,ENTER:ENTER,ESC:ESC,BLANK:BLANK});const RType=/[a-z]+(?=])/i,typeofConstructor=function typeofConstructor(data){return eval(Object.prototype.toString.call(data).match(RType)[0])};var number=[[{key:ONE},{key:TWO},{key:THREE},{key:DEL,rowspan:2}],[{key:FOUR},{key:FIVE},{key:SIX}],[{key:SEVEN},{key:EIGHT},{key:NINE},{key:ENTER,rowspan:2}],[{key:DOT},{key:ZERO},{key:ESC}]],tel=[[{key:ONE},{key:TWO},{key:THREE}],[{key:FOUR},{key:FIVE},{key:SIX}],[{key:SEVEN},{key:EIGHT},{key:NINE}],[{key:DEL},{key:ZERO},{key:ENTER}]],Layouts={number:number,tel:tel};const Options={layout:"number",entertext:"enter"},Mixins={init(e){const{layout:t}=e;let r;if("string"==typeof t){if(r=Layouts[t],!Array.isArray(r))throw new Error(`${t} is not a build-in layout.`)}else if(r=t,!Array.isArray(r)||!r.every(e=>Array.isArray(e)))throw new Error("custom layout must be a two-dimensional array.");this.kp=e,this.ks={resolvedLayout:r}},destroy(){},set(e,t){this.ks[e]=t},onTouchend(e){this.dispatch("press",e),e===ENTER&&this.dispatch("enterpress")},dispatch(){throw new Error("dispatch method must be overrided!")}};var script={name:"NumericKeyboard",props:(()=>{let e={};for(let t in Options)e[t]={default:Options[t],type:[typeofConstructor(Options[t]),String,Number,Boolean,Array,Object,Date,Function]};return e})(),mixins:[{methods:Mixins}],data:()=>({ks:null}),methods:{dispatch(e,t){this.$emit(e,t)}},created(){this.init(this._props)},beforeDestroy(){this.destroy()},render(){const e=arguments[0];return e("table",{class:"numeric-keyboard"},[e("tbody",[this.ks.resolvedLayout.map((t,r)=>e("tr",{key:r},[t.map(t=>e("td",{key:t.key,attrs:{rowSpan:t.rowspan,colSpan:t.colspan,"data-key":t.key,"data-icon":t.key===ENTER?this.kp.entertext:t.key},class:"numeric-keyboard-key",on:{touchend:e=>this.onTouchend(t.key,e)}}))]))])])}};function styleInject(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var css='@font-face{font-family:numeric-keyboard;src:url(https://unpkg.com/numeric-keyboard@0.7.0/lib/styles/numeric-keyboard.woff) format(\'woff\');font-weight:400;font-style:normal}.numeric-keyboard{width:100%;height:100%;background:#cfd4da;table-layout:fixed;border-collapse:separate;border-spacing:1px;font-size:2em;text-align:center}.numeric-keyboard-key{touch-action:manipulation;transition:background .5s;color:#000;background:#fff}.numeric-keyboard-key:active{background:#929ca8}.numeric-keyboard-key[data-key=""]{pointer-events:none}.numeric-keyboard-key[data-key=enter]{color:#fff;background:#007aff}.numeric-keyboard-key[data-key=enter]:active{background:#0051a8}.numeric-keyboard-key[data-icon]::before{content:attr(data-icon)}.numeric-keyboard-key[data-icon=del]::before,.numeric-keyboard-key[data-icon=esc]::before{font-family:numeric-keyboard!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;letter-spacing:0;-webkit-font-feature-settings:"liga";font-feature-settings:"liga";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures;-webkit-font-smoothing:antialiased}';function normalizeComponent(e,t,r,n,o,i,s,a,d,u){"boolean"!=typeof s&&(d=a,a=s,s=!1);var c,y="function"==typeof r?r.options:r;if(e&&e.render&&(y.render=e.render,y.staticRenderFns=e.staticRenderFns,y._compiled=!0,o&&(y.functional=!0)),n&&(y._scopeId=n),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},y._ssrRegister=c):t&&(c=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(y.functional){var l=y.render;y.render=function(e,t){return c.call(t),l(e,t)}}else{var p=y.beforeCreate;y.beforeCreate=p?[].concat(p,c):[c]}return r}styleInject(css);var normalizeComponent_1=normalizeComponent;const __vue_script__=script,__vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=void 0;var NumericKeyboard=normalizeComponent_1({},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,void 0,void 0);const NumericInput=Vue.extend({mixins:[{methods:input_js.Mixins}],props:(()=>{let e={};for(let t in input_js.Options)e[t]={default:input_js.Options[t],type:[type_js.typeofConstructor(input_js.Options[t]),String,Number,Boolean,Array,Object,Date,Function]};return e})(),data:()=>({ks:null}),watch:{value(e){if(e===this.ks.value)return;const t=e.toString().split(""),r=t.length;this.set("rawValue",t),this.set("cursorPos",r)}},methods:{onFocus(e){input_js.Mixins.onFocus.call(this,e),this.$forceUpdate()},dispatch(e,t){this.$emit(e,t)},createKeyboard(e,t,r,n){const o=new Vue({render:e=>e(NumericKeyboard,{props:t,on:r})});o.$mount(),e.appendChild(o.$el),n(o)},destroyKeyboard(e,t){t.$destroy()}},created(){this.init(this._props)},mounted(){this.onMounted(this.$el)},updated(){this.onUpdated()},beforeDestroy(){this.destroy()},render(){const e=arguments[0];let t="numeric-input";return this.kp.readonly&&(t+=" readonly"),this.kp.disabled&&(t+=" disabled"),e("div",{class:t,on:{touchend:this.onFocus.bind(this)}},[e("div",[e("div",{class:"numeric-input-text"},[this.ks.rawValue.map((t,r)=>e("span",{key:r,attrs:{"data-index":r}},[t]))]),0===this.ks.rawValue.length&&e("div",{class:"numeric-input-placeholder"},[this.kp.placeholder]),this.ks.cursorActive&&e("div",{class:"numeric-input-cursor",style:{background:this.ks.cursorColor}})])])}});exports.Keys=keys,exports.NumericInput=NumericInput,exports.NumericKeyboard=NumericKeyboard;
