<template>
    <el-container>
		<el-header class="moc-page-header">
            <router-link :to="{path:'/home'}">首页</router-link>
        </el-header>
		<el-container>
			<el-aside width="220px">
				<el-menu :default-openeds="['1', '3']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<main class="moc-container" v-loading="mainLoading">
                    <section class="moc-breadcrumb">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item><a href="/user">活动管理</a></el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </section>
                    <!-- <section class="moc-bodier moc-form">
                        <p>典型表单</p>
                        <el-form ref="form" :model="form" label-width="80px" class="moc-form-horizontal">
                            <el-form-item v-for="item in conts" :key="item" label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-form>
                        <p>行内表单</p>
                        <el-form ref="form" :model="form" label-width="80px" :inline="true" class="moc-form-inline">
                            <el-form-item v-for="item in conts" :key="item" label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-form>
                    </section>
                    <section class="moc-footer">
                        <el-button type="primary">立即创建</el-button>
                        <el-button>取消</el-button>
                    </section> -->



                    <section class="moc-search">
                        <h3>{{$route.params.id}}</h3>
                        <h3>{{$route.params.name}}</h3>
                        <p>params 传参 不建议</p>
                        <el-form :model="search" label-width="120px" :inline="true" size="small" label-suffix="：" class="moc-search-form">

                            <el-form-item label="审批人">
                                <el-input v-model="search.user" placeholder="审批人"></el-input>
                            </el-form-item>

                            <el-form-item label="活动区域">
                                <el-select
                                    v-model="search.region"
                                    placeholder="活动区域"
                                    filterable
                                    clearable
                                >
                                    <el-option
                                        v-for="(item, index) in selectOptions.region"
                                        :key="index"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="日期选择">
                                <el-date-picker
                                    v-model="search.date"
                                    placeholder="任意日期">
                                </el-date-picker>
                            </el-form-item>

                            <el-form-item label="日期时间选择">
                                <el-date-picker
                                    v-model="search.datetime"
                                    type="datetime"
                                    placeholder="任意时间">
                                </el-date-picker>
                                <span class="moc-form-label-static">至</span>
                                <el-date-picker
                                    v-model="search.datetime"
                                    type="datetime"
                                    placeholder="任意时间">
                                </el-date-picker>
                            </el-form-item>

                            <el-form-item label="时间段选择">
                                <!-- <el-date-picker
                                    v-model="search.createTime"
                                    type="datetimerange"
                                    value-format="yyyyMMddHHmmss"
                                    range-separator="至"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                > -->
                                <!--
                                    隐藏底部清空按钮
                                    popper-class="no-has-clearable"
                                 -->
                                <el-date-picker
                                    v-model="search.checkTime"
                                    type="datetimerange"
                                    :clearable="false"
                                    value-format="yyyyMMddHHmmss"
                                    range-separator="至"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    popper-class="no-has-clearable"
                                    :default-time="['00:00:00', '23:59:59']"
                                    :picker-options="datePickerMonth"
                                >
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item class="moc-search-btns">
                                <el-button type="primary" @click="onSearch()">查询</el-button>
                                <el-button type="primary" @click="testAssignCloneDeep()">测试扩展运算符和复杂数据深层复制</el-button>
                            </el-form-item>
                        </el-form>
                    </section>
                    <section class="moc-bodier moc-table">
                        <el-table
                            :data="tableData"
                            :height="tableHeight"
                            v-loading="tableLoading"
                            border
                        >
                            <el-table-column label="" type="index" :index="handleIndex" :width="tableIndexWidth" align="center" class-name="neu-table-index"></el-table-column>
                            <el-table-column prop="date" label="日期" width="218"></el-table-column>
                            <el-table-column prop="name" label="姓名" width="186"></el-table-column>
                            <el-table-column prop="address" label="地址" min-width="256"></el-table-column>
                        </el-table>
                    </section>
                    <section class="moc-pagination">
                        <el-pagination
                            :current-page.sync="pagination.current"
                            :page-size.sync="pagination.size"
                            :total="pagination.total"
                            :layout="paginationSet.layout"
                            :page-sizes="paginationSet.sizes"
                            hide-on-single-page
                            background
                            @current-change="initTableData()"
                            @size-change="initTableData()"
                        >
                        </el-pagination>
					</section>

				</main>
			</el-main>
		</el-container>
    </el-container>
