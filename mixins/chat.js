/*
	客服mixins
*/
export default {
	
	data() {
		return {
			defChat: 'https://work.weixin.qq.com/kfid/kfcd2a772ebfddf3904', // 销售客服微信
			serviceChat: 'https://work.weixin.qq.com/kfid/kfce6445857942864bb', // 服务客服微信
			defChatMobile: '400-101-1155', // 销售客服电话
			serviceChatMobile: '400-155-5151', // 服务客服电话
		}
	},
	methods: {
		handleKefu(type = 'defChat') {
			// #ifdef MP-WEIXIN || H5
			this.handleClickChat(type);
			// #endif
			// #ifndef MP-WEIXIN || H5
			// console.log('zheli', type, this[`${type}Mobile`])
			const CustomerCareMobile = this[`${type}Mobile`];
			uni.makePhoneCall({
			    phoneNumber: CustomerCareMobile
			});
			// #endif
		},
		handleClickChat(type = 'defChat') {
			const CustomerCare = this[type];
			// #ifdef MP-WEIXIN
			wx.openCustomerServiceChat({
				extInfo: {
					url: CustomerCare
				},
				corpId: 'wwe16f7647056dd135',
				success(res) {},
				fail(err) {
					uni.showToast({
						title: err.errMsg,
						icon: 'none',
					})
				}
			})
			// #endif

			// #ifdef H5
			window.open(CustomerCare);
			// #endif
		},
	}
}