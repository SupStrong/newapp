<template>
	<view class="group-box">
		<view class="goods-item u-m-b-16" v-for="(item, index) in grouponList" :key="item.id" @tap="$Router.push({ path: '/pages/goods/detail', query: { id: item.id } })">
			<view class="big-goods u-p-20 u-flex u-col-top">
				<image v-if="index < 3" class="top-tag" src="http://file.shopro.top/imgs/group/groupon_top1.png" mode=""></image>
				<image class="goods-img" lazy-load fade-show :src="item.image" mode="aspectFill"></image>
				<view class=" card-right u-m-l-20 u-flex-col u-row-between">
					<view class="">
						<view class="goods-title u-ellipsis-1  u-m-t-10 u-m-b-10">
							<view class="title-tag cu-tag bg-orange sm radius u-m-r-10">拼团</view>
							{{ item.title }}
						</view>
						<view v-show="item.subtitle" class="subtitle-text u-m-b-10 u-ellipsis-1">{{ item.subtitle }}</view>
					</view>

					<view class="u-flex u-m-y-20">
						<view class="sell-box">
							<text class=" hot-icon iconfont icon-icon-test"></text>
							<text class="sell-num">已拼{{ item.sales }}件</text>
						</view>
						<text class="group-num">{{ item.activity.rules.team_num || 0 }}人团</text>
					</view>

					<view class=" u-flex u-row-between u-col-center">
						<view class="u-flex u-col-bottom font-OPPOSANS">
							<view class="price u-m-r-10">{{ item.price }}</view>
							<view class="origin-price">{{ item.original_price }}</view>
						</view>
						<button class="u-reset-button buy-btn">马上拼</button>
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
			grouponList: [
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
.group-box {
	width: 710rpx;
	background: linear-gradient(#fff, #f5f5f5);
	border-radius: 20rpx;
	margin: 0 auto;
	// min-height: 800rpx;
	.goods-item {
		border-radius: 20rpx;
		background-color: #fff;
		// 大商品卡片
		.big-goods {
			width: 710rpx;
			height: 260rpx;
			background: #ffffff;
			box-shadow: 0px 7rpx 8rpx 1rpx rgba(254, 76, 29, 0.05);
			border-radius: 20rpx;
			position: relative;
			.goods-img {
				width: 220rpx;
				height: 220rpx;
				border-radius: 6rpx;
			}
			.top-tag {
				position: absolute;
				z-index: 3;
				top: 20rpx;
				left: 20rpx;
				width: 84rpx;
				height: 36rpx;
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
				vertical-align: middle;
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
				background: linear-gradient(90deg, #ff6600 0%, #fe832a 100%);
				border-radius: 25rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #ffffff;
			}
			// 拼团
			.sell-box {
				background: rgba(#f9efd6, 0.3);
				border-radius: 16rpx;
				line-height: 32rpx;
				.sell-num {
					font-size: 20rpx;

					font-weight: 400;
					color: #ff6904;
				}

				.hot-icon {
					font-size: 26rpx;
					color: #ff6904;
					margin-right: 8rpx;
				}
			}
			.group-num {
				font-size: 20rpx;

				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				margin-left: 20rpx;
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
	}
}
</style>
