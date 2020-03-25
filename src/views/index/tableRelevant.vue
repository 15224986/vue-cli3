<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>
   
            <section class="section">
                <h3 class="section-title">状态排序
                    <el-button @click="onSort()" type="primary" circle>
                        <i :class="{'el-icon-upload2':sort==1,'el-icon-download':sort==2}"></i>
                    </el-button>
                    <el-button size="mini" @click="handleExpandAll">展开</el-button>
                </h3>
                <ul class="section-subhead">
                    <li>1.根据“状态”是否选中，进行升序和降序的排序</li>
                    <li>2.通过formatter，进行页面的显示。将1、2转换成男女，将boolean类型的显示在表格中等。</li>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="dataset"
                        height="390px"
                        border
                        stripe 
                        class="text-center"
                        header-row-class-name="el-table-th"
                        :row-key="handleGetRowKeys"
                        :expand-row-keys="expands"
                    >
                        <el-table-column type="expand">
                            <template slot-scope="scope">
                                <ul>
                                    <li>{{ scope.row.text }}</li>
                                </ul>
                            </template>
                        </el-table-column>

                        <el-table-column label="排序" type="index" :index="handleIndex" width="50"></el-table-column>
                        <el-table-column width="50" align="center" min-width="50">
                            <template slot="header" slot-scope="scope">
                                <span class="neu-table-cell">
                                    <font :item="scope.$index">排序</font>
                                </span>
                            </template>
                            <template slot-scope="scope">
                                <span>{{ scope.$index | calcIndex( pagination.current, pagination.size) }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="ID" property="tenantID" width="80"></el-table-column>

                        <el-table-column label="性别" property="sex" :formatter="handleSex" width="80"></el-table-column>
                        <el-table-column label="性别" width="80">
                            <template slot-scope="scope">{{ scope.row.sex | sexText }}</template>
                        </el-table-column>

                        <el-table-column label="内容" property="text" show-overflow-tooltip min-width="350"></el-table-column>
                        <el-table-column label="状态" property="checked" width="80" :formatter="handleFormatBoolean" min-width="110"></el-table-column>
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
            return {
                loading: false,
                /**
                 * sort 排序 表格数据
                 */
                sort: 1,
                dataset :[],
                pagination: {
                    current: 1,     // 当前页
                    size: 15,       // 页面显示条数
                    pages: 0,       // 总页数
                },
                expands: []         // 要展开的行，数值的元素是row的key值
            };
        },
        created() {
            this.initData()
        },
        methods: {
            /**
             * 获取表格需要展开的row的key值
             */
            handleGetRowKeys (row) {
                return row.tenantID
            },
            handleExpandAll(){
                if( this.expands.length > 0 ){
                    this.expands.splice(0, this.expands.length);
                }else{
                    this.dataset.forEach( (el)=>{
                        this.expands.push(el.tenantID)
                    });
                }
            },
            /**
             * 表格显示状态
             */
            handleFormatBoolean: function (row, column, cellValue, index) {
                var ret = ''  // 你想在页面展示的值
                if (cellValue) {
                    ret = "true"  //根据自己的需求设定
                } else {
                    ret = "false"
                }
                return ret;
            },
            /**
             * 表格排序的方法
             */
            onSort(){
                let i = 0;
                if( this.sort===1 ){
                    this.dataset.forEach((el,index)=>{
                        if(el.checked){
                            let obj = el;
                            this.dataset.splice(index,1);
                            this.dataset.splice(i,0,obj);
                            i++;
                        }
                    });
                    this.sort=2;
                }else if(this.sort===2){
                    this.dataset.forEach((el,index)=>{
                        if(!el.checked){
                            let obj = el;
                            this.dataset.splice(index,1);
                            this.dataset.splice(i,0,obj);
                            i++;
                        }
                    });
                    this.sort=1;
                }
            },
            /**
             * 分页器事件
             */
            onSearch(val) {
                this.pagination.current = val ? val : 1;
                this.initTableData();
            },
            /**
             * 初始化获取页面数据
             */
            initData(){
                // 正在加载中
                this.loading = true;
                /**
                 * 模拟ajax获取表格数据
                 */
                setTimeout(()=>{
                    this.$http.get('/mock/tableData')
                        .then((res)=>{
                            // 去除加载中
                            this.loading = false;
                            this.dataset = res.data.dataset;
                            this.pagination = res.data.pagination;
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
                }, 1350);
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
