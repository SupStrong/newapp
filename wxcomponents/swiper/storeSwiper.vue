<template>
	<view class="store-swiper">
		<swiper 
			class="store-list" 
			:indicator-dots="false" 
			:autoplay="false" 
			:circular="true"
			@change="handleChange"
		>
			<swiper-item v-for="(item, index) in list" :key="index">
				<StoreItem :item="item" />
			</swiper-item>
		</swiper>
		<view class="dots">
			<!-- <text class="dots-cur">{{curCount}}</text>/{{totalCount}} -->
			<view 
				:class="[
					'dots-item',
					{'dots-cur': dotIndex == curentIndex}
				]" 
				v-for="(dot, dotIndex) in list" 
				:key="dotIndex"
			></view>
		</view>
	</view>
</template>

<script>
import StoreItem from './components/storeItem.vue';
export default {
	components: {
		StoreItem
	},
	props: {
		list: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data() {
		return {
			curentIndex: 0,
		}
	},
	computed: {
		totalCount() {
			return this.list.length;
		}
	},
	methods: {
		handleChange(event) {
			this.curentIndex = event.detail.current;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';

.store-swiper {
	position: relative;
	.store-list {
		height: 290rpx;
		background-image: url('https://vue-oss.juranguanjia.com/weapp/image/store/index-map.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center;
		border-radius: 16rpx;
		box-sizing: border-box;
	}
	.dots {
		position: absolute;
		display: flex;
		justify-content: flex-end;
		bottom: 16rpx;
		right: 16rpx;
		height: 28rpx;
		font-size: 24rpx;
		color: #999999;
		line-height: 28rpx;
		&-item {
			overflow: hidden;
			width: 10rpx;
			height: 10rpx;
			background: #CCCCCC;
			border-radius: 10rpx;
			margin-left: 12rpx;
		}
		&-cur {
			background: $themeColor;
		}
	}
}
</style>
