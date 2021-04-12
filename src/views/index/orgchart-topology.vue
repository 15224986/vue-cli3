<template>
    <div class="topology-section" id="neu-topology">
        <ul class="topology-left">
            <li v-for="(item, index) in leftList" :key="index" :id="item.id">{{item.name}}</li>
        </ul>
        <ul class="topology-right">
            <li v-for="(item, index) in rightList" :key="index" :id="item.id" class="topology-right-list">{{item.name}}</li>
        </ul>
        <div class="neu-topology-lines">

        </div>
    </div>
</template>
<script>
    export default {
        name: "jQuery",
        data() {
            return {
                loading: false,
                /**
                 * 拖动节点的数据
                 */
                leftList:[
                    {
                        id: 'left1',
                        name: 'left1',
                        targetRef: 'right6'
                    },
                    {
                        id: 'left2',
                        name: 'left2',
                        targetRef: ''
                    },
                    {
                        id: 'left3',
                        name: 'left3',
                        targetRef: ''
                    },
                    {
                        id: 'left4',
                        name: 'left4',
                        targetRef: ''
                    },
                    {
                        id: 'left5',
                        name: 'left5',
                        targetRef: ''
                    },
                    {
                        id: 'left6',
                        name: 'left6',
                        targetRef: 'right4'
                    }
                ],
                rightList:[
                    {
                        id: 'right1',
                        name: 'right1',
                        targetRef: ''
                    },
                    {
                        id: 'right2',
                        name: 'right2',
                        targetRef: ''
                    },
                    {
                        id: 'right3',
                        name: 'right3',
                        targetRef: ''
                    },
                    {
                        id: 'right4',
                        name: 'right4',
                        targetRef: ''
                    },
                    {
                        id: 'right5',
                        name: 'right5',
                        targetRef: 'left2'
                    },
                    {
                        id: 'right6',
                        name: 'right6',
                        targetRef: ''
                    }
                ],
                lineList:[
                    {
                        id: "",
                        name: "",
                        sourceRef: "",
                        targetRef: ""
                    }
                ]
            };
        },
        computed: {

        },
        mounted(){
            this.$nextTick(()=>{
                this.inintLine();
                this.bindEvents();
            })
        },
        methods:{
            bindEvents(){
                let self = this;

                $(document).on('mousedown.drag', '.topology-left li', function(e) {
                    e.stopPropagation();
                    $("#drag-dot").remove();
                    var $this = $(this),
                        id = $this.attr("id"),
                        isDown = false;
                    let lineStart =`<span class="neu-start-dot" style="top: ${e.clientY-4}px;left:${e.clientX}px;" id="drag-dot"></span>`
                    $("#neu-topology").append(lineStart);
                    self.makeDragLine( $("#"+id), $("#drag-dot") )
                    //开关打开
                    isDown = true;
                    //鼠标移动
                    window.onmousemove = function(e) {
                        if (isDown == false) {
                            return;
                        }

                        /**
                         * 临时结束点的位置
                         */
                        let startLeft = $("#"+id).offset().left + $("#"+id).outerWidth() + 10;
                        let minuend = 4;
                        if(e.clientX<startLeft){
                            minuend = -4;
                        }
                        console.log(minuend)
                        $("#drag-dot").css({
                            top: e.clientY-4,
                            left: e.clientX-minuend
                        });

                        self.makeDragLine( $("#"+id), $("#drag-dot"), $("#make-drag-line .neu-topology-line-drag-course") )
                        $(".drag-active").removeClass("drag-active")
                        if( $(e.target).hasClass('topology-right-list') ){
                            $(e.target).addClass('drag-active');
                        }

                    }
                    //鼠标抬起事件
                    window.onmouseup = function(e) {
                        let id2 = $(".drag-active").attr("id")
                        if( id2 ){
                            self.makeLinkLine( $("#"+id), $("#"+id2) )
                        }
                        $(".drag-active").removeClass("drag-active")
                        $("#drag-dot").remove()
                        $("#make-drag-line").remove()
                        //开关关闭
                        isDown = false;
                    }
                });



            },


            inintLine(){
                this.leftList.forEach(item=>{
                    if( item.targetRef ){
                        this.makeLinkLine( $("#"+item.id), $("#"+item.targetRef) )
                    }
                })
            },


            makeDragLine(ele1, ele2, $line){
                /**
                 * 获取初始化位置
                 */
                let offsetL = $("#neu-topology").offset().left,
                    offsetT = $("#neu-topology").offset().top;
                /**
                 * 获取两个dom的信息
                 */
                let	ele1Left = ele1.offset().left - offsetL + ele1.outerWidth() + 10,
                    ele1Top = ele1.offset().top - offsetT + 20,
                    ele2Left = ele2.offset().left - offsetL,
                    ele2Top = ele2.offset().top - offsetT;

                /**
                 * 计算线的长度和旋转角度
                 */
                var line1 = Math.abs(ele1Left - ele2Left),
                    line2 = Math.abs(ele1Top - ele2Top),
                    _height = Math.sqrt(line1 * line1 + line2 * line2);
                var angle;
                if(ele1Top < ele2Top) {
                    //上到下
                    if(ele1Left > ele2Left) {
                        angle = Math.asin(line1 / _height) * 180 / Math.PI;
                    } else {
                        angle = -Math.asin(line1 / _height) * 180 / Math.PI;
                    }
                } else {
                    //下到上
                    if(ele1Left > ele2Left) {
                        var tp = (Math.asin(line1 / _height) * 180 / Math.PI);
                        angle = (90 - tp) * 2 + tp
                    } else {
                        var tp = Math.asin(line1 / _height) * 180 / Math.PI;
                        angle = -((90 - tp) * 2 + tp)
                    }
                }

                if( $line ){
                    $line.css({
                        "height": _height,
                        "left": ele1Left,
                        "top": ele1Top,
                        "transform": "rotateZ(" + angle + "deg)"
                    });
                }else{
                    var $wantLine = `
                        <div class="neu-topology-drag-line" id="make-drag-line">
                            <span style="left: ${ele1Left-10}px; top: ${ele1Top}px;" class="neu-topology-line-drag-start"></span>
                            <span style="height: ${_height}px; left: ${ele1Left+1}px; top: ${ele1Top}px; transform: rotateZ(${angle}deg);" class="neu-topology-line-drag-course"><i></i></span>
                        </div>
                    `
                    $(".neu-topology-lines").append($wantLine);
                }
            },
            /**
             * 两点之间连线
             *
             */
            makeLinkLine(ele1, ele2, $line) {
                /**
                 * 获取初始化位置
                 */
                let offsetL = $("#neu-topology").offset().left,
                    offsetT = $("#neu-topology").offset().top;
                /**
                 * 获取两个dom的信息
                 */
                let	ele1Left = ele1.offset().left - offsetL + ele1.outerWidth() + 10,
                    ele1Top = ele1.offset().top - offsetT + 20,
                    ele2Left = ele2.offset().left - offsetL - 10,
                    ele2Top = ele2.offset().top - offsetT + 20;
                /**
                 * 计算线的长度和旋转角度
                 */
                var line1 = Math.abs(ele1Left - ele2Left),
                    line2 = Math.abs(ele1Top - ele2Top),
                    _height = Math.sqrt(line1 * line1 + line2 * line2);
                var angle;
                if(ele1Top < ele2Top) {
                    //上到下
                    if(ele1Left > ele2Left) {
                        angle = Math.asin(line1 / _height) * 180 / Math.PI;
                    } else {
                        angle = -Math.asin(line1 / _height) * 180 / Math.PI;
                    }
                } else {
                    //下到上
                    if(ele1Left > ele2Left) {
                        var tp = (Math.asin(line1 / _height) * 180 / Math.PI);
                        angle = (90 - tp) * 2 + tp
                    } else {
                        var tp = Math.asin(line1 / _height) * 180 / Math.PI;
                        angle = -((90 - tp) * 2 + tp)
                    }
                }
                if( $line ){
                    $line.css({
                        "height": _height,
                        "left": ele1Left,
                        "top": ele1Top,
                        "transform": "rotateZ(" + angle + "deg)"
                    });
                }else{
                    let id1 = ele1.attr('id'),
                        id2 = ele2.attr('id');
                    var $wantLine = `
                        <div class="neu-topology-line" id="${id1 + '-' + id2}" sourceRef="${id1}" targetRef="${id2}">
                            <span style="left: ${ele1Left-10}px; top: ${ele1Top}px;" class="neu-topology-line-start"></span>
                            <span style="height: ${_height}px; left: ${ele1Left+1}px; top: ${ele1Top}px; transform: rotateZ(${angle}deg);" class="neu-topology-line-course"></span>
                            <span style="left: ${ele2Left}px; top: ${ele2Top}px;" class="neu-topology-line-end"><i></i></span>
                        </div>
                    `
                    $(".neu-topology-lines").append($wantLine);
                }

            }

        }
    };
