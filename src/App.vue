<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>

    import { mapState, mapGetters, mapActions } from 'vuex';

    // 加载资源
    export default {
        name: 'App',
        components: {
        },
        created () {
            // 在页面加载时读取sessionStorage里的状态信息,如果存在证明是刷新后进入的
            if (sessionStorage.getItem("store")) {
                this.$store.replaceState( Object.assign( {}, this.$store.state, JSON.parse(sessionStorage.getItem("store")) ) );
                sessionStorage.removeItem("store");
                if( this.userInfo ){
                    this.$router.push({ path: this.renderSrc || '/' });
                    this.changeSrc(false);
                }
            }
            // 在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", ()=>{
                // 下一次将要跳转的页面
                let fullPath = this.$route.fullPath;
                if( fullPath === '/login' ){ // 当前刷新页面为登录页时
                    if( this.renderSrc ){
                        fullPath = this.renderSrc;
                    }else{
                        fullPath = '/';
                    }
                }
                this.changeSrc( fullPath );
                sessionStorage.setItem("store", JSON.stringify(this.$store.state) );
            });
        },
        computed:{
            ...mapGetters({ 
                renderSrc: 'toFullPath/renderSrc',    // toFullPath 模块下，getters里面的renderSrc方法
                userInfo: 'userInfo/renderUser'
            })
        },
        methods:{
            ...mapActions({
                changeSrc: 'toFullPath/invokeChangeSrc'
            })
        }
    }
</script>
<style lang="scss">
    // 引入公共的css
    @import './assets/styles/global.scss';
</style>
