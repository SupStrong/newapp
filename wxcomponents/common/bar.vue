<template>
	<view class="list flex-between">
		<view 
			class="list-item" 
			v-for="(item, index) in list"
			@click="jumpPage(item)"
			:key="index"
		>
			<view class="list-item-upper flex-between" v-if="item.base">
				<view class="title">
					{{item.base.title}}
				</view>
				<view class="subtitle">
					{{item.base.subtitle}}
				</view>
			</view>
			<view class="list-item-content flex-between">
				<view class="content-item" v-for="(goods, goodsIndex) in item.data" :key="goodsIndex">
					<image lazy-load class="goods-cover" :src="goods.image" mode="widthFix"></image>
					<view class="goods-title two-line">
						{{goods.title}}
					</view>
					<view class="goods-price">
						<text class="icon">¥ </text> {{goods.price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import {pickBy} from '@/utils/index.js'
import jumpPage from '@/mixins/jumpPage.js';

export default {
	mixins: [jumpPage],
	data() {
		return {
			isSwiperIndex:0
		};
	},
	props: {
		res: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	computed: {
		list() {
			let list = this.res.data;
			console.log(list,"Rere")
			return list;
		},
	},
};
</script>
<style lang="scss" scoped>
.list {
	background: #fff;
	padding: 24rpx;
	box-sizing: border-box;
	align-items: flex-start;
	border-radius: 16rpx;
	// margin: 0 32rpx;
	&-item {
		width: calc((100% - 32rpx) / 2);
		overflow: hidden;
		&-upper {
			justify-content: flex-start;
			margin-bottom: 16rpx;
			.title {
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 500;
				line-height: 44rpx;
			}
			.subtitle {
				width: 92rpx;
				height: 32rpx;
				background: #FE6055;
				border-radius: 200rpx 200rpx 200rpx 3rpx;
				font-size: 18rpx;
				color: #FFFFFF;
				line-height: 32rpx;
				text-align: center;
				margin-left: 8rpx;
			}
		}
	
		&-content {
			.content-item {
				width: 144rpx;
				.goods-cover {
					width: 144rpx;
					height: 144rpx;
					border-radius: 16rpx;
					margin-bottom: 8rpx;
				}
				.goods-title {
					height: 64rpx;
					font-size: 22rpx;
					line-height: 32rpx;
					margin-bottom: 4rpx;
				}
				.goods-price {
					height: 34rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #FE1B1B;
					line-height: 26rpx;
					.icon {
						font-size: 18rpx;
					}
				}
			}
		}
	}
}
</style>
