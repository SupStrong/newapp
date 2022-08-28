<template>
	<view>	
		<view class="store-item">
			<view class="item-image" :style="{
					'background-image': `url(${item.picture || baseInfo.coverImg})`
				}">
				<view class="item-iden">
					<!-- <image class="item-iden-icon"
						src="https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image/store/member.png" alt=""
						mode="widthFix"> -->
						<!-- {{item.category_name}} -->
						{{item.checked == 2 ? '待提交审核' : (item.checked == 1 && item.is_open == 0) ? '待上线' : '已上线'}}
				</view>
			</view>
			<view class="item-main">
				<view class="main-name">
					<view class="main-name__title two-line">
						{{item.title}}
					</view>
					<!-- <text v-if="isJin" class="font_family icon-jin main-name__icon"></text> -->
					<image v-if="isJin" class="main-name__icon"
						src="https://vue-oss.juranguanjia.com/weapp/image/icon/near.png" mode="widthFix"></image>
				</view>
				<view class="num-info">
					<view class="num-info-item">
						<view>{{item.tuijian_project_count}}</view>
						<view class="top">智能家居方案</view>
					</view>
					<view class="num-info-item">
						<view>{{item.tuijian_goods_count}}</view>
						<view class="top">推荐商品</view>
					</view>
					<view class="num-info-item">
						<view>{{item.tuijian_cms_count}}</view>
						<view class="top">关联文章</view>
					</view>
				</view>
				<!-- 			<view class="main-distance main-text one-line">
					<template v-if="showWhereFlag">
						{{item.distance_info}}
						<text v-if="item.duration_info">，{{item.duration_info}}</text>
					</template>
				</view>
				<view class="main-address main-text one-line">
					<text class="font_family icon-xingzhuang main-address__font"></text> {{item.address}}
				</view>
				<view class="main-tags">
					<view class="tags-item" v-for="tag in item.tags" :key="tag.id" v-show="showTags">
						<text class="font_family icon-dui"></text>
						<text>{{ tag.name }}</text>
					</view>
				</view> -->
			</view>
		</view>
		<view class="button-group">
			<view class="button" @click.stop="share(item)">分享</view>
			<view class="button">预览</view>
			<view class="button" v-if="item.checked == 1 && item.is_open == 0" @click.stop="upLine(item)">上线</view>
			<view class="button" v-if="item.checked == 1 && item.is_open == 1" @click.stop="underLine(item)">下线</view>
			<view class="button" @click.stop="editShop(item)">编辑</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
			isJin: {
				type: Boolean,
				default: false
			},
			showWhere: {
				type: Boolean,
				default: true
			},
			showTags: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			...mapGetters(['baseInfo', 'userRealAddress', 'userSelectAddress']),
			showWhereFlag() { // 是否展示距离
				if (!this.showWhere) return false;
				if (this.userRealAddress && this.userRealAddress.name !== this.userSelectAddress.name) return false;
				return true;
			}
		},
		methods: {
			// 编辑 
			editShop(val) {
				uni.navigateTo({
					url: `/pagesMarketing/store/addStore?id=${val.id}`
				})
			},
			// 上线 
			upLine (val) {
				this.$emit('upLine',val)
			},
			// 下线 
			underLine(val) {
				this.$emit('underLine',val)
			},
			share(val) {
				this.$emit('share',val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		display: block;
		height: auto;
		background-size: 100%;
		background-position: center;
	}

	.store {
		&-item {
			box-sizing: border-box;
			display: flex;
			// height: 222rpx;
		}
	}

	.item {
		&-image {
			display: flex;
			width: 250rpx;
			height: 188rpx;
			background-size: 100%;
			background-position: center;
			border-radius: 16rpx;

			.item-iden {
				display: flex;
				align-items: center;
				height: 34rpx;
				background: linear-gradient(90deg, #F9E9D3 0%, #F1CEA8 100%);
				border-radius: 16rpx 4rpx 16rpx 0;
				font-size: 20rpx;
				padding: 0 8rpx;

				&-icon {
					display: block;
					width: 24rpx;
					margin-left: 4rpx;
				}
			}
		}

		&-main {
			flex: 1;
			height: 188rpx;
			overflow: hidden;
			padding-left: 16rpx;
		}
	}

	.main {
		&-name {
			display: flex;

			&__title {
				width: 334rpx;
				height: 68rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #353535;
				line-height: 34rpx;
			}

			&__icon {
				width: 48rpx;
			}
		}

		&-text {
			height: 32rpx;
			margin-top: 16rpx;
			font-size: 22rpx;
			font-weight: 300;
			color: #333333;
			line-height: 32rpx;
		}

		&-distance {
			margin-top: 16rpx;
		}

		&-address {
			margin-top: 6rpx;

			&__font {
				font-size: 26rpx;
				color: #717376;
				margin-right: 8rpx;
			}
		}

		&-tags {
			display: flex;
			margin-top: 6rpx;
			height: 28rpx;
		}
	}

	.text {
		&-name {
			font-size: 28rpx;
			font-weight: 500;
			color: #353535;
			padding-right: 32rpx;
		}
	}

	.tags {
		&-item {
			height: 28rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #717376;
			line-height: 28rpx;
			margin-right: 16rpx;

			.icon-dui {
				font-size: 22rpx;
				color: #62A63B;
				margin-right: 8rpx;
			}
		}
	}

	.num-info {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		text-align: center;
	}

	.button-group {
		display: flex;
		justify-content: flex-end;
		margin-top: 20rpx;
		.button {
			width: 130rpx;
			height: 50rpx;
			background: #fff;
			border-radius: 26rpx;
			border: 1px solid #0060e5;
			font-size: 26rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #0060e5;
			line-height: 50rpx;
			text-align: center;
			margin-left: 20rpx;
		}
	}
	.top {
		margin-top: 20rpx;
	}
</style>
