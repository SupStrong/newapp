<template>
	<view>
		<view class="flex-1" :style="modulMTop">
			<view class="flex-1 mt-2 row-ac-fw ">
				<view class="goods-item" :style="itemBox" v-for="(item, index) in brandGoods" :key="index" @click="toProduct(item)">
					<view class="goods-img"><image :src="item.img" :style="imgRadius" mode=""></image></view>
					<view class="flex-1 mx-2 mt-1 pb-1">
						<view class="flex-1 row-a-j-fc">
							<view class="row-ac font-s-1 promotion-text pb-1">
								<text class="mr-2" v-if="item.promotion == ''">包邮</text>
								<text v-if="item.promotion !== ''">{{ item.promotion }}</text>
							</view>
							<view class="font-s-5 pb-1" :style="fontSize">{{ item.title }}</view>
							<view class="row-ac pb-1">
								<view class="font-s-6 font-w text-main-color" :style="priceSizeModify">
									<text class="font-s-2">￥</text>
									{{ item.price }}
								</view>
								<view class="text-light-grey font-s-2 text-de ml-2">￥{{ item.marketPrice}}</view>
							</view>
						</view>
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
			brandGoods: [
				{
					img: 'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					promotion: '经期安睡神器',
					title: '经期裤套装',
					price: '188.00',
					marketPrice: '198.00'
				},
				{
					img: 'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					promotion: '经期安睡神器',
					title: '经期裤套装',
					price: '188.00',
					marketPrice: '198.00'
				},
				{
					img: 'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					promotion: '经期安睡神器',
					title: '经期裤套装',
					price: '188.00',
					marketPrice: '198.00'
				}
			]
		};
	},

	methods: {}
};
</script>

<style lang="scss" scoped>
@import url('../scss/main.css');
	.goods-item {
		width: 335rpx;
		margin-right: 20rpx;
		margin-bottom: 25rpx;
box-shadow: 0 0 4px rgba(201,201,201,0.5);
    border-radius: 0px;
    background: rgba(246,246,246,0.99);
		.goods-img {
			width: 335rpx;
			height: 330rpx;

			image {
				width: 335rpx;
				height: 335rpx;
			}
		}

		.promotion-text {
			text {
				height: 35rpx;
				line-height: 35rpx;
				padding: 0 10rpx;
				border-radius: 4rpx;
				background-color: #BA271B;
				color: #fff;
			}
		}
	}

	.goods-item:nth-child(2n) {
		margin-right: 0;
	}
</style>
