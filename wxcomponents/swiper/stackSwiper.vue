<template>
	<view class="page_wx">
		<view class="swiperItem" v-for="(item, index) in swiperList" :key="index" :style="{transform: itemStyle[index].transform, zIndex: itemStyle[index].zIndex, opacity: itemStyle[index].opacity}">
			<view class="children">
				<image class="pic" :src="item.url"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		swiperList: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {}
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			console.log('zlikj')
		}
	},
	
}
</script>

<style>
</style>
