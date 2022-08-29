<template>
	<view class="projectview">
		<view class="upper flex-between">
			<view class="title flex-between">
				<image class="title-icon" :src="baseUrlImg + '/home/star.png'" mode="widthFix"></image>
				<text>星选商品</text>
			</view>
			<view class="more flex-between" @click="toMore">
				<text>更多</text>
				<image class="more-icon" :src="baseUrlImg + '/home/more_origin.png'" mode="widthFix"></image>
			</view>
		</view>
		<view class="content">
			<scroll-view class="list scroll" scroll-x="true" @scroll="scroll">
				<view class="item" v-for="(item, index) in list" @click="toDetail(item)" :key="index">
					<image class="item-cover" :src="item.images[0]" mode="widthFix"></image>
					<view class="item-title two-line">{{ item.name }}</view>
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
import { getItems } from '@/api/modules/home.js';
import { mapGetters } from 'vuex';
import jumpPage from '@/mixins/jumpPage.js';
export default {
	mixins: [jumpPage],
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			params: {
				type: 'project',
				page_no: 1,
				page_size: 6,
				city_id: uni.getStorageSync('currentAddress').code
			},
			list: [
				{
					name: '测试',
					images: ['https://vue-oss.juranguanjia.com/weapp/image/home/star.png']
				}
			],
			speedPosition: 0
		};
	},
	computed: {
		...mapGetters(['systemInfo'])
	},
	mounted() {
		this.getList();
	},
	methods: {
		getList() {
			console.log("12121")
		},
		toDetail(item) {
			uni.navigateTo({
				url: ``
			});
		},
		toMore() {
			uni.navigateTo({
				url: ''
			});
		},
		scroll(e) {
			// 计算一个元素宽度
			const { windowWidth } = this.systemInfo;
			const marginWidth = 32 * (375 / windowWidth);
			const itemWidth = (228 * (375 / windowWidth)) / 2;
			const { scrollLeft, scrollWidth } = e.detail;
			// this.speedPosition = ((scrollLeft / (scrollWidth - windowWidth + marginWidth)) * 100).toFixed(2) + '%';
		}
	}
};
</script>

<style lang="scss" scoped>
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.projectview {
	height: 441rpx;
	background: linear-gradient(270deg, #fcdece 0%, #fcf4ef 49%, #fcf4ef 100%);
	border-radius: 16rpx;
	border: 2rpx solid #ffdce6;
	margin: 0 32rpx;
	.upper {
		margin: 26rpx 24rpx 0;
		.title {
			height: 44rpx;
			font-size: 32rpx;
			font-weight: 500;
			line-height: 44rpx;
			&-icon {
				width: 40rpx;
				height: 40rpx;
				margin-top: 2rpx;
				margin-right: 12rpx;
			}
		}
		.more {
			justify-content: center;
			width: 100rpx;
			height: 40rpx;
			background: #ffffff;
			border-radius: 20rpx;
			font-size: 24rpx;
			color: #eba57e;
			line-height: 40rpx;
			&-icon {
				width: 10rpx;
				margin-left: 8rpx;
			}
		}
	}

	.content {
		height: 348rpx;
		background: #ffffff;
		border-radius: 16rpx;
		margin-top: 24rpx;
		.list {
			white-space: nowrap;
			.item {
				display: inline-block;
				margin: 24rpx 16rpx 0 0;
				width: 212rpx;
				&:first-child {
					margin-left: 24rpx;
				}
				&-cover {
					width: 212rpx;
					height: 212rpx;
					border-radius: 20rpx;
					margin-bottom: 8rpx;
				}
				&-title {
					// white-space: normal;
					height: 64rpx;
					font-size: 22rpx;
					line-height: 32rpx;
				}
			}
		}

		.speed {
			position: relative;
			height: 8rpx;
			border-radius: 2rpx;
			margin: 0 24rpx 0;
			padding-right: 94rpx;
			box-sizing: border-box;
			&::before {
				content: '';
				position: absolute;
				top: 3rpx;
				width: 100%;
				height: 2rpx;
				border-radius: 2rpx;
				background-color: #ffeae1;
			}
			.cur {
				position: relative;
				width: 94rpx;
				height: 8rpx;
				background: #fe6b2b;
				border-radius: 6rpx;
				margin-bottom: 0rpx;
				z-index: 9;
			}
		}
	}
}
</style>
