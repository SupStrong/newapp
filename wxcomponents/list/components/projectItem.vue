<template>
	<view class="goods-item">
		<image class="item-image" :src="item.image || baseInfo.coverImg" mode="aspectFill"></image>
		<view class="item-main">
			<view class="main-name one-line">
				<text class="text-name">{{item.name || item.title}}</text>
			</view>
			<view class="main-remark two-line">
				<text>{{item.remark || item.detail}}</text>
			</view>
			<view class="main-tags">
				<view class="tags-item" v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
					{{ tag.name ? tag.name : tag }}
				</view>
			</view>
			<view class="price-box" v-if="item.price_info && item.price_info.price_items - 0 > 0">
				<text>报价单: ￥{{item.price_info ? item.price_info.price_items : 0}}</text>
				<text class="line">|</text>
				<text>预估佣金￥{{item.price_info ? item.price_info.all_yongjin : 0}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseImage from '@/wxcomponents/base/image.vue';
	import { mapGetters } from 'vuex';
	export default {
		components: {
			BaseImage,
		},
		props: {
			item: {
				type: Object,
				default() {
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
.goods {
	&-item {
		box-sizing: border-box;
		display: flex;
		// padding: 20rpx 0;
		// border-radius: 16rpx;
	}
}
.item {
	&-image {
		align-self: flex-start;
		width: 110rpx;
		height: 110rpx;
		background-size: 100%;
		border-radius: 16rpx;
		background-color: #F7F9FE;
		overflow: hidden;
	}
	&-main {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		padding-left: 16rpx;
	}
}
.main {
	&-name {
		width: 100%;
		max-height: 72rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #333333;
		line-height: 36rpx;
	}
	&-remark {
		width: 100%;
		margin-top: 4rpx;
		max-height: 68rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		line-height: 34rpx;
	}
	&-tags {
		align-self: flex-end;
		width: 100%;
		display: flex;
		margin-top: 8rpx;
		height: 36rpx;
	}
}
.tags {
	&-item {
		height: 32rpx;
		margin-right: 16rpx;
		padding: 0 10rpx 0 12rpx;
		border-radius: 8rpx;
		border: 2rpx solid $themeColor;
		color: $themeColor;
		font-size: 22rpx;
		line-height: 32rpx;
		opacity: 0.6;
		&:last-child {
			margin-right: 0;
		}
	}
}
.price-box {
	margin-top: 20rpx;
	text {
		font-size: 24rpx;
		color: #666;		
	}
	.line {
		margin: 0 10rpx;
	}
}
</style>
