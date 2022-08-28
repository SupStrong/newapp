<template>
	<view class="brand-item">
		<view class="item-imagebox">
			<image class="adapt" :src="item.image_small_file || baseInfo.coverImg" mode="aspectFit"></image>
		</view>
		<view class="item-main">
			<view class="main-text">
				
				<text class="text-name">{{item.name}}</text>
				<text>{{item.remark}}</text>
			</view>
			<view class="main-tags">
				<view class="tags-item" v-for="tag in item.tags" :key="tag.id">
					{{ tag.name }}
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
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.brand {
	&-item {
		box-sizing: border-box;
		display: flex;
		// height: 182rpx;
	}
}
.item {
	&-imagebox {
		align-self: center;
		width: 142rpx;
		height: 142rpx;
		background-size: 100%;
		border-radius: 16rpx;
		overflow: hidden;
		.adapt {
			width: 100%;
			height: 100%;
		}
	}
	&-main {
		overflow: hidden;
		flex: 1;
		padding-left: 16rpx;
	}
}
.main {
	&-text {
		display: -webkit-box;
		overflow: hidden;
		height: 96rpx;
		color: #666;
		font-size: 22rpx;
		font-weight: 400;
		line-height: 32rpx;
		text-overflow: -o-ellipsis-lastline;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	&-tags {
		display: flex;
		margin-top: 8rpx;
		height: 32rpx;
	}
}
.text {
	&-name {
		font-size: 28rpx;
		font-weight: 500;
		color: #353535;
		padding-right: 32rpx;
	}
}
.tags {
	&-item {
		height: 32rpx;
		margin-right: 16rpx;
		padding: 0 10rpx 0 12rpx;
		border-radius: 8rpx;
		border: 2rpx solid #ADC9F5;
		color: #ADC9F5;
		font-size: 22rpx;
		font-weight: 400;
		line-height: 32rpx;
		&:last-child {
			margin-right: 0;
		}
	}
}
</style>
