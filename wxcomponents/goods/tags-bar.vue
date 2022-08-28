<template>
	<view class="container">
		<scroll-view class="tags" scrollX>
			<view v-if="list.length > 0">
				<view
					v-for="(item, index) in list"
					:class="['tag-item', {'tag-item_active': current === item.tag_id}]"
					@click="handleClickItem(item.tag_id)"
					:key="item.tag_id"
				>
					{{ item.tag_name }}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	props: {
		list: {
			type: Array,
			default: []
		},
		current:{
			type: Number,
			default: 0
		}
	},
	onShow() {},
	methods: {
	  handleClickItem (id) {
		this.curId = id,
		this.$emit('change',{
			 current: id
		});
	  }
	},
	computed:{
		...mapState(['Colors'])
	},
}
</script>


<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
.tags {
  width: 100%;
  white-space: nowrap;
  background: #fff;
  border-bottom: 1rrpx solid #efefef;
  .tag-item {
    display: inline-block;
	margin-right: 48rpx;
    height: 100rpx;
    line-height: 90rpx;
    font-size: 26rpx;
    color: #666;
	// &:first-child {
	// 	margin-left: 32rpx;
	// }
  }
  .tag-item_active {
      color: #0060E5;
      font-weight: 600;
    }
}
</style>
