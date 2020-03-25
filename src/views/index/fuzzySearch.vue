<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">模糊搜索</h3>
                <ul class="section-subhead">
                    <li>1.根据input的value值筛选originLists中的数据</li>
                </ul>
                <el-input v-model="searchTxt" placeholder="请输入搜索内容"></el-input>
                <ul class="search-list">
                    <li v-for="(item,index) in searchLists" :key="index">{{item.content}}</li>
                </ul>
            </section>
               
        </div>
    </article>
</template>
<script>
    
    export default {
        name: "fuzzySearch",
        data() {
            return {
                loading: false,
                /**
                 * 模糊搜索的相关数据
                 */
                searchTxt: "",
                originLists:[]
            };
        },
        computed:{
            /**
             * 模糊搜索的方法
             * @return 逻辑-->根据input的value值筛选originLists中的数据
             */
            searchLists: function(){
                // 声明一个空数组来存放数据
                return this.originLists.filter( (item)=> {
                    // 判断输入框中的值是否可以匹配到数据，如果匹配成功
                    // 向空数组中添加数据
                    if( item.content.search(this.searchTxt) !== -1 ){
                        return item
                    }
                })
            },
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
                            this.originLists = res.data.originLists;
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
    .search-list{
        margin-top: 17px;
        li{
            line-height: 36px;
            padding-left: 10px;
            border: #eee 1px solid;
            margin-top: -1px
        }
    }
</style>