import {
	myRequest
} from "../request.js"
const qs = require('qs');

// 慧采 - 商品详情
export function getGoodsInfoP (id) {
  return myRequest({
	  method: 'POST',
  	url:`/papi/home/purchase/item/${id}/info`,
  })
}

// 慧采 - 批量购买商品
export function buyBatchGoodsP ({
	cate_id,
	info,
	item_id
}) {
  return myRequest({
	  method: 'POST',
  	url:`/papi/home/purdemand/demand/create`,
	data: {
		cate_id,
		info,
		item_id
	},
	headers: {
		noFilter: true
	}
  })
}

// 慧采 - 购物车
export function getCartListP (data) {
  return myRequest({
  	url:`/papi/home/purchase/carts/list`,
	data,
  })
}

// 
// 慧采 - 修改购物车商品数量
export function updateCartItemNumsP ({
	id,
	num
} = {}) {
  return myRequest({
	method: 'POST',
  	url:`/papi/home/purchase/carts/update`,
	data: {
		id,
		num
	}
  })
}

// 慧采 - 删除购物车商品
export function delCartItemNumsP ({
	id
} = {}) {
  return myRequest({
	method: 'POST',
  	url:`/papi/home/purchase/carts/del`,
	data: {
		id
	}
  })
}

// 慧采 - 添加商品到购物车
export function addItemToCartP (data) {
  return myRequest({
	method: 'POST',
  	url:`/papi/home/purchase/carts`,
	data
  })
}


export function getCartList (data) {
  return myRequest({
  	url:`/bapi/h5app/wxapp/cart/list`,
	data,
	isUrl:'bapi',
	// formData:true
  })
}
export function seckillCheck (data) {
  return myRequest({
  	url:`/bapi/h5app/wxapp/promotion/seckillactivity/geticket`,
		data,
		isUrl:'bapi'
  })
}
export function getCategory (data = {}) {
  return myRequest({
  	url:`/bapi/h5app/wxapp/pageparams/setting`,
  	data,
	isUrl:'bapi'
  })
}

// 旧商品列表
export function search (data = {}) {
  return myRequest({
  	url:`/bapi/h5app/wxapp/goods/items`,
  	data,
	isUrl:'bapi'
  })
}

// 新商品列表
export function getGoodsList(data = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/item/list`,
		data
	})
}

export function getPurchasesList(data = {}) {
	return myRequest({
		method: 'POST',
		url: `/papi/app/purchase/item/list`,
		data
	})
}


export function detail (item_id, data = {}) {
  return myRequest({
  	url:`/bapi/h5app/wxapp/goods/items/${item_id}`,
  	data,
	isUrl:'bapi'
  })
}

export function shareSetting(data) {
  return myRequest({
  	url:`/bapi/h5app/wxapp/share/setting`,
  	data,
	isUrl:'bapi'
  })
}

export function itemHistorySave (item_id) {
	return myRequest({
		method: "POST",
		url: `/bapi/h5app/wxapp/member/browse/history/save`,
		data:{item_id},
		isUrl:'bapi'
	})
}

export function itemHistory (data) {
	return myRequest({
		url: `/bapi/h5app/wxapp/member/browse/history/list`,
		data,
		isUrl:'bapi'
	})
}

export function evaluationList (data) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/order/rate/list`,
  	data,
	isUrl:'bapi'
  })
}

// 检测是否订阅
export function isSubscribeGoods(item_id) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member/item/is_subscribe/${item_id}`,
	isUrl:'bapi'
  })
}

export function packageList (data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/promotions/package`,
	data,
	isUrl:'bapi'
  })
}

export function packageDetail (item_id) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/promotions/package/${item_id}`,
	isUrl:'bapi'
  })
}

export function count (data) {
  const { shop_type = 'distributor' } = data
  return myRequest({
  	url: `/bapi/h5app/wxapp/cartcount`,
	data:{
		shop_type,
		...data
	},
	isUrl:'bapi'
  })
}

export function favsList (data = {}) {
	return myRequest({
		url: `/bapi/h5app/wxapp/member/collect/item`,
		data:{data,showError: false},
		isUrl:'bapi'
	})
}

export function addFav (item_id) {
  return myRequest({
	method: "POST",
  	url: `/bapi/h5app/wxapp/member/collect/item/${item_id}`,
	isUrl:'bapi'
  })
}

export function delFav (item_ids, data = {}) {
  item_ids = Array.isArray(item_ids) ? item_ids : [item_ids]
  const { is_empty = false } = data
  return myRequest({
	method: "DELETE",
  	url: `/bapi/h5app/wxapp/member/collect/item`,
	data:{
		item_ids,
		is_empty:'false'
	},
	isUrl:'bapi',
	formData:true,
	formType:'string'
	
  })
}

export function storeFav (id) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member/collect/distribution/${id}`,
	isUrl:'bapi'
  })
}

export function storeFavDel (id) {
  return myRequest({
	method: "DELETE",
  	url: `/bapi/h5app/wxapp/member/collect/distribution`,
	data:{distributor_id: id},
	isUrl:'bapi'
  })
}

