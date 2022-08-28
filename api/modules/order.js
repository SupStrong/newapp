import {myRequest} from "../request.js"

// 订单列表
export function getOrderList(data){
	return myRequest({
		method: "POST",
		url: "/japi/order/app/orderslist",
		data,
		headers: {
			noFilter: true
		}
	})
}

// 订单详情
export function getOrderDetail(data){
	return myRequest({
		url: "/japi/order/app/ordersinfo",
		data
	})
}

// 订单状态词典
export function getDict(data){
	return myRequest({
		url: "/japi/order/dict/dictbytype?dictType=orderStatus"
	})
}

// 取消订单原因词典
export function getCancelDict(data){
	return myRequest({
		url: "/japi/order/label/listbygrouptype?groupType=5"
	})
}

// 催单
export function setUrgent(data){
	return myRequest({
		method: "POST",
		url: "/japi/order/worker/distributionWorkOrder",
		data
	})
}

// 取消订单
export function cancelOrder(data){
	return myRequest({
		url: "/japi/order/app/ordersCancel",
		data
	})
}

// 评价
export function orderEvaluate(data){
	return myRequest({
		method: "POST",
		url: `/japi/order/app/orderscomment?gradeNums=${data.gradeNums}&orderCode=${data.orderCode}`
	})
}

// 发起支付
export function payment({
	orderCode, //订单编号
	sourceType, //来源
	spbillCreateIp, //用户设备的IP地址
	state, //付款类型:1:用户支付, 2:用户退款、3:附加费用、4.充值费用、5.代收款任务
	type, //支付类型 3：微信app支付；4：微信网页扫码支付；5：微信公众号支付
	userType, //用户类型
	openId
} = {}) {
	return myRequest({
		method: 'post',
		url: "/japi/order/wx/paymentcreate",
		data: {
			orderCode, //订单编号
			sourceType, //来源
			spbillCreateIp, //用户设备的IP地址
			state, //付款类型:1:用户支付, 2:用户退款、3:附加费用、4.充值费用、5.代收款任务
			type, //支付类型 3：微信app支付；4：微信网页扫码支付；5：微信公众号支付
			userType, //用户类型
			openId
		},
		headers: {
			noFilter: true
		}
	})
}

// 发起支付
export function alipayment({
	orderCode, //订单编号
	sourceType, //来源
	spbillCreateIp, //用户设备的IP地址
	state, //付款类型:1:用户支付, 2:用户退款、3:附加费用、4.充值费用、5.代收款任务
	type, //支付类型 3：微信app支付；4：微信网页扫码支付；5：微信公众号支付
	userType, //用户类型
	openId
} = {}) {
	return myRequest({
		method: 'post',
		url: "/japi/order/alipay/paymentcreate",
		data: {
			orderCode, //订单编号
			sourceType, //来源
			spbillCreateIp, //用户设备的IP地址
			state, //付款类型:1:用户支付, 2:用户退款、3:附加费用、4.充值费用、5.代收款任务
			type, //支付类型 3：微信app支付；4：微信网页扫码支付；5：微信公众号支付
			userType, //用户类型
			openId
		},
		headers: {
			noFilter: true
		}
	})
}

// 百度 - 发起支付
export function baiduPayment({
	orderCode, //订单编号
	sourceType, //来源
	state, //付款类型:1:用户支付, 2:用户退款、3:附加费用、4.充值费用、5.代收款任务
	type, //支付类型 3：微信app支付；4：微信网页扫码支付；5：微信公众号支付
	userType, //用户类型
} = {}) {
	return myRequest({
		method: 'post',
		url: "/japi/order/baidupay/baiduPaymentcreate",
		data: {
			orderCode, //订单编号
			sourceType, //来源
			state, //付款类型:1:用户支付, 2:用户退款、3:附加费用、4.充值费用、5.代收款任务
			type, //支付类型 3：微信app支付；4：微信网页扫码支付；5：微信公众号支付
			userType, //用户类型
		},
		headers: {
			noFilter: true
		}
	})
}

// 方案

export function getStatusInfo(data){
	return myRequest({
		method: "POST",
		url: "/papi/home/project/status/info",
		data
	})
}

export function getStatusList(data){
	return myRequest({
		method: "POST",
		url: '/papi/home/project/myproject',
		data
	})
}

export function getStatusDetail(data){
	return myRequest({
		method: "POST",
		url: '/papi/home/project/myproject/info',
		data
	})
}

export function needCreate(data){
	return myRequest({
		method: "POST",
		url: '/papi/home/project/need/create',
		data
	})
}

export function orderSendSms(data){
	return myRequest({
		method: "POST",
		url: '/japi/order/fuwu/sendSms',
		data
	})
}
export function orderSendLink(data){
	return myRequest({
		url: `/japi/web/order/message/sendLink?orderLinkCode=${data.code}`,
		data
	})
}
export function wxH5Payment(data){
	return myRequest({
		method: "POST",
		url: '/japi/order/wx/paymentcreate',
		data
	})
}
export function aliH5Payment(data){
	return myRequest({
		method: "POST",
		url: '/japi/order/alipay/paymentcreate',
		data
	})
}

