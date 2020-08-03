<template>
    <article id="page-bodier">
        <aside id="sidebar">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
            >
                <el-menu-item index="/home/elementCustomParams">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Element 自定义参数</span>
                </el-menu-item>

                <el-menu-item index="/home/jQuery">
                    <i class="el-icon-menu"></i>
                    <el-tooltip slot="title" content="jQuery 全局引用，Array、String 原型链添加方法" placement="right">
                        <span>jQuery、Array、String</span>
                    </el-tooltip>
                </el-menu-item>

                <el-menu-item index="/home/anchor">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Anchor锚点、Affix图钉</span>
                </el-menu-item>

                <el-menu-item index="/home/verify">
                    <i class="el-icon-menu"></i>
                    <span slot="title">验证码</span>
                </el-menu-item>

                <el-menu-item index="/home/directiveFilters">
                    <i class="el-icon-menu"></i>
                    <span slot="title">全局指令、过滤器、工具</span>
                </el-menu-item>

                <el-menu-item index="/home/orgchart">
                    <i class="el-icon-menu"></i>
                    <span slot="title">orgchart组织架构图</span>
                </el-menu-item>

                <el-menu-item index="/home/tinymce">
                    <i class="el-icon-menu"></i>
                    <span slot="title">tinymce5富文本编辑器</span>
                </el-menu-item>

                <el-menu-item index="/home/sector">
                    <i class="el-icon-menu"></i>
                    <span slot="title">css3 效果</span>
                </el-menu-item>

                <el-menu-item index="/home/syncModel">
                    <i class="el-icon-menu"></i>
                    <span slot="title">数据的双向传递</span>
                </el-menu-item>

                <el-menu-item index="/home/multilayerNesting">
                    <i class="el-icon-menu"></i>
                    <el-tooltip slot="title" content="Vue多层嵌套、utils公共方法" placement="right">
                        <span>Vue多层嵌套、utils公共方法</span>
                    </el-tooltip>
                </el-menu-item>

                <el-menu-item index="/home/selectRelevant">
                    <i class="el-icon-menu"></i>
                    <span slot="title">select全选、联动</span>
                </el-menu-item>

                <el-menu-item index="/home/complexData">
                    <i class="el-icon-menu"></i>
                    <span slot="title">js复杂数据类型的深层复制</span>
                </el-menu-item>

                <el-menu-item index="/home/transferSearch">
                    <i class="el-icon-menu"></i>
                    <el-tooltip slot="title" content="穿梭框自定义搜索、图片放大" placement="right">
                        <span>穿梭框自定义搜索、图片放大</span>
                    </el-tooltip>
                </el-menu-item>

                <el-menu-item index="/home/requiredType">
                    <i class="el-icon-menu"></i>
                    <span slot="title">切换必填状态</span>
                </el-menu-item>

                <el-menu-item index="/home/fuzzySearch">
                    <i class="el-icon-menu"></i>
                    <span slot="title">模糊搜索、文字滚动</span>
                </el-menu-item>

                <el-menu-item index="/home/tableRelevant">
                    <i class="el-icon-menu"></i>
                    <span slot="title">table相关</span>
                </el-menu-item>

                <el-menu-item index="/home/exportExcel">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导出excel</span>
                </el-menu-item>

                <el-menu-item index="/home/sortablejs">
                    <i class="el-icon-menu"></i>
                    <span slot="title">拖拽排序</span>
                </el-menu-item>

                <el-menu-item index="/home/draggableResizable">
                    <i class="el-icon-menu"></i>
                    <span slot="title">可拖拽可缩放</span>
                </el-menu-item>

                <el-menu-item index="/home/mockjsData">
                    <i class="el-icon-menu"></i>
                    <span slot="title">mock.js测试</span>
                </el-menu-item>

                <el-menu-item index="/home/lotteryDraw">
                    <i class="el-icon-menu"></i>
                    <span slot="title">抽奖功能</span>
                </el-menu-item>

                <el-menu-item index="/home/sliderScale">
                    <i class="el-icon-menu"></i>
                    <span slot="title">滑块缩放、面板分割</span>
                </el-menu-item>

            </el-menu>
        </aside>
        <main id="content">
            <moc-tags-view></moc-tags-view>
            <keep-alive>
                <transition name="fade-transform" mode="out-in">
                    <router-view :key="key"></router-view>
                </transition>
            </keep-alive>
        </main>
    </article>
</template>
<script>

    export default {
        name: 'widget',
        data() {
            return {};
        },
        computed: {
            key() {
                return this.$route.name !== undefined ? this.$route.name : this.$route.fullPath.replace(/\//g, '')
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    };
</script>
<style lang="scss">
    #content{
        overflow: hidden
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .fade-transform-enter-active,.fade-transform-leave-active {
        -webkit-transition: all .5s;
        transition: all .5s
    }
    .fade-transform-enter {
        opacity: 0;
        -webkit-transform: translateX(-30px);
        transform: translateX(-30px)
    }
    .fade-transform-leave-to {
        opacity: 0;
        -webkit-transform: translateX(30px);
        transform: translateX(30px)
    }

    .el-menu-item{
        overflow: hidden;
        white-space:nowrap;
        .el-tooltip{
            display: inline-block;
            width: calc(100% - 30px);
            overflow: hidden;
        }
    }
</style>
