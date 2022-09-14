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
					selectedIconPath: '/static/image/tabbar/home-selected.png',
					text: '活动'
				},
				{
					pagePath: '/pagesMarketing/goods/index?source=purchase',
					iconPath: '/static/image/tabbar/nav.png',
					selectedIconPath: '/static/image/tabbar/nav-selected.png',
					text: '品牌'
				},
				{
					pagePath: '/pagesMarketing/goods/index?source=purchase',
					iconPath: '/static/image/tabbar/nav.png',
					selectedIconPath: '/static/image/tabbar/nav-selected.png',
					text: '分类'
				},
				{
					pagePath: '/pagesMarketing/goods/index?source=purchase',
					iconPath: '/static/image/tabbar/nav.png',
					selectedIconPath: '/static/image/tabbar/nav-selected.png',
					text: '成分'
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
