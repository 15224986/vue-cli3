import Vue from 'vue';
import Router from 'vue-router';
// 引入
Vue.use(Router);

/**
 * vue使用nprogress页面加载进度条
 */
import NProgress from 'nprogress' 		// progress bar
import 'nprogress/nprogress.css' 		// progress bar style
NProgress.configure({
	easing: 'ease',  					// 动画方式
	speed: 500,  						// 递增进度条的速度
	showSpinner: false, 				// 是否显示加载ico
	trickleSpeed: 200, 					// 自动递增间隔
	minimum: 0.3 						// 初始化时的最小百分比
})

// 引入store
import store from '@/store';

// 引入组件部分
import home from './modules/home'
import user from './modules/user'
import project from './modules/project'
import charts from './modules/charts'
import widget from './modules/widget'
import jurisdiction from './modules/jurisdiction'
import container from './modules/container'




const router = new Router({
	// mode: 'history',
	linkActiveClass: "active",
	routes: [
		{
			path: '/',
			component: () => import(/* webpackChunkName: "index" */ '@/views/Index'),
            name: 'home',
            meta:{
            	breadcrumb: "首页",
            	path: '/',
                loginRrquired: false
            },
            redirect: '/login',
            children: [
				home,
                user,
                project,
                charts,
                widget,
                jurisdiction
            ]
		},
		{
			path: '/login',
			component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
			name: 'login',
			meta: {
				title:'登录页'
			}
		},
		{
			path: '/400',
			component: () => import(/* webpackChunkName: "login" */ '@/views/400'),
			name: 'page400'
		},
        {
            path: '/container',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/Container'),
            name: 'container',
            redirect: '/container/anextUntil',
            meta: {
        		title: "结构页面",
        		path: '/container/anextUntil'
        	},
            children: [
                container
            ],
        }
	],
	// 解决使用keep-alive时，滚动条的问题
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
	        return savedPosition
	    }else {
	    	if( to.path !== from.path ){	// 判断是否因为锚点而改变滚动条
	    		if (from.meta.keepAlive) {	// 判断是否keep-alive存储
	    			// 获取浏览器距离顶部的距离
	    			var scrollTop=0;
			        if (window.pageYOffset) {
			        	scrollTop = window.pageYOffset;
			        }else if (document.compatMode && document.compatMode != 'BackCompat'){
			        	scrollTop = document.documentElement.scrollTop;
			        }else if (document.body) {
			        	scrollTop = document.body.scrollTop;
			        }
		            from.meta.savedPosition = scrollTop;
		        }
		        return { x: 0, y: to.meta.savedPosition || 0 }
	    	}
	    }
	}
});

/**
 * 引入获取token的方法
 * 设置白名单页面
 */
import { getToken } from '@/utils/auth' // getToken from cookie
const whiteList = ['/login', '/authredirect']
import {
    Message,
    MessageBox
} from 'element-ui'
/**
 * 检测是否已经登录
 */
router.beforeEach((to, from, next) => {
	// 每次切换页面时，调用进度条
    NProgress.start();

	/**
	 * 动态修改页面的title
	 */
	if ( to.meta.title ) {
		document.title = to.meta.title;
	}else{
		document.title = '智能管理平台';
    }

	/**
	 * 1.获取登陆状态、获取页面是否需要登录
	 * 2.执行操作
	 */
    if (getToken()) { // 判断是否有token
        if (to.path === '/login') {
            next()
            NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        } else {
            if (store.getters.menus === undefined) { // 判断当前用户是否已拉取完user_info信息
                store.dispatch('userInfo/GetUserInfo').then(info => { // 拉取user_info
                    Message.success('获取权限成功')

                    // next()
                    /**
                     * 添加动态路由
                     */
                    console.log(store.getters.addRouters)
                    router.addRoutes(store.getters.addRouters)  // 动态添加可访问路由表
                    next({ ...to, replace: true })              // hack方法 确保addRoutes已完成 ,replace: true so the navigation will not leave a history record
                }).catch(() => {
                    store.dispatch('userInfo/FedLogOut').then(() => {
                        Message.error('获取权限失败')
                        next({
                            path: '/login'
                        })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
            NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
    }
});

//当路由进入后：关闭进度条
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})

export default router;
