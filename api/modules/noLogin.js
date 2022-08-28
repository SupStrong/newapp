import {myRequest} from "../request.js"

// 首页 - 订单列表
export function getOrderList(data){
	return myRequest({
		method: "POST",
		url: "/japi/order/app/orderslist",
		data,
		noLogin: true,
		headers: {
			noFilter: true
		}
	})
}

// 首页 - 用户的个性定制信息
export function getProjectUserInfo(data) {
	return myRequest({
		method: 'GET',
		url: `/papi/home/project/userinfo`,
		data,
		noLogin: true
	})
}

// 首页 - 合同相关词典 
export function getContractDict() {
	return myRequest({
		method: 'POST',
		url: `/papi/juran/contract/dict/list`,
		noLogin: true
	})
}

// 首页 - 相关词典
export function getDict() {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/manage/dict/list`,
		noLogin: true
	})
}

// 获取用户设备列表
export function getDeviceRemindList() {
	return myRequest({
		method: "GET",
		url: '/papi/app/home/device/reminds',
		noLogin: true
	})
}