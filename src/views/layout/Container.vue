<template>
    <el-container>
    	<el-aside width="220px">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                router
            >
                <el-menu-item index="/500">
                    <span slot="title">500</span>
                </el-menu-item>
                <el-menu-item index="/layout/container2">
                    <span slot="title">动态路由-container2</span>
                </el-menu-item>
                <el-menu-item index="/layout/container/container1/table">
                    <span slot="title">动态路由-表格</span>
                </el-menu-item>
                <el-menu-item index="/layout/container/container1/form">
                    <span slot="title">动态路由-表单</span>
                </el-menu-item>

    		</el-menu>
    	</el-aside>
        <el-main>
    		<router-view></router-view>
    	</el-main>
    </el-container>
</template>
<script>
    export default {
        mixins:[],
        components: {},
        data () {
			return {
			}
        },
        created(){
        },
        mounted(){
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    .el-menu,
    .el-aside {
        color: #333;
        border: 0 none;
    }
    .el-main{
        padding: 0;
    }
</style>
