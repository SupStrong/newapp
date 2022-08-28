<template>
	<view class="title-box">
		<view class="title">
			<slot>
				{{title}}
			</slot>
		</view>
		<view v-if="to && to.length" class="moreLink G-Fsize-11" @click="handleMoreLink">
			<text>更多</text>
			<image class="right_icon G-Ml-5" :src="rightIcon" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name: "Title",
		props:{
			title: {
				type: String,
				default: ""
			},
			to: {
				type: String,
				default: ""
			},
		},
		data() {
			return {
				rightIcon: 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image/store/right.png'
			}
		},
		methods: {
			handleMoreLink() {
				uni.navigateTo({
					url: this.to
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title-box{
		height: 44rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: #333333;
		line-height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24rpx;
		.moreLink {
			color: #717376;
			font-weight: 400;
			display: flex;
			align-items: center;
			.right_icon {
				// height: 16rpx;
				width: 9rpx;
				background-size: 100%;
			}
		}
		
	}
</style>
