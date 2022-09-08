<template>
	<view>
		<view class="flex-1 mt-2">
			<scroll-view scroll-x class="scroll-row flex-1 brand-goods">
				<view class="scroll-row-item goods-item mr-2" :style="itemBox" v-for="(items, index1) in brandGoods" :key="index1" @click="toProduct(items)">
					<view class="goods-img-box"><image :src="items.img" mode="aspectFill" :style="imgRadius"></image></view>
					<view class="flex-1 goods-info mx-2 row-a-j-fc">
						<view class="goods-promotion font-s-1" v-if="items.promotion !== ''">{{ items.promotion }}</view>
						<view class="goods-postage font-s-1" v-else>包邮</view>
						<view class="font-s-6 mt-1" :style="fontSize">{{ items.title }}</view>
						<view class="row-ac">
							<view class="font-s-6 font-w" :style="priceSizeModify">
								<text class="font-s-2">￥</text>
								{{ items.price }}
							</view>
							<view class="font-s-2 text-light-grey text-de ml-2">￥{{ items.marketPrice }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			brandGoods:[
				{
					img:'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					promotion:'经期安睡神器',
					title:'经期裤套装',
					price:'188.00',
					marketPrice:'198.00'
				},{
					img:'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					promotion:'经期安睡神器',
					title:'经期裤套装',
					price:'188.00',
					marketPrice:'198.00'
				},{
					img:'https://demo.chunfengbuy.com/uploads/20220520/3806163284e7c73890105fbf13afb40f.png',
					promotion:'经期安睡神器',
					title:'经期裤套装',
					price:'188.00',
					marketPrice:'198.00'
				}
			]
		};
	},
	
	methods: {}
};
</script>

<style lang="scss" scoped>
	@import url('../scss/main.css');
	.goods-item{
					width: 268rpx;
					height: 445rpx;
					.goods-img-box{
						width: 268rpx;
						height: 268rpx;
					}
					.goods-info{
						height: 159rpx;
						.goods-promotion{
							height: 35rpx;
							line-height: 35rpx;
							padding: 0 12rpx;
							background-color: #BA271B;
							color: #fff;
						}
						.goods-postage{
							height: 35rpx;
							line-height: 35rpx;
							padding: 0 12rpx;
							border: 1rpx solid #BA271B;
							color: #BA271B;
						}
					}
					
				}
</style>
