import {myRequest} from "../request.js"

// 获取当前角色下可以申请的
export function getFilterMerchant (data) {
	return myRequest({
		method: "GET",
		url: `/papi/sys/merchant/${data.child}/type`,
		data
	})
}
// 获取每个页面海报
export function getSitePage (data) {
	return myRequest({
		method: "GET",
		url: `/papi/juran/site/pages/${data.childName}`,
		data
	})
}
// 获取工程师三级类目
export function getQueryCategoriesTree (data) {
	return myRequest({
		method: "POST",
		url: `/api/product/product/category/queryCategoriesTree`,
		data
	})
}

// 获取公共的dict
export function getStoreDict (data) {
	return myRequest({
		method: "GET",
		url: `/papi/home/store/dict`,
		data
	})
}

// 获取·三级
export function getSelectProductSkillAll (data) {
	return myRequest({
		method: "GET",
		url: `/api/product/product/category/selectProductSkillAll`,
		data
	})
}
// 获取设计方向
export function getDictbytype (data) {
	return myRequest({
		method: "GET",
		url: `/api/user/dict/dictbytype?dictType=${data.style}`,
		data
	})
}
// 保存商家信息
export function userSave(data) {
	return myRequest({
		method: "POST",
		url: '/api/user/examine/saveMerchantsCentre',
		headers:{
			noFilter:true	
		},
		data
	})
}
// 获取商家类型
export function getMerchant(data) {
	return myRequest({
		method: "Get",
		url: `/papi/sys/merchant/${data.id}/type`,
		data
	})
}
// 我的文章
export function getArticleList(data) {
	return myRequest({
		method: "POST",
		url: `/papi/juran/mercms/article/list`,
		data
	})
}
// 我的商机
export function getQueryPageList(data) {
	return myRequest({
		method: "POST",
		url: `/capi/CrmBusiness/queryPageList`,
		data
	})
}

// /papi/juran/site/pages/cpgyszmy
export function sitePage(data) {
	return myRequest({
		method: "GET",
		url: `/papi/juran/site/pages/${data.style}`,
		data
	})
}

export function statisticsByUserId(data) {
	return myRequest({
		method: "GET",
		url: `/capi/CrmBusiness/statisticsByUserId?userId=${data.userId}`,
		data
	})
}
// 获取首页的统计

export function getStatistics(data) {
	return myRequest({
		method: "GET",
		url: `/papi/home/order/statistics`,
		data
	})
}

export function getOrderTuiguang(data) {
	return myRequest({
		method: "GET",
		url: `/papi/home/order/tuiguang`,
		data
	})
}