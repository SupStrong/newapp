<template>
	<view class="">
		<view class="nav-box" v-if="!base.scrollX">
			<view class="nav-item" v-for="(item, index) in data" @click="toDetail(item)" :key="index">
				<image lazy-load class="img-box" :src="item.imgUrl" />
				<view class="text-box">{{ item.content }}</view>
			</view>
		</view>
		<view v-else-if="base.scrollX" class="swiper-box">
			<scroll-view :scroll-x="true" class="nav_scroll" @scroll="scroll">
				<view class="nav_scroll-item" v-for="(item, index) in data" @click="toDetail(item)" :key="index">
					<image lazy-load class="free" v-if="!index" :src="baseUrlImg + '/homePages/free.gif'" mode="widthFix"></image>
					<image lazy-load class="img-box" :src="item.imgUrl || baseInfo.coverImg" />
					<view class="text-box">{{ item.content || '' }}</view>
				</view>
			</scroll-view>
			<view class="speed">
				<view
					class="cur"
					:style="{
						'margin-left': speedPosition
					}"
				></view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			curIndex: 0,
			speedPosition: 0
		};
	},
	components: {},
	props: {
		res: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	computed: {
		...mapGetters(['baseInfo', 'systemInfo']),
		...mapState({
			switchData: state => state.Switch.switchData || {}
		}),
		base() {
			return this.res.base;
		},
		data() {
			const { scrollX = true } = this.res.base;
			const { data = [] } = this.res;
			// #ifdef MP-WEIXIN
			if (scrollX) {
				let swiperList = [];
				for (let i = 0; i < data.length; i++) {
					let item = data[i];
					swiperList.push(item);
				}
				return swiperList;
			}
			// #endif
			return data;
		}
	},
	methods: {
		swiperChange(e) {
			this.curIndex = e.detail.current;
		},
		scroll(e) {
			// 计算一个元素宽度
			const { windowWidth } = this.systemInfo;
			const marginWidth = 32 * (375 / windowWidth);
			const itemWidth = (228 * (375 / windowWidth)) / 2;
			const { scrollLeft, scrollWidth } = e.detail;
			this.speedPosition = ((scrollLeft / (scrollWidth - windowWidth + marginWidth)) * 100).toFixed(2) + '%';
		},
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
						let tabList = ['/pages/index/index', '/pages/shopping/index', '/pages/myHome/index', '/pages/mine/index'];
						let dataIdArr = data.id.split(/\.com|\.cn/);
						let url = dataIdArr[1] || dataIdArr[0];
						let isSwitch = tabList.includes(url);
						if (isSwitch) {
							uni.setStorageSync('baseDate', new Date().getTime());
							uni.setStorageSync('baseList', base);
							uni.switchTab({
								url
							});
						} else {
							uni.navigateTo({
								url: `${url}?${canshu.slice(0, -1)}`
							});
						}
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
					case 'article':
						uni.navigateTo({
							url: `/publicPage/article/index?code=${data.id}`
						});
						break;
					case 'topic':
						uni.navigateTo({
							url: `/pages/common/h5Page?name=${data.name}&id=${data.id}`
						});
						break;
					case 'applet':
						uni.navigateToMiniProgram({
							appId: 'wx6d7b191526a9db5a',
							path: `/pages/index/index`,
							success() {}
						});
						break;
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
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';

.nav-box {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-flow: wrap;
	.nav-item {
		width: 20%;
		overflow: hidden;
		&:not(:nth-child(-n + 5)) {
			margin-top: 16rpx;
		}
		.img-box {
			display: block;
			width: 96rpx;
			height: 96rpx;
			border-radius: 96rpx;
			margin: auto;
		}
		.text-box {
			width: 100%;
			margin-top: 8rpx;
			height: 40rpx;
			font-size: 28rpx;
			font-weight: 500;
			line-height: 40rpx;
			text-align: center;
		}
	}
}

.swiper-box {
	.nav_swiper {
		height: 124rpx;
		.nav_swiper-item {
			display: flex;
			.nav-item {
				position: relative;
				width: 20%;
				overflow: hidden;
				&:not(:nth-child(-n + 5)) {
					margin-top: 16rpx;
				}
				.free {
					position: absolute;
					width: 52rpx;
					top: 0;
					right: 0;
				}
				.img-box {
					display: block;
					width: 84rpx;
					height: 84rpx;
					margin: auto;
				}
				.text-box {
					width: 100%;
					margin-top: 8rpx;
					height: 34rpx;
					font-size: 24rpx;
					color: #666666;
					line-height: 34rpx;
					text-align: center;
				}
			}
		}
	}

	.is_page {
		display: flex;
		justify-content: center;
		padding-bottom: 8rpx;
		.dots {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #ccc;
			border-radius: 3rpx;
			height: 6rpx;
			margin-top: 20rpx;
			.dot {
				width: 24rpx;
				height: 6rpx;
				background: #ccc;
				border-radius: 3rpx;
			}
			.cur {
				background: $themeColor;
			}
		}
	}

	.nav_scroll {
		white-space: nowrap;
		&-item {
			display: inline-block;
			position: relative;
			width: 20%;
			overflow: hidden;
			&:not(:nth-child(-n + 5)) {
				margin-top: 16rpx;
			}
			.free {
				position: absolute;
				width: 52rpx;
				top: 0;
				right: 0;
			}
			.img-box {
				display: block;
				width: 84rpx;
				height: 84rpx;
				margin: auto;
			}
			.text-box {
				width: 100%;
				margin-top: 8rpx;
				height: 34rpx;
				font-size: 24rpx;
				color: #666666;
				line-height: 34rpx;
				text-align: center;
			}
		}
	}

	.speed {
		width: 48rpx;
		background: #cccccc;
		border-radius: 3rpx;
		height: 6rpx;
		margin: 20rpx auto 8rpx;
		padding-right: 24rpx;
		box-sizing: border-box;
		.cur {
			width: 24rpx;
			height: 6rpx;
			background: #0060e5;
			border-radius: 6rpx;
			margin-bottom: 0rpx;
			z-index: 9;
		}
	}
}
</style>
