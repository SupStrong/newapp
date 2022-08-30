<template>
	<view>
		<view class="give" v-if="aDetails.is_gift">
			<view class="title">领取签到礼</view>
			<view class="gift-width">
				<view class="picture" @click="aDetails.coupon_type ? '' : previewImage">
					<image v-if="aDetails.gift_img" class="img" :src="aDetails.gift_img"></image>
					<view v-if="!aDetails.gift_img" class="img iconfont iconfuwuyouhuiquan"></view>
				</view>
				<view class="process">
					<view class="text">报名活动到店就送</view>
					<view class="name">{{aDetails.gift_name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			aDetails:{
				is_gift:true,
				gift_img:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
				gift_name:'测试'
			}
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.give {
	  width: 100%;
	  background: #fff;
	  padding: 30rpx;
	  margin-bottom: 10rpx;
	  box-sizing: border-box;
	  .title {
	    font-size: 36rpx;
	    font-weight: bold;
	    line-height: 50rpx;
	  }
	  .gift-width {
	    display: flex;
	    width: 100%;
	    height: 100%;
	    background: #fef0e9;
	    margin-top: 30rpx;
	    border-radius: 8rpx;
	    padding: 30rpx;
		box-sizing: border-box;
	  }
	  .picture {
	    width: 120rpx;
	    height: 120rpx;
	    .img {
	      width: 100%;
	      height: 100%;
	      border-radius: 8rpx;
	    }
	    .iconfont {
	      display: flex;
	      align-items: center;
	      justify-content: center;
	      color: #fff;
	      font-size: 36rpx;
	      border-radius: 8rpx;
	      background: #f5945c;
	    }
	  }
	  .process {
	    flex: 2;
	    padding: 0 0 0 20rpx;
	    .text {
	      width: 216rpx;
	      height: 36rpx;
	      background: #fef0e9;
	      border: 2rpx solid #f36e20;
	      border-radius: 18rpx 18rpx 18rpx 0px;
	      font-size: 24rpx;
	      color: #f36e20;
	      line-height: 36rpx;
	      text-align: center;
	      margin-top: 10rpx;
	    }
	    .name {
	      width: 450rpx;
	      font-size: 28rpx;
	      font-weight: bold;
	      color: #333333;
	      line-height: 40rpx;
	      margin-top: 24rpx;
	    }
	  }
	}
</style>
