export const SET_POSITION = "SET_POSITION";
export const SET_SYSTEMINFO = "SET_SYSTEMINFO";
export const SET_ALLHOTWORDS = "SET_ALLHOTWORDS";

export default {
	state() {
		return {
			baseInfo: {
				avatarImg: 'https://vue-oss.juranguanjia.com/weapp/image/common/avatar.png',
				coverImg: 'https://vue-oss.juranguanjia.com/weapp/applet/image/common/cover-img.png'
			},
			// 系统参数
			systemInfo: {
				unitScale: 1, // rpx -> px转换比例
				titleBarHeight: 0, // 标题栏高度（支付宝特有）
				menuButton: {}, // 胶囊位置信息
			},
			// 全部热词
			allHotWords: [],
			// 商家身份集合
			merchantRoles: [
				{ id: 1004, name: '服务供应商' },
				{ id: 1005, name: '服务商' },
				{ id: 1007, name: '渠道推广商' },
				{ id: 2001, name: '零售商' },
				{ id: 2002, name: '产品供应商' },
				{ id: 2003, name: '产品采购商' },
			],
			// 企业类型集合
			bizTypes: [
				{ id: 1, name: '品牌厂商'},
				{ id: 2, name: '经销商/代理商'},
				{ id: 3, name: '装修公司'},
				{ id: 4, name: '物业社区'},
				{ id: 5, name: '销售渠道'},
				{ id: 6, name: '零售门店'},
			]
		};
	},
	getters: {
		position(state) {
			return state.position
		},
		baseInfo(state) {
			return state.baseInfo;
		},
		systemInfo(state) {
			return state.systemInfo;
		},
		allHotWords(state) {
			return state.allHotWords;
		},
	},
	mutations: {
		[SET_POSITION]: (state, data) => {
			state.position = data;
		},
		[SET_SYSTEMINFO]: (state, data) => {
			state.systemInfo = data;
		},
		[SET_ALLHOTWORDS]: (state, data) => {
			state.allHotWords = data;
		},
	},
};
