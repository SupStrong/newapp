<template>
	<view class="at-float-layout" v-if="isOpened" :class="isOpened ? 'at-float-layout--active' : ''">
		<view class="at-float-layout__overlay">
			<view class="at-float-layout__container layout">
				<view class="layout-body">
					<view class="payment-picker">
						<view class="payment-picker__hd">
							<text>支付方式</text>
							<view class="at-icon at-icon-close" @click="handleCancel"></view>
						</view>
						<view class="payment-picker__bd">
							<view v-if="isShowPoint" class="payment-item" :class="disabledPayment && disabledPayment['point'] ? 'is-disabled' : ''" @click="handlePaymentChange('point')">
								<view class="payment-item__bd">
									<text class="payment-item__title">积分支付</text>
									<text class="payment-item__desc">{{ disabledPayment && disabledPayment['point'] ? disabledPayment['point'] : '使用积分支付' }}</text>
								</view>
								<view class="payment-item__ft">
									<SpCheckbox :disabled="disabledPayment && !!disabledPayment['point']" :colors="colors" :checked="localType == 'point'"></SpCheckbox>
								</view>
							</view>
							<!-- <view v-if="isShowBalance" class="payment-item" :class="disabledPayment && disabledPayment['deposit'] ? 'is-disabled' : ''" @click="handlePaymentChange('deposit')">
								<view class="payment-item__bd">
									<text class="payment-item__title">余额支付</text>
									<text class="payment-item__desc">{{ disabledPayment && disabledPayment['deposit'] ? disabledPayment['deposit'] : '使用余额支付' }}</text>
								</view>
								<view class="payment-item__ft">
									<SpCheckbox :disabled="disabledPayment && !!disabledPayment['deposit']" :colors="colors" :checked="localType == 'deposit'"></SpCheckbox>
								</view>
							</view> -->
							<view
								v-if="isShowDelivery"
								class="payment-item"
								:class="disabledPayment && disabledPayment['delivery'] ? 'is-disabled' : ''"
								@click="handlePaymentChange('delivery')"
							>
								<view class="payment-item__bd">
									<text class="payment-item__title">货到付款</text>
									<text class="payment-item__desc">{{ disabledPayment && disabledPayment['delivery'] ? disabledPayment.message : '货到付款' }}</text>
								</view>
								<view class="payment-item__ft">
									<SpCheckbox :disabled="disabledPayment && !!disabledPayment['delivery']" :colors="colors" :checked="localType == 'delivery'"></SpCheckbox>
								</view>
							</view>
					
							<view v-for="(item, index) in typeList" :key="index" class="payment-item no-border" @click="handlePaymentChange(item.pay_type_code)">
								<view class="payment-item__bd">
									<text class="payment-item__title">{{ item.pay_type_name }}</text>
									<text class="payment-item__desc">使用{{ item.pay_type_name }}</text>
								</view>
								<view class="payment-item__ft"><SpCheckbox :checked="localType == item.pay_type_code"></SpCheckbox></view>
							</view>
						</view>
						<Button
							type="primary"
							class="btn-submit"
							:style="{ background: Colors.shopCurrent.data[0].primary, 'border-color': Colors.shopCurrent.data[0].primary }"
							:loading="loading"
							@click="handleChange(localType)"
						>
							确定
						</Button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { getTradePaymentList } from '@/api/modules/shops.js';
import  SpCheckbox from './checkbox';
export default {
	data() {
		return {
			localType: '',
			typeList: [
				{pay_type_code: "wxpay", pay_type_name: "微信支付"},
				{pay_type_code: "alipay", pay_type_name: "支付宝支付"},
			]
		};
	},
	props: {
		isOpened: false,
		type: '',
		disabledPayment: null,
		isShowPoint:true,
		isShowBalance:true,
		isShowDelivery:true
	},
	mounted() {
	},
	onShow() {},
	computed: {
		...mapState(['Colors'])
	},
	components: {
		SpCheckbox
	},
	methods: {
		handleCancel() {
			this.localType = this.type;
			this.$emit('close');
		},

		handlePaymentChange(type) {
			if (this.disabledPayment && this.disabledPayment[type]) return;
			this.localType = type;
		},
		handleChange(type) {
			this.$emit('change',type);
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
@import '@/static/css/common/iconfont.scss';
.payment-picker {
	&__hd {
		background: #fff;
		height: 95rrpx;
		line-height: 95rpx;
		font-size: $font-size-large;
		padding: 0 40rpx;
		position: relative;
		font-weight: bold;
		@include hairline();
		.at-icon-close {
			font-size: 30rpx;
			color: #555;
			position: absolute;
			right: 20rpx;
			top: 50%;
			margin-top: -15rpx;
		}
	}
	&__bd {
		height: auto;
		padding: 30rpx 0;
	}
	.payment-item {
		display: flex;
		align-items: center;
		align-content: center;
		padding: 28rpx 0;
		margin: 0 40rpx;
		@include hairline();
		&.no-border {
			&:after {
				border: none;
			}
		}
		&.is-disabled {
			opacity: 0.6;
		}
		&__bd {
			flex: 1;
		}
		&__ft {
		}
		&__title {
			display: block;
			font-weight: bold;
			margin: 0 0 20rpx;
			line-height: 1;
		}
		&__desc {
			line-height: 1;
		}
	}
	.btn-submit {
		width: 100%;
		border-radius: 0;
		&::after {
			content: none;
		}
	}
}
.at-float-layout {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  z-index: 810;
  -webkit-transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  -o-transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  /* elements */
  /* modifiers */
}
.at-float-layout__overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: opacity 150ms ease-in;
  -o-transition: opacity 150ms ease-in;
  transition: opacity 150ms ease-in;
}
.at-float-layout__container {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #FFF;
  -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  transition: -webkit-transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  -o-transition: transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  transition: transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
  transition: transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
}
.at-float-layout .layout-header {
  position: relative;
  padding: 18rpx;
  line-height: 1.5;
  background-color: #F7F7F7;
}
.at-float-layout .layout-header__title {
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-size: 32rpx;
  display: block;
  padding-right: 80rpx;
}
.at-float-layout .layout-header__btn-close {
  position: absolute;
  padding: 10rpx;
  top: 50%;
  right: 18rpx;
  width: 40rpx;
  height: 100%;
  line-height: 1;
  -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
          transform: translate(0, -50%);
}
.at-float-layout .layout-header__btn-close::before, .at-float-layout .layout-header__btn-close::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 36rpx;
  height: 2PX;
  border-radius: 1PX;
  background: #CCC;
}
.at-float-layout .layout-header__btn-close::before {
  -webkit-transform: translate3d(-50%, -50%, 0) rotate(45deg);
          transform: translate3d(-50%, -50%, 0) rotate(45deg);
}
.at-float-layout .layout-header__btn-close::after {
  -webkit-transform: translate3d(-50%, -50%, 0) rotate(-45deg);
          transform: translate3d(-50%, -50%, 0) rotate(-45deg);
}
.at-float-layout .layout-body {
  font-size: 28rpx;
  // max-height: 828rpx;
  // min-height: 514rpx;
}
.at-float-layout .layout-body__content {
  // max-height: 798rpx;
  // min-height: 484rpx;
}
.at-float-layout--active {
  visibility: visible;
}
.at-float-layout--active .at-float-layout__overlay {
  opacity: 1;
}
.at-float-layout--active .at-float-layout__container {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
</style>
