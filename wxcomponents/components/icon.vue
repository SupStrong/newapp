<template>
	<view>
	  <view class="specification">
		<view class="div1">规格</view>
		<view class="div2" v-for="(item,index) in goodsData" :key="index"
		  v-if="index < 3">
		  <view class="iconfont at-icon-settings" v-if="index == 0"></view>
		  <view class="iconfont at-icon-settings" v-if="index == 1"></view>
		  <view class="iconfont at-icon-settings " v-if="index == 2"></view>
		  <view class="key G-one-cloum">{{item.key}}</view>
		  <view class="value G-one-cloum">{{item.value}}</view>
		</view>
	  </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goodsData:[
				{
					key:'品牌',
					value:'测试'
				},{
					key:'品牌',
					value:'测试'
				},{
					key:'品牌',
					value:'测试'
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
.specification{
  display: flex;
  align-items: center;
  height: 168rpx;
  border-top:2rpx solid #EEEEEE;
  padding-right:30rpx;
  background: #ffffff;
  .div1{
    width: 120rpx;
    text-align: center;
    font-size: 28rpx;
    font-weight: bold;
    color: #333333;
    line-height: 40rpx;
  }
  .div2{
    width: 200rpx;
    text-align: center;
  }
  .iconfont{
    color:#999
  }
  .key,.value{
    width: 180rpx;
    color: #333333;
    margin: 0 auto;
  }
  .key{
    font-size: 24rpx;
    font-weight: bold;
    line-height: 34rpx;
    margin-top:10rpx;
  }
  .value{
    font-size: 20rpx;
    line-height: 28rpx;
    margin-top:4rpx;
  }
}
</style>
