import { mapGetters, mapMutations } from 'vuex';

export default {
	methods: {
		...mapMutations(['SET_CATEGORY_PAGE_PARAMS']),
		jumpPage(data){
			let { tolinkObj } = data;
			if(tolinkObj){
				let { type, data } = tolinkObj
				switch(type){
					case 'custom': 
						let base = JSON.parse(data.base)
						let canshu = ''
						for(let key in base){
							canshu = canshu + `${key}=${base[key]}&`
						}
						let tabList = [
							'/pages/index/index',
							'/pages/shopping/index',
							'/pages/myHome/index',
							'/pages/mine/index'
						]
						let dataIdArr = data.id.split(/\.com|\.cn/);
						let url = dataIdArr[1] || dataIdArr[0];
						let isSwitch = tabList.includes(url);
						if(isSwitch){
							uni.setStorageSync('baseDate', new Date().getTime());
							uni.setStorageSync('baseList', base);
							this.SET_CATEGORY_PAGE_PARAMS(base);
							uni.switchTab({
								url
							})
						}else{
							uni.navigateTo({
								url: `${url}?${canshu.slice(0,-1)}`,
							})	
						}
						break;
					case 'good':
						if(data.type == "scheme"){
							uni.navigateTo({
								url: `pagesMarketing/goods/detail?id=${data.id}`
							})
						}else{
							uni.navigateTo({
								url: `/servicePages/service/service_item?id=${data.id}`
							})
						}
					case 'project':
						if(data.type == 2) { // 案例方案
							uni.navigateTo({
								url: `/pagesMarketing/programme/detail?code=${data.id}`
							})
						} else if(data.type == 0 || data.type == 1) { // 系统/标准方案
							uni.navigateTo({
								url: `/shoppingMall/programme/detail?code=${data.id}`
							})
						}
						break;
					case 'article':
						uni.navigateTo({
							url: `/publicPage/article/index?code=${data.id}`
						})
						break;
					case 'topic':
						uni.navigateTo({
							url: `/pages/common/h5Page?name=${data.name}&id=${data.id}`
						})
						break;
					case 'applet':
						uni.navigateToMiniProgram({
						  appId: data.appid,
						  success(res) {
						    
						  }
						})
					case 'h5Page':
						uni.navigateTo({
							url: `/pages/common/h5Page?name=${data.name}&path=${data.path}`
						})
						break;
					default:
						uni.showToast({
							title: "未找到该页面",
							icon: 'none'
						})
						break;
				}
			}
		},
	}
}
