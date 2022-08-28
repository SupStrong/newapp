<template>
	<view class="goods_item">
		<view class="goods_item-cover_box">
			<image class="goods_item-cover" :src="item.image || baseInfo.coverImg" mode="aspectFill"></image>
		</view>
		<view class="goods_item-content">
			<view class="title two-line">
				{{item.title || item.name}}
			</view>
			<view class="tags" v-if="item.tags.length">
				<view class="tags-item one-line" v-for="(item, index) in item.tags" :key="index">
					{{item.name}}
				</view>
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
@import '@/static/css/common/imports.scss';

.goods_item {
	width: 100%;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	overflow: hidden;
	&-cover_box {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}
	&-cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	&-content {
		padding: 16rpx 20rpx 8rpx;
		box-sizing: border-box;
		.title {
			height: 68rpx;
			font-size: 24rpx;
			line-height: 34rpx;
		}
		.tags {
			display: flex;
			height: 40rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #FF5000;
			line-height: 40rpx;
			&-item {
				height: 32rpx;
				padding: 0 6rpx;
				margin-right: 16rpx;
				border-radius: 8rpx;
				opacity: 0.59;
				border: 2rpx solid $themeColor;
				font-size: 22rpx;
				color: $themeColor;
				line-height: 32rpx;
			}
		}
	}
}
</style>
