<template>
	<view>
		<swiper class="card-swiper2 tn-margin-top-sm" :circular="true" :autoplay="false" duration="500" interval="5000" @change="resume">
			<swiper-item v-for="(item, index) in resumeList" :key="index" :class="cardCur2 == index ? 'cur' : ''" @click="tn('/circlePages/king')">
				<!-- <view class="swiper-item image-banner">
		          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
		        </view> -->
				<view
					class="swiper-item1 image-banner tn-shadow-blur"
					:style="'background-image:url(' + item.url + ');width: 660rpx;height: 100%;background-size: cover;border-radius: 15rpx;'"
				></view>
				<view
					class="swiper-item2 image-banner tn-shadow-blur"
					:style="'background-image:url(' + item.avatar + ');width: 120rpx;height: 120rpx;background-size: cover;'"
				></view>
				<view class="swiper-item-text tn-text-shadow-indigo">
					<view class="tn-text-bold tn-color-blue--dark" style="font-size: 45rpx;">{{ item.title }}</view>
					<view class="tn-color-blue--dark tn-padding-top-sm">{{ item.name }}</view>
					<view class="tn-flex tn-padding-top-xl" style="margin-left: -50rpx;">
						<view class="tn-flex-1 tn-padding-sm tn-margin-right">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-blue">{{ item.hot }}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-fire"></text>
									<text class="tn-padding-left-xs">人气</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-left tn-margin-right">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-orange">{{ item.share }}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-share-circle"></text>
									<text class="tn-padding-left-xs">分享</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-left">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-red">{{ item.love }}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-like"></text>
									<text class="tn-padding-left-xs">爱心</text>
								</view>
							</view>
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
			cardCur2: 0,
			resumeList: [
				{
					id: 0,
					type: 'image',
					title: '徐圆圆',
					name: 'UI设计师',
					hot: '1.29W',
					share: '216',
					love: '962',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				},
				{
					id: 1,
					type: 'image',
					title: '图鸟北北',
					name: 'UI设计师',
					hot: '964',
					share: '94',
					love: '186',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg2.jpg'
				},
				{
					id: 2,
					type: 'image',
					title: '图鸟西西',
					name: '高级前端',
					hot: '3.26K',
					share: '146',
					love: '379',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				},
				{
					id: 3,
					type: 'image',
					title: '图鸟南南',
					name: '项目经理',
					hot: '6.32K',
					share: '133',
					love: '432',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg2.jpg'
				},
				{
					id: 4,
					type: 'image',
					title: '图鸟猪猪',
					name: '纯打杂',
					hot: '8.65K',
					share: '321',
					love: '886',
					avatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
					url: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'
				}
			]
		};
	},
	methods: {
		  resume(e) {
			this.cardCur2 = e.detail.current
		  },
	}
};
</script>

