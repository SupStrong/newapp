<template>
	<view class="btn" @click="handleTrigger">
		<image class="btn-icon" :src="image" mode="widthFix"></image>
		<view class="btn-text">{{text}}</view>
	</view>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: 'text'
		}
	},
	methods: {
		handleTrigger() {
			this.$emit('handleTrigger')
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
	&-icon {
		width: 44rpx;
		margin: 0 auto 4rpx;
	}
	&-text {
		font-size: 18rpx;
		color: #262626;
		text-align: center;
		white-space:nowrap;
	}
}
</style>
