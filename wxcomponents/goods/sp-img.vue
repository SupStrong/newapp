<template>
	<view class="sp-img-box">
		<img 
			:class="clss || className"
			class="imgClass"
			:src="src"
			mode="mode"
			:lazyLoad="lazyLoad"
		/>
<!-- 		@error="onError"
		@load="onLoad" -->
	</view>
</template>

<script>
import {
	getDeviceByCate
} from '@/api/modules/myHome.js'
export default {
	props: {
		clss:{
			type: String,
			default: ''
		},
		className:{
			type: String,
			default: ''
		},
		src:{
			type: String,
			default: ''
		},
		
	},
	onShow() {
	},
	methods: {
	},
	computed:{
	},
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
.sp-img-box{
	width: 100%;
	height: 100%;
	.imgClass{
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
	}
}
.order-item__img {
  width: 120rpx!important;
  height: 120rpx!important;
  margin-right: 35rpx;
  border-radius: 6rpx;
  position: relative!important;
}
</style>
