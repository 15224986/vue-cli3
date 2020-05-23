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
            redirect: '/home',
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
			path: '/container/anextUntil',
			component: () => import(/* webpackChunkName: "login" */ '@/views/Container'),
			name: 'container'
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
    let logged_in = store.state.userInfo.user;
	const loginType = to.matched.some(function(item){
		return item.meta.loginRrquired;
    });
	if( !logged_in && loginType ){
        // 存储即将跳转到的页面的路径
        store.dispatch('toFullPath/invokeChangeSrc', to.fullPath);
		next('/login');
	}else{
		next();
	}
});

//当路由进入后：关闭进度条
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})

export default router;