</template>
<script>
    /**
     * 混入对象
     */
    import common from '@/mixins/common.js';            // 通用  每个页面都需要引入



    export default {
        mixins:[ common ],
        components: {},
        data () {
            const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
                /**
                 * 表单
                 */
                conts: 20,
                form:{
                    name:''
                },

                /**
                 * 搜索条件
                 */
                search: {
                    user: '',
                    region: '',
                    date: '',
                    datetime: '',
                    checkTime: '',
                    arr:[1,2,3],
                    obj:{
                        a:1,
                        b:22222
                    }
                },
                /**
                 * 表格
                 */
				tableData: Array(5).fill(item),
                /**
                 * 分页器
                 */
                pagination: {
                    current: 1,         // 当前页
                    size: 20,           // 每页显示条数
                    total: 1200,        // 总条数
                    oages: undefined,
                    obj:{
                        b:2,
                        c:3
                    }
                },

                selectOptions:{
                    region:[
                        {
                            value: '选项1',
                            label: '黄金糕'
                        },
                        {
                            value: '选项2',
                            label: '双皮奶',
                            disabled: true
                        },
                        {
                            value: '选项3',
                            label: '蚵仔煎'
                        }
                    ]
                }
			}
        },
        created(){
            this.initSelectOptions();
            this.initTableData();
        },
        mounted(){
            this.calcTableHeight();
        },
        methods:{
            testAssignCloneDeep(){
                /**
                 * 合并参数的时候，如果被合并的对象里面存在arr、obj等，需要使用深层复制，才可以对参数进行修改
                 *
                 * 如果项目中引用了 lodash 插件库，则不需要自己写的 深层复制等，合并等方法
                 */
                // let params = this.$merge( this.$deepCopy(this.search), this.pagination);
                // let params = {...this.$deepCopy(this.search), ...this.pagination};
                // let params = {...this.$lodash.cloneDeep(this.search), ...this.pagination};
                // let params = this.$lodash.assign(this.$lodash.cloneDeep(this.search), this.pagination);
                let params = this.$lodash.merge(this.$lodash.cloneDeep(this.search), this.pagination);
                delete params.total;
                params.arr.push('a','b','c');
                console.log( params, this.search );
                let diei = null
                console.log( this.$lodash.isArray(diei) );
                let diei2 = Object.create(null);
                console.log( diei2 );
            },
            /**
             * 搜索事件
             */
            onSearch(){
                this.pagination.current = 1;
                this.initTableData();
            },
            /**
             * 初始化表格数据
             */
            initTableData() {
                // 正在加载中
                this.tableLoading = true;

                /**
                 * 模拟请求数据
                 */
                setTimeout(()=>{
                    this.tableLoading = false;
                },3000);

                // let params = { ...this.$lodash.cloneDeep(this.search), ...this.pagination };
                // this.$http.get(`sys/user/list`, params).then( response => {
                //     if( response.result === 1 ){
                //         // console.log( response );
                //         this.tableLoading = false;
                //         this.tableData = response.table;
                //         this.pagination = response.pagination;
                //     }else{
                //         this.$alert( response.message, '系统提示', {
                //             type: 'error',
                //             callback: action => {}
                //         });
                //     }
                // })
                // .catch( error => {
                //     this.$message(error);
                // });
            },
            /**
             * 下拉框 options 的数据
             */
            initSelectOptions(){
                // 正在加载中
                this.mainLoading = true;

                setTimeout(()=>{
                    this.mainLoading = false;
                }, 1500)

                // this.$http.get(`sys/user/list`).then( response => {
                //     if( response.result === 1 ){
                //         // console.log( response );
                //         this.mainLoading = false;
                //         this.searchOptions = { ...this.searchOptions, ...response.options};
                //     }else{
                //         this.$alert( response.message, '系统提示', {
                //             type: 'error',
                //             callback: action => {}
                //         });
                //     }
                // })
                // .catch( error => {
                //     this.$message(error);
                // });
            },
        }
    }
</script>
<style lang="scss">
    html,
    body,
    #app,
    #app>.el-container{
        height: 100%;
    }
    .el-header {
        color: #333;
        line-height: 60px;
    }
    .el-menu,
    .el-aside {
        color: #333;
        border: 0 none;
    }
    .el-main{
        padding: 0;
    }
    .moc-page-header{
        background-color: #00A0E9;
        a{
            color: #ffffff;
        }
    }


    .moc-container{
        height: 100%;
        @include displayFlex;
        @include boxOrient;
        overflow: auto;
        background-color: #f2f2f2;
        >section{
            margin-left: 20px;
            margin-right: 20px;
        }
    }
    .moc-bodier{
        margin: 20px;
        position: relative;
        @include displayFlexNumber;
        overflow: auto;
    }
    .moc-header{
        margin: 20px 20px 0;
    }
    .moc-footer{
        margin: 20px;
    }
    .moc-breadcrumb{
        margin: 20px;
    }


    /**
     * 表单文件定义样式
     * 上面写单独的组件
     * 下面是这四种格式
     */
    // 行内表单两个组件之间的分隔符，例：  开始时间 至 结束时间
    .moc-form-label-static{
    	padding: 0 10px;
    }
    // 行内表单
    .moc-form-inline{

    }
    // 表格的搜索条件
    .moc-search-form{
        .el-form-item{
            margin-bottom: 6px;
        }
        .moc-search-btns{
            .el-button--small{
                position: relative;
                top: -1px;
            }
        }
    }
    // 典型表单
    .moc-form-horizontal{

    }
    // 表单页的查看详情
    .neu-form-details{
        .el-form-item--mini.el-form-item{
            margin-bottom: 6px;
        }
    }

    .moc-search{
        margin: 20px 20px 0;
    }
    .moc-form,
    .moc-table{
        margin: 0 20px;
    }
    .moc-pagination{
        margin-bottom: 20px;
        background-color: #FFFFFF;
        text-align: center;
        .el-pagination{
            margin: 10px auto;
            display: inline-block;
        }
    }
</style>
