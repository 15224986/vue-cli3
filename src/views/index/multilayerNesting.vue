<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">vue 多层嵌套，修改后dom刷新</h3>
                <div class="m-b-20">
                    <el-button @click="onMultiStoreyChange()">显示规则文档</el-button>                    
                </div>
                <ul 
                    :multi-storey-group="multiStoreyChanges"
                    class="color-list"
                    v-for="(item, index) in multiStoreyArray[0]"
                    :key="index"
                >
                    <h2 class="color-title" v-if="index==0" v-show="multiStoreyChanges">数据命名规则</h2>
                    <h2 class="color-title" v-else>方法、计算属性的命名规则</h2>
                    <li
                        class="color-item"
                        v-for="(list, i) in item"
                        :key="i"
                    ><span class="color-index">{{i+1}}：</span>{{list}}</li>
                </ul>
            </section>           
        </div>
    </article>
</template>
<script>
    export default {
        name: "multilayerNesting",
        data() {
            return {
                loading: false,
                /**
                 * vue 多层嵌套，修改后dom刷新
                 */
                multiStoreyChanges: 0,
                multiStoreyArray:[
                    [
                        [
                            'aaaaa',
                            'bbbbb',
                            'ccccc',
                            'ddddd',
                            'eeeee'
                        ]
                    ]
                ],
                multiStoreyShow:[
                    [
                        '数据变量一般用小驼峰法标识。小驼峰法的意思是：除第一个单词之外，其他单词首字母大写。',
                        '下拉框“options”的数据共有三个，分别是label、value、disabled，数据类型String、Number、Boolean。'
                    ],
                    [
                        '页面初始化获取数据使用“init”开头，例如“initTableData”等。',
                        '点击一级分类，获取二级分类的下拉数据，等后期获取的使用“get”开头，例如“getTwoOptions”等。',
                        '所有和element-ui回调相关的方法、计算等都用“handle”开头，例如“handleGetRowKeys”等。',
                        '所有使用自定义的按钮，例如button上的@click等使用“on”开头，例如“onSort、onSearch”等。',
                        '公共方法，再别的方法里调用的，处理数据格式，字符串样式等，使用“set”开头，例如“setParams”等。',
                        '所有和判断相关的，使用“is”开头，例如“isBoolean”等。',
                        '当组件回调和自定义方法使用相同的方法时，使用“on”开头。'
                    ] 
                ]
            };
        },
        methods: {
            /**
             * vue 多层嵌套 按钮的点击事件
             */ 
            onMultiStoreyChange(){
                this.multiStoreyArray[0] = this.multiStoreyShow;
                this.multiStoreyChanges++;
                console.log( this.multiStoreyArray[0][0] );
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
    .search-list{
        margin-top: 17px;
        li{
            line-height: 36px;
            padding-left: 10px;
            border: #eee 1px solid;
            margin-top: -1px
        }
    }
    .color-title{
        margin-bottom: 6px;
    }
    .color-list{
        padding-top: 1px;
        li{
            margin-top: -1px;
            line-height: 34px;
            padding-left: 10px;
            border: #eee 1px solid;
            &.dragging{
                background-color: #f6f6f6;
            }
        }
    }
    .color-list + .color-list{
        margin-top: 30px;
    }
</style>