// 引用模板
import '../src/pages/fj/login' // 登录
import '../src/pages/index/index' // 主页
import '../src/404' // 所有404

import store from './store'
import * as types from './types'

// Vue.use(VueRouter)

// 配置路由
const routes = [
	 // 所有登录
	{
		path: '/',
		name: 'login',
		meta: {
			keepAlive: false
		},
		component: (resolve) => require(['../src/pages/fj/login.vue'], resolve),
	},
	// 主页
	{
		path: '/index',
		name: 'index',
		meta: {
			keepAlive: false
		},
		component: (resolve) => require(['../src/pages/index/index.vue'], resolve),
	},

	// 所有404
	{
		path: '*',
		name: 'P404',
		meta: {
			requireAuth: true,
			keepAlive: false
		},
		component: (resolve) => require(['../src/404.vue'], resolve)
	}
];

// 使用配置文件规则
const router = new VueRouter({
	// 去掉#号 history hash
	mode: 'hash',
	routes
});

// 页面刷新时，重新赋值token
if(window.localStorage.getItem('token')) {
	store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
	if(to.matched.some(r => r.meta.requireAuth)) {
		if(store.state.token) {
			next();
		} else {
			next({
				path: '/',
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		next();
	}
});

export default router;