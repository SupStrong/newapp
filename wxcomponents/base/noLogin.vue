<template>
	<view class="login">
		<view class="post home-container">
			<view class="content">
				<view class="logo-image">
					<image :src="baseUrlImg + '/common/logo.png'"></image>
				</view>
				<view class="title_box">
					<view class="sub_title G-color-999 G-Mt-5 G-Fsize-14"><text>{{title}}</text></view>
				</view>
				<view class="type-box">
					<view class="submit-btn active" @click.stop="authLogin">去登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '您还没有登录，请登录后查看'
			},
		},
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			};
		},
		methods: {
			authLogin() {
				// #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU
				uni.navigateTo({
					url: '/pageUserInfos/login/auth/index'
				})
				// #endif
				// #ifdef H5 || MP-TOUTIAO || QUICKAPP-WEBVIEW
				uni.navigateTo({
					url: '/pages/login/auth/login'
				})
				// #endif
			},
		}
	};
</script>

<style lang="scss" scoped>
	image {
		display: block;
		height: auto;
		background-size: 100%;
		background-position: center;
	}
	.login {
		position: relative;
		background-color: white;
		height:100vh;
		overflow: hidden auto;
		box-sizing: border-box;
		.post {
			position: absolute;
			overflow: hidden;
			top: 50%;
			transform: translateY(-60%);
			width: 100%;
			.content {
				width: 100%;
				.logo-image{
					width: 170rpx;
					height: 170rpx;
					margin: 0 auto;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.title_box {
					margin-top: 40rpx;
					.main_title {
						display: flex;
						color: #333333;
						font-size: 56rpx;
						line-height: 58rpx;
						font-weight: 600;
						letter-spacing: 2rpx;
						margin-bottom: 16rpx;
						text-align: center;
						text{
							text-align: center;
							margin: 0 auto;
						}
					}
					.sub_title {
						height: 50rpx;
						font-size: 36rpx;
						font-weight: 400;
						line-height: 50rpx;
						letter-spacing: 2rpx;
						text-align: center;
					}
				}
				.img_box {
					margin: 90rpx auto;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.operate {
					display: flex;
					justify-content: space-between;
					font-size: 28rpx;
					color: #666666;
					margin-top: 16rpx;
				}
				.type-box {
					margin: auto;
					.submit-btn {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 568rpx;
						height: 80rpx;
						background: #0060E5;
						border-radius: 46rpx;
						// margin: 200rpx auto;
						font-weight: 500;
						font-size: 32rpx;
						letter-spacing: 2rpx;
						color: #888888;
						margin: 0 auto;
						margin-top: 140rpx;
					}
					.active {
						color: #ffffff;
					}
					.agreement {
						margin: 32rpx 0;
						font-size: 28rpx;
						.check {
							width: 26rpx;
							height: 26rpx;
							border-radius: 26rpx;
							border: 2rpx solid #0060E5;
							margin-right: 12rpx;
							box-sizing: border-box;
							&-select {
								width: 100%;
							}
						}
						.is_select {
							border: none;
						}
					}
				}
			}
		}
	}
</style>
