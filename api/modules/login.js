import {
	myRequest
} from "../request.js"

// 图像验证码
export function getCaptcha() {
	return myRequest({
		url: '/papi/sso/captcha'
	})
}

// 验证码
export function getRand() {
	return myRequest({
		url: '/papi/sso/getrand'
	})
}

// 发送短信验证码
export function getSendCode(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/sso/sendcode',
		data
	})
}

// 手机号是否注册
export function getMobileFlag(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/sso/user/checkmobile',
		data
	})
}

// 密码登录
export function getPasswrod(data) {
	return myRequest({
		method: 'POST',
		url: "/papi/sso/user/login",
		data: data,
		headers: {
			version: '1.0'
		}
	})
}

// 验证码登录
export function getCode(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/sso/user/login/code',
		data: data,
		headers: {
			version: '1.0',
			// #ifdef H5
			sourcetype: 3,
			// #endif
		}
	})
}

// 注册
export function setUser(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/sso/user/register',
		data,
		// #ifdef H5
		headers: {
			sourcetype: 3,
		}
		// #endif
	})
}

// 修改密码
export function setPassword(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/sso/user/passwd',
		data
	})
}

// 变更手机号
export function setMobile(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/sso/user/upmobile',
		data
	})
}

// 微信code授权登录
export function wxLoginByCode({
	appid,
	code,
	userinfo
} = {}) {
	return myRequest({
		url: '/papi/sso/wechat/user/code',
		method: 'post',
		data: {
			appid,
			code,
			userinfo
		}
	})
}

// 微信绑定手机号
export function wxBind({
	openid,
	mobile,
	code
} = {}) {
	return myRequest({
		url: '/papi/sso/wechat/user/bind',
		method: 'post',
		data: {
			openid,
			mobile,
			code
		},
		// #ifdef H5
		headers: {
			sourcetype: 3,
		}
		// #endif
	})
}
// 支付宝code授权登录
export function aliLoginByCode({
	appid,
	code,
	userinfo
} = {}) {
	return myRequest({
		url: '/papi/sso/alipay/user/code',
		method: 'post',
		data: {
			appid,
			code,
			userinfo
		}
	})
}

// 支付宝绑定手机号
export function aliBind({
	openid,
	mobile,
	code
} = {}) {
	return myRequest({
		url: '/papi/sso/alipay/user/bind',
		method: 'post',
		data: {
			openid,
			mobile,
			code
		}
	})
}

// 支付宝获取手机号解密
export function aliDecrypt(data) {
	return myRequest({
		url: '/papi/sso/alipay/decrypt/mobile',
		method: 'post',
		data,
		// #ifdef H5
		headers: {
			sourcetype: 3,
		}
		// #endif
	})
}

// 微信获取手机号解密
export function wxDecrypt(data) {
	return myRequest({
		url: '/papi/sso/wechat/decrypt/mobile',
		method: 'post',
		data,
		// #ifdef H5
		headers: {
			sourcetype: 3,
		}
		// #endif
	})
}

// 百度code授权登录
export function baiduLoginByCode({
	appid,
	code,
} = {}) {
	return myRequest({
		url: '/papi/sso/baidu/user/code',
		method: 'post',
		data: {
			appid,
			code,
		}
	})
}

// 百度绑定手机号
export function baiduBind({
	openid,
	mobile,
	code,
	source
} = {}) {
	return myRequest({
		url: '/papi/sso/baidu/user/bind',
		method: 'post',
		data: {
			openid,
			mobile,
			code,
			source
		}
	})
}

