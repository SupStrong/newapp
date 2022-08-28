<template>
	<view class="order" :class="{'unit_px': unit == 'px'}">
		<!-- 订单信息 -->
		<view class="form_card card">
			<view class="title flex-between G-Mb-12" @click.stop="toPage">
				<view class="name one-line">
					{{info.statusName}}
				</view>
				<view class="more">
					<image class="more-icon" src="https://vue-oss.juranguanjia.com/weapp/image/homePages/adv-more.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="form">
				<view class="form-item">
					<view class="label">
						服务号
					</view>
					<view class="value">
						{{info.orderCode}}
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						服务信息
					</view>
					<view class="value one-line">
						{{info.skuName}}
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						服务时间
					</view>
					<view class="value">
						<text class="timer" v-if="info.serviceRezTime !== '0000-00-00 00:00:00'">{{info.serviceRezTime}}</text>
						<text class="tips" v-else>工程师会与您确认具体时间</text>
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						服务工程师
					</view>
					<view class="value">
						{{info.technicianName || '工程师待接单'}}
						<!-- or 工程师待接单 -->
					</view>
				</view>
			</view>
		</view>
	
		<!-- 测量信息 -->
		<view v-if="info.backInfo && Array.isArray(info.backInfo) && info.backInfo.length" class="files_card card">
			<view class="title G-Mb-12">
				<view class="name">{{backInfoTitle}}</view>
			</view>
			<view class="files">
				<block v-for="(item, index) in backInfo" :key="index">
					<view 
						:class="[
							'file',
							{'file_image': item.type === 'image'},
							{'file_video': item.type === 'video'},
						]" 
						v-for="(file, fileIndex) in Array.isArray(item.data) ? item.data : [item.data]"
						:key="fileIndex"
						@click.stop="preview(item.type, file)"
					>
						<image v-if="item.type === 'image'" lazy-load class="file-cover" :src="file.filePath || baseInfo.coverImg" mode="aspectFill"></image>
						<video 
							:id="file.itemId"
							v-else-if="item.type === 'video'" 
							:show-center-play-btn="false"
							:show-play-btn="false"
							:show-fullscreen-btn="false"
							class="file-cover" 
							:src="file.filePath"
							mode="aspectFill"
						></video>
						<image v-if="item.type === 'video'" class="play_icon" src="https://vue-oss.juranguanjia.com/weapp/image/icon/play.png" mode="widthFix"></image>
					</view>
				</block>
			</view>
		</view>
		
		<!-- 测量结果 -->
		<!-- <view class="'end_card card">
			<image class="file-icon G-Mr-8" src="https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image/minePage/file.png" mode="widthFix"></image>
			<view class="end_card-main">
				<view class="title G-Mb-12 flex-between">
					<view class="name">测量现场</view>
					<view class="more" @click="toPage">
						<image class="more-icon" src="https://vue-oss.juranguanjia.com/weapp/image/homePages/adv-more.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="timer">
					2022.09.09  12：09
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
import { mapGetters } from 'vuex';
import { previewFile } from '@/utils/RegExp.js';

export default {
	props: {
		info: {
			type: Object,
			default: () => {
				return {}
			}
		},
		unit: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			backInfoTitle: '',
			backInfo: [],
		}
	},
	computed: {
		...mapGetters(['baseInfo']),
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			let titleArr = [];
			const info = this.info;
			if(Array.isArray(info.backInfo)) {
				this.backInfo = info.backInfo.map((item, index) => {
					if(item.type === 'image') {
						titleArr.push('图像采集')
					};
					if(item.type === 'video') {
						titleArr.push('视频采集')
					};
					return {
						...item,
						data: item.data.map((child, childIndex) => {
							return {
								filePath: child,
								itemId: `backInfo_${index}_${childIndex}`
							}
						})
					}
				})
			}
			this.backInfoTitle = titleArr.join('、');
		},
		preview(type, item) {
			if(type === 'video') {
				// #ifdef MP-BAIDU
				this.videoContext = uni.createVideoContext(item.itemId);
				// #endif
				// #ifndef MP-BAIDU
				this.videoContext = uni.createVideoContext(item.itemId, this);
				// #endif
				setTimeout(() => {
					this.videoContext.requestFullScreen();
					this.videoContext.play();
				}, 0)
			} else {
				previewFile(item.filePath);
			}
		},
		toPage() {
			this.$emit('toDetail', this.info);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';

image {
	display: flex;
	height: auto;
	background-size: 100%;
	background-position: center;
}
	.order {
		.card {
			padding: 30rpx 0;
			&:not(:last-child) {
				border-bottom: 2rpx solid #F6F6F6;
			}
		}
		.files_card {
			padding-bottom: 0;
		}
		.title {
			height: 44rpx;
			.name {
				font-size: 32rpx;
				font-weight: 500;
				line-height: 44rpx;
			}
			.more {
				&-icon {
					width: 10rpx;
				}
			}
		}
		
		.form {
			&-item {
				display: flex;
				&:not(:last-child) {
					margin-bottom: 24rpx;
				}
				.label {
					width: 252rpx;
					font-size: 28rpx;
					color: #999999;
					line-height: 40rpx;
				}
				.value {
					flex: 1;
					overflow: hidden;
					font-size: 28rpx;
					line-height: 40rpx;
					.timer {
						color: $themeColor;
					}
					.tips {
						color: #FA2C19;
					}
				}
			}
		}
	
		.files {
			display: flex;
			flex-wrap: wrap;
			.file {
				width: 206rpx;
				height: 118rpx;
				&:not(:nth-child(-n + 3)) {
					margin-top: 24rpx;
				}
				&:not(:nth-child(3n)) {
					margin-right: 32rpx;
				}
				&-cover {
					width: 100%;
					height: 100%;
					border-radius: 4rpx;
				}
			}
			.file_video {
				position: relative;
				.play_icon {
					position: absolute;
					width: 40rpx;
					z-index: 9;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	
		.end_card {
			display: flex;
			.file-icon {
				width: 62rpx;
			}
			&-main {
				flex: 1;
				overflow: hidden;
				.timer {
					height: 34rpx;
					font-size: 24rpx;
					color: #999999;
					line-height: 34rpx;
					margin-top: 8rpx;
				}
			}
		}
	}
	
	.unit_px {
		.card {
			padding: 15px 0;
			&:not(:last-child) {
				border-bottom: 1px solid #F6F6F6;
			}
		}
		.title {
			height: 22px;
			.name {
				font-size: 16px;
				font-weight: 500;
				line-height: 22px;
			}
			.more {
				&-icon {
					width: 5px;
				}
			}
		}
		
		.form {
			&-item {
				display: flex;
				&:not(:last-child) {
					margin-bottom: 12px;
				}
				.label {
					width: 126px;
					font-size: 14px;
					line-height: 20px;
				}
				.value {
					font-size: 14px;
					line-height: 20px;
					.tips {
						color: #FA2C19;
					}
				}
			}
		}
	
		.files {
			display: flex;
			flex-wrap: wrap;
			.file {
				width: 103px;
				height: 59px;
				&:not(:nth-child(-n + 3)) {
					margin-top: 12px;
				}
				&:not(:nth-child(3n)) {
					margin-right: 16px;
				}
				&-cover {
					border-radius: 2px;
				}
			}
			.file_video {
				.play_icon {
					width: 20px;
				}
			}
		}
	
		.end_card {
			.file-icon {
				width: 31px;
			}
			&-main {
				.timer {
					height: 17px;
					font-size: 12px;
					line-height: 17px;
					margin-top: 4px;
				}
			}
		}
	}
</style>