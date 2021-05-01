/*@license
ARIA Button Module 1.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)
*/
"setButton"in $A||$A.import("RovingTabIndex",{name:"ButtonModule",props:props,once:!0,call:function(e){$A.extend({setButton:function(e,u){function h(a,e,t,i,r){if(t){var s=$A.getAttr(a,"role"),A="radio"===s,o="switch"===s,d=$A.hasAttr(a,"aria-pressed"),n=0;return"true"===e?n=1:A||d||o||"mixed"!==e?e="false":n=2,$A.data(a,"check",n),i&&(A&&$A.isArray(r)&&$A.loop(r,function(e,t){t!==a&&$A.setAttr(t,"aria-checked","false")},"array"),$A.setAttr(a,d?"aria-pressed":"aria-checked",e),"mixed"===e?($A.remClass(a,u.toggleClassName||"pressed checked"),$A.toggleClass(a,u.partialClassName||"partially-checked",!0)):($A.remClass(a,u.partialClassName||"partially-checked"),$A.toggleClass(a,u.toggleClassName||(d?"pressed":"checked"),"true"===e))),n}return!1}this._4X&&(u=e,e=this._X),$A.isPlainObject(e)&&(e=(u=e).trigger||null);var f=[];if($A.query(e,u.context||document,function(e,t){var a=$A.isNode(t)&&($A.hasAttr(t,"data-controls")&&$A.morph($A.getAttr(t,"data-controls"))||$A.isFn(t.querySelector)&&t.querySelector("input"))||!1,d=$A.isNative(a)?a:$A.isNative(t)?t:null,i=$A.isNode(a)&&!$A.isNative(a)?a:$A.isNative(t)?null:t,A=!$A.isNode(d)&&$A.isNode(a)&&i!==t?a:null;if(A===i&&(i=t),$A.isNode(i)){$A.isNode(d)&&$A.isNode(i)&&$A.bindObjects(d,i);var r=h(i,$A.getAttr(i,"data-radio"),$A.hasAttr(i,"data-radio"),!0),s=h(i,$A.getAttr(i,"data-check"),$A.hasAttr(i,"data-check"),!0),o=h(i,$A.getAttr(i,"data-toggle"),$A.hasAttr(i,"data-toggle"),!0),n=h(i,$A.getAttr(i,"data-switch"),$A.hasAttr(i,"data-switch"),!0),c=$A.hasAttr(i,"data-required"),$=$A.hasAttr(i,"data-disabled");if($A.isNum(r))$A.setAttr(i,{role:"radio","aria-checked":r?"true":"false"}),f.push(i);else if($A.isNum(s)){$A.isNode(d)&&d.checked&&(s=1),$A.isNode(A)&&(A.id||(A.id=$A.genId()),$A.setAttr(i,{"aria-flowto":A.id,"aria-controls":A.id}));var l="false";1===s?l="true":2===s&&(l="mixed"),$A.setKBA11Y(i,"checkbox",function(e,t){var a=this,i=$A.isDisabled(a),r=h(a,$A.getAttr(a,"aria-checked"),$A.hasAttr(a,"aria-checked"));!i&&$A.isFn(u.onActivate)&&u.onActivate.apply(a,[e,a,t||d,r,function(e){h(a,e,!0,!0)}])}),$A.setAttr(i,{"aria-checked":l})}else $A.isNum(n)?($A.isNode(d)&&d.checked&&(n=1),$A.isNode(A)&&(A.id||(A.id=$A.genId()),$A.setAttr(i,{"aria-flowto":A.id,"aria-controls":A.id})),l="false",1===n&&(l="true"),$A.setKBA11Y(i,"switch",function(e,t){var a=this,i=$A.isDisabled(a),r=h(a,$A.getAttr(a,"aria-checked"),$A.hasAttr(a,"aria-checked"));!i&&$A.isFn(u.onActivate)&&u.onActivate.apply(a,[e,a,t||d,r,function(e){h(a,e,!0,!0)}])}),$A.setAttr(i,{"aria-checked":l})):(!1!==o&&($A.setAttr(i,"aria-pressed",o?"true":"false"),$A.isNode(A)&&(A.id||(A.id=$A.genId()),$A.setAttr(i,{"aria-flowto":A.id,"aria-controls":A.id}))),$A.setKBA11Y(i,"button",function(e,t){var a=this,i=$A.isDisabled(a),r=h(a,$A.getAttr(a,"aria-pressed"),$A.hasAttr(a,"aria-pressed")),s=!1!==r?[e,a,t||A,r,function(e){h(a,e,!0,!0)}]:[e,a,t||A];!i&&$A.isFn(u.onActivate)&&u.onActivate.apply(a,s)}));!1===r&&!1===s&&!1===o&&!1===n||$A.on(i,"attributeChange",function(e,t,a,i,r,s,A){if($A.isNode(d)){var o=h(t,i,!0);d.checked=!!o}},{attributeFilter:["aria-checked","aria-pressed"]}),$A.svgFix(i),u.label&&$A.setAttr(i,"aria-label",u.label),($A.isNode(d)&&d.required||u.required||c)&&($A.setAttr(i,"aria-required","true"),$A.isNode(d)&&!d.required&&(d.required=!0)),($A.isNode(d)&&d.disabled||u.disabled||$)&&($A.setAttr(i,"aria-disabled","true"),$A.isNode(d)&&!d.disabled&&(d.disabled=!0)),$A.updateDisabled(i)}}),f.length){var s=u.container&&$A.morph(u.container)||$A.closest(f[0],function(e){if("radiogroup"===$A.getAttr(e,"role"))return!0});$A.isNode(s)||function(e){var t=[],a=[];$A.closest(e[0],function(e){if($A.isNode(e)&&t.push(e),e===document.body)return!0}),$A.closest(e[e.length-1],function(e){if($A.isNode(e)&&a.push(e),e===document.body)return!0}),t=t.reverse(),a=a.reverse();for(var i=null,r=0;r<t.length;r++)if(t[r]===a[r])i=t[r];else if(t[r]!==a[r])break;s=i}(f),$A.setAttr(s,"role","radiogroup"),new $A.RovingTabIndex($A.extend({nodes:f,startIndex:0,orientation:0,autoLoop:!0,onClick:function(e,t,a,i){var r=t,s=$A.isDisabled(r),A=h(r,$A.getAttr(r,"aria-checked"),$A.hasAttr(r,"aria-checked"));!s&&$A.isFn(u.onActivate)&&u.onActivate.apply(r,[e,r,i,A,function(e){h(r,e,!0,!0,a.nodes)}])},onSpace:function(e,t,a,i){a.onClick.apply(t,arguments)},onFocus:function(e,t,a,i){a.arrowPressed&&!$A.isTouch&&a.onClick.apply(t,arguments)}},u.extendRTI||{}))}return $A._XR.call(this,e)}}),$A.extend({setCheckbox:$A.setButton,setRadio:$A.setButton,setSwitch:$A.setButton})}});