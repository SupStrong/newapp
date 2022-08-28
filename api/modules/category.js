import { myRequest } from "../request.js"
export function getTemplateData(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/aggregate/special/${data.cate_id}/explore`,
		data
	})
}