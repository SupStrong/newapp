<template>
	<view
		class="sp-checkbox__wrap"
		:class="[isChecked ? 'sp-checkbox__checked' : '']"
		@click="handleClick"
	  >
		<view
		  class='sp-checkbox'
		  :style="{'background':isChecked ? Colors.shopCurrent.data[0].primary : ''}"
		>
		  <view class='at-icon at-icon-check'></view>
		</view>
		<view class='sp-checkbox__label'><slot></slot></view>
	  </view>
</template>

<script>
	
import { mapState, mapMutations } from 'vuex';
import SpCell from '@/wxcomponents/goods/sp-cell.vue';
export default {
	data() {
		return {
			isChecked:true
		};
	},
	props: {
		checked: false,
		disabled: false,
	},
	onShow() {},
	components: {
		SpCell
	},
	computed: {
		...mapState(['Colors']),
	},
	watch: {
		checked: {
			handler: function(type) {
				this.isChecked = type;
			},
			immediate: true
		}
	},
	methods: {
	   handleClick() {
	      if (this.disabled) return
		  const checked = !this.isChecked
		  this.isChecked = checked;
		  this.$emit('change',this.isChecked)
	    }
	},
	// watch:{
		
	// }
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
@import '@/static/css/common/iconfont.scss';

$checkbox-size: 32rpx;

.sp-checkbox {
  background: #c6c6c6;
  // border: 1rpx solid $color-border-gray;
  border-radius: $checkbox-size;
  width: $checkbox-size;
  height: $checkbox-size;
  line-height: $checkbox-size;
  text-align: center;
  transition: all .1s ease-in;
  color: #fff;
  margin-right: 12rpx;
  display: inline-block;
  &__wrap {
    display: inline-block;
    line-height: 1;
  }
  &__text {
    display: inline-block;
    vertical-align: middle;
  }
  &__label{
    display: inline-block;
  }
  .at-icon {
    // opacity: 1;
    transform: scale(0.96);
    transition: all .1s ease-in;
    font-size: 20rpx;
    margin-top: -4rpx;
  }
}

.sp-checkbox__checked {
  .sp-checkbox {
    // border-color: $color-brand-primary;
  }
  .at-icon {
    // opacity: 1;
    // transform: scale(1);
  }
}
</style>
