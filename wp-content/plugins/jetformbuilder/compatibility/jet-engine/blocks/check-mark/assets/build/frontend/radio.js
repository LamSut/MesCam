(()=>{"use strict";function t(t){t.dataset.custom||((function(t){return t.closest(".checkradio-wrap").querySelector(".jet-form-builder__field-template .jet-fb-check-mark input")}(t)).checked=t.checked)}const{RadioData:e}=JetFormBuilderAbstract;function o(){e.call(this)}o.prototype=Object.create(e.prototype),o.prototype.isSupported=function(t){return e.prototype.isSupported.call(this,t)&&!!t.querySelector(".jet-form-builder__field-template .jet-fb-check-mark input")},o.prototype.addListeners=function(){e.prototype.addListeners.call(this),this.watch((()=>function(e){for(const o of e.nodes)t(o)}(this)))},o.prototype.onChangeValue=function(t){t.target.classList.contains("check-mark-control")?(t.target.closest(".jet-form-builder__field-wrap").querySelector(".jet-form-builder__field").checked=t.target.checked,e.prototype.onChangeValue.call(this,t)):e.prototype.onChangeValue.call(this,t)};const r=o,{addFilter:c}=JetPlugins.hooks;c("jet.fb.inputs","jet-form-builder/choice-with-check-mark",(function(t){return[r,...t]}),20)})();