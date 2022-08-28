export const SET_TABBAR = "SET_USSER_LANDING";
export default {
	state() {
		return {
			current:null
		};
	},
	mutations: {
		[SET_TABBAR]: (state, data) => {
			state.current = data;
		}
	},
};