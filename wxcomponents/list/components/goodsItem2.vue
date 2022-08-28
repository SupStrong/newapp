<template>
	<view class="goods_item">
		<image class="goods_item-cover" :src="item.image || baseInfo.coverImg" mode="aspectFill"></image>
		<view class="goods_item-content">
			<view class="title two-line">
				{{item.title}}
			</view>
			<view class="price">
				¥{{item.price}}
			</view>
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: {
		item: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	computed: {
		...mapGetters(['baseInfo'])
	},
}
</script>

<style lang="scss" scoped>
.goods_item {
	width: 334rpx;
	height: 482rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	overflow: hidden;
	&-cover {
		width: 100%;
		height: 334rpx;
		border-radius: 16rpx 16rpx 0 0;
	}
	&-content {
		padding: 16rpx 20rpx 8rpx;
		box-sizing: border-box;
		.title {
			height: 68rpx;
			font-size: 24rpx;
			line-height: 34rpx;
		}
		.price {
			height: 40rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #FF5000;
			line-height: 40rpx;
		}
	}
}
</style>
