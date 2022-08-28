<template>
	<view class="container">
		<view class="goods-sec-specs">
			<scroll-view class="specs-scroller" scrollX>
				<view class="specs-imgs">
					<text>{{info.length}}色可选</text>
					<image v-for="(item,index) in info"
					 class="specs-imgs__item"
					:class="{'specs-imgs__item-active': current === index}"
					:src="item.url"
					:key="item.specValueId" mode='aspectFill' @click="handleSepcClick" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'BackToTop',
	props: {
		info: {
			show: String,
			default: 'null'
		}
	},
	computed: {
	},
	onShow() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';

.specs {
	&-title {
		font-size: $font-size-large;
		color: #000;
		text-align: center;
		margin: 0 0 26rrpx;
		line-height: 1;
		text-align: center;
	}

	&-selected {
		color: $color-primary-text;
		font-size: $font-size-small;
		margin-left: 18rpx;
	}

	&-scroller {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
	}

	&-imgs {
		white-space: nowrap;

		&__item {
			width: 80rpx;
			height: 80rpx;
			box-sizing: border-box;
			display: inline-block;
			vertical-align: middle;
			margin-left: 20rpx;
			overflow: hidden;
			transition: all 0.2s ease;
			box-shadow: 0 0 0 1rpx $color-border-gray;
			&-active {
				width: 85rpx;
				height: 85rpx;
				box-shadow: 0 0 0 1rpx #ff5000;
			}
		}
	}

	&-text__item {
		line-height: 80rpx;
		text-align: center;
		width: 80rpx;
		font-size: 24rpx;
	}
}
</style>
