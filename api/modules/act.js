import {myRequest} from "../request.js"

// 获取微信openid
// getOpenIdInfo
export function getOpenIdInfo(data){
	return myRequest({
		method: "GET",
		url: "/japi/cashier/getOpenIdInfo",
		data,
		headers: {
			noFilter: true
		}
	})
}

// 微信浏览器支付
export function wxPaymentCreate(data){
	return myRequest({
		method: "POST",
		url: "/japi/cashier/wx/paymentcreate",
		data,
		headers: {
			noFilter: true
		}
	})
}

// 支付宝浏览器支付
export function alipayPaymentCreate(data){
	return myRequest({
		method: "POST",
		url: "/japi/cashier/alipay/paymentcreate",
		data,
		headers: {
			noFilter: true
		}
	})
}

// 微盾服务预约接口
export function addReservationInfo(data){
	return myRequest({
		method: "POST",
		url: "/japi/web/order/addReservationInfo",
		data,
		headers: {
			noFilter: true
		}
	})
}

// 获取图形码序列号
export function getCaptchaserialnum(data){
	return myRequest({
		method: "GET",
		url: "/japi/web/captcha/captchaserialnum",
		data
	})
}

//获取图形码
export function getcaptcha(data){
	return myRequest({
		method: "GET",
		url: "/japi/user/captcha/create",
		responseType: 'arraybuffer',
		data
	})
}

// 获取验证码
export function getSendcode(data){
	return myRequest({
		method: "POST",
		url: "/japi/web/user/message/sendcode",
		data
	})
}

// 登录
export function loginMobile(data){
	return myRequest({
		method: "POST",
		url: "/japi/auth/loginMobile",
		data
	})
}

// /couponcard/binduser
export function bindCouponToUser(data){
	return myRequest({
		method: "POST",
		url: "/japi/activity/couponcard/binduser",
		data
	})
}