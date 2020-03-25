export default {
	path: 'widget',
	component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/index'),
	name: 'widget',
	redirect: '/widget/assembly',
	meta: {
		name: "插件组件",
		breadcrumb: "插件组件",
		path: '/widget/assembly'
	},
	children: [
		{
			path: 'assembly',
			component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/assembly'),
			name: 'widgetAssembly',
			meta: {
				loginRrquired: false,
				name: "插件管理",
				breadcrumb: "插件管理",
				path: '/widget/assembly',
				title: '插件组件'
			}
		},
		{
			path: 'unit',
			component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/unit'),
			name: 'widgetUnit',
			meta: {
				loginRrquired: false,
				name: "组件管理",
				breadcrumb: "组件管理",
				path: '/widget/unit',
				title: '插件组件'
			}
		},
		{
			path: 'static',
			component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/static'),
			name: 'widgetStatic',
			meta: {
				loginRrquired: false,
				name: "静态资源",
				title: '插件组件'
			}
		}
	]
}