<template>
	<view class="quality-box jobListBox">
		<view class="gridList">
			<view class="leftColumn">
				<view
					@tap="universalJump"
					:class="'quality-itemLeft ptp_exposure_recommends_' + item.contentId"
					:data-businessId="item.businessId"
					:data-businessType="item.businessType"
					:data-contentid="item.contentId"
					:data-index="index"
					:data-path="item.jumpPath"
					data-ptpid="recommends-l"
					:data-sourceid="item.sourceId"
					v-if="index % 2 === 0"
					v-for="(item, index) in resourseFrom"
					:key="item.contentId"
				>
					<view :class="index === 0 ? 'experenceBtnFirst' : 'experenceBtn'">
						<view :class="item.jumpKey === 'USER_PART_JOB_TAG_PAGE_QTZP' || item.jumpKey === 'USER_REPORT_STATIC_PAGE' ? '' : 'quality-modal'"></view>
						<image lazyLoad class="img" mode="aspectFill" :src="item.image + '?imageView2/0/w/501'"></image>
					</view>

					<view
						:class="index === 0 ? 'quality-infoFirst' : 'quality-info'"
						v-if="item.jumpKey !== 'USER_PART_JOB_TAG_PAGE_QTZP' && item.jumpKey !== 'USER_REPORT_STATIC_PAGE'"
					>
						<view class="jobListTitle fontIndex ellipsis">{{ item.title }}</view>
						<view class="diviDing textMg fontIndex"></view>
						<view class="jobListDes textMg fontIndex ellipsis">{{ item.subTitle }}</view>
					</view>
				</view>
			</view>
			<view class="rightColumn">
				<view
					@tap="universalJump"
					:class="'quality-item ptp_exposure_recommends_' + item.contentId"
					:data-businessId="item.businessId"
					:data-businessType="item.businessType"
					:data-contentid="item.contentId"
					:data-index="index"
					:data-path="item.jumpPath"
					data-ptpid="recommends-r"
					:data-sourceid="item.sourceId"
					v-if="index % 2 !== 0"
					v-for="(item, index) in resourseFrom"
					:key="item.contentId"
				>
					<view :class="index === 0 ? 'experenceBtnFirst' : 'experenceBtn'">
						<view :class="item.jumpKey === 'USER_PART_JOB_TAG_PAGE_QTZP' || item.jumpKey === 'USER_REPORT_STATIC_PAGE' ? '' : 'quality-modal'"></view>
						<image lazyLoad class="img" mode="aspectFill" :src="item.image + '?imageView2/0/w/501'"></image>
					</view>

					<view
						:class="index === 0 ? 'quality-infoFirst' : 'quality-info'"
						v-if="item.jumpKey !== 'USER_PART_JOB_TAG_PAGE_QTZP' && item.jumpKey !== 'USER_REPORT_STATIC_PAGE'"
					>
						<view class="jobListTitle fontIndex ellipsis">{{ item.title }}</view>
						<view class="diviDing textMg fontIndex"></view>
						<view class="jobListDes textMg fontIndex ellipsis">{{ item.subTitle }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		resourseFrom: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		addFormId: function(e) {
			t.addFormId({
				formId: e.detail.formId,
				sourceId: e.target.dataset.ptpid
			});
		},
		jumpToPath: function(e) {
			console.log(e.currentTarget.dataset.path);

			if (3 === e.currentTarget.dataset.jumptype) {
				var t = encodeURIComponent(e.currentTarget.dataset.path);
				uni.navigateTo({
					url: '/pages/webview/webview?targetUrl=' + t
				});
			} else {
				uni.navigateTo({
					url: e.currentTarget.dataset.path
				});
			}
		},
		universalJump: function(e) {
			var r = parseInt(e.currentTarget.dataset.index);
			t.universalJump(this.resourseFrom[r]);
		}
	},
	watch: {
		resourseFrom: {
			handler: function(t) {},
			immediate: true,
			deep: true
		}
	}
};
</script>
<style lang="scss" scoped>
.jobListBox {
	flex-flow: row wrap;
	padding: 0 32rpx 0 0;
	flex-wrap: wrap;
}

.gridList,
.jobListBox {
	display: flex;
	justify-content: space-between;
}

.gridList {
	width: 100%;
}

.leftColumn,
.rightColumn {
	width: 50%;
	height: auto;
}

.rightColumn {
	padding-left: 4rpx;
}

.jobListTitle {
	font-size: 32rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #fff;
}

.diviDing {
	width: 80rpx;
	height: 4rpx;
	background: #fff;
}

.ellipsis {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.jobListDes {
	font-size: 20rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #fff;
	line-height: 20rpx;
}

.textMg {
	margin-top: 16rpx;
}

.fontIndex {
	z-index: 666;
}

.quality-box {
	width: 100%;
	position: relative;
	overflow: hidden;
	padding-top: 32rpx;
}

.quality-item,
.quality-itemLeft {
	height: 360rpx;
	width: 334rpx;
	position: relative;
	overflow: hidden;
	border-radius: 16rpx;
	margin-top: 16rpx;
}

.quality-itemLeft-image {
	width: 100%;
	height: inherit !important;
}

.quality-itemLeft:nth-child(1) {
	height: 254rpx;
	margin-top: 0;
}

.quality-item:nth-child(1) {
	margin-top: 0;
}

.quality-item-image {
	width: 100%;
	height: inherit !important;
}

.quality-modal {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 10;
	background: linear-gradient(1turn, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
}

.quality-info {
	padding: 224rpx 32rpx 0rpx;
}

.quality-info,
.quality-infoFirst {
	width: 100%;
	height: inherit;
	position: absolute;
	z-index: 11;
	top: 50%;
	transform: translateY(-50%);
}

.quality-infoFirst {
	padding: 134rpx 32rpx 0rpx;
}

.quality-title {
	width: 100%;
	font-size: 36rpx;
	color: #fff;
	line-height: 40rpx;
	text-align: center;
	font-weight: 600;
}

.quality-subtitle {
	width: 100%;
	font-size: 28rpx;
	color: hsla(0, 0%, 100%, 0.8);
	line-height: 30rpx;
	text-align: center;
	margin-top: 10rpx;
}

.experenceBtn {
	height: 380rpx;
	overflow: hidden;
}

.experenceBtnFirst {
	height: 254rpx;
	overflow: hidden;
}
</style>
