/**
 * 慧采商城相关接口
 */
import {
	myRequest
} from "../request.js"

// 首页搜索
export function getGoodsList({
	item_name, // 商品名称
	platform_name, // 生态名称
	project_name, // 方案名称
	page_no,
	page_size
} = {}) {
	return myRequest({
		method: 'POST',
		url: '/papi/home/purchase/item/relevance',
		data: {
			item_name,
			platform_name,
			project_name,
			page_no,
			page_size
		}
	})
}

// 商品创建订单
export function createGoodsOrder({
	address,
	area_id,
	city_id,
	is_carts,
	is_checked,
	item_info,
	mobile,
	name,
	phone,
	price,
	price_item,
	price_minus,
	prov_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: '/papi/home/purchase/order/create',
		data: {
			address,
			area_id,
			city_id,
			is_carts,
			is_checked,
			item_info,
			mobile,
			name,
			phone,
			price,
			price_item,
			price_minus,
			prov_id
		},
		headers: {
			noFilter: true
		}
	})
}

// 字典
export function getPurchaseDict() {
	return myRequest({
		method: 'GET',
		url: '/papi/home/purchase/dict'
	})
}

// 我的采购订单列表
export function getMyGoodsOrderList({
	status,
	page_no,
	page_size
} = {}) {
	return myRequest({
		method: 'POST',
		url: '/papi/home/purchase/order/list',
		data: {
			status,
			page_no,
			page_size
		}
	})
}

// 确认收货
export function confirmGoodsOrder(code) {
	return myRequest({
		method: 'POST',
		url: `/papi/home/purchase/order/${code}/confirm`
	})
}

// 取消订单
export function cancelGoodsOrder(code) {
	return myRequest({
		method: 'POST',
		url: `/papi/home/purchase/order/${code}/cancel`
	})
}

// 订单详情
export function goodsOrderDetail(code) {
	return myRequest({
		method: 'GET',
		url: `/papi/home/purchase/order/${code}/info`
	})
}