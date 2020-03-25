export default {
    path: 'home',
	component: () => import(/* webpackChunkName: "home" */ '@/views/index/index'),
    name: 'case',
    redirect: '/home/jQuery',
    meta: {
		breadcrumb: "案例页面",
		path: '/home/jQuery'
	},
    children: [
    	{
			path: 'directiveFilters',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/directive-filters'),
			name: 'directive-filters',
			meta: {
				loginRrquired: false,
				title:'案例页面',
				breadcrumb: "指令、过滤器、工具的全局使用",
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
				title:'案例页面',
				breadcrumb: "orgchart组织架构图",
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
				title:'案例页面',
				breadcrumb: "tinymce5富文本编辑器",
				path: '/home/tinymce',
				affix: true
			}
		},
		{
			path: 'jQuery',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/jQuery'),
			name: 'jQuery',
			meta: {
				loginRrquired: false,
				title:'案例页面',
				breadcrumb: "jQuery 引用",
				path: '/home/jQuery',
				affix: false
			}
		},
		{
			path: 'sector',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sector'),
			name: 'sector',
			meta: {
				loginRrquired: false,
				title:'案例页面',
				breadcrumb: "css3 效果",
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
				title:'案例页面',
				breadcrumb: "数据的双向传递",
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
				title:'案例页面',
				breadcrumb: "Vue多层嵌套",
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
				title:'案例页面',
				breadcrumb: "select全选、联动",
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
				title:'案例页面',
				breadcrumb: "js复杂数据类型的深层复制",
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
				title:'案例页面',
				breadcrumb: "穿梭框自定义搜索",
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
				title:'案例页面',
				breadcrumb: "切换必填状态",
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
				title:'案例页面',
				breadcrumb: "模糊搜索",
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
				title:'案例页面',
				breadcrumb: "table相关",
				path: '/home/tableRelevant',
				affix: false
			}
		},
		{
			path: 'sortablejs',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sortablejs'),
			name: 'sortablejs',
			meta: {
				loginRrquired: false,
				title:'案例页面',
				breadcrumb: "拖拽排序",
				path: '/home/sortablejs',
				affix: false
			}
		},
		{
			path: 'mockjsData',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/mockjsData'),
			name: 'mockjsData',
			meta: {
				loginRrquired: false,
				title:'案例页面',
				breadcrumb: "mock.js测试",
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
				title:'案例页面',
				breadcrumb: "抽奖功能",
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
				title:'案例页面',
				breadcrumb: "滑块控制缩放",
				path: '/home/sliderScale',
				affix: false
			}
		}
	]
}