<template>
	<view class='card-index'>
		<view class='card-con'>
		  <view class='bottom-cover' >
			<view class='swiperview'>
			  <view class='title G-Fsize-14'>{{bottomTit}}</view>
			</view>
			<view class='sign G-Fsize-12'>滑动换一个</view>
			<view class='btn G-Fsize-14'>回答问题</view>
		  </view>
		  <view
		   :class="['top-cover',{'come' :  come}, {'bye' : 'bye'},{'trans' : trans}]"
			:style="{
				'transform':'translateX(' + xTrans + 'px)'	
			}"
			@touchstart='getCurrentPlace'
			@touchmove='changePlace'
			@touchend='removePlace'
		  >
			<view class='swiperview'>
			  <view v-for="(item,index) of listData" class='title G-Fsize-14'>{{item.title}}</view>
			</view>
			<view class='sign G-Fsize-12'>滑动换一个</view>
		  </view>
		</view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
			    bye: false,
			    come: false,
			    trans: true,
				startX:'',
				xTrans:0,
				listData:[
					{
						id: 1711,
						title: "木地板怎么装修才不会发霉"
					},{
						id: 1711,
						title: "木地板怎么装修才不会发霉"
					}
				]
			}
		},
		methods:{
			  getCurrentPlace(event) {
				  this.startX = event.touches[0].clientX;
			      this.bye = false,
			      this.come = false,
			      this.trans = true
			  },
			    changePlace(event) {
			       this.xTrans = event.touches[0].clientX - this.startX
			    },
				  removePlace(e) {
				    e.preventDefault()
				    if (Math.abs(this.xTrans) > 90) {
				      this. bye = true,
				      setTimeout(() => {
						this.come = true,
						this.trans = false,
						this.xTrans = 0
				        this.cutQuestion()
				      }, 80);
				    } else {
				      this.xTrans = 0
				    }
				  }
		}
	}
</script>
<style lang="scss" scoped>
	.question-enter {
	  margin: 0 auto;
	  width: 345px;
	  background-color: #fff;
	  border-radius: 8px;
	  padding-bottom: 15px;
	  .enter {
	    padding: 15px 15px;
	    .iconwenti {
	      width: 16px;
	      height: 15px;
	      line-height: 15px;
	      text-align: center;
	    }
	    .tit {
	      line-height: 20px;
	      margin-left: 11px;
	    }
	    .door {
	      line-height: 17px;
	      margin-right: 5px;
	      color: #a7adb6;
	    }
	    .iconarrow-right {
	      width: 6px;
	      height: 10px;
	      line-height: 10px;
	      text-align: center;
	    }
	  }
	}
	.card-index {
	  position: relative;
	
	  height: 120px;
	}
	.card-con {
	  position: absolute;
	  width: 315px;
	  height: 120px;
	  top: 0;
	  left: 50%;
	  transform: translateX(-50%);
	  .top-cover,
	  .bottom-cover {
	    width: 315px;
	    height: 110px;
	    background: #ffffff;
	    border: 1px solid #f1f3f8;
	    border-radius: 8px;
	    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.04);
	    position: absolute;
	    .swiperview {
	      width: 285px;
	      height: 100px;
	      margin: 15px 15px 0;
	      .title {
	        width: 285px;
	        height: 40px;
	        line-height: 20px;
	        display: -webkit-box;
	        -webkit-box-orient: vertical;
	        -webkit-line-clamp: 2;
	        overflow: hidden;
	      }
	    }
	    .sign {
	      color: #a7adb6;
	      line-height: 17px;
	      position: absolute;
	      z-index: 99;
	      bottom: 20px;
	      left: 15px;
	    }
	    .btn {
	      width: 72px;
	      height: 28px;
	      background: #0000af;
	      border-radius: 4px;
	      line-height: 28px;
	      text-align: center;
	      position: absolute;
	      right: 15px;
	      bottom: 15px;
	      color: #fff;
	    }
	  }
	  .top-cover {
	    bottom: 10px;
	    z-index: 2;
	    &.bye {
	      animation: opacity 120ms linear;
	    }
	    &.come {
	      transform-origin: 50% 100%;
	      animation: transform 120ms linear;
	    }
	    &.trans {
	      transition: 60ms transform linear;
	      // transition: 400ms transform linear;
	    }
	  }
	  .bottom-cover {
	    transform-origin: 50% 100%;
	    transform: scale(0.9);
	    bottom: 0;
	  }
	}
	@keyframes opacity {
	  0% {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	    transform: translateX(1000px) !important;
	  }
	}
	@keyframes transform {
	  0% {
	    transform: scale(0.9);
	    bottom: 0;
	  }
	  100% {
	    transform: scale(1);
	    bottom: 10px;
	  }
	}
</style>
