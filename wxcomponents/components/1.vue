<template>
	<view>
		<view class="filtrate-mask" catchtouchmove="ture" v-if="filtrateMask" @click="sameData(false, false, 1, 1, 'mask')">
			<view class="store-goods-head" :style="{ 'margin-top': marginTop }">
				<view class="flex">
					<view
						class="nav-box"
						:class="[index == active ? 'active' : '', rightShow == 5 && index + 4 == active ? 'active' : '', rightShow == 5 ? 'article-width' : '']"
						v-for="(item, index) in filtrateHead"
						:key="index"
						@click.stop="filtrateListShow(item, index)"
					>
						<view class="border-right">
							<view class="name">{{ item.name }}</view>
							<i class="icon-r iconfont iconxiala1"></i>
						</view>
					</view>
					<view class="nav-box" :class="[priceActive ? 'price-active' : '']" @click="filtratePrice()">
						<view class="border-right">
							<view class="name">价格</view>
							<view class="p-i">
								<i class="iconfont iconshangla" :class="[rotate === 0 ? 'G-color-f36e' : 'G-color-333']"></i>
								<i class="iconfont iconxiala1" :class="[rotate === 1 ? 'G-color-f36e' : 'G-color-333']"></i>
							</view>
						</view>
					</view>
				</view>
				<view class="filtrate-out" v-if="panelShow">
					<scroll-view :scroll-y="true" :enhanced="true" :scroll-top="scrollTop" @scroll="scrollChange" class="filtrate-out-scroll">
						<view
							class="box G-one-cloum"
							v-for="(item, index) in filterListNew[active]"
							:key="index"
							:class="[item.checked ? 'checked' : '']"
							@click.stop="validation(item, index)"
						>
							{{ item.name }}
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 商品筛选 -->
		<view id="goodsHead" class="store-goods-head">
			<view class="flex">
				<view
					class="nav-box"
					:class="[index == active ? 'active' : '', 'article-width']"
					v-for="(item, index) in filtrateHead"
					:key="index"
					@click="filtrateListShow(item, index)"
				>
					<view class="border-right">
						<view class="name">{{ item.name }}</view>
						<i class="icon-r iconfont iconxiala1"></i>
					</view>
				</view>
				<view class="nav-box" v-if="rightShow == 4" :class="[priceActive ? 'price-active' : '']" @click="filtratePrice()">
					<view class="border-right">
						<view class="name">价格</view>
						<view class="p-i">
							<i class="iconfont iconshangla" :class="[rotate === 0 ? 'G-color-f36e' : 'G-color-333']"></i>
							<i class="iconfont iconxiala1" :class="[rotate === 1 ? 'G-color-f36e' : 'G-color-333']"></i>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			filtrateMask: false, //筛选背景遮罩
			active: 3, //筛选品类/品牌字体颜色
			priceActive: false, //筛选价字体格颜色
			rotate: false, //筛选价格箭头朝向
			panelShow: false, //显示筛选面板
			filtrateHead: [{ name: '品类' }, { name: '品牌' }],
			goodsParams: {
				page: 1,
				sorts: -1,
				cates: '',
				brand: ''
			}
		};
	},
	methods: {
		filtrateListShow() {
			this.scrollTop = 0;
			this.sameData(true, this.rotate, this.goodsParams.page, 1, '');
			if (this.serachKeywords != '') {
				this.filterListNew[i].forEach(item => {
					item.checked = false;
				});
			}
			if (this.active == i) {
				this.filtrateMask = false;
				this.panelShow = false;
				this.active = 3;
				return false;
			}
			this.panelShow = true;
			this.active = i;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	height: 100vh;
	background: #fff;
}
//筛选背景遮罩
.filtrate-mask {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 40;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	.store-goods-head {
		width: 600rpx;
		margin-top: 654rpx;
	}
}
.G-Fx {
	width: 600rpx;
	position: fixed;
	right: 0;
	z-index: 45;
	background: #fff;
}

.search-title {
	color: rgba(112, 112, 112, 1);
	line-height: 40rpx;

	.text {
		font-size: 28rpx;
		font-weight: bold;
	}
}

.G-Fx-Search {
	padding-top: 20rpx;
	height: 90rpx;
	padding: 0 30rpx 0 20rpx;
	top: 146rpx;
	z-index: 23 !important;
}

.G-Fx-filtrate {
	top: 234rpx;
}

.store-goods-head {
	height: 80rpx;
	background: #fff;
	border-bottom: 1px solid #eeeeee;

	.flex {
		display: flex;
		height: 100%;
	}

	.nav-box {
		width: 200rpx;
		padding: 24rpx 0;

		&.article-width {
			width: 300rpx;
		}

		.name {
			font-size: 28rpx;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		i {
			font-size: 10rpx;
			color: #333;
			padding-left: 8rpx;
		}

		&.active {
			.name,
			i {
				color: #f36e20;
			}

			.icon-r {
				transform: rotate(180deg);
				margin-left: 10rpx;
			}
		}

		&.price-active {
			.name {
				color: #f36e20;
			}
		}

		&:last-child .border-right {
			border-right: none;
		}
	}

	.p-i {
		i:first-child {
			padding-bottom: 2rpx;
		}

		i:last-child {
			padding-top: 2rpx;
		}
	}

	.border-right {
		border-right: 1px solid #eeeeee;
		display: flex;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
	}
}

.filtrate-out {
	height: 420rpx;
	// overflow-y: scroll;
	overflow: hidden;
	background: #fff;
	border-radius: 0 0 12rpx 12rpx;
	margin-top: 2rpx;
	padding: 0 20rpx 20rpx 20rpx;

	// display: flex;
	// -webkit-justify-content: space-between;
	// justify-content: space-between;
	// flex-wrap: wrap;
	.filtrate-out-scroll {
		height: 420rpx;
	}

	.box {
		display: inline-block;
		background: #f5f8fa;
		width: 2270rpx;
		font-size: 28rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 4rpx;
		margin-top: 20rpx;

		&:nth-child(2n) {
			margin-left: 20rpx;
		}
	}

	.checked {
		border: 02rpx solid rgba(243, 110, 32, 1);
		background: rgba(254, 240, 233, 1);
		color: rgba(243, 110, 32, 1);
	}
}
</style>
