<template>
	<view class="featured-wrap">
		<scroll-view scrollX class="common-list">
			<view
				@tap="universalJump"
				class="common-list-item ptp_exposure"
				:data-benefitid="item.benefitId"
				:data-businessId="item.businessId"
				:data-businessType="item.businessType"
				:data-index="index"
				:data-jumpkey="item.jumpKey"
				data-ptpid="fda2-15fd-91e9-f840"
				:data-sourceid="item.sourceId"
				v-for="(item, index) in welfareTenBeansList"
				:key="item.title"
			>
				<view class="common-title ellipsis">{{ item.title }}</view>
				<view class="common-desc ellipsis">{{ item.subTitle }}</view>
				<image lazyLoad class="common-image" :src="item.image || item.bannerImages[0]"></image>
				<view class="getWelfare">参加活动</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		cardTitle: {
			type: String,
			default: ''
		},
		cardDes: {
			type: String,
			default: ''
		},
		cardImage: {
			type: String,
			default: ''
		},
		cardFontStyle: {
			type: String,
			default: ''
		},
		welfareTenBeansList: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		universalJump: function(t) {
			if (void 0 === t.currentTarget.dataset.jumpkey) {
				var a = t.currentTarget.dataset.benefitid;
				uni.navigateTo({
					url: '/pages/activity/qtsBeanWelfare/index/index?benefitId=' + a
				});
			} else {
				var r = parseInt(t.currentTarget.dataset.index);
				e.universalJump(this.welfareTenBeansList[r]);
			}
		}
	}
};
</script>
<style>
.featured-wrap {
	padding: 0;
}

.common-list {
	width: 100%;
	/* padding-left: 32rpx; */
	-webkit-overflow-scrolling: touch;
	display: block;
	margin-top: 28rpx;
	white-space: nowrap;
	height: auto;
	text-align: left;
	line-height: 1;
}

.common-list::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}

.common-list-item {
	display: inline-block !important;
	width: 402rpx;
	margin-right: 16rpx;
	background: #fff;
	padding: 32rpx;
	position: relative;
	border-radius: 16rpx;
}

.common-image {
	display: block;
	width: 336rpx;
	height: 120rpx;
	margin-top: 24rpx;
}

.common-title {
	font-size: 32rpx;
	color: #111e38;
	font-weight: 500;
}

.common-desc {
	color: #aeb2bb;
	font-size: 24rpx;
	margin-top: 12rpx;
}

.ellipsis {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.getWelfare {
	margin-top: 20rpx;
	font-size: 24rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #111e38;
	width: 338rpx;
	height: 64rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #00e699;
	border-radius: 16rpx;
}
</style>
