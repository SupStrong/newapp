import {
	myRequest
} from "../request.js"

// 城市列表
export function getCityList() {
	return myRequest({
		url: '/japi/web/area/app/citylist?cityName='
	})
}

// 开通服务城市列表
export function getHotCityList() {
	return myRequest({
		url: '/japi/web/area/app/opencitylist'
	})
}

// 本地IP
export function getIP() {
	return myRequest({
		method: 'get',
		url: '/papi/sso/geoip'
	})
}

// 获取省市区列表
export function getAreaList() {
	return myRequest({
		url: '/papi/sso/area/json'
	})
}

// 获取城市经纬度
export function getAreaDetail(data) {
	return myRequest({
		method: 'post',
		url: '/papi/sso/area/name',
		data
	})
}

// 获取专题信息
export function getTopicDetail(data) {
	return myRequest({
		url: '/papi/juran/site/pages/' + data.name,
	})
}

// 获取小程序码
export function getAppletCode(data) {
	return myRequest({
		method: 'post',
		url: '/japi/product/product/fuwu/codePic',
		data
	})
}

// 获取用户信息
export function tokenGetUserInfo(data) {
	return myRequest({
		method: 'post',
		url: '/papi/sso/user/status',
		data
	})
}

// 统计点击数量
export function submitSpotCount(data = {}) {
	return myRequest({
		method: 'post',
		url: '/papi/app/share/digg',
		data
	})
}

// 获取广告详情
export function getAdsDetail(data) {
	return myRequest({
		url: `/papi/juran/site/ads/${data.code}`,
		data
	})
}

// 上传图片 -- JAVA
export function JavaUploadImg(data) {
	return myRequest({
		method: 'POST',
		url: `/japi/file/upload`,
		data
	})
}

// 上传base64 -- JAVA
export function JavaUploadBase(data) {
	return myRequest({
		method: 'POST',
		url: `/api/file/uploadBase64`,
		data
	})
}

// 获取saas上json脚本
export function getJsonInfo(iden) {
	return myRequest({
		url: `/papi/juran/js/${iden}/info`,
	})
}
// 导出ppt、
export function exportPpt(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/tmp/file`,
		data
	})
}

// 获取微信签名接口
export function getWxSignture(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/sso/wechat/app/signture`,
		data
	})
}

// 获取h5跳转到微信小程序的链接
export function getWxJumpUrl({
	path,
	query
} = {}) {
	return myRequest({
		url: `/japi/order/facilitator/wxaGenerateUrllink`,
		data: {
			path,
			query
		}
	})
}

// 获取脚本信息
export function getJsonFile(code) {
	return myRequest({
		url: `/papi/juran/js/${code}`
	})
}