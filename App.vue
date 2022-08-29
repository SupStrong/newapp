<script>
	import {
		mapMutations,
	} from 'vuex';
	import {
		getIP
	} from '@/api/modules/common.js';
	import amap from './common/amap-wx.js';
	export default {
		globalData: {
			provider: '',
			channelMerchantId: '',
			isMobile:false
		},
		onLaunch(e) {
			this.init();
			if (e.query.scene) {
			  let scene = decodeURIComponent(e.query.scene).split('&')
			  scene.map(item => {
				if (item.split('=')[0] == 'id') {
				  uni.setStorageSync('supply', item.split('=')[1])
				}
			  })
			} else {
			  if (e.query.id) {
				uni.setStorageSync('supply', e.query.id)
				if (e.query.supplyName) {
				  uni.setStorageSync('supplyName', e.query.supplyName)
				}
			  } else {
				uni.setStorageSync('supply', 1844)
			  }
			}
			uni.setStorageSync('isDefault', uni.getStorageSync('supply') == 1844 ? true : false)
		},
		onShow: function() {
			uni.getSystemInfo({
				success: function(res) {
					const model = res.model;
					const modelInclude = ["iPhone X", 'iPhone XR', "iPhone XS", "iPhone XS MAX"];
					var flag = false; //是否X以上机型
					for (let i = 0; i < modelInclude.length; i++) {
						if (model.indexOf(modelInclude[i]) != -1) {
							flag = true
						}
					}
					uni.setStorageSync('isPhone', flag)
				}
			})
			uni.getProvider({
				service: 'oauth',
				success: function(res) {
					getApp().globalData.provider = res.provider
				},
				fail: (error) => {
					console.log(error)
				}
			})
		},
		onHide: function() {
		},
		
		methods:{
			...mapMutations([
				'SET_POSITION',
				'SET_SYSTEMINFO',
				'SET_USER_REAL_ADDRESS',
				'SET_USER_SELECT_ADDRESS'
			]),
			async init() {
							let systemInfo = uni.getSystemInfoSync();
							// rpx -> px单位比例
							systemInfo.unitScale = (systemInfo.windowWidth / 375).toFixed(2);
							// #ifndef H5 || MP-LARK || APP
								systemInfo.menuButton = uni.getMenuButtonBoundingClientRect() || {};
							// #endif
							
							// #ifdef H5 || MP-LARK || APP
								systemInfo.menuButton = {	
									top: 0,
									left: systemInfo.windowWidth,
									height: 36
								};
							// #endif
							
							// #ifdef H5
							let ua = navigator.userAgent.toLowerCase();
							let isWXWork = ua.match(/wxwork/i) == 'wxwork';
							let isWeixin = !isWXWork && ua.match(/micromessenger/i) == 'micromessenger';
							systemInfo.isWeixin = isWeixin;
							// #endif
							this.SET_SYSTEMINFO(systemInfo);
						},
			async getLocalHost() {
				let that = this;
				this.amapPlugin = new amap.AMapWX({
					// key: 'ce01d3a9dfa5814f6a82cdd30c994af7' //高德地图KEY
					key: '2d419f564e0e8cb051eda6cff6e8aea9'
				});
				await this.amapPlugin.getRegeo({
					success: (res) => {
						console.log('2312',res)
						const {
							city,
							province,
							adcode
						} = res[0].regeocodeData.addressComponent;
						const locate = `${res[0].longitude},${res[0].latitude}`;
						const obj = {
							name: Array.isArray(city) ? province : city,
							code: adcode.slice(0, -2) + '00',
							locate: locate
						}
						uni.setStorageSync('userLocation', locate);
						uni.setStorageSync("currentAddress", obj);
						uni.setStorageSync('userCurrentCity', {
							name: province
						});
						this.SET_POSITION(obj);
						
						/**
						 * 新储存定位代码
						 * start
						 * */
						this.SET_USER_REAL_ADDRESS(obj);
						this.SET_USER_SELECT_ADDRESS(obj);
						/**end*/
					},
					fail: (res) => {
						let { name, code, locate } = uni.getStorageSync("currentAddress");
						if (code && name && locate) {
							this.SET_POSITION({
								name: name,
								code: code,
								locate: locate
							})
						}
						uni.setStorageSync('userCurrentCity', {
							name: '未知'
						});
					}
				})
			}
		}
	}
</script>

<style>
	/* 默认共用类样式 */
	@import url("@/static/css/flex.scss");
	@import url("@/static/css/public.scss");	
	scroll-view ::-webkit-scrollbar {
	  width: 0;
	  height: 0;
	  color: transparent;
	  display: none;
	}
</style>
