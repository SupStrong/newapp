import {myRequest} from "../request.js"
// 获取商家详情 
export const getMerchantDetail = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/japi/user/merchant/queryDetail`,
	data
  })
}

// 获取审核信息 
export const getInfoExamine = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/home/store/getUserMerchant`,
	data
  })
}
// 保存商家信息 
export const setUsermerchant = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/papi/home/store/setusermerchant`,
	data
  })
}

// 修改商家信息 
export const updateMerchant = (data) => {
  return myRequest({
  	method: 'POST',
	url : `/japi/user/merchant/updateMerchant`,
	data
  })
}