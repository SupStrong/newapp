<template>
	<view>
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
					selectedIconPath: '/static/image/tabbar/home1.png',
					text: '主页'
				},
				{
					pagePath: '/pagesMark/partner/activity',
					iconPath: '/static/image/tabbar/order.png',
					selectedIconPath: '/static/image/tabbar/order1.png',
					text: '带货活动'
				},
				{
					pagePath: '/pagesMark/partner/activity',
					iconPath: '/static/image/tabbar/goods.png',
					selectedIconPath: '/static/image/tabbar/goods1.png',
					text: '关联商品'
				},
				{
					pagePath: '/pagesMark/partner/activity',
					iconPath: '/static/image/tabbar/price.png',
					selectedIconPath: '/static/image/tabbar/price1.png',
					text: '分佣订单'
				}
			]
		};
	},
	onShow() {
		uni.hideTabBar({
			animation: true,
			complete(res) {
				// console.log(res);
			}
		});
	},
	methods: {}
};
</script>

<style></style>
