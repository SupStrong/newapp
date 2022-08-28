import { alipaySendCoupon,ownSendCoupon } from '@/api/modules/coupon.js';
import { needLogin } from '@/utils/business.js'
import { toast } from '@/utils/index.js';

export default {
	data() {
		return {
			refashCouponList: null,
			receiveSuccess: true
		}
	},
	methods: {
		async btnClick(data, callback) {
			const { btnType, type, coupon_info_id } = data;
			
			if(!needLogin('登录后领取')) return;
			
			switch(btnType) {
				case 'receive': // 领取
					await this.distributeReceive({type, coupon_info_id})
					this.refashCouponList = callback;
					break;
				case 'toUse': // 使用
					break;
				case 'choice': // 选中
					break;
				default:
					break;
			}
			
			return this.receiveSuccess;
		},
		
		// 优惠券领取类型分发
		async distributeReceive({type, coupon_info_id}) {
			const { mobile, nike_name, open_id } = uni.getStorageSync('common');
			if(type === 5) {
				// #ifdef MP-ALIPAY
					const obj = {
						id: coupon_info_id,
						phone: mobile,
						taobao_nick: nike_name,
						open_id: open_id
					}
					await this.receiveAlipayCoupon(obj);
				// #endif
			} else {
				await this.receiveOwnCoupon({coupon_info_id});
			}
		},
		async receiveOwnCoupon(obj) {
			try{
				let res = await ownSendCoupon(obj);
				
				if(res.code === 200) {
					toast('恭喜您，领取成功')
					this.refashCouponList && this.refashCouponList('replace');
				}
			}catch(e){
				this.receiveSuccess = false;
			}
		},
		// #ifdef MP-ALIPAY
		// 领取支付宝平台优惠券
		receiveAlipayCoupon(obj) {
			alipaySendCoupon(obj).then(res => {
				my.ap.navigateToAlipayPage({
					path: res.data.app_url,
					success(res) {
						// console.log(res);
					},
					fail(err) {
						// console.log(err);
						uni.showToast({
							title: '无法跳转至领取页面',
							icon: 'none'
						})
					}
				})
			})
		},
		// #endif
	}
}