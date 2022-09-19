<template>
	<view>
		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="18000" @change="cardSwiper">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item image-banner"><image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item2 image-banner"><image class="png-sussuspension" :src="item.pngurl" mode="heightFix" v-if="item.type == 'image'"></image></view>
				<view class="swiper-item-text">
					<view class="text-sussuspension">
						<view class="tn-text-xxl tn-text-bold G-color-white">{{ item.title }}</view>
						<view class="tn-text-bold G-color-white tn-padding-top-xs" style="font-size: 60rpx;">{{ item.name }}</view>
						<view class="tn-text-sm tn-text-bold G-color-white tn-padding-top-sm tn-padding-bottom-sm">{{ item.text }}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item, index) in swiperList" :key="index"><view class="spot" :class="cardCur == index ? 'active' : ''"></view></block>
		</view>
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
					title: '一起学习',
					name: '文案之类的',
					text: '小文案小文案小文案',
					url: 'https://tnuiimage.tnkjapp.com/swiper/banner-animate3.png',
					pngurl: 'https://tnuiimage.tnkjapp.com/login/1/login_top3.png'
				},
				{
					id: 1,
					type: 'image',
					title: '图鸟南南',
					name: '欢迎加入东东们',
					text: '如果你也有不错的作品',
					url: 'https://tnuiimage.tnkjapp.com/swiper/banner-animate2.png',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
				},
				{
					id: 2,
					type: 'image',
					title: '图鸟西西',
					name: '一起玩转scss',
					text: '用最少的代码做最骚的效果',
					url: 'https://tnuiimage.tnkjapp.com/swiper/deer.jpg',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
				},
				{
					id: 3,
					type: 'image',
					title: '图鸟北北',
					name: '微信号 tnkewo',
					text: '商业合作请联系作者',
					url: 'https://tnuiimage.tnkjapp.com/swiper/banner-animate.png',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
				},
				{
					id: 4,
					type: 'image',
					title: '图鸟猪猪',
					name: '努力成为大佬',
					text: '一起加油吖',
					url: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg',
					pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
				}
			]
		};
	},
	methods: {
		      cardSwiper(e) {
		        this.cardCur = e.detail.current
		      },
	}
};
</script>

<style lang="scss" scoped>
/* 轮播视觉差 start */
.card-swiper {
	height: 800rpx !important;
}

.card-swiper swiper-item {
	width: 702rpx !important;
	left: 0rpx;
	box-sizing: border-box;
	// padding: 0rpx 30rpx 90rpx 30rpx;
	overflow: initial;
}

.card-swiper swiper-item .swiper-item {
	width: 100%;
	display: block;
	height: 100%;
	transform: scale(1);
	transition: all 0.2s ease-in 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper swiper-item .swiper-item2 {
	margin-top: -540rpx;
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 0rpx;
	transform: translate(140rpx, 20rpx) scale(0.3, 0.3);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item2 {
	margin-top: -650rpx;
	width: 100%;
	transform: translate(180rpx, 0rpx) scale(0.5, 0.5);
	transition: all 0.6s ease 0s;
}

.card-swiper swiper-item .swiper-item-text {
	margin-top: -550rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 10rpx;
	transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper swiper-item.cur .swiper-item-text {
	margin-top: -610rpx;
	width: 100%;
	transform: translate(0rpx, 60rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
}

.image-banner {
	display: flex;
	align-items: center;
	justify-content: center;
}
.image-banner image {
	width: 100%;
	height: 100%;
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
	background-color: #ffffff;
	opacity: 0.6;
	width: 10rpx;
	height: 10rpx;
	border-radius: 20rpx;
	left: -265rpx;
	top: -150rpx;
	margin: 0 8rpx !important;
	position: relative;
}

.spot.active {
	opacity: 1;
	width: 30rpx;
	background-color: #ffffff;
}

/* 圆角*/
.study-radius {
	border-radius: 15rpx;
}

/* 阴影*/
.study-shadow {
	box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
}

   /* 悬浮 */
   .png-sussuspension{
     animation: suspension 3s ease-in-out infinite;
   }
   @keyframes suspension {
     0%, 100% {
       transform: translate(0 , 0);
     }
     50% {
       transform: translate(-0.8rem , 1rem);
     }
   }
   .text-sussuspension{
     animation: suspension2 4s ease-in-out infinite;
   }
   
   @keyframes suspension2 {
     0%, 100% {
       transform: translate(0 , 0);
     }
     50% {
       transform: translate(0rem , 1rem);
     }
   }
   
</style>
