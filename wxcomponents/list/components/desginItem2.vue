<template>
	<view class="desgin-item">
		<image class="item-image" :src="item.picture || baseInfo.coverImg" mode="aspectFill"></image>
		<view class="item-main">
			<view class="main-name">
				<text class="main-name__title">{{item.name}}</text>
				<text
					:class="[
						'font_family',
						'main-name__sex',
						item.gender == 1 ? 'icon-youhua-nanbiaozhi main-name__man' : 'icon-youhua-nvbiaozhi main-name__woman'
					]"
				>
				</text>
			</view>
			<view class="main-detail">
				<view class="main-detail__tag">
					<text class="font_family icon-shijian_ main-detail__tag-iconfont"></text>
					从业时间：<text style="color: #FFAE2C;">{{parseInt(curYear) - parseInt(item.pro_date)}}年</text>
				</view>
				<view class="main-detail__tag">
					<text class="font_family icon-anli main-detail__tag-iconfont"></text>
					案例数：<text style="color: #FFAE2C;">{{item.project_num}}套</text>
				</view>
			</view>
			<view class="main-tags" v-if="item.tags.length">
				<view class="tags-item" v-for="tag in item.tags" :key="tag.id">
					{{ tag.name }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { dateFormat } from '@/utils/index.js'

	export default {
		data() {
			return {
				curYear: '',
			}
		},
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		computed: {
			...mapGetters(['baseInfo'])
		},
		mounted() {
			this.curYear = dateFormat(null, 'Y')
		}
	}
</script>

<style lang="scss" scoped>
.desgin {
	&-item {
		box-sizing: border-box;
		display: flex;
		// height: 166rpx;
		border-radius: 16rpx;
	}
}
.item {
	&-image {
		width: 108rpx;
		height: 108rpx;
		background-size: 100%;
		border-radius: 108rpx;
	}
	&-main {
		overflow: hidden;
		flex: 1;
		padding-left: 20rpx;
	}
}
.main {
	&-name {
		height: 36rpx;
		&__title {
			margin-right: 8rpx;
			font-size: 26rpx;
			color: #353535;
			line-height: 36rpx;
		}
		&__sex {
			font-size: 28rpx;
		}
		&__man {
			color: #0487ef;
		}
		&__woman {
			color: #eb396e;
		}
	}
	&-detail {
		display: flex;
		align-items: center;
		height: 32rpx;
		margin-top: 12rpx;
		&__tag {
			font-size: 22rpx;
			font-weight: 400;
			color: #666666;
			line-height: 22rpx;
			&:first-child {
				margin-right: 80rpx;
			}
			&-iconfont {
				font-size: 20rpx;
				margin-right: 8rpx;
			}
		}
	}
	&-tags {
		display: flex;
		margin-top: 12rpx;
	}
}
.tags {
	&-item {
		height: 32rpx;
		margin-right: 16rpx;
		padding: 0 10rpx 0 12rpx;
		border-radius: 8rpx;
		border: 2rpx solid #ADC9F5;
		color: #ADC9F5;
		font-size: 22rpx;
		font-weight: 400;
		line-height: 32rpx;
		&:last-child {
			margin-right: 0;
		}
	}
}
</style>
