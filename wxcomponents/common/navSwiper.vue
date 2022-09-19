<template>
	<view>
		<swiper
			class="card-swiper"
			:circular="true"
			:autoplay="false"
			duration="500"
			interval="5000"
			previous-margin="75rpx"
			next-margin="75rpx"
			@change="cardSwiper"
			style="margin-top: -100rpx;"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="tnphone-white-min swiper-item  wow fadeInLeft2">
					<view class="skin wow fadeInRight2">
						<view class="screen wow fadeInUp2">
							<view class="peak wow">
								<view class="sound"></view>
								<view class="lens"></view>
							</view>

							<view class="image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cardCur: 0,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://tnuiimage.tnkjapp.com/index_bg/pro1.jpg'
				},
				{
					id: 1,
			 	type: 'image',
					url: 'https://tnuiimage.tnkjapp.com/index_bg/pro2.jpg'
				},
				{
					id: 2,
					type: 'image',
			 	url: 'https://tnuiimage.tnkjapp.com/index_bg/pro3.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://tnuiimage.tnkjapp.com/index_bg/pro4.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://tnuiimage.tnkjapp.com/index_bg/pro5.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://tnuiimage.tnkjapp.com/index_bg/pro6.jpg'
				}
			]
		};
	},
	methods: {
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		}
	}
};
</script>

<style lang="scss" scoped>
/* 轮播样机样式 start*/
.card-swiper {
	height: 830rpx !important;
}

.card-swiper swiper-item {
	width: 260rpx !important;
	// left: 170rpx;
	// width: 380rpx !important;
	// left: 185rpx;
	box-sizing: border-box;
	padding: 0rpx 15rpx 90rpx 15rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	display: block;
	transform: scale(0.45);
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: scale(0.65);
	transition: all 0.2s ease-in 0s;
}

.image-banner {
	display: flex;
	align-items: center;
	justify-content: center;
}
.image-banner image {
	width: 100%;
	height: 770rpx;
	// border: 1rpx solid red;
}

/* 轮播指示点 start*/
.indication {
	z-index: 9999;
	width: 100%;
	height: 36rpx;
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.spot {
	background-color: #000;
	opacity: 0;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	margin: 0 8rpx !important;
	top: -80rpx;
	position: relative;
}

.spot.active {
	opacity: 0;
	width: 30rpx;
	background-color: #000;
}

/* 图标容器4 start */
.tn-cool-color-icon4 {
	// background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);   16
	// background-image: linear-gradient(135deg, #ED1C24, #FECE12);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
}
.icon4 {
	&__item {
		width: 30%;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding: 30rpx;
		margin: 20rpx 10rpx;
		transform: scale(1);
		transition: transform 0.3s linear;
		transform-origin: center center;

		&--icon {
			width: 110rpx;
			height: 110rpx;
			font-size: 55rpx;
			border-radius: 50%;
			margin-bottom: 18rpx;
			position: relative;
			z-index: 1;
			box-shadow: 0px 10px 30px rgba(70, 23, 129, 0.12), 0px -8px 40px rgba(255, 255, 255, 1), inset 0px -10px 10px rgba(70, 23, 129, 0.05),
				inset 0px 10px 20px rgba(255, 255, 255, 1);
		}
	}
}

/* 标题 start */
.nav_title {
	-webkit-background-clip: text;
	color: transparent;

	&--wrap {
		position: relative;
		display: flex;
		height: 120rpx;
		font-size: 42rpx;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
		background-size: cover;
	}
}

/* .tnphone-white-min 细边框*/
  .tnphone-white-min {width: 380rpx!important; height: 800rpx; border-radius: 40rpx; background: #E9E5F3; padding: 7rpx; display: table; color: #333;
  	box-sizing: border-box; box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0,0,0,0.15); margin: 70rpx auto; cursor: default; position: relative}
  .tnphone-white-min .skin {width: 100%; height: 100%; border-radius: 40rpx; background: #E9E5F3; padding: 10rpx;}
  .tnphone-white-min .screen {width: 100%; height: 100%; border-radius: 30rpx; background: #E9E5F3; position: relative; overflow: hidden}
  .tnphone-white-min .head {width: 100%; height: 90rpx; text-align: center; position: absolute; padding: 45rpx 15rpx 10rpx 15rpx;}
  .tnphone-white-min .peak {left: 22%;width: 56%; height: 27rpx; margin: -2rpx auto 0rpx; border-radius: 0 0 20rpx 20rpx; background: #E9E5F3; position: absolute}
  .tnphone-white-min .sound {width: 48rpx; height: 6rpx; border-radius: 15rpx; background: #555; position: absolute; left: 50%; top: 50%; margin-left: -24rpx; margin-top: -10rpx;
  	box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset}
  .tnphone-white-min .lens {width: 6rpx; height: 6rpx; border-radius: 50%; background: #2c5487; position: absolute; left: 50%; top: 50%; margin-left: 34rpx; margin-top: -10rpx}
  .tnphone-white-min .talk {width: 50%; height: 6rpx; border-radius: 15rpx; background: rgba(0,0,0,.3); position: absolute; bottom: 8rpx; left: 50%; margin-left: -25%}
  .tnphone-white-min .area-l,.tnphone-white-min .area-r {width: 70rpx; height: 16rpx; position: absolute; top: 6rpx}
  .tnphone-white-min .area-l {left: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-left: 20rpx;}
  .tnphone-white-min .area-r {right: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-right: 20rpx;}
  .tnphone-white-min .fa-feed {float: left; font-size: 12rpx!important; transform:rotate(-45deg); margin-top: 4rpx; margin-right: 8rpx}
  .tnphone-white-min .fa-battery-full {float: left; font-size: 12rpx!important; margin-top: 6rpx}
  .tnphone-white-min .fa-chevron-left {float: left; margin-top: 4rpx}
  .tnphone-white-min .fa-cog {float: right; margin-top: 4rpx}
  .tnphone-white-min .btn01 {width: 3rpx; height: 28rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 105rpx; left: -3rpx}
  .tnphone-white-min .btn02 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 160rpx; left: -3rpx}
  .tnphone-white-min .btn03 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 230rpx; left: -3rpx}
  .tnphone-white-min .btn04 {width: 3rpx; height: 86rpx; border-radius: 0 3rpx 3rpx 0; background: #222; position: absolute; top: 180rpx; right: -3rpx}

</style>
