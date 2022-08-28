<template>
	<view class="sp-cell" :class="[isLink ? 'sp-cell__is-link' : '', border ?'sp-cell__no-border' : '',className]" @click="handleClick">
		<image v-if="img" class="sp-cell__icon" :src="img" mode="aspectFit" />
		<view v-if="icon" class="sp-cell__icon" :class="[iconPrefix ? iconPrefix + ' ' + iconPrefix + '-' + icon : 'at-icon at-icon-' + icon]"></view>
		<view class="sp-cell__hd">
			<text v-if="title" class="sp-cell__title">{{ title }}</text>
		</view>
		<view class="sp-cell__bd">
			<slot></slot>
		</view>
		<view class="sp-cell__ft">
			<view v-if="value" class="sp-cell__value">{{ value }}</view>
		</view>
		<view class="sp-cell__ft-icon at-icon" :class="[`at-icon-chevron-${arrow}`]" v-if="isLink"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	props: {
		isLink: {
			type: Boolean,
			default: false
		},
		value: {
			type: String,
			default: ''
		},
		border: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: ''
		},
		arrow: {
			type: String,
			default: 'right'
		},
		className:{
			type: String,
			default: ''
		}
	},
	methods: {
		handleClick(){
			this.$emit('click') 
		},
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
@import '@/static/css/common/iconfont.scss';
.sp-cell {
  background: #fff;
  display: flex;
  padding: 24rpx 30rpx;
  align-items: center;
  @include hairline($color-border-gray-light, 75rpx, bottom);
  color: $color-primary-text;
  &__no-border {
    &:before {
      border: none;
    }
  }
  &__bd {
    flex: 1;
	font-size: 28rpx;
  }
  &__ft {
    color: $font-size-small;
    color: $color-gray-light;
    &-icon {
      font-size: 40rpx;
      color: rgba($color-gray-light, 0.8);
      margin-right: -8rpx;
    }
  }
  &__icon {
    display: block;
    width: 45rpx;
    height: 45rpx;
    color: rgba($color-gray-light, 0.8);
    font-size: 40rpx;
    margin-right: 8rpx;
    margin-left: -8rpx;
  }
}
.sp-cell__title{
	font-size: 28rpx;
	// color: #818181;
}
.sp-cell__value{
	font-size: 28rpx;
	color: #333;
}
</style>
