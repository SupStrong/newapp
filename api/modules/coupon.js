import {myRequest} from "../request.js"

// 优惠券列表
export function getCouponList({
	status,
	page_no,
	page_size,
	platform_type
} = {}) {
		return myRequest({
			method: 'POST',
			url: `/papi/app/coupon/lists`,
			data: {
				status,
				page_no,
				page_size,
				platform_type
			},
			headers: {
				noFilter: true
			}
		})
}

// 券码兑换优惠券
export function setCoupon({
		type,
		code
	}={}) {
		return myRequest({
			method: 'POST',
			url: `/papi/app/coupon/code`,
			data: {
				type,
				code
			}
		})
}

// 可领取优惠券列表
export function getCouponCentreList({
	city_id,
	platform_type,
	in_spu,
	page_size,
	page_no,
} = {}) {
	return myRequest({
		method: "POST",
		url: "/papi/app/coupon/center",
		data: {
			city_id,
			platform_type,
			in_spu,
			page_size,
			page_no,
		}
	})
}

export function alipaySendCoupon({
	id,
	phone,
	taobao_nick,
	open_id
} = {}) {
	return myRequest({
		method: "POST",
		url: '/papi/juran/alipay/coupon/couponSend',
		data: {
			id,
			phone,
			taobao_nick,
			open_id
		}
	})
}

// 获取当前订单可用优惠券
export function getEableCoupon({
	city_id,
	spu_id,
	amount
} = {}) {
	return myRequest({
		url: "/papi/app/coupon/enable",
		data: {
			city_id,
			spu_id,
			amount
		},
		method: "post",
	})
}