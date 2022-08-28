<template>
	<view class="page_wx">
		<view class="launch-btn" v-if="systemInfo && systemInfo.isWeixin">
			<wx-open-launch-weapp id="launch-btn" @launch="handleLaunch" @error="handleError" username="gh_78e7616966fd" :path="url">
				 <script type="text/wxtag-template">
					<view class="btn-clear" style="
						color: #fff;
						font-size: 12px;
						height: 100%;
						width: 100%;
					">打开小程序</view>
				</script>
			</wx-open-launch-weapp>
		</view>
	</view>
</template>

<script>
// #ifdef H5
import wx from 'jweixin-module';
// #endif
import { getWxSignture, getWxJumpUrl } from '@/api/modules/common.js';
import { mapGetters } from 'vuex';
	
export default {
	data() {
		return {
			url: '',
		}
	},
	computed: {
		...mapGetters(['systemInfo']),
	},
	mounted() {
		setTimeout(() => {
			this.init();
		}, 0)
		// #ifdef H5
		if(this.systemInfo && this.systemInfo.isWeixin) {
			this.getSignture();
		}
		// #endif
	},
	methods: {
		init() {
			const routes = getCurrentPages();
			const curRoute = routes[routes.length - 1].route;
			const curoptions = routes[routes.length - 1].options || {};
			this.url = curRoute;
			let params = this.filterOptions(curoptions);
			if(params.length) {
				this.url = curRoute + `?${params}`;
			}
			this.$forceUpdate();
			
			/**
			 * 获取跳转到微信小程序链接
			 * */
			// getWxJumpUrl({
			// 	path: curRoute,
			// 	query: params,
			// }).then(res => {
			// 	if(res.statusCode === 200) {
			// 		window.open(res.data, 'target');
			// 	}
			// })
		},
		filterOptions(options = {}) {
			let params = '';
			const keyList = Object.keys(options);
			if(keyList && keyList.length) {
				keyList.forEach((key, index) => {
					params += `${key}=${options[key]}${(keyList.length - 1) > index ? '&' : ''}`
				})
				return params;
			}
			return '';
		},
		getSignture() {
			getWxSignture({
				urlto: location.href.split('#')[0],
				appid: 'wx0469e85c38e81fde'
			}).then(res => {
				this.jumpWxa = res.data;
				this.getConfig();
			})
		},
		 getConfig() {
			const { 
				nonceStr = null, 
				timestamp = null,
				signature = null,
				ticket = null,
				app_id = null,
			} = this.jumpWxa;
			wx.config({
				debug: false, 
				appId: 'wx0469e85c38e81fde',
				timestamp, // 必填，填任意数字即可
				nonceStr, // 必填，填任意非空字符串即可
				signature, // 必填，填任意非空字符串即可
				jsApiList: ['chooseImage'], // 必填，随意一个接口即可 
				openTagList:['wx-open-launch-weapp'], // 填入打开小程序的开放标签名
			});

			wx.ready(res => {
				this.$nextTick(() => {
					let btn = document.getElementById('launch-btn');
					btn.addEventListener('launch', e => {
						// console.log('success');
					});
					btn.addEventListener('error', e => {
						// console.log('fail', e.detail);
					});
				});
			});

			wx.error(res => {
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名
			});
		},
		// 监听跳转
		handleLaunch() {
			// alert(this.url);
		},
		// 监听错误
		handleError() {
			// alert('失败');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';

.launch-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 30vh;
	height: 32px;
	width: 100rpx;
	z-index: 99999;
	background-color: $themeColor;
	color: #fff;
	font-size: 12px;
	padding: 8px;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	right: 0;
}
</style>
