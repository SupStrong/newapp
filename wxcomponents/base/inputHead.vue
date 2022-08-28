<template>
	<uni-nav-bar 
		statusBar 
		leftWidth="40rpx" 
		:leftIcon="navBarLeftIcon" 
		:border="false"
		@clickLeft="backPage"
	>
		<view class="search">
			<image class="icon" :src="baseUrlImg + '/search.png'" mode="widthFix"></image>
			<input 
				v-model="inputText" 
				class="search-input" 
				placeholder-class="pl_style" 
				type="text" 
				:placeholder="inputPlaceholderText" 
				@confirm="handleToSearch"
				value="" 
			/>
			<view class="search-clear" @click="clear">
				<image class="icon" :src="baseUrlImg + '/clear.png'" mode="widthFix"></image>
			</view>
		</view>
	</uni-nav-bar>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props: {
			type: {
				type: String,
				default: 'search'
			},
			keyword: {
				type: String,
				default: ''
			},
			placeholderText: {
				type: String,
				default: ''
			},
			navigateTo: {
				type: String,
				default: ''
			},
			focus: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image/icon',
				inputText: '',
				inputFocus: false,
			}
		},
		computed: {
			navBarLeftIcon() {
				// #ifndef MP-ALIPAY || MP-BAIDU
				let icon = 'back';
				// #endif
				
				// #ifdef MP-ALIPAY || MP-BAIDU
				let icon = '';
				// #endif
				
				return icon;
			},
			inputPlaceholderText() {
				return this.placeholderText;
			},
		},
		mounted() {
			this.inputFocus = this.focus;
		},
		methods: {
			handleToSearch() {
				this.$emit('handleToSearch', this.inputText);
			},
			clear() {
				this.inputText = '';
			},
			backPage() {
				uni.navigateBack({})
			}
		},
		watch: {
			keyword: {
				handler() {
					this.inputText = this.keyword;
				},
				immediate: true
			}
		},
	}
</script>

<style lang="scss" scoped>

.search {
	display: flex;
	align-items: center;
	width: 100%;
	// #ifdef MP-ALIPAY
	width: 340rpx;
	// #endif
	
	// #ifndef H5 || MP-ALIPAY
	width: 440rpx;
	// #endif
	height: 32px;
	background: #F0F0F0;
	border-radius: 32px;
	padding-left: 24rpx;
	.icon {
		display: block;
		width: 20rpx;
	}
	&-clear {
		height: 100%;
		padding: 0 16rpx;
		display: flex;
		align-items: center;
	}
	&-input {
		flex: 1;
		margin-left: 16rpx;
		height: 100%;
		font-size: 24rpx;
		color: #333333;
	}
}

</style>
