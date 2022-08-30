<template>
	<view class="b-radius-box">
		<view class="list-title">
			<view class="line"></view>
			<text class="text">门店活动</text>
		</view>
		<view class="G-Re brand-activity">
			<view class="G-Pt-3" v-for="(item, index) of listData" :key="index">
				<!-- 小图 -->
				<view class="small" @click="setRouter('/pages/stores/activity/index/main', item.id)">
					<image :src="item.banner" :lazy-load="true" class="cover"></image>
					<view class="message">
						<view class="left">
							<view class="name">{{ item.title }}</view>
							<view class="horn">
								<i class="iconfont iconxiaolaba"></i>
								<view class="num">{{ item.user_count }}人已报名</view>
							</view>
						</view>
						<view class="right">查看</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listData: [
				{
					banner: 'https://upfile.juranguanjia.com/image/1/2022/08/29/53cb9f01d61f6a4e21d3c21555513223J533sH96WgNTxmqjeu2eECSITGOrucoa',
					id: '1',
					title: '测试',
					user_count: '12'
				},{
					banner: 'https://upfile.juranguanjia.com/image/1/2022/08/29/53cb9f01d61f6a4e21d3c21555513223J533sH96WgNTxmqjeu2eECSITGOrucoa',
					id: '1',
					title: '测试',
					user_count: '12'
				}
			]
		};
	},
	// components: {
	// 	BoxInfo
	// },
	methods: {}
};
</script>

<style lang="scss" scoped>
.b-radius-box{
	background-color: white;
}
.list-title {
	border-top: 1px solid #f2f5f8;
	padding: 30rpx 0 0 0;
	box-sizing: border-box;
	display: flex;
	margin: 0 32rpx;
	align-items: center;
	.text {
		font-size: 32rpx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 44rpx;
		margin-left: 10rpx;
	}
	.line {
		width: 4rpx;
		height: 32rpx;
		background: #f36e20;
	}
	.tag {
		font-size: 24rpx;
		color: #f13a3a;
		margin-left: 12rpx;
		border: solid 2rpx #f13a3a;
		padding: 2rpx 4rpx;
		background-color: #fff3f3;
		border-radius: 4rpx;
		box-sizing: border-box;
	}
}
.G-Pt-3 {
	padding-top: 6rpx;
	box-sizing: border-box;
}
.small {
	height: 160rpx;
	margin: 0 32rpx;
	background: rgba(255, 255, 255, 1);
	display: flex;
	justify-content: space-between;
	-webkit-justify-content: space-between;
	align-items: center;
	.cover {
		width: 160rpx;
		height: 120rpx;
		border-radius: 4rpx;
		display: block;
	}
	.message {
		width: 510rpx;
		height: 100%;
		padding: 20rpx 0;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		border-bottom: 2rpx solid #ececec;
	}
	.left {
		width: 360rpx;
		position: relative;
	}
	.right {
		width: 128rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		background: linear-gradient(45deg, rgba(244, 71, 18, 1) 0%, rgba(243, 110, 32, 1) 100%);
		border-radius: 30rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #fff;
		margin-top: 30rpx;
	}
	.horn {
		position: absolute;
		bottom: 8rpx;
		left: 0;
		background: #fff7f3;
		padding-right: 8rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border: 1px solid #f39a66;
		border-radius: 4rpx;
	}
	.iconfont {
		width: 28rpx;
		height: 28rpx;
		line-height: 28rpx;
		text-align: center;
		background: #f39a66;
		font-size: 20rpx;
		color: #fff;
	}
	.num {
		color: #f39a66;
		margin-left: 8rpx;
		font-size: 20rpx;
	}
	.name {
		width: 97%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 8rpx;
	}
}
</style>