<style lang="scss" scoped>
	// 此文件为TuniaoUI的主题变量，这些变量目前只能通过uni.scss引入才有效，另外由于
	// uni.scss中引入的样式会同时混入到全局样式文件和单独每一个页面的样式中，造成微信程序包太大，
	// 故uni.scss只建议放scss变量名相关样式，其他的样式可以通过main.js或者App.vue引入
	
	// 组件配置
	$tn-form-item-height: 70rpx;
	
	
	// 主颜色
	$tn-main-color: #01BEFF;
	$tn-main-orange: #FBBD12;
	$tn-embellished-green: #00FFC6;
	$tn-embellished-yellow: #FFF00D;
	$tn-auxiliary-powder: #FF71D2;
	$tn-auxiliary-blue: #82B2FF;
	$tn-bg-color: #FFFFFF;
	$tn-bg-gray-color: #F4F4F4;
	$tn-space-color: #F8F7F8;
	
	// 边框颜色
	$tn-border-solid-color: rgba(0, 0, 0, 0.1);
	$tn-border-solids-color: #eee;
	$tn-border-dashed-color: #ddd;
	
	// 阴影颜色
	$tn-shadow-color: rgba(0, 0, 0, 0.1);
	$tn-box-shadow-color: rgba(0, 0, 0, 0.2);
	
	// 字体颜色
	$tn-font-color: #080808;
	$tn-font-sub-color: #AAAAAA;
	$tn-content-color: #838383;
	$tn-font-holder-color: #E6E6E6;
	
	$tn-mask-bg-color: rgba(0, 0, 0, 0.4);
	
	$tn-progress-bg-color: #f0f0f0;
	
	
	$tn-color-red: #E83A30;
	$tn-color-red-dark: #BA2E26;
	$tn-color-red-disabled: #F39C97;
	$tn-color-red-light: #FAD8D6;
	
	$tn-color-purplered: #E72F8C;
	$tn-color-purplered-dark: #B9266F;
	$tn-color-purplered-disabled: #F397C5;
	$tn-color-purplered-light: #FAD5E8;
	
	$tn-color-purple: #892FE8;
	$tn-color-purple-dark: #6E26BA;
	$tn-color-purple-disabled: #C497F3;
	$tn-color-purple-light: #E7D5FA;
	
	$tn-color-bluepurple: #5F4FD9;
	$tn-color-bluepurple-dark: #4C3FAE;
	$tn-color-bluepurple-disabled: #AFA7EC;
	$tn-color-bluepurple-light: #DFDCF7;
	
	$tn-color-aquablue: #3646FF;
	$tn-color-aquablue-dark: #2B38CC;
	$tn-color-aquablue-disabled: #9AA2FF;
	$tn-color-aquablue-light: #D7DAFF;
	
	$tn-color-blue: #3D7EFF;
	$tn-color-blue-dark: #3165CC;
	$tn-color-blue-disabled: #9EBEFF;
	$tn-color-blue-light: #D8E5FF;
	
	$tn-color-indigo: #31C9E8;
	$tn-color-indigo-dark: #27A1BA;
	$tn-color-indigo-disabled: #98E4F3;
	$tn-color-indigo-light: #D6F4FA;
	
	$tn-color-cyan: #2DE8BD;
	$tn-color-cyan-dark: #24BA97;
	$tn-color-cyan-disabled: #96F3DE;
	$tn-color-cyan-light: #D5FAF2;
	
	$tn-color-teal: #24F083;
	$tn-color-teal-dark: #1DC069;
	$tn-color-teal-disabled: #91F7C1;
	$tn-color-teal-light: #D3FCE6;
	
	$tn-color-green: #31E749;
	$tn-color-green-dark: #27B93A;
	$tn-color-green-disabled: #98F3A4;
	$tn-color-green-light: #D6FADB;
	
	$tn-color-yellowgreen: #A4E82F;
	$tn-color-yellowgreen-dark: #82BA26;
	$tn-color-yellowgreen-disabled: #D1F397;
	$tn-color-yellowgreen-light: #EDFAD5;
	
	$tn-color-lime: #D5EB00;
	$tn-color-lime-dark: #AABC00;
	$tn-color-lime-disabled: #E9F57F;
	$tn-color-lime-light: #F7FBCC;
	
	$tn-color-yellow: #FFF420;
	$tn-color-yellow-dark: #CCC21A;
	$tn-color-yellow-disabled: #FFF88F;
	$tn-color-yellow-light: #FFFDD2;
	
	$tn-color-orangeyellow: #FFCA28;
	$tn-color-orangeyellow-dark: #CCA220;
	$tn-color-orangeyellow-disabled: #FFE493;
	$tn-color-orangeyellow-light: #FFF4D4;
	
	$tn-color-orange: #FFA726;
	$tn-color-orange-dark: #CC851E;
	$tn-color-orange-disabled: #FFD392;
	$tn-color-orange-light: #FFEDD4 ;
	
	$tn-color-orangered: #FF7043;
	$tn-color-orangered-dark: #CC5A36;
	$tn-color-orangered-disabled: #FFB7A1;
	$tn-color-orangered-light: #FFE2D9;
	
	$tn-color-brown: #914F2C;
	$tn-color-brown-dark: #743F23;
	$tn-color-brown-disabled: #C8A795;
	$tn-color-brown-light: #E9DCD5;
	
	$tn-color-grey: #78909C;
	$tn-color-grey-dark: #5F7E8B;
	$tn-color-grey-disabled: #C6D1D8;
	$tn-color-grey-light: #E4E9EC;
	
	$tn-color-gray: #AAAAAA;
	$tn-color-gray-dark: #838383;
	$tn-color-gray-disabled: #E6E6E6;
	$tn-color-gray-light: #F8F7F8;
	
	$tn-cool-bg-color-1-start: #F5317F;
	$tn-cool-bg-color-1-end: #FF7C6E;
	
	$tn-cool-bg-color-2-start: #CA26FF;
	$tn-cool-bg-color-2-end: #F360A7;
	
	$tn-cool-bg-color-3-start: #A26FFC;
	$tn-cool-bg-color-3-end: #9D12FF;
	
	$tn-cool-bg-color-4-start: #AA77F0;
	$tn-cool-bg-color-4-end: #E871E5;
	
	$tn-cool-bg-color-5-start: #40A0F7;
	$tn-cool-bg-color-5-end: #4866E6;
	
	$tn-cool-bg-color-6-start: #209CFF;
	$tn-cool-bg-color-6-end: #68E0CF;
	
	$tn-cool-bg-color-7-start: #00C3FF;
	$tn-cool-bg-color-7-end: #58FFF5;
	
	$tn-cool-bg-color-8-start: #00d1FF;
	$tn-cool-bg-color-8-end: #69FF97;
	
	$tn-cool-bg-color-9-start: #0FD893;
	$tn-cool-bg-color-9-end: #29ECBF;
	
	$tn-cool-bg-color-10-start: #0FD850;
	$tn-cool-bg-color-10-end: #F9F047;
	
	$tn-cool-bg-color-11-start: #24FE41;
	$tn-cool-bg-color-11-end: #F7FD47;
	
	$tn-cool-bg-color-12-start: #D6FF7F;
	$tn-cool-bg-color-12-end: #00F657;
	
	$tn-cool-bg-color-13-start: #FA709A;
	$tn-cool-bg-color-13-end: #FEE140;
	
	$tn-cool-bg-color-14-start: #FE5E9C;
	$tn-cool-bg-color-14-end: #F1AA76;
	
	$tn-cool-bg-color-15-start: #FF3181;
	$tn-cool-bg-color-15-end: #FF8331;
	
	$tn-cool-bg-color-16-start: #ED1C24;
	$tn-cool-bg-color-16-end: #FECE12;
	
	

