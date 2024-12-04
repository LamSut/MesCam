(()=>{"use strict";var e={d:(t,l)=>{for(var r in l)e.o(l,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:l[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{metadata:()=>F,name:()=>x,settings:()=>L});const l=window.React,r=(0,l.createElement)("svg",{width:"298",height:"144",viewBox:"0 0 298 144",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("rect",{width:"298",height:"144",fill:"#F1F5F9"}),(0,l.createElement)("rect",{x:"106",y:"32",width:"86",height:"36",rx:"18",fill:"#4272F9"}),(0,l.createElement)("circle",{cx:"174",cy:"50",r:"14",fill:"white"}),(0,l.createElement)("rect",{x:"106",y:"76",width:"86",height:"36",rx:"18",fill:"#94A3B8"}),(0,l.createElement)("circle",{cx:"124",cy:"94",r:"14",fill:"white"})),{__:a}=wp.i18n,{InspectorControls:i,useBlockProps:n}=wp.blockEditor,{PanelBody:o,TextControl:c}=wp.components,{ToolBarFields:s,AdvancedFields:d,FieldWrapper:u,BlockName:m,BlockLabel:f,BlockDescription:b,BlockDefaultValue:p,AdvancedInspectorControl:h,StylePanel:C,StyleColorItem:g,StyleColorItemsWrapper:v,StyleSize:w,SwitchPageOnChangeControls:y}=JetFBComponents,{useUniqueNameOnDuplicate:j,useJetStyle:k,useUniqKey:E}=JetFBHooks,F=JSON.parse('{"apiVersion":2,"name":"jet-forms/switcher","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","switcher","toggle"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSanitizeValue":true,"jetFBSwitchPageOnChange":true,"jetStyle":{"--track-size":["input","size"],"--track-padding":["input","size-padding"],"--track-bg-color":["input","color","background"],"--checked-track-bg-color":["input:checked","color","background"],"--thumb-bg-color":["input::before","color","background"],"--thumb-size":["input::before","size"]}},"title":"Switcher Field","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M43 26C46.866 26 50 22.866 50 19C50 15.134 46.866 12 43 12C39.134 12 36 15.134 36 19C36 22.866 39.134 26 43 26ZM43 24C45.7614 24 48 21.7614 48 19C48 16.2386 45.7614 14 43 14C40.2386 14 38 16.2386 38 19C38 21.7614 40.2386 24 43 24Z\\" fill=\\"#0F172A\\"/>\\n<path d=\\"M27.6402 15.2318C28.0645 15.5854 28.1218 16.2159 27.7682 16.6402L22.7682 22.6402C22.5884 22.856 22.326 22.9863 22.0453 22.999C21.7646 23.0117 21.4916 22.9058 21.2929 22.7071L18.2929 19.7071C17.9024 19.3166 17.9024 18.6834 18.2929 18.2929C18.6834 17.9024 19.3166 17.9024 19.7071 18.2929L21.9328 20.5186L26.2318 15.3598C26.5853 14.9356 27.2159 14.8782 27.6402 15.2318Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M10 19C10 12.9249 14.9249 8 21 8H43C49.0751 8 54 12.9249 54 19C54 25.0751 49.0751 30 43 30H21C14.9249 30 10 25.0751 10 19ZM21 10H43C47.9706 10 52 14.0294 52 19C52 23.9706 47.9706 28 43 28H21C16.0294 28 12 23.9706 12 19C12 14.0294 16.0294 10 21 10Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M21 52C24.866 52 28 48.866 28 45C28 41.134 24.866 38 21 38C17.134 38 14 41.134 14 45C14 48.866 17.134 52 21 52ZM21 50C23.7614 50 26 47.7614 26 45C26 42.2386 23.7614 40 21 40C18.2386 40 16 42.2386 16 45C16 47.7614 18.2386 50 21 50Z\\" fill=\\"#0F172A\\"/>\\n<path d=\\"M37.3229 49.6771C36.8924 49.2466 36.8924 48.5486 37.3229 48.1181L40.441 45L37.3229 41.8819C36.8924 41.4514 36.8924 40.7534 37.3229 40.3229C37.7534 39.8924 38.4514 39.8924 38.8819 40.3229L42 43.441L45.1181 40.3229C45.5486 39.8924 46.2466 39.8924 46.6771 40.3229C47.1076 40.7534 47.1076 41.4514 46.6771 41.8819L43.559 45L46.6771 48.1181C47.1076 48.5486 47.1076 49.2466 46.6771 49.6771C46.2466 50.1076 45.5486 50.1076 45.1181 49.6771L42 46.559L38.8819 49.6771C38.4514 50.1076 37.7534 50.1076 37.3229 49.6771Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M10 45C10 38.9249 14.9249 34 21 34H43C49.0751 34 54 38.9249 54 45C54 51.0751 49.0751 56 43 56H21C14.9249 56 10 51.0751 10 45ZM21 36H43C47.9706 36 52 40.0294 52 45C52 49.9706 47.9706 54 43 54H21C16.0294 54 12 49.9706 12 45C12 40.0294 16.0294 36 21 36Z\\" fill=\\"#0F172A\\"/>\\n</svg>","attributes":{"calc_value_active":{"type":["string","number"],"default":"","jfb":{"rich":true}},"value_active":{"type":["string","number"],"default":"","jfb":{"rich":true}},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"required":{"type":"boolean","default":false},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewScript":"jet-fb-switcher","style":"jet-fb-switcher"}'),{__:_}=wp.i18n,{createBlock:S}=wp.blocks,{name:x,icon:B=""}=F;F.attributes.isPreview={type:"boolean",default:!1};const L={icon:(0,l.createElement)("span",{dangerouslySetInnerHTML:{__html:B}}),description:_("Add Switcher Field to login, signup, and other forms where binary choices are favored and allow users to enable/disable certain options.","jet-form-builder"),edit:function(e){var t;const{isSelected:F,attributes:_,setAttributes:S}=e,x=E(),B=null!==(t=k?.({className:["jet-form-builder-row","field-type-switcher"].join(" ")}))&&void 0!==t?t:{},L=n(B);return j(),_.isPreview?(0,l.createElement)("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r):(0,l.createElement)(l.Fragment,null,F&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s,{key:x("ToolBarFields"),...e}),(0,l.createElement)(y,null),(0,l.createElement)(i,{key:x("InspectorControls")},(0,l.createElement)(o,{title:a("General","jet-form-builder")},(0,l.createElement)(f,null),(0,l.createElement)(m,null),(0,l.createElement)(b,null)),(0,l.createElement)(o,{title:a("Value","jet-form-builder")},(0,l.createElement)(p,{help:a('If the default value is not empty or \ndoes not equal the string "false" - the switch will be turned on.',"jet-form-builder"),hasMacro:!1}),(0,l.createElement)(h,{value:_.value_active,label:a("Value","jet-form-builder"),onChangePreset:e=>S({value_active:e})},(({instanceId:e})=>(0,l.createElement)(c,{id:e,className:"jet-fb m-unset",value:_.value_active,help:a("For enabled switcher","jet-form-builder"),onChange:e=>S({value_active:e})}))),(0,l.createElement)(h,{value:_.calc_value_active,label:a("Calculated value","jet-form-builder"),onChangePreset:e=>S({calc_value_active:e})},(({instanceId:e})=>(0,l.createElement)(c,{id:e,className:"jet-fb m-unset",value:_.calc_value_active,help:a("For enabled switcher","jet-form-builder"),onChange:e=>S({calc_value_active:e})})))),(0,l.createElement)(d,{key:x("AdvancedFields"),...e})),(0,l.createElement)(i,{group:"styles"},(0,l.createElement)(C,{label:a("Track","jet-form-builder")},(0,l.createElement)(v,null,(0,l.createElement)(g,{cssVar:"--track-bg-color",label:a("Background","jet-form-builder")}),(0,l.createElement)(g,{cssVar:"--checked-track-bg-color",label:a("Checked background","jet-form-builder")})),(0,l.createElement)(w,{cssVar:"--track-size",label:a("Track size","jet-form-builder")}),(0,l.createElement)(w,{cssVar:"--track-padding",label:a("Track padding","jet-form-builder")})),(0,l.createElement)(C,{label:a("Thumb","jet-form-builder")},(0,l.createElement)(v,null,(0,l.createElement)(g,{cssVar:"--thumb-bg-color",label:a("Background","jet-form-builder")})),(0,l.createElement)(w,{cssVar:"--thumb-size",label:a("Thumb size","jet-form-builder")})))),(0,l.createElement)("div",{...L},(0,l.createElement)(u,{key:x("FieldWrapper"),...e},(0,l.createElement)("input",{type:"checkbox",role:"switch",className:"jet-form-builder__field"}))))},example:{attributes:{isPreview:!0}},transforms:{to:[{type:"block",blocks:["jet-forms/text-field"],transform:e=>S("jet-forms/text-field",{...e}),priority:0}],from:[{type:"block",blocks:["jet-forms/checkbox-field","jet-forms/radio-field","jet-forms/select-field"],transform:e=>S(x,{...e}),priority:0}]}};(0,window.wp.hooks.addFilter)("jet.fb.register.fields","jet-form-builder/switcher",(function(e){return e.push(t),e}))})();