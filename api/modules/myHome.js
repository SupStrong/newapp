import {
	myRequest
} from "../request.js"

// 获取家庭列表
export function getHomeList() {
	return myRequest({
		url: "/papi/app/home/lists"
	})
}

// 创建我的家
export function createHome({
	address,
	house_cate,
	house_type,
	house_size,
	name
} = {}) {
	return myRequest({
		url: "/papi/app/home/create",
		method: "post",
		data: {
			address,
			house_cate,
			house_type,
			house_size,
			name
		}
	})
}

// 获取家庭详情
export function getHomeInfo(home_id) {
	return myRequest({
		url: `/papi/app/home/${home_id}/info`
	})
}

// 更新家庭信息
export function updateHomeInfo({
	home_id,
	address,
	house_cate,
	house_size,
	house_type
} = {}) {
	return myRequest({
		url: "/papi/app/home/info",
		data: {
			home_id,
			address,
			house_cate,
			house_size,
			house_type
		},
		method: "post"
	})
}

// 创建房间
export function createRoom({
	home_id,
	room_id,
	name,
} = {}) {
	return myRequest({
		url: `/papi/app/home/${home_id}/room/create`,
		data: {
			room_id,
			home_id,
			name,
		},
		method: "post"
	})
}

// 删除房间
export function deleteHome({
	home_id,
	room_id
} = {}) {
	return myRequest({
		url: `/papi/app/home/room/${home_id}/delete`,
		data: {
			home_id,
			room_id
		},
		method: "post"
	})
}

// 添加设备
export function addDevice({
	home_id,
	room_id,
	device_sku_id,
	buy_date,
	install_date
} = {}) {
	return myRequest({
		url: `/papi/app/home/${home_id}/device/create`,
		data: {
			home_id,
			room_id,
			device_sku_id,
			buy_date,
			install_date
		},
		method: "post"
	})
}

// 查询设备信息
export function getDeviceInfo({
	home_id,
	device_id
} = {}) {
	return myRequest({
		url: `/papi/app/home/${home_id}/device/${device_id}/info`
	})
}

// 修改设备信息
export function updateDeviceInfo({
	home_id,
	device_id,
	room_id,
	buy_date,
	install_date
} = {}) {
	return myRequest({
		url: `/papi/app/home/${home_id}/device/${device_id}/info`,
		data: {
			home_id,
			device_id,
			room_id,
			buy_date,
			install_date
		},
		method: "post"
	})
}

// 删除设备
export function deleteDevice({
	home_id,
	device_id
} = {}) {
	return myRequest({
		url: `/papi/app/home/${home_id}/device/delete`,
		data: {
			home_id,
			device_id
		},
		method: "post"
	})
}

// 获取设备分类
export function getDeviceCates() {
	return myRequest({
		url: "/papi/app/home/device/cates"
	})
}

// 获取当前分类的所有设备
export function getDeviceByCate({
	cate_id,
	name,
	page_size,
	page_no
} = {}) {
	return myRequest({
		url: `/papi/app/home/device/${cate_id}/lists`,
		data: {
			cate_id,
			name,
			page_size,
			page_no
		},
		method: "post"
	})
}

// 获取相关参数
export function getDict() {
	return myRequest({
		url: "/papi/app/home/dict"
	})
}

// 获取房间详情
export function getRoomDetail({
	home_id,
	room_id
} = {}) {
	return myRequest({
		method: 'post',
		url: `/papi/app/home/${home_id}/room/${room_id}/info`,
		data: {
			home_id,
			room_id
		}
	})
}

// 获取设备分类列表
export function getDeviceCate({
	parentId
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/japi/device/product/categoryTree`,
		data: {
			parentId
		}
	})
}

// 修改设备信息
export function updateDevice(data) {
	return myRequest({
		method: 'post',
		url: `/papi/app/home/${data.home_id}/device/${data.device_id}/info`,
		data
	})
}

// 家庭交付手册
export function getHomeManual({home_id}) {
	return myRequest({
		url: `/papi/home/myhome/${home_id}/manual`,
	})
}

// 修改家庭信息
export function editHomeInfo(data) {
	return myRequest({
		method: 'post',
		url: `/papi/app/home/${data.home_id}/info`,
		data
	})
}

// 房间列表
export function getRoomList(data) {
	return myRequest({
		url: `/papi/app/home/room/${data.home_id}/list`
	})
}

// 删除房间
export function delRoom({
	home_id,
	room_ids
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/room/delete`,
		data: {
			home_id,
			room_ids
		}
	})
}

// 房间排序
export function sortRoomList({
	home_id,
	sort
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/room/${home_id}/list`,
		data: {
			home_id,
			sort
		}
	})
}

// 修改房间信息
export function editRoomInfo(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/${data.home_id}/room/${data.room_id}/info`,
		data
	})
}

// 删除家庭
export function delHome(data) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/${data.home_id}/delete`,
		data
	})
}

// 获取设备列表
export function getDeviceList(data) {
	return myRequest({
		url: `/papi/app/home/${data.home_id}/device`,
		data
	})
}

// 删除设备
export function delDevice({
	home_id,
	device_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/${home_id}/device/delete`,
		data: {
			home_id,
			device_id
		}
	})
}

// 设备排序
export function sortDeviceList({
	home_id,
	sort
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/${home_id}/device`,
		data: {
			home_id,
			sort
		}
	})
}

// 临期设备重置设备查看状态 
export function changeDeviceView({
	home_id,
	device_id
} = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/home/device/view`,
		data: {
			home_id,
			device_id
		}
	})
}