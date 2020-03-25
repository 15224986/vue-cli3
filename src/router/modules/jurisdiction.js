export default {
	path: 'jurisdiction',
	component: () => import(/* webpackChunkName: "jurisdiction" */ '@/views/jurisdiction/index'),
	name: 'jurisdiction',
	redirect: '/jurisdiction/list',
	meta:{
    	name: "首页",
        loginRrquired: false
    },
	children: [
		{
			path: 'list',
			component: () => import(/* webpackChunkName: "jurisdiction" */ '@/views/jurisdiction/list'),
			name: 'jurisdictionList',
			meta: {
				loginRrquired: false,
				name: "权限列表",
				title: '权限管理'
			}
		},
		{
			path: 'add',
			component: () => import(/* webpackChunkName: "jurisdiction" */ '@/views/jurisdiction/add'),
			name: 'jurisdictionAdd',
			meta: {
				loginRrquired: false,
				name: "新增权限",
				title: '权限管理'
			}
		}
	]
}