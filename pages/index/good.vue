<template>
	<view>
		<view class="main_nav">
			<view class="item" v-for="(item, index) in navList" :key="index" @click="cardRouterBtn(item)">
				<view class="item-count">{{ item.count }}</view>
				<view class="item-label">
					<image class="item-label-icon" :src="baseUrlImg + item.icon" mode="widthFix"></image>
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="control">
			<view class="title">服务中心</view>
			<view class="list">
				<view class="list-item" v-for="(item, index) in listList" :key="index" @click="cardRouterBtn(item)">
					<image class="list-item-img G-Mb-4" :src="baseUrlImg + item.icon" style="height:46rpx" mode="heightFix"></image>
					<view class="list-item-name G-Fsize-11 G-Talign-center">{{ item.name }}</view>
				</view>
			</view>
		</view>
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
					pagePath: '/pagesMarketing/goods/index?source=purchase',
					iconPath: '/static/image/tabbar/nav.png',
					selectedIconPath: '/static/image/tabbar/nav-selected.png',
					text: '分类'
				},
				{
					pagePath: '/pageUserInfos/cart/index',
					iconPath: '/static/image/tabbar/cart.png',
					selectedIconPath: '/static/image/tabbar/cart-selected.png',
					text: '购物车'
				},
				{
					pagePath: '/pageUserInfos/purchaseOrder/list',
					iconPath: '/static/image/tabbar/order.png',
					selectedIconPath: '/static/image/tabbar/order-selected.png',
					text: '我的订单'
				}
			],
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image/',
			navList: [
				{
					count: 0,
					name: '带单总数',
					tiptext: '功能开发中，敬请期待',
					tolink: '/minePages/integral/index',
					icon: 'minePages/integral.png'
				},
				{
					count: 0,
					name: '提现次数',
					tolink: '/minePages/coupon/index',
					icon: 'minePages/coupon.png'
				}
			],
			listList: [
				{
					name: '发票管理',
					icon: 'minePages/invoice.png',
					tolink: '/minePages/invoice/index'
				},
				// {
				// 	name: '我的方案',
				// 	tolink: '/minePages/project/list',
				// 	icon: 'minePages/fangan.png'
				// },
				{
					name: '服务地址',
					tolink: '/minePages/address/index',
					icon: 'minePages/address.png'
				},
				{
					name: '购物车',
					tolink: '/shoppingMall/espier/espier-index',
					icon: 'minePages/shopping-cart.png'
				},
				{
					name: '我的拼团',
					tolink: '/shoppingMall/timeGroup/groupMy',
					icon: 'minePages/groups.png'
				},
				{
					name: '我的问答',
					tolink: '/minePages/blog/QandA/list',
					icon: 'minePages/question.png'
				},
				// #ifndef MP-BAIDU
				{
					name: '商家中心',
					desc: '申请合作入驻',
					tolink: '/pages/login/components/statement?url=https://bc.juranguanjia.com',
					icon: 'minePages/business.png'
				},
				// #endif
				{
					name: '关于我们',
					tolink: '/minePages/about/index',
					icon: 'minePages/about.png'
				},
				{
					name: '在线客服',
					type: 'chat',
					tolink: '',
					icon: 'minePages/chat.png'
				},
				{
					name: '设置',
					tolink: '/minePages/setting/index',
					icon: 'minePages/setting.png'
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
