<template>
	<view class="card cate_list">
		<template v-if="twoCateList.length <= 5">
			<view class="cate_item" v-for="(cate, cateIndex) in twoCateList" :key="cate.category_id" @click="toCateTopic(cate)">
				<view class="cate_item-icon_box"><image class="cate_item-icon" :src="cate.image_url" mode="widthFix"></image></view>
				<view class="cate_item-name one-line">{{ cate.category_name }}</view>
			</view>
		</template>
		<template v-else>
			<view class="cate_item" v-for="(cate, cateIndex) in twoCateList.slice(0, 4)" :key="cate.category_id" @click="toCateTopic(cate)">
				<view class="cate_item-icon_box"><image class="cate_item-icon" :src="cate.image_url" mode="widthFix"></image></view>
				<view class="cate_item-name one-line">{{ cate.category_name }}</view>
			</view>
			<view class="cate_item" @click="toCatePage">
				<view class="cate_item-icon_box more"><uni-icons size="36" type="more-filled" :color="curTabData.color"></uni-icons></view>
				<view class="cate_item-name one-line">全部</view>
			</view>
		</template>
	</view>
</template>

<script>
export default {
	data() {
		return {
			twoCateList: [
				{
					image_url: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
					category_name: '文件'
				},{
					image_url: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
					category_name: '文件'
				},{
					image_url: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
					category_name: '文件'
				},{
					image_url: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
					category_name: '文件'
				},{
					image_url: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
					category_name: '文件'
				},{
					image_url: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
					category_name: '文件'
				}
			]
		};
	}
};
</script>
<style lang="scss" scoped>
// 首页第二种形态
.cate_list {
	display: flex;
	margin: 0 32rpx;
	.cate_item {
		width: 106rpx;
		&:not(:last-child) {
			margin-right: 44rpx;
		}
		&-icon_box {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 88rpx;
			height: 88rpx;
			border-radius: 88rpx;
			background-color: #fff;
			box-shadow: 0 6rpx 8rpx 0 rgba(131, 149, 186, 0.1), inset 0 2rpx 2rpx 0 #ffffff;
			// margin-bottom: 4rpx;
			margin: 0 auto 8rpx;
		}
		&-icon {
			width: 56rpx;
			height: 56rpx;
		}
		&-name {
			height: 34rpx;
			font-size: 24rpx;
			color: #666666;
			line-height: 34rpx;
			text-align: center;
		}
	}
}
</style>
