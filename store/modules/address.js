export const SET_ADDRESS_CHOOSE = "SET_ADDRESS_CHOOSE";
export const SET_USER_REAL_ADDRESS = "SET_USER_REAL_ADDRESS";
export const SET_USER_SELECT_ADDRESS = "SET_USER_SELECT_ADDRESS";

export default {
	state() {
		return {
			current:null,
			userRealAddress: null,
			userSelectAddress: {
				name: "北京市",
				code: "110100",
				locate: "116.724502,39.905023"
			},
		};
	},
	getters: {
		userRealAddress(state) {
			return state.userRealAddress;
		},
		userSelectAddress(state) {
			return state.userSelectAddress;
		},
	},
	mutations: {
		[SET_ADDRESS_CHOOSE]: (state, data) => {
			state.current = data;
		},
		[SET_USER_REAL_ADDRESS]: (state, data) => {
			state.userRealAddress = data;
		},
		[SET_USER_SELECT_ADDRESS]: (state, data) => {
			state.userSelectAddress = data;
		},
	},
};
