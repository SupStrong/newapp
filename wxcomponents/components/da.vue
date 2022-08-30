<template>
	<view class="info">
		<!-- <BoxTitle :infoData="titleInfo" /> -->
		<!-- <view class="title-con" :class="infoData.className"> -->
		<view class="title-con" :class="infoData.className">
			<image class="line-con" />
			<view class="text">盲盒特色</view>
			<image class="line-con translate" />
		</view>
		<view class="info-item" v-for="(item, index) in infoData" :key="index">
			<view class="title">{{ item.title }}</view>
			<text class="desc">{{ item.desc }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			infoData: [
				{
					title: '开盒有礼',
					desc: '测试他们的'
				},
				{
					title: '签到有礼',
					desc: '测试我们的'
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
.title-con {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50rpx 0 40rpx;
	.line-con {
		width: 46rpx;
		height: 48rpx;
		background-size: 46rpx 48rpx;
		background-image: url('http://cw100.oss-cn-beijing.aliyuncs.com/minipro/mall/box/title1.png');
		&.translate {
			transform: rotate(180deg);
		}
	}
	.text {
		margin: 0 10rpx;
		font-size: 36rpx;
		font-weight: 500;
		color: #ec685c;
		line-height: 50rpx;
	}
	&.white {
		.line-con {
			background-image: url('http://cw100.oss-cn-beijing.aliyuncs.com/minipro/mall/box/title2.png');
		}
		.text {
			color: #fff;
		}
	}
}
.info {
	background-color: #fff;
	padding: 0 30rpx 20rpx;
	overflow: hidden;
}
.info-item {
	width: 630rpx;
	margin: 0 auto 20rpx;
	background: #ffefee;
	border-radius: 8rpx;
	overflow: hidden;
	.title {
		margin-bottom: 20rpx;
		width: 136rpx;
		height: 40rpx;
		padding-left: 12rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #ffffff;
		line-height: 40rpx;
		// border-top-right-radius: .04rem;
		border-bottom-right-radius: 40rpx;
	}
	.desc {
		display: inline-block;
		padding: 0 30rpx 30rpx;
		font-size: 28rpx;
		font-weight: 500;
		color: #333333;
		line-height: 40rpx;
	}
	&:nth-child(2) {
		.title {
			background: linear-gradient(180deg, #ff887e, #ec685c 99%);
		}
	}
	&:nth-child(3) {
		.title {
			background: linear-gradient(180deg, #ffae7f 1%, #ff7a5d);
		}
	}
	&:nth-child(4) {
		.title {
			background: linear-gradient(0deg, #6236ff, #7e5aff);
		}
	}
}
</style>
