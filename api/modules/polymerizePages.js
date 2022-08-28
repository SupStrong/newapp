import {myRequest} from "../request.js"

// 聚合页
export const getAggregateInfo = (data) => {
  return myRequest({
  	method: 'POST',
  	url: `/papi/app/aggregate/info`,
  	data
  })
}
// 聚合页单品
export const getAggregateItemList = (data) => {
  return myRequest({
  	method: 'POST',
  	url: `/papi/app/aggregate/item/list`,
  	data
  })
}
// 聚合页套餐
export const getAggregatePackList = (data) => {
  return myRequest({
  	method: 'POST',
  	url: `/papi/app/aggregate/pack/list`,
  	data
  })
}

// 品牌列表
// /home/brand/list 
export const getBrandList = (data) => {
  return myRequest({
  	method: 'POST',
  	url: `/papi/home/brand/list`,
  	data
  })
}

// 智能空间/系统/生态/场景列表页
export function getLifeList(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/aggregate/special/list`,
		data
	})
}