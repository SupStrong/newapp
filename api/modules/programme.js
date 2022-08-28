import {
	myRequest
} from "../request.js"

export function getProjectInfo(data) {
	return myRequest({
		url: `/papi/home/project/shop/${data.code}/info`
	})
}

export function getProjectInfoId(data) {
	return myRequest({
		url: `/papi/home/project/shop/${data.id}/info/1`
	})
}

export function getOfferId(data) {
	return myRequest({
		method: "POST",
		url: `/papi/home/project/myproject/info`,
		data
	})
}

// 修改用户基本信息
export function getProjectList(data) {
	return myRequest({
		method: "POST",
		url: "/papi/home/project/shop/list",
		data
	})
}

// 修改头像
export function setUserFace(data) {
	return myRequest({
		method: "POST",
		url: "/papi/sso/user/face",
		data,
		headers: {
			type: 'file'
		}
	})
}

// 获取用户地址列表
export function getAddressList(userId) {
	return myRequest({
		method: "post",
		url: "/japi/user/fuwu/addresslist",
		data: {
			userId: userId
		}
	})
}

// 检查状态
export function getUserStatus(token) {
	return myRequest({
		method: "post",
		url: "/papi/sso/user/status",
		data: {
			token: token
		}
	})
}

// 获取方案详情
export function getProjectShop(data) {
	return myRequest({
		method: "post",
		url: `/papi/home/project/shop/${data.code}/info`,
		data
	})
}

export function getProjecctItems(data) {
	return myRequest({
		method: "post",
		url: "/papi/home/project/items",
		data,
		isUrl:'bapi'
	})
}

export function getProjecctRelevant(data) {
	return myRequest({
		method: "post",
		url: "/papi/home/project/relevant",
		data,
		isUrl:'bapi'
	})
}


export const productDet = (data, id) => {
  return myRequest({
  	url: `/bapi/h5app/wxapp/goods/items/${id}`,
  	data,
	isUrl:'bapi'
  })
}

// 获取品牌详情
export const getBrandDetail = (id) => {
  return myRequest({
  	url: `/papi/home/brand/${id}/info`,
  	data:{},
  	isUrl:'bapi'
  })
}

// 获取品牌方案
export const getBrandProgramme = (id) => {
	let obj = {
		id: id,
		page_no: 1,
		page_size: 5
	}
	return myRequest({
		method: "post",
		url: `/papi/home/brand/project`,
		data:obj,
		isUrl:'bapi'
	})
}

// 获取品牌资讯
export const getBrandNews = (brandname) => {
  let obj = {
    cate_id: 57,
    page_no: 1,
    page_size: 2,
    tag_info: brandname
  }
  return myRequest({
  	method: "post",
  	url: `/papi/juran/site/cms/list`,
  	data:obj,
  	isUrl:'bapi'
  })
}
export const getAllGoods = (data) => {
  return myRequest({
  	url: `/bapi/h5app/wxapp/goods/items`,
  	data:data,
  	isUrl:'bapi'
  })
}

// 获取设计师方案列表
export function getDesignProjectList(data) {
	return myRequest({
		method: "POST",
		url: `/papi/home/design/${data.design_id}/project`,
		data
	})
}


// 获取服务团队 
export function getServiceTeam(businessId) {
	return myRequest({
		method: "GET",
		url: `/api/user/thirdParty/externalcontact/addContactWay`,
		data:{
			businessId:businessId
		},
	})
}