
import {myRequest} from "../request.js"

// 获取表单模板数据
export const getFormTempDetail = (id) => {
	return myRequest({
		method: 'GET',
		url: `/papi/juran/form/${id}/detial`,
	})
}


// 提交表单
export function submitFormDetail({
	form_id, // 表单id
	title, // 模板名称
	data, // 模板内容
	files, // 附件地址
	source, // 提交途径
	object,
	object_id, //商机id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/table/add`,
		data: {
			form_id,
			title,
			data,
			files,
			source: 3,
			object,
			object_id,
		}
	})
}

// 获取表单提交详情
export function getFormDetail(id) {
	return myRequest({
		method: 'GET',
		url: `/papi/app/table/${id}/edit`,
	})
}

// 工单id -> 获取表单提交详情
export function getFormDetailFromRelation({
	object,
	object_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/table/detial`,
		data: {
			object,
			object_id
		}
	})
}

// 修改表单提交详情
export function editFormDetail({
	id,
	form_id,
	object,
	object_id,
	object_code,
	title,
	files,
	source,
	data
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/table/${id}/edit`,
		data: {
			form_id,
			object,
			object_id,
			object_code,
			title,
			files,
			source,
			data
		},
		headers: {
			noFilter: true
		}
	})
}

// 上传文件
export function uploadImgFormPage({
	batchId,
	url
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/forward/crmUpfile`,
		data: {
			batchId,
			url
		}
	})
}
