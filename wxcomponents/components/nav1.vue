<template>
	<view>
		<view class="control G-Mt-15">
			<view class="title">服务中心</view>
			<view class="list">
				<view class="list-item" v-for="(item, index) in listList" :key="index" @click="cardRouterBtn(item)">
					<image class="list-item-img G-Mb-4" :src="baseUrlImg + item.icon" style="height: 46rpx" mode="heightFix"></image>
					<view class="list-item-name G-Fsize-11 G-Talign-center">{{ item.name }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image/',
			listList: [
				{
					name: '关于我们',
					tolink: '/pageUserInfos/means/about/index',
					icon: 'minePages/about.png'
				},
				{
					name: '关注公众号',
					// type: 'wx',
					tolink: '/pageUserInfos/login/components/statement?url=https://mp.weixin.qq.com/s/LqVGoTlth-9UcIX4StyrFQ',
					icon: 'minePages/weixin.png'
				},
				{
					name: '设置',
					type: 'setting',
					tolink: '/pageUserInfos/means/setting/index',
					icon: 'minePages/setting.png'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.control {
	position: relative;
	z-index: 9;
	margin: 0 32rpx;
	background: #ffffff;
	box-shadow: 0 4rpx 40rpx 0 rgba(13, 104, 230, 0.05);
	border-radius: 16rpx;
	padding: 40rpx 0;
	.title-content {
		padding: 0 32rpx;
	}
	.right-icon {
		width: 12rpx;
		height: 20rpx;
		margin-bottom: 40rpx;
	}
	.title {
		height: 40rpx;
		font-size: 28rpx;
		font-weight: 500;
		line-height: 40rpx;
		margin-bottom: 40rpx;
		box-sizing: border-box;
		padding-left: 32rpx;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
		&-item {
			width: 25%;
			// width: 156rpx;
			text-align: center;
			&:not(:nth-child(-n + 4)) {
				margin-top: 36rpx;
			}
			&-img {
				display: inline-block;
				vertical-align: middle;
				width: 46rpx;
				margin: 0 auto 8rpx;
			}
			&-name {
				line-height: 32rpx;
				text-align: center;
			}
		}
		&-item1 {
			width: auto;
		}
	}
}
</style>
