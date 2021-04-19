export default {
    path: 'home',
	component: () => import(/* webpackChunkName: "home" */ '@/views/index/index'),
    name: 'case',
    redirect: '/home/jQuery',
    meta: {
		title: "案例页面",
		path: '/home/jQuery'
	},
    children: [
        {
        	path: 'shortcut',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/shortcut'),
        	name: 'shortcut',
        	meta: {
        		loginRrquired: false,
        		keepAlive: true,
        		title: "监听键盘操作（组合键）",
        		path: '/home/shortcut',
        		affix: false
        	}
        },
        {
        	path: 'elementCustomParams',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/elementCustomParams'),
        	name: 'elementCustomParams',
        	meta: {
        		loginRrquired: false,
        		keepAlive: true,	// 是否使用keep-alive缓存页面
        		title: "Element 自定义参数",
        		path: '/home/elementCustomParams',
        		affix: false //
        	}
        },
        {
        	path: 'jQuery',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/jQuery'),
        	name: 'jQuery',
        	meta: {
        		loginRrquired: false,
        		keepAlive: true,
        		title: "jQuery 引用",
        		path: '/home/jQuery',
        		affix: true
        	}
        },
    	{
			path: 'anchor',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/anchor'),
			name: 'anchor',
			meta: {
				loginRrquired: false,
				keepAlive: true,	// 是否使用keep-alive缓存页面
				title: "Anchor锚点、Affix图钉",
				path: '/home/anchor',
				affix: false //
			}
		},
        {
        	path: 'verify',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/verify'),
        	name: 'verify',
        	meta: {
        		loginRrquired: false,
        		keepAlive: true,	// 是否使用keep-alive缓存页面
        		title: "验证码",
        		path: '/home/verify',
        		affix: false //
        	}
        },
    	{
			path: 'directiveFilters',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/directive-filters'),
			name: 'directive-filters',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "指令、过滤器、工具的全局使用",
				path: '/home/directiveFilters',
				affix: false //
			}
		},
    	{
			path: 'orgchart',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/orgchart'),
			name: 'orgchart',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "orgchart组织架构图",
				path: '/home/orgchart',
				affix: false
			}
		},
    	{
			path: 'tinymce',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/tinymce'),
			name: 'tinymce',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "tinymce5富文本编辑器",
				path: '/home/tinymce',
				affix: false
			}
		},
		{
			path: 'sector',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sector'),
			name: 'sector',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "css3 效果",
				path: '/home/sector',
				affix: false
			}
		},
		{
			path: 'syncModel',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/syncModel'),
			name: 'syncModel',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "数据的双向传递",
				path: '/home/syncModel',
				affix: false
			}
		},
		{
			path: 'multilayerNesting',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/multilayerNesting'),
			name: 'multilayerNesting',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "Vue多层嵌套",
				path: '/home/multilayerNesting',
				affix: false
			}
		},
		{
			path: 'selectRelevant',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/selectRelevant'),
			name: 'selectRelevant',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "select全选、联动",
				path: '/home/selectRelevant',
				affix: false
			}
		},
		{
			path: 'complexData',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/complexData'),
			name: 'complexData',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "js复杂数据类型的深层复制",
				path: '/home/complexData',
				affix: false
			}
		},
		{
			path: 'transferSearch',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/transferSearch'),
			name: 'transferSearch',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "穿梭框自定义搜索",
				path: '/home/transferSearch',
				affix: false
			}
		},
		{
			path: 'requiredType',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/requiredType'),
			name: 'requiredType',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "切换必填状态",
				path: '/home/requiredType',
				affix: false
			}
		},
		{
			path: 'fuzzySearch',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/fuzzySearch'),
			name: 'fuzzySearch',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "模糊搜索",
				path: '/home/fuzzySearch',
				affix: false
			}
		},
		{
			path: 'tableRelevant',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/tableRelevant'),
			name: 'tableRelevant',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "table相关",
				path: '/home/tableRelevant',
				affix: false
			}
		},
        {
        	path: 'exportExcel',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/exportExcel'),
        	name: 'exportExcel',
        	meta: {
        		loginRrquired: false,
        		keepAlive: true,
        		title: "导出excel",
        		path: '/home/exportExcel',
        		affix: false
        	}
        },
		{
			path: 'sortablejs',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sortablejs'),
			name: 'sortablejs',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "拖拽排序",
				path: '/home/sortablejs',
				affix: false
			}
		},
        {
        	path: 'draggableResizable',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/draggableResizable'),
        	name: 'draggableResizable',
        	meta: {
        		loginRrquired: false,
        		keepAlive: true,
        		title: "可拖拽可缩放",
        		path: '/home/draggableResizable',
        		affix: false
        	}
        },
		{
			path: 'mockjsData',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/mockjsData'),
			name: 'mockjsData',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "mock.js测试",
				path: '/home/mockjsData',
				affix: false
			}
		},
		{
			path: 'lotteryDraw',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/lotteryDraw'),
			name: 'lotteryDraw',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "抽奖功能",
				path: '/home/lotteryDraw',
				affix: false
			}
		},
		{
			path: 'sliderScale',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sliderScale'),
			name: 'sliderScale',
			meta: {
				loginRrquired: false,
				keepAlive: true,
				title: "滑块控制缩放",
				path: '/home/sliderScale',
				affix: false
			}
		}
	]
}
