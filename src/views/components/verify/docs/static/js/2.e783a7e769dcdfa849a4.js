webpackJsonp([2],{"5NyI":function(t,e){},"9MXG":function(t,e,s){t.exports=s.p+"static/img/111.22e0821.jpg"},LQH7:function(t,e){},bNlm:function(t,e){},h0E3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("nJP2"),a=s.n(i),r=s("jM+Y"),n=s.n(r),o=s("ovIp"),l=s.n(o),c=s("9MXG"),d=s.n(c),h=s("J2gd"),u=s("xjzS"),g={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过"},failTip:{type:String,default:"验证失败"},diffDegree:{type:Number,default:10},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270}},mounted:function(){var t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{left:"0px",width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",height:this.width+"px",position:"relative",overflow:"hidden","border-radius":"50%"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}},factor:function(){return this.minDegree==this.maxDegree?Math.floor(1+6*Math.random())/10+1:1}},data:function(){return{isMoving:!1,x:0,isOk:!1,showBar:!1,showErrorTip:!1,ranRotate:0,cRotate:0,imgStyle:{}}},methods:{checkimgLoaded:function(){var t=this.minDegree,e=this.maxDegree,s=Math.floor(t+Math.random()*(e-t));this.ranRotate=s,console.log("旋转"+s),this.imgStyle={transform:"rotateZ("+s+"deg)"}},dragStart:function(t){if(!this.isPassing){this.isMoving=!0;var e=this.$refs.handler;this.x=(t.pageX||t.touches[0].pageX)-parseInt(e.style.left.replace("px",""),10)}this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var e=(t.pageX||t.touches[0].pageX)-this.x;console.log(e,"_x"),this.$refs.handler.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px";var s=Math.ceil(e/(this.width-this.height)*this.maxDegree*this.factor);console.log(s,"cRotate"),this.cRotate=s;var i=this.ranRotate-s;this.imgStyle={transform:"rotateZ("+i+"deg)"}}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){if(Math.abs(this.ranRotate-this.cRotate)>this.diffDegree){this.isOk=!0,this.imgStyle={transform:"rotateZ("+this.ranRotate+"deg)"};var e=this;setTimeout(function(){e.$refs.handler.style.left="0",e.$refs.progressBar.style.width="0",e.isOk=!1},500),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);var t=this.$options.data();for(var e in t)t.hasOwnProperty(e)&&this.$set(this,e,t[e]);var s=this.$refs.handler,i=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drag-verify-container"},[s("div",{style:t.dragVerifyImgStyle},[s("img",{ref:"checkImg",staticClass:"check-img",class:{goOrigin:t.isOk},style:t.imgStyle,attrs:{src:t.imgsrc,alt:""},on:{load:t.checkimgLoaded}}),t._v(" "),t.showTips&&t.isPassing?s("div",{staticClass:"tips success"},[t._v(t._s(t.successTip))]):t._e(),t._v(" "),t.showTips&&!t.isPassing&&t.showErrorTip?s("div",{staticClass:"tips danger"},[t._v(t._s(t.failTip))]):t._e()]),t._v(" "),s("div",{ref:"dragVerify",staticClass:"drag_verify",style:t.dragVerifyStyle,on:{mousemove:t.dragMoving,mouseup:t.dragFinish,mouseleave:t.dragFinish,touchmove:t.dragMoving,touchend:t.dragFinish}},[s("div",{ref:"progressBar",staticClass:"dv_progress_bar",class:{goFirst2:t.isOk},style:t.progressBarStyle},[t._v("\r\n      "+t._s(t.successMessage)+"\r\n    ")]),t._v(" "),s("div",{ref:"message",staticClass:"dv_text",style:t.textStyle},[t._v("\r\n      "+t._s(t.message)+"\r\n    ")]),t._v(" "),s("div",{ref:"handler",staticClass:"dv_handler dv_handler_bg",class:{goFirst:t.isOk},style:t.handlerStyle,on:{mousedown:t.dragStart,touchstart:t.dragStart}},[s("i",{class:t.handlerIcon})])])])},staticRenderFns:[]};var f=s("VU/8")(g,p,!1,function(t){s("bNlm"),s("LQH7")},"data-v-820af998",null).exports,m=s("qgrf"),v={name:"DragImgComponentApi",components:{LComponentNote:h.a,LComponentDemo:u.a,dragVerifyImgRotate:f,menus:m.a},methods:{reset:function(){this.$refs.sss.reset()},reimg:function(){var t=Math.random();this.t3=t<.3?l.a:t<.6?a.a:n.a},pass:function(){alert("验证通过")},passcallback:function(){this.$message({message:"验证通过",type:"success"})},passcallback2:function(){this.$message({message:"验证通过,插槽消失",type:"success"})},passcallback3:function(){this.$message({message:"验证通过",type:"success"})}},data:function(){return{logo:d.a,t2:a.a,t3:n.a,t4:l.a,isPassing:!1,buttonCode1:'<el-row>\n  <drag-verify-img \n    ref="sss"\n    :imgsrc="t3"\n    :isPassing.sync="isPassing"\n    text="请按住滑块拖动"\n    successText="验证通过"\n    handlerIcon="el-icon-d-arrow-right"\n    successIcon="el-icon-circle-check"\n    @refresh="reimg"\n    @passcallback="pass"\n  >\n  </drag-verify-img>\n  <el-button type="primary" @click="reset">还原</el-button>\n</el-row>\n',columnData1:[{prop:"attribute",label:"参数",width:"120"},{prop:"desc",label:"说明",width:"200"},{prop:"type",label:"类型",width:"80"},{prop:"value",label:"可选值"},{prop:"default",label:"默认值",width:"200"}],tableData1:[{attribute:"width",desc:"宽度",type:"number",value:"-",default:"250"},{attribute:"height",desc:"高度",type:"number",value:"-",default:"40"},{attribute:"text",desc:"初始文字",type:"string",value:"-",default:"swiping to the right side"},{attribute:"successText",desc:"成功提示文字",type:"string",value:"-",default:"success"},{attribute:"background",desc:"滑块右侧背景色",type:"string",value:"#eee / red / rgba(52,52,52,0.7)",default:"#eee"},{attribute:"progressBarBg",desc:"滑块左侧背景色",type:"string",value:"#76c61d / white / rgba(52,52,52,0.7)",default:"#76c61d"},{attribute:"handlerBg",desc:"滑块背景色",type:"string",value:"#fff / white / rgb(255,255,255)",default:"#fff"},{attribute:"completedBg",desc:"验证通过背景色",type:"string",value:"#76c61d / white / rgba(52,52,52,0.7)",default:"#76c61d"},{attribute:"circle",desc:"两侧是否圆形",type:"boolean",value:"true / false",default:"false"},{attribute:"radius",desc:"圆角",type:"string",value:"4px / 4%",default:"4px"},{attribute:"handlerIcon",desc:"滑块未验证通过时的图标,根据所选框架设置不同class",type:"string",value:"el-icon-d-arrow-right",default:"-"},{attribute:"successIcon",desc:"滑块验证通过时的图标,根据所选框架设置不同class",type:"string",value:"el-icon-circle-check",default:"-"},{attribute:"textSize",desc:"文字大小",type:"string",value:"14px / 4em",default:"14px"},{attribute:"textColor",desc:"文字颜色",type:"string",value:"#333 / gray / rgb(52,52,52)",default:"#333"},{attribute:"imgsrc",desc:"图片地址",type:"string",value:"-",default:"-"},{attribute:"showTips",desc:"是否显示底部提示",type:"boolean",value:"true / false",default:"true"},{attribute:"successTip",desc:"底部验证通过提示",type:"string",value:"验证通过",default:"验证通过"},{attribute:"failTip",desc:"底部验证失败提示",type:"string",value:"验证失败",default:"验证失败"},{attribute:"diffDegree",desc:"在此范围内松开计算验证成功(单位°)",type:"number",value:"10",default:"10"},{attribute:"minDegree",desc:"最小旋转角度",type:"number",value:"90",default:"90"},{attribute:"maxDegree",desc:"最大旋转角度(大小旋转角度相同时可指定旋转角度)",type:"number",value:"200",default:"270"}],columnData3:[{prop:"方法名",label:"方法名",width:"120"},{prop:"说明",label:"说明"},{prop:"参数",label:"参数",width:"120"}],tableData3:[{"方法名":"reset","说明":"还原未验证通过时的状态","参数":"-"}],columnData4:[{prop:"方法名",label:"方法名",width:"120"},{prop:"说明",label:"说明"},{prop:"参数",label:"参数",width:"120"}],tableData4:[{"方法名":"passcallback","说明":"验证通过回调","参数":"-"}]}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{staticClass:"main"},[s("menus",{attrs:{index:4}}),t._v(" "),s("el-col",{staticClass:"title",attrs:{span:24}},[t._v("图片旋转滑块验证")]),t._v(" "),s("el-col",{staticClass:"subtitle",attrs:{span:24}},[t._v("基于vue-drag-verify二次开发的vue组件。需对父元素或html设置"),s("b",[t._v("user-select: none")])]),t._v(" "),s("el-col",{attrs:{span:24}},[s("l-component-demo",{attrs:{title:"基础用法",subtitle:"基础的滑块用法。",code:t.buttonCode1}},[s("div",{attrs:{slot:"source"},slot:"source"},[s("el-row",{staticStyle:{"text-align":"center"}},[s("drag-verify-img-rotate",{ref:"sss",attrs:{imgsrc:t.logo,isPassing:t.isPassing,showTips:!0,text:"请按住滑块拖动",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},on:{"update:isPassing":function(e){t.isPassing=e},"update:is-passing":function(e){t.isPassing=e},refresh:t.reimg}}),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("还原")])],1)],1),t._v(" "),s("div",{attrs:{slot:"description"},slot:"description"},[t._v("\n          使用"),s("code",[t._v("width")]),t._v("、"),s("code",[t._v("height")]),t._v("、"),s("code",[t._v("text")]),t._v("、"),s("code",[t._v("background")]),t._v("和"),s("code",[t._v("textColor")]),t._v("等属性调整组件。\n        ")])])],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("l-component-note",{attrs:{title:"Attributes",columnData:t.columnData1,tableData:t.tableData1}})],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("l-component-note",{attrs:{title:"Methods",columnData:t.columnData3,tableData:t.tableData3}})],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("l-component-note",{attrs:{title:"Events",columnData:t.columnData4,tableData:t.tableData4}})],1)],1)],1)},staticRenderFns:[]};var b={name:"DragVerifyImg",data:function(){return{msg:""}},components:{DragImgRotateComponentApi:s("VU/8")(v,y,!1,function(t){s("lIbB")},"data-v-0006f2fa",null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row",{attrs:{gutter:20}},[e("drag-img-rotate-component-api")],1),this._v(" "),e("el-backtop")],1)},staticRenderFns:[]};var w=s("VU/8")(b,x,!1,function(t){s("5NyI")},"data-v-1e8b72ef",null);e.default=w.exports},lIbB:function(t,e){}});