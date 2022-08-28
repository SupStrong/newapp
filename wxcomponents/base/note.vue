<template>
	<view class="note">
		<view class="content">
			<image class="note__img" :src="noteImg" mode="widthFix"></image>
			<view class="note__text">
				{{noteText}}
			</view>
		</view>
		<view class="recommend" v-if="sptNote">
			<BaseTitle v-if="list.length" title="热门推荐" />
			<view class="same_list flex-between">
				<view 
					class="same_list-item" 
					v-for="(item, index) in list" 
					@click="toPage(item)"
					:key="index"
				>
					<GoodsItem3 v-if="sptNote.searchType === 'espier' || sptNote.searchType === 'service'" :item="item" />
					<ProjectItem3 v-else-if="sptNote.searchType === 'project'" :item="item" />
				</view>
			</view>
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
import { throttle, debounce } from '@/utils/lodash.js'
	
export default {
	props: {
		noteImg: {
			type: String,
			default: "https://vue-oss.juranguanjia.com/weapp/image/wxcomponents/no-data.png"
		},
		noteText: {
			type: String,
			default: "啊哦，您搜索的结果不存在～"
		}
	},
	components: {
		BaseTitle,
		GoodsItem3,
		ProjectItem3
	},
	data() {
		return {
			list: [],
			sptNote: null,
			initSptNote: true
		}
	},
	computed: {
		...mapState({
			Search: state => state.Search,
			userRealAddress: state => state.Address.userRealAddress, // 真实定位
			userSelectAddress: state => state.Address.userSelectAddress, // 选择定位
		}),
		isItem() {
			if(!this.sptNote) return false;
			const { searchType } = this.sptNote;
			if(searchType === 'service' || searchType === 'espier') {
				return true;
			}
			return false;
		}
	},
	methods: {
		...mapMutations(['SET_SPT_NOTE']),
		getList() {
			const sptNote = this.sptNote;
			const userRealAddress = this.userRealAddress;
			const userSelectAddress = this.userSelectAddress;
			const params = {
				keyname: sptNote.searchName,
				source: this.isItem ? 'item' : sptNote.searchType,
				source_cate: this.isItem ? sptNote.searchType : '',
				nums: 6,
				locate: userRealAddress ? userRealAddress.locate : userSelectAddress.locate
			};
			
			searchList(params).then(res => {
				this.list = pickBy(res.data.data, {
					id: 'source_id',
					code: 'source_code',
					title: 'title',
					image: 'picture',
					remark: 'detail',
					price: 'price',
					type: 'category_parent_id',
					tags: ({keyword}) => keyword.split(',').slice(0, 2).map((tag, tagIndex) => {
						return {
							id: tagIndex,
							name: tag
						}
					})
				})
				this.initSptNote = false;
				this.SET_SPT_NOTE(null)
			})
		},
		toPage(item) {
			let url;
			const {searchType} = this.sptNote;
			switch(searchType) {
				case 'espier': 
					url = `pagesMarketing/goods/detail?id=${item.id}`;
					break;
				case 'service':
					url = `/servicePages/service/service_item?id=${item.id}`;
					break;
				case 'project':
					if((item.type-0) === 2) {
						url = `/pagesMarketing/programme/detail?id=${item.id}`
					} else {
						url = `/shoppingMall/programme/detail?id=${item.id}`
					}
					break;
				default:
					url = null;
			}
			if(url) {
				uni.navigateTo({
					url
				})
			}
		},
		handleDebounce: debounce((_this) => { // getList函数防抖
			_this.getList()
		}, 1000)
	},
	watch: {
		sptNote: {
			handler() {
				const initSptNote = this.initSptNote;
				const Search = this.Search;
				if(initSptNote && Search?.sptNote) {
					this.sptNote = Search.sptNote;
					this.handleDebounce(this)
				}
			},
			immediate: true
		}
	},
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
}
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
			&:nth-child(2n+1) {
				margin-left: 20rpx;
			}
		}
	}
}
</style>
