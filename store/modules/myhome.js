export const SET_SELECTADDRESS = "SET_SELECTADDRESS";

export default {
	state() {
		return {
			selectAddress: '',
		};
	},
	getters: {
		selectAddress(state) {
			return state.selectAddress;
		}
	},
	mutations: {
		[SET_SELECTADDRESS]: (state, data) => {
			state.selectAddress = data;
		}
	},
};
