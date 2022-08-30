<template>
	<view>
		<view class="goods-tem-top G-Plr-15 fl-row-justy"><p class="title">参数规格</p></view>
		<view class="specification-tab">
			<view class="s-table">
				<view class="li" v-for="(item, index) in specList" :key="index">
					<view class="key">{{ item.key }}</view>
					<view class="value">{{ item.value }}</view>
				</view>
			</view>
			<view class="G-pb-15" v-if="specList.length <= 6"></view>
			<view class="show" v-if="specList.length > 6" :class="[specAllLength ? 'rotate' : '']" @click="specShow">
				<view class="text">{{ specAllLength ? '收起' : '展开' }}</view>
				<view class="iconfont iconxiangshang"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			specAllLength: true,
			specList: [
				{
					key: '测试',
					value: '测试机哦一二三'
				},
				{
					key: '测试多行的呵呵哈',
					value: '测试机哦一二三'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.goods-tem-top {
	height: 90rpx;
	width: 100%;
	background: #fff;
	padding: 0 30rpx;
	.title {
		font-size: 32rpx;
		color: #333;
		font-weight: 700;
	}
	.more {
		font-size: 26rpx;
		color: #f36e20;

		i {
			width: 36rpx;
			line-height: 36rpx;
			text-align: center;
			font-size: 26rpx;
			color: #fff;
			background: #f36e20;
			border-radius: 50%;
			margin-left: 4rpx;
		}
	}
}
.specification-tab {
	padding: 0 30rpx;
	background: #ffffff;
	.s-table {
		border: 2rpx solid #eeeeee;
		.li {
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #eeeeee;
			min-height: 80rpx;
			&:last-child {
				border: none;
			}
		}
		.key {
			// text-align: center;
			width: 200rpx;
			min-height: 80rpx;
			// line-height: 80rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #999999;
			padding: 20rpx 2rpx 20rpx 30rpx;
			border-right: 2rpx solid #eeeeee;
			box-sizing: border-box;
		}
		.value {
			display: flex;
			align-items: center;
			width: 492rpx;
			min-height: 80rpx;
			font-size: 28rpx;
			color: #666666;
			padding: 0 10rpx 0 30rpx;
		}
	}
	.show {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100rpx;
		&.rotate {
			.iconfont {
				transform: rotate(0deg);
			}
		}
		.text {
			font-size: 28rpx;
			color: #666666;
		}
		.iconfont {
			color: #666666;
			font-size: 28rpx;
			margin-left: 10rpx;
			transform: rotate(180deg);
		}
	}
}
</style>
