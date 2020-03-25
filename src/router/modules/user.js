export default {
	path: 'user',
	component: () => import(/* webpackChunkName: "user" */ '@/views/user/index'),
	name: 'user',
	redirect: '/user/list',
	children: [
		{
			path: 'list',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/list'),
			name: 'list',
			meta: {
				loginRrquired: true,
				name: "人员列表",
				title:'人员管理'
			}
		},
		{
			path: 'add',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/add'),
			name: 'add',
			meta: {
				loginRrquired: true,
				name: "新增人员",
				title:'人员管理'
			}
		},
		{
			path: 'details',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/details'),
			name: 'details',
			meta: {
				loginRrquired: true,
				name: "人员详情",
				title:'人员管理'
			}
		}
	]
}