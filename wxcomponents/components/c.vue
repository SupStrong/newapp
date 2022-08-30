<template>
	<view>
		    <view class="single-box">
		      <view class="more fl-row-left">
		         <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/box/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconmanghe color12"></i
		          ></text>
		          <p class="fl-row-center">盲盒</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/vouchers/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconhuodongyouhuiquan color2"></i
		          ></text>
		          <p class="fl-row-center">活动优惠券</p>
		        </view>
		        <view class="fl-column-center box" @click="openProgram('service')">
		          <text class="fl-column-center"
		            ><i class="iconfont iconyouhuiquan color4"></i
		          ></text>
		          <p class="fl-row-center">服务优惠券</p>
		        </view>
		        <view class="fl-column-center box" @click="openProgram('supervisor')">
		          <text class="fl-column-center"
		            ><i class="iconfont iconjianliyouhuiquan color5"></i
		          ></text>
		          <p class="fl-row-center">监理优惠券</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/cash/list/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconfanxian color1"></i
		          ></text>
		          <p class="fl-row-center">返现</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/promote/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconyouhui color2"></i
		          ></text>
		          <p class="fl-row-center">优惠</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/activity/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconhuodong1 color3"></i
		          ></text>
		          <p class="fl-row-center">活动</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/my-house/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconfangwu color7"></i
		          ></text>
		          <p class="fl-row-center">房屋</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/vip-card/list/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconhuiyuan color9"></i
		          ></text>
		          <p class="fl-row-center">会员</p>
		        </view>
		        <view
		          class="fl-column-center box"
		          @click="setRouter('/pages/dashboard/collection/main')"
		        >
		          <text class="fl-column-center"
		            ><i class="iconfont iconshoucang color10"></i
		          ></text>
		          <p class="fl-row-center">收藏</p>
		        </view>
		        <!-- <view class="fl-column-center box" @click="setRouter('/pages/saled/list/main')">
		          <text class="fl-column-center"><i class="iconfont iconshouhou color11"></i></text>
		          <p class="fl-row-center">售后</p>
		        </view> -->
		      </view>
		    </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.single-box {
	  width: 750rpx;
	  padding-bottom: 40rpx;
	  background: #fff;
	  .more {
	    padding-bottom: 2rpx;
	    width: 100%;
	    .box {
	      width: 188rpx;
	      height: 188rpx;
	      border-right: 2rpx solid #FFF3E0;
	      border-bottom: 2rpx solid #FFF3E0;
	      background: #fff;
		  box-sizing: border-box;
	      &:nth-child(4n) {
	        border-right: 0;
	        width: 186rpx;
	      }
	      span {
	        margin-bottom: 20rpx;
	        i {
	          font-size: 44rpx;
	          width: 66rpx;
	          text-align: center;
	        }
	        .iconhuodongyouhuiquan {
	          font-size: 36rpx;
	          margin-top: 10rpx;
	        }
	        .iconyouhuiquan {
	          margin-top: 10rpx;
	        }
	      }
	      p {
	        font-size: 24rpx;
	        color: #333;
	      }
	    }
	  }
	}
</style>
