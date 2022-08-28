<template>
	<view class="filter" id="filter">
		<view :class="[
			'filter_tabs',
			filterList.length > 2 ? 'filter_many': 'filter_less',
		]">
			<view 
				:class="[
					'item',
					{'cur': item.type === curFilterTabType}
				]"
				v-for="item in list"
				@click="handleFilterTab(item)"
				:key="item.type"
			>
				<template v-if="item.type === 'price'">
					<view class="item-name">
						{{item.typeName}}
					</view>
					<view class="price_icon">
						<image v-if="item.sort === 1" class="price_icon-img" :src="baseUrlImg + '/price_upper.png'" mode="widthFix"></image>
						<image v-else-if="item.sort === 2" class="price_icon-img" :src="baseUrlImg + '/price_down.png'" mode="widthFix"></image>
						<image v-else class="price_icon-img" :src="baseUrlImg + '/price_def.png'" mode="widthFix"></image>
					</view>
				</template>
				<template v-else-if="item.type === 'screen'">
					<view class="item-name">
						筛选
					</view>
					<text class="font_family icon-shaixuan screen_icon"></text>
				</template>
				<template v-else>
					<view class="item-name">
						{{ item.curName || item.typeName }}
					</view>
					<template v-if="item.detailList && item.detailList.length" >
						<image class="down_icon" :src="baseUrlImg + '/down.png'" mode="widthFix"></image>
					</template>
					<!-- <text v-if="item.detailList && item.detailList.length" class="font_family icon-xiala down_icon"></text> -->
				</template>
			</view>
		</view>
		<view 
			class="mask"
			v-if="visible"
			:style="{'top': `${filterHeight}px`}"
		>
			<view class="filter_select">
				<view v-if="curFilterTab.type === 'screen'">
					<!-- 筛选 -->
					<view class="option_card" v-for="card in options" :key="card.childType">
						<view class="option_card-title">
							{{card.childTypeName}}
						</view>
						<view class="option_card-main mutiple">
							<view 
								class="main-option" 
								:class="['option', 'tag', {'active': option.is_check}]"
								v-for="(option, index) in card.children" 
								@click="handleSelect(option)"
								:key="index"
							>
								{{option.label}}
							</view>
						</view>
					</view>
				</view>
				<view v-else-if="curFilterTab.isMutiple" class="mutiple">
					<!-- 多选 -->
					<view class="option_card">
						<view class="option_card-title">
							{{curFilterTab.typeName}}
						</view>
						<view class="option_card-main mutiple">
							<view 
								class="main-option"
								:class="['option', 'tag', {'active': option.is_check}]"
								v-for="option in options"
								@click="handleSelect(option)"
								:key="option.value"
							>
								{{option.label}}
							</view>
						</view>
					</view>
				</view>
				<view v-else>
					<!-- 单选 -->
					<view
						class="option radio"
						:class="[
							{'active': option.is_check}
						]"
						v-for="option in options"
						@click="handleAadio(option)"
						:key="option.value"
					>
						{{option.label}}
					</view>
				</view>
			</view>
			<view class="filter_btns" v-show="curFilterTab.isMutiple">
				<FilterBtns @success="success" @cancel="cancel" />
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * FilterBar 自定义筛选栏
	 * @description 筛选栏组件，主要用于列表页筛选
	 * @property {Array} filterList 数据集合
	 * 	 .@property {String} type 筛选项唯一标识
	 *   .@property {String} typeName 筛选项展示名称
	 *   .@property {Boolean} isMutiple = [true|false] 是否可多选
	 *   .@property {Array} detailList = [一维数组|二维数组] 可筛选数据
	 */
	
	/**
	 * detailList 数据格式
	 * {label: '美的', value: '1', is_check: false}
	 * 
	 * or
	 * 
	 *  [
	 *		{
	 *			childType:'brand',
	 *			childTypeName: '品牌',
	 *			children: [
	 *				{label: '美的', value: '1', is_check: false},
	 *				{label: '海尔', value: '2', is_check: false},
	 *			]
	 *		},
	 *	],
	 */
	import FilterBtns from './filterBtns.vue'
	export default {
		components: {
			FilterBtns
		},
		props: {
			filterList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image/wxcomponents',
				visible: false,
				list: [],
				options: [],
				curFilterTabType: null,
				curFilterTab: {},
				filterHeight: 0
			}
		},
		watch: {
			filterList: {
				handler() {
					this.visible = false;
					this.options = [];
					this.curFilterTabType = this.filterList[0].type;
					this.curFilterTab = {};
					this.list = this.filterList;
					setTimeout(() => {
						this.init();
					})
				},
				immediate: true
			}
		},
		methods: {
			init() {
				this.$nextTick(() => {
					// #ifndef MP-ALIPAY
						const query = uni.createSelectorQuery().in(this);
						query
							.select('#filter')
							.boundingClientRect(data => {
								this.filterHeight = data.bottom;
								// #ifdef H5
								this.filterHeight = data.bottom + 44;
								// #endif
							})
							.exec();
					// #endif
					
					// #ifdef MP-ALIPAY
						my.createSelectorQuery()
							.select('#filter')
							.boundingClientRect()
							.exec(data => {
								this.filterHeight = data[0].bottom;
								// #ifdef H5
								this.filterHeight = data.bottom + 44;
								// #endif
							});
					// #endif
				})
			},
			handleFilterTab(item) {
				// 一级类目点击
				if(item.type !== this.curFilterTab.type) {
					this.curFilterTab = item;
					this.curFilterTabType = item.type;
					// 不是重复点击
					if(item.detailList) {
						// 是否需要下拉框
						this.options = item.detailList;
						this.copyOptions = JSON.parse(JSON.stringify(item.detailList));
						this.visible = true;
					} else {
						// 没有子集
						this.options = [];
						this.visible = false;
						this.list.forEach(data => {
							if(!data.isMutiple && !data.detailList) {
								// 单选且没有子集
								if(data.type !== item.type) {
									data.sort = 0;
								} else {
									data.sort = 1;
								}
							}
						})
						// 触发提交
						this.submit();
					}
				} else {
					// 重复点击
					if(item.detailList) {
						// 有子集
						this.visible = false;
						this.options = [];
						this.curFilterTab.detailList = this.copyOptions;
						this.curFilterTab = {};
					} else {
						// 没有子集
						(item.type === 'price' && item.sort > 1) ? item.sort = 1 : item.sort = 2;
						// 触发提交
						this.submit();
					}
				}
			},
			handleAadio(option) {
				// 二级菜单单选类型点击
				this.curFilterTab.curName = option.label;
				this.curFilterTab.detailList.forEach(item => {
					if(item.value === option.value) {
						item.is_check = true;
					} else {
						item.is_check = false;
					}
					return item;
				})
				// 触发提交
				this.submit();
			},
			handleSelect(options) {
				// 二级菜单多选类型点击
				options.is_check = !options.is_check;
			},
			submit() {
				const list = this.list.map(item => {
					if(item.detailList) {
						if(item.type === 'screen') {
							item.select = item.detailList.map(data => {
								return {
									type: data.childType,
									select: data.children.filter(child => child.is_check)
								}
							})
						} else {
							item.select = item.detailList.filter(data => data.is_check)
						}
						return item;
					} else {
						return item;
					}
				})
				if(this.curFilterTab.type !== 'price') {
					this.curFilterTab = {};
				}
				this.visible = false;
				this.options = [];
				this.$emit('submit', list);
			},
			success() {
				this.submit();
			},
			cancel() {
				// 重置
				if(this.curFilterTab.type === 'screen') {
					this.curFilterTab.select = []
					this.options.forEach(item => {
						item.children.forEach(child => {
							child.is_check = false
						})
					})
				} else {
					this.curFilterTab.select = []
					this.options.forEach(item => {
						item.is_check = false
					})
				}
				this.submit();
			}
		}
	}
