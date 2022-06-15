/*@license
CalcNames: The AccName Computation Prototype, compute the Name and Description property values for a DOM node
Returns an object with 'name' and 'desc' properties.
Functionality mirrors the steps within the W3C Accessible Name and Description computation algorithm.
https://w3c.github.io/accname/
Author: Bryan Garaventa
https://github.com/whatsock/w3c-alternative-text-computation
Distributed under the terms of the Open Source Initiative OSI - MIT License
*/
!function(){var a=window.AccNamePrototypeNameSpace||window;a&&"string"==typeof a&&a.length&&(window[a]={},a=window[a]),a.getAccNameVersion="2.59",a.getAccName=a.calcNames=function(e,t,ee,r){var te=(r=r||{}).document||document,n={name:"",desc:"",error:""},u=!1,re=!1;try{if(!e||1!==e.nodeType)return n;function a(e,t){var r=t;if(-1!==r.indexOf("attr("))for(var n=r.match(/attr\((.|\n|\r\n)*?\)/g),a=0;a<n.length;a++){var o=n[a].slice(5,-1);o=e.getAttribute(o)||"",r=r.replace(n[a],o)}return r=r.replace(/url\((.*?)\)\s+\/|url\((.*?)\)/g,"").replace(/^\s+|\s+$/g,"").replace(/\"/g,"")}var ne=e,o=Ce(e.getAttribute("role")||""),ae={name:[],desc:[]},oe=[],ie=function(z,F,J,K,X,Y,Z){(Z=Z||{}).tag=Z.tag||!1,Z.role=Z.role||!1,Z.go=Z.go||!1;var e={name:"",title:""},_=!1,l=function(e,t){for(var r=[];e;){if((e=e.id&&Y[e.id]&&Y[e.id].node&&-1===r.indexOf(e)?(r.push(e),Y[e.id].node):e.parentNode)&&e===t)return!0;if(!e||e===Y.top||e===te.body)return!1}return!1},t={before:"",after:""};Z.tag||Z.role||-1!==ae[Y.computingDesc?"desc":"name"].indexOf(z)||(t=Oe(z,null),ee&&(-1===t.before.indexOf(" [ARIA] ")&&-1===t.before.indexOf(" aria-")&&-1===t.before.indexOf(" accName: ")||(t.before=""),-1===t.after.indexOf(" [ARIA] ")&&-1===t.after.indexOf(" aria-")&&-1===t.after.indexOf(" accDescription: ")||(t.after="")));var d=function(e,t,r){var n={name:"",title:""};if(!e)return n;var a=!(!e||1!==e.nodeType||!g(e)),o=e,i=t(e)||{};if(i.name&&i.name.length&&(n.name+=i.name),!i.skip&&!function(e,t){if(!t||!e||1!==t.nodeType||1!==e.nodeType)return!1;function r(e,t){return n&&0<=t.roles.indexOf(n)||!n&&0<=t.tags.indexOf(a)}var n=de(e),a=e.nodeName.toLowerCase();return r(0,c)?e!==t||e.id&&Y[e.id]&&Y[e.id].node?!(l(e,Y.top)&&"select"!==e.nodeName.toLowerCase()||r(0,f)):!ue(e):!(!r(0,s)&&(e!==ne||r(0,f))||!(n||-1===["section"].indexOf(a)||e.getAttribute("aria-labelledby")||e.getAttribute("aria-label"))||Z.go)}(e,Y.top))for(Z.go&&(Z.go=!1),e=e.firstChild;e;)n.name+=d(e,t,r).name,e=e.nextSibling;return n.name+=i.owns||"",ne===o&&r===o&&!Ce(n.name)&&Ce(i.title)?n.name=Ae(i.title):ne===o&&r===o&&Ce(i.title)&&(n.title=Ae(i.title)),ne===o&&r===o&&Ce(i.desc)&&(n.title=Ae(i.desc)),ne===o&&r===o&&Ce(i.placeholder)&&!Ce(n.name)?(n.name=Ae(i.placeholder),u=!0):ne===o&&r===o&&Ce(i.placeholder)&&!Ce(n.title)&&(n.title=Ae(i.placeholder)),(a||i.isWidget)&&(n.name=Ae(n.name)),n};return e=d(z,function(e){var t=0,r=null,n=[],a=[],o={name:"",title:"",owns:"",skip:!1},i=!!(e&&1===e.nodeType&&K&&K.length&&-1!==K.indexOf(e)&&e===ne&&e!==z),l=!1;if((J||!e||xe(e,Y.top))&&!X&&!i)return o;if(Z.tag||Z.role||-1!==ae[Y.computingDesc?"desc":"name"].indexOf(e))return o;ae[Y.computingDesc?"desc":"name"].push(e);var d="",u="",f={before:"",after:""},s=z===e?e:e.parentNode;if(Z.tag||Z.role||-1!==ae[Y.computingDesc?"desc":"name"].indexOf(s)||(ae[Y.computingDesc?"desc":"name"].push(s),f=Oe(s,z),ee&&(-1===f.before.indexOf(" [ARIA] ")&&-1===f.before.indexOf(" aria-")&&-1===f.before.indexOf(" accName: ")||(f.before=""),-1===f.after.indexOf(" [ARIA] ")&&-1===f.after.indexOf(" aria-")&&-1===f.after.indexOf(" accDescription: ")||(f.after=""))),1===e.nodeType){var c=e.nodeName.toLowerCase(),g=de(e),p=!Z.tag&&!Z.role&&e.getAttribute("aria-labelledby")||"",m=!Z.tag&&!Z.role&&e.getAttribute("aria-describedby")||"",b=!Z.tag&&!Z.role&&e.getAttribute("aria-description"),h=!Z.tag&&!Z.role&&e.getAttribute("aria-label")||"",x=!Z.tag&&!Z.role&&e.getAttribute("title")||"";if(e===ne&&!g&&-1!==fe.indexOf(c))return o;var v=-1!==se.indexOf(c),y=-1!==["input"].indexOf(c),A=-1!==ce.indexOf(g),O=-1!==ge.indexOf(g),w=-1!==pe.indexOf(g),N=A||O||w||"combobox"===g,C=(N||-1!==me.indexOf(g))&&"link"!==g;o.isWidget=v||C;var k=!1,S=!1,L=e.getAttribute("aria-owns")||"",T=!(Z.tag||Z.role||i||!(e!==z&&(v||N)||e.id&&Y[e.id]&&Y[e.id].target&&Y[e.id].target===e));if(!F&&!Z.tag&&!Z.role&&p){for(n=p.split(/\s+/),a=[],t=0;t<n.length;t++)r=te.getElementById(n[t]),a.push(ie(r,!0,J,[e],r===z,{ref:Y,top:r}).name);d=Ce(a.join(" ")),Ce(d)&&(_=l=k=!0,o.skip=!0)}if(!F&&e===z&&!Z.tag&&!Z.role&&(m||b)){if(m){var V;for(n=m.split(/\s+/),a=[],t=0;t<n.length;t++)r=te.getElementById(n[t]),a.push(ie(r,!0,!1,[e],!1,{ref:Y,top:r,computingDesc:!0}).name);V=Ce(a.join(" "))}else V=Ce(b);Ce(V)&&(o.desc=V,S=!0)}Z.tag||Z.role||k||!Ce(h)||T||Ce(d=h)&&(l=k=!0,e===z&&(_=J=!0));var D=!Z.tag&&!Z.role&&!k&&"iframe"!==c&&g&&-1!==be.indexOf(g)&&!ue(e)&&!he(e);if(!T){if(!Z.tag&&!Z.role&&!k&&e===z&&v){var j=te.querySelectorAll("label"),q="",I=we(e,"label")||!1;for(t=0;t<j.length;t++)(j[t]!==I||"string"==typeof I.getAttribute("for"))&&j[t].getAttribute("for")!==e.id||ve(j[t],te.body,!0)||(q+=Ae(ie(j[t],!0,J,[e],!1,{ref:Y,top:j[t]}).name));Ce(d=q)&&(k=!0)}var P=!Z.tag&&!Z.role&&y&&(e.getAttribute("type")||"").toLowerCase()||!1,R=!Z.tag&&!Z.role&&P&&Ce(e.getAttribute("value"))||!1,E=D&&"img"===c?"":Ce(e.alt||e.getAttribute("alt"));if(Z.tag||Z.role||k||D||"img"!==g&&"img"!==c&&"image"!==P||!E&&!Ce(x)||(d=Ce(E)||Ce(x),Ce(d)&&(k=!0)),Z.tag||Z.role||k||D||"area"!==c||!E||(d=Ce(E),Ce(d)&&(k=!0)),"optgroup"===c&&(Z.tag||Z.role||k||D||!e.getAttribute("label")||(d=Ce(e.getAttribute("label")),Ce(d)&&(k=!0)),o.skip=!0),!Z.tag&&!Z.role&&!k&&e===z&&P&&-1!==["button","submit","reset"].indexOf(P)){if(R)d=R;else switch(P){case"submit":d="submit";break;case"reset":d="reset";break;default:d=""}Ce(d)&&(k=!0)}if(!Z.tag&&!Z.role&&k&&e===z&&P&&-1!==["button","submit","reset"].indexOf(P)&&R&&R!==d&&!o.desc&&(o.desc=R,S=!0),Z.tag||Z.role||k||e!==z||!P||"image"!==P||(d="Submit Query",re=k=!0),!(Z.tag||Z.role||k||e!==ne||"group"!==g&&"radiogroup"!==g&&(g||"fieldset"!==c))){var B=le(e,["legend"],["legend"])||!1;B&&(d=Ce(ie(B,F,!1,[],!1,{ref:Y,top:B}).name)),Ce(d)&&(k=!0),J=!0}if(!(Z.tag||Z.role||k||e!==ne||"table"!==g&&(g||"table"!==c))&&((B=le(e,["caption"],["caption"])||!1)&&(d=Ce(ie(B,F,!1,[],!1,{ref:Y,top:B}).name)),Ce(d)&&(k=!0),J=!0),!Z.tag&&!Z.role&&"svg"===c){var H=e.querySelector("title")||!1,$=e===ne&&e.querySelector("desc")||!1;if(!k&&H&&(d=Ce(ie(H,!0,!1,[],!1,{ref:Y,top:H}).name)),!S&&$){var M=Ce(ie($,!0,!1,[],!1,{ref:Y,top:$}).name);Ce(M)&&(o.desc=M)}o.skip=!0}}Z.tag||Z.role||!T||K&&K.length&&-1!==K.indexOf(e)||(A?d=ye(g,e,!0):O||"combobox"===g&&v?d=ye(g,e,!1,!0):w?d=ye(g,e,!1,!1,!0):!v||-1===["input","textarea"].indexOf(c)||C&&!O?!v||"select"!==c||C&&"combobox"!==g||(d=ye(g,e,!1,!1,!0,!0)):d=ye(g,e,!1,!1,!1,!0),d=Ce(d)),Z.tag||Z.role||D||!Ce(x)||d&&" "===b||(o.title=Ce(x));var W=v&&Ce(e.getAttribute("type")||"").toLowerCase();W=W||"text";var G=!Z.tag&&!Z.role&&e===ne&&e===z&&(O||v&&("textarea"===c||"input"===c&&-1!==["password","search","tel","text","url","email"].indexOf(W)))&&Ce(e.getAttribute("placeholder")||e.getAttribute("aria-placeholder"));G&&(o.placeholder=G);var Q=Z.role&&Z.role===g||!g&&Z.tag&&Z.tag===c;if(Q&&(d=Ce(ie(e,F,!1,[],!1,{ref:Y,top:e}).name),Ce(d)&&(J=!0)),!Q&&L&&-1===["input","img","progress"].indexOf(c)){for(n=L.split(/\s+/),a=[],t=0;t<n.length;t++)if((r=te.getElementById(n[t]))&&-1===oe.indexOf(n[t])){oe.push(n[t]);var U={ref:Y,top:Y.top};U[n[t]]={refNode:z,node:e,target:r},ve(r,te.body,!0)||a.push(ie(r,!0,J,[],!1,U).name)}u=a.join("")}}else Z.tag||Z.role||3!==e.nodeType||(d=e.data);return l||(d=f.before+d.replace(/\s+/g," ")+f.after),d.length&&!Ne(e,Y.top,Y)&&(o.name=d),o.owns=u,o},z),_||(e.name=t.before+e.name.replace(/\s+/g," ")+t.after),e},le=function(e,t,r,n){for(e=e?e.firstChild:null;e;){var a=de(e)||!1;if(1===e.nodeType&&(!t&&!r||a&&r&&-1!==r.indexOf(a)||!a&&t&&-1!==t.indexOf(e.nodeName.toLowerCase())))return e;if(!n&&1===e.nodeType&&(t||r))return null;e=e.nextSibling}return e},de=function(e){var t=e&&e.getAttribute?(e.getAttribute("role")||"").toLowerCase():"";if(!Ce(t))return"";function r(e){return 0<Ce(t).length&&0<=e.roles.indexOf(t)}for(var n=t.split(/\s+/),a=0;a<n.length;a++)if(t=n[a],r(f)||r(s)||r(c)||r(i)||-1!==be.indexOf(t))return t;return""},ue=function(e){var t=e.nodeName.toLowerCase();return!!e.getAttribute("tabindex")||(!("a"!==t||!e.getAttribute("href"))||-1!==["button","input","select","textarea"].indexOf(t)&&"hidden"!==(e.getAttribute("type")||"").toLowerCase())},f={roles:["button","checkbox","link","option","radio","switch","tab","treeitem","menuitem","menuitemcheckbox","menuitemradio","row","cell","gridcell","columnheader","rowheader","tooltip","heading"],tags:["a","button","summary","input","h1","h2","h3","h4","h5","h6","menuitem","option","tr","td","th"]},s={roles:["application","alert","log","marquee","timer","alertdialog","dialog","banner","complementary","form","main","navigation","region","search","article","document","feed","figure","img","math","toolbar","menu","menubar","grid","listbox","radiogroup","textbox","searchbox","spinbutton","scrollbar","slider","tablist","tabpanel","tree","treegrid","separator","rowgroup","group"],tags:["article","aside","body","select","datalist","optgroup","dialog","figure","footer","form","header","hr","iframe","img","textarea","input","main","math","menu","nav","section","thead","tbody","tfoot","fieldset"]},c={roles:["term","definition","directory","list","note","status","table","contentinfo"],tags:["dl","ul","ol","dd","details","output","table"]},i={roles:["legend","caption"],tags:["legend","caption","figcaption"]},fe=["div","span"],se=["button","input","select","textarea"],ce=["scrollbar","slider","spinbutton"],ge=["searchbox","textbox"],pe=["grid","listbox","tablist","tree","treegrid"],me=["button","checkbox","link","switch","option","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","radio","tab","treeitem","gridcell"],be=["presentation","none"],he=function(e){for(var t=["labelledby","label","describedby","busy","controls","current","details","disabled","dropeffect","errormessage","flowto","grabbed","haspopup","invalid","keyshortcuts","live","owns","roledescription"],r=0;r<t.length;r++){if(Ce(e.getAttribute("aria-"+t[r])))return!0}return!1},xe=r.isHidden||function(e,r){return function(e){if(!e||1!==e.nodeType||e===r)return!1;if("true"===e.getAttribute("aria-hidden"))return!0;if(e.getAttribute("hidden"))return!0;var t=l(e);return"none"===t.display||"hidden"===t.visibility}(e)},ve=function(e,t,r,n){for(;e&&e!==t;){if(!n&&1===e.nodeType&&xe(e,t))return!0;n=!1,e=e.parentNode}return!1},l=r.getStyleObject||function(e){var t={};return te.defaultView&&te.defaultView.getComputedStyle?t=te.defaultView.getComputedStyle(e,""):e.currentStyle&&(t=e.currentStyle),t},g=function(e,t){var r=t||l(e);for(var n in d)for(var a=d[n],o=0;o<a.length;o++)if(r[n]&&(0===a[o].indexOf("!")&&-1===[a[o].slice(1),"inherit","initial","unset"].indexOf(r[n])||0===r[n].indexOf(a[o])))return!0;return!t&&e.nodeName&&-1!==p.indexOf(e.nodeName.toLowerCase())&&!(r.display&&0===r.display.indexOf("inline")&&"br"!==e.nodeName.toLowerCase())},d={display:["block","grid","table","flow-root","flex"],position:["absolute","fixed"],float:["left","right","inline"],clear:["left","right","both","inline"],overflow:["hidden","scroll","auto"],"column-count":["!auto"],"column-width":["!auto"],"column-span":["all"],contain:["layout","content","strict"]},p=["address","article","aside","blockquote","br","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","legend","li","main","nav","noscript","ol","output","p","pre","section","table","td","tfoot","th","tr","ul","video"],ye=function(e,t,r,n,a,o){var i="",l=!1;if(r&&!o)i=t.getAttribute("aria-valuetext")||t.getAttribute("aria-valuenow")||"";else if(n&&!o)i=h(t)||"";else if(a&&!o){var d=[];"grid"===e||"treegrid"===e?d=["gridcell","rowheader","columnheader"]:"listbox"===e?d=["option"]:"tablist"===e?d=["tab"]:"tree"===e&&(d=["treeitem"]),i=m(t,t.querySelectorAll('*[aria-selected="true"]'),!1,d),l=!0}return!(i=Ce(i))&&(r||n)&&t.value&&(i=t.value),l||i||!o||(i=a?m(t,t.querySelectorAll("option[selected]"),!0):t.value),i},Ae=function(e){return Ce(e).length?" "+e+" ":" "},m=function(e,t,r,n){if(!t||!t.length)return"";for(var a=[],o=0;o<t.length;o++){var i=de(t[o]);(!n||-1!==n.indexOf(i))&&a.push(r?h(t[o]):ie(t[o],!0,!1,[],!1,{top:t[o]}).name)}return a.join(" ")},b=r.getPseudoElStyleObj||function(e,t){var r={};for(var n in d)r[n]=te.defaultView.getComputedStyle(e,t).getPropertyValue(n);return r.content=te.defaultView.getComputedStyle(e,t).getPropertyValue("content").replace(/^"|\\|"$/g,""),r},h=function(e,t){if(!t&&1===e.nodeType)return e.innerText||e.textContent||"";var r=b(e,t),n=r.content;return n&&"none"!==n?(g({},r)&&(":before"===t?n+=" ":":after"===t&&(n=" "+n)),n):""},Oe=r.getCSSText||function(e,t){return e&&1!==e.nodeType||e===t||-1!==["input","select","textarea","img","iframe","optgroup"].indexOf(e.nodeName.toLowerCase())?{before:"",after:""}:{before:a(e,h(e,":before")),after:a(e,h(e,":after"))}},we=function(e,t,r,n){for(n=!!n;e;)if((e=e.parentNode)&&(r&&de(e)===r||t&&e.nodeName&&e.nodeName.toLowerCase()===t&&(!n||de(e).length<1)))return e;return{}},Ne=function(e,t,r,n){for(var a=[];e&&e!==t;)if((e=e.id&&r&&r[e.id]&&r[e.id].node&&-1===a.indexOf(e)?(a.push(e),r[e.id].node):e.parentNode)&&e.getAttribute&&(Ce(e.getAttribute("aria-label"))||!n&&xe(e,t)))return!0;return!1};if(ve(e,te.body,!0,!(!e||!e.nodeName||"area"!==e.nodeName.toLowerCase())))return n;var x=ie(e,!1,!1,[],!1,{top:e}),v=Ce(x.name.replace(/\s+/g," ")),y=Ce(x.title.replace(/\s+/g," "));n.hasUpperCase=!(!o||o===o.toLowerCase()),n.name=v,n.desc=y,ae={name:[],desc:[]},oe=[]}catch(e){n.error=e}return n.placeholder=u,n.userAgent=re,t&&"function"==typeof t?t.apply(e,[n,e]):n};var Ce=function(e){return"string"!=typeof e?"":e.replace(/^\s+|\s+$/g,"")};a.getAccNameMsg=a.getNames=function(e,t){var r=a.getAccName(e,null,!1,t);if(r.error)return r.error+"\n\nAn error has been thrown in AccName Prototype version "+a.getAccNameVersion+". Please copy this error message and the HTML markup that caused it, and submit both as a new GitHub issue at\nhttps://github.com/whatsock/w3c-alternative-text-computation";var n='accName: "'+r.name+'"\n\naccDesc: "'+r.desc+'"\n\n';return r.placeholder&&(n+="Name from placeholder: true\n\n"),r.userAgent&&(n+="Name from user agent: true\n\n"),n+="(Running AccName Computation Prototype version: "+a.getAccNameVersion+")"},"object"==typeof module&&module.exports&&(module.exports={getNames:a.getNames,calcNames:a.calcNames})}();