export const SET_COLORS = "SET_COLORS";

export default {
	state() {
		return {
			shopCurrent: {
				name: "base",
				data: [{
					accent: "#fba629",
					marketing: "#2e3030",
					primary: "#d42f29"
				}]
			}
		};
	},
	mutations: {
		[SET_COLORS]: (state, data) => {
			state.shopCurrent = data;
		}
	},
};
