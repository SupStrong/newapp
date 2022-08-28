export default {
	onLoad() {
		// #ifdef H5 || MP-WEIXIN || MP-ALIPAY
		setTimeout(() => {
			this.fontFamily();
		}, 0)
		// #endif
	},
	mounted() {
		// #ifdef H5 || MP-WEIXIN || MP-ALIPAY
		setTimeout(() => {
			this.fontFamily();
		}, 0)
		// #endif
	},
	methods: {
		fontFamily() {
			uni.loadFontFace({
			    family: 'YouShe',
			    source: 'url("https://vue-oss.juranguanjia.com/weapp/font/YouSheBiaoTiHei-2.ttf")',
			    success() {
			        // console.log('success')
			    },
			    fail(err) {
			        // console.log(err)
			    }
			})
		}
	}
}