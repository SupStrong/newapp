<template>
	<view class="scene-item">
		<image class="scene-item-picture" :src="item.image || baseInfo.coverImg" mode="aspectFill"></image>
		<view class="scene-item-detail">
			<view class="detail-name G-Mt-4">
				{{item.name || ''}}
			</view>
			<view class="detail-desc G-Mt-4 one-line">
				{{item.remark || ''}}
			</view>
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: {
		item: {
			type: Object,
			default() {
				return {
					id: '',
					image: '',
					name: '',
					remark: '',
				}
			}
		}
	},
	computed: {
		...mapGetters(['baseInfo'])
	},
}
</script>

<style lang="scss" scoped>
.scene-item {
	width: 332rpx;
	margin-top: 24rpx;
	background: #FFFFFF;
	border-radius: 16rpx;
	overflow: hidden;
	&-picture {
		display: block;
		width: 332rpx;
		height: 332rpx;
	}
	&-detail {
		width: 100%;
		padding: 8rpx 12rpx 16rpx;
		height: 100rpx;
		box-sizing: border-box;
	}
}

.detail {
	&-name {
		height: 36rpx;
		font-size: 26rpx;
		line-height: 36rpx;
	}
	&-desc {
		height: 32rpx;
		margin-top: 8rpx;
		font-size: 22rpx;
		color: #666666;
		line-height: 32rpx;
	}
}
</style>
