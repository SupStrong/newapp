<template>
	<view class="adviser">
		<view class="adviser-title">
			<text class="title-main">专业顾问1V1详细咨询</text>
			<text class="title-sub">{{nbsp}}/ 扫码添加企业微信</text>
		</view>
		<view class="adviser-content flex-between">
			<image class="avatar" :src="baseUrlImg+ '/programme/w.png'" mode="widthFix"></image>
			<view class="info">
				<view class="nick_name">
					吴思思
					<text class="iden">（智家顾问&项目经理）</text>
				</view>
				<view class="mobile" @click="toMobile">
					<image class="mobile-icon" :src="baseUrlImg + '/homePages/adv-mobile.png'" mode="widthFix"></image>
					400-101-1155
				</view>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="code" @click="downLoadCode">
				<image class="code-img" :src="baseUrlImg+ '/programme/wcode.jpg'" mode="widthFix"></image>
			</view>
			<!-- #endif -->
		</view>
		
		<!-- 顾问弹窗 -->
		<uni-popup type="center" ref="codePopup">
			<view class="popup_code G-Fsize-12 G-color-999 G-Mt-15">
				<image class="code-img" :src="baseUrlImg+ '/programme/wcode.jpg'" mode="widthFix"></image>
				截屏保存二维码添加客服
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
				nbsp: ' ',
			}
		},
		methods: {
			toMobile() {
				uni.makePhoneCall({
				    phoneNumber: '400-101-1155'
				});
			},
			downLoadCode() {
				this.$refs.codePopup.open();
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		display: block;
		height: auto;
		background-size: 100%;
		background-position: center;
	}
	.adviser {
		width: 686rpx;
		height: 228rpx;
		background-image: url('https://vue-oss.juranguanjia.com/weapp/image/homePages/adviser.png');
		background-size: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		&-title {
			height: 44rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: #333333;
			line-height: 44rpx;
			.title-sub {
				font-size: 24rpx;
				color: #999999;
			}
		}
	
		&-content {
			margin-top: 32rpx;
			.avatar {
				width: 88rpx;
				height: 88rpx;
				border-radius: 88rpx;
				margin-right: 16rpx;
			}
			.info {
				flex: 1;
				overflow: hidden;
				.nick_name {
					height: 40rpx;
					font-size: 28rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #333333;
					line-height: 40rpx;
					.iden {
						color: #666;
						font-size: 24rpx;
					}
				}
				.mobile {
					display: flex;
					align-items: center;
					height: 40rpx;
					font-size: 28rpx;
					line-height: 40rpx;
					&-icon {
						width: 22rpx;
						margin-right: 10rpx;
					}
				}
			}
		}
	
		.code {
			width: 88rpx;
			height: 88rpx;
			background: #FFFFFF;
			border: 1rpx solid #CCCCCC;
			&-img {
				width: 100%;
			}
		}
	}

	.popup_code {
		border-radius: 16rpx;
		background-color: #fff;
		padding: 32rpx;
		.code-img {
			width: 100%;
		}
	}
</style>