/* 简历推荐 start */
.card-swiper2 {
	height: 420rpx !important;
	overflow: hidden;
}

.card-swiper2 swiper-item {
	width: 680rpx !important;
	left: 30rpx;
	box-sizing: border-box;
	overflow: initial;
	padding: 0 0rpx 40rpx 0;
}

.card-swiper2 swiper-item .swiper-item1 {
	width: 100%;
	display: block;
	height: 100%;
	transform: scale(0.97);
	transition: all 0.2s ease-in 0s;
	background-color: #e7fafe;
}

.card-swiper2 swiper-item.cur .swiper-item1 {
	transform: none;
	transition: all 0.2s ease-in 0s;
}

.card-swiper2 swiper-item .swiper-item2 {
	margin-top: -120rpx;
	width: 100%;
	display: block;
	height: 50%;
	border-radius: 50%;
	transform: translate(480rpx, -150rpx) scale(0.9, 0.9);
	transition: all 0.3s ease 0s;
}

.card-swiper2 swiper-item.cur .swiper-item2 {
	margin-top: -180rpx;
	width: 100%;
	transform: translate(510rpx, -150rpx) scale(0.9, 0.9);
	transition: all 0.3s ease 0s;
}

.card-swiper2 swiper-item .swiper-item-text {
	margin-top: -210rpx;
	width: 100%;
	display: block;
	height: 100%;
	border-radius: 10rpx;
	transform: translate(30rpx, -80rpx) scale(0.8, 0.8);
	transition: all 0.6s ease 0s;
	overflow: hidden;
}

.card-swiper2 swiper-item.cur .swiper-item-text {
	margin-top: -270rpx;
	width: 100%;
	transform: translate(20rpx, 0rpx) scale(0.9, 0.9);
	transition: all 0.6s ease 0s;
}
$direction: top, right, bottom, left;

