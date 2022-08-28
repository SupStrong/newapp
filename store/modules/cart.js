export const SET_USABLECOUPON = "SET_USABLECOUPON";
export const SET_SELECTIONCOUPON = "SET_SELECTIONCOUPON";
export const SET_CART_CHCEKOUT = "SET_CART_CHCEKOUT";
export const SET_CART_FASTBUY = "SET_CART_FASTBUY";
export const SET_CART_UPDATENUM = "SET_CART_UPDATENUM";
export const SET_CART_UPDATE = "SET_CART_UPDATE";
export const SET_CART_CLEARFASTBUY = "SET_CART_CLEARFASTBUY";
export const SET_CART_CLEAR = "SET_CART_CLEAR";
export const SET_CART_CLEARCOUPON = "SET_CART_CLEARCOUPON";
export const SET_CART_CLEARDRUGINFO = "SET_CART_CLEARDRUGINFO";
export const SET_CART_SELECTION = "SET_CART_SELECTION";
export const SET_CART_CHANGECOUPON = "SET_CART_CHANGECOUPON";
export const SET_CART_CHANGEZITISTORE = "SET_CART_CHANGEZITISTORE";
export const SET_CART_CHANGEDRUGINFO = "SET_CART_CHANGEDRUGINFO";
export const SET_CART_UPDATECOUNT = "SET_CART_UPDATECOUNT";
export const SET_CART_UPDATELIKELIST = "SET_CART_UPDATELIKELIST";

function walkCart(state, fn) {
	state.list.forEach((shopCart, shopIndex) => {
		shopCart.list.forEach(fn)
	})
}


export default {
	state() {
		return {
			usableCoupon: [], // 订单可用优惠券列表
			selectionCoupon: [], // 选中优惠券
			list: [],
			cartIds: [],
			fastbuy: null,
			coupon: null,
			drugInfo: null,
			selection: [],
			cartCount: 0,
			showLikeList: true ,//展示猜你喜欢
			
		};
	},
	getters: {},
	mutations: {
		[SET_USABLECOUPON]: (state, data) => {
			state.usableCoupon = data;
		},
		[SET_SELECTIONCOUPON]: (state, data) => {
			state.selectionCoupon = data;
		},
		
		[SET_CART_CHCEKOUT]: (state, data) => {
			const checkoutItem = data;
			state.checkoutItem = checkoutItem;
		},
		[SET_CART_FASTBUY]: (state, data) => {
			const {
				item,
				num = 1
			} = data;
			state.fastbuy = {
				...item,
				num
			}
		},
		[SET_CART_UPDATENUM]: (state, data) => {
			const {
				cart_id,
				num
			} = data;

			walkCart(state, t => {
				if (t.cart_id === cart_id) {
					t.num = num
				}
			})
			const list = [...state.list];
			state.list = list;
		},
		[SET_CART_UPDATE]: (state, data) => {
			const list = data;
			let cartIds = []
			cartIds = list.map((shopCart, shopIndex) => {
				return shopCart.list.map(v => v.cart_id)
			})
			state.list = list;
			state.cartIds = cartIds;
		},
		[SET_CART_CLEARFASTBUY]: (state, data) => {
			state.fastbuy = null;
		},
		[SET_CART_CLEAR]: (state, data) => {
			// initState
		},
		[SET_CART_CLEARCOUPON]: (state, data) => {
			state.drugInfo = null
		},
		[SET_CART_CLEARDRUGINFO]: (state, data) => {
			state.coupon = null;
		},
		[SET_CART_SELECTION]: (state, data) => {
			const selection = data;
			state.selection = selection;
		},
		[SET_CART_CHANGECOUPON]: (state, data) => {
			const coupon = data;
			state.coupon = coupon
		},
		[SET_CART_CHANGEZITISTORE]: (state, data) => {
			const zitiShop = data;
			state.zitiShop = zitiShop
		},
		[SET_CART_CHANGEDRUGINFO]: (state, data) => {
			const drugInfo = data;
			state.drugInfo = drugInfo
		},
		[SET_CART_UPDATECOUNT]: (state, data) => {
			const cartCount = data;
			state.cartCount = cartCount
		},
		[SET_CART_UPDATELIKELIST]: (state, data) => {
			const showLikeList = data;
			state.showLikeList = showLikeList
		},

	},
};

export function getTotalCount(state, isAll) {
	let total = 0

	walkCart(state, (item) => {
		if (!isAll && !state.selection.includes(item.cart_id)) return
		total += (+item.num)
	})

	return total
}

export function getTotalPrice(state) {
	const total = state.list.map((shopCart, shopIndex) => {
		let shop_total = 0
		shopCart.list.map(item => {
			if (!state.selection.length || !state.selection[shopIndex].size) return
			state.selection[shopIndex].has(item.cart_id) && (shop_total += (+item.price) * (+item.num))
		})
		return (shop_total).toFixed(2)
	})
	return total
}

export function getSelectedCart(state) {
	return state.list.filter(item => state.selection.includes(item.item_id))
}
