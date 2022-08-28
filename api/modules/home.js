import {myRequest} from "../request.js"
export function getTemplateData(id) {
		return myRequest({
			url: `/papi/juran/cms/pages/${id}/info`
		})
}

// 获取模板详情
export function getTemplateDetail(data){
	return myRequest({
		url: `/papi/juran/site/pages/${data.code}`,
		data
	})
}

// 文章详情
export function getArticleDetail(code) {
	return myRequest({
		url: `/papi/juran/site/articles/${code}`
	})
}

// 获取
export function getAllShopList(data) {
	return myRequest({
		url: `/papi/tech/profit/items/list`,
		data
	})
}

// 探索智能生活数据量
export function getLifeCount() {
	return myRequest({
		url: `/papi/app/aggregate/special/list`,
	})
}

// 底部推荐商品
export function getItems(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/tech/profit/items/list`,
		data
	})
}

// 问答列表
export function getAnswerList({
	page_no,
	page_size,
	is_page,
	title,
	cate_id,
	is_open,
	checked,
	status,
	orderd,
	relation_type,
	relation_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/list`,
		data: {
			page_no,
			page_size,
			is_page,
			title,
			cate_id,
			is_open,
			checked,
			status,
			orderd,
			relation_type,
			relation_id
		}
	})
}

// 问答详情
export function getAnswerDetail({
	id
} = {}) {
	return myRequest({
		url: `/papi/app/question/${id}/info`,
		data: {
			id
		}
	})
}

// 查询某问答相关问答
export function getSimilarAnswer({
	id,
	page_no,
	page_size,
	answer,
	checked,
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/${id}/answer`,
		data: {
			id,
			page_no,
			page_size,
			answer,
			checked,
		}
	})
}

// 首页搜索接口
export function searchList({
	source,
	source_cate,
	keyname,
	brand,
	category,
	tags,
	locate,
	nums,
	page,
	category_id,
	category_parent_id,
	category_parent_name,
	category_name
} = {}) {
	return myRequest({
		method: 'post',
		url: '/papi/app/search/list',
		data: {
			source,
			source_cate,
			keyname,
			brand,
			category,
			tags,
			locate,
			nums,
			page,
			category_id,
			category_parent_id,
			category_parent_name,
			category_name
		}
	})
}


// 推荐相关问答
export function getRelatedAnswer({
	id,
	nums,
	cate_id,
	orderd
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/${id}/top`,
		data: {
			id,
			nums,
			cate_id,
			orderd
		}
	})
}

// 热词列表
export function getHotSearchList({
	num,
} = {}) {
	return myRequest({
		method: 'POST',
		url: '/papi/app/search/dict',
		data: {
			num
		}
	})
}

// 问答分类
export function getAnswerCateList() {
	return myRequest({
		url: '/papi/app/question/cates'
	})
}

// 问答详情 - 回答点赞
export function putAnswerLike(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/answer/${data.id}/agree`,
		data
	})
}

// 问答详情 - 回答踩一脚
export function putAnswerNoLike(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/answer/${data.id}/disagree`,
		data
	})
}

// 提交问题
export function putQuestion(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/askquestion`,
		data,
		headers: {
			noFilter: true
		}
	})
}

// 提交回答
export function putAnswer(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/answerquestion`,
		data
	})
}

// 我的提问列表
export function myPutQuestionList({
	page_no,
	page_size,
	is_page,
	title,
	cate_id,
	is_open,
	checked,
	status,
	orderd,
	relation_type,
	relation_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/user/list`,
		data: {
			page_no,
			page_size,
			is_page,
			title,
			cate_id,
			is_open,
			checked,
			status,
			orderd,
			relation_type,
			relation_id
		}
	})
}

// 我的回答列表
export function myPutAnswerList({
	page_no,
	page_size,
	is_page,
	title,
	cate_id,
	is_open,
	checked,
	status,
	orderd,
	relation_type,
	relation_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/question/user/answer`,
		data: {
			page_no,
			page_size,
			is_page,
			title,
			cate_id,
			is_open,
			checked,
			status,
			orderd,
			relation_type,
			relation_id
		}
	})
}

// 熊洞圈子分类
export function getPoolCategory(data) {
	return myRequest({
		url: `/papi/app/circle/cate`,
		data
	})
}

// 熊洞圈子 - 推荐
export function getPoolRecommend(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/circle/home`,
		data
	})
}

export function getOfferSheetList(data) {
	return myRequest({
		method: 'POST',
		url: '/papi/app/price/search',
		data,
		// headers: {
		// 	noFilter: true
		// }
	})
}