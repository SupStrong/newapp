import {myRequest} from "../request.js"

// 服务地址列表
export function getAddressList(data){
	return myRequest({
		method: "POST",
		url: "/japi/user/fuwu/addresslist",
		data
	})
}

// 添加服务地址
export function addAddress(data){
	return myRequest({
		method: "POST",
		url: `/japi/user/fuwu/addressadd`,
		data
	})
}

// 服务地址详情
export function getAddressDetail(id){
	return myRequest({
		method: "POST",
		url: `/japi/user/fuwu/findByAddressId?id=${id}`,
	})
}

// 服务地址修改
export function updateAddress(data){
	return myRequest({
		method: "POST",
		url: `/japi/user/fuwu/addressedit`,
		data
	})
}

// 服务地址删除
export function deleteAddress(data){
	return myRequest({
		url: `/japi/user/fuwu/addresscancel`,
		data
	})
}