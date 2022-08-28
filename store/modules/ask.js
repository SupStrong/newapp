export const SET_ASK_OBJ = "SET_ASK_OBJ";

export default {
	state() {
		return {
			askObj: null,
		};
	},
	getters: {
		askObj(state) {
			return state.askObj;
		},
	},
	mutations: {
		[SET_ASK_OBJ]: (state, data) => {
			state.askObj = data;
		},
	},
};
