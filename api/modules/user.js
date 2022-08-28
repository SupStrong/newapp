import {
	myRequest
} from "../request.js"

// 获取用户身份
export function getMerchantInfo({
	user_id
}) {
	return myRequest({
		method: 'POST',
		url: '/papi/sys/login/merchant',
		data: {
			user_id
		}
	})
}

// 获取admtoken
export function getAdmToken({
	merchant_id,
	token,
	user_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: '/papi/sys/login',
		data: {
			merchant_id,
			token,
			user_id
		}
	})
}


export function getUserInfo() {
	return myRequest({
		url: '/papi/sso/user/info'
	})
}

// 修改用户基本信息
export function setUserInfo(data) {
	return myRequest({
		method: "POST",
		url: "/papi/sso/user/info",
		data,
		headers: {
			noFilter: true
		}
	})
}

// 修改头像
export function setUserFace(data) {
	return myRequest({
		method: "POST",
		url: "/papi/sso/user/face",
		data,
		headers: {
			type: 'file'
		}
	})
}

// 获取用户地址列表
export function getAddressList(userId) {
	return myRequest({
		method: "post",
		url: "/japi/user/fuwu/addresslist",
		data: {
			userId: userId
		}
	})
}

// 检查状态
export function getUserStatus(token) {
	return myRequest({
		method: "post",
		url: "/papi/sso/user/status",
		data: {
			token: token
		}
	})
}
// 导出报价单
export function excelExport(data) {
	return myRequest({
		method: "post",
		url: "/papi/home/price/excel/code",
		data: {data:data},
		headers: {
			noFilter: true
		}
	})
}
// 导出报价单 文件流
export function excelExportFile(data) {
	return myRequest({
		method: "post",
		url: `/papi/home/price/excel/code/${data.code}`,
		data: data,
		headers: {
			noFilter: true
		}
	})
}

// 获取个人用户角色（身份）
export function getUserIden({
	user_id,
} = {}) {
	return myRequest({
		method: "POST",
		url: '/papi/sys/login/person',
		data: {
			user_id,
		}
	})
}

// 获取用户设备列表
export function getDeviceRemindList() {
	return myRequest({
		method: "GET",
		url: '/papi/app/home/device/reminds',
	})
}

// 获取操作员列表
export function opereationList(data) {
	return myRequest({
		method: "POST",
		url: '/papi/sys/worker',
		data: data
	})
}

// 新增操作员 
export function opereationAdd(data) {
	return myRequest({
		method: "POST",
		url: '/papi/sys/worker/create',
		data: data
	})
}

// 更新操作员
export function opereationUpdate(id,data) {
	return myRequest({
		method: "POST",
		url: `/papi/sys/worker/${id}/update`,
		data: data
	})
}
// 获取操作员详情 
export function opereationDetail(id) {
	return myRequest({
		method: "GET",
		url: `/papi/sys/worker/${id}/update`
	})
}

// 删除操作员 
export function opereationDelete(id) {
	return myRequest({
		method: "POST",
		url: `/papi/sys/worker/${id}/delete`
	})
}

// 个人中心数据统计 
export function storeStatistics() {
	return myRequest({
		method: "POST",
		url: `/papi/home/store/statistics`,
		noLogin: true
	})
}

// 个人中心服务订单统计 
export function getServiceOrderCount(id) {
	return myRequest({
		method: "GET",
		url: `/api/order/order/getUserMerchantStatusAmount?merchantId=${id}`
	})
}

// 个人中心商机线索统计 
export function businessCount(id) {
	return myRequest({
		method: "POST",
		url: `/capi/CrmBusiness/statisticsByUserId?userId=${id}`
	})
}
// 获取文章列表 
export function getArticleList(data) {
	return myRequest({
		method: "POST",
		url: `/papi/juran/mercms/article/list`,
		data:data
	})
}

// 发布文章 
export function addArticle(data) {
	return myRequest({
		method: "POST",
		url: `/papi/juran/mercms/article/add`,
		data: data
	})
}

// 修改文章 
export function updateArticle(id,data) {
	return myRequest({
		method: "POST",
		url: `/papi/juran/mercms/article/${id}/update`,
		data:data
	})
}

// 获取文章详情 
export function getArticleDetail(id) {
	return myRequest({
		method: "GET",
		url: `/papi/juran/mercms/article/${id}/info`
	})
}

// 删除文章 
export function deleteArticle(id) {
	return myRequest({
		method: "POST",
		url: `/papi/juran/mercms/article/${id}/del`
	})
}


 