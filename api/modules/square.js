import { myRequest } from "../request.js"

// 推广广场 - 底部分类
export function getTechCateData({
	type
}) {
	return myRequest({
		method: 'POST',
		url: `/papi/tech/profit/cate/list`,
		data: {
			type
		}
	})
}

// 推广广场 - 底部分类对应商品数据
export function getTechGoodsData({
	cate_id,
	page_no,
	page_size,
	type,
	name,
	attribute_id
}) {
	return myRequest({
		method: 'POST',
		url: `/papi/tech/profit/item/list`,
		data: {
			cate_id,
			page_no,
			page_size,
			type,
			name,
			attribute_id
		}
	})
}