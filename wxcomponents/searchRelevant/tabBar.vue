<template>
	<scroll-view 
		class="filter-bar" 
		:scroll-x="true" 
		:scroll-into-view="`filter_${curIndex - 1}`"
		:scroll-with-animation="animation"
		v-if="list.length"
	>
		<view 
			:id="`filter_${index}`"
			:class="[
				'filter-item',
				{'cur': curIndex === index }
			]" 
			@click="handleFilter(index,item)"
			v-for="(item, index) in list" 
			:key="item.cate_id"
		>
			{{item.name}}
		</view>
	</scroll-view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => {
				return []
			}
		},
		defaultIndex: {
			type: Number,
			default: () => {
				return 0
			}
		},
		animation: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			curIndex: null,
		}
	},
	methods: {
		handleFilter(index,item) {
			this.curIndex = index;
			this.$emit('handleFilter', this.list[index],item);
		}
	},
	watch: {
		defaultIndex: {
			handler() {
				this.curIndex = this.defaultIndex;
			},
			immediate: true
		}
	}
}
</script>

<style lang="scss" scoped>
.filter-bar {
	white-space: nowrap;
	height: 52rpx;
	.filter-item {
		display: inline-block;
		height: 36rpx;
		padding: 0 32rpx;
		font-size: 26rpx;
		color: #666666;
		line-height: 36rpx;
	}
	.cur {
		position: relative;
		color: #0060E5;
		font-weight: 500;
		// &::after {
		// 	position: absolute;
		// 	content: "";
		// 	bottom: -8rpx;
		// 	height: 4rpx;
		// 	width: calc(100% - 64rpx);
		// 	background-color: #333;
		// 	left: 50%;
		// 	transform: translateX(-50%);
		// 	z-index: 99;
		// }
	}
}
scroll-view ::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
  display: none;
}
</style>
