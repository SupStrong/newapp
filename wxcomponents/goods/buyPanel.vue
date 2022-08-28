<template>
	<uni-popup ref="buyPanel" type="bottom" @change="buyPanelChange">
		<view :class="['buy_panel', { 'noSpecs_panel': noSpecs && type !== 'batch' }]">
			<view class="content">
				<view class="goods-info">
					<image class="goods-info-cover" :src="curImg || baseInfo.coverImg" mode="widthFix"></image>
					<view class="goods-info-content">
						<view class="goods-info-content-price">
							<text class="price__symbol">¥</text>
							
							<text class="price__int">{{ curSku.price || showPrice }}</text>
						</view>
						<view class="goods-info-content-desc">
							<template v-if="noSpecs">
								{{ `已选择 ${info.item_name}` }}
							</template>
							<template v-else>
								{{ curSku ? `已选择 ${curSku.propsText}` : '请选择规格' }}
							</template>
						</view>
					</view>
				</view>

				<scroll-view class="spu" scroll-y>
					<view class="spu-item" v-for="(spu, spuIndex) in info.item_spec_desc" :key="spuIndex">
						<view class="card">
							<view class="spu-item-title">{{ spu.spec_name }}</view>
							<view class="sku">
								<view
									:class="[
										'sku-item',
										{ 'sku-item__no': disabledSet.has(sku.spec_value_id) },
										{
											'sku-item__active': sku.spec_value_id === selection[spuIndex]
										}
									]"
									@click="handleSku(sku, spuIndex)"
									v-for="(sku, skuIndex) in spu.spec_values"
									:key="skuIndex"
								>
									{{ sku.spec_value_name }}
								</view>
							</view>
						</view>
					</view>
					<view class="spu-item" v-if="type === 'batch'">
						<view class="card">
							<view class="spu-item-title">提交购买需求</view>
							<view class="tips">{{buyTips}}，可议价</view>
							<textarea class="remark" v-model="remark" placeholder="请输入需求描述、名称、数量等"></textarea>
						</view>
					</view>
				</scroll-view>

				<view class="count">
					<InputNumber v-if="type !== 'batch'" :min="1" :max="maxStore" :value="quantity" @change="handleQuantityChange" />
					<view class="goods-info-content-desc store">
						<template v-if="noSpecs">
							{{ `库存 ${info.store ? info.store : '暂时缺货'}` }}
						</template>
						<template v-else>
							{{ curSku ? `库存 ${curSku.store ? curSku.store : '暂时缺货'}` : '请选择规格' }}
						</template>
					</view>
				</view>

				<view :class="['btn', { btn_disable: !curSku && !noSpecs }]" v-cloak>
					<view class="flex-between" v-if="type == 'single'">
						<PrimaryButton width="320rpx" text="加入购物车" bgColor="#fba629" @handleTrigger="onSingle('addCart')" />
						<PrimaryButton width="320rpx" text="立即购买" bgColor="#d42f29" @handleTrigger="onSingle('fastbuy')" />
					</view>
					<view class="flex-between" v-if="type == 'batch'">
						<PrimaryButton width="320rpx" text="取消" bgColor="#fba629" @handleTrigger="onBatch('close')" />
						<PrimaryButton width="320rpx" text="确定" bgColor="#d42f29" @handleTrigger="onBatch('submit')" />
					</view>
					<PrimaryButton v-if="type == 'specs'" text="确定" bgColor="#d42f29" @handleTrigger="onSpecs('specs')" />
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
import { mapGetters } from 'vuex';
import { addItemToCartP, buyBatchGoodsP } from '@/api/modules/shops.js';
import PrimaryButton from '@/wxcomponents/library/button/primaryButton.vue';
import InputNumber from './input-number.vue';
import { toast, pickBy } from '@/utils/index';

