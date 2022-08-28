<!-- 
注：自定义列表中过量使用定位会导致列表卡顿。

props参数
	params[Object]
		- page_no[Number]: 当前页数
		- page_max[Number]: 最大页数
		- refresh[Boolean]: 是否刷新
		
	isPaging[Boolean]: 是否有分页
	listData[Array]: 列表数据，没有分页时必传
	pageMax[String]: 最大页数标识
	pageNo[String]: 当前页数标识
	refresh[String]: 下拉刷新标识
 -->

<template>
	<view class="base_list">
		<scroll-view
			class="uni_scroll"
			scroll-y
			refresher-enabled
			:refresher-triggered="params.refresh"
			@refresherrefresh="refresherrefresh"
			@scrolltolower="scrolltolower"
		>
			<template v-if="isPaging ? !listPageMax : !haveData">
				<SptNote :noteImg-="noteImg" :noteText="noteText" />
			</template>
			
			<slot name="upper"></slot>
			<!-- 内容区插槽 -->
			<slot name="main"></slot>
			
			<!-- 触底加载 -->
			<slot name="load">
				<view class="loading safe-area">
					<template v-if="!isPaging && haveData">
						到底了~
					</template>
					<template  v-else-if="listPageMax && listPageNo > 1">
						{{ listPageNo >= listPageMax ? '到底了~' : '加载中··' }}
					</template>
				</view>
			</slot>
		</scroll-view>
	</view>
</template>

<script>
	import SptNote from '@/wxcomponents/base/note.vue';
	export default {
		components: {
			SptNote
		},
		props: {
			noteImg: {
				type: String,
				default: "https://vue-oss.juranguanjia.com/weapp/image/wxcomponents/no-data.png"
			},
			noteText: {
				type: String,
				default: "啊哦，您搜索的结果不存在～"
			},
			listData: { // 列表数据
				type: Array,
				default() {
					return []
				}
			},
			params: {
				type: Object,
				default() {
					return {
						refresh: false,
						page_max: 1,
						page_no: 1
					}
				}
			},
			isPaging: { // 是否有分页
				type: Boolean,
				default: true
			},
			pageNo: { // 当前页数标识
				type: String,
				default: 'page_no'
			},
			pageMax: { // 最大页数标识
				type: String,
				default: 'page_max'
			},
			refresh: { // 下拉刷新标识
				type: String,
				default: 'refresh'
			},
		},
		data() {
			return {
				scrollTop: null,
			}
		},
		computed: {
			listPageMax() {
				return this.params[this.pageMax]
			},
			listPageNo() {
				return this.params[this.pageNo]
			},
			listRefresh() {
				return this.params[this.refresh]
			},
			haveData() {
				if(this.isPaging) { // 如果有分页
					return this.params[this.pageMax] ? true : false;
				}
				// 如果没有分页
				return this.listData.length ? true : false;
			}
		},
		methods: {
			refresherrefresh() {
				this.$emit('refresherrefresh');
			},
			scrolltolower() {
				this.$emit('scrolltolower');
			},
			scrollBackToTop() {
				this.scrollTop = 1;
				setTimeout(() => {
					this.scrollTop = null;
				}, 0)
			}
		},
	}
</script>

<style lang="scss" scoped>
// @import '@/static/css/common/iconfont.scss';
@import url("@/static/css/common/common.scss");
.base_list {
	height: 100%;
}
.uni_scroll {
	height: 100%;
	/deep/.uni-scroll-view-refresh-inner {
		box-shadow: none;
		background: none;
		.uni-scroll-view-refresh__icon {
			fill: #999;
		}
		.uni-scroll-view-refresh__spinner {
			circle {
				color: #999 !important;
			}
		}
		.uni-scroll-view-refresher {
			background: none !important;
		}
	}
	// .load-box {
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	width: 100%;
	// 	height: 90rpx;
	// 	font-size: 48rpx;
	// 	color: #999;
	// 	animation-name: loading;
	// 	animation-duration: 2s;
	// 	animation-iteration-count: infinite;
	// 	animation-timing-function: ease-out;
	// }
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		font-size: 26rpx;
		color: #999;
	}
}

// @keyframes loading {
// 	0% {
// 		transform: rotate(0deg);
// 	}
// 	100% {
// 		transform: rotate(360deg);
// 	}
// }
</style>