</script>
<style lang="scss">
    .topology-section{
        height: 680px;
        position: relative;
    }
    .topology-left{
        width: 226px;
        margin: 60px 0 0 200px;
        float: left;
        li{
            padding: 4px 20px;
            line-height: 32px;
            border: #CCCCCC 1px solid;
            user-select: none;
            + li{
                margin-top: -1px;
            }
        }
    }
    .topology-right{
        width: 226px;
        margin: 60px 0 0 400px;
        float: left;
        li{
            padding: 4px 20px;
            line-height: 32px;
            border: #CCCCCC 1px solid;
            user-select: none;
            + li{
                margin-top: -1px;
            }
        }
    }
    .neu-topology-line{
        > span{
            display: block;
            position: absolute;
            background-color: #0eb2ee;
            z-index: 9;
        }
        .neu-topology-line-start{
            width: 10px;
            height: 1px;
        }
        .neu-topology-line-course{
            width: 1px;
            transform-origin: 0 1px;
        }
        .neu-topology-line-end{
            width: 10px;
            height: 1px;
            color: #0eb2ee;
            i{
                display: inline-block;
                @include caret(left, 5px);
                position: absolute;
                left: 5px;
                top: -5px;
            }
        }
    }
    .neu-topology-drag-line{
        > span{
            display: block;
            position: absolute;
            background-color: #0eb2ee;
            z-index: 9;
        }
        .neu-topology-line-drag-start{
            width: 10px;
            height: 1px;
        }
        .neu-topology-line-drag-course{
            width: 1px;
            transform-origin: 0 1px;
            color: #0eb2ee;
            i{
                display: inline-block;
                @include caret(top, 5px);
                position: absolute;
                left: -5px;
                top: calc(100% - 1px);
            }
        }
    }
    .neu-start-dot{
        display: block;
        position: fixed;
        // width: 3px;
        // height: 3px;
        // background-color: #FF0000;
    }
</style>
