<template>
	<view>
		<view class="introduce">
			<view class="title">
				<image class="decoration" :src="baseUrlImg + '/shop/decoration.png'" mode="widthFix"></image>
				<view class="title-name">{{ detail.cate_one || '' }}｜{{ detail.cate_two || '' }}</view>
				<image class="decoration flip" :src="baseUrlImg + '/shop/decoration.png'" mode="widthFix"></image>
			</view>
			<view class="desc G-Mt-8 G-Mb-4">{{ detail.info || '' }}</view>
			<view class="copy">——“{{ detail.name_share }}”</view>
		</view>
		<view class="card category">
			<BaseTitle title="产品分类" />
			<view class="main">
				<view class="item" v-for="item in cateList" :key="item" @click="toPage('category', item)">
					<image v-if="item.image_url" class="img" :src="item.image_url" mode="widthFix"></image>
					{{item.category_name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			detail: {
				cate_one: '测试一',
				cate_two: '测试二',
				info: '智能影音娱乐设备为您打造专属的VIP家庭影院、家用游戏厅、家庭KTV。',
				name_share: '——“身临其境 打造VIP家庭影院”'
			},
			cateList:[
				{
					image_url:'https://upfile.juranguanjia.com/image/1/2022/02/16/7f038f573fcbbffd731882e98b82a3c1GDrPWR4UZJ91T1IzJtwzKl2dtUZwNo76',
					category_name:'智能音箱'
				}
			]
		};
	},
	components: {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.title {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 44rpx;
	&-name {
		height: 44rpx;
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
		line-height: 44rpx;
		letter-spacing: 1rpx;
		margin: 0 14rpx;
	}
	.decoration {
		width: 30rpx;
	}
	.flip {
		transform: rotate(180deg);
	}
}
.introduce {
	width: 686rpx;
	padding: 18rpx 20rpx;
	background: #ffffff;
	border-radius: 16rpx;
	box-sizing: border-box;
	margin: 0 auto;
	.desc {
		font-size: 26rpx;
		color: #666666;
		line-height: 36rpx;
		letter-spacing: 1rpx;
	}
	.copy {
		text-align: right;
		height: 34rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #333333;
		line-height: 34rpx;
	}
}
.decoration {
	width: 30rpx;
}
.card {
	padding: 32rpx 32rpx 0;
	.main {
		border-radius: 16rpx;
		background-color: #fff;
		padding: 24rpx 20rpx;
	}
}
.category {
	.main {
		display: flex;
		flex-wrap: wrap;
		padding: 24rpx 20rpx 0;
		.item {
			display: flex;
			align-items: center;
			height: 34rpx;
			font-size: 24rpx;
			line-height: 34rpx;
			margin-bottom: 30rpx;
			margin-right: 50rpx;
			.img {
				width: 40rpx;
				margin-right: 8rpx;
			}
		}
	}
}
</style>