export function storeFavList () {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member/collect/distribution`,
	isUrl:'bapi'
  })
}

export function storeFavCount (data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member/collect/distribution/num`,
	data,
	isUrl:'bapi'
  })
}

export function storeIsFav (id) {
	return myRequest({
		url: `/bapi/h5app/wxapp/member/collect/distribution/check`,
		data:{distributor_id: id},
		isUrl:'bapi'
	})
}


export function formId (formid) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/promotion/formid`,
  	data:{ formid },
	isUrl:'bapi'
  })
}


export function get (data) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/goods/category`,
  	data,
	isUrl:'bapi'
  })
}
// 获取购物车数据
export function getCart(param = {}){
	return myRequest({
		url: `/bapi/h5app/wxapp/cart`,
		data:param,
		isUrl:'bapi'
	})
}

// 更新购物车
export function updateCart(param = {}){
	return myRequest({
		method:'POST',
		url: `/bapi/h5app/wxapp/cart`,
		data:param,
		isUrl:'bapi'
	})
}

// 更新商品数量

// 更新商品选中状态
export function updateCheckGood(param = {}){
	return myRequest({
		method:'PUT',
		url: `/bapi/h5app/wxapp/cartupdate/checkstatus`,
		data:param,
		isUrl:'bapi'
	})
}

// 删除商品
export function deleteGood(param = {}){
	return myRequest({
		method:'DELETE',
		url: `/bapi/h5app/wxapp/cartdel`,
		data:param,
		isUrl:'bapi'
	})
}

export function likeList (data) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/promotions/recommendlike`,
  	data:data,
	isUrl:'bapi'
  })
}


export function tradeSetting (data) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/trade/setting`,
  	data,
	isUrl:'bapi'
  })
}

export function addressList () {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member/addresslist`,
	isUrl:'bapi'
  })
}

export function getShop (data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/distributor/is_valid`,
	data,
	isUrl:'bapi'
  })
}

export function list (data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/distributor/list`,
  	data,
	isUrl:'bapi'
  })
}

export function getStoreStatu (data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/nostores/getstatus`,
  	data,
	isUrl:'bapi'
  })
}

export function postTotal (data) {
  return myRequest({
	method:'POST',
  	url: `/bapi/h5app/wxapp/getFreightFee`,
  	data,
	isUrl:'bapi'
  })
}

// 获取获取支付方式
export function getTradePaymentList (data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/trade/payment/list`,
  	data,
    header: {
      'isApi': 1
    },
	isUrl:'bapi'
  })
}


//获取是否开启获取crm地址
export function getCrmsetting () {
	return myRequest({
		url: `/bapi/h5app/wxapp/member/crmsetting`,
		isUrl:'bapi'
	})
}

export function crmAddressList (data = {}) {//获取crm地址
  return myRequest({
	method:'POST',
  	url: `/bapi/h5app/wxapp/member/crmaddresslist`,
	data,
	isUrl:'bapi'
  })
}

export function addressDelete (address_id) {
  return myRequest({
  	method:'DELETE',
  	url: `/bapi/h5app/wxapp/member/address/${address_id}`,
	isUrl:'bapi'
  })
}

export function areaList () {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member/addressarea`,
	isUrl:'bapi'
  })
}

export function coupons (data) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/user/newGetCardList`,
	data,
	isUrl:'bapi'
  })
}

export function addressCreateOrUpdate (data) {
  const fn = data.address_id ? addressUpdate : addressCreate
  return fn(data)
}
export function addressCreate (data = {}) {
  return myRequest({
	method:'POST',
  	url: `/bapi/h5app/wxapp/member/address`,
	data,
	isUrl:'bapi'
  })
}
export function addressUpdate (data) {
  return myRequest({
  	method:'PUT',
  	url: `/bapi/h5app/wxapp/member/address/${data.address_id}`,
  	data,
	isUrl:'bapi'
  })
}

export function getDetailShare (data) {
  return myRequest({
  	method:'POST',
  	url: `/bapi/h5app/wxapp/salesperson/task/share`,
  	data,
	isUrl:'bapi'
  })
}
export function getWhiteList() {
  return myRequest({
  	url: `/bapi/h5app/wxapp/whitelist/status`,
	isUrl:'bapi'
  })
}
export function newWxaMsgTmpl(data = {}) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/newtemplate`,
	data,
	isUrl:'bapi'
  })
}

export function memberInfo () {
  return myRequest({
  	url: `/bapi/h5app/wxapp/member`,
	isUrl:'bapi'
  })
}

export function selectput ({ cart_id = [], is_checked }) {
	return myRequest({
		method:'PUT',
		url: `/bapi/h5app/wxapp/cartupdate/checkstatus`,
		data:{cart_id,is_checked },
		isUrl:'bapi',
		formData:true,
		formType:'string'
	})
}

export function updateNum (shop_id,cart_id, num, shop_type) {
	  return myRequest({
	  	method:'PUT',
	  	url: `/bapi/h5app/wxapp/cartupdate/num`,
	  	data:{
			shop_id,
			cart_id,
			num,
			isAccumulate: false,
			shop_type
		},
		isUrl:'bapi',
		formData:true
	  })
}

