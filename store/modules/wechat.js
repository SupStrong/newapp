export const SET_PROJECTINFO = "SET_PROJECTINFO";

export default {
	state() {
		return {
			projectInfo: {}
		};
	},
	mutations: {
		[SET_PROJECTINFO]: (state, data) => {
			console.log(data)
			state.projectInfo = {
				...state.projectInfo,
				...data
			};
		}
	},
};