export default {
	components: {
		PrimaryButton,
		InputNumber
	},
	props: {// cart:加入购物车，fastbuy:立即购买， specs:规格
		type: {
			type: String,
			default: '' // single：单个购买，batch：批量购买；
		},
		info: {
			type: Object,
			default: () => {
				return {};
			}
		},
		PInfo: {
			type: Object,
			default: () => {
				return {};
			}
		},
		isOpened: {
			type: Boolean,
			default: false
		},
		marketing: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			noSpecs: false,
			selection: [], // 选择规格
			curSku: null, // 当前选择规格
			disabledSet: new Set(), // 无库存规格
			quantity: 1, // 购买数量
			maxStore: 1 ,// 规格最大库存
			remark: '', // 备注
		};
	},
	computed: {
		...mapGetters(['baseInfo']),
		showPrice() {
			const detail = this.PInfo;
			if (detail.min && detail.max) {
			  return detail.min + "-" + detail.max;
			} else if (detail.max && detail.min == 0) {
			  return detail.max;
			} else {
				return detail.it_price;
			}
		},
		buyTips() {
			let tips;
			const detail = this.PInfo;
			if(detail.min != 0 ? detail.min < 100 : detail.max < 100) {
				tips = `采购金额>5千或
				者数量超过100个`
			} else if(detail.min != 0 ? detail.min > 100 && detail.min < 1000 : detail.max > 100 && detail.max < 1000) {
				tips = `采购金额>1万或
				者数量超过50个`
			} else if(detail.min != 0 ? detail.min > 1000 : detail.max > 1000) {
				tips = `采购金额>3万或
				者数量超过10个`
			}
			return tips;
		},
		bgColor() {
			let bgcolor = '';
			switch (this.type) {
				case 'cart':
					bgcolor = '#fba629';
					break;
				case 'fastbuy':
					bgcolor = '#d42f29';
					break;
				case 'specs':
					bgcolor = '#d42f29';
					break;
				default:
				// bgcolor = '#d42f29';
			}
			return bgcolor;
		},
		curImg() {
			// 商品主图
			return this.info.pics[0] || null;
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			const PInfo = this.PInfo;
			const {
				item_spec_desc, // 所有规格分类及其子元素
				spec_items // 所有规格搭配种类
			} = this.info;
			
			/**
			 * 规格
			 * */
			if (!spec_items || !spec_items.length) {
				// 没有规格
				this.noSpecs = true;
				this.maxStore = this.info.store;
			} else {
				// -----新增内容
				spec_items.forEach(item => {
					const data = PInfo.spec_items.find(x => x.item_id == item.item_id);
					item.price = data.price
				})
				// -------
				
				// 有规格
				let skuDict = {}; // 规格词典
				spec_items.forEach(item => {
					const key = item.item_spec.map(sku => sku.spec_value_id).join('_');
					const propsText = item.item_spec.map(sku => sku.spec_value_name).join(' ');
					item.propsText = propsText;
					skuDict[key] = item;
				});
				this.skuDict = skuDict; // 所有规格搭配词典
				this.selection = Array(item_spec_desc.length).fill(null);
				this.maxStore = 99999;
				this.handleSku(item_spec_desc[0].spec_values[0].spec_value_id, 0);
			}
		},
		buyPanelChange(e) {
			const { show } = e;
			if (!show) {
				this.$emit('cancle');
			}
		},
		handleSku(sku, spuIndex) {
			if (this.disabledSet.has(sku.spec_value_id)) return;

			if (this.selection[spuIndex] === sku.spec_value_id) {
				this.selection[spuIndex] = null;
				this.curSku = null;
			} else {
				this.selection[spuIndex] = sku.spec_value_id;
			}
			this.maxStore = 1;
			this.updateCurSku(this.selection);
		},

		// 当前选择规格发生改变
		updateCurSku(selection) {
			const info = this.info;
			const activity = this.activity;
			const { activity_type } = info;
			selection = selection || this.selection;
			this.calcDisabled(selection);
			if (selection.some(s => !s)) {
				// 规格没有选择完毕
				return;
			}

			// 以下是规格选择完毕后操作
			const curSku = this.skuDict[selection.join('_')];
			this.curSku = curSku;
			this.maxStore = this.curSku.store; // 重新计算最大库存
			if (activity && info.activity_type === 'limited_buy') {
				const validItem = activity.items.find(n => n.item_id === curSku.item_id);
				this.curLimit = validItem ? true : false;
			}
			this.$emit('change', curSku);
		},

		// 根据当前选择规格判断出其他无库存的子规格
		calcDisabled(selection) {
			const skuDict = this.skuDict;
			const disabledSet = new Set();
			const makeReg = (sel, row, val) => {
				const tSel = sel.slice();
				const regStr = tSel.map((s, idx) => (row === idx ? val : !s ? '(\\d+)' : s)).join('_');
				return new RegExp(regStr);
			};
			const isNotDisabled = (sel, row, val) => {
				const reg = makeReg(sel, row, val);
				return Object.keys(skuDict).some(key => {
					return key.match(reg) && skuDict[key].store > 0;
				});
			};
			const info = this.info;
			for (let i = 0, l = info.item_spec_desc.length; i < l; i++) {
				const { spec_values } = info.item_spec_desc[i];
				for (let j = 0, k = spec_values.length; j < k; j++) {
					const id = spec_values[j].spec_value_id;
					if (!disabledSet.has(id) && !isNotDisabled(selection, i, id)) {
						disabledSet.add(id);
					}
				}
			}
			this.disabledSet = disabledSet;
		},
		// 点击确认按钮
		onSpecs() {
			if (!this.noSpecs && !this.curSku) {
				uni.showToast({
					title: '请选择规格！',
					icon: 'none'
				});
				return;
			}
			this.$emit('handleBuyPanel', { type: 'specs', data: this.curSku });
		},
		onBatch(btnType) {
			const info = this.info;
			const curSku = this.curSku;
			const noSpecs = this.noSpecs;
			if(btnType === 'close') {
				this.$emit('handleBuyPanel', { type: 'batch', data: this.curSku });
			}
			if(btnType === 'submit') {
				if(!this.remark) {
					toast('请填写购买需求');
					return;
				}
				buyBatchGoodsP({
					cate_id: 0,
					info: this.remark,
					item_id: curSku?.item_id || info.item_id
				}).then(res => {
					toast('提交成功')
					this.$emit('handleBuyPanel', { type: 'batch'});
				})
			}
		},
		onSingle(btnType) {
			const info = this.info;
			const PInfo = this.PInfo;
			const curSku = this.curSku;
			const noSpecs = this.noSpecs;
			if (!noSpecs && !this.curSku) {
				uni.showToast({
					title: '请选择规格！',
					icon: 'none'
				});
				return;
			}
			const goodsObj = {
				name: info.item_name,
				num: this.quantity,
				pics: info.pics[0],
			};
			if(noSpecs) {
				Object.assign(goodsObj, {
					item_id: info.item_id,
					price: PInfo.max
				})
			} else {
				Object.assign(goodsObj, {
					item_id: curSku.item_id,
					price: curSku.price
				})
			}
			if(btnType === 'addCart') {
				this.addCart(goodsObj);
			}
			if(btnType === 'fastbuy') {
				this.fastbuy(goodsObj);
			}
		},
		addCart(goodsObj) {
			const params = {};
			params.item_info = [goodsObj];
			addItemToCartP(params).then(res => {
				this.$emit('handleBuyPanel', { type: 'addCart', data: this.curSku });
			})
		},
		fastbuy(goodsObj) {
			uni.setStorageSync('selectBuyGoods', [goodsObj])
			uni.navigateTo({
				url: 'pagesMarketing/goods/checkout'
			})
		},
		// 购买个数
		handleQuantityChange(val) {
			this.quantity = val;
		}
	},
	watch: {
		isOpened() {
			if (this.isOpened) {
				this.$refs.buyPanel.open();
			} else {
				this.$refs.buyPanel.close();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
image {
	display: flex;
	height: auto;
	background-size: 100%;
	background-position: center;
}
.buy_panel {
	width: 100%;
	height: 70vh;
	background-color: #ffffff;
	box-sizing: border-box;
	border-top-left-radius: 32rpx;
	border-top-right-radius: 32rpx;
	.content {
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		overflow: hidden;
		.goods-info {
			display: flex;
			height: 140rpx;
			&-cover {
				width: 140rpx;
				border-radius: 8rpx;
				overflow: hidden;
				margin-right: 32rpx;
			}
			&-content {
				flex: 1;
				overflow: hidden;
				width: 140rpx;
				border-radius: 8rpx;
				overflow: hidden;
				&-price {
					height: 40rpx;
					margin-bottom: 16rpx;
					color: #ff5000;
					line-height: 40rpx;
					.price__symbol {
						font-size: 20rpx;
						margin-right: 4rpx;
					}
					.price__int {
						font-size: 40rpx;
						font-weight: 700;
					}
				}
				&-desc {
					color: #999999;
					font-size: 24rpx;
				}
			}
			&-close {
			}
		}
		.spu {
			flex: 1;
			overflow: hidden;
			padding-bottom: 24rpx;
			&-item {
				margin-top: 24rpx;
				&-title {
					margin-bottom: 12rpx;
				}
				.tips {
					color: #f9512d;
					font-size: 22rpx;
					margin-bottom: 16rpx;
				}
				.sku {
					display: flex;
					flex-wrap: wrap;
					&-item {
						height: 60rpx;
						line-height: 60rpx;
						font-size: 24rpx;
						border: 1rpx solid #eee;
						margin: 0 14rpx 14rpx 0;
						padding: 0 15rpx;
					}
					&-item__active {
						color: #c40000;
						border-color: #c40000;
					}
					&-item__no {
						color: #999;
						border-color: #eee;
					}
				}
			}
			.remark {
				width: 100%;
				padding: 20rpx;
				margin-bottom: 24rpx;
				background-color: #f2f2f2;
			}
		}
		.count {
			display: flex;
			align-items: center;
			height: 60rpx;
			padding-bottom: 25rpx;
			.store {
				margin-left: 16rpx;
			}
		}
		.btn {
			height: 86rpx;
		}
		.btn_disable {
			opacity: 0.5;
		}
	}
}

.noSpecs_panel {
	height: 32vh;
}
</style>

