<template>
    <header id="page-header">
        <div class="logo">logo.png</div>
        <ul class="nav">
            <li>
                <router-link :to="{path:'/home'}">首页</router-link>
                <!-- <router-link :to="{path:'/home'}" exact>首页</router-link> -->
            </li>
            <li>
                <router-link :to="{path:'/user'}">人员列表</router-link>
            </li>
            <li>
                <router-link :to="{path:'/project'}">路由改进</router-link>
            </li>
            <li>
                <router-link :to="{path:'/charts'}">echarts使用</router-link>
            </li>
            <li>
                <router-link :to="{path:'/widget'}">插件组件&内容动画</router-link>
            </li>
            <li>
                <router-link :to="{path:'/jurisdiction'}">权限管理</router-link>
            </li>
            <li>
                <router-link :to="{path:'/400'}">400</router-link>
            </li>
        </ul>
        <div class="user">
            <button class="btn-text" @click="signInOut">{{loginBtn}}</button>
            <button class="btn-text">设置</button>
            <el-dropdown trigger="hover" :show-timeout="50" :hide-timeout="300">
                <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="signInOut">{{ loginBtn }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
    import {mapState,mapGetters,mapActions} from 'vuex';
	export default {
	    name: 'pageHeader',
	    data() {
	        return {
	            loginBtn: '登录',
	            sysUserAvatar: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
	            sysUserName: 'anextUntil',
	        };
	    },
	    beforeMount() {

	    },
	    created() {
            if ( this.userInfo ) {
	            this.loginBtn = '退出';
	        } else {
	            this.loginBtn = '登录';
	        }
        },
        computed:{
            ...mapGetters({ 
                userInfo: 'userInfo/renderUser'    // userInfo 模块下，getters里面的renderUser方法
            })
        },
	    methods: {
            ...mapActions({
                changeUser: 'userInfo/invokeChangeUser',
                changeSrc: 'toFullPath/invokeChangeSrc'
            }),
	        signInOut() {
        
	            if ( this.userInfo ) { // 点击退出
	                // 后台请求
	                this.$http.get('sys/user/logout').then((response) => {
	                    // 修改按钮文字
	                    this.loginBtn = '登录';
	                    // 修改登录信息
                        this.changeUser(false);
                        
	                    /**
                         * 1.退出成功后，判断当前页面是否需要登录
                         * 2.如果当前页面需要登录，跳转到登录页,并且保存当前路径
                         */
	                    if (this.$route.meta.loginRrquired) {
                            this.jumpLogin();
	                    }
	                }).catch((error) => {
	                    console.log(error);
	                });
	            } else {
                    // 点击登录
                    this.jumpLogin();
	            }
	        },
            jumpLogin(){
                // 将当前路径保存到store里
                this.changeSrc( this.$route.fullPath );
                // 跳转到登录页
	            this.$router.push({ path: '/login' });
            }
	    },
	};
</script>
