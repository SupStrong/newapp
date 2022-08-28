<template>
	<view class="brand">
		<base-title to="/pagesMarketing/brand/list">
			<view class="title">
				品牌精选
				<text class="G-color-E3E4E5 G-lighter G-Ml-5 G-Fsize-16">/</text>
				<image :class="['G-Ml-5', 'reload-icon', {'active': reload}]" :src="baseUrlImg+'/store/reload.png'" @click="reloadFun" mode=""></image>
			</view>
		</base-title>
		<view class="main-list">
			<view class="item" v-for="(item,index) of listData" :key="index" @click="toRouter(item)">
				<image class="item-img" :src="item.image_small_file" alt="" mode="aspectFill" />
			</view>
		</view>
	</view>
</template>

<script>
	import { getBrandList } from '@/api/modules/design.js';
	import BaseTitle from './title.vue';
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
					is_page: 1,
					page_no: 1,
					page_size: 6,
					page_max: 1,
				}
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
				let { page_max, is_page } = this.params;
				if(page_max > is_page) {
					++this.params.is_page;
					++this.params.page_no;
				} else {
					this.params.is_page = 1;
					this.params.page_no = 1;
				}
				this.getData();
			},
			getData(){
				getBrandList(this.params).then(res => {
					if (res.code === 200) {
						this.listData = res.data.list;
						this.params.page_max = res.data.page_max;
					}
				})
			},
			toRouter(brand){
				uni.navigateTo({
					url: `/pagesMarketing/brand/detail?type=brand&id=${brand.id}&brand_id=${brand.brand_id}`
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
		padding: 0 32rpx;
		box-sizing: border-box;
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
			width: 206rpx;
			height: 98rpx;
			border-radius: 16rpx;
			border: 2rpx solid #DEDEDE;
			background-color: #FFF;
			float: left;
			margin-right: 32rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			&:nth-child(3n+3){
				margin-right: 0;
			}
			&:not(:nth-child(-n + 3)) {
				margin-top: 26rpx;
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

