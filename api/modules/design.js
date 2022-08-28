import {myRequest} from "../request.js"

// 门店公告
export function getStoreDynamic(data){
	return myRequest({
		method: 'POST',
		url: `/papi/home/store/${data.id}/dynamic`
	})
}
// 词典
export const getDict = (data) => {
  return myRequest({
  	url: `/papi/home/dict`
  })
}
// 设计师 - 前端列表
export const getDesignList = (data) => {
  return myRequest({
	method: 'POST',
  	url: `/papi/home/design/list`,
	data
  })
}
//设计师 - 查看详情
export const getDesignInfo = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/design/${data.code}/info`,
		data
	})
}

//设计师 - 收藏及取消(用户)
export const getDesignFav = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/design/${data.code}/fav`,
		data
	})
}

//  设计师 - 设计师方案
export const getDesignProject = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/design/${data.user_id}/project`,
		data
	})
}

//  设计师 - 设计师方案
export const getDesignDict = (data) => {
  return myRequest({
  	url: `/papi/home/design/dict`,
  	data
  })
}
export const getBrandList = (data) => {
  return myRequest({
	method: 'POST',
  	url: `/papi/home/brand/list`,
  	data
  })
}
// 设计
export const getProjectAddbusiness = (data) => {
  return myRequest({
	method: 'POST',
  	url: `/papi/app/project/addbusiness`,
  	data
  })
}

// 设计师/门店 获取文章资讯
export const getArticle = (data) => {
  return myRequest({
	method: 'POST',
  	url: `/papi/app/aggregate/store/design/cms`,
  	data
  })
}

// 睡眠中心 - 产品接口
export function getSleepGoods() {
	return myRequest({
		method: 'POST',
		url: `/papi/home/category/center/list`
	})
}