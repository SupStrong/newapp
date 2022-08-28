export const SET_SPT_NOTE = "SET_SPT_NOTE";
/**
 * sptNote: {
	 searchType: service => 慧家商品；espier => 慧商商品； project =>方案
	 searchnName: 标题
 }
 * */
export default {
	state() {
		return {
			sptNote: null, // {searchType: 类型, searchnName: 搜索标题}
		};
	},
	mutations: {
		[SET_SPT_NOTE]: (state, data) => {
			state.sptNote = data;
		},
	},
};
