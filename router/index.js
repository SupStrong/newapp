import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	// 判断进入页面是否需要登录
	if (to.meta && to.meta.needLogin) {
		let data = uni.getStorageSync('common')
		if(data.token){
			next();
		} else {
			next('/pageUserInfos/login/auth/index')
		}
	}else{
		next();
	}
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    // console.log('跳转结束')
})

export {
	router,
	RouterMount
}
