export const SET_CATEGORY_PAGE_PARAMS = "SET_CATEGORY_PAGE_PARAMS";

export default {
	state() {
		return {
			categoryPageParams: {}
		};
	},
	mutations: {
		[SET_CATEGORY_PAGE_PARAMS]: (state, data) => {
			state.categoryPageParams = data;
		},
	},
};
