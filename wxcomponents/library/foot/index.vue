<template>
	<view 
		class="foot safe-area"
		:class="[
			{
				'unit_px': unit == 'px'
			}
		]"
		:style="{
			'justify-content': flexType,
		}"
	>
		<slot>
			Footer
		</slot>
	</view>
</template>

<script>

export default {
	props: {
		flexType: {
			type: String,
			default: 'flex-start' // 可选值：flex-start, flex-end, center, space-between, space-around
		},
		unit: {
			type: String,
			default: 'rpx'
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/common.scss';
.foot {
	position: relative;
	display: flex;
	align-items: center;
	height: 100rpx;
	background-color: #fff;
	// box-shadow: 0 0 24rpx rgba($color: #000000, $alpha: 0.04);
	box-shadow: 0 -2rpx 8rpx 0 rgba(0, 0, 0, 0.1);
	padding: 0 32rpx;
	z-index: 9;
}
.unit_px {
	height: 50px;
	box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.1);
	padding: 0 16px;
}
</style>