body {
  // 全局灰白效果
  /* filter: grayscale(100%);
  -webkit-filter: grayscale(100%); */
  
	background-color: #FFFFFF;
	/* background-color: #ffffff; */
	font-size: 28rpx;
	color: $tn-font-color;
	font-family: Helvetica Neue, Helvetica, sans-serif;
  // 修复点击view标签的时候会有蓝色遮罩
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

view,
scroll-view,
swiper,
button,
input,
textarea,
label,
navigator,
image {
	box-sizing: border-box;
}

button::after {
	border: none;
}

.tn-round {
	border-radius: 5000rpx !important;
}

.tn-radius {
	border-radius: 6rpx;
}

/* 基本样式 start */

.tn-width-full {
  width: 100%;
}

.tn-height-full {
  height: 100%;
}

/* 基本样式 end */


/* 边框 start */

.tn-border-solid,
.tn-border-solid-top,
.tn-border-solid-right,
.tn-border-solid-bottom,
.tn-border-solid-left,
.tn-border-solids,
.tn-border-solids-top,
.tn-border-solids-right,
.tn-border-solids-bottom,
.tn-border-solids-left,
.tn-border-dashed,
.tn-border-dashed-top,
.tn-border-dashed-right,
.tn-border-dashed-bottom,
.tn-border-dashed-left {
  border-radius: inherit;
  box-sizing: border-box;
}

@for $i from 0 to length($direction) + 1 {
  @if $i == 0 {
    .tn-border-solid {
      border-width: 1rpx !important;
      border-style: solid;
      border-color: $tn-border-solid-color;
      
      &.tn-bold-border {
        border-width: 6rpx !important;
      }
    }
    .tn-border-solids {
      border-width: 1rpx !important;
      border-style: solid;
      border-color: $tn-border-solids-color;
      
      &.tn-bold-border {
        border-width: 6rpx !important;
      }
    }
    .tn-border-dashed {
      border-width: 1rpx !important;
      border-style: dashed;
      border-color: $tn-border-dashed-color;
      
      &.tn-bold-border {
        border-width: 6rpx !important;
      }
    }
  } @else {
    .tn-border-solid-#{nth($direction, $i)} {
      border: 0rpx;
      border-#{nth($direction, $i)}-width: 1rpx !important;
      border-style: solid;
      border-color: $tn-border-solid-color;
      
      &.tn-bold-border {
        border-#{nth($direction, $i)}-width: 6rpx !important;
      }
    }
    .tn-border-solids-#{nth($direction, $i)} {
      border: 0rpx;
      border-#{nth($direction, $i)}-width: 1rpx !important;
      border-style: solid;
      border-color: $tn-border-solids-color;
      
      &.tn-bold-border {
        border-#{nth($direction, $i)}-width: 6rpx !important;
      }
    }
    .tn-border-dashed-#{nth($direction, $i)} {
      border: 0rpx;
      border-#{nth($direction, $i)}-width: 1rpx !important;
      border-style: dashed;
      border-color: $tn-border-dashed-color;
      
      &.tn-bold-border {
        border-#{nth($direction, $i)}-width: 6rpx !important;
      }
    }
  }
}

.tn-none-border.tn-border-solid,
.tn-none-border.tn-border-solid-top,
.tn-none-border.tn-border-solid-right,
.tn-none-border.tn-border-solid-bottom,
.tn-none-border.tn-border-solid-left,
.tn-none-border.tn-border-solids,
.tn-none-border.tn-border-solids-top,
.tn-none-border.tn-border-solids-right,
.tn-none-border.tn-border-solids-bottom,
.tn-none-border.tn-border-solids-left,
.tn-none-border.tn-border-dashed,
.tn-none-border.tn-border-dashed-top,
.tn-none-border.tn-border-dashed-right,
.tn-none-border.tn-border-dashed-bottom,
.tn-none-border.tn-border-dashed-left {
  border: 0 !important;
}

.tn-none-border-top.tn-border-solid,
.tn-none-border-top.tn-border-solid-top,
.tn-none-border-top.tn-border-solid-right,
.tn-none-border-top.tn-border-solid-bottom,
.tn-none-border-top.tn-border-solid-left,
.tn-none-border-top.tn-border-solids,
.tn-none-border-top.tn-border-solids-top,
.tn-none-border-top.tn-border-solids-right,
.tn-none-border-top.tn-border-solids-bottom,
.tn-none-border-top.tn-border-solids-left,
.tn-none-border-top.tn-border-dashed,
.tn-none-border-top.tn-border-dashed-top,
.tn-none-border-top.tn-border-dashed-right,
.tn-none-border-top.tn-border-dashed-bottom,
.tn-none-border-top.tn-border-dashed-left {
  /* height: 0 !important; */
  border-top: 0 !important;
}

