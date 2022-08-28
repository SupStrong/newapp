import {myRequest} from "../request.js"

// 获取商品三级类目全部
export function getaCtegoryTree (data) {
	return myRequest({
		method: "POST",
		url: `/api/device/product/categoryTree`,
		headers:{
			noFilter:true	
		},
		data
	})
}
export function getaCtegoryTreeAll (data) {
	return myRequest({
		method: "POST",
		url: `/api/product/product/category/queryCategoriesTree`,
		headers:{
			noFilter:true	
		},
		data:{
			    bizParam:{
			      enable: 1,
			      isProduct: null,
			      parentId: 0
			    }
		}
	})
}
// 获取服务三级类目全部
// 查询关联商品
export function getCorderDevice (data) {
	return myRequest({
		method: "POST",
		url: `/api/device/query/public/corder_device`,
		headers:{
			noFilter:true	
		},
		data
	})
}
// //获取关联服务列表
export function getMerchantProduct (data) {
	return myRequest({
		method: "POST",
		url: `/api/product/query/public/merchant_product`,
		data
	})
}

// 创建订单
export function createPlatformSupplierOrder (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/fuwu/createPlatformSupplierOrder`,
		data,
		headers:{
			noFilter:true	
		},
	})
}

// 创建订单
export function getPayCorderDevice (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/wx/paymentcreate`,
		data
	})
}
// 获取列表
export function getOrderInfoPage (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/order/getOrderInfoPage`,
		data
	})
}

export function getServiceList (data) {
	return myRequest({
		method: "POST",
		headers:{
			noFilter:true	
		},
		url: `/api/product/query/public/merchant_product`,
		data
	})
}

// 获取商品关联服务列表
export function getRelationServiceList (data) {
	return myRequest({
		method: "POST",
		url: `/api/product/query/public/corder_device`,
		data
	})
}

// 查询所有商品
export function getSearchSku (data) {
	return myRequest({
		method: "POST",
		url: `/api/device/reminderCycle/searchSku`,
		data
	})
}


export function queryCategoryTreeRelation (data) {
	return myRequest({
		method: "Get",
		url: `/api/device/categorybymerchantid?merchantId=${data}`,
		data
	})
}
export function querySupplierDetail (data) {
	return myRequest({
		method: "post",
		url: `/api/user/merchant/queryDetail`,
		data
	})
}