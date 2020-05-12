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
				<div class="moc-container">
                    
                    <section class="moc-breadcrumb">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item><a href="/user">活动管理</a></el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </section>
                    <section class="moc-bodier moc-form">
                        <p>典型表单</p>
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item v-for="item in conts" :key="item" label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-form>
                    </section>
                    <section class="moc-footer">
                        <el-button type="primary">立即创建</el-button>
                        <el-button>取消</el-button>
                    </section>




                    <!-- <section class="moc-search">
                        <el-form :inline="true" :model="search" class="demo-form-inline">
                            <el-form-item label="审批人">
                                <el-input v-model="search.user" placeholder="审批人"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域">
                                <el-select v-model="search.region" placeholder="活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSearch()">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </section>
                    <section class="moc-bodier moc-table">
                        <el-table
                            :data="tableData"
                            :height="tableHeight"
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
                            @current-change="onSearch"
                            @size-change="onSearch"
                            :layout="paginationSet.layout"
                            :page-sizes="paginationSet.sizes"
                            background>
                        </el-pagination>
					</section> -->

				</div>
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
                    region: ''
                },
                /**
                 * 表格
                 */
				tableData: Array(20).fill(item),
                /**
                 * 分页器
                 */
                pagination: {
                    current: 1,         // 当前页
                    size: 20,           // 每页显示条数
                    total: 1200,        // 总条数
                },

			}
        },
        created(){

        },
        mounted(){
            this.calcTableHeight();
        },
        methods:{
            onSearch(){
                console.log( this.pagination );
            }
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
        background-color: #f2f2f2;
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





    .moc-search{
        margin: 20px 20px 0;
    }
    .moc-form,
    .moc-table{
        margin: 0 20px;
    }
    .moc-pagination{
        margin: 12px 20px 20px;
    }
</style>