export function getOrderProcess(data) {
	return myRequest({
		method: "POST",
		url: `/japi/order/app/selWorkorderStatusTrackLog?orderCode=${data.orderCode}`,
		data
	})
}


// 工程师好评&差评标签
export function getOrderTags(data) {
	return myRequest({
		url: `/japi/order/label/listbygrouptype`,
		data
	})
}

// 提交评价
export function submitEvaluate(data) {
	return myRequest({
		method: "POST",
		url: `/japi/order/evaluate/addOrderEvaluate`,
		data
	})
}

// 获取评价
export function getEvaluateDetail(data) {
	return myRequest({
		url: `/japi/order/evaluate/findByOrderCodeId`,
		data
	})
}

// 电子工单详情 
export function getWorkOrderDetail(data) {
	return myRequest({
		method: "POST",
		url: `/japi/order/workordersign/info`,
		data
	})
}

// 保存电子工单 
export function saveWorkOrder(data) {
	return myRequest({
		method: "POST",
		url: `/japi/order/workordersign/save`,
		data
	})
}

// 下载电子工单 
export function workOrderPdf(data) {
	return myRequest({
		method: "get",
		url: `/japi/order/workordersign/pdfUrl`,
		data
	})
}

// 物流实时查询
export function getLogisticsRoute(data) {
	return myRequest({
		method: "POST",
		url: `/papi/open/kuaidi/mapquery`,
		data
	})
}

// 物流实时查询
export function getLogisticsSyncquery({
	com,
	num,
	resultv2,
	// from,
} = {}) {
	return myRequest({
		method: "POST",
		url: `/papi/open/kuaidi/syncquery`,
		data: {
			com,
			num,
			resultv2,
		}
	})
}

// 获取服务订单列表
export function getServiceOdrerList(data) {
	return myRequest({
		method: "POST",
		url: `/api/order/order/getSupplierOrderInfoPage`,
		data:data
	})
}
// 获取服务订单详情
export function getServiceOdrerDetail(id) {
	return myRequest({
		method: "POST",
		url: `/api/order/order/selectOrderInfoDetail?id=${id}&type=2`
	})
}
// 获取反馈记录 
export function getOrderRemarks(data) {
	return myRequest({
		method: "POST",
		url: `/api/order/order/orderRemarks`,
		data:data
	})
}

// 获取子任务信息 
export function getTaskList(data) {
	return myRequest({
		method: "POST",
		url: `/api/order/workOrderTask/taskList`,
		data:data
	})
}

// 获取结算记录 
export function getSettleList(code) {
	return myRequest({
		method: "GET",
		url: `/api/order/settle/map/byordercode?orderCode=${code}`,
	})
}

// 获取跟踪详情 
export function getFollowDetail(code) {
	return myRequest({
		method: "GET",
		url: `/api/order/track/orderTrackList?orderCode=${code}`,
	})
}

// 获取服务记录列表 
export function getServiceRecordList(code) {
	return myRequest({
		method: "GET",
		url: `/api/order/bs/workordernew/closeReason?orderCode=${code}`,
	})
}


// 获取催单类型 
export function getUrgentType() {
	return myRequest({
		method: "GET",
		url: `/api/order/dict/dictbytype?dictType=urgentType`
	})
}

// 催单 
export function distributionWorkOrder(data) {
	return myRequest({
		method: "POST",
		url: `/api/order/worker/distributionWorkOrder`,
		data: data
	})
}

// 结算渠道 /款项渠道
export function getJavaDict(data) {
	return myRequest({
		method: "GET",
		url: `/api/order/dict/dictbytype?dictType=${data.type}`,
	})
}
// 供应商->记录
export function orderMerchantbillpage(data) {
	return myRequest({
		method: "POST",
		url: `/api/order/pursebill/merchantbillpage`,
		data: data
	})
}
// 供应商 -> 获取金额
export function getMerchantstatistics(data) {
	return myRequest({
		method: "GET",
		url: `/api/order/purse/merchantstatistics?merchantCode=${data.code}`,
	})
}
// 供应商 -> 供应商账单统计
export function merchantbillStatistics(data) {
	return myRequest({
		method: "POST",
		url: `/api/order/pursebill/merchantbillStatistics`,
		data
	})
}
// 供应商 -> 获取详情
export function merchantQueryDetail(data) {
	return myRequest({
		method: "POST",
		url: `/api/user/merchant/queryDetail`,
		data
	})
}
// 供应商 -> 充值
export function rechargeCreate(data) {
	return myRequest({
		method: "post",
		url: `/api/order/recharge/create`,
		data
	})
}