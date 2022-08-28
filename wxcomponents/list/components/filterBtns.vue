<template>
	<view class="filter_btns">
		<view class="filter_btns-btn success" @click="handleBtn(true)">
			确定
		</view>
		<view class="filter_btns-btn cancel" @click="handleBtn(false)">
			重置
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			handleBtn(flag) {
				if(flag) {
					this.$emit('success');
				} else {
					this.$emit('cancel');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filter_btns {
		display: flex;
		justify-content: center;
		.filter_btns-btn {
			width: 200rpx;
			height: 64rpx;
			text-align: center;
			line-height: 64rpx;
			border-radius: 32rpx;
			box-sizing: border-box;
			&:first-child {
				margin-right: 80rpx;
			}
		}
		.cancel {
			border: 2rpx solid #0060E5;
			color: #0060E5;
		}
		.success {
			background-color: #0060E5;
			color: #FFFFFF;
			box-shadow: 0 4rpx 8rpx 0 rgba(211, 148, 33, 0.2);
		}
	}
</style>
