<template>
	<view class="note">
		<view class="content">
			<image class="note__img" :src="noteImg" mode="widthFix"></image>
			<view class="note__text">{{ noteText }}</view>
			<view class="G-t-center G-Fsize-14 G-Mt-25 G-Pt-12">联系在线客服为您关联吧</view>
			<view class="btn" @click="handleContact">在线客服</view>
		</view>
	</view>
</template>

<script>
import BaseTitle from '@/wxcomponents/base/title2.vue';
import GoodsItem3 from '@/wxcomponents/list/components/goodsItem3.vue';
import ProjectItem3 from '@/wxcomponents/list/components/projectItem3.vue';
import { mapState, mapMutations } from 'vuex';
import { searchList } from '@/api/modules/home.js';
import { pickBy } from '@/utils/index.js';
import { throttle, debounce } from '@/utils/lodash.js';

export default {
	props: {
		noteImg: {
			type: String,
			default: 'https://vue-oss.juranguanjia.com/weapp/image/wxcomponents/no-data.png'
		},
		noteText: {
			type: String,
			default: '啊哦，您搜索的结果不存在～'
		}
	},
	components: {
		BaseTitle,
		GoodsItem3,
		ProjectItem3
	},
	data() {
		return {};
	},
	computed: {},
	methods: {
		handleContact() {
			console.log('联系客服');
		}
	},
	watch: {
		sptNote: {
			handler() {
				const initSptNote = this.initSptNote;
				const Search = this.Search;
				if (initSptNote && Search?.sptNote) {
					this.sptNote = Search.sptNote;
					this.handleDebounce(this);
				}
			},
			immediate: true
		}
	}
	// destroyed() {
	// 	// #ifdef MP-BAIDU
	// 	if(!this.count) {
	// 		this.count = 1;
	// 		return
	// 	};
	// 	if(this.count) this.SET_SPT_NOTE(null);
	// 	// #endif

	// 	// #ifndef MP-BAIDU
	// 	this.SET_SPT_NOTE(null);
	// 	// #endif
	// }
};
</script>

<style lang="scss" scoped>
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.note {
	width: 100%;
	min-height: 100%;
	.content {
		padding-top: 20%;
	}
	&__img {
		width: 376rpx;
		margin-bottom: 24rpx;
		margin: 0 auto;
	}
	&__text {
		height: 34rpx;
		font-size: 24rpx;
		color: #999999;
		line-height: 34rpx;
		text-align: center;
	}
}
.btn {
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 568rpx;
	height: 80rpx;
	background: #0060e5;
	border-radius: 46rpx;
	font-weight: 500;
	font-size: 32rpx;
	letter-spacing: 2rpx;
	margin: 0 auto;
	margin-top: 30rpx;
}
.recommend {
	margin-top: 64rpx;
	.same_list {
		margin-top: 32rpx;
		flex-wrap: wrap;
		&-item {
			width: calc(48% - 20rpx);
			overflow: hidden;
			margin-bottom: 24rpx;
			box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.05);
			border-radius: 16rpx;
			&:nth-child(2n) {
				margin-right: 20rpx;
			}
			&:nth-child(2n + 1) {
				margin-left: 20rpx;
			}
		}
	}
}
</style>
