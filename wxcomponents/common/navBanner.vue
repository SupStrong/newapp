<template>
	<view class="qaconfigBox boxMargin">
		
		<view
			@tap="parseEventDynamicCode(info.firstAnswer ? '' : 'jumpToConfigList')"
			:class="'card-box ' + (hideAnimation ? 'fadeIn' : '') + ' ptp_exposure'"
			data-ptpid="6ce3-1ffd-a500-c118"
		>
			<image lazyLoad class="qaTopImg" src="https://oss-img.qtshe.com/zlh-qaImageNew.png"></image>
			<view class="qaTitle cardpdleft" :style="info.title.length > 20 ? 'font-size:30rpx' : ''">{{ info.title }}</view>
			<view
				class="top-ques-box ellipsis cardpdleft"
				:style="'width:80%;padding-right:10rpx;' + (alreadyAns ? 'flex-direction:column;margin-bottom:12rpx;' : 'flex-direction:row;')"
			>
				<view class="optionsTitleWidth" style="display: flex; justify-content: space-between" v-if="alreadyAns">
					<view class="percentText" v-for="(item, index) in percentageData" :key="item.content">
						<view class="point textWidth" :style="index === 0 ? 'color: #FCFF00;' : 'color: #00FF95;'">
							<block v-if="item.show">
								<image lazyLoad class="textWidth-image" src="https://qiniu-image.qtshe.com/featured/selected.png"></image>
								<view style="margin-right: 6rpx; display: inline">已选</view>
							</block>
							<view class="ellipsis optionsWidth">{{ item.content }}</view>
							<text class="textWidth-text">{{ item.percentage }}%</text>
						</view>
					</view>
				</view>
				<view class="progressItem" v-if="alreadyAns">
					<view class="progressLeft" :style="'width:' + progressLeftWidth + '%;'"></view>
					<view class="progressRight" :style="'width:' + progressRightWidth + '%;'"></view>
				</view>
				<block v-else>
					<view
						@tap.stop.prevent="parseEventDynamicCode(info.firstAnswer ? 'chooseOption' : 'jumpToConfigList')"
						:class="'item ' + (index === 1 ? 'round-connerRight' : 'round-conner') + ' ptp_exposure'"
						:data-businessId="item.id"
						:data-businessType="10"
						:data-index="index"
						data-ptpid="2328-1ac1-ac4a-184a"
						v-for="(item, index) in info.optionList"
						:key="item.id"
					>
						<view class="item-text ellipsis">{{ item }}</view>
					</view>
				</block>
			</view>
			<view class="awardTag">
				答题获得
				<text class="awardTag-text">{{ info.score }}</text>
				青豆
			</view>
			<view class="card-bottom cardpdleft">
				<view class="num-box">
					<view class="num-if">
						<view class="image-list" v-if="info.headImgs.length">
							<image lazyLoad class="image-list-image" :src="item + '?imageView2/0/w/75'" v-for="(item, index) in info.headImgs" :key="index"></image>
						</view>
						<view class="num">{{ info.voterTurnout }}人参与</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			percentageData: [],
			progressLeftWidth: 0,
			progressRightWidth: 0,
			alreadyAns: false
		};
	},
	    props: {
	        info: {
	            type: Object,
	            default: () => ({})
	        },
	        hideAnimation: {
	            type: Boolean,
	            default: false
	        },
	        isLogin: {
	            type: Boolean,
	            default: false
	        }
	    },
	methods: {
	        loginSuccess: function () {
	            this.$emit('freshAllData');
	        },
	        countDown: function (t) {
	            var that = this;
	            a = setInterval(function () {
	                that.setData({
	                    progressLeftWidth: that.progressLeftWidth + 1
	                });
	
	                if (that.progressLeftWidth === t) {
	                    clearInterval(a);
	                }
	            }, 1000 / t);
	        },
	        countDownRight: function (t) {
	            var that = this;
	            n = setInterval(function () {
	                that.setData({
	                    progressRightWidth: that.progressRightWidth + 1
	                });
	
	                if (that.progressRightWidth === t) {
	                    clearInterval(n);
	                }
	            }, 1000 / t);
	        },
	        jumpToConfigList: function () {
	            if (app.globalData.userData.token) {
	                uni.navigateTo({
	                    url: '/qaconfig/index/index'
	                });
	            } else {
	                this.jumpToLogin();
	            }
	        },
	        chooseOption: function (a) {
	            var that = this;
	            uni.showLoading({
	                title: '提交中',
	                icon: 'none'
	            });
	            app.globalData
	                .ajax({
	                    url: '/activityCenter/answer/article/submit',
	                    data: {
	                        id: this.info.id,
	                        numOrders: a.currentTarget.dataset.index + 1,
	                        answerFrom: 1
	                    }
	                })
	                .then(function (t) {
	                    uni.hideLoading();
	
	                    if (t.success) {
	                        switch (t.data.result) {
	                            case 1:
	                                that.setData(
	                                    {
	                                        alreadyAns: true
	                                    },
	                                    function () {
	                                        that.getPersentDetail();
	                                        that.$emit('refreshData');
	                                    }
	                                );
	                                setTimeout(function () {
	                                    that.setData({
	                                        alreadyAns: false
	                                    });
	                                }, 2500);
	                                break;
	
	                            case 2:
	                            case 3:
	                                that.jumpToConfigList();
	                        }
	                    } else {
	                        e.toast(t.msg || '服务器错误，请稍后重试');
	                    }
	                })
	                .catch(function (t) {
	                    uni.hideLoading();
	                    e.toast(t.msg || '服务器错误，请稍后重试');
	                });
	        },
	        jumpToLogin: function () {
	            uni.navigateTo({
	                url: '/pages/login/login'
	            });
	        },
	        getPersentDetail: function () {
	            var that = this;
	            app.globalData
	                .ajax({
	                    url: '/activityCenter/answer/article/detail',
	                    data: {
	                        id: this.info.id
	                    }
	                })
	                .then(function (t) {
	                    if (t.success) {
	                        that.setData(
	                            {
	                                percentageData: t.data.optionList
	                            },
	                            function () {
	                                that.countDown(Math.floor(Number(t.data.optionList[0].percentage)));
	                                that.countDownRight(Math.floor(Number(t.data.optionList[1].percentage)));
	                            }
	                        );
	                    } else {
	                        e.toast(t.msg || '服务器错误，请稍后重试');
	                    }
	                })
	                .catch(function (t) {
	                    e.toast(t.msg || '服务器错误，请稍后重试');
	                });
	        }
	    }
};
</script>

