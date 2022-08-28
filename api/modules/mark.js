import {
	myRequest
} from "../request.js"

// 我的拼团
export function myGroupList(data) {
	return myRequest({
		method: 'GET',
		url: '/bapi/h5app/wxapp/groupOrders',
		data
	})
}
export function groupDetail(data) {
	return myRequest({
		method: 'GET',
		url: `/bapi/h5app/wxapp/groupOrders/${data.id}`,
		data
	})
}
// 用户的个性定制信息
export function getProjectUserInfo(data) {
	return myRequest({
		method: 'GET',
		url: `/papi/home/project/userinfo`,
		data
	})
}
// 用户的个性定制信息
export function postProjectUserInfo(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/userinfo`,
		data
	})
}