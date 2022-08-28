import {myRequest} from "../request.js"

// 消息列表
export function getMessageList (data) {
	return myRequest({
		method: "POST",
		url: "/papi/app/message/lists",
		data
	})
}

// 一键已读
export function setMessageAllClear () {
	return myRequest({
		url: "/papi/app/message/clear",
	})
}

// 一条已读
export function setMessageClear (msg_id) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/message/${msg_id}/read`,
	})
}

// 未读消息数量
export function messageCount(){
	return myRequest({
		method: 'POST',
		url: '/papi/app/message/num'
	})
}
export function getPriceInfo(data) {
  return myRequest({
    url: `/papi/home/price/${data.project_id}/info`,
	headers: {
	      'sso': 'sso',
	      'version': '1.0',
	      'sso_auth': true
	    }
  })
}

// 活动消息推送
export function sendMessage(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/activity/sendmsg`,
		data
	})
}