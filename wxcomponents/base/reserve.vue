<template>
	<uni-popup type="bottom" ref="reserve" @change="handleChange">
		<view class="container">
			<view class="title">
				{{title}}
			</view>
			<view class="notice" v-if="freeCount">
				<image class="notice-icon" :src="baseUrlImg + '/icon/notice-red.png'" mode="widthFix"></image>
				<view class="content">
					今日仅剩余<text class="count">{{freeCount}}</text>位免费设计名额
				</view>
			</view>
			<view class="form">
				<view class="form-item">
					<image class="form-item-icon" :src="baseUrlImg + '/icon/name.png'" mode="widthFix"></image>
					<input class="form-item-ipt" type="text" v-model="form.name" placeholder="请输入您的姓名" placeholder-class="pl_style" />
				</view>
				<view class="form-item">
					<image class="form-item-icon" :src="baseUrlImg + '/icon/mobile.png'" mode="widthFix"></image>
					<input class="form-item-ipt" maxlength="11" type="number" v-model="form.mobile" placeholder="请输入您的联系方式" placeholder-class="pl_style" />
				</view>
				<view class="form-item">
					<image class="form-item-icon" :src="baseUrlImg + '/icon/edit.png'" mode="widthFix"></image>
					<input class="form-item-ipt" type="text" v-model="form.remark" placeholder="请您简单叙述一下您的设计需求" placeholder-class="pl_style" />
				</view>
			</view>
			<view class="btn" @click="handleSubmit">
				提交
			</view>
		</view>
	</uni-popup>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '预约设计师'
		},
		isOpend: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			form: {
				name: '',
				mobile: '',
				remark: ''
			},
			freeCount: null,
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			let newTimer = new Date(new Date().toLocaleDateString()).getTime();
			const {timer = 0, count = 30} = uni.getStorageSync('freeLimited');
			// 存储当前零点时间戳
			if(timer !== newTimer) {
				this.freeCount = 30;
			} else {
				this.freeCount = count > 1 ? count - 1 : 1;
			}
			uni.setStorageSync('freeLimited',{timer: newTimer, count: this.freeCount})
		},
		handleChange(event) {
			if(!event.show) this.$emit('cancle')
		},
		handleSubmit() {
			const { name, mobile } = this.form;
			if(!name || !mobile) {
				uni.showToast({
					title: '请您完善填写内容~',
					icon: 'none'
				})
				return;
			}
			this.$emit('success', this.form);
		}
	},
	watch: {
		isOpend: {
			handler() {
				if(this.isOpend) {
					this.$refs.reserve.open();
				} else {
					this.$refs.reserve.close();
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
$baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image';

image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
/deep/.pl_style {
	font-size: 32rpx;
	color: #999999;
	line-height: 44rpx;
}

.container {
	border-radius: 32rpx 32rpx 0 0;
	padding: 48rpx 60rpx;
	background-color: #fff;
	box-sizing: border-box;
	.title {
		font-size: 32rpx;
		text-align: center;
		font-weight: 700;
	}
	.form {
		&-item {
			display: flex;
			height: 44rpx;
			padding: 46rpx 24rpx 12rpx;
			border-bottom: 1rpx solid #E3E3E3;
			&-icon {
				width: 44rpx;
				margin-right: 24rpx;
			}
			&-ipt {
				flex: 1;
				overflow: hidden;
				font-size: 32rpx;
				color: #333333;
				line-height: 44rpx;
			}
		}
	}
	.btn {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 64rpx auto 0;
		width: 522rpx;
		height: 96rpx;
		background: $themeColor;
		border-radius: 49rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 1rpx;
		overflow: hidden;
		&::after {
			position: absolute;
			content: "";
			width: 74rpx;
			height: 74rpx;
			top: 0;
			right: 0;
			background-image: url($baseUrlImg + '/icon/xianliang.png');
			background-size: 74rpx 74rpx;
		}
	}
}

	
.notice {
	display: flex;
	align-items: center;
	padding: 0 32rpx;
	width: 100%;
	height: 66rpx;
	background: #FEE4E4;
	box-shadow: 0 4rpx 12rpx 0 rgba(204, 157, 157, 0.23);
	border-radius: 33rpx;
	box-sizing: border-box;
	margin-top: 32rpx;
	&-icon {
		width: 38rpx;
		margin-right: 24rpx;
	}
	.content {
		font-size: 28rpx;
		.count {
			color: #FF5000;
			font-size: 36rpx;
		}
	}
}
</style>
