"use strict";(globalThis.webpackChunkgoogle_listings_and_ads=globalThis.webpackChunkgoogle_listings_and_ads||[]).push([[945],{6599:(e,t,a)=>{a.r(t),a.d(t,{default:()=>at});var n=a(1609),l=a(6087),s=a(7723),o=a(8846),r=a(6476),i=a(7892),c=a(2047),g=a(9927),d=a(1787),m=a(7374);var u=a(6473);const p=e=>{const{trackEventReportId:t}=e,a=(()=>{const e=(0,r.getQuery)(),{period:t,compare:a,before:n,after:l}=(0,m.getDateParamsFromQuery)(e),{primary:s,secondary:o}=(0,m.getCurrentDates)(e);return{period:t,compare:a,before:n,after:l,primaryDate:s,secondaryDate:o}})();return(0,n.createElement)(o.DateRangeFilterPicker,{dateQuery:a,onRangeSelect:e=>{t&&(0,u.ce)("gla_datepicker_update",{report:t,...e}),(0,r.updateQueryString)(e)},isoDateFormat:"YYYY-MM-DD"})};var _=a(3905),E=a(1209),y=a(7419),h=a(5128),A=a(7143),b=a(6520),v=a(7615),C=a(2775);function f(e){const t=(0,C.A)();return(0,A.useSelect)((a=>{const{getDashboardPerformance:n}=a(b.Ui),l=n(e,t,"primary"),s=n(e,t,"secondary");let o=null;const r=l.loaded&&s.loaded;return r&&l.data&&s.data&&(o=(0,v.bM)(l.data,s.data)),{loaded:r,data:o}}),[e,t])}const k=({loaded:e,data:t,children:a,noDataMessage:l})=>{let s;return s=e?t?(0,n.createElement)(o.SummaryList,null,(()=>a(t))):(0,n.createElement)("div",{className:"gla-summary-card__body"},(0,n.createElement)("p",null,l.body),(0,n.createElement)(i.A,{eventName:l.eventName,eventProps:{context:"dashboard",href:l.link},href:l.link,target:"_blank",isSmall:!0,isSecondary:!0},l.buttonLabel)):(0,n.createElement)(o.SummaryListPlaceholder,{numberOfItems:2}),s};var S=a(6427),w=a(6459);const N=({title:e,children:t})=>(0,n.createElement)(S.Card,{className:"gla-summary-card"},(0,n.createElement)(S.CardHeader,{size:"medium"},(0,n.createElement)(w.A,{variant:"title-small"},e)),t);var P=a(1378),R=a(5955),I=a(4270),F=a(9095),G=a(2391),T=a(5170),x=a(1177);const M=()=>(0,n.createElement)("div",{className:"gla-free-ad-credit-claim"},(0,n.createElement)(T.A,null),(0,n.createElement)("div",null,(0,l.createInterpolateElement)((0,s.__)("Claim $500 in ads credit when you spend your first $500 with Google Ads. <termLink>Terms and conditions apply</termLink>.","google-listings-and-ads"),{termLink:(0,n.createElement)(x.A,{context:"dashboard",linkId:"free-ad-credit-terms",href:"https://www.google.com/ads/coupons/terms/"})})));var D=a(850);function L(){const e=[{Icon:R.A,content:(0,s.__)("Reach more customer by advertising your products across Google Ads channels like Search, YouTube and Discover.","google-listings-and-ads")},{Icon:R.A,content:(0,s.__)("Set a daily budget and only pay when people click on your ads.","google-listings-and-ads")},{Icon:R.A,content:(0,l.createInterpolateElement)((0,s.__)("Performance Max uses the best of Google's AI to show the most impactful ads for your products at the right time and place. <link>Learn more about Performance Max technology.</link>","google-listings-and-ads"),{link:(0,n.createElement)(I.i,{href:"https://support.google.com/google-ads/answer/10724817",context:"campaign-creation-performance-max"})})}];return(0,n.createElement)("div",{className:"gla-paid-features__feature-list"},e.map((({Icon:e,content:t},a)=>(0,n.createElement)(S.Flex,{key:a,align:"flex-start"},(0,n.createElement)(e,{size:"18"}),(0,n.createElement)(S.FlexBlock,null,t)))))}const B=()=>(0,n.createElement)(D.A,{size:"medium",className:"gla-paid-features"},(0,n.createElement)(S.Flex,{align:"center",gap:9,className:"gla-paid-features__content"},(0,n.createElement)(S.FlexItem,null,(0,n.createElement)(F.A,null)),(0,n.createElement)(S.FlexBlock,null,(0,n.createElement)(L,null))),(0,n.createElement)(M,null),(0,n.createElement)(G.A,{isPrimary:!0,isSecondary:!1,isSmall:!1,eventProps:{context:"add-paid-campaign-promotion"}},(0,s.__)("Create Campaign","google-listings-and-ads"))),Q=function(){const{googleAdsAccount:e}=(0,P.A)();return(0,n.createElement)("div",{className:"gla-summary-card__body"},e?(0,n.createElement)(B,null):(0,n.createElement)(o.Spinner,null))},q={precision:0},O=()=>{const e=(0,h.A)(q),{data:t,loaded:a}=f(_.k1);return(0,n.createElement)(k,{loaded:a,data:t,noDataMessage:{body:(0,s.__)("We're having trouble loading this data. Try again later, or track your performance in Google Merchant Center.","google-listings-and-ads"),link:"https://merchants.google.com/mc/reporting/dashboard",eventName:"gla_google_mc_link_click",buttonLabel:(0,s.__)("Open Google Merchant Center","google-listings-and-ads")}},(t=>[(0,n.createElement)(o.SummaryNumber,{key:"1",label:(0,s.__)("Clicks","google-listings-and-ads"),value:e(t.clicks.value),prevValue:e(t.clicks.prevValue),delta:t.clicks.delta}),(0,n.createElement)(o.SummaryNumber,{key:"2",label:(0,s.__)("Total Spend","google-listings-and-ads"),value:(0,s.__)("Free","google-listings-and-ads"),delta:null})]))},H=()=>{const{formatAmount:e}=(0,y.A)(),{data:t,loaded:a}=f(_.Mx);return(0,n.createElement)(k,{loaded:a,data:t,noDataMessage:{body:(0,s.__)("We're having trouble loading this data. Try again later, or track your performance in Google Ads.","google-listings-and-ads"),link:"https://ads.google.com/",eventName:"gla_google_ads_link_click",buttonLabel:(0,s.__)("Open Google Ads","google-listings-and-ads")}},(t=>[(0,n.createElement)(o.SummaryNumber,{key:"1",label:(0,s.__)("Total Sales","google-listings-and-ads"),value:e(t.sales.value,!0),prevValue:e(t.sales.prevValue,!0),delta:t.sales.delta}),(0,n.createElement)(o.SummaryNumber,{key:"2",label:(0,s.__)("Total Spend","google-listings-and-ads"),value:e(t.spend.value,!0),prevValue:e(t.spend.prevValue,!0),delta:t.spend.delta})]))};function $(){const{loaded:e,data:t}=(0,E.A)();if(!e)return null;const a=!t?.length;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(N,{title:(0,s.__)("Google Ads","google-listings-and-ads")},a?(0,n.createElement)(Q,null):(0,n.createElement)(H,null)),(0,n.createElement)(N,{title:(0,s.__)("Free Listings (Limited Visibility)","google-listings-and-ads")},(0,n.createElement)(O,null)))}var K=a(9457);const Y=a.p+"images/js/src/dashboard/campaign-creation-success-guide/c4325f35cdc65f85a7c1.header.svg",Z="create-another-campaign",U="confirm";function V({onGuideRequestClose:e=()=>{}}){(0,l.useEffect)((()=>{(0,u.ce)("gla_modal_open",{context:_.K4.CAMPAIGN_CREATION_SUCCESS})}),[]);const t=(0,l.useCallback)((t=>e(t,"dismiss")),[e]);return(0,n.createElement)(K.A,{className:"gla-campaign-creation-success-guide",onRequestClose:t,buttons:[(0,n.createElement)(i.A,{key:"0",isTertiary:!0,"data-action":Z,onClick:e},(0,s.__)("Create another campaign","google-listings-and-ads")),(0,n.createElement)(i.A,{key:"1",isPrimary:!0,"data-action":U,onClick:e},(0,s.__)("Got it","google-listings-and-ads"))]},(0,n.createElement)("div",{className:"gla-campaign-creation-success-guide__header-image"},(0,n.createElement)("img",{src:Y,alt:(0,s.__)("Drawing of a person who successfuly launched a campaign","google-listings-and-ads"),width:"413",height:"160"})),(0,n.createElement)(I.A,{title:(0,s.__)("You've set up a Performance Max Campaign!","google-listings-and-ads")},(0,l.createInterpolateElement)((0,s.__)("You can pause or edit your campaign at any time. For best results, we recommend allowing your campaign to run for at least 14 days without pausing or editing. <link>Learn more about Performance Max technology.</link>","google-listings-and-ads"),{link:(0,n.createElement)(I.i,{href:"https://support.google.com/google-ads/answer/10724817",context:"campaign-creation-performance-max"})})))}var j=a(6942),z=a.n(j),W=a(8237),J=a(8582);const X=e=>{const{programId:t,onRequestClose:a}=e,[o,r]=(0,l.useState)(!1),c=(0,J.j)(),g=()=>{o||a()};return(0,n.createElement)(K.A,{className:"gla-remove-program-modal",title:(0,s.__)("Permanently Remove?","google-listings-and-ads"),isDismissible:!o,buttons:[(0,n.createElement)(i.A,{key:"keep",isSecondary:!0,disabled:o,onClick:g},(0,s.__)("Keep Campaign","google-listings-and-ads")),(0,n.createElement)(i.A,{key:"remove",isPrimary:!0,isDestructive:!0,loading:o,onClick:()=>{r(!0),c.deleteAdsCampaign(t).then((()=>a())).catch((()=>r(!1)))}},(0,s.__)("Remove Campaign","google-listings-and-ads"))],onRequestClose:g},(0,n.createElement)("p",null,(0,s.__)("Results typically improve with time. Removing a campaign will result in the loss of any optimisations learned from those campaigns.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,s.__)("Once a campaign is removed, it cannot be re-enabled.","google-listings-and-ads")))},ee=e=>{const{programId:t}=e,[a,o]=(0,l.useState)(!1);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.A,{isDestructive:!0,isLink:!0,onClick:()=>{o(!0)}},(0,s.__)("Remove","google-listings-and-ads")),a&&(0,n.createElement)(X,{programId:t,onRequestClose:()=>{o(!1)}}))};var te=a(3666);const ae=({programId:e,onRequestClose:t})=>(0,n.createElement)(K.A,{className:"gla-edit-program-prompt-modal",title:(0,s.__)("Before you edit…","google-listings-and-ads"),buttons:[(0,n.createElement)(i.A,{key:"no",isSecondary:!0,onClick:()=>{t()}},(0,s.__)("Don't edit","google-listings-and-ads")),(0,n.createElement)(i.A,{key:"yes",isPrimary:!0,onClick:()=>{const t=e===_.Q?(0,te.$n)():(0,te.Q4)(e);(0,r.getHistory)().push(t),(0,u.ce)("gla_dashboard_edit_program_click",{programId:e,url:t})}},(0,s.__)("Continue to edit","google-listings-and-ads"))],onRequestClose:t},(0,n.createElement)("p",null,(0,s.__)("Results typically improve with time.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,s.__)("Editing will result in the loss of any optimisations learned over time.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,s.__)("We recommend allowing your programs to run for at least 14 days after set up, without pausing or editing, for optimal performance.","google-listings-and-ads")));var ne=a(6494);const le=e=>{const{className:t,programId:a,...l}=e;return(0,n.createElement)(ne.A,{button:(0,n.createElement)(i.A,{...l,isLink:!0,className:z()(t)},(0,s.__)("Edit","google-listings-and-ads")),modal:(0,n.createElement)(ae,{programId:a})})};var se=a(6734),oe=a(5847),re=a(3741);const ie=e=>{const{onPauseCampaign:t=()=>{},onRequestClose:a}=e;return(0,n.createElement)(K.A,{className:"gla-pause-program-modal",title:(0,s.__)("Before you pause…","google-listings-and-ads"),buttons:[(0,n.createElement)(i.A,{key:"1",isSecondary:!0,onClick:()=>{a()}},(0,s.__)("Keep Active","google-listings-and-ads")),(0,n.createElement)(i.A,{key:"2",isPrimary:!0,onClick:()=>{t()}},(0,s.__)("Pause Campaign","google-listings-and-ads"))],onRequestClose:a},(0,n.createElement)("p",null,(0,s.__)("Results typically improve with time. If you pause, your products won’t be shown to people looking for what you offer.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,s.__)("Pausing a campaign will result in the loss of any optimisations learned from those campaigns.","google-listings-and-ads")))};var ce=a(2118);const ge=e=>{const{program:t}=e,[a,s]=(0,l.useState)(t.active),[o,r]=(0,l.useState)(!1),{updateAdsCampaign:i}=(0,J.j)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ce.A,{checked:a,onChange:e=>{!1!==e?(s(e),i(t.id,{status:"enabled"})):r(!0)}}),o&&(0,n.createElement)(ie,{programId:t.id,onPauseCampaign:()=>{r(!1),s(!1),i(t.id,{status:"paused"})},onRequestClose:()=>{r(!1)}}))};var de=a(9039);const me=()=>(0,n.createElement)(de.A,{text:(0,s.__)("Free listings cannot be paused through WooCommerce. Go to Google Merchant Center for advanced settings.","google-listings-and-ads")},(0,n.createElement)(ce.A,{checked:!0,disabled:!0}));var ue=a(9788);const pe="gla-all-programs-table-card",_e="gla-campaign-edit-button",Ee=[{key:"title",label:(0,s.__)("Program","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"country",label:(0,s.__)("Country","google-listings-and-ads"),isLeftAligned:!0},{key:"dailyBudget",label:(0,s.__)("Daily budget","google-listings-and-ads")},{key:"enabled",label:(0,s.__)("Enabled","google-listings-and-ads")},{key:"actions",label:"",required:!0}];function ye({countryCodes:e,countryNameMap:t}){const[a]=e;return(0,n.createElement)("span",null,t[a],e.length>=2&&(0,s.sprintf)(
// translators: %d: number of countries, with minimum value of 1.
// translators: %d: number of countries, with minimum value of 1.
(0,s.__)(" + %d more","google-listings-and-ads"),e.length-1))}const he=e=>{const t=(0,r.getQuery)(),{formatAmount:a}=(0,y.A)(),{data:l}=(0,oe.A)(),{data:o}=(0,E.A)(),i=(0,se.A)();if(!l||!o)return(0,n.createElement)(re.A,null);let c=null;if(o.filter((({type:e})=>e===_.$g)).length){const e=`.${pe} .${_e}`;c=(0,n.createElement)(ue.A,{referenceElementCssSelector:e})}const g=[{id:_.Q,title:(0,s.__)("Free listings","google-listings-and-ads"),dailyBudget:(0,s.__)("Free","google-listings-and-ads"),country:(0,n.createElement)(ye,{countryCodes:l,countryNameMap:i}),active:!0,disabledEdit:!1},...o.map((e=>({id:e.id,title:e.name,dailyBudget:a(e.amount,!0),country:(0,n.createElement)(ye,{countryCodes:e.displayCountries,countryNameMap:i}),active:"enabled"===e.status,disabledEdit:e.type!==_.$g})))],d=(0,n.createElement)(W.A,{className:pe,title:(0,s.__)("Programs","google-listings-and-ads"),actions:(0,n.createElement)(G.A,{eventProps:{context:"programs-table-card"}}),headers:Ee,rowKey:e=>e[0].id,rows:g.map((e=>{const t=e.id===_.Q,a=z()({[_e]:!t&&!e.disabledEdit});return[{display:e.title,id:e.id.toString()},{display:e.country},{display:e.dailyBudget},{display:t?(0,n.createElement)(me,null):(0,n.createElement)(ge,{program:e})},{display:(0,n.createElement)("div",{className:"program-actions"},(0,n.createElement)(le,{className:a,programId:e.id,disabled:e.disabledEdit}),e.id!==_.Q&&(0,n.createElement)(ee,{programId:e.id}))}]})),totalRows:g.length,rowsPerPage:g.length,query:t,onQueryChange:r.onQueryChange,...e});return(0,n.createElement)(n.Fragment,null,c,d)};var Ae=a(3921),be=a(8468),ve=a(7539),Ce=a(6237),fe=a(7333),ke=a(8980),Se=a(6474),we=a(1650),Ne=a(6523),Pe=a(3241),Re=a(5640),Ie=a(7980),Fe=a(4716),Ge=a(5455),Te=a(5807),xe=a(8606);const Me=()=>{(0,Se.A)("full-content");const{targetAudience:e,getFinalCountries:t}=(0,oe.A)(),{settings:a}=(0,fe.A)(),{saveTargetAudience:o,saveSettings:i}=(0,J.j)(),{saveShippingRates:c}=(0,Ge.A)(),{saveShippingTimes:g}=(0,Te.A)(),[d,m]=(0,l.useState)(e),[p,_]=(0,l.useState)(a),{hasFinishedResolution:E,data:y}=(0,Ne.A)(),[h,A]=(0,l.useState)(y),{hasFinishedResolution:b,data:v}=(0,Pe.A)(),[C,f]=(0,l.useState)(v);(0,l.useEffect)((()=>_(a)),[a]),(0,l.useEffect)((()=>m(e)),[e]),(0,l.useEffect)((()=>A(y)),[y]),(0,l.useEffect)((()=>f(v)),[v]);const[k]=(0,ke.A)({path:"/wc/gla/mc/settings/sync",method:"POST"}),{createNotice:S}=(0,Re.A)(),w=!(0,be.isEqual)(...[d,e].map((e=>({...e,countries:new Set(e?.countries)})))),N=!(0,be.isEqual)(p,a),P=(I=y,(R=h).length!==I.length||(0,Fe.A)(R,I).length>0);var R,I;const F=!(0,be.isEqual)(new Set(C),new Set(v)),G=w||N||P||F;(0,we.A)((0,s.__)("You have unsaved campaign data. Are you sure you want to leave?","google-listings-and-ads"),G);const T=(0,r.getNewPath)({pageStep:void 0,subpath:void 0},"/google/dashboard"),x=d?.countries?d:null,M=p?.shipping_rate?p:null,D=E?y:null,L=b?v:null;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ve.A,{title:(0,s.__)("Edit free listings","google-listings-and-ads"),helpButton:(0,n.createElement)(Ie.A,{eventContext:"edit-free-listings"}),backHref:T}),(0,n.createElement)(Ce.A,{headerTitle:(0,s.__)("Edit your listings","google-listings-and-ads"),targetAudience:x,resolveFinalCountries:t,onTargetAudienceChange:m,settings:M,onSettingsChange:_,shippingRates:D,onShippingRatesChange:A,shippingTimes:L,onShippingTimesChange:f,onContinue:async()=>{try{const e=[o(d),i(p),c(h),g(C)],t=await(0,xe.A)(e,[(0,s.__)("Target audience","google-listings-and-ads"),(0,s.__)("Merchant Center Settings","google-listings-and-ads"),(0,s.__)("Shipping rates","google-listings-and-ads"),(0,s.__)("Shipping times","google-listings-and-ads")]);await k(),t?S("error",t):S("success",(0,s.__)("Your changes to your Free Listings have been saved and will be synced to your Google Merchant Center account.","google-listings-and-ads")),(0,u.ce)("gla_free_campaign_edited")}catch(e){S("error",(0,s.__)("Something went wrong while saving your changes. Please try again later.","google-listings-and-ads"))}},submitLabel:(0,s.__)("Save changes","google-listings-and-ads")}))};var De=a(9415),Le=a(4307),Be=a(8473),Qe=a(1203),qe=a(4831),Oe=a(8234),He=a(4679);const $e="gla_paid_campaign_step",Ke="edit-ads",Ye=(0,te.uZ)(),Ze=(0,n.createElement)(Ie.A,{eventContext:Ke});function Ue(){const{step:e}=(0,r.getQuery)();return Object.values(_.km).includes(e)?e:_.km.CAMPAIGN}const Ve=()=>{(0,Se.A)("full-content");const{updateAdsCampaign:e,createCampaignAssetGroup:t,updateCampaignAssetGroup:a}=(0,J.j)(),i=Number((0,r.getQuery)().programId),{loaded:c,data:g}=(0,E.A)(),{hasFinishedResolution:d,invalidateResolution:m,data:p}=(0,De.A)("getCampaignAssetGroups",i),y=g?.find((e=>e.id===i)),h=p?.at(0),{highestDailyBudget:A,hasFinishedResolution:b}=(0,He.A)(y?.displayCountries);(0,l.useEffect)((()=>{y&&y.type!==_.$g&&(0,r.getHistory)().replace(Ye)}),[y]);const v=Ue(),C=e=>{const t=(0,r.getNewPath)({...(0,r.getQuery)(),step:e});(0,r.getHistory)().push(t)};return c&&d&&b?y?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ve.A,{title:(0,s.sprintf)(
// translators: %s: campaign's name.
// translators: %s: campaign's name.
(0,s.__)("Edit %s","google-listings-and-ads"),y.name),helpButton:Ze,backHref:Ye}),(0,n.createElement)(Be.A,{initialCampaign:{amount:y.amount},recommendedDailyBudget:A,assetEntityGroup:h,onSubmit:async(n,l)=>{const{action:s}=l.submitter.dataset,{amount:o}=n;try{if(await e(y.id,{amount:o}),s===Oe.zK){let e=h;e||(e=(await t(i)).assetGroup);const l=e.id,s=(0,Le.A)(e,n);await a(l,s),m()}}catch(e){return void l.signalFailedSubmission()}(0,r.getHistory)().push((0,te.uZ)())}},(0,n.createElement)(o.Stepper,{currentStep:Ue(),steps:[{key:_.km.CAMPAIGN,label:(0,s.__)("Edit campaign","google-listings-and-ads"),content:(0,n.createElement)(Qe.A,{campaign:y,context:Ke,headerTitle:(0,s.__)("Edit your campaign","google-listings-and-ads"),continueButton:e=>(0,n.createElement)(qe.A,{formProps:e,onClick:()=>{return e=_.km.ASSET_GROUP,(0,u.dQ)($e,_.Z3[v],_.Z3[e],Ke),void C(e);var e}})}),onClick:e=>{(0,u.T)($e,_.Z3[e],Ke),C(e)}},{key:_.km.ASSET_GROUP,label:(0,s.__)("Optimize your campaign","google-listings-and-ads"),content:(0,n.createElement)(Oe.Ay,{campaign:y})}]}))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ve.A,{title:(0,s.__)("Edit Campaign","google-listings-and-ads"),helpButton:Ze,backHref:Ye}),(0,n.createElement)("div",null,(0,s.__)("Error in loading your ads campaign. Please try again later.","google-listings-and-ads"))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ve.A,{title:(0,s.__)("Loading…","google-listings-and-ads"),helpButton:Ze,backHref:Ye}),(0,n.createElement)(re.A,null))};var je=a(1455),ze=a.n(je);const We="gla_paid_campaign_step",Je="create-ads",Xe=(0,te.uZ)(),et=()=>{(0,Se.A)("full-content");const[e,t]=(0,l.useState)(_.km.CAMPAIGN),a=(0,l.useRef)(null),{createAdsCampaign:i,updateCampaignAssetGroup:c}=(0,J.j)(),{createNotice:g}=(0,Re.A)(),{data:d}=(0,oe.A)(),{highestDailyBudget:m,hasFinishedResolution:p}=(0,He.A)(d);return d&&p?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ve.A,{title:(0,s.__)("Create your campaign","google-listings-and-ads"),helpButton:(0,n.createElement)(Ie.A,{eventContext:Je}),backHref:Xe}),(0,n.createElement)(Be.A,{initialCampaign:{amount:m},recommendedDailyBudget:m,onSubmit:async(e,t)=>{const{action:n}=t.submitter.dataset;try{const{amount:t}=e;if(null===a.current){const e=await i(t,d);a.current=e.createdCampaign.id}if(n===Oe.zK){const t=a.current,n=`${b.RV}/ads/campaigns/asset-groups?campaign_id=${t}`,[l]=await ze()({path:n}),s=(0,Le.A)(l,e);await c(l.id,s)}g("success",(0,s.__)("You’ve successfully created a campaign!","google-listings-and-ads"))}catch(e){return void t.signalFailedSubmission()}(0,r.getHistory)().push((0,te.uZ)({campaign:"saved"}))}},(0,n.createElement)(o.Stepper,{currentStep:e,steps:[{key:_.km.CAMPAIGN,label:(0,s.__)("Create campaign","google-listings-and-ads"),content:(0,n.createElement)(Qe.A,{headerTitle:(0,s.__)("Create your campaign","google-listings-and-ads"),context:Je,continueButton:a=>(0,n.createElement)(qe.A,{formProps:a,onClick:()=>{var a;a=_.km.ASSET_GROUP,(0,u.dQ)(We,_.Z3[e],_.Z3[a],Je),t(a)}})}),onClick:e=>{(0,u.T)(We,_.Z3[e],Je),t(e)}},{key:_.km.ASSET_GROUP,label:(0,s.__)("Optimize your campaign","google-listings-and-ads"),content:(0,n.createElement)(Oe.Ay,null)}]}))):null};var tt=a(5246);const at=()=>{const[e,t]=(0,l.useState)(!1),a=(0,l.useCallback)(((e,a)=>{const n=a||e.currentTarget.dataset.action,l={...(0,r.getQuery)(),guide:void 0};(0,r.getHistory)().replace((0,r.getNewPath)(l)),n===Z?(0,r.getHistory)().push((0,te.uB)()):n===U&&t(!0),(0,u.ce)("gla_modal_closed",{context:_.K4.CAMPAIGN_CREATION_SUCCESS,action:n})}),[t]),m=(0,r.getQuery)();switch(m.subpath){case te.$K.editFreeListings:return(0,n.createElement)(Me,null);case te.$K.editCampaign:return(0,n.createElement)(Ve,null);case te.$K.createCampaign:return(0,n.createElement)(et,null)}const E="dashboard",{enableReports:y}=_.Th,h=m?.guide===_.K4.CAMPAIGN_CREATION_SUCCESS,A=(0,Ae.A)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gla-dashboard"},(0,n.createElement)(c.A,{context:"dashboard"}),(0,n.createElement)(g.A,null),(0,n.createElement)(tt.A,null),(0,n.createElement)("div",{className:"gla-dashboard__filter"},(0,n.createElement)(p,{trackEventReportId:E}),y&&(0,n.createElement)((()=>(0,n.createElement)(o.Link,{href:(0,r.getNewPath)(null,"/google/reports")},(0,n.createElement)(i.A,{isPrimary:!0},(0,s.__)("View Reports","google-listings-and-ads")))),null)),(0,n.createElement)("div",{className:"gla-dashboard__performance"},(0,n.createElement)($,null)),(0,n.createElement)("div",{className:"gla-dashboard__programs"},(0,n.createElement)(he,{trackEventReportId:E}))),h&&(0,n.createElement)(V,{onGuideRequestClose:a}),e&&A&&(0,n.createElement)(d.A,{label:(0,s.__)("How easy was it to create a Google Ad campaign?","google-listings-and-ads"),secondLabel:(0,s.__)("How easy was it to understand the requirements for the Google Ad campaign creation?","google-listings-and-ads"),eventContext:_.K4.CAMPAIGN_CREATION_SUCCESS}))}}}]);