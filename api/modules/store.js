import {myRequest} from "../request.js"

// 获取距离
export const getLocate = (data) => {
  return myRequest({
  	method: 'POST',
  	url: `/home/store/${data.id}/locate`,
  	data
  })
}
// 词典
export const getDict = (data) => {
  return myRequest({
  	url: '/papi/home/dict',
  	data
  })
}
// 门店词典
export const getStoreDict = (data) => {
  return myRequest({
  	url: '/papi/home/store/dict',
  	data
  })
}
// 门店列表
export const getStoreList = (data) => {
  return myRequest({
  	method: 'POST',
  	url: '/papi/home/store/list',
  	data
  })
}
// 查询附近门店
export const getStoreLocate = (data) => {
  return myRequest({
  	method: 'POST',
  	url: '/papi/home/store/locate',
  	data
  })
}


// 获取门店详情
export function getStoreInfo(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/info`,
		data
	})
}


//  查询门店推荐商品
export function getStoreItems(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/items/top`,
		data
	})
}

// 查询门店推荐方案
export function getStoreProject(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/project/top`,
		data
	})
}

// 门店公告
export function getStoreNotice(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/notice`
	})
}

// 门店公告
export function getStoreDynamic(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/dynamic`,
		data
	})
}

// 预约接口
export function setHomeStore(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/crm`,
		data
	})
}
// 获取二维码
export function getCodePic(data){
	return myRequest({
		method: 'POST',
		url: `/japi/product/product/fuwu/codePic`,
		data
	})
}
// NODE生成图片
export function getNodeImg(data){
	return myRequest({
		method: 'POST',
		url: `/site/png `,
		data
	})
}

// 首页 - 免费设计 -获取需要填写的字段
export const GetField = (data) => {
	return myRequest({
		method: 'POST',
		url : `/capi/CrmMarketing/queryAddField`,
		data,
		header: {
		  crm: '1'
		}
	})
}

// 首页 - 免费设计 -提交数据
export const SaveCustomer = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/capi/CrmMarketing/saveMarketingInfo`,
	data,
  	header: {
  	  crm: '1'
  	}
  })
}

// solve类型方案预约
export const sloveBusiness = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/app/project/addbusiness`,
	data,
  })
}

// 预约进线索
export const sloveClue = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/home/project/crm`,
	data,
  })
}

// 添加门店 
export const addStore = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/saas/stores/add`,
	data
  })
}

// 门店下线 
export const storeUnderLine = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/saas/stores/isopen`,
	data
  })
}

// 修改门店 
export const storeUpdate = (id,data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/saas/stores/${id}/update`,
	data
  })
}
