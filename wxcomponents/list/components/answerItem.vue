<template>
	<view class="item">
		<view class="upper">
			<template v-if="item.relation_type">
				<view 
					:class="[
						'upper-left',
						coverType()
					]"
				>
					<image 
						class="cover" 
						:src="coverImg" 
						mode="aspectFill"
					></image>
				</view>
			</template>
			<view class="upper-right">
				<view class="title fl-row-left">
					<image class="answer-icon G-Mr-5" :src="answerIcon" mode="widthFix"></image>
					<view class="name one-line">
						{{item.title}}
					</view>
				</view>
				<view class="detail G-Mt-8 two-line">
					{{item.detail}}
				</view>
			</view>
		</view>
		<view class="timer flex-between">
			<text v-if="item.answer_total">
				回答时间：{{item.create_time}}
			</text>
			<template v-if="!hiddenAnswer">
				<view class="foot-right" v-if="item.myAnswer">
					<image class="good-icon" :src="baseUrlImg + '/icon/is_good.png'" mode="widthFix"></image>
					<text>{{item.agree}}</text>
				</view>
				<text v-else>
					<template v-if="item.answer_total">
						共{{item.answer_total}}个回答
					</template>
					<template v-else>
						一大波回答正在路上
					</template>
				</text>
			</template>
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		item: {
			type: Object,
			default() {
				return {}
			}
		},
		hiddenAnswer: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			answerIcon: 'https://vue-oss.juranguanjia.com/weapp/image/home/answer.png'
		}
	},
	computed: {
		...mapGetters(['baseInfo']),
		coverImg() {
			const { relation_type, relation_info = {} } = this.item;
			if(relation_type && !Array.isArray(relation_info)) {
				return relation_info.pic || this.baseInfo.coverImg;
			}
			return this.baseInfo.coverImg;
		}
	},
	methods: {
		coverType() {
			let text = '';
			switch(this.item.relation_type) {
				case 1 || 2:
					text = 'goods_wrap';
					break;
				case 3:
					text = 'project_wrap';
					break;
				case 4:
					text = 'store_wrap';
					break;
				case 5:
					text = 'desgin_wrap';
					break;
				default: 
					text = '';
			}
			return text;
		}
	}
}
</script>

<style lang="scss" scoped>
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.item {
	&:not(:first-child) {
		border-top: 1rpx solid #F0F2F5;
	}
	.upper {
		display: flex;
		&-left {
			width: 114rpx;
			height: 114rpx;
			border-radius: 16rpx;
			overflow: hidden;
			.cover {
				width: 100%;
				height: 100%;
			}
			margin-right: 22rpx;
		}
		// .goods_wrap {
		// 	border-radius: 16rpx;
		// }
		// .project_wrap {
		// 	border-radius: 8rpx;
		// }
		// .store_wrap {
		// 	border-radius: 8rpx;
		// }
		.desgin_wrap {
			border-radius: 114rpx;
		}
		&-right {
			flex: 1;
			overflow: hidden;
			.title {
				height: 40rpx;
				font-size: 28rpx;
				line-height: 40rpx;
				.answer-icon {
					width: 32rpx;
				}
				.name {
					flex: 1;
					overflow: hidden;
				}
			}
			.detail {
				max-height: 72rpx;
				font-size: 26rpx;
				color: #666666;
				line-height: 36rpx;
			}
		}
	}
	.timer {
		height: 32rpx;
		font-size: 22rpx;
		color: #999999;
		line-height: 32rpx;
		margin-top: 16rpx;
		.foot-right {
			display: flex;
			.good-icon {
				width: 28rpx;
				margin-right: 8rpx;
			}
		}
	}
}
</style>
