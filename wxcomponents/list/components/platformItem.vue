<template>
	<view class="brand-item" @click.stop.prevent="toPlatformDetail">
		<view class="brand-item__wrapper">
			<image class="item-image" :src="item.image || baseInfo.coverImg" mode="aspectFit"></image>
			<view class="item-main">
				<view class="main-text">
					<text class="text-name">{{item.name}}</text>
					<text>{{item.remark || ''}}</text>
				</view>
				<view class="main-tags">
					<view class="tags-item" v-for="tag in item.tagList.slice(0, 4)" :key="tag.id">
						{{ tag.name }}
					</view>
				</view>
			</view>
		</view>
		<view class="brand-item__hot">
			<view class="hot-item" v-for="goods in item.goodsList" :key="goods.id" @click.stop.prevent="toGoodsDetail(goods)">
				<view class="hot-item-picture">
					<image class="adapt" :src="goods.image || baseInfo.coverImg" mode="aspectFit"></image>
				</view>
				<view class="hot-item-name one-line">
					{{goods.name}}
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
					return {
						image: '',
						name: '',
						remark: '',
						tagList: [],
						goodsList: [],
					}
				}
			}
		},
		computed: {
			...mapGetters(['baseInfo'])
		},
		methods: {
			toPlatformDetail() {
				uni.navigateTo({
					url: `/pagesMarketing/brand/detail?type=platform&id=${this.item.id}`
				})
			},
			toGoodsDetail(goods) {
				uni.navigateTo({
					url: `pagesMarketing/goods/detail?id=${goods.id}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
image {
	display: block;
	background-size: 100%;
	background-position: center;
}
.brand {
	&-item {
		&__wrapper {
			display: flex;
			height: 142rpx;
		}
		&__hot {
			display: flex;
			// justify-content: space-between;
			margin-top: 8rpx;
			.hot-item {
				width: 144rpx;
				&:not(:last-child) {
					margin-right: calc((100% - (144rpx * 4)) / 3);
				}
				&-picture {
					width: 144rpx;
					height: 144rpx;
					border-radius: 8rpx;
					overflow: hidden;
					.adapt {
						width: 100%;
						height: 100%;
					}
				}
				&-name {
					height: 32rpx;
					margin-top: 4rpx;
					font-size: 22rpx;
					line-height: 32rpx;
				}
			}
		}
	}
}
.item {
	&-image {
		align-self: center;
		width: 128rpx;
		height: 128rpx;
		background-size: 100%;
		border-radius: 16rpx;
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
