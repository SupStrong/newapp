<template>
	<view>
		商城
		<custom-tab-bar :list="tabList" />
	</view>
</template>

<script>
import customTabBar from '@/components/custom-tab-bar/index.vue';
export default {
	components: {
		customTabBar
	},
	data() {
		return {
			tabList: [
				{
					pagePath: '/pages/index/index',
					iconPath: '/static/image/tabbar/home.png',
					selectedIconPath: '/static/image/tabbar/home-selected.png',
					text: '首页'
				},
				{
					pagePath: '/pagesMarketing/classify/index',
					iconPath: '/static/image/tabbar/nav.png',
					selectedIconPath: '/static/image/tabbar/nav-selected.png',
					text: '分类'
				},
				{
					pagePath: '/pagesMarketing/cart/index',
					iconPath: '/static/image/tabbar/cart.png',
					selectedIconPath: '/static/image/tabbar/cart-selected.png',
					text: '购物车'
				},
				{
					pagePath: '/pagesMarketing/order/list',
					iconPath: '/static/image/tabbar/order.png',
					selectedIconPath: '/static/image/tabbar/order-selected.png',
					text: '我的订单'
				}
			]
		};
	},
	components: {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.main_nav {
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 40rpx 64rpx 36rpx 58rpx;
	background: #ffffff;
	box-shadow: 0 4rpx 40rpx 0 rgba(13, 104, 230, 0.05);
	border-radius: 16rpx;
	margin: 32rpx;
	&::after {
		content: '';
		position: absolute;
		width: 2rpx;
		height: 90rpx;
		background-color: #d9d9d9;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.item {
		&-count {
			height: 50rpx;
			font-size: 36rpx;
			font-weight: 500;
			line-height: 50rpx;
			margin-bottom: 10rpx;
			text-align: center;
		}
		&-label {
			display: flex;
			align-items: center;
			height: 40rpx;
			font-size: 28rpx;
			line-height: 1;
			&-icon {
				width: 50rpx;
				margin-right: 10rpx;
			}
		}
	}
}
.control {
	margin: 0 32rpx;
	background: #ffffff;
	box-shadow: 0 4rpx 40rpx 0 rgba(13, 104, 230, 0.05);
	border-radius: 16rpx;
	padding: 40rpx 0;
	.title {
		height: 40rpx;
		font-size: 28rpx;
		font-weight: 500;
		line-height: 40rpx;
		margin-bottom: 40rpx;
		padding-left: 32rpx;
		box-sizing: border-box;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		&-item {
			width: 156rpx;
			text-align: center;
			&:not(:nth-child(-n + 4)) {
				margin-top: 36rpx;
			}
			&-img {
				display: inline-block;
				vertical-align: middle;
				width: 46rpx;
				margin: 0 auto 8rpx;
			}
			&-name {
				line-height: 32rpx;
				text-align: center;
			}
		}
	}
}
</style>
