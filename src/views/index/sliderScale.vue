<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">滑块控制缩放</h3>
                <div class="slider-scale-box">
                    <div class="slider-scale-l">
                        <el-slider
                            v-model="scaleValue"
                            vertical
                            :max="2"
                            :min="0.1"
                            :step="0.1"
                            :show-tooltip="true"
                            height="200px"
                        >
                        </el-slider>
                    </div>
                    <div class="slider-scale-r">
                        <!-- <div class="slider-scale-div" :style="{transform:'scale('+scaleValue+')'}"></div> -->
                        <div class="slider-scale-div" :style="{width:scaleValue*300+'px', height:scaleValue*400+'px'}"></div>
                    </div>
                </div>
            </section>

        </div>
    </article>
</template>
<script>
    export default {
        name: "Tinymce",
        data() {
            return {
                loading: false,
                scaleValue: 1
            };
        },
        mounted(){
            
        },
        methods: {
            
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


    .slider-scale-box{
        @include clearfix;
    }
    .slider-scale-l{
        float: left;
    }
    .slider-scale-r{
        margin-left: 60px;
    }
    .slider-scale-div{
        width: 300px;
        height: 400px;
        background-color: #f00;
        transform-origin: top center;
        margin: 0 auto;
    }
</style>
