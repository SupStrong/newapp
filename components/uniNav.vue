<template>
	<view class="nav">
		<view class="status_bar" :style="{'background':bgc}">
			<!-- 状态栏展位 -->
		</view>
		<view class="nav-box" :style="{'background':bgc}">
			<view class="left" v-if="isShowLeft" @click="clickLeft">
				<uni-icons :color="col" type="arrowleft"/>
			</view>
			<view class="center">
				<text :style="{'color':col}">{{title}}</text>
			</view>
			<view class="right" @click="clickRight">
				<text>{{rightText}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			isShowLeft:{
				type: Boolean,
				default: true
			},
			title:{
				type: String,
				default: '默认标题'
			},
			rightText:{
				type: String,
				default: ""
			},
			col:{
			type: String,
				default: "black"	
			},
			bgc:{
				type: String,
				default: ""	
			}
		},
		methods:{
			clickLeft(evt){
				this.$emit('clickLeft',evt)
			},
			clickRight(evt) {
				this.$emit('clickRight',evt)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.status_bar{
		 height: var(--status-bar-height);
		 width: 100%;
	}
	.nav{
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		right: 0;
	}
	.nav-box{
		padding: 0 32rpx;
		height: 100rpx;
		display: flex;
		// background-image: url(../static/image/common/login-bg.png);
		// background-size: 100% auto;
		justify-content: space-between;
		align-items: center;
		.left{
			font-weight: 700;
			font-size: 36rpx;
		}
		.right{
			font-size: 28rpx;
			color: #333333;
		}
		.center{
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			font-weight: 700;
			color: #333333;
		}
	}
	// .nav{
	// 	background-color: #F7F8FA;
	// 	background-image: url(../static/image/common/login-bg.png);
	// 	background-size: 100%;
	// }
</style>
