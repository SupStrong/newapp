<template>
	<view class="">
		<div class="swiper">
			<swiper class="swipers" :autoplay="false" :current="currentSwiper" @change="swiperChange">
				<swiper-item v-for="(item, index) in banner" :key="index" @click="linkToH5('/pages/H5/main', item.url)">
					<image class="posts-swiper-img" :src="item.img" />
				</swiper-item>
			</swiper>
			<view class="dots">
				<block v-for="(item, index) in banner" :key="index"><view :class="['dot', index == currentSwiper ? ' active' : '']"></view></block>
			</view>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentSwiper: 0,
			banner: [
				{
					img: 'https://upfile.juranguanjia.com/data/2022/08-01/20220801092605723460947.jpg'
				}
			]
		};
	},
	// components: {
	// 	BoxInfo
	// },
	methods: {}
};
</script>

<style lang="scss" scoped>
.swiper {
	background: #fff;
	position: relative;
	background-repeat: no-repeat;
	background-size: 750rpx 240rpx;
	background-color: #fff;
	padding-bottom: 10rpx;
	swiper {
		max-width: 750rpx;
		height: 280rpx;
		overflow: hidden;
		z-index: 999;
		image {
			width: 750rpx;
			max-width: 750rpx;
			height: 280rpx;
		}
	}
	/*用来包裹所有的小圆点  */
	.dots {
		width: 156rpx;
		height: 4rpx;
		position: absolute;
		bottom: 30rpx;
		width: 100%;
		left: 0;
		right: 0;
		text-align: center;
		margin: auto;
		display: flex;
		justify-content: center;
	}
	/*未选中时的小圆点样式 */
	.dot {
		width: 28rpx;
		height: 4rpx;
		background: rgba(255, 255, 255, 1);
		margin-right: 10rpx;
		&.active {
			background: rgba(243, 110, 32, 1);
		}
	}
}
</style>