.tn-none-border-right.tn-border-solid,
.tn-none-border-right.tn-border-solid-top,
.tn-none-border-right.tn-border-solid-right,
.tn-none-border-right.tn-border-solid-bottom,
.tn-none-border-right.tn-border-solid-left,
.tn-none-border-right.tn-border-solids,
.tn-none-border-right.tn-border-solids-top,
.tn-none-border-right.tn-border-solids-right,
.tn-none-border-right.tn-border-solids-bottom,
.tn-none-border-right.tn-border-solids-left,
.tn-none-border-right.tn-border-dashed,
.tn-none-border-right.tn-border-dashed-top,
.tn-none-border-right.tn-border-dashed-right,
.tn-none-border-right.tn-border-dashed-bottom,
.tn-none-border-right.tn-border-dashed-left {
  /* width: 0 !important; */
  border-right: 0 !important;
}

.tn-none-border-bottom.tn-border-solid,
.tn-none-border-bottom.tn-border-solid-top,
.tn-none-border-bottom.tn-border-solid-right,
.tn-none-border-bottom.tn-border-solid-bottom,
.tn-none-border-bottom.tn-border-solid-left,
.tn-none-border-bottom.tn-border-solids,
.tn-none-border-bottom.tn-border-solids-top,
.tn-none-border-bottom.tn-border-solids-right,
.tn-none-border-bottom.tn-border-solids-bottom,
.tn-none-border-bottom.tn-border-solids-left,
.tn-none-border-bottom.tn-border-dashed,
.tn-none-border-bottom.tn-border-dashed-top,
.tn-none-border-bottom.tn-border-dashed-right,
.tn-none-border-bottom.tn-border-dashed-bottom,
.tn-none-border-bottom.tn-border-dashed-left {
  /* height: 0 !important; */
  border-bottom: 0 !important;
}

.tn-none-border-left.tn-border-solid,
.tn-none-border-left.tn-border-solid-top,
.tn-none-border-left.tn-border-solid-right,
.tn-none-border-left.tn-border-solid-bottom,
.tn-none-border-left.tn-border-solid-left,
.tn-none-border-left.tn-border-solids,
.tn-none-border-left.tn-border-solids-top,
.tn-none-border-left.tn-border-solids-right,
.tn-none-border-left.tn-border-solids-bottom,
.tn-none-border-left.tn-border-solids-left,
.tn-none-border-left.tn-border-dashed,
.tn-none-border-left.tn-border-dashed-top,
.tn-none-border-left.tn-border-dashed-right,
.tn-none-border-left.tn-border-dashed-bottom,
.tn-none-border-left.tn-border-dashed-left {
  /* width: 0 !important; */
  border-left: 0 !important;
}

/* 边框 end */


/* 阴影 start */

.tn-shadow {
  box-shadow: 6rpx 6rpx 8rpx $tn-shadow-color;
}

.tn-shadow-warp {
  position: relative;
  box-shadow: 0 0 10rpx $tn-shadow-color;
}

.tn-shadow-warp::before,
.tn-shadow-warp::after {
  content: " ";
  position: absolute;
  top: 20rpx;
  bottom: 30rpx;
  left: 20rpx;
  width: 50%;
  box-shadow: 0 30rpx 20rpx $tn-box-shadow-color;
  transform: rotate(-3deg);
  z-index: -1;
}

.tn-shadow-warp::after {
  right: 20rpx;
  left: auto;
  transform: rotate(3deg);
}

.tn-shadow-blur {
  position: relative;
}

.tn-shadow-blur::before {
  content: " ";
  display: block;
  background: inherit;
  filter: blur(10rpx);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10rpx;
  left: 10rpx;
  z-index: -1;
  opacity: 0.4;
  transform-origin: 0 0;
  border-radius: inherit;
  transform: scale(1, 1);
}

/* 阴影 end */


/* flex start */

.tn-flex {
  display: -webkit-flex;
  display: flex;
}

