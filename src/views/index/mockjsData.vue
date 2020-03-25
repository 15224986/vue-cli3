<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">mock.js 测试</h3>
                <ul class="section-subhead">
                    <li>1.制作mock.js案例，和使用方式方法。</li>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="table"
                        border
                        stripe 
                        size="mini"
                        class="text-center"
                        header-row-class-name="el-table-th"
                    >
                        <el-table-column label="ID" property="id" width="80"></el-table-column>
                        <el-table-column label="名字" property="cname" width="100"></el-table-column>
                        <el-table-column label="账号" property="username" width="186"></el-table-column>
                        <el-table-column label="户口所在地" property="county" min-width="186"></el-table-column>
                        <el-table-column label="常用软件" property="maliceIdType" width="126"></el-table-column>
                        <el-table-column label="星座" property="constellation" width="88"></el-table-column>
                        <el-table-column label="出生日期" property="recognitionTime" width="126"></el-table-column>
                        <el-table-column label="个人主页" property="url" min-width="186"></el-table-column>
                        <el-table-column label="说说" property="csentence" min-width="186" show-overflow-tooltip></el-table-column>
                        <el-table-column label="日记" property="csentence" min-width="186"></el-table-column>
                    </el-table>
                </div>
            </section>             
        </div>

    </article>
</template>
<script>
    export default {
        name: "mockjsData",
        data() {
            return {
                loading: false,
                /**
                 * mock.js表格数据
                 */
                table:[]
            };
        },
        created() {
            
            this.initData()
        },
        methods: {
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
                    this.$http.get('/mock/tableData', {}, {baseURL: ''})
                        .then((res)=>{
                            // 去除加载中
                            this.loading = false;
                            this.table = res.data.table;
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