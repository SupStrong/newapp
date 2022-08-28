export const SET_HOME_ADV_INFO = "SET_HOME_ADV_INFO";

export default {
	state() {
		return {
			homeAdvInfo: { ref: 'codePopup', show: false, wxCode: null }, 
		};
	},
	mutations: {
		[SET_HOME_ADV_INFO]: (state, data) => {
			state.homeAdvInfo = data;
		},
	},
};
