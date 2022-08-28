<template>
	<view class="detail-item">
		<view v-if="info && info[showType]">
			<view class="detail-item-good" v-for="(item, index) in info[showType]" :key="index">
				<view class="detail-item__fix">
					<text class="detail-item__title">第{{ index + 1 }}件商品</text>
					<view class="detail-item__code" v-if="!info.delivery_code && item.delivery_code">
						<text class="code">物流单号：{{ item.delivery_code }}</text>
						<text class="btn" @click="handleCodeCopy(item.delivery_code)">复制</text>
					</view>
				</view>
				<OrderItem :key="index" :ctype="info.order_class" :info="item" isShowNational />
				<view
					class="order-item__ft"
					
				>
					<AtButton
						circle
						v-if="info.delivery_type == 'old' && (info.delivery_code ? null : item.delivery_code)"
						type="text"
						size="small"
						class="delivery-btn"
						@click="handleLookDelivery(item)"
					>
						查看物流
					</AtButton>
					<AtButton circle v-if="item.show_aftersales === 1" type="primary" size="small" @click="handleClickAfterSale(item)"></AtButton>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import { getOrderList, getDict, setUrgent, getCancelDict, cancelOrder } from '@/api/modules/order.js';
import uniNav from '@/components/uniNav.vue';
import OrderItem from '@/wxcomponents/goods/detail-item.vue';
export default {
	name: 'DetailItem',
	components: {
		uniNav,
		OrderItem
	},
	data() {
		return {};
	},
	props: {
		showType:{
			type: String,
			default: 'orders'
		},
		info:{
			type: Object,
			default: {}
		}
	},
	computed: {
		
	},
	onLoad() {
		console.log('23213',this.info)
	},
	methods: {
		handleClickAfterSale(item) {
			const {
				info: { tid: order_id, is_all_delivery, delivery_status }
			} = this.props;
			uni.navigateTo({
				url: `/subpage/pages/trade/after-sale`
			});
		},
		handleLookDelivery(value) {
			if (value.delivery_type == 'new') {
				uni.navigateTo({
					url: `/subpage/pages/trade/split-bagpack?order_type=${this.props.info.order_type}&order_id=${this.props.info.tid}&delivery_code=${
						value.delivery_code
					}&delivery_corp=${value.delivery_corp}&delivery_name=${value.delivery_name}`
				});
			} else {
				uni.navigateTo({
					url: `/subpage/pages/trade/delivery-info?order_type=${this.props.info.order_type}&order_id=${this.props.info.tid}&delivery_code=${
						value.delivery_code
					}&delivery_corp=${value.delivery_corp}&delivery_name=${value.delivery_name}`
				});
			}
		},
		handleCodeCopy(val) {
			copytext(val);
			showpPopup('复制成功');
		},
		handleSelectionChange(item_id, checked) {
			//选择要申请售后的商品
			this.info.orders.map(item => {
				item.item_id == item_id && (item.is_checked = checked);
			});
		},
		handleQuantityChange(item, val) {
			//改变售后商品的数量
			this.info.orders.map(v => {
				v.item_id == item.item_id && (v.store_num = val);
			});
		}
	}
};
</script>
<style lang="scss" scoped>
@import url('@/static/css/common/common.scss');
@import url('@/static/css/common/common.scss');
.order {
	.content {
		position: relative;
		z-index: 9;
		.tabs {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
			color: #333333;
			height: 44rpx;
			padding-bottom: 22rpx;
			.active {
				font-size: 32rpx;
				color: #ffa509;
			}
		}
		.tab-data {
			height: calc(100vh - 168rpx);
			.order-item {
				padding: 20rpx;
				background-color: #ffffff;
				border-radius: 16rpx;
				margin-bottom: 20rpx;
				box-sizing: border-box;
				&:last-child {
					visibility: hidden;
				}
				.order-item-info {
					display: flex;
					.goods-imgbox {
						width: 160rpx;
						height: 160rpx;
						border-radius: 16rpx;
						background-color: #eeeeee;
						overflow: hidden;
						margin-right: 20rpx;
					}
					.goods-content {
						flex: 1;
						overflow: hidden;
						&-head {
							display: flex;
							justify-content: space-between;
							height: 40rpx;
							align-items: center;
							&-title {
								width: 298rpx;
								font-size: 28rpx;
								font-weight: 500;
								color: #333333;
							}
							&-status {
								font-size: 26rpx;
								color: #ffa509;
							}
						}
						&-detail {
							height: 34rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin: 20rpx 0 34rpx;
							font-size: 24rpx;
							color: #666666;
						}
						&-bottom {
							height: 34rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-size: 24rpx;
							.coupon-price {
								color: #666666;
							}
							.price {
								color: #333333;
								font-size: 500;
							}
						}
					}
				}
				.line {
					height: 2rpx;
					width: 100%;
					margin: 18rpx 0;
					background-color: rgba($color: #c3c3c3, $alpha: 0.37);
				}
				.goods-foot {
					height: 60rpx;
					display: flex;
					justify-content: flex-end;
					&-btn {
						width: 152rpx;
						height: 60rpx;
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 30rpx;
						font-size: 24rpx;
						&:not(:first-child) {
							margin-left: 20rpx;
						}
					}
					.btn-type1 {
						border: 2rpx solid #999999;
						color: #999999;
					}
					.btn-type2 {
						background-image: linear-gradient(to right, #ffa509, #ffd115);
						color: #ffffff;
					}
					.btn-type3 {
						border: 2rpx solid #ffa509;
						color: #ffa509;
					}
				}
			}
		}
	}
}

.dialog-cancel {
	height: 846rpx;
	background-color: #ffffff;
	border-radius: 16rpx 16rpx 0rpx 0rpx;
	padding: 0 32rpx;
	overflow: hidden;
	.title {
		font-size: 28rpx;
		height: 40rpx;
		font-weight: 400;
		margin: 40rpx 0;
		color: #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.topic {
		height: 60rpx;
		border-radius: 16rpx;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		color: #999999;
		background: rgba(216, 216, 216, 0.59);
	}
	.cancel-main {
		padding: 0 20rpx;
		overflow: hidden;
		&-title {
			font-size: 24rpx;
			font-weight: 400;
			height: 34rpx;
			display: flex;
			align-items: center;
			margin: 40rpx 0;
			color: #999999;
		}
		&-list {
			.uni-list-cell {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 24rpx;
				color: #333333;
				height: 34rpx;
				margin: 40rpx 0;
				.radio_box {
					/deep/.uni-radio-input {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
		}
	}
	.cancel-foot {
		height: 80rpx;
		width: 100%;
		border-radius: 40rpx;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30rpx;
		background-color: #eeeeee;
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(255, 182, 14, 0.26);
		.cancel-btn {
			width: 50%;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			color: #ffffff;
		}
		.cancel-handleno {
			background-image: linear-gradient(to right, #ffa509, #ffd115);
		}
		.cancel-handleok {
			background-image: linear-gradient(to right, #fe983f, #fc7237);
		}
	}
}
.detail-item__title{
	display: flex;
	padding: 15rpx 38rpx 15rpx 27rpx;
	border-bottom: 1rpx solid #ececec;
}
</style>
