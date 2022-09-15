// 悬浮按钮

<template>
	<view class="" v-if="floatList && floatList.length">
		<view class="cu-modal" :class="{ show: showMask }" @tap="hideMask"></view>
		<!-- 悬浮按钮菜单 -->
		<view class="shopro-float-btn">
			<button class="wechat-btn u-reset-button" @tap="onBtn">
				<image class="wechat_img" :src="floatList.length == 1 ? floatList[0].btnimage : floatData.image" mode="widthFix"></image>
			</button>
			<view :class="showBtnList ? 'float--active' : 'float-list-box'">
				<view class="btn-img-box u-flex-col" @tap="onBtnItem(item)" v-for="item in floatList" :key="item.btnimage">
					<view class="btn-item u-flex-col u-row-center u-col-center">
						<image class="btn-img" :src="item.btnimage" mode="aspectFill"></image>
						<view class="btn-name">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<!-- <view class="cu-modal" :class="{ show: showModal }" @tap="showModal = false">
			<view class="cu-dialog" style="width: 610rpx;background: none;">
				<view class="img-box"><image class="modal-img" :src="modalImg" mode="aspectFit" @tap="saveImage(modalImg)"></image></view>
			</view>
		</view> -->
	</view>
</template>

<script>
/**
 * 悬浮按钮，悬浮菜单。全局通用，数据为vuex初始化导入。
 * @property {Array} floatList - 悬浮按钮菜单数据列表
 */
// import { mapMutations, mapActions, mapState, mapGetters } from 'vuex';
// import Auth from '@/shopro/permission/index.js';
export default {
	components: {},
	data() {
		return {
			showBtnList: false, //列表弹出
			modalImg: '', //子项图片弹出
			showModal: false, //modal层
			showMask: false,
			// platform: this.$platform.get();
			floatList: []
           
		};
	},
	props: {
		floatData:{
			type: Array
		}
	},
	
	watch:{
		floatData(val){
			debugger
          if(val){
			this.floatList = val.list;
		  }
		}
	},
	created() {},
	methods: {
	
	// 	// 点击按钮菜单，如果悬浮按钮数据为一条，按钮图片为唯一菜单项图片和标题
		onBtnItem(item) {
			console.log(item);
		
		},

	
	}
};
</script>

<style lang="scss" scoped>
.shopro-float-btn {
	position: fixed;
	bottom: calc(var(--window-bottom) + 100rpx);
	right: 30rpx;
	z-index: 9999;
	.float--active {
		position: absolute;
		bottom: 80rpx;
		right: 0;
		left: 0;
		margin: 0 auto;
		z-index: 10010;
		transform: scale(1);
		transition: all 0.2s linear;
	}
	.float-list-box {
		position: absolute;
		z-index: 10010;
		bottom: 0;
		right: 0;
		left: 0;
		margin: 0 auto;
		transform: scale(0);
		transform-origin: bottom;
		opacity: 0;
		transition: all 0.2s linear;
	}
	.btn-item {
		margin-bottom: 20rpx;
		.btn-img {
			width: 60rpx;
			height: 60rpx;
		}
		.btn-name {
			font-size: 20rpx;
			color: #fff;
			text-align: center;
			white-space: nowrap;
		}
	}
	.wechat-btn {
		box-shadow: 0px 0px 20px 4px rgba(199, 199, 199, 0.22);
		border-radius: 50%;
		width: 80rpx;
		height: 80rpx;
		.wechat_img {
			width: 80rpx;
			height: 80rpx;
		}
	}
}
.img-box {
	position: relative;
	width: 610rpx;
	.modal-img {
		width: 100%;
		will-change: transform;
		height: 830rpx;
	}
}
</style>
