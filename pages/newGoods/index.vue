<template>
	<view class="content">
		<navGood />
		<navGoodA />
	</view>
</template>

<script>
	import navGood from './components/navItem.vue';
	import navGoodA from './components/navItemA.vue';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			navGood,
			navGoodA,
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.content {
	padding: 0 24rpx;
	box-sizing: border-box;
	background-color: #f9f9f9;
	height: 100%;
}
</style>
