<template>
	<view class="goods-item">
		<image class="item-image" :src="item.picture || item.pics[0]" mode="aspectFill"></image>
		<view class="item-main">
			<view class="main-name one-line">
				<text class="text-name">{{item.title || item.item_name}}</text>
			</view>
			<view class="main-remark">
				<text>{{item.detail || item.brief}}</text>
			</view>
			<view class="main-foot">
				<view class="foot-price">
					¥{{item.price || item.it_price}}
				</view>
			<!-- 	<view class="foot-share" v-if="Number(item.split_price) > 0">
					分享预收益¥{{item.split_price}}
				</view> -->
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
						picture: '',
						title: '',
						keyword: '',
						// price: '199.99'
					}
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
.goods {
	&-item {
		display: flex;
		// height: 182rpx;
		// padding: 20rpx 0;
	}
}
.item {
	&-image {
		align-self: center;
		width: 142rpx;
		height: 142rpx;
		background-size: 100%;
		border-radius: 16rpx;
	}
	&-main {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		flex: 1;
		padding-left: 16rpx;
	}
}
.main {
	&-name {
		// width: 100%;
		// height: 34rpx;
		// font-size: 26rpx;
		// font-weight: 400;
		// color: #353535;
		// line-height: 34rpx;
		
		height: 36rpx;
		font-size: 26rpx;
		color: #353535;
		line-height: 36rpx;
	}
	&-remark {
		width: 100%;
		display: -webkit-box;
		overflow: hidden;
		height: 64rpx;
		// margin-top: -18rpx;
		font-size: 22rpx;
		font-weight: 400;
		color: #999999;
		line-height: 32rpx;
		text-overflow: -o-ellipsis-lastline;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	&-foot {
		align-self: flex-end;
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 8rpx;
		height: 40rpx;
	}
}
.foot {
	&-price {
		height: 40rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #FF5000;
		line-height: 40rpx;
		margin-right: 16rpx;
	}
	&-share {
		height: 40rpx;
		padding: 0 20rpx;
		background: #FFAE2C;
		border-radius: 24rpx;
		font-size: 20rpx;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 40rpx;
	}
}
</style>
