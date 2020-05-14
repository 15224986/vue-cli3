<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <ul class="section-subhead">
                    <li>1.导出表格为Excel</li>
                    <li>2.参考网址： <el-link href="https://www.jianshu.com/p/2819b563bfd7" type="primary" target="_blank">https://www.jianshu.com/p/2819b563bfd7</el-link></li>
                    <li>3.安装相关依赖： npm install --save xlsx file-saver</li>
                    <li>4.具体插件使用参考：<el-link href="https://github.com/SheetJS/js-xlsx" type="primary" target="_blank">https://github.com/SheetJS/js-xlsx</el-link> <el-divider direction="vertical"></el-divider><el-link href="https://github.com/eligrey/FileSaver.js" type="primary" target="_blank">https://github.com/eligrey/FileSaver.js</el-link></li>
                    <div class="section-subhead-tools">
                        <el-button @click="exportExcel( $refs.exportExcel.$el, '资产报表.xlsx')" type="primary" plain><i class="el-icon-download"></i>导出 Excel</el-button>
                    </div>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="dataset"
                        height="390px"
                        ref="exportExcel"
                        border
                        stripe
                        header-row-class-name="el-table-th"
                    >
                        <el-table-column label="排序" type="index" :index="handleIndex" width="50"></el-table-column>
                        <el-table-column prop="date" label="日期" width="218"></el-table-column>
                        <el-table-column prop="name" label="姓名" width="186"></el-table-column>
                        <el-table-column prop="address" label="地址" min-width="256"></el-table-column>
                    </el-table>
                </div>
            </section>
        </div>

    </article>
</template>
<script>
    /**
     * 混入
     * calcIndex    : 序号排序的过滤方法
     * exportExcel  : 导出Excel的方法
     */
    import calcIndex from "@/mixins/calcIndex.js";
    import exportExcel from "@/mixins/exportExcel.js";

    export default {
        name: "tableRelevant",
        mixins: [calcIndex, exportExcel],
        data() {
            const item = {
            	date: '2016-05-02',
            	name: '王小虎',
            	address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                loading: false,
                /**
                 * 表格数据
                 */
                dataset: Array(20).fill(item),
                pagination: {
                    current: 1,     // 当前页
                    size: 15,       // 页面显示条数
                    pages: 0,       // 总页数
                }
            };
        },
        created() {

        },
        methods: {
            /**
             * 分页器事件
             */
            onSearch(val) {
                this.pagination.current = val ? val : 1;
                this.initTableData();
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
        position: relative;
    }
    .section-subhead-tools{
        position: absolute;
        right: 0;
        top: 0;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
</style>
