<template>
    <el-container>
    	<el-aside width="220px">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                router
            >
                <el-menu-item index="/container/anextUntil/table">
                    <span slot="title">表格</span>
                </el-menu-item>
                <el-menu-item index="/container/anextUntil/form">
                    <span slot="title">表单</span>
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
