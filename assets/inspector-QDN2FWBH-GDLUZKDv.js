var ce=Object.defineProperty;var ue=(r,e,t)=>e in r?ce(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var _=(r,e,t)=>ue(r,typeof e!="symbol"?e+"":e,t);import{q as w,r as n,V as pe,bg as ge,bh as me,bi as ve,bj as be}from"./index-B8ewin6Z.js";w();w();w();w();var z=class E{constructor(e,t,i,l,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(l),this.$name=document.createElement("div"),this.$name.classList.add("name"),E.nextNameID=E.nextNameID||0,this.$name.id=`lil-gui-name-${++E.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}};n(z,"Controller");var x=z,H=class extends x{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};n(H,"BooleanController");var fe=H;function k(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}n(k,"normalizeColorString");var Ae={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:k,toHexString:k},$={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},we={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){let i=$.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([r,e,t],i=1){i=255/i;let l=r*i<<16^e*i<<8^t*i<<0;return $.toHexString(l)}},Ce={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){let i=$.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r,g:e,b:t},i=1){i=255/i;let l=r*i<<16^e*i<<8^t*i<<0;return $.toHexString(l)}},ye=[Ae,$,we,Ce];function j(r){return ye.find(e=>e.match(r))}n(j,"getColorFormat");var P=class extends x{constructor(e,t,i,l){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=j(this.initialValue),this._rgbScale=l,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let s=k(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};n(P,"ColorController");var _e=P,T=class extends x{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}};n(T,"FunctionController");var S=T,Y=class extends x{constructor(e,t,i,l,s,o){super(e,t,i,"number"),this._initInput(),this.min(l),this.max(s);let u=o!==void 0;this.step(u?o:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=n(()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},"onInput"),t=n(d=>{let A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+d),this.$input.value=this.getValue())},"increment"),i=n(d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d)*-1))},"onKeyDown"),l=n(d=>{this._inputFocused&&(d.preventDefault(),t(this._step*this._normalizeMouseWheel(d)))},"onWheel"),s=!1,o,u,p,v,m,b=5,a=n(d=>{o=d.clientX,u=p=d.clientY,s=!0,v=this.getValue(),m=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",c)},"onMouseDown"),g=n(d=>{if(s){let A=d.clientX-o,y=d.clientY-u;Math.abs(y)>b?(d.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>b&&c()}if(!s){let A=d.clientY-p;m-=A*this._step*this._arrowKeyMultiplier(d),v+m>this._max?m=this._max-v:v+m<this._min&&(m=this._min-v),this._snapClampSetValue(v+m)}p=d.clientY},"onMouseMove"),c=n(()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",c)},"onMouseUp"),h=n(()=>{this._inputFocused=!0},"onFocus"),f=n(()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()},"onBlur");this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",l,{passive:!1}),this.$input.addEventListener("mousedown",a),this.$input.addEventListener("focus",h),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let e=n((d,A,y,D,he)=>(d-A)/(y-A)*(he-D)+D,"map"),t=n(d=>{let A=this.$slider.getBoundingClientRect(),y=e(d,A.left,A.right,this._min,this._max);this._snapClampSetValue(y)},"setValueFromX"),i=n(d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",s)},"mouseDown"),l=n(d=>{t(d.clientX)},"mouseMove"),s=n(()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",s)},"mouseUp"),o=!1,u,p,v=n(d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),o=!1},"beginTouchDrag"),m=n(d=>{d.touches.length>1||(this._hasScrollBar?(u=d.touches[0].clientX,p=d.touches[0].clientY,o=!0):v(d),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",a))},"onTouchStart"),b=n(d=>{if(o){let A=d.touches[0].clientX-u,y=d.touches[0].clientY-p;Math.abs(A)>Math.abs(y)?v(d):(window.removeEventListener("touchmove",b),window.removeEventListener("touchend",a))}else d.preventDefault(),t(d.touches[0].clientX)},"onTouchMove"),a=n(()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",a)},"onTouchEnd"),g=this._callOnFinishChange.bind(this),c=400,h,f=n(d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();let A=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+A),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(g,c)},"onWheel");this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",m,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}};n(Y,"NumberController");var xe=Y,N=class extends x{constructor(e,t,i,l){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(l)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}};n(N,"OptionController");var $e=N,G=class extends x{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}};n(G,"StringController");var Ee=G,ke=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function J(r){let e=document.createElement("style");e.innerHTML=r;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}n(J,"_injectStyles");var V=!1,W=class X{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:l,title:s="Controls",closeFolders:o=!1,injectStyles:u=!0,touchStyles:p=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",v=>{(v.code==="Enter"||v.code==="Space")&&(v.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),p&&this.domElement.classList.add("allow-touch-styles"),!V&&u&&(J(ke),V=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),l&&this.domElement.style.setProperty("--width",l+"px"),this._closeFolders=o}add(e,t,i,l,s){if(Object(i)===i)return new $e(this,e,t,i);let o=e[t];switch(typeof o){case"number":return new xe(this,e,t,i,l,s);case"boolean":return new fe(this,e,t);case"string":return new Ee(this,e,t);case"function":return new S(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new _e(this,e,t,i)}addFolder(e){let t=new X({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof S||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof S)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let i=n(s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))},"onTransitionEnd");this.$children.addEventListener("transitionend",i);let l=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=l+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};n(W,"GUI");var Se=W,Le=Se;w();w();var C=(()=>{let r=new pe;return n(function(e){return r.set(e),`#${r.getHexString()}`},"normalize")})();function R(r){let e;for(e of r)e()}n(R,"runAll");function L(r,e){let t=window.location.href,i=new URL(t),l=new URLSearchParams(i.search);for(let s in r)if(r.hasOwnProperty(s)){let o=`${e}.${s}`;l.set(o,r[s])}i.search=l.toString(),history.pushState({path:i.toString()},"",i.toString())}n(L,"updateCurrentUrlParamsWithNamespace");function F(r,e){let t=new URLSearchParams(window.location.search),i={};for(let[l,s]of t)if(l.startsWith(`${r}.`)){let o=l.slice(r.length+1);s==="true"||s==="false"?i[o]=s==="true":typeof(e==null?void 0:e[o])=="number"?i[o]=Number(s):i[o]=s}return{namespace:r,params:i}}n(F,"getUrlParamsWithNamespace");w();function U(r,e){e.domElement.id="interactionPanel";let t=e.addFolder("Click 👇");K(r,t);let i=e.addFolder("Hover 🚁");Q(r,i)}n(U,"createInteractionControls");function K(r,e){let t={position:"",hoverColor:C(r.getHoverColor())},i=e.add(t,"position").disable(),l=[];function s(){l.forEach(u=>u()),l.length=0}n(s,"reset");let o=0;r.on("click",u=>{var p;let{labels:v,markers:m,coordinate:b}=u;s(),clearInterval(o),i.load(JSON.stringify([b.longitude,b.latitude]));let a=v[0]||m[0];if(a){let c=I(r,a,e);if(!c)return;l.push(c.destroy),c.labelItemFolder.openAnimated()}let g=(p=u.spaces[0])!=null?p:u.objects[0];if(g){let c={id:g.id,...r.getState(g.id),type:g.type,isInView:!1,isInViewCheck:M(r,g.id)},{cleanup:h}=Z(r,c,e);o=setInterval(()=>{c.isInView=r.isInView(a||g)},500),l.push(h)}})}n(K,"createClickControls");var Fe=["interactive"];function Z(r,e,t){let i=t.addFolder(`${e.type}-${e.id}`);for(let l in e){if(l==="visible"&&i.add(e,l).onChange(s=>{r.updateState(e.id,{[l]:s})}),l==="color"||l==="hoverColor"){e[l]=C(e[l]),i.addColor(e,l).onChange(s=>{r.updateState(e.id,{[l]:s})});continue}if(l==="height"){i.add(e,l,0,20,1).onChange(s=>{r.updateState(e.id,{[l]:s})});continue}Fe.includes(l)&&i.add(e,l).onChange(s=>{r.updateState(e.id,{[l]:s})})}return i.add(e,"isInView").listen().disable(),i.add(e,"isInViewCheck"),{cleanup(){i.destroy()}}}n(Z,"renderByProp");function Q(r,e){r.setHoverColor("#1f3a7a");let t={position:"",hoverColor:C(r.getHoverColor()),intersected:"",type:"",id:""},i=e.add(t,"position").disable();e.add(t,"id").disable().listen(),e.add(t,"type").disable().listen(),e.addColor(t,"hoverColor").onChange(o=>{r.setHoverColor(o)});let l=[];function s(){l.forEach(o=>o()),l.length=0}n(s,"reset"),r.on("hover",o=>{var u,p,v;let{coordinate:m,spaces:b,objects:a,markers:g,labels:c}=o;s(),i.load(JSON.stringify([m.longitude,m.latitude]));let h=(v=(p=(u=b[0])!=null?u:a[0])!=null?p:g[0])!=null?v:c[0];if(!h)return;let f=r.getState(h);f&&(t.type=f.type,t.id=h.id)})}n(Q,"createHoverControls");function M(r,e){return n(function(){console.log("isInView",r.isInView(e))},"isInView")}n(M,"createIsInViewHandler");function q(r,e,t){let i={labels:{},all(){t.Labels.all().forEach(a=>{this.labels[a.id]=a}),p()},removeAllLabels(){t.Labels.removeAll().forEach(a=>{delete this.labels[a.id]}),p()}},{addLabel:l,destroy:s}=ee(r,t);r.add(i,"all"),r.add(i,"removeAllLabels");let o=r.addFolder("Label List");r.close();let u=new Map,{rerender:p}=v();function v(){function a(h){var f;delete i.labels[h.id],(f=u.get(h.id))==null||f.destroy()}n(a,"remove");function g(h){let f=I(t,h,o,{onRemove:A=>{a(A)}});if(!f)return;let{labelItemFolder:d}=f;u.set(h.id,d)}n(g,"add");function c(){o.destroy(),o=r.addFolder("Label");for(let h in i.labels){let f=i.labels[h];g(f)}}return n(c,"rerender"),{rerender:c,add:g,remove:a}}n(v,"createLabelControls"),r.domElement.classList.add("list-items");let m;t.on("click",({labels:a,coordinate:g})=>{if(!r._closed)if(a[0]){m==null||m.close();let c=u.get(a[0].id);if(r.open(),!c)return;c==null||c.open(),c==null||c.domElement.scrollIntoView({block:"start"}),c==null||c.domElement.focus(),m=c}else l(g)});function b(a){for(let g of a)i.labels[g.id]=g;p()}return n(b,"populatelabels"),{populatelabels:b,destroy(){s()}}}n(q,"createLabelControls");function I(r,e,t,{onRemove:i}={}){var l,s,o,u;let p=t.addFolder(`${(l=e.text)==null?void 0:l.substring(0,12)}`);p.onChange(g=>{r.updateState(e,{appearance:a.appearance,interactive:a.interactive})}),p.close();let v=r.getState(e);if((v==null?void 0:v.type)!=="label")throw new Error(`error getting state for label: ${e.id}`);let{appearance:m,interactive:b}=v;if(!m||m.margin==null||b==null)throw new Error("incomplte label state");let a={text:e.text,interactive:b,appearance:{...m,margin:m.margin||0,marker:{foregroundColor:(o=(s=m.marker)==null?void 0:s.foregroundColor)!=null&&o.active?C((u=m.marker.foregroundColor)==null?void 0:u.active):"black"},text:{foregroundColor:C(m.text.foregroundColor)}},remove(){r.Labels.remove(e),i==null||i(e),p.destroy()},isInView:M(r,e.id)};return p.add(a.appearance,"margin",0,20).name("margin"),p.add(a,"text"),p.add(a,"interactive"),p.addColor(a.appearance.marker,"foregroundColor").name("marker foreground"),p.addColor(a.appearance.text,"foregroundColor").name("text forground"),p.add(a,"isInView"),p.add(a,"remove"),{labelItemFolder:p,destroy(){p.destroy()}}}n(I,"addLabelControlToFolder");function ee(r,e){let t=r.addFolder("Add"),i={onClick:!1,margin:0,text:"New Label!",interactive:!0,marginForegroundColor:C("skyblue"),marginBackgroundColor:C("coral"),textForegroundColor:C("slategray"),textBackgroundColor:C("white")};return t.add(i,"onClick"),t.add(i,"margin"),t.add(i,"interactive"),t.add(i,"text"),t.addColor(i,"marginForegroundColor"),t.addColor(i,"marginBackgroundColor"),t.addColor(i,"textForegroundColor"),t.addColor(i,"textBackgroundColor"),{destroy(){t.destroy()},addLabel(l){return t._closed||!i.onClick?void 0:e.Labels.add(l,i.text,{appearance:{margin:i.margin,marker:{foregroundColor:{active:i.marginForegroundColor,inactive:i.marginForegroundColor},backgroundColor:{active:i.marginBackgroundColor,inactive:i.marginBackgroundColor}},text:{foregroundColor:i.textForegroundColor,backgroundColor:i.marginBackgroundColor}},interactive:i.interactive})}}}n(ee,"createAddControl");var Me={};w();var O="camera-ui";function te(r,e){let t=r.addFolder("Camera 📷").onOpenClose(h=>{L({opened:!h._closed},O)}),{params:i}=F(O);i.opened||t.close();let l=e.Camera.center.toJSON(),s=document.createElement("div");Object.assign(s.style,{display:"none",position:"absolute",left:"0px",top:"0px",bottom:"0px",right:"0px",backgroundColor:"aqua",pointerEvents:"none",opacity:.5}),document.body.appendChild(s);let o={center_lat:l.latitude,center_lon:l.longitude,zoomLevel:e.Camera.zoomLevel,pitch:e.Camera.pitch,bearing:e.Camera.bearing,minZoomLevel:e.Camera.minZoomLevel,maxZoomLevel:e.Camera.maxZoomLevel,inset_top:0,inset_left:0,inset_right:0,inset_bottom:0,animateOnLoad:!0,share:()=>{L(t.save().controllers,"camera"),navigator.clipboard.writeText(window.location.href)},visualizeInset:!1,"Focus on click":!0,"Focus on current floor":()=>{e.Camera.focusOn([e.currentFloor],{screenOffsets:{top:20,left:20,right:20,bottom:20}})}};function u(){Object.assign(s.style,{left:o.inset_left+"px",top:o.inset_top+"px",bottom:o.inset_bottom+"px",right:o.inset_right+"px"})}n(u,"updateInsetVisualizer"),t.add(o,"center_lat").listen().disable(),t.add(o,"center_lon").listen().disable(),t.add(o,"zoomLevel",16,22,.5).listen().disable(),t.add(o,"pitch").listen().disable(),t.add(o,"bearing").listen().disable(),t.add(o,"minZoomLevel",5,22,.5).onChange(h=>{e.Camera.setMinZoomLevel(h)}),t.add(o,"maxZoomLevel",10,22,.5).onChange(h=>{e.Camera.setMaxZoomLevel(h)}),t.add(o,"animateOnLoad"),t.add(o,"visualizeInset").onChange(h=>{h?s.style.display="block":s.style.display="none"});let{innerHeight:p,innerWidth:v}=window;t.add(o,"inset_top",0,p,1).onChange(c),t.add(o,"inset_bottom",0,p,1).onChange(c),t.add(o,"inset_left",0,v,1).onChange(c),t.add(o,"inset_right",0,v,1).onChange(c);let m=ie(e);t.add(o,"Focus on click").onChange(h=>{h?e.on("click",m):e.off("click",m)}),o["Focus on click"]&&e.on("click",m),t.add(o,"share"),t.add(o,"Focus on current floor");let b=n(h=>{t._closed||(o.center_lat=h.center.latitude,o.center_lon=h.center.longitude,o.zoomLevel=h.zoomLevel,o.bearing=h.bearing,o.pitch=h.pitch)},"onCameraChanged");e.on("camera-change",b);let{params:a}=F("camera",o);if(Object.keys(a).length>0){let h=a;e.Camera.setScreenOffsets({top:h.inset_top,left:h.inset_left,right:h.inset_right,bottom:h.inset_bottom});let f={pitch:h.pitch,center:new ge(h.center_lat,h.center_lon),bearing:h.bearing,zoomLevel:h.zoomLevel};h.animateOnLoad?e.Camera.animateTo(f):e.Camera.set(f),t.load({controllers:h,folders:{}}),u()}let g=[()=>{e.off("camera-change",b)}];function c(){e.Camera.setScreenOffsets({top:o.inset_top,left:o.inset_left,right:o.inset_right,bottom:o.inset_bottom}),u()}return n(c,"updateInset"),()=>({destroy(){t.destroy(),R(g)}})}n(te,"createCameraControls");function ie(r){return n(function(e){var t;let{spaces:i,objects:l}=e,s=(t=i[0])!=null?t:l[0];s&&r.Camera.focusOn(s)},"handler")}n(ie,"createHandler");w();function re(r,e,t){let i={markers:{},removeAllMarkers(){t.Markers.removeAll().forEach(a=>{delete this.markers[a.id]}),p()}},{addMarker:l,destroy:s}=oe(r,t);r.add(i,"removeAllMarkers");let o=r.addFolder("Marker List");r.close();let u=new Map,{rerender:p}=v();function v(){function a(h){var f;delete i.markers[h.id],(f=u.get(h.id))==null||f.destroy()}n(a,"remove");function g(h){let f=le(t,h,o,{onRemove:A=>{a(A)}});if(!f)return;let{markerItemFolder:d}=f;u.set(h.id,d)}n(g,"add");function c(){o.destroy(),o=r.addFolder("marker");for(let h in i.markers){let f=i.markers[h];g(f)}}return n(c,"rerender"),{rerender:c,add:g,remove:a}}n(v,"createMarkerControls"),r.domElement.classList.add("list-items");let m;t.on("click",({markers:a,coordinate:g})=>{if(!r._closed)if(a[0]){m==null||m.close();let c=u.get(a[0].id);if(r.open(),!c)return;c==null||c.open(),c==null||c.domElement.scrollIntoView({block:"start"}),c==null||c.domElement.focus(),m=c}else l(g)});function b(a){for(let g of a)i.markers[g.id]=g;p()}return n(b,"populateMarkers"),{populateMarkers:b,destroy(){s()}}}n(re,"createMarkerControls");function le(r,e,t,{onRemove:i}={}){let l=t.addFolder(`${e.id.toString().substring(0,8)}`);l.onChange(p=>{r.updateState(e,{interactive:u.interactive})}),l.close();let s=r.getState(e);if((s==null?void 0:s.type)!=="marker")throw new Error(`error getting state for marker: ${e.id}`);let{interactive:o}=s;if(o==null)throw new Error("incomplte label state");let u={interactive:o,remove(){r.Markers.remove(e),i==null||i(e),l.destroy()}};return l.add(u,"interactive"),l.add(u,"remove"),{markerItemFolder:l,destroy(){l.destroy()}}}n(le,"addMarkerControlToFolder");function oe(r,e){let t=r.addFolder("Add"),i={onClick:!1,interactive:!0};return t.add(i,"onClick"),t.add(i,"interactive"),{destroy(){t.destroy()},addMarker(l){return t._closed||!i.onClick?void 0:e.Markers.add(l,"<div>New Marker</div>",{interactive:i.interactive})}}}n(oe,"createAddControl");w();function ne(r,e){let t=r.addFolder("Walls").close(),i={visible:!0,topColor:"#3269a8"};t.add(i,"visible").onChange(l=>{e.updateState("walls",{visible:l})}),t.addColor(i,"topColor").onChange(l=>{e.updateState("walls",{topColor:l})}),e.updateState("walls",{topColor:i.topColor})}n(ne,"createGeometryControl");function ae(r,e){se();let t=new Le({title:"SDK Controls"});t.domElement.classList.add("mappedin-js-inspector"),U(e,t),te(t,e);let i=t.addFolder("Levels").close(),l=t.addFolder("Scene Controls"),s=t.addFolder("Labels"),o=t.addFolder("Markers");ne(t,e);let u={level:e.currentFloor.id,load:()=>{let a=localStorage.getItem("mappedin-debug"),g=a?JSON.parse(a):{};for(let c in g)e.updateState(c,g[c])},clear(){localStorage.removeItem("mappedin-debug")},"log analytics":me.getState().logEvents};t.add(u,"load"),t.add(u,"clear"),t.add(u,"log analytics").onChange(a=>{ve.updateState({logEvents:a})});let{populatelabels:p}=q(s,r,e),{populateMarkers:v}=re(o,r,e),m=r.getByType("floor").reduce((a,g)=>(a[g.name]=g.id,a),{}),b=i.add(u,"level",m).onChange(a=>{e.setFloor(a),u.level=e.currentFloor.id,b.updateDisplay()});return e.on("floor-change-start",a=>{i.controllers[0].setValue(a.floor.id)}),r.getByType("space").forEach(a=>{e.updateState(a,{interactive:!0})}),r.getByType("object").forEach(a=>{e.updateState(a,{interactive:!0})}),r.getByType("object").forEach(a=>{e.updateState(a,{interactive:!0})}),e.setHoverColor("#a2b7e6"),{populatelabels:p,sceneFolder:l,populateMarkers:v}}n(ae,"createUi");var B="mappedin-sdk-debug-css";function se(){if(document.getElementById(B))return;let r=document.createElement("style");r.id=B,r.textContent=Me,document.head.appendChild(r)}n(se,"injectCss");var de=class{constructor(e,t){_(this,"_enabled",!1);_(this,"mv");_(this,"api");_(this,"mapData");_(this,"storeStateToLocalStorageEnabled",!1);this.mv=e,this.api=t,this.mapData=this.api.getMapData()}setMapData(e){this.mapData=e}async enable(){var e;if(this._enabled)return;if(this._enabled=!0,!this.mapData)throw new Error("Please set mapData before enable debug.");let{sceneFolder:t}=ae(this.mapData,this.mv);be(this.api.core,t),(e=this.api.getMapDataInternal())==null||e.spaces.forEach(i=>{this.mv.updateState(i.id,{interactive:!0})})}get enabled(){return this._enabled}storeState(e,t){if(!this.storeStateToLocalStorageEnabled)return;let i=localStorage.getItem("mappedin-debug"),l=i?JSON.parse(i):{};l[e]={...l[e],...t},localStorage.setItem("mappedin-debug",JSON.stringify(l))}};n(de,"Inspector");var Te=de;export{Te as Inspector};