/* flex伸缩基准值 */
.tn-flex-basic-xs {
  flex-basis: 20%;
}

.tn-flex-basic-sm {
  flex-basis: 40%;
}

.tn-flex-basic-md {
  flex-basis: 50%;
}

.tn-flex-basic-lg {
  flex-basis: 60%;
}

.tn-flex-basic-xl {
  flex-basis: 80%;
}

.tn-flex-basic-full {
  flex-basis: 100%;
}

/* flex布局的方向 */
.tn-flex-direction-column {
  flex-direction: column;
}

.tn-flex-direction-row {
  flex-direction: row;
}

.tn-flex-direction-column-reverse {
  flex-direction: column-reverse;
}

.tn-flex-direction-row-reverse {
  flex-direction: row-reverse;
}

/* flex容器设置换行 */
.tn-flex-wrap {
  flex-wrap: wrap;
}

.tn-flex-nowrap {
  flex-wrap: nowrap;
}

/* flex容器自身垂直方向对齐方式 */
.tn-flex-center {
  align-self: center;
}

.tn-flex-top {
  align-self: flex-start;
}

.tn-flex-end {
  align-self: flex-end;
}

.tn-flex-stretch {
  align-self: stretch;
}

/* flex子元素垂直方向对齐方式 */
.tn-flex-col-center {
  align-items: center;
}

.tn-flex-col-top {
  align-items: flex-start;
}

.tn-flex-col-bottom {
  align-items: flex-end;
}

/* flex子元素水平方向对齐方式 */
.tn-flex-row-center {
  justify-content: center;
}

.tn-flex-row-left {
  justify-content: flex-start;
}

.tn-flex-row-right {
  justify-content: flex-end;
}

.tn-flex-row-between {
  justify-content: space-between;
}

.tn-flex-row-around {
  justify-content: space-around;
}

/* flex子元素空间分配 */
@for $i from 0 to 12 {
  .tn-flex-#{$i} {
    flex: $i;
  }
}

.tn-col-12 {
  width: 100%;
}

.tn-col-11 {
  width: 91.66666667%;
}

.tn-col-10 {
  width: 83.33333333%;
}

.tn-col-9 {
  width: 75%;
}

.tn-col-8 {
  width: 66.66666667%;
}

.tn-col-7 {
  width: 58.33333333%;
}

.tn-col-6 {
  width: 50%;
}

.tn-col-5 {
  width: 41.66666667%;
}

.tn-col-4 {
  width: 33.33333333%;
}

.tn-col-3 {
  width: 25%;
}

.tn-col-2 {
  width: 16.66666667%;
}

.tn-col-1 {
  width: 8.33333333%;
}

/* flex end */

/* 内边距 start */

@for $i from 0 to length($direction) + 1 {
  @if $i == 0 {
    .tn-no-margin {
      margin: 0;
    }
    .tn-margin-xs {
    	margin: 10rpx;
    }
    .tn-margin-sm {
    	margin: 20rpx;
    }
    .tn-margin {
    	margin: 30rpx;
    }
    .tn-margin-lg {
    	margin: 40rpx;
    }
    .tn-margin-xl {
    	margin: 50rpx;
    }
  } @else {
    .tn-no-margin-#{nth($direction, $i)} {
      margin-#{nth($direction, $i)}: 0;
    }
    .tn-margin-#{nth($direction, $i)}-xs {
    	margin-#{nth($direction, $i)}: 10rpx;
    }
    .tn-margin-#{nth($direction, $i)}-sm {
    	margin-#{nth($direction, $i)}: 20rpx;
    }
    .tn-margin-#{nth($direction, $i)} {
    	margin-#{nth($direction, $i)}: 30rpx;
    }
    .tn-margin-#{nth($direction, $i)}-lg {
    	margin-#{nth($direction, $i)}: 40rpx;
    }
    .tn-margin-#{nth($direction, $i)}-xl {
    	margin-#{nth($direction, $i)}: 50rpx;
    }
  }
}

/* 内边距 end */

/* 外边距 start */

