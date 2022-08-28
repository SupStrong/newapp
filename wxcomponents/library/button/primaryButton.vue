<template>
	<view 
		class="button" 
		:class="[
			{
				'unit_px': unit == 'px'
			}
		]"
		:style="{
			'width': width,
			'background': bgColor,
			'color': color,
		}"
		@click.stop.prevent="handleTrigger"
	>
		<slot>
			<text class="button-text">{{text}}</text>
		</slot>
	</view>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: "默认按钮"
		},
		width: {
			type: String,
			default: '686rpx'
		},
		bgColor: {
			type: String,
			default: '#0060E5'
		},
		color: {
			type: String,
			default: '#fff'
		},
		unit: {
			type: String,
			default: 'rpx'
		}
	},
	methods: {
		handleTrigger(event) {
			this.$emit('handleTrigger', event)
		}
	}
}
</script>

<style lang="scss" scoped>
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 76rpx;
		border-radius: 42rpx;
		font-size: 28rpx;
		font-weight: bold;
		line-height: 1;
		color: #fff;
	}
	.unit_px {
		height: 38px;
		border-radius: 21px;
		font-size: 14px;
		width: 100% !important;
	}
</style>
