webpackJsonp([1],{AwOr:function(t,e){},Ljq2:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("woOf"),n=i.n(a),o={extend:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var s in e)(void 0===t[s]||null===t[s]||i)&&void 0!==e[s]&&(t[s]=e[s]);return t},checkUrl:function(t,e){return new RegExp(e||"^((.*?:)?\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[\\d\\D]*)?(\\#[-a-z\\d_]*)?$","ig").test(t)},getOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{width:t.clientWidth||0,height:t.clientHeight||0}},getPageX:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).pageX},getPageY:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).pageY},getDistanceX:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.getPageX(t)-(e.getBoundingClientRect().left+window.pageXOffset)},getDistanceY:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.getPageY(t)-(e.getBoundingClientRect().top+window.pageYOffset)},getMultiple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return Math.pow(10,t)},decimalPoint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(t*o.getMultiple())/o.getMultiple()||0}},l=o,r={dealEdgeValue:function(t,e,i){return e.hasOwnProperty("left")&&e.left<0&&(e.left=0,e.width=t.width+t.left),e.hasOwnProperty("top")&&e.top<0&&(e.top=0,e.height=t.height+t.top),!e.hasOwnProperty("left")&&e.hasOwnProperty("width")&&t.left+e.width>i.width&&(e.width=i.width-t.left),!e.hasOwnProperty("top")&&e.hasOwnProperty("height")&&t.top+e.height>i.height&&(e.height=i.height-t.top),n()(t,e)},dealTL:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.width-e,l=t.height-i;return o>=Math.min(s,t.width)&&n()(a,{width:o,left:t.left+e}),l>=Math.min(s,t.height)&&n()(a,{height:l,top:t.top+i}),a},dealTC:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},n=t.height-i;return n>=Math.min(s,t.height)&&(a={height:n,top:t.top+i}),a},dealTR:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.width+e,l=t.height-i;return o>=Math.min(s,t.width)&&n()(a,{width:o}),l>=Math.min(s,t.height)&&n()(a,{height:l,top:t.top+i}),a},dealCL:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.width-e;return o>=Math.min(s,t.width)&&n()(a,{width:o,left:t.left+e}),a},dealCR:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.width+e;return o>=Math.min(s,t.width)&&n()(a,{width:o}),a},dealBL:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.width-e,l=t.height+i;return o>=Math.min(s,t.width)&&n()(a,{width:o,left:t.left+e}),l>=Math.min(s,t.height)&&n()(a,{height:l}),a},dealBC:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.height+i;return o>=Math.min(s,t.height)&&n()(a,{height:o}),a},dealBR:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:48,a={},o=t.width+e,l=t.height+i;return o>=Math.min(s,t.width)&&n()(a,{width:o}),l>=Math.min(s,t.height)&&n()(a,{height:l}),a}};var d={name:"zone",props:["isEdit","config","index","setting"],data:function(){return{showModal:!1}},components:{},computed:{styleObject:function(){return{top:this.getZoneStyle(this.setting.topPer),left:this.getZoneStyle(this.setting.leftPer),width:this.getZoneStyle(this.setting.widthPer),height:this.getZoneStyle(this.setting.heightPer)}}},methods:{getZoneStyle:function(t){return 100*(t||0)+"%"},changeInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log(22222);var e=this.index;this.$emit("changeInfo",t,e)},delItem:function(){this.$emit("removeItem",this.index)},setInfo:function(){this.$emit("setItem",this.setting,this.index)}},directives:{dragItem:{bind:function(t,e,i){var s=i.context;function a(e){console.log("dragItem mousedown"),e&&e.stopPropagation();var i=l.getOffset(t.parentNode),a=l.getPageX(e),n=l.getPageY(e),o=void 0,r=void 0;function d(e){e&&e.stopPropagation();var d=s.setting,h=l.getPageX(e)-a,v=l.getPageY(e)-n;o=l.decimalPoint(Number(v/i.height)+Number(d.topPer)),r=l.decimalPoint(Number(h/i.width)+Number(d.leftPer)),o<0&&(o=0,v=-i.height*d.topPer),r<0&&(r=0,h=-i.width*d.leftPer),o+d.heightPer>1&&(o=1-d.heightPer,v=i.height*(o-d.topPer)),r+d.widthPer>1&&(r=1-d.widthPer,h=i.width*(r-d.leftPer)),t.style.transform="translate("+h+"px, "+v+"px)"}window.addEventListener("mousemove",d,!1),window.addEventListener("mouseup",function e(i){console.log("dragItem handleMouseUp"),i&&i.stopPropagation(),o&&r&&s.changeInfo({topPer:o,leftPer:r}),t.style.transform="translate(0, 0)",window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",e)},!1)}return t.addEventListener("mousedown",a,!1),function(){t.removeEventListener("mousedown",a)}}},changeSize:{bind:function(t,e,i){var s=i.context;function a(e){console.log("changeSize mousedown");var i=e.target.dataset.pointer;if(i){e&&e.stopPropagation();var a=t.parentNode,o=s.setting,d=l.getOffset(a.parentNode),h={width:l.getOffset(a).width||0,height:l.getOffset(a).height||0,top:o.topPer*d.height||0,left:o.leftPer*d.width||0},v=l.getPageX(e),c=l.getPageY(e),g=void 0;window.addEventListener("mousemove",p,!1),window.addEventListener("mouseup",function t(e){console.log("changeSize handleMouseUp"),e&&e.stopPropagation(),g&&(g=!1,s.changeInfo({topPer:l.decimalPoint(h.top/d.height),leftPer:l.decimalPoint(h.left/d.width),widthPer:l.decimalPoint(h.width/d.width),heightPer:l.decimalPoint(h.height/d.height)}),n()(a.style,{top:h.top+"px",left:h.left+"px",width:h.width+"px",height:h.height+"px"})),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",t)},!1)}function p(t){t&&t.stopPropagation(),g=!0;var e=l.getPageX(t)-v,s=l.getPageY(t)-c;v=l.getPageX(t),c=l.getPageY(t);var o=r[i](h,e,s);h=r.dealEdgeValue(h,o,d),n()(a.style,{top:h.top+"px",left:h.left+"px",width:h.width+"px",height:h.height+"px"})}}return t.addEventListener("mousedown",a,!1),function(){t.removeEventListener("mousedown",a)}}}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"dragItem",rawName:"v-dragItem"}],staticClass:"item-wrap",style:t.styleObject},[i("div",{directives:[{name:"changeSize",rawName:"v-changeSize"}],staticClass:"item-box",on:{dblclick:function(e){return e.stopPropagation(),e.preventDefault(),t.setInfo(e)}}},[i("div",{staticClass:"item-index"},[t._v(t._s(t.index+1))]),t._v(" "),t.setting.link?i("p",{staticClass:"item-tip"},[t._v("已配置")]):t._e(),t._v(" "),i("div",{staticClass:"item-delete",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.delItem(e)}}},[t._v("X")]),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-tl",attrs:{"data-pointer":"dealTL"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-tc",attrs:{"data-pointer":"dealTC"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-tr",attrs:{"data-pointer":"dealTR"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-cl",attrs:{"data-pointer":"dealCL"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-cr",attrs:{"data-pointer":"dealCR"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-bl",attrs:{"data-pointer":"dealBL"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-bc",attrs:{"data-pointer":"dealBC"}}),t._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-br",attrs:{"data-pointer":"dealBR"}})])])},staticRenderFns:[]};var v={name:"modal",props:["modalSetting","modalIndex"],computed:{},data:function(){return{}},methods:{closeModal:function(){this.$emit("closeModal")},saveChange:function(){var t=this.$refs.newLink.value,e=Number(this.$refs.newWidthPer.value),i=Number(this.$refs.newHeightPer.value),s=Number(this.$refs.newTopPer.value),a=Number(this.$refs.newLeftPer.value);s<0&&(s=0),s+this.modalSetting.heightPer>=1&&(s=1-this.modalSetting.heightPer),a<0&&(a=0),a+this.modalSetting.leftPer>=1&&(a=1-this.modalSetting.leftPer);var n={link:t,topPer:s,leftPer:a,widthPer:e,heightPer:i};this.$emit("saveInfo",n,this.modalIndex),this.$emit("closeModal")}},directives:{}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-wrap"},[i("div",{staticClass:"mask"}),t._v(" "),i("div",{staticClass:"content"},[i("header",{staticClass:"title"},[t._v("热点编辑")]),t._v(" "),i("div",{staticClass:"modal-info"},[i("p",[t._v("自定义配置")]),t._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[t._v("跳转链接")]),t._v(" "),i("input",{ref:"newLink",attrs:{type:"text"},domProps:{value:t.modalSetting.link}})])]),t._v(" "),i("div",{staticClass:"modal-info"},[i("p",[t._v("基本信息")]),t._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[t._v("宽度")]),t._v(" "),i("input",{ref:"newWidthPer",attrs:{type:"text"},domProps:{value:t.modalSetting.widthPer}})]),t._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[t._v("高度")]),t._v(" "),i("input",{ref:"newHeightPer",attrs:{type:"text"},domProps:{value:t.modalSetting.heightPer}})]),t._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[t._v("top")]),t._v(" "),i("input",{ref:"newTopPer",attrs:{type:"text"},domProps:{value:t.modalSetting.topPer}})]),t._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[t._v("left")]),t._v(" "),i("input",{ref:"newLeftPer",attrs:{type:"text"},domProps:{value:t.modalSetting.leftPer}})])]),t._v(" "),i("div",{staticClass:"btn-wrap"},[i("span",{staticClass:"no",on:{click:t.closeModal}},[t._v("取消")]),t._v(" "),i("span",{staticClass:"yes",on:{click:t.saveChange}},[t._v("保存")])])])])},staticRenderFns:[]};var g={name:"imageMap",components:{zone:i("VU/8")(d,h,!1,function(t){i("hRZ3")},"data-v-35509e80",null).exports,modal:i("VU/8")(v,c,!1,function(t){i("vYfH")},"data-v-74188b29",null).exports},props:["image","zones","isEdit","config"],data:function(){return{showModal:!1,modalSetting:{},modalIndex:0}},methods:{addItem:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.zones.push(t),this.$emit("add",t),this.hasChange()},setItem:function(t,e){this.modalSetting=t,this.modalIndex=e,this.showModal=!0,console.log("setting",t)},closeModal:function(){this.showModal=!1},changeItem:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.zones.length-1;console.log("改变前zones",this.zones),this.$nextTick(function(){n()(t.zones[i],e)}),this.hasChange()},hasChange:function(){this.$emit("change",this.zones)},removeItem:function(t){this.zones.splice(t,1),this.$emit("remove",t),this.hasChange()},closeImgMap:function(){this.$emit("close",this.zones)},changeInfo:function(t,e){console.log("changeInfo"),this.changeItem(t,e)}},directives:{addItem:{bind:function(t,e,i){var s=i.context;function a(e){e&&e.preventDefault();var i={top:l.getDistanceY(e,t),left:l.getDistanceX(e,t),width:0,height:0},a=l.getOffset(t),o={topPer:l.decimalPoint(i.top/a.height),leftPer:l.decimalPoint(i.left/a.width),widthPer:0,heightPer:0},d=l.getPageX(e),h=l.getPageY(e);function v(e){e&&e.preventDefault();var s=l.getPageX(e)-d,o=l.getPageY(e)-h;d=l.getPageX(e),h=l.getPageY(e);var v=r.dealBR(i,s,o,0);i=r.dealEdgeValue(i,v,a),n()(t.lastElementChild.style,{top:i.top+"px",left:i.left+"px",width:i.width+"px",height:i.height+"px"})}s.addItem(o),t.addEventListener("mousemove",v),t.addEventListener("mouseup",function e(n){var o={topPer:l.decimalPoint(i.top/a.height),leftPer:l.decimalPoint(i.left/a.width),widthPer:l.decimalPoint(i.width/a.width),heightPer:l.decimalPoint(i.height/a.height)};s.changeItem(o),t.removeEventListener("mousemove",v),t.removeEventListener("mouseup",e)})}return t.addEventListener("mousedown",a),function(){t.removeEventListener("mousedown",a)}}}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.image?i("div",{staticClass:"dialog-wrap"},[i("div",{staticClass:"image-mask"}),t._v(" "),i("div",{staticClass:"image-wrap"},[i("div",{staticClass:"title"},[t._v("绘制热点")]),t._v(" "),i("div",{staticClass:"image-content"},[i("img",{staticClass:"image",attrs:{src:t.image}}),t._v(" "),i("div",{directives:[{name:"addItem",rawName:"v-addItem"}],ref:"areaWrap",staticClass:"area-wrap"},t._l(t.zones,function(e,s){return i("zone",{key:s,ref:"index",refInFor:!0,staticClass:"area-item",attrs:{isEdit:t.isEdit,config:t.config,index:s,setting:t.zones[s]},on:{removeItem:t.removeItem,changeInfo:t.changeInfo,setItem:t.setItem}})}))]),t._v(" "),i("div",{staticClass:"image-close"},[i("span",{on:{click:t.closeImgMap}},[t._v("关闭")])]),t._v(" "),t.showModal?i("modal",{attrs:{modalSetting:t.modalSetting,modalIndex:t.modalIndex},on:{closeModal:t.closeModal,saveInfo:t.changeInfo}}):t._e()],1)]):t._e()},staticRenderFns:[]};var u={name:"imageDemo",components:{imageMap:i("VU/8")(g,p,!1,function(t){i("gk0N")},"data-v-659dd6c9",null).exports},data:function(){return{imgList:[],image:"",zones:[{topPer:.3076,leftPer:.1777,widthPer:.1521,heightPer:.3559,link:"http://m.beibei.com"}]}},methods:{fileClick:function(){document.getElementById("upload_file").click()},fileChange:function(t){t.target.files[0].size&&(this.fileList(t.target),t.target.value="")},fileList:function(t){console.log("fileList.files",t.files);for(var e=t.files,i=0;i<e.length;i++)console.log(e[i].type),""!=e[i].type?this.fileAdd(e[i]):alert("不支持上传文件夹格式")},fileAdd:function(t){var e=new FileReader,i=new Image,s=this;e.readAsDataURL(t),e.onload=function(){t.src=this.result,i.onload=function(){var e=i.width,a=i.height;t.width=e,t.height=a,s.imgList.push({file:t}),console.log(s.imgList)},i.src=t.src}},fileDel:function(t){this.imgList.splice(t,1)},doImgMap:function(t){this.image=t},uploadFilds:function(t){return BaseService.post("http://www.xiaohuangren.top:3003/uploads",t)},add:function(t){console.log("成功添加热区：",t)},change:function(t){console.log("热区发生变化：",t)},remove:function(t){console.log("成功删除热区：",t)},close:function(t){this.image=""}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"upload_warp_left",on:{click:t.fileClick}},[t._v("\n    点击上传\n  ")]),t._v(" "),i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"upload_file",multiple:""},on:{change:function(e){t.fileChange(e)}}}),t._v(" "),0!=t.imgList.length?i("div",{staticClass:"upload_warp_img"},t._l(t.imgList,function(e,s){return i("div",{key:s,staticClass:"upload_warp_img_div"},[i("img",{staticClass:"img-del",attrs:{src:"http://h0.hucdn.com/open/201843/78fd74d6f6b33cb1_40x40.png"},on:{click:function(e){t.fileDel(s)}}}),t._v(" "),i("img",{staticClass:"small-img",attrs:{src:e.file.src}}),t._v(" "),i("div",{staticClass:"img-map-text",on:{click:function(i){t.doImgMap(e.file.src)}}},[t._v("点击绘制热点")])])})):t._e(),t._v(" "),this.image?i("image-map",{staticClass:"img-map-contain",attrs:{image:t.image,zones:t.zones},on:{add:t.add,change:t.change,remove:t.remove,close:t.close}}):t._e()],1)},staticRenderFns:[]};var m={name:"App",components:{imageDemo:i("VU/8")(u,_,!1,function(t){i("AwOr")},null,null).exports},data:function(){return{showCode:!1}},methods:{doShowCode:function(){this.showCode=!0},doHideCode:function(){this.showCode=!1}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",[t._v("组件使用说明文档")]),t._v(" "),i("div",{staticClass:"wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"use-wrap"},[i("p",{staticClass:"tip"},[t._v("基本用法")]),t._v(" "),i("p",{staticClass:"text"},[t._v("绘制图片热区")]),t._v(" "),i("a",{staticClass:"text",attrs:{target:"_blank",href:"https://cwwj1.github.io/vue-imagemap/"}},[t._v("在线运行，点击查看")]),t._v(" "),i("div",{staticClass:"description"},[t._v("\n          demo效果增加图片上传功能，开发者可自定义组合组件使用\n        ")]),t._v(" "),i("div",{staticClass:"demo-wrap"},[i("image-demo",{staticClass:"image-demo"}),t._v(" "),t.showCode?i("div",{staticClass:"code-wrap"},[t._m(1)]):t._e(),t._v(" "),i("div",{staticClass:"demo-block-control"},[t.showCode?i("span",{on:{click:t.doHideCode}},[t._v("隐藏代码")]):t._e(),t._v(" "),t.showCode?t._e():i("span",{on:{click:t.doShowCode}},[t._v("显示代码")])])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components"},[e("a",[this._v("图片热区组件")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",[t._v("              "),i("code",{staticClass:"hljs"},[t._v("\n                "),i("span",{staticClass:"hljs"},[t._v("\n\n                  "),i("span",{staticClass:"hljs-tag"},[t._v("<"),i("span",{staticClass:"hljs-name"},[t._v("image-map")]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"image-map-demo"')]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v(":image")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"image"')]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v(":zones")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"zones"')]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v("@add")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"add"')]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"change"')]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v("@remove")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"remove"')]),t._v("\n                    "),i("span",{staticClass:"hljs-attr"},[t._v("@close")]),t._v("="),i("span",{staticClass:"hljs-string"},[t._v('"close"')]),t._v(">\n                  ")]),t._v("\n                  "),i("span",{staticClass:"hljs-tag"},[t._v("</"),i("span",{staticClass:"hljs-name"},[t._v("image-map")]),t._v(">")]),t._v("\n\n                  "),i("span",{staticClass:"hljs-tag"},[t._v("<"),i("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n                  "),i("span",{staticClass:"javascript"},[t._v("\n                    "),i("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),i("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n                      data() {\n                        "),i("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                          "),i("span",{staticClass:"hljs-attr"},[t._v("zones")]),t._v(": \n                          [{"),i("span",{staticClass:"hljs-attr"},[t._v("topPer")]),t._v(": "),i("span",{staticClass:"hljs-string"},[t._v("0.3076")]),t._v(", \n                          "),i("span",{staticClass:"hljs-attr"},[t._v("leftPer")]),t._v(": "),i("span",{staticClass:"hljs-string"},[t._v("0.1777")]),t._v(", \n                          "),i("span",{staticClass:"hljs-attr"},[t._v("widthPer")]),t._v(": "),i("span",{staticClass:"hljs-string"},[t._v("0.1521")]),t._v(", \n                          "),i("span",{staticClass:"hljs-attr"},[t._v("heightPer")]),t._v(": "),i("span",{staticClass:"hljs-string"},[t._v("0.3559")]),t._v(", \n                          "),i("span",{staticClass:"hljs-attr"},[t._v("link")]),t._v(": "),i("span",{staticClass:"hljs-string"},[t._v('"http://m.beibei.com"')]),t._v("}],\n\n                          "),i("span",{staticClass:"hljs-attr"},[t._v("image")]),t._v(": "),i("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n                        };\n                      },\n                      "),i("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n                        add(zone) {\n                          "),i("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log('成功添加热区：', zone);\n                        },\n                        remove(index) {\n                          "),i("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log('成功删除热区：', index);\n                        },\n                        change(zones) {\n                          "),i("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log('热区发生变化：', zones);\n                        },\n                        close(zones) {\n                          \n                        }\n                      }\n                    }\n                  ")]),t._v("\n\n                  "),i("span",{staticClass:"hljs-tag"},[t._v("</"),i("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n                ")]),t._v("\n              ")]),t._v("\n            ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"attribute-wrap table-wrap"},[i("p",{staticClass:"tip"},[t._v("Attribute")]),t._v(" "),i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",[t._v("参数")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("可选值")]),t._v(" "),i("th",[t._v("默认值")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("image")]),t._v(" "),i("td",[t._v("必填参数，图片地址")]),t._v(" "),i("td",[t._v("string")]),t._v(" "),i("td",[t._v("-")]),t._v(" "),i("td",[t._v("-")])]),t._v(" "),i("tr",[i("td",[t._v("zones")]),t._v(" "),i("td",[t._v("选填参数，默认热区")]),t._v(" "),i("td",[t._v("array")]),t._v(" "),i("td",[t._v("-")]),t._v(" "),i("td",[t._v("-")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"methods-wrap table-wrap"},[i("p",{staticClass:"tip"},[t._v("Events")]),t._v(" "),i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",[t._v("事件名称")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("回调参数")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("add")]),t._v(" "),i("td",[t._v("新增热区时触发的事件")]),t._v(" "),i("td",[t._v("zone(新增的热区信息)")])]),t._v(" "),i("tr",[i("td",[t._v("change")]),t._v(" "),i("td",[t._v("热区变化时触发的事件")]),t._v(" "),i("td",[t._v("zones(变化后的热区信息)")])]),t._v(" "),i("tr",[i("td",[t._v("remove")]),t._v(" "),i("td",[t._v("删除热区时触发的事件")]),t._v(" "),i("td",[t._v("index(删除热区的index)")])]),t._v(" "),i("tr",[i("td",[t._v("close")]),t._v(" "),i("td",[t._v("取消绘制热区时触发的事件")]),t._v(" "),i("td",[t._v("zones(热区信息)")])])])])])}]};var w=i("VU/8")(m,f,!1,function(t){i("Ljq2")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:w},template:"<App/>"})},gk0N:function(t,e){},hRZ3:function(t,e){},vYfH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.366f260c2c3cbe7ea9c9.js.map