<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">css3 环形倒计时</h3>
                <div class="sector">
                    <div class="sector-bg"> </div>
                    <div class="sector-pie sector-pie1" :style="{transform:'rotateZ('+ pie1Rotate +'deg)'}"></div>
                    <div class="sector-pie sector-pie2" :style="{transform:'rotateZ('+ pie2Rotate +'deg)','background-color':pie2Color}"></div>
                    <p class="sector-time">{{ Math.floor(timer2) }}</p>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">css3 鼠标悬停效果</h3>
                <ul class="card-list clearfix">
                    <li class="card-item">
                        111111111111111
                    </li>
                    <li class="card-item">
                        222222222222222
                    </li>
                    <li class="card-item">
                        333333333333333
                    </li>
                    <li class="card-item">
                        444444444444444
                    </li>
                    <li class="card-item">
                        555555555555555
                    </li>
                    <li class="card-item">
                        666666666666666
                    </li>
                </ul>
            </section>

        </div>
    </article>
</template>
<script>
    export default {
        name: "sectorCss3",
        data() {
            return {
                loading: false,
                /**
                 * 环形倒计时
                 */
                timer1: 360,
                timer2: 360,
                pie1Rotate: 0,
                pie2Rotate: 0,
                pie2Color: '#e45534'
            };
        },

        mounted(){
            let timer = setInterval( ()=>{
                if( this.timer2 <= 0 ){
                    clearInterval( timer );
                    return;
                }
                this.timer2 = this.timer2 - 0.1;
                this.sectorDraw(this.timer1,this.timer2);
            }, 100);
        },
        methods: {
            /**
             * 扇形倒计时
             */
            sectorDraw(time1,time2){
                let time = (time1 -time2)/time1 * 360;
                if(time<180){
                    this.pie1Rotate = time;
                    this.pie2Color = '#e45534';
                }else if(time<360){
                    this.pie1Rotate = 180;
                    this.pie2Rotate = time;
                    this.pie2Color = '#d13c36';
                }else{
                    this.pie2Rotate = 360;
                }
            }
        }
    };
</script>
<style scoped lang="scss">
    #wrapper{
        background-color: transparent;
    }
    .section-breadcrumb{
        margin-bottom: 20px;
    }
    .section + .section{
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
    /**
     * 环形倒计时
     */
    .sector{
        @include square(220px);
        position: relative;
        overflow: hidden;
    }
    .sector-bg{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #d13c36;
    }
    .sector-pie{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .sector-pie1 {
        clip: rect(0px, 220px, 220px, 110px);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        background-color: #e45534;
    }
    .sector-pie2 {
        clip: rect(0px, 110px, 220px, 0px);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        background-color: #e45534;
    }
    .sector-time{
        @include radius(180px);
        background-color: #fff;
        position: absolute;
        left: 20px;
        top: 20px;
        text-align: center;
        line-height: 180px;
        font-size: 22px;
    }
    /**
     * css 鼠标悬停效果
     */
    .card-list {
        border-left: 1px solid #eee;
        border-top: 1px solid #eee;
        
    }
    .card-item {
        width: 33.333333333333333%;
        padding: 60px 0;
        float: left;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-left: -1px;
        text-align: center;
        transition: all .5s;
    }
    .card-item:hover {
        box-shadow: rgba(1,130,150,.2) 0 0 30px
    }
</style>