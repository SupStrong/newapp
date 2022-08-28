export const SET_SWITCH_DATA = "SET_SWITCH_DATA";

export default {
	state() {
		return {
			switchData: {},
		};
	},
	mutations: {
		[SET_SWITCH_DATA]: (state, data) => {
			state.switchData = data;
		},
	},
};
