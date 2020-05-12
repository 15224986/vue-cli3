<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">导出 Excel
                    <el-button @click="exportExcel( $refs.exportExcel.$el, '资产报表.xlsx')"><i class="el-icon-download"></i>导出 Excel</el-button>
                </h3>
                <ul class="section-subhead">
                    <li>1.导出表格为Excel</li>
                    <li>2.参考网址： <el-link href="https://www.jianshu.com/p/2819b563bfd7" type="primary" target="_blank">https://www.jianshu.com/p/2819b563bfd7</el-link></li>
                    <li>3.安装相关依赖： npm install --save xlsx file-saver</li>
                    <li>4.具体插件使用参考：<el-link href="https://github.com/SheetJS/js-xlsx" type="primary" target="_blank">https://github.com/SheetJS/js-xlsx</el-link> <el-divider direction="vertical"></el-divider><el-link href="https://github.com/eligrey/FileSaver.js" type="primary" target="_blank">https://github.com/eligrey/FileSaver.js</el-link></li>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="dataset"
                        height="390px"
                        ref="exportExcel"
                        border
                        stripe
                    >
                        <el-table-column label="排序" type="index" :index="handleIndex" width="50"></el-table-column>
                        <el-table-column prop="date" label="日期" width="218"></el-table-column>
                        <el-table-column prop="name" label="姓名" width="186"></el-table-column>
                        <el-table-column prop="address" label="地址" min-width="256"></el-table-column>
                    </el-table>
                </div>
                <div class="pagination-box">
                    <el-pagination
                        @current-change="onSearch"
                        :current-page="pagination.current"
                        :page-count="pagination.pages"
                        :page-size="pagination.size"
                        layout="prev, pager, next, jumper"
                        background>
                    </el-pagination>
                </div>
            </section>
        </div>

    </article>
</template>
<script>
    /**
     * 混入
     * calcIndex    : 序号排序的过滤方法
     * sexText      : 性别转换的过滤方法
     */
    import calcIndex from "@/mixins/calcIndex.js";
    import sexText from "@/mixins/sexText.js";

    export default {
        name: "tableRelevant",
        mixins: [calcIndex, sexText],
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
            },
            exportExcel(tableDom, xlsxName){
                // generate workbook object from table
                // 从表生成工作簿对象
                let tableData = this.$XLSX.utils.table_to_book( tableDom );
                // get binary string as output
                // 获取二进制字符串作为输出
                let wbout = this.$XLSX.write( tableData, {type:'array'});
                try {
                    this.$FileSaver.saveAs(new Blob([wbout]), xlsxName);
                }catch(err){
                    console.log(err)
                }

                // /* generate workbook object from table */
                // let wb =this.$XLSX.utils.table_to_book(document.querySelector('#downqueryshareaccessrpttable'));
                // /* get binary string as output */
                // let wbout = this.$XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
                // try {
                //     this.$FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '资产报表.xlsx');
                // } catch (e){
                //     if (typeof console !== 'undefined')
                //     console.log(e, wbout)
                // }
                // return wbout
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
</style>
