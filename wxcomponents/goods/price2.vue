<template>
	<view class="price price__primary">
		<text class="price__symbol">¥</text>
		<text class="price__decimal">{{ Number(value).toFixed(2) }}</text>
	</view>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		}
	},
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
@import '@/static/css/common/iconfont1.scss';
.price {
	&__primary {
		color: $color-price;
		font-size: 40rpx;
		font-weight: 700;
		display: inline;
	}
	&__symbol {
		margin-right: 5rpx;
		font-size: 20rpx;
		font-weight: normal;
	}
	&__decimal {
		font-size: 1em;
	}
}
</style>
