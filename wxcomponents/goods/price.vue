<template>
	<view :class="[lineThrough ? 'price-market' : 'price', primary ? 'price__primary' : '', className]">
		<text class="price__symbol" v-if="!noSymbol">{{ symbol || '¥' }}</text>
		<text class="price__int">{{ int.indexOf('-') === 0 ? int.slice(1) : int }}</text>
		<text class="price__decimal" v-if="decimal !== undefined && !noDecimal">.{{decimal}}</text>
		<text v-if="appendText" class="price__append">{{appendText}}</text>
	</view>
</template>

<script>
import { isObject ,isNumber } from '@/utils/index.js';
export default {
	name: 'GoodsItem',
	data() {
		return {
			int:'',
			decimal:''
		};
	},
	props: {
		className: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		primary: {
			type: Boolean,
			default: false
		},
		noSymbol: {
			type: Boolean,
			default: false
		},
		noDecimal: {
			type: Boolean,
			default: false
		},
		unit: {
			type: String,
			default: 'default'
		},
		appendText: {
			type: String,
			default: ''
		}
	},
	mounted() {},
	methods: {
	},
	watch: {
		value: {
			handler: function(type) {
				let priceVal = (this.unit === 'cent') ? (+type) / 100 : type
				if (isNumber(priceVal)) {
				  priceVal = priceVal.toFixed(2)
				}
				const [int, decimal] = (priceVal || '').split('.');
				this.int = int;
				this.decimal = decimal;
			},
			immediate: true
		}
	},
	computed: {
		
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
@import '@/static/css/common/iconfont1.scss';
.price {
	&__primary {
		color: $color-price;
		// font-size: 26rpx;
		font-size: 40rpx;
		font-weight: 700;
		display: inline;
	}
	&__symbol {
		margin-right: 5rpx;
		font-size: 20rpx;
		font-weight: normal;
	}
	&__int {
	}
	&__decimal {
		font-size: 1em;
	}
}
.price-market {
	color: $color-gray;
	margin-left: 8rpx;
	text-decoration: line-through;
	font-size: 22rpx;
	.price__symbol {
		margin-right: 5rpx;
		font-size: 20rpx;
		font-weight: normal;
	}
}
</style>
