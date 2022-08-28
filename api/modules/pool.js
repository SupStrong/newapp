import {myRequest} from "../request.js"

// 文章列表
export function getCmsList({
	page_no,
	page_size,
	cate_id,
	parent_id,
	title,
	tag_info,
	type,
	tech_id,
	marchant_id
} = {}){
	return myRequest({
		method: "POST",
		url: "/papi/juran/site/cms/list",
		data: {
			page_no,
			page_size,
			cate_id,
			parent_id,
			title,
			tag_info,
			type,
			tech_id,
			marchant_id
		}
	})
}

// 获取商户/设计师相关门店/详情页对应问答列表
export function getMerchantQuestionList({
	page_no,
	page_size,
	status,
	is_page,
} = {}){
	return myRequest({
		method: "POST",
		url: "/papi/app/question/merchant/list",
		data: {
			page_no,
			page_size,
			status,
			is_page,
		},
		headers: {
			noFilter: true
		}
	})
}


export function getSitemapList({
	currentPage
} = {}){
	return myRequest({
		url: "/papi/data/baidu/sitemap",
		data: {
			currentPage
		}
	})
}
