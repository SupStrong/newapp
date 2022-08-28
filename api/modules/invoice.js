import {myRequest} from "../request.js"

// 发票列表
export function getinvoiceList(){
	return myRequest({
		url: '/papi/app/invoice/list'
	})
}

// 抬头列表 
export function getinviceTitleList(){
	return myRequest({
		url: '/papi/app/invoice/header/list'
	})
}

// 添加抬头
export function setInvoiceTitle(data){
	return myRequest({
		method: 'POST',
		url: '/papi/app/invoice/header/create',
		data
	})
}

// 抬头详情
export function getTitleDetail(id){
	return myRequest({
		url: `/papi/app/invoice/header/${id}/info`
	})
}

// 抬头修改
export function updateTitle(data){
	return myRequest({
		method: "POST",
		url: `/papi/app/invoice/header/${data.id}/update`,
		data
	})
}

// 发票申请
export function createInvoice(data){
	return myRequest({
		method: "POST",
		url: `/papi/app/invoice/create`,
		data
	})
}

// 查询可开金额
export function getAmount(trade_code){
	return myRequest({
		url: `/papi/app/invoice/${trade_code}/amount`,
	})
}
