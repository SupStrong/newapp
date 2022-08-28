import {
	myRequest
} from "../request.js"

// 获取所有的二级三级类目
export function allServiceCategory() {
	return myRequest({
		url: '/japi/web/category/secondAndThird'
	})
}

// 获取二级类目
export function serviceCategory() {
	return myRequest({
		url: "/japi/web/category/second"
	})
}

// 获取三级类目
export function getThirdCate(id) {
	return myRequest({
		url: `/japi/web/category/third?parentId=${id}`
	})
}

// 获取类目列表
export function getCateList({
	cid,
	cityId,
	keyword
} = {}) {
	return myRequest({
		url: '/japi/web/product/hf/itemslist',
		data: {
			cid,
			cityId,
			keyword
		}
	})
}

// 获取三级类目商品列表
export function getGoodsList({
	cid,
	cityId,
	keyword
} = {}) {
	return myRequest({
		url: '/japi/web/product/app/itemslist',
		data: {
			cid,
			cityId,
			keyword
		}
	})
}

// 获取服务商品详情
export function getItemInfo(id) {
	return myRequest({
		url: '/japi/web/product/hf/itemsinfo',
		data: {
			id: id
		}
	})
}

// 获取服务开通状态
export function getOpenStatus(areaId) {
	return myRequest({
		url: '/japi/web/area/hf/findcitybyareaId',
		data: {
			areaId: areaId
		}
	})
}

// 获取预约时间
export function getDateList({
	spuId,
	type,
	date
} = {}) {
	return myRequest({
		url: '/japi/order/hf/accept',
		data: {
			spuId,
			type,
			date
		},
		method: "POST"
	})
}

// 计算订单价格
export function getOrderPrice({
	addressId,
	categoryId,
	provinceId,
	cityId,
	areaId,
	couponId,
	couponUserId,
	isCoupon,
	items,
	makeDate,
	makeTime,
	priceSupply,
	priceSupplyType,
	spuId,
	terminal
} = {}) {
	return myRequest({
		url: '/japi/order/hf/ordersprice',
		method: 'post',
		data: {
			addressId,
			categoryId,
			provinceId,
			cityId,
			areaId,
			couponId,
			couponUserId,
			isCoupon,
			items,
			makeDate,
			makeTime,
			priceSupply,
			priceSupplyType,
			spuId,
			terminal
		},
		headers: {
			noFilter: true
		}
	})
}

// 创建订单
export function createOrder({
	addressId,
	categoryId,
	cityId,
	couponId,
	couponUserId,
	isLongTerm,
	items,
	makeDate,
	makeTime,
	mealExpirationDay,
	pricePay,
	priceSupply,
	priceSupplyType,
	sourceType,
	spuId,
	type,
	remark,
	channelId,
	channelMerchantId,
	shareUserId,
	rid
} = {}) {
	return myRequest({
		url: '/japi/order/fuwu/createOrder',
		method: 'post',
		data: {
			addressId,
			categoryId,
			cityId,
			couponUserId,
			isLongTerm,
			items,
			makeDate,
			makeTime,
			mealExpirationDay,
			pricePay,
			priceSupply,
			priceSupplyType,
			sourceType,
			spuId,
			type,
			remark,
			channelId,
			channelMerchantId,
			shareUserId,
			rid,
			couponId
		}
	})
}
