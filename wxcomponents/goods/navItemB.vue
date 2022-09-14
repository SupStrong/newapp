<template>
	<view>
		<view class="goods-item u-m-b-16" v-for="item in goodsList" :key="item.id" @tap="toSeckillDetail(item.id)">
			<view class="big-goods  u-flex u-p-20 u-col-top ">
				<image class="goods-img" lazy-load fade-show :src="item.image" mode="aspectFill"></image>
				<view class=" card-right u-m-l-20 u-flex-col u-row-between">
					<view class="">
						<view class="goods-title u-ellipsis-1 u-m-t-10 u-m-b-10">
							<view class="title-tag cu-tag bg-red sm radius u-m-r-10">秒杀</view>
							{{ item.title }}
						</view>
						<view v-show="item.subtitle" class="subtitle-text u-m-b-10 u-ellipsis-1">{{ item.subtitle }}</view>
					</view>

					<view class="u-flex u-m-y-20">
						<view class="cu-progress round sm" style="width:210rpx;"><view :style="[{ width: item.percent + '%', backgroundColor: '#ffbbbb' }]"></view></view>
						<view class="progress-text">已售出{{ item.sales }}件</view>
					</view>

					<view class=" u-flex u-row-between u-col-center">
						<view class="u-flex u-col-bottom font-OPPOSANS">
							<view class="price u-m-r-10">{{ item.price }}</view>
							<view class="origin-price">{{ item.original_price }}</view>
						</view>
						<button class="u-reset-button buy-btn">去抢购</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goodsList: [
				{
					image: 'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					title: '测试',
					subtitle: '测试',
					sales: '20',
					percent: '60',
					price: '120',
					original_price: '198'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
// 列表
.goods-item {
	// 大商品卡片
	.big-goods {
		width: 710rpx;
		height: 260rpx;
		background: #ffffff;
		box-shadow: 0px 7rpx 8rpx 1rpx rgba(254, 76, 29, 0.05);
		border-radius: 20rpx;
		.goods-img {
			width: 220rpx;
			height: 220rpx;
			border-radius: 6rpx;
		}
		.card-right {
			width: 430rpx;
			height: 220rpx;
		}
		.goods-title {
			font-size: 26rpx;
			font-weight: 600;
			width: 400rpx;
			color: #000000;
		}
		.subtitle-text {
			font-size: 22rpx;
			width: 400rpx;
			font-weight: 500;
			color: #666666;
		}
		.buy-btn {
			width: 120rpx;
			line-height: 50rpx;
			background: linear-gradient(90deg, #d01325, #ed3c30);
			border-radius: 25rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #ffffff;
		}
		.progress-text {
			color: #c4c4c4;
			font-size: 20rpx;
			margin-left: 25rpx;
		}
		// 价格
		.price {
			color: #ff0000;
			font-weight: 600;
			&::before {
				content: '￥';
				font-size: 20rpx;
			}
		}
		.origin-price {
			color: #c4c4c4;
			font-size: 24rpx;
			text-decoration: line-through;
			&::before {
				content: '￥';
				font-size: 20rpx;
			}
		}
	}

	.buy-btn {
		width: 120rpx;
		line-height: 50rpx;
		background: linear-gradient(90deg, #d01325, #ed3c30);
		border-radius: 25rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #ffffff;
	}
	.btn-end,
	.btn-nostart {
		background: rgba(238, 238, 238, 1);
		color: #999999;
	}
	.btn-ing {
		background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
		box-shadow: 0px 7rpx 6rpx 0px rgba(229, 138, 0, 0.22);
		color: rgba(255, 255, 255, 1);
	}
}
</style>
