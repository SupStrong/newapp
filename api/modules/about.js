import {myRequest} from "../request.js"

// 提交反馈
export function setFeedback (data) {
	return myRequest({
		method: "POST",
		url: `/papi/app/feedback`,
		data
	})
	
}