<style lang="scss" scoped>
	.qaconfigBox {
	    height: 310rpx;
	    background: url('https://qiniu-image.qtshe.com/featured/qaconfigBackImg.png') no-repeat 0 0;
	    background-size: cover;
	    border-radius: 16rpx;
	    overflow: visible;
	}

.card-box {
	padding: 28rpx 0;
	position: relative;
	overflow: visible;
}

.cardpdleft {
	padding-left: 32rpx;
}

.qaTopImg {
	position: relative;
	left: 32rpx;
	width: 198rpx;
	height: 28rpx;
}

.login-mask {
	width: 686rpx;
	height: 300rpx;
	position: absolute;
	top: 5rpx;
	left: 5rpx;
	z-index: 999;
}

.qaTitle {
	margin-top: 28rpx;
	font-size: 32rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #fff;
}

.point {
	margin-bottom: 16rpx;
}

.percentText {
	display: flex;
	justify-content: space-between;
}

.optionsTitleWidth {
	width: 436rpx;
}

.card-box .top-ques-box {
	width: 436rpx;
	display: flex;
	margin-top: 25rpx;
	position: relative;
}

.optionsWidth {
	max-width: 100rpx;
}

.top-ques-box .item {
	flex: 1;
	position: relative;
	font-size: 28rpx;
	height: 72rpx;
	line-height: normal;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
}

.top-ques-box .item-text {
	max-width: 190rpx;
	line-height: normal;
}

.top-ques-box .item:nth-child(1) {
	background: url('https://qiniu-image.qtshe.com/featured/optionLeft.png') no-repeat 50%;
	background-size: contain;
	color: #000;
}

