<template>
	<view class="card">
		<view class="title" style="justify-content: space-between;">
			<text>我的设备</text>
			<image v-if="showAdd" class="add-icon" @click="addDevice" :src="baseUrlImg+'/applet/image/common/add.png'" />
		</view>
		<view class="main-content" style="border-radius: 16rpx;">
			<view :class="['device-list', {'device-list_two': deviceList.length > 3}]" v-if="deviceList.length">
				<view class="device-item" v-for="(item,index) in list" :key="index">
					<view class="device-info" @click="toDeviceDetail(item)">
						<view class="device-image">
							<image :src="item.device_picture" v-if="item.device_picture" class="device-image-img" mode="aspectFill">
							</image>
							<image :src="baseInfo.coverImg" mode="" class="device-image adapt" v-else></image>
						</view>
						<view class="device-name">
							<view class="name">
								{{ item.alias_device_name || item.device_name }}
							</view>
							<view class="date">
								近期服务：{{ item.service_time || '' }}
							</view>
						</view>
						<view class="device-icon">
							<image class="icon" :src="item.image && item.image.image" mode="heightFix"></image>
						</view>
					</view>
					<view class="device-recommend">
						<view class="recommend-list">
							<view 
								class="recommend-list-item" 
								v-for="(child, chi_index) in item.device_show" 
								:key="chi_index"
								 @click="toServicePage(child)"
							>
								<view class="rec-name">
									{{child.name}}
								</view>
								<view class="rec-footer">
									<view class="rec-image">
										<image v-if="child.images" class="adapt" :src="child.images.split(',')[0]" mode=""></image>
										<image v-else class="adapt" :src="baseInfo.coverImg" mode=""></image>
									</view>
									<view class="rec-btn">
										<text>预约服务</text>
									</view>
								</view>
							</view>
							<!-- #ifdef MP-WEIXIN -->
							<view class="recommend-list-item" v-if="item.hcInfo && item.hcInfo.keeperId">
								<view class="rec-name">
									耗材管家
								</view>
								<view class="rec-footer">
									<view class="rec-image">
										<image class="adapt" :src="baseUrlImg + '/image/myhome/hc-logo.png'" mode=""></image>
									</view>
									<view class="rec-btn">
										<text>查看耗材</text>
									</view>
								</view>
							</view>
							<!-- #endif -->
						</view>
					</view>
				</view>
				<view v-if="deviceList.length > 3" class="more" @click="handleMore">
					<template v-if="!showMore">
						<text>全部</text>
						<view class="more-img">
							<image class="adapt" :src="baseUrlImg+'/image/common/all.png'" mode=""></image>
						</view>
					</template>
					<template v-else>
						<text>收起</text>
						<view class="more-img no_show">
							<image class="adapt" :src="baseUrlImg+'/image/common/all.png'" mode=""></image>
						</view>
					</template>
				</view>
			</view>
			<view class="device-list device-none" v-else>
				<view class="device-none-desc">
					暂无设备，请添加
				</view>
				<view class="device-none-btn" @click="addDevice">
					添加设备
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { showPopup } from '@/utils/index.js'
	import { mapGetters } from 'vuex';
	export default {
		props: {
			currentHome: {
				type: Object,
				default: () => {
					return {}
				}
			},
			deviceList: {
				type: Array,
				default: () => {
					return []
				}
			},
			homeInfo: {
				type: Object,
				default: () => {
					return {}
				}
			},
			showAdd: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				showMore: false,
				baseUrlImg: 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp',
			}
		},
		computed: {
			...mapGetters(['baseInfo']),
			list() {
				const list = this.deviceList;
				if(list.length > 0) {
					if(!this.showMore) {
						return list.slice(0, 3);
					} else {
						return list;
					}
				}
			}
		},
		methods: {
			handleMore() {
				this.showMore = !this.showMore;
			},
			addDevice() {
				const homeInfo = uni.getStorageSync('homeInfo');
				if(homeInfo.id) {
					this.homeInfo = homeInfo;
				}
				if (this.homeInfo.id == undefined) {
					showPopup('请先添加房屋信息');
					return false;
				}
				this.$emit('addDevice', {});
				// uni.navigateTo({
				// 	url: "/myHomePages/myHome/createDevice"
				// })
			},
			toServicePage(res) {
				uni.navigateTo({
					url: `/servicePages/service/service_item?id=${res.spu_id}`
				})
			},
			toDeviceDetail(data) {
				const homeInfo = uni.getStorageSync('homeInfo');
				uni.navigateTo({
					url: `/myHomePages/myHome/deviceDetail?home_id=${homeInfo.id}&device_id=${data.device_id}`
				})
			},
			toPage(type, data) {
				if(type === 'hc') {
					const { keeperId = null, token = null } = data.hcInfo;
					uni.navigateToMiniProgram({
					  appId: 'wx6d7b191526a9db5a',
					  path: `/pages/equipment/equipment?equipmentId=${keeperId}&token=${token}`,
					  success(res) {
						
					  },
					  fail(err) {
					  // 	uni.showToast({
					  // 		title: err,
							// icon: 'none',
							// duration: 5000
					  // 	})
					  }
					})
				}
			},
		},
		watch: {
			list: {
				handler() {
					this.$forceUpdate();
				},
				immediate: true
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import url("@/static/css/common/common.scss");
	
	.add-icon {
		width: 26rpx;
		height: 26rpx;
	}
	
	.device-none {
		height: 228rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		padding: 48rpx;
		box-sizing: border-box;
		&-desc {
			font-size: 24rpx;
			color: #ABABAB;
			line-height: 34rpx;
			margin-bottom: 42rpx;
			text-align: center;
		}
		&-btn {
			width: 174rpx;
			height: 56rpx;
			border-radius: 34rpx;
			border: 1rpx solid #E0E0E0;
			font-size: 28rpx;
			font-weight: 500;
			color: #0060E5;
			line-height: 56rpx;
			text-align: center;
			margin: auto;
		}
	}

	.device-service {
		.service-item {
			width: 280rpx;
			height: 152rpx;
			background: #F7F8FA;
			border-radius: 16rpx;
			padding: 0 16rpx;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			color: #333333;
			font-size: 28rpx;
			margin-bottom: 15rpx;

			.device-img {
				width: 72rpx;
				height: 72rpx;
			}
		}

		.service-order {
			color: white;
			width: 106rpx;
			text-align: center;
			height: 32rpx;
			background: linear-gradient(270deg, #FFD115 0%, #FFA509 100%);
			box-shadow: 0rpx 4rpx 8rpx 0rem rgba(255, 182, 14, 0.26);
			border-radius: 16rpx;
			line-height: 32rpx;
			font-size: 22rpx;
		}
	}

	.service-list {
		.service-item {
			border-bottom: 1px solid #D8D8D8;
			display: flex;
			justify-content: space-between;
			height: 130rpx;
			align-items: center;
			font-size: 28rpx;
			color: #333333;

			.service-order {
				color: #FFA509;
				padding: 0 20rpx;
				height: 50rpx;
				border-radius: 34rpx;
				line-height: 50rpx;
				border: 1px solid #d8d8d8;
			}
		}

		.service-item:nth-last-of-type(1) {
			border: none;
		}
	}

	.card {
		// background-color: #FFFFFF;
		padding: 20rpx 32rpx;
		margin-bottom: 20rpx;

		.title {
			height: 40rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #333333;
			height: 40rpx;
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
		}

		.address {
			display: flex;

			&-img {
				width: 60rpx;
				height: 60rpx;
				margin-right: 20rpx;
			}

			&-content {
				flex: 1;
				overflow: hidden;

				&-title {
					font-size: 28rpx;
					color: #333333;
					line-height: 40rpx;
				}

				&-size {
					height: 34rpx;
					font-size: 24rpx;
					color: #ABABAB;
					line-height: 34rpx;
				}
			}
		}

		// &-content {
		// 	overflow: hidden;

		// 	.list {
		// 		white-space: nowrap;
		// 		/*第二层设置  不换行  */
		// 		overflow-y: auto;

		// 		&-item {
		// 			width: 116rpx;
		// 			height: 148rpx;
		// 			margin-bottom: 20rpx;
		// 			background-color: #F7F8FA;
		// 			border-radius: 8rpx;
		// 			padding: 24rpx;
		// 			box-sizing: border-box;
		// 			display: inline-block;
		// 			margin-right: 20rpx;

		// 			.imgbox {
		// 				width: 32rpx;
		// 				height: 44rpx;
		// 				margin: auto;
		// 			}

		// 			.title {
		// 				display: flex;
		// 				justify-content: center;
		// 				height: 28rpx;
		// 				font-size: 20rpx;
		// 				font-weight: 400;
		// 				color: #888888;
		// 				line-height: 28rpx;
		// 			}
		// 		}

		// 		.last_item {
		// 			position: relative;

		// 			&::after {
		// 				position: absolute;
		// 				content: "";
		// 				width: 40rpx;
		// 				height: 4rpx;
		// 				left: 50%;
		// 				top: 50%;
		// 				transform: translate(-50%, -50%);
		// 				background-color: #333333;
		// 			}

		// 			&::before {
		// 				position: absolute;
		// 				content: "";
		// 				width: 4rpx;
		// 				height: 40rpx;
		// 				left: 50%;
		// 				top: 50%;
		// 				transform: translate(-50%, -50%);
		// 				background-color: #333333;
		// 			}
		// 		}
		// 	}
		// 	.nodata {
		// 		font-size: 24rpx;
		// 		margin-top: 20rpx;
		// 		font-weight: 400;
		// 		color: #ABABAB;
		// 		line-height: 34rpx;

		// 		.topic_text {
		// 			width: 100%;
		// 			text-align: center;
		// 		}

		// 		.btn {
		// 			width: 174rpx;
		// 			height: 56rpx;
		// 			background: #FFFFFF;
		// 			border-radius: 34rpx;
		// 			border: 1rpx solid #E0E0E0;
		// 			font-size: 28rpx;
		// 			font-weight: 500;
		// 			color: #FFA509;
		// 			display: flex;
		// 			align-items: center;
		// 			justify-content: center;
		// 			margin: 42rpx auto 28rpx;
		// 		}
		// 	}
		// }
		.main-content {
			padding: 0 20rpx 24rpx 20rpx;
		}
		.device-list {
			overflow: hidden;
			.device-item {
				// margin-bottom: 40rpx;
				padding: 30rpx 0 32rpx 0;
				border-bottom: 2rpx dashed #CECECE;
				&:last-child {
					border-bottom: 0 dashed #CECECE;
				}
				.device-info {
					display: flex;
					justify-content: space-between;
					.device-image {
						width: 76rpx;
						height: 76rpx;
						&-img {
							width: 100%;
							height: 100%;
							background-size: 100%;
						}
					}
					.device-name {
						flex: 1;
						overflow: hidden;
						margin: 0 20rpx;
						.name {
							width: 100%;
							font-size: 28rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						.date {
							font-size: 24rpx;
							color: #ABABAB;
						}
					}
					.device-icon {
						width: 50rpx;
						display: flex;
						justify-content: flex-end;
						.icon {
							width: 100%;
							// #ifndef MP-ALIPAY
							height: 38rpx;
							// #endif
							// #ifdef MP-ALIPAY
							height: 34rpx;
							// #endif
							background-size: 100%;
							background-position: right;
						}
					}
				}
				.device-recommend {
					margin-top: 32rpx;
					.recommend-list {
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						&-item {
							width: 312rpx;
							height: 152rpx;
							padding: 16rpx;
							box-sizing: border-box;
							border-radius: 16rpx;
							background-color: #F7F8FA;
							&:not(:nth-child(-n + 2)) {
								margin-top: 24rpx;
							}
							.rec-name {
								font-size: 26rpx;
								height: 36rpx;
								line-height: 36rpx;
								margin-bottom: 12rpx;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
							.rec-footer {
								display: flex;
								justify-content: space-between;
								align-items: flex-end;
								.rec-image {
									width: 72rpx;
									height: 72rpx;
									border-radius: 8rpx;
									overflow: hidden;
								}
								.rec-btn {
									font-size: 22rpx;
									line-height: 32rpx;
									color: #FFFFFF;
									width: 107rpx;
									height: 32rpx;
									line-height: 32rpx;
									text-align: center;
									border-radius: 32rpx;
									background: #FFAE2C;
									box-shadow: 0 4rpx 8rpx 0 rgba(255, 182, 14, 0.26);
								}
							}
						}
					}
				}
			}
			.more {
				font-size: 24rpx;
				color: #ABABAB;
				display: flex;
				justify-content: center;
				align-items: center;
				.more-img {
					width: 20rpx;
					height: 20rpx;
					margin-left: 8rpx;
				}
				.no_show {
					transform: rotate(180deg);
				}
			}
		}
		.device-list_two {
			.device-item {
				&:nth-last-child(2) {
					border-bottom: 0 dashed #CECECE;
				}
			}
		}
	}
</style>
