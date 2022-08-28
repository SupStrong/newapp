<template>
	<view class="coupon_item" :class="[
		{'disabled_item': disabledStatus}
	]">
		<view class="main">
			<view class="rule_box">
				<view class="iden" v-if="coupon.type == 5">
					<text class="iden-text">支付宝用户</text>
				</view>
				<view class="price">
					<text class="price-icon">¥</text> {{ coupon.discount }}
				</view>
				<view class="condition">
					满{{ coupon.max_discount }}可用
				</view>
			</view>
			<view class="base_box">
				<view class="upper">
					<view class="tag" v-if="coupon.scope_name">
						{{ coupon.scope_name || '' }}
					</view>
					<text>{{ coupon.name }}</text>
				</view>
				<view class="time">
					有效期至{{ coupon.over_date && coupon.over_date.slice(0, 10) || '' }}
				</view>
				<view class="need_jifen" v-if="exchangeType === 'integrale'">
					需
					<image class="jifen" :src="baseUrlImg + '/coupon/jifen.png'" mode="widthFix"></image>
					100蜂蜜
				</view>
				<view class="watch_rule" @click.stop.prevent="watchRules" v-if="exchangeType !== 'integrale' && hideElementFn('rule')">
					查看使用规则
					<image class="watch_rule-btn" :class="[{'show_rules': showRules}]" src="https://vue-oss.juranguanjia.com/weapp/applet/image/common/right-circle.png" mode="widthFix"></image>
				</view>
				<!-- 操作组 -->
				<template v-if="hideElementFn('btn')">
					<view class="btn btn_over" v-if="disabledStatus">
						{{coupon.status_name}}
					</view>
					<view class="btn btn_receive" v-else-if="btnType === 'receive'" @click="_onBtnClick">
						立即领取
					</view>
					<view class="btn btn_use" v-else-if="btnType === 'toUse'" @click="_onBtnClick">
						立即使用
					</view>
				</template>
			</view>
		</view>
		<view class="rules" v-if="showRules">
			<text>
				{{ coupon.coupon_info }}
			</text>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	/**
	 * CouponItem 优惠券item
	 * @description 用于展示优惠券列表
	 * @property {Object} coupon 优惠券信息
	 * @property {Array} hideElement 动态隐藏元素  --rule(规则) | btn(操作按钮)
	 * @property {String} btnType 按钮类型  --receive(领取) | toUse(去使用)
	 * @property {String} exchangeType 兑换优惠券类型  --free(免费) | integrale(积分)
	 * @event {Function} click 点击 操作按钮 触发事件
	 */
	export default {
		name: 'CouponItem',
		props: {
			coupon: {
				type: Object,
				default: () => {
					return {
						type: 5,
						in_spu: '',
						name: '测试',
						over_date: '2022-07-19',
						discount: '10',
						max_discount: '100'
					}
				}
			},
			hideElement: {
				type: Array,
				default: () => {
					return []
				}
			},
			btnType: {
				type: String,
				default: 'receive'
			},
			exchangeType: {
				type: String,
				default: 'free'
			}
		},
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
				showRules: false
			}
		},
		computed: {
			...mapGetters(['position', 'baseInfo']),
			disabledStatus() {
				const { status_name } = this.coupon || {};
				return ['已抢光', '已领取', '已作废', '已使用'].includes(status_name)
			}
		},
		methods: {
			watchRules() {
				// 展示使用规则
				this.showRules = !this.showRules;
			},
			hideElementFn(element) {
				// 如果需要隐藏返回false,否则返回true
				const hideElement = this.hideElement;
				if(hideElement.length) {
					return !hideElement.includes(element)
				}
				return true;
			},
			_onBtnClick() {
				const { btnType, exchangeType } = this;
				const data = {
					...this.coupon,
					btnType,
					exchangeType,
				}
				this.$emit('btnClick', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		display: block;
		height: auto;
		background-size: 100%;
	}
	.coupon_item {
		width: 100%;
		.main {
			position: relative;
			display: flex;
			height: 190rpx;
			border-radius: 16rpx;
			background: #FFFFFF;
			z-index: 1;
			.rule_box {
				position: relative;
				width: 190rpx;
				height: 190rpx;
				text-align: center;
				border-radius: 16rpx;
				background: linear-gradient(180deg, #7CBEF6 0%, #1E64D6 100%);
				.iden {
					position: absolute;
					height: 26rpx;
					padding: 0 12rpx;
					font-size: 18rpx;
					font-weight: 300;
					color: #FFFFFF;
					line-height: 26rpx;
					background: linear-gradient(270deg, #365979 0%, #192D44 100%);
					border-radius: 12rpx 0 12rpx 0;
					// #ifdef H5
					&-text {
						display: block;
						transform: scale(0.8);
					}
					// #endif
				}
				.price {
					height: 80rpx;
					padding-top: 40rpx;
					font-size: 56rpx;
					font-weight: 600;
					color: #FFFFFF;
					line-height: 80rpx;
					&-icon {
						font-size: 30rpx;
						font-weight: 400;
					}
				}
				.condition {
					height: 32rpx;
					font-size: 22rpx;
					color: #FFFFFF;
					font-weight: 300;
					line-height: 32rpx;
				}
			}
		
			.base_box {
				flex: 1;
				padding: 16rpx 24rpx 16rpx 16rpx;
				.upper {
					height: 80rpx;
					font-size: 28rpx;
					font-weight: 500;
					line-height: 40rpx;
					.tag {
						display: inline-block;
						height: 32rpx;
						margin-right: 16rpx;
						padding: 0 16rpx;
						background: #0060E5;
						border-radius: 16rpx;
						font-size: 20rpx;
						color: #FFFFFF;
						line-height: 32rpx;
					}
				}
				.time {
					height: 28rpx;
					margin-top: 18rpx;
					font-size: 20rpx;
					color: #666666;
					line-height: 28rpx;
					// #ifdef H5
					transform: scale(0.83);
					transform-origin: left;
					// #endif
				}
				.watch_rule, .need_jifen {
					display: flex;
					align-items: center;
					height: 28rpx;
					margin-top: 4rpx;
					font-size: 20rpx;
					color: #999999;
					line-height: 28rpx;
					// #ifdef H5
					transform: scale(0.83);
					transform-origin: left;
					// #endif
					&-btn {
						width: 18rpx;
						margin-left: 8rpx;
						// #ifdef H5
						width: 21.6rpx;
						// #endif
					}
					.jifen {
						width: 24rpx;
					}
					.show_rules {
						transform: rotate(90deg);
					}
				}
			}
		
			.btn {
				position: absolute;
				right: 24rpx;
				bottom: 16rpx;
				width: 112rpx;
				height: 40rpx;
				border-radius: 20rpx;
				border: 2rpx solid #0060E5;
				box-sizing: border-box;
				font-size: 22rpx;
				line-height: 36rpx;
				text-align: center;
			}
			.btn_use {
				background: #0060E5;
				color: #FFFFFF;
			}
			.btn_receive {
				color: #1E64D6;
			}
			.btn_over {
				color: #A0A7B2;
				border: 2rpx solid #A0A7B2;
			}
			
			.radio {
				position: absolute;
				right: 24rpx;
				bottom: 16rpx;
				transform: scale(0.9);
			}
		}
	
		.rules {
			padding: 50rpx 22rpx 16rpx;
			margin-top: -16rpx;
			background: #F4F4F4;
			border-radius: 16rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #BDBDBD;
			line-height: 32rpx;
		}
	}

	.disabled_item {
		filter: grayscale(1);
	}
</style>