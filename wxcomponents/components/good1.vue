<template>
	<view>
		<view class="activity-box">
			<view class="index-title fl-row-leftNowrap">
				<view class="iconfont iconyouhui"></view>
				<view class="text">优惠</view>
			</view>
			<view class="fl-row-justy">
				<view class="activity-item" v-for="(item, index) in storeWelfare" :key="index">
					<image :src="item.banner" alt class />
					<view class="shade">认筹</view>
					<view class="middle">
						<view class="name G-more-cloum G-col-2">{{ item.title }}</view>
						<view class="horn">
							已购买
							<view class="num">{{ item.amount }}</view>
							人
						</view>
					</view>
					<view class="more">立即购买</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			storeWelfare: [
				{
					banner: 'https://upfile.juranguanjia.com/image/1/2022/07/05/46f0c3713f0df5e80ce6d8f2b526ae7aGRIqJMOT1rDeVHCe45LgghMIRY0DFBzo',
					title: '我们偷偷的搞活动啦，我们偷偷的搞活动啦',
					amount: '133'
				},
				{
					banner: 'https://upfile.juranguanjia.com/image/1/2022/07/05/46f0c3713f0df5e80ce6d8f2b526ae7aGRIqJMOT1rDeVHCe45LgghMIRY0DFBzo',
					title: '我们偷偷的搞活动啦我们偷偷的搞活动啦我们偷偷的搞活动啦',
					amount: '230'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.index-title {
	padding: 30rpx 0;
	.text {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
		line-height: 50rpx;
	}
}
.activity-box {
	background-color: #fff;
	padding: 0 30rpx 20rpx 30rpx;
	.fl-row-justy {
		flex-wrap: wrap;
	}
}
.activity-item {
	width: 330rpx;
	height: 408rpx;
	position: relative;
	border-radius: 8rpx;
	border: 2rpx solid rgba(238, 238, 238, 1);
	margin-bottom: 30rpx;
	image {
		width: 100%;
		height: 192rpx;
		display: block;
		border-radius: 8rpx 8rpx 0 0;
	}
	.middle {
		height: 154rpx;
		padding: 10rpx;
	}
	.name {
		font-size: 28rpx;
		font-weight: bold;
		line-height: 40rpx;
	}
	.more {
		height: 60rpx;
		line-height: 60rpx;
		background: rgba(254, 240, 233, 1);
		border-radius: 0 0 6rpx 6rpx;
		text-align: center;
		font-size: 24rpx;
		font-weight: bold;
		color: #f36e20;
	}
	.shade {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		width: 126rpx;
		height: 50rpx;
		line-height: 50rpx;
		background: linear-gradient(90deg, #f56d22, #fa973b);
		border-radius: 0 0 26rpx 0px;
		font-size: 24rpx;
		color: #fff;
		text-align: center;
		font-weight: bold;
	}
	.horn {
		display: flex;
		line-height: 34rpx;
		color: #999;
		font-size: 24rpx;
		margin-top: 10rpx;
		.num {
			font-size: 24rpx;
			color: #f36e20;
		}
	}
}
</style>