.top-ques-box .item:nth-child(2) {
	background: url('https://qiniu-image.qtshe.com/featured/optionRight.png') no-repeat 50%;
	background-size: contain;
	color: #000;
}

.card-bottom {
	position: relative;
	top: 15rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.card-top .card-bottom {
	padding: 26rpx 0 32rpx;
}

.image-list {
	overflow: hidden;
	margin-right: 12rpx;
}

.image-list-image {
	display: block;
	float: left;
	width: 48rpx;
	height: 48rpx;
	border-radius: 50%;
	border: 1rpx solid #fff;
	margin-left: -8rpx;
}

.image-list-image:nth-child(1) {
	margin-left: 0;
}

.num-if {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.num-if .num {
	color: #fff;
	font-size: 24rpx;
}

.awardTag {
	display: table-cell;
	vertical-align: bottom;
	justify-content: center;
	padding-left: 10rpx;
	font-size: 20rpx;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #000;
	height: 50rpx;
	line-height: 40rpx;
	width: 202rpx;
	position: absolute;
	right: -10rpx;
	top: 24rpx;
	background: url('https://qiniu-image.qtshe.com/featured/canGetAward.png') no-repeat;
	background-size: 202rpx 50rpx;
	text-align: center;
}

.awardTag,
.awardTag-text {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.awardTag-text {
	font-size: 32rpx;
	font-weight: 600;
	padding: 0 8rpx;
	line-height: 44rpx;
}

.textWidth-text {
	padding-left: 8rpx;
}

.textWidth-image {
	width: 24rpx;
	height: 24rpx;
	margin-right: 14rpx;
}

.textWidth {
	font-size: 24rpx;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: flex;
	align-items: center;
}

.progressLeft {
	height: 8rpx;
	background: #fcff00;
	border-radius: 4rpx 2rpx 2rpx 4rpx;
}

.progressItem {
	width: 440rpx;
	display: flex;
	justify-content: space-between;
}

.progressRight {
	height: 8rpx;
	background: #00ff95;
	border-radius: 2rpx 4rpx 4rpx 2rpx;
	margin-left: 10rpx;
}

.ellipsis {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

@-webkit-keyframes scaleButton {
	0% {
		transform: scale(1);
	}

	25% {
		transform: scale(1.06);
	}

	50% {
		transform: scale(1);
	}

	75% {
		transform: scale(1.02);
	}

	100% {
		transform: scale(1);
	}
}

@keyframes scaleButton {
	0% {
		transform: scale(1);
	}

	25% {
		transform: scale(1.06);
	}

	50% {
		transform: scale(1);
	}

	75% {
		transform: scale(1.02);
	}

	100% {
		transform: scale(1);
	}
}

@-webkit-keyframes scaleButtonRight {
	0% {
		transform: scale(1);
	}

	20% {
		transform: scale(1);
	}

	40% {
		transform: scale(1.06);
	}

	60% {
		transform: scale(1);
	}

	80% {
		transform: scale(1.02);
	}

	100% {
		transform: scale(1);
	}
}

@keyframes scaleButtonRight {
	0% {
		transform: scale(1);
	}

	20% {
		transform: scale(1);
	}

	40% {
		transform: scale(1.06);
	}

	60% {
		transform: scale(1);
	}

	80% {
		transform: scale(1.02);
	}

	100% {
		transform: scale(1);
	}
}

@-webkit-keyframes action_translateX {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes action_translateX {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@-webkit-keyframes action_scale {
	0% {
		transform: scale(0.5);
		opacity: 0;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}

@keyframes action_scale {
	0% {
		transform: scale(0.5);
		opacity: 0;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}

.round-conner {
	-webkit-animation: 'scaleButton' 1s ease-in-out 0s 1 alternate forwards;
}

.round-conner,
.round-connerRight {
	height: 10rpx;
	border-radius: 15rpx;
	padding: 0 20rpx !important;
}

.round-connerRight {
	-webkit-animation: 'scaleButtonRight' 1s ease-in-out 0s 1 alternate forwards;
}

.fadeIn {
	-webkit-animation: 'fade' 1s ease-in-out 0s 1 alternate forwards;
}

@-webkit-keyframes fade {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes fade {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>
