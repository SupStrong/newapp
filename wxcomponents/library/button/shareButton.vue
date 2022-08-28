<template>
	<view class="share">
		<template v-if="shareType === 'hb' || shareType === 'custom'">
			<!-- #ifdef MP-ALIPAY || MP-BAIDU -->
				<button class="btn btn-clear" open-type="share">
					<image class="btn-icon" :src="baseUrlImg + '/image/icon/foot-share.png'" mode="widthFix"></image>
					<view class="btn-text">分享</view>
				</button>
			<!-- #endif -->
			
			<!-- #ifndef MP-ALIPAY || MP-BAIDU -->
				<view class="btn btn-clear" @click="openSharePopup">
					<image class="btn-icon" :src="baseUrlImg + '/image/icon/foot-share.png'" mode="widthFix"></image>
					<view class="btn-text">分享</view>
				</view>
			<!-- #endif -->
		</template>
		<template v-else>
			<button class="btn btn-clear" open-type="share">
				<image class="btn-icon" :src="baseUrlImg + '/image/icon/foot-share.png'" mode="widthFix"></image>
				<view class="btn-text">分享</view>
			</button>
		</template>
	</view>
</template>

<script>
export default {
	props: {
		shareType: {
			type: String,
			default: 'default'
		}
	},
	data() {
		return {
			baseUrlImg: 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp'
		}
	},
	methods: {
		openSharePopup() {
			this.$emit('click');
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
.share {
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
}
</style>
