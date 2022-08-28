import {myRequest} from "../request.js"

// 获取企业微信面签
export function getSignure (data) {
	return myRequest({
		method: "POST",
		url: `/papi/sso/wxwork/agentJsSdk`,
		data
	})
}

// 获取客户信息
export function getCustomerInfo (data) {
	return myRequest({
		method: "POST",
		url: `/papi/sso/wxwork/external/contract/user`,
		data
	})
}

// 企业微信第三方登录 
export function getQcodeLogin (data) {
	return myRequest({
		method: "POST",
		url: `/papi/sso/wxwork/user/code`,
		data
	})
}
// 工程师 

// 获取工程师信息 
export function getEngineerInfo (id) {
	return myRequest({
		method: "GET",
		url: `/japi/user/technician/detail?id=${id}`,
		id
	})
}

// 获取工单信息 
export function getWorkOrderInfo (data) {
	return myRequest({
		method: "POST",
		url: `/japi/order/order/queryWorkOrderPage`,
		data
	})
}

// 下单信息

// 获取服务订单列表 
export function getWorkOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/japi/order/order/getOrderInfoPage`,
		data
	})
}

// 获取工程师接单信息 
export function getEngineerOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/worker/queryTechnicianList`,
		data
	})
}
// 获取慧商订单列表 
export function getGoodsOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/member/order/shop/orderlist`,
		data
	})
}

// 获取慧家订单列表 
export function getHomeOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/member/order/home/orderlist`,
		data
	})
}

// 获取yws订单列表 
export function getYwsOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/member/order/yijia/orderlist`,
		data
	})
}
// 客户方案

// 获取客户方案列表
export function getProjectList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/home/project/myproject`,
		data
	})
}

// 获取客户方案详情 crm_businessId
export function getProjectDetailByCrmId (data) {
	return myRequest({
		method: "POST",
		url: `/papi/home/project/myproject/info`,
		data
	})
}
 // 获取客户方案详情 id 
export function getProjectDetailById (id) {
	return myRequest({
		method: "POST",
		url: `/papi/home/project/${id}/info`,
	})
}
// 客户回访 
// 获取客户设备列表
export function getDeviceList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/member/remind/devicelist`,
		data
	})
}

// 获取我的家列表

export function getHomeList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/member/home/myhome`,
		data
	})
}

// 获取房间列表 
export function getRoomList (id) {
	return myRequest({
		method: "POST",
		url: `/papi/member/home/${id}/room`,
	})
}

// 获取工单状态 
export function getWorkStatus () {
	return myRequest({
		method: "GET",
		url: `/japi/order/dict/dictbytype?dictType=workStatus`,
	})
}


// 获取订单状态 
export function getOrderStatus () {
	return myRequest({
		method: "GET",
		url: `/japi/order/dict/dictbytype?dictType=orderStatus`,
	})
}

// 通过传手机号查询方案
export function getProjectByMobile (data) {
	return myRequest({
		method: "POST",
		url: `/papi/home/project/managelist`,
		data:data
	})
}

// 获取催单类型 
export function getUrgentType () {
	return myRequest({
		method: "GET",
		url: `/api/order/dict/dictbytype?dictType=urgentType`,
	})
}

// 获取催单人员 

export function getUrgentPerson (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/worker/getTechnicianId`,
		data
	})
}

// 添加催单记录 

export function addOrderUrgent (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/urgent/addOrderUrgent`,
		data
	})
}

// 添加客服备注 
export function addRemark (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/order/detail`,
		data
	})
}
 
// 查询用户身份 
export function queryUser (data) {
	return myRequest({
		method: "POST",
		url: `/api/user/user/query`,
		data
	})
}

// 查询用户详情 
export function queryUserInfoDetail (userId) {
	return myRequest({
		method: "GET",
		url: `/api/user/qiyewechat/user/userInfo?userId=${userId}`,
	})
}
// 查询用户详情 
export function queryUserDetail (userId) {
	return myRequest({
		method: "POST",
		url: `/papi/member/member/${userId}/detail`,
	})
}

// 获取用户关联信息
export function getUserRelationShip (userId) {
	return myRequest({
		method: "POST",
		url: `/api/user/query/jms/user_relationship?userIds=${userId}`,
	})
}
 
// 项目信息接口 
export function projectInfoCount (data) {
	return myRequest({
		method: "POST",
		url: `/papi/home/project/manage/info`,
		data
	})
}


export function base64TransformImg (data) {
	return myRequest({
		method: "POST",
		url: `/forward/wxUpfile`,
		data
	})
}


// 获取YWS订单详情 
export function ywsOrderDetail (code) {
	return myRequest({
		method: "POST",
		url: `/papi/member/order/yijia/${code}/orderdetial`
	})
}

// 获取供应商信息 
export function getSupplyDetail (data) {
	return myRequest({
		method: "POST",
		url: `/api/user/query/jms/tom_wx_info`,
		data
	})
}

// 获取供应商订单数量 
export function getSupplyOrderCount (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/query/jms/tom_wx_order_list_count`,
		data
	})
}

// 获取供应商订单列表 
export function getSupplyOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/query/jms/tom_wx_order_list`,
		data
	})
}

// 获取服务商订单数量 
export function getServiceOrderCount (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/query/jms/tom_wx_work_list_count`,
		data
	})
}
// 获取服务商订单列表 
export function getServiceOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/api/order/query/jms/tom_wx_work_list`,
		data
	})
}

// 获取设备订购历史记录 
export function getBuyOrderList (data) {
	return myRequest({
		method: "POST",
		url: `/papi/yijia/yws/user/buylist`,
		data
	})
}









