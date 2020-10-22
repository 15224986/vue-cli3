<template>
    <article id="page-bodier" :class="{'neu-sidebar-opened': sidebar.opened}">
        <aside id="sidebar">
            <div class="neu-menu-tools">
                <svg @click="toggleSideBar()" class="hamburger" :class="{'neu-active': !sidebar.opened}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                    <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path>
                </svg>
            </div>

            <el-menu
                :default-active="$route.path"
                :collapse="sidebar.opened"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
            >


                <el-menu-item index="/home/jQuery">
                    <i class="el-icon-menu"></i>
                    <el-tooltip slot="title" content="jQuery 全局引用，Array、String 原型链添加方法" placement="right">
                        <span>jQuery、Array、String</span>
                    </el-tooltip>
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

                <el-menu-item index="/home/complexData">
                    <i class="el-icon-menu"></i>
                    <span slot="title">js复杂数据类型的深层复制</span>
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


                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>element-ui 用法</span>
                    </template>

                    <el-menu-item index="/home/elementCustomParams">
                        <span slot="title">Element 自定义参数</span>
                    </el-menu-item>

                    <el-menu-item index="/home/selectRelevant">
                        <span slot="title">select全选、联动</span>
                    </el-menu-item>

                    <el-menu-item index="/home/requiredType">
                        <span slot="title">切换必填状态</span>
                    </el-menu-item>

                    <el-menu-item index="/home/transferSearch">
                        <el-tooltip slot="title" content="穿梭框自定义搜索、图片放大" placement="right">
                            <span>穿梭框自定义搜索、图片放大</span>
                        </el-tooltip>
                    </el-menu-item>


                </el-submenu>



                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>通过View UI补充的组件</span>
                    </template>

                    <el-menu-item index="/home/anchor">
                        <span slot="title">Anchor锚点、Affix图钉</span>
                    </el-menu-item>

                    <el-menu-item index="/home/sliderScale">
                        <span slot="title">滑块缩放、面板分割</span>
                    </el-menu-item>
                </el-submenu>

            </el-menu>
        </aside>
        <main id="content">
            <moc-tags-view></moc-tags-view>
            <transition name="fade-transform" mode="out-in">
                <keep-alive>
                    <router-view :key="key"></router-view>
                </keep-alive>
            </transition>
        </main>
    </article>
</template>
<script>

    import { mapState, mapGetters, mapActions } from 'vuex';
    export default {
        name: 'widget',
        data() {
            return {};
        },
        computed: {
            key() {
                return this.$route.fullPath
                // return this.$route.fullPath.replace(/[/?=]/g, '')
            },
            ...mapGetters([
                'sidebar'
            ])
        },
        mounted() {
           console.log(this.sidebar.opened)
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('app/toggleSideBar').then(() => {
                    console.log( this.sidebar.opened )
                })
            },
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
