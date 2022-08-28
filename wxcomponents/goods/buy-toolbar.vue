<template>
	<view class="foot">
		<LibraryFoot flexType="space-between">
			<view class="foot-left flex-between">
				<ShareButton shareType="custom" @click="shareBtn()" />
				<!-- <ChatButton /> -->
				<view class="btn__tocart" @click="handleClickCart()">
					<view class="at-badge">
						<view class="at-badge__num">
							{{cartCount}}
						</view>
					</view>
					<OtherButton text="购物车" image='https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image/icon/foot-cart.png' />
				</view>
			</view>
			<view class="foot-right flex-between G-Ml-15">
				<template v-if="purchaser">
						<view class="btn1 G-Mr-5" :class="{'no-onsale': !onsale}">
							<PrimaryButton text="立即购买" bgColor="null" width="254rpx" @handleTrigger="handleTrigger('single')" />
						</view>
						<PrimaryButton text="批量购买" width="254rpx" @handleTrigger="handleTrigger('batch')" />
				</template>
				<template v-else>
					<PrimaryButton text="暂不可售" width="518rpx" bgColor="#eee" color="#999" />
				</template>
			</view>
		</LibraryFoot>
	</view>
</template>

<script>
	import {
		toast
	} from '@/utils/index.js';
	import { needLogin } from '@/utils/business.js';
	import chat from '@/mixins/chat.js';
	import LibraryFoot from '@/wxcomponents/library/foot/index.vue';
	import ChatButton from '@/wxcomponents/library/button/chatButton.vue';
	import ShareButton from '@/wxcomponents/library/button/shareButton.vue';
	import OtherButton from '@/wxcomponents/library/button/otherButton.vue';
	import PrimaryButton from '@/wxcomponents/library/button/primaryButton.vue';
	
	export default {
		mixins:[chat],
		components: {
			LibraryFoot,
			ShareButton,
			OtherButton,
			ChatButton,
			PrimaryButton,
		},
		props: {
			purchaser: {
				type: Boolean,
				default: false
			},
			cartCount: { // 购物车内商品数量
				type: String,
				default: 0
			},
			onsale: { // 是否可销售
				type:Boolean,
				default: true,
			},
			mark: { // 是否可销售
				type:Boolean,
				default: true,
			},
			marketing:{
					type:String,
					default: '',
			}
		},
		data(){
			return{
				baseUrlImg: 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image',
			}
		},
		methods: {
			shareBtn() {
				this.$emit('handleShare', 'popup');
			},
			handleTrigger(type) {
				if(type == 'single' && !this.onsale) {
					toast('当前商品暂无库存，如有购买需求请点击右侧批量购买按钮提交购买需求。')
					return;
				}
				const InsetSource = uni.getStorageSync('InsetSource');
				if(InsetSource == 3) {
					this.$emit('handleTrigger', type);
					return;
				}
				// 暂时注释 
				// const flag = needLogin('请登录后再购买');
				const flag = true
				if(flag) {
					this.$emit('handleTrigger', type);
				}
			},
			handleClickCart() {
				console.log("-----")
				uni.navigateTo({
					url: '/pageUserInfos/cart/index?type=distributor'
				});
			},
		}
	};
</script>

<style lang="scss" scoped>
.foot {
	&-left {
		flex: 1;
		.btn__tocart {
			position: relative;
			.btn-icon {
				width: 44rpx;
				margin: 4rpx auto 0rpx;
			}
			.btn-text {
				font-size: 18rpx;
				color: #262626;
				text-align: center;
				white-space:nowrap;
			}
			.at-badge {
				position: absolute;
				color: #FFF;
				font-size: 20rpx;
				line-height: 1.4;
				border-radius: 14rpx 14rpx 14rpx 0;
				background: #FF4949;
				-webkit-box-shadow: 0 4rpx 8rpx 0 rgba(255, 73, 73, 0.2);
				box-shadow: 0 4rpx 8rpx 0 rgba(255, 73, 73, 0.2);
				-webkit-transform: translate(50%, 0);
				-ms-transform: translate(50%, 0);
				transform: translate(50%, 0);
				overflow: hidden;
				z-index: 1;
				padding: 0 10rpx;
				top: -8rpx;
				right: 4rpx;
			}
		}
	}
	&-right {
		.btn1 {
			// width: 204rpx;
			width: 254rpx;
			background: linear-gradient(135deg, #FFAE2C 0%, #FFBA0D 45%, #FFCD0D 83%, #FFD70D 100%);
			border-radius: 42rpx;
			overflow: hidden;
		}
		.no-onsale {
			// position: relative;
			opacity: 0.5;
			// &::before {
			// 	position: absolute;
			// 	content: '';
			// 	top: 0;
			// 	right: 0;
			// 	bottom: 0;
			// 	left: 0;
			// 	background-color: #FFF;
			// 	opacity: 0.7;
			// }
		}
	}
}
</style>
