<template>
	<view class="item" @click="jumpPage">
		<view class="upper">
			<image class="upper-cover" :src="item.image" mode="aspectFill"></image>
			<view class="upper-content">
				<view class="upper-content-title">
					{{item.name}}
				</view>
				<view class="upper-content-type">
					{{item.typeName}}
				</view>
			</view>
		</view>
		<view class="tags">
			<view class="tags-item" v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
				<image class="tags-item-icon":src="baseUrlImg+'/icon/tag-success.png'" alt="" mode="widthFix" />
				<text class="tags-item-name">{{ tag.name }}</text>
			</view>
		</view>
		<view class="base">
			<view class="base-computed">
				{{item.distance_info}}
				<text v-if="item.duration_info">，{{item.duration_info}}</text>
			</view>
			<view class="base-address one-line">
				<text class="font_family icon-xingzhuang address__font"></text> {{item.address}}
			</view>
		</view>
		<view class="foot">
			<view class="foot-item foot-item3">
				{{item.hoursStatus == 1 ? '营业中' : '休息中'}}
			</view>
			<view class="foot-item foot-item2" v-for="(roomTag, roomTagsIndex) in item.roomTags" :key="roomTagsIndex">
				{{roomTag.name}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	data() {
		return {
			baseUrlImg: 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image',
		}
	},
	methods: {
		jumpPage() {
			uni.navigateTo({
				url: `/pagesMarketing/store/detail?id=${this.item.id}`
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}

.item {
	width: 686rpx;
	height: 290rpx;
	padding: 30rpx 20rpx;
	box-sizing: border-box;
}

.upper {
	display: flex;
	&-cover {
		width: 120rpx;
		height: 90rpx;
		box-shadow: 0 4rpx 8rpx 0 rgba(29, 100, 214, 0.1);
		border-radius: 8rpx;
	}
	&-content {
		flex: 1;
		overflow: hidden;
		margin-left: 16rpx;
		&-title {
			height: 40rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #333333;
			line-height: 40rpx;
			text-shadow: 0 4rpx 8 rgba(29, 100, 214, 0.1);
		}
		&-type {
			height: 34rpx;
			margin-top: 8rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #A0A0A0;
			line-height: 34rpx;
			text-shadow: 0 4rpx 8rpx rgba(29, 100, 214, 0.1);
		}
	}
}

.tags {
	display: flex;
	height: 32rpx;
	margin-top: 8rpx;
	&-item {
		display: flex;
		align-items: center;
		height: 32rpx;
		margin-right: 24rpx;
		&-icon {
			width: 18rpx;
			margin-right: 8rpx;
		}
		&-name {
			height: 32rpx;
			font-size: 22rpx;
			color: #717376;
			line-height: 32rpx;
		}
	}
}

.base {
	display: flex;
	height: 34rpx;
	margin-top: 14rpx;
	&-computed {
		margin-right: 12rpx;
		font-size: 24rpx;
		color: $themeColor;
		line-height: 34rpx;
	}
	&-address {
		flex: 1;
		overflow: hidden;
		font-size: 24rpx;
		color: #999999;
		line-height: 34rpx;
		.address__font {
			font-size: 24rpx;
			margin-right: 4rpx;
			color: #717376;
		}
	}
}

.foot {
	display: flex;
	margin-top: 18rpx;
	&-item {
		height: 32rpx;
		margin-right: 16rpx;
		font-size: 22rpx;
		line-height: 32rpx;
		text-align: center;
	}
	&-item2 {
		width: 100rpx;
		height: 32rpx;
		border-radius: 8rpx;
		opacity: 0.59;
		color: $themeColor;
		border: 2rpx solid $themeColor;
		box-sizing: border-box;
	}
	&-item3 {
		width: 100rpx;
		background: $themeColor;
		border-radius: 8rpx;
		color: #fff;
		opacity: 0.6;
	}
 }
</style>
