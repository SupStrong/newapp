<template>
	<view class="order-item" @click="onClick">
		<view class="order-item__hd">
			<SpImg :src=" info.pic_path? info.pic_path : Array.isArray(info.pics) ? info.pics[0] : info.pics" mode="aspectFill" width="300" lazyLoad clss="order-item__img" /></view>
		<view class="order-item__bd">
			<view class="nationalInfo" v-if="isShowNational && info.type == '1' && info.origincountry_name">
				<Image class="nationalFlag" :src="info.origincountry_img_url" mode="aspectFill" lazyLoad />
				<text class="nationalTitle">{{ info.origincountry_name }}</text>
			</view>
			<view class="order-item__title">
				<text class="order-item__title-tag" v-if="info.order_item_type === 'plus_buy'">换购</text>
				<text class="current-type G-Mr-5" v-if="ctype == 'group' || ctype == 'groups'">拼团团购</text>
				<text class="current-type G-Mr-5" v-if="ctype == 'seckill'">限时秒杀</text>
				<text>{{ info.title }}</text>
			</view>
			<view class="order-item__extra">
				<text class="order-item__desc">{{ info.goods_props }}</text>
				<text class="order-item__num">数量：{{ info.num }}</text>
				<text class="order-item__desc" v-if="info.item_spec_desc">{{ info.item_spec_desc }}</text>
			</view>
			<slot name="renderDesc"></slot>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import  SpImg from './sp-img.vue';
import  Price from './price.vue';
export default {
	name: 'FilterBar',
	data() {
		return {};
	},
	props: {
		payType: '',
		showExtra: true,
		info: null,
		isShowNational: false,
		showDesc:true,
		ctype:''
	},
	onShow() {},
	methods: {
	},
	components: {
		SpImg,
		Price
	},
	computed: {
		...mapState(['Colors'])
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';

.order-item {
	display: flex;
	align-items: flex-start;
	padding: $edge-size;
	position: relative;
	&__img {
		width: 120rpx;
		height: 120rpx;
		margin-right: 35rpx;
		border-radius: 6rpx;
	}
	.current-type{
		border: 2rpx solid #ff5000;
		padding: 0 4rpx;
    border-radius: 4rpx;
    color: #ff5000;
	}
	// &__hd {
	// }
	&__bd {
		width: 70%;
		margin-bottom: 30rpx;
		// 跨境
		.nationalInfo {
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 24rpx;
			padding: 10rpx 0;
			.nationalFlag {
				width: 45rpx;
				height: 45rpx;
				border-radius: 100%;
				margin-right: 15rpx;
			}
		}
	}
	&__ft {
		flex: 1;
		text-align: right;
		font-size: $font-size-small;
	}
	&__title {
		font-size: floor(0.95 * $font-size);
		@include multi-ellipsis(2);
		line-height: 1.7;
		margin: 0 0 4rpx;
		padding-top:6rpx;
		&-tag {
			display: inline-block;
			background: $color-brand-primary;
			color: #ffffff;
			padding: 3rpx 4rpx;
			font-size: $font-size-small;
			margin-right: 10rpx;
		}
	}
	&__desc {
		color: $color-gray;
		font-size: $font-size-small;
	}
	&__spec {
		color: $color-gray;
		font-size: $font-size-small;
	}
	&__price {
		color: #ff5000;
	}
	&__num {
		display: block;
		color: $color-gray;
	}
	&__pay-type {
		display: block;
		margin-top: 42rpx;
		font-size: 20rpx;
		color: #c1c1c1;
	}
}
.order-item__ft {
  position: absolute;
  bottom: 20rpx;
  right: 30rpx;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
</style>