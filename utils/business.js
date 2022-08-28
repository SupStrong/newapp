// 判断是否登录 返回值 ture | false
export function needLogin(tips) {
		let {
			token
		} = uni.getStorageSync('common') || {};
		if(!token) {
			uni.showToast({
				title: tips,
				icon: 'none'
			})
			setTimeout(() => {
				// #ifndef H5 || MP-TOUTIAO
				uni.navigateTo({
					url: '/pageUserInfos/login/auth/index'
				})
				// #endif
				
				// #ifdef H5 || MP-TOUTIAO
				uni.navigateTo({
					url: '/pages/login/auth/login'
				})
				// #endif
			}, 1500);
			return false;
		} 
		return true;
}