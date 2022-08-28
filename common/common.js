/**
 * mixins文件
 * chat：跳转企业微信客服
 * tokenLogin：token登录
 * filterSceneParams：解析由扫码进来的路由参数
 * judgeCommissionMixins：分佣逻辑
 **/


export const chat = {
	methods: {
		handleClickChat() {
			// #ifdef MP-WEIXIN
			wx.openCustomerServiceChat({
				extInfo: {
					url: 'https://work.weixin.qq.com/kfid/kfcd2a772ebfddf3904'
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
			window.open('https://work.weixin.qq.com/kfid/kfcd2a772ebfddf3904');
			// #endif
		},
	}
}

import {
	tokenGetUserInfo
} from '@/api/modules/common.js';
import { getUserInfo } from '@/api/modules/user.js'
export const tokenLogin = {
	methods: {
		getTokenUserInfo(getOptions) {
			const {
				token
			} = uni.getStorageSync('common');
			if (token == getOptions.token) {
				return;
			}
			if (getOptions.token) {
				uni.setStorageSync('common', {
					token: getOptions.token
				})
				tokenGetUserInfo({
					token: getOptions.token
				}).then(config => {
					getUserInfo().then(base => {
						if(base.code === 200){
							let user = {
								...config.data,
								...base.data,
							};
							uni.setStorageSync('common',user);
						}
					})
				})
			}
		}
	}
}

export const filterSceneParams = {
	methods: {
		urlParamsToObj(str) {
			var obj = {};
			var arr1 = str.split('?');
			var arr2 = arr1[0].split('&');
			for (var i = 0; i < arr2.length; i++) {
				var res = arr2[i].split('=');
				obj[res[0]] = res[1];
			}
			return obj;
		}
	}
}

export const judgeCommissionMixins = {
	methods: {
		setEngineerIdContent(type="replace", data) {
			const { createTime=0, tid } = uni.getStorageSync('engineerId');
			const nowTime = Date.now();
			const difference = 86400000 * 14; // 两周的时间戳
			// const difference = 60000 * 5; // 五分钟的时间戳
			const validity = (nowTime - difference) < createTime;
			
			if(type == "inspect") {
				if(!validity) {
					uni.removeStorageSync('engineerId');
				}
				return;
			}
			const newData = {
				createTime: nowTime,
				tid: data.tid,
				rid: (data.rid != 'undefined' && data.rid != undefined) ? data.rid : 0
			}
			if(tid && validity) {
				if(data.tid == tid) {
					this.setStorageEngineer(newData);
				} else {
					return;
				}
			} else {
				this.setStorageEngineer(newData);
			}
		},
		setStorageEngineer({createTime, tid,rid}) {
			uni.setStorageSync('engineerId', {
				createTime,
				tid,
				rid,
			})
		},
		
	}
}