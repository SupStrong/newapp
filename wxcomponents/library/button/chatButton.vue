<template>
	<view class="btn" @click="handleKefu(chatType)">
		<image class="btn-icon" :src="baseUrlImg + '/icon/foot-chat.png'" mode="widthFix"></image>
		<view class="btn-text">{{text}}</view>
	</view>
</template>

<script>
import chat from '@/mixins/chat.js';
export default {
	mixins: [chat],
	props: {
		chatType: {
			type: String,
			default: 'defChat'
		},
		text: {
			type: String,
			default: '客服'
		}
	},
	data() {
		return {
			baseUrlImg: 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image'
		}
	}
}
</script>

<style lang="scss" scoped>
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.btn {
		width: 48rpx;
		&-icon {
			width: 44rpx;
			height: 42rpx;
			margin: 0 auto 7rpx;
		}
		&-text {
			font-size: 18rpx;
			color: #262626;
			text-align: center;
		}
	}
</style>
