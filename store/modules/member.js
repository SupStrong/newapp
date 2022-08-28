export const SET_MEMBER_FAVS = "SET_USSER_LANDING";
export const SET_MEMBER_ADDFAV = "SET_MEMBER_ADDFAV";
export const SET_MEMBER_DELFAV = "SET_MEMBER_DELFAV"
export default {
	state() {
		return {
			favs:{}
		};
	},
	mutations: {
		[SET_MEMBER_FAVS]: (state, data) => {
			const favsList = data
			const favs = {}
			favsList.forEach(({ item_id, fav_id }) => {
			  favs[item_id] = {
				item_id,
				fav_id
			  }
			})
			state.favs = favs;
		},
		[SET_MEMBER_ADDFAV]: (state, data) => {
			const { item_id } = data
			const favs = {
			  ...state.favs,
			  item_id: item_id
			}
			state.favs = favs;
		},
		[SET_MEMBER_DELFAV]: (state, data) => {
			const { item_id } = data
			const favs = {
			  ...state.favs
			}
			delete favs[item_id]
			state.favs = favs;
		}
	},
};