export function del (cart_id) {
  return myRequest({
  	method:'DELETE',
  	url: `/bapi/h5app/wxapp/cartdel`,
  	data:{cart_id},
	isUrl:'bapi',
	formData:true
  })
}

export function add (data) {
  return myRequest({
  	method:'POST',
  	url: `/bapi/h5app/wxapp/cart`,
  	data,
	isUrl:'bapi'
  })
}


export function fastBuy (data) {
  const { item_id, num = 1, bargain_id,distributor_id } = data
  const query = {
    cart_type: 'fastbuy',
    item_id,
    num,
    distributor_id,
    isAccumulate: false,
    shop_type: 'distributor'
  }
  if (bargain_id) {
    query.bargain_id = bargain_id
  }
  return myRequest({
  	method:'POST',
  	url: `/bapi/h5app/wxapp/cart`,
  	data:query,
	isUrl:'bapi'
  })
}

export function getLogin(data) {
	return myRequest({
		method: "POST",
		url: "/bapi/h5app/wxapp/login",
		data,
		isUrl:'bapi'
	})
}

export function getStoreStatus (data = {}) {
  return myRequest({
  	url: "/bapi/h5app/wxapp/nostores/getstatus",
  	data,
  	isUrl:'bapi'
  })
}

export function create(data) {
  return myRequest({
	method: "POST",
  	url: '/bapi/h5app/wxapp/order',
  	data: {
		...data,
		pay_ver: 2
	},
  	isUrl:'bapi',
	formData:true,
	formType:'string'
  })
}


export function h5create(data) {
  return myRequest({
	method: "POST",
  	url: '/bapi/h5app/wxapp/order_new',
  	data,
  	isUrl:'bapi',
	formData:true
  })
}

export function orders(data) {
  return myRequest({
  	url: '/bapi/h5app/wxapp/orders',
  	data,
  	isUrl:'bapi'
  })
}

export function cancel (data) {
  return myRequest({
  	method: "POST",
  	url: '/bapi/h5app/wxapp/order/cancel',
  	data:data,
  	isUrl:'bapi'
  })
}


// 订单

export function zitiCode (data = {}) {
  return myRequest({
  	url: '/bapi/h5app/wxapp/ziticode',
  	data:data,
  	isUrl:'bapi'
  })
}

// export function getPayment(data = {}) {
//   return myRequest({
//   	url: '/bapi/h5app/wxapp/payment',
//   	data:data,
//   	isUrl:'bapi'
//   })
// }


export function confirm(tid) {
  return myRequest({
  	method: "POST",
  	url: '/bapi/h5app/wxapp/order/confirmReceipt',
  	data:{ order_id: tid },
  	isUrl:'bapi'
  })
}

export function orderDetail (tid) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/order/${tid}`,
  	isUrl:'bapi'
  })
}

export function deliveryInfo (order_type, order_id) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/trackerpull?order_type=${order_type}&order_id=${order_id}`,
  	isUrl:'bapi'
  })
}

export function deliveryInfoNew (data) {
  return myRequest({
  	url: `/bapi/h5app/wxapp/delivery/trackerpull`,
	data:data,
  	isUrl:'bapi'
  })
}

export function getPayment(data = {}) {
  return myRequest({
  	method: "POST",
  	url: `/bapi/h5app/wxapp/payment`,
  	data: {
		...data,
		pay_ver: 2,
	},
  	isUrl:'bapi'
  })
}
export function getProgrammeDetail(code) {
	return myRequest({
		url: `/papi/home/project/shop/${code}/info`,
	})
}

export function getShareSettle(data = {}) {
  return myRequest({
  	method: "POST",
  	url: `/papi/tech/profit/share/settle`,
  	data:data,
  })
}

export function getShopOtherInfo(data = {}) {
  return myRequest({
  	url: `/papi/app/item/${data.id}/brandstati`,
  })
}

export function getProjectCategory(data = {}) {
  return myRequest({
	method: 'post',
  	url: `/papi/home/project/category`,
	data
  })
}
// 获取分佣价格
export function getSplitPrice(data ={}) {
	return myRequest({
		method: 'POST',
		url: `/papi/home/distribution/user/splitprice`,
		data
	})
}
// 物流
export function deliveryLists(data ={}) {
	return myRequest({
		method: 'get',
		url: `/bapi/h5app/wxapp/delivery/lists`,
		data
	})
}

// 获取秒杀详情

// 秒杀活动列表
export function getSeckillList(data) {
	return myRequest({
		method: 'get',
		url: `/bapi/h5app/wxapp/promotion/seckillactivity/getlist`,
		data
	})
}

// 秒杀活动详情 
export function getSeckillDetail(data) {
}

// 获取秒杀详情
export function killDetails(data ={}) {
	return myRequest({
		method: 'get',
		url: `/bapi/h5app/wxapp/promotion/seckillactivity/getinfo`,
		data
	})
}


// 获取拼团活动列表 

// 获取拼团活动列表 
export function groupDetails(data ={}) {
	return myRequest({
		method: 'get',
		url: `/bapi/h5app/wxapp/promotions/groups`,
		data
	})
}