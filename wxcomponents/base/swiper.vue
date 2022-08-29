<template>
	<!-- 		:style="{'backgroundImage': `url(${baseUrlImg}/home/swiper-bg.png)`}" -->
	<view class="swiper-box">
		<swiper
			class="swiper"
			:indicator-dots="false"
			indicator-color="#999"
			indicator-active-color="#fff"
			:autoplay="true"
			:interval="2000"
			:duration="500"
			:circular="true"
			@change="onSlideChangeEnd"
		>
			<swiper-item v-for="(item, index) in data" :key="index">
				<view class="swiper-item" @click="toDetail(item)"><image class="swiper-item-img" :src="item.imgUrl" mode="widthFix"></image></view>
			</swiper-item>
		</swiper>

		<view class="dots">
			<block v-for="(item, index) in data" :key="index"><view :class="['dot', index == isSwiperIndex ? 'active' : '']"></view></block>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			isSwiperIndex: 0
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
		data() {
			const { data } = this.res;
			let list = this.res.data;
			// // #ifdef MP-BAIDU
			// 	if(uni.getSystemInfoSync().platform == 'ios') {
			// 		list = data.filter(item => item.tolinkObj.type != 'topic')
			// 	}
			// // #endif
			return list;
		},
		config() {
			return this.res.config;
		},
		base() {
			return this.res.base;
		}
	},
	methods: {
		toDetail(data) {
			let { tolinkObj } = data;
			if (tolinkObj) {
				let { type, data } = tolinkObj;
				switch (type) {
					case 'custom':
						let base = JSON.parse(data.base);
						let canshu = '';
						for (let key in base) {
							canshu = canshu + `${key}=${base[key]}&`;
						}
						uni.navigateTo({
							url: `${data.id}?${canshu.slice(0, -1)}`
						});
						break;
					case 'good':
						if (data.type == 'scheme') {
							uni.navigateTo({
								url: `/shoppingMall/espier/espier-detail?id=${data.id}`
							});
						} else {
							uni.navigateTo({
								url: `/servicePages/service/service_item?id=${data.id}`
							});
						}
						break;
					case 'article':
						uni.navigateTo({
							url: `/publicPage/article/index?code=${data.id}`
						});
						break;
					case 'topic':
						uni.navigateTo({
							url: `/pages/common/topic?name=${data.name}&id=${data.id}`
						});
						break;
					case 'project':
						if (data.type == 2) {
							// 案例方案
							uni.navigateTo({
								url: `/shoppingMall/programme/solve?code=${data.id}`
							});
						} else if (data.type == 0 || data.type == 1) {
							// 系统/标准方案
							uni.navigateTo({
								url: `/shoppingMall/programme/detail?code=${data.id}`
							});
						}
						break;
					case 'applet':
						uni.navigateToMiniProgram({
							appId: data.appid,	
					 success(res) {}
						});
					case 'h5Page':
						uni.navigateTo({
							url: `/pages/common/h5Page?name=${data.name}&path=${data.path}`
						});
						break;
					default:
						uni.showToast({
							title: '未找到该页面',
							icon: 'none'
						});
						break;
				}
			}
		},
		onSlideChangeEnd: function(e) {
			this.isSwiperIndex = e.detail.current;
		}
	}
};
</script>
<style lang="scss" scoped>
.swiper-box {
	height: 263rpx;
	margin: auto;
	padding: 0 32rpx;
	position: relative;
	background-repeat: no-repeat;
	background-position: left top;
	background-size: 100%;
	overflow: hidden;
	// &::before {
	// 	position: absolute;
	// 	content: "";
	// 	top: 0;
	// 	width: 130%;
	// 	left: 50%;
	// 	transform: translateX(-50%);
	// 	bottom: 30%;
	// 	background-color: #0060E5;
	// 	border-bottom-left-radius: 50%;
	// 	border-bottom-right-radius: 50%;
	// 	z-index: -1;
	// }
	.swiper {
		height: 263rpx;
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
			// background: linear-gradient(270deg, #626262 0%, #333333 100%);
			background-color: #ffffff;
			border-radius: 4rpx;
			opacity: 1;
		}
	}
}
</style>
