import md5 from "js-md5"
import qs from 'qs'
import {
	dateFormat,
	removeStorage
} from '@/utils/index.js'
import Cookies from 'js-cookie'
import userSource from '@/common/userSource.js'
// 公共地址
const platform = uni.getSystemInfoSync().platform
let BASE_URL = (process.env.NODE_ENV === 'production' || platform === 'devtools') ? 'https://api.bearhome.cn' : ''
export const myRequest = (options) => {
	// 调接口加载
	// uni.showLoading({
	// 	title: "加载中",
	// 	mask: true,
	// });
	const dateInfo = dateFormat(new Date().getTime(), "mdY");
	const localIp = uni.getStorageSync('local_ip')
	const common = uni.getStorageSync('common')
	if (options.url.indexOf('bapi') > -1) {
		BASE_URL = 'https://uat-m.juranguanjia.com'
	}
	if (!options.headers) options.headers = {}
	options.headers['admtoken'] = common.admToken;
	if (options.url.indexOf('papi') > -1) {
		options.headers['apiToken'] = md5(dateInfo + md5("JrWy2020Gj") + 'xxxx');
		options.headers['privateKey'] = 'xxxx';
		common.token && (options.headers['token'] = common.token)
		if (!options.headers['version']) {
			options.headers['version'] = '1.0';
		}
		options.headers['usersource'] = userSource.source;
	}else if (options.url.indexOf('hapi') > -1) {
	
		options.headers['token'] = common.token;
		options.headers['version'] = 'V2';
		options.headers['privateKey'] = localIp;
		options.headers['apiToken'] = md5(dateInfo + md5('JrWy2020Gj') + localIp)
	} else {
		options.headers['jr_sso_token'] = common.token
		// #ifdef MP-WEIXIN || MP-ALIPAY
		// 暂时注释 
		options.headers['Cookie'] = 'jr_sso_token=' + common.token
		options.headers['apiToken'] = md5(dateInfo + md5("JrWy2020Gj") + 'xxxx');
		// #endif
		// #ifdef H5
		Cookies.set('jr_sso_token', common.token);
		// #endif
		options.headers['apiToken'] = md5(dateInfo + md5("JrWy2020Gj") + 'xxxx');
		options.headers['privateKey'] = 'xxxx';	
	}
	if (options.headers.type === 'file') {
		options.headers['Content-Type'] = 'multipart/form-data'
		let data = options.data
	}
	if (options.formData) {
		options.headers['emulateJSON'] = true;
		options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
	}
	let newData = {}
	if (options.headers.noFilter) {
		newData = options.data;
	} else {
		for (let key in options.data) {
			if (options.data[key] && options.data[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
				newData[key] = options.data[key];
			}
		}
	}


	// H5正式
	// let newUrl = 'https://m.bearhome.cn' + options.url
	// 小程序正式
	// let newUrl = 'https://api.bearhome.cn' + options.url
	// 小程序测试 & H5测试
	// let newUrl = 'https://uat-m.juranguanjia.com' + options.url
	// 小程序正式
	let newUrl = 'https://api.bearhome.cn' + options.url
	// 小程序测试
	// let newUrl = 'https://uat-m.juranguanjia.com' + options.url
	// let newUrl = options.url

	return new Promise((resolve, reject) => {
		uni.request({
			url: newUrl,
			//默认参数
			data: options.formType == 'string' ? qs.stringify({
				...options.data
			}) : {
				...newData
			},
			// 配置请求头参数-例如token
			header: Object.assign({}, options.headers, {
				'Authorization': `Bearer ${uni.getStorageSync('common').Authorization || uni.getStorageSync('common').b_token}`
			}),
			responseType: options.responseType || 'text',
			method: options.method || 'GET',
			// sslVerify: true,
			// 接口请求成功
			success: (res) => {
				// 关闭加载
				// uni.hideLoading();
				// 调用成功且有数据 返回数据  组件内通过 .then() 或者async await 接受异步返回数据
				//resolve(res.data)
				//在接口200 调1用成功后 才能进行判断接口内的状态码 return_code 以此判定作何操作和提示
				const {
					statusCode,
					data,
					code
				} = res
				let return_message = res.data.msg || (res.data.error && res.data.error.message) || res.data.errorInfo || null;
				let resCode = res.statusCode
				let dataCode = data.statusCode || data.code || (options.isUrl == 'bapi' ? 200 : 0)
				let isCapi = options.url.indexOf('capi') > -1;
				switch (resCode) {
					case 200:
						switch (dataCode) {
							case 200:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 1:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 400:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 302:
								// 成功的数据data状态码  则直接返回数据
								resolve({
									data:{}
								})
								break;	
							case 403:
								removeStorage();
								if(options.noLogin != true) {
									// console.log(options)
									// #ifdef MP-WEIXIN || MP-ALIPAY
									uni.navigateTo({
										url: '/pageUserInfos/login/auth/index'
									})
									// #endif
									// #ifdef H5 || MP-TOUTIAO
									uni.navigateTo({
										url: '/pages/login/auth/login'
									})
									// #endif
								}
								break;
							case 422:
								// 成功的数据data状态码  则直接返回数据
								resolve(res)
								break;
							case 200:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case 0:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							case -1:
								// 成功的数据data状态码  则直接返回数据
								resolve(res.data)
								break;
							default:
								reject(res)
								return uni.showToast({
									title: return_message || '请求失败',
									icon: 'none',
								})
						}
						break;
					case 401:
						removeStorage();
						if(options.noLogin != true) {
							// console.log(options)
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
					case 403:
						removeStorage();
						if(options.noLogin != true) {
							// console.log(options)
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
					default:
						reject(res);
						return uni.showToast({
							title: return_message || '请求失败',
							icon: 'none',
						})
				}
			},
			// 接口接口失败
			fail: (error) => {
				// 失败数据
				reject(error)
			},
			complete: (data) => {
				switch (data.statusCode) {
					case 401:
						removeStorage();
						if(options.noLogin != true) {
							// console.log(options)
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
					case 403:
						removeStorage();
						if(options.noLogin != true) {
							// console.log(options)
							// #ifdef MP-WEIXIN || MP-ALIPAY
							uni.navigateTo({
								url: '/pageUserInfos/login/auth/index'
							})
							// #endif
							// #ifdef H5 || MP-TOUTIAO
							uni.navigateTo({
								url: '/pages/login/auth/login'
							})
							// #endif
						}
						break;
				}
			}
		})
	})
}
