<!-- 
	广告位展示组件
		如果有多个子元素，则轮播，需要固定高度。
		如果只有一个子元素，则不轮播，不需要固定高度，可自动撑开。
		其他详情见props
 -->

<template>
	<view class="to_appointment">
		<view class="swiper-box" v-if="endList && endList.length">
			
			<template v-if="showTitle">
				<view class="title one-line" v-if="currentItem.name">
					{{currentItem.name}}
				</view>
			</template>
			
			<template v-if="endList.length > 1">
				<swiper
					class="swiper"
					:style="{
						'width': width,
						'height': height,
					}"
					:indicator-dots="false" 
					indicator-color="#999" 
					indicator-active-color="#fff" 
					:autoplay="autoplay" 
					:interval="interval" 
					:duration="duration" 
					:circular="true"  
					@change='onSlideChangeEnd'
				>
					<swiper-item v-for="(item, index) in endList" :key="index">
						<view class="swiper-item" @click="jumpPage(item)">
							<image class="swiper-item-img" :src="item.img" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
				
				<view class="dots">
					<block v-for="(item, index) in endList" :key="index"><view :class="['dot',index == isSwiperIndex ? 'active' : '']"></view></block>
				</view>
			</template>
			
			<template v-else>
				<view 
					class="swiper"
					:style="{
						'width': width
					}"
				>
					<view class="swiper-item" v-for="(item, index) in endList" @click="jumpPage(item)" :key="index">
						<image class="swiper-item-img" :src="item.img" mode="widthFix"></image>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import { getAdsDetail } from '@/api/modules/common.js';
import { pickBy, correspondUrl } from '@/utils/index.js';

export default {
	props: {
		type: {
			type: String,
			default: ''
		},
		code: {
			type: String,
			default: 'xiongdongquanzi'
		},
		random: { // 随机选取一个展示
			type: Boolean,
			default: false
		},
		showTitle: { // 显示标题
			type: Boolean,
			default: false
		},
		width: { 
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '262rpx'
		},
		autoplay: { // 自动轮播
			type: Boolean,
			default: true
		},
		interval: { // 自动轮播间隔时间
			type: Number,
			default: 2000
		},
		duration: { // 过渡时间
			type: Number,
			default: 500
		}
	},
	data() {
		return {
			isSwiperIndex: 0,
			currentItem: null,
			endList: [],
		}
	},
	mounted() {
		this.tabBarList = [
			'/',
			'/pages/index/index',
			'/pages/shopping/index',
			'/pages/myHome/index',
			'/pages/mine/index'
		]
		this.getAdsList();
	},
	methods: {
		onSlideChangeEnd(e) {
			this.isSwiperIndex = e.detail.current;
			this.currentItem = this.endList[e.detail.current];
		},
		getAdsList() {
			getAdsDetail({code: this.code}).then(res => {
				if(res.code === 200) {
					if(res.data && res.data.children) {
						let list = pickBy(res.data.children, {
							name: 'name',
							img: 'picture',
							href: 'urlto',
							id: 'id',
						});
						if(this.random) {
							this.endList = [list[Math.floor(Math.random()*list.length)]];
						} else {
							this.endList = list;
						}
						this.currentItem = this.endList[0];
					}
				}
			})
		},
		jumpPage(item) {
			// if(this.type === 'tech') {
			// 	this.jumpPageByTech(item);
			// 	return;
			// }
			const { href } = item;
			const hrefList = href.split(/\.com|\.cn/);
			const urlto = hrefList[1] || hrefList[0];
			const tourl = correspondUrl(urlto);
			uni.navigateTo({
				url: tourl
			})
		},
		
		jumpPageByTech(item) {
			const href = JSON.parse(item.href);
			if(href.type == 5) {
				uni.navigateTo({
					url: `/pagesMarketing/source/article?code=${href.shopId}`
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.to_appointment{
	margin: 0 32rpx;
	box-sizing: border-box;
	display: block;
	border-radius: 16rpx;
	overflow: hidden;
}
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.swiper-box {
	// height: 263rpx;
	margin: auto;
	position: relative;
	.title {
		height: 40rpx;
		font-size: 28rpx;
		font-weight: 500;
		line-height: 40rpx;
		margin-bottom: 16rpx;
	}
	.swiper {
		// height: 263rpx;
		border-radius: 24rpx;
		overflow: hidden;
		transform: translateY(0);
		position: relative;
		.swiper-item {
			height: 100%;
			&-img {
				width: 100%;
				background-size: 100%;
			}
		}
	}
	.dots {
		position: absolute;
		left: 0;
		right: 32rpx;
		bottom: 24rpx;
		display: flex;
		justify-content: flex-end;
		margin-right: 20rpx;
		.dot {
			width: 8rpx;
			height: 8rpx;
			background-color: #333333;
			border-radius: 4rpx;
			opacity: 0.49;
			margin-right: 10rpx;
		}
		.dot.active {
			width: 24rpx;
			height: 8rpx;
			background-color: #FFFFFF;
			border-radius: 4rpx;
			opacity: 1;
		}
	}
}
</style>
