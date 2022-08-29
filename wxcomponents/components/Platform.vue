<template>
	<view class="brand">
		<base-title to="/polymerizePages/brand/list">
			<view class="title">
				热门生态
				<text class="G-color-E3E4E5 G-lighter G-Ml-5 G-Fsize-16">/</text>
				<image :class="['G-Ml-5', 'reload-icon', {'active': reload}]" :src="baseUrlImg+'/store/reload.png'" @click="reloadFun" mode=""></image>
			</view>
		</base-title>
		<view class="main-list">
			<view class="item" v-for="(item,index) of listData" :key="index" @click="toRouter(item)">
				<image class="item-img" :src="item.image" alt="" mode="aspectFill" />
			</view>
		</view>
	</view>
</template>

<script>
	import { getBrandList } from '@/api/modules/design.js';
	import BaseTitle from '@/wxcomponents/base/title.vue';
	import { getLifeList } from '@/api/modules/polymerizePages.js';
	import { pickBy } from '@/utils/index.js';
	
	export default {
		components: {
			BaseTitle
		},
		data() {
			return {
				listData:[],
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
				reload: false,
				params: {
					page_no: 1,
					page_max: 1,
					type: 'platform'
				},
			}
		},
		created() {
			this.getData();
		},
		methods: {
			reloadFun() {
				this.reload = true;
				setTimeout(() => {
					this.reload = false;
				}, 1000)
				let { page_max, page_no } = this.params;
				if(page_max > page_no) {
					++this.params.page_no;
				} else {
					this.params.page_no = 1;
				}
				this.getListData();
			},
			getData() {
				getLifeList(this.params).then(res => {
					this.allData = res.data.map(item => {
						item.remark = item.info;
						item.tagList = item.brand_list.slice(0, 4);
						item.goodsList = pickBy(item.item_list, {
							id: 'item_id',
							name: 'item_name',
							image: (({pics}) => pics[0]),
						}).slice(0, 4);
						return item;
					});
					this.params.page_max = res.data.length / 6;
					this.getListData()
				})
			},
			
			getListData() {
				const allData = this.allData;
				const i = this.params.page_no;
				this.listData = allData.slice((i-1) * 6,i * 6);
			},
			toBindList() {
				uni.navigateTo({
					url: '/polymerizePages/platform/list'
				})
			},
			toRouter(item){
				uni.navigateTo({
					url: `/polymerizePages/index/index?type=platform&id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		display: flex;
		align-items: center;
		.reload-icon {
			width: 28rpx;
			height: 26rpx;
			background-size: 28rpx 26rpx;
		}
		.active {
			animation-name: reload;
			animation-duration: 1s;
			animation-timing-function: ease-in-out;
		}
	}
	
	.brand{
		padding: 24rpx;
		box-sizing: border-box;
		background-color: #fff;
		margin: 32rpx;
		border-radius: 16rpx;
		.title {
			width: 100%;
		}
	}
	.right-icon {
		width: 8rpx;
		height: 16rpx;
	}
	.main-list{
		overflow: hidden;
		.item{
			width: 198rpx;
			height: 100rpx;
			border-radius: 16rpx;
			border: 2rpx solid #DEDEDE;
			background-color: #FFF;
			float: left;
			margin-right: 20rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			&:nth-child(3n+3){
				margin-right: 0;
			}
			&:not(:nth-child(-n + 3)) {
				margin-top: 20rpx;
			}
			&-img{
				width: 80%;
				max-height: 80%;
				background-size: 100%;
			}
		}
	}

@keyframes reload {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

