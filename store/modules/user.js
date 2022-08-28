export const SET_USSER_LANDING = "SET_USSER_LANDING";
export default {
	state() {
		return {
			land_params:null
		};
	},
	mutations: {
		[SET_USSER_LANDING]: (state, data) => {
			state.land_params = data;
		}
	},
};
