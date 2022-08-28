<template>
	<view class="title">
		<image class="icon" :src="baseUrlImg + '/icon/title2-left.png'" mode="widthFix"></image>
		<text class="title-text">{{title}}</text>
		<image class="icon" :src="baseUrlImg + '/icon/title2-right.png'" mode="widthFix"></image>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 48rpx;
	font-size: 32rpx;
	font-weight: 600;
	line-height: 48rpx;
	letter-spacing: 1rpx;
	.icon {
		width: 20rpx;
	}
	&-text {
		margin: 0 16rpx;
	}
}
</style>
