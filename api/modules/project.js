import {
	myRequest
} from "../request.js"

// 方案 获取文章资讯
export const getArticle = (data) => {
  return myRequest({
	method: 'POST',
  	url: `/papi/home/project/${data.id}/cms`,
  	data
  })
}

// 我的预约方案列表
export const getMyProjectList = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/mybusiness`,
		data,
		headers: {
		  'version': '2.0',
		}
	})
}

// 商机 => 上传附件
export const uploadFile = ({
	file,
	batchId,
	type
} = {}) => {
  return myRequest({
	method: 'POST',
  	url: `/capi/file/upload`,
  	data: {
		file,
		batchId,
		type
	},
	header: {
	  crm: '1'
	}
  })
}

// 附件下载
export const getDownloadFile = (filePath) => {
	return myRequest({
		method: 'POST',
		url: `/capi${filePath}`,
		header: {
		  crm: '1'
		}
	})
}


// 项目进度
export const getProgress = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/progress`,
		data,
		headers: {
		  'version': '2.0',
		}
	})
}

// 服务团队
export const getTeam = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/team`,
		data
	})
}

// 确认方案
export const confirmProject = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/checked`,
		data
	})
}

// 确认报价单
export const confirmOfferSheet = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/pricechecked`,
		data
	})
}

// 手机号获取二维码
export const getwxCode = (data) => {
	return myRequest({
		method: 'POST',
		url: `/japi/user/thirdParty/externalcontact/addContactWay?mobile=${data.mobile}`,
		data
	})
}

// 附件列表
export const getfileList = (data) => {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/filelist`,
		data
	})
}

// 删除附件 
export const removeFile = (data) => {
	return myRequest({
		method: 'POST',
		url: `/capi/file/userRemoveById?id=${data.id}`,
		data
	})
}

// 获取合同信息
export const getContractDetail = (data) => { // 1042
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/contract`,
		data
	})
}

// 相关词典
export function getDict() {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/manage/dict/list`
	})
}

// 确认增减项
export function confirmChangeItem({
	id,
	manage_id,
	checked,
	info
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/manage/checked`,
		data: {
			id,
			manage_id,
			checked,
			info
		}
	})
}
// 合同相关词典 
export function getContractDict() {
	return myRequest({
		method: 'POST',
		url: `/papi/juran/contract/dict/list`
	})
}

// 项目金额  
export function getManagePriceData(id) {
	return myRequest({
		method: 'POST',
		url: `/papi/home/project/manage/payment/${id}/price`
	})
}


// 项目进度列表
export function getFlowList({
	type,
	project_manage_id,
	startDate,
	endDate,
	keywords,
} = {}) {
	return myRequest({
		method: 'POST',
		url: '/papi/home/project/manage/flowList',
		data: {
			type,
			project_manage_id,
			startDate,
			endDate,
			keywords,
		},
		headers: {
			noFilter: true
		}
	})
}