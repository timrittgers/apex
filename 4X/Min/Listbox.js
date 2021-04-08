/*!
ARIA Listbox Module 3.0 for Apex 4X
Copyright 2021 Bryan Garaventa (WhatSock.com)
https://github.com/whatsock/apex
Apex 4X is distributed under the terms of the Open Source Initiative OSI - MIT License.
  */
"setListbox"in $A||$A.import("RovingTabIndex",{name:"ListboxModule",props:props,once:!0,call:function(e){var a=$A.isIE();$A.addWidgetProfile("Listbox",{configure:function(e){return{preload:!0,preloadImages:!0,preloadCSS:!0,className:"aria-listbox",storeData:!0}},afterRender:function(o){o.update(),$A.loop(o.RTI.nodes,function(e,t){o.getState(t,$A.getAttr(t,"aria-checked"),$A.hasAttr(t,"aria-checked"),!1,o.RTI.nodes)},"array")}}),$A.extend({setListbox:function(e,d){function u(e,t,o,i,l){if(o){var n=0;return"true"===t?n=1:"mixed"===t?n=2:t="false",$A.data(e,"check",n),i&&$A.setAttr(e,"aria-checked",t),n}var r=$A.data(e,"check");return!!$A.isNum(r)&&r}this._4X&&(d=e,e=this._X),$A.isPlainObject(e)&&(e=(d=e).select||d.listbox||null),d=d||{};var n=$A.extend(!0,{parent:"ul",child:"button",parse:function(e){return e.querySelectorAll(n.child)},build:{parent:'<ul class="aria-listbox"></ul>',child:'<li><button class="option"><span class="lbl">{OPTION-TEXT}</span></button></li>'}},d.tag||{}),r=null,A={update:function(){A.optionNodes=A.select.nodeType?A.select.querySelectorAll("option"):[],A.options=[],A.select.nodeType?($A.empty(A.listbox),$A.loop(A.optionNodes,function(e,t){var o=$A.getText(t),i=n.build.child.replace("{OPTION-TEXT}",o),l=(i=$A.toNode(i,!0)).querySelector(n.child);$A.isNode(l)&&($A.bindObjects(l,t),A.options.push(l),$A.append(i,A.listbox))},"array"),$A.on(A.select,"change",function(e){var o=-1;$A.loop(A.optionNodes,function(e,t){A.toggleSelect($A.boundTo(t),!!t.selected,!1,A.multiple,!0),o<0&&t.selected&&(o=e)},"array"),r.RTI.activate(0<=o?o:0)})):A.options=n.parse(A.listbox),$A.loop(A.options,function(e,t){var o=u(t,$A.getAttr(t,"check"),A.checkable||$A.hasAttr(t,"check")),s=$A.hasAttr(t,"controls")&&$A.morph($A.getAttr(t,"controls"))||$A.isFn(t.querySelector)&&t.querySelector("input")||!1;if(!1!==o){$A.isNode(s)&&($A.hasBound(t)||$A.bindObjects(s,t),s.checked?o=1:o&&(s.checked=!0));var i="false";1===o?i="true":2===o&&(i="mixed"),$A.setAttr(t,{"aria-checked":i})}var l=$A.hasAttr(t,"select")||$A.isNode($A.boundTo(t))&&$A.boundTo(t).selected;$A.setAttr(t,"aria-selected",l?"true":"false"),$A.data(t,"_Selected",l),$A.closest(t,function(e){if(e===A.listbox)return!0;$A.setAttr(e,"role","presentation")}),$A.on(t,"attributeChange",function(e,t,o,i,l,n,r){if("aria-checked"===o){if($A.isNode(s)){var a=u(t,i,!0);s.checked=!!a}}else"aria-selected"===o&&($A.data(t,"_Selected","true"===i),n&&$A.data(t,"_Selected")!==!!n.selected&&(n.selected=$A.data(t,"_Selected")))},{attributeFilter:["aria-checked","aria-selected"]})},"array"),$A.updateDisabled(A.options),A.setFlags(),A.setListbox(),A.setRoles(),A.setEvents(),A.setSelected(),$A.remAttr(A.options,["check","controls","select"])},setFlags:function(){var e=A.select.nodeType?A.select:d;A.multiple=!!e.multiple||!A.select.nodeType&&A.listbox&&(d.multiselect||"true"===$A.getAttr(A.listbox,"aria-multiselectable")),A.required=!!e.required,A.disabled=!!e.disabled,A.checkable=!!d.checkable,A.sortable=!!d.sortable,A.sortable&&(A.multiple=A.checkable=!1),A.checkable&&(A.multiple=!1)},setListbox:function(){A.multiple&&$A.setAttr(A.listbox,"aria-multiselectable","true"),A.required&&$A.setAttr(A.listbox,"aria-required","true"),A.disabled&&$A.setAttr(A.listbox,"aria-disabled","true");var e="";if(A.select.nodeType&&$A.isHidden(A.select)){var t=A.select.cloneNode();t.hidden=!1,e=$A.isFn(window.getAccName)&&window.getAccName(t).name}$A.setAttr(A.listbox,"aria-label",d.label||e||(A.select.nodeType&&$A.isFn(window.getAccName)?window.getAccName(A.select).name:""))},setRoles:function(){$A.remAttr(A.listbox.querySelectorAll('*[role="listbox"], *[role="option"]'),"role"),$A.setAttr(A.listbox,"role","listbox"),$A.setAttr(A.options,"role","option"),A.setGrab()},setSelected:function(){A.select.nodeType&&$A.loop(A.optionNodes,function(e,t){A.toggleSelect($A.boundTo(t),!!t.selected,!1,A.multiple,!0)},"array")},setEvents:function(){if(r.RTI&&r.RTI.off(),!r.disabled){var e=0,t=A.listbox.querySelector('*[role="option"][aria-selected="true"]');$A.isNode(t)&&(e=$A.inArray(t,A.options)||0),r.RTI=new $A.RovingTabIndex($A.extend({container:A.listbox,nodes:A.options,orientation:$A.isNum(d.orientation)?d.orientation:2,autoSwitch:-1!==[].indexOf(d.autoSwitch)?d.autoSwitch:"off",autoLoop:!1,startIndex:e,DC:r,onShiftUp:function(e,t,o,i,l,n,r){A.multiple&&A.toggleSelect(t,!0),e.preventDefault()},onShiftDown:function(e,t,o,i,l,n,r){A.multiple&&A.toggleSelect(t,!0),e.preventDefault()},onCtrlShiftUp:function(e,t,o,i,l,n,r){o.onShiftUp.call(this,e,t,o,i,l,n,r),e.preventDefault()},onCtrlShiftDown:function(e,t,o,i,l,n,r){o.onShiftDown.call(this,e,t,o,i,l,n,r),e.preventDefault()},onShiftEnd:function(e,t,o,i,l,n,r){if(A.multiple){var a=A.options.slice(o.index);$A.loop(a,function(e,t){A.toggleSelect(t,!0)},"array")}e.preventDefault()},onShiftHome:function(e,t,o,i,l,n,r){if(A.multiple){var a=A.options.slice(0,o.index+1);$A.loop(a,function(e,t){A.toggleSelect(t,!0)},"array")}e.preventDefault()},onCtrlShiftEnd:function(e,t,o,i,l,n,r){o.onShiftEnd.call(this,e,t,o,i,l,n,r),e.preventDefault()},onCtrlShiftHome:function(e,t,o,i,l,n,r){o.onShiftHome.call(this,e,t,o,i,l,n,r),e.preventDefault()},onPageUp:function(e,t,o,i,l,n,r){var a=Math.round(.1*A.options.length);a=a||1;var s=A.index-a;s<0&&(s=0),o.focus(s),e.preventDefault()},onPageDown:function(e,t,o,i,l,n,r){var a=Math.round(.1*A.options.length);a=a||1;var s=A.index+a;s>=A.options.length&&(s=A.options.length-1),o.focus(s),e.preventDefault()},onSpace:function(e,t,o,i,l,n,r){A.sortable?A.toggleGrab(t):o.onClick.apply(t,arguments),a&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onCtrlSpace:function(e,t,o,i,l,n,r){A.sortable?A.toggleGrab(t):o.onClick.apply(t,arguments),a&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onCtrlShiftSpace:function(e,t,o,i,l,n,r){$A.loop(A.options,function(e,t){A.toggleSelect(t,!1)},"array"),A.checkable&&A.check(A.options,"false"),A.sortable&&(A.toggleGrab.grabbed=void 0,A.setGrab()),a&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onEsc:function(e,t,o,i){A.sortable&&(A.toggleGrab.grabbed=void 0,A.setGrab()),a&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onFocus:function(e,t,o,i){A.index=o.index,A.multiple||A.toggleSelect(t,!0),a&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.stopPropagation()},onClick:function(e,t,o,i,l,n,r){var a=t,s=$A.isDisabled(a),c=u(a);!$A.isNum(c)&&A.multiple&&(c="true"===$A.getAttr(a,"aria-selected")),!s&&A.sortable&&A.toggleGrab(a),!s&&$A.isFn(d.onActivate)&&d.onActivate.apply(a,[e,t,o,i||$A.boundTo(a),c,function(e){$A.hasAttr(t,"aria-checked")?u(t,e,!0,!0,o.nodes):e&&$A.setAttr(t,"aria-selected","true"===e?"true":"false")}]),e.preventDefault()},onSelectAll:function(e,t,o,i,l,n,r){A.multiple&&$A.loop(A.options,function(e,t){A.toggleSelect(t,!0)},"array"),e.preventDefault()}},d.extendRTI||{})),$A(A.listbox).setAttr("tabindex","0").on("focus click",function(e){A.options.length&&(r.RTI.focus(),$A.setAttr(A.listbox,"tabindex","-1"))})}},toggleClassName:"selected",selectText:"Selected",unselectText:"Not Selected",toggleSelect:function(o,e,t,i,l){i||A.multiple||$A.loop(A.listbox.querySelectorAll('*[role="option"][aria-selected="true"]'),function(e,t){t!==o&&A.toggleSelect(t,!1,!1,!0)},"array"),$A.isBool(e)||(e=!$A.data(o,"_Selected")),$A.data(o,"_Selected",e),l&&r.RTI.activate(o),$A.setAttr(o,"aria-selected",e?"true":"false"),$A.toggleClass(o,A.toggleClass,e,function(e){})},grabText:"Grabbable",grabbedText:"Grabbed",dropText:"Droppable",setGrab:function(e){A.sortable&&($A.remAttr(A.options,["aria-grabbed","aria-dropeffect","aria-description"]),e||$A.setAttr(A.options,{"aria-grabbed":"false"}),a&&$A.setAttr(A.options,{"aria-description":A.grabText}))},toggleGrab:function(i){if(A.sortable)if(A.setGrab(!0),A.toggleGrab.grabbed){var e=$A.inArray(i,r.RTI.nodes)||0;A.select.nodeType?$A.before($A.boundTo(A.toggleGrab.grabbed),$A.boundTo(i)):$A.before(A.toggleGrab.grabbed,i),A.update(),r.RTI.focus(A.select.nodeType?e:i),A.toggleGrab.grabbed=void 0}else A.toggleGrab.grabbed=i,$A.loop(A.options,function(e,t){var o={};t===i?(o["aria-grabbed"]="true",a&&(o["aria-description"]=A.grabbedText)):(o["aria-dropeffect"]="move",a&&(o["aria-description"]=A.dropText)),$A.setAttr(t,o)},"array")},check:function(e,t){u(e,t,!0,!0,r.RTI.nodes)},value:function(e){var t=A.listbox.querySelectorAll('*[role="option"][aria-checked="true"]');if(t&&t.length)return t;if(A.select.nodeType){if($A.isNode(e))return $A.getAttr($A.boundTo(e),"value");var o=[];return $A.loop(A.optionNodes,function(e,t){t.selected&&o.push(t)},"array"),o}return A.listbox.querySelectorAll('*[role="option"][aria-selected="true"]')}};function t(e){$A.isNative(e)?A.select=e:d.select&&$A.isNative($A.morph(d.select))?A.select=$A.morph(d.select):A.select={nodeType:!1},d.select=A.select;var t=$A.getAttr(A.select,"controls");t&&$A.isNode($A.morph(t))?A.listbox=$A.morph(t):$A.isNative(e)?d.listbox&&$A.morph(d.listbox)?A.listbox=$A.morph(d.listbox):A.listbox=$A.morph(n.build.parent):A.listbox=e,d.listbox=A.listbox,$A.isNode(A.select)&&!$A.isWithin(A.listbox)&&$A(A.listbox).before(A.select),A=$A.extend(A,d),d=$A.extend(d,A),function(e){$A.isNode(e)&&(e.id||(e.id=$A.genId()),$A.svgFix(e),r=$A.toDC($A.extend({content:e,trigger:A.select,on:{},widgetType:"Listbox",toggleHide:!0,getState:u},d)),A.update())}(A.listbox)}e=$A.morph(e);var o=d.fetch&&d.fetch.url,i=d.fetch&&d.fetch.data&&d.fetch.data.selector||$A.getSelectorFromURI(o),l=!(!i||!$A.isPath(o));return d.fetch=null,l?$A.load(o,d.root,{selector:i},function(e){t(e)}):t(e),$A._XR.call(this,r)}})}});