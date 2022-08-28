<template>
	<view class="search_head-wrap fl-row-justy">
		<view class="search_head">
			<!-- <icon type="search" class="search-icon" size="16"/> -->
			<image class="search-icon" :src="baseUrlImg + '/search.png'" mode="widthFix"></image>
			<view class="input_style placeholder_style">请输入关键词</view>
			 <view class="clear" @click.stop="clearBtn" v-show="focus">
			 	<icon type="clear" class="clear-icon" size="18" v-show="focus" />
			 </view>
		</view>
		<view v-show="focus" class="cancel" @click.stop="cencleBtn()">
			取消
		</view>
		
		<!-- <view :class="[
			'mask_box',
			{'mask_box_show': focus}
		]"></view> -->
	</view>
</template>

<script>
	export default {
		props: {
			placeholderText: {
				type: String,
				default: '请输入关键词'
			},
			keyword: {
				type: String,
				default: ''
			}
		},
		watch: {
			keyword: {
				handler() {
					this.inputText = this.keyword;
				},
				immediate: true
			}
		},
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image/icon',
				focus: false,
				inputText: '',
				oldText: '',
				isFocus: false,
			}
		},
		methods: {
			handleFocus() {
				this.focus = true;
			},
			handleBlur() {
				this.inputText = this.keyword;
				this.focus = false;
			},
			clearBtn() {
				this.inputText = '';
			},
			cencleBtn() {
				this.inputText = this.keyword;
				this.focus = false;
			},
			handleToSearch() {
				this.focus = false;
				this.oldText = this.inputText;
				this.$emit('handleToSearch', this.inputText);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/iconfont.scss';
.search_head-wrap {
	height: 68rpx;
	.cancel {
		height: 68rpx;
		font-size: 26rpx;
		line-height: 68rpx;
	}
	.mask_box {
		transition: all .3s;
		position: fixed;
		left: 0;
		right: 0;
		// #ifdef H5
		top: calc(44px + 78rpx);
		// #endif
		
		// #ifndef H5
		top: 78rpx;
		// #endif
		
		bottom: 100vh;
		background-color: #FFFFFF;
		z-index: 999;
	}
	.mask_box_show {
		bottom: 0;
	}
}
.search_head {
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 16rpx;
	padding: 0 32rpx;
	height: 68rpx;
	background-color: #F0F0F0;
	border-radius: 34rpx;
	.search-icon {
		display: block;
		height: auto;
		width: 22rpx;
		margin-right: 14rpx;
	}
	.clear {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.clear-icon {
		margin-left: 14rpx;
	}
	.input_style {
		flex: 1;
		overflow: hidden;
		background: none;
	}
	.placeholder_style {
		font-size: 26rpx;
		color: #999;
	}
}
</style>