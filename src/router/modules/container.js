export default {

    path: 'anextUntil',
    component: () => import(/* webpackChunkName: "home" */ '@/views/container/index'),
    name: 'anextUntil',
	redirect: '/container/anextUntil/table',
	children: [
		{
			path: 'table',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/container/table'),
			name: 'tablePage',
			meta: {
				loginRrquired: false,
				name: "表格页面",
				title: '表格页面'
			}
		},
		{
			path: 'form',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/container/form'),
			name: 'vueEcharts',
			meta: {
				loginRrquired: false,
				name: "表单页面",
				title: '表单页面'
			}
		}
	]
}
