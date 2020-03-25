export default {
	path: 'charts',
	component: () => import(/* webpackChunkName: "charts" */ '@/views/charts/index'),
	name: 'charts',
	redirect: '/charts/echarts',
	children: [
		{
			path: 'echarts',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/charts/echarts'),
			name: 'echarts',
			meta: {
				loginRrquired: false,
				name: "echarts图表",
				title: '统计分析'
			}
		},
		{
			path: 'vue-echarts',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/charts/vue-echarts'),
			name: 'vueEcharts',
			meta: {
				loginRrquired: false,
				name: "vue-echarts图表",
				title: '统计分析'
			}
		}
	]
}