</script>

<style lang="scss" scoped>
$filter_btns_height: 96rpx;
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
}

.filter {
	position: relative;
}
.filter_tabs {
	position: relative;
	display: flex;
	height: 48rpx;
	padding-top: 20rpx;
	z-index: 99;
	.item {
		display: flex;
		align-items: center;
		color: #666666;
		height: 36rpx;
		font-size: 26rpx;
		line-height: 36rpx;
		.price_icon {
			width: 14rpx;
			margin-left: 8rpx;
			&-img {
				width: 14rpx;
				display: block;
			}
		}
		.down_icon {
			width: 16rpx;
			margin-left: 16rpx;
		}
		.screen_icon {
			font-size: 20rpx;
			margin-left: 8rpx;
			color: #3D3D3D;
		}
	}
	.cur {
		.item-name {
			position: relative;
			font-weight: 500;
			color: #333333;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				width: 100%;
				height: 4rpx;
				bottom: -12rpx;
				background: #333;
			}
		}
	}
}
.filter_many {
	justify-content: space-between;
}

.filter_less {
	.item {
		display: flex;
		justify-content: center;
		width: 50%;
	}
}

.mask {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	width: 100%;
	background-color: #fff;
	background: rgba($color: #000000, $alpha: 0.3);
	z-index: 1;
	box-sizing: border-box;
	.filter_btns {
		background-color: #fff;
		height: $filter_btns_height;
		padding: 12rpx;
	}
	.filter_select {
		overflow: hidden;
		overflow-y: auto;
		padding: 32rpx;
		background-color: #fff;
		max-height: calc(100% - #{$filter_btns_height});
		box-sizing: border-box;
		.option {
			font-size: 22rpx;
			color: #333333;
			&_card {
				&-title {
					height: 36rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #333333;
					line-height: 36rpx;
				}
				&-main {
					.option {
						// margin-top: 24rpx;
					}
				}
			}
		}
		.radio {
			height: 32rpx;
			line-height: 32rpx;
			margin-bottom: 44rpx;
		}
		.active {
			color: #0060E5;
		}
		.tag {
			height: 56rpx;
			line-height: 56rpx;
			padding: 0 34rpx;
			margin-right: 16rpx;
			margin-top: 16rpx;
			border-radius: 28rpx;
		}
		.mutiple {
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 44rpx;
			.active {
				background: rgba($color: #0060E5, $alpha: 0.1);
				color: #0060E5;
			}
		}
	}
}
</style>