@for $i from 0 to length($direction) + 1 {
  @if $i == 0 {
    .tn-no-padding {
      padding: 0;
    }
    .tn-padding-xs {
    	padding: 10rpx;
    }
    .tn-padding-sm {
    	padding: 20rpx;
    }
    .tn-padding {
    	padding: 30rpx;
    }
    .tn-padding-lg {
    	padding: 40rpx;
    }
    .tn-padding-xl {
    	padding: 50rpx;
    }
  } @else {
    .tn-no-padding-#{nth($direction, $i)} {
      padding-#{nth($direction, $i)}: 0;
    }
    .tn-padding-#{nth($direction, $i)}-xs {
    	padding-#{nth($direction, $i)}: 10rpx;
    }
    .tn-padding-#{nth($direction, $i)}-sm {
    	padding-#{nth($direction, $i)}: 20rpx;
    }
    .tn-padding-#{nth($direction, $i)} {
    	padding-#{nth($direction, $i)}: 30rpx;
    }
    .tn-padding-#{nth($direction, $i)}-lg {
    	padding-#{nth($direction, $i)}: 40rpx;
    }
    .tn-padding-#{nth($direction, $i)}-xl {
    	padding-#{nth($direction, $i)}: 50rpx;
    }
  }
}

/* 外边距 end */

/* float start */

.tn-float-left {
  float: left;
}

.tn-float-right {
  float: right;
}

.tn-clear-float {
  clear: both;
}

.tn-clear-float::after,
.tn-clear-float::before {
  content: " ";
  display: table;
  clear: both;
}

/* float end */

/* 文本 start */

.tn-text-xs {
  font-size: 20rpx;
}

.tn-text-sm {
  font-size: 24rpx;
}

.tn-text-md {
  font-size: 28rpx;
}

.tn-text-lg {
  font-size: 32rpx;
}

.tn-text-xl {
  font-size: 36rpx;
}

.tn-text-xxl {
  font-size: 40rpx;
}

.tn-text-xl-xxl {
  font-size: 80rpx;
}

.tn-text-xxl-xxl {
  font-size: 120rpx;
}

.tn-text-upper {
  text-transform: uppercase;
}

.tn-text-cap {
  text-transform: capitalize;
}

.tn-text-lower {
  text-transform: lowercase;
}

.tn-text-bold {
  font-weight: bold;
}

.tn-text-center {
  text-align: center;
}

.tn-text-left {
	text-align: left;
}

.tn-text-right {
	text-align: right;
}

.tn-text-justify {
	text-align: justify;
}

.tn-text-content {
  line-height: 1.6;
}

.tn-text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tn-text-ellipsis-2 {
	display: -webkit-box;
	overflow: hidden;
	white-space: normal !important;
	text-overflow: ellipsis;
	word-wrap: break-word;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.tn-text-clip {
  -webkit-background-clip: text;
  color: transparent !important;
}

.tn-text-break-word {
  word-wrap: break-word;
}

/* 文本 end */

/* hover 点击效果 start */
.tn-hover {
  opacity: 0.6;
}
/* hover 点击效果 end */

/* 去除原生button样式 start */
.tn-button--clear-style {
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: inherit;
  line-height: inherit;
  border-radius: inherit;
  color: inherit;
}
/* 去除原生button样式 end */

/* 头像组 start */
// .tn-avatar-group {
//   direction: rtl;
//   unicode-bidi: bidi-override;
//   padding: 0 10rpx 0 40rpx;
//   display: inline-block;
  
//   .tn-avatar {
//     margin-left: -30rpx !important;
//     border: 4rpx solid $tn-border-solid-color;
//     vertical-align: middle;
    
//     &--sm {
//       margin-left: -20rpx !important;
//       border: 1rpx solid $tn-border-solid-color;
//     }
//   }
// }
/* 头像组 end */

/* 提升H5端uni.toast()的层级，避免被tn-modal等遮盖 start */
/* #ifdef H5 */
uni-toast {
    z-index: 10090;
}
uni-toast .uni-toast {
   z-index: 10090;
}
/* #endif */
/* 提升H5端uni.toast()的层级，避免被tn-modal等遮盖 end */

/* iPhoneX底部安全区定义 start */
.tn-safe-area-inset-bottom {
  padding-bottom: 0;  
  padding-bottom: constant(safe-area-inset-bottom);  
  padding-bottom: env(safe-area-inset-bottom);  
} 
/* iPhoneX底部安全区定义 end */
</style>
