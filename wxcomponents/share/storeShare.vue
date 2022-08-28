<template>
	<uni-popup ref="poster" type="bottom" @change="change">
		<view class="poster">
			<scroll-view scroll-y="true" class="poster-scroll" id="scroll-view-area" @click.stop="close">
				<view class="main draw" id="posterctn" @click.stop="">
					<view class="upper">
						<image class="logo draw" src="@/static/image/common/logo.png" mode="widthFix" data-type="image" data-url="@/static/image/common/logo.png"></image>
						<view class="user">
							<image class="avatar draw" :src="posterData.avatar" mode="heightFix" data-width="38"  data-height="38" data-type="radius-image" data-r="38" :data-url="posterData.avatar"></image>
							<view class="user-box">
								<view class="name draw" data-type="text" :data-text="userInfo.nike_name">
									{{userInfo.nike_name}}
								</view>
								<view class="desc draw" data-type="text" data-text="百闻不如一见，这家智能家居体验中心太棒了">
									百闻不如一见，这家智能家居体验中心太棒了
								</view>
							</view>
						</view>
					</view>
					<view class="content draw">
						<view class="name draw" data-type="text" :data-text="info.name">
							{{info.name}}
						</view>
						<view class="iden draw" data-type="text" :data-text="info.dict.type_name || ''">
							{{info.dict.type_name || ''}}
						</view>
						<image class="cover draw" :src="posterData.cover" mode="widthFix" data-type="image" :data-url="posterData.cover"></image>
						<view class="address draw" data-type="view">
							<image class="address-bg draw" :src="posterData.addressImg" data-type="image" :data-image="posterData.addressImg" mode="widthFix"></image>
							<image class="address-icon draw" :src="posterData.iconImg" data-type="image" :data-image="posterData.iconImg" mode="widthFix"></image>
							<view class="address-text one-line draw" data-type="text" lineClamp="1" :data-text="addressFun">
								{{ info.dict.city_name }}{{ info.dict.area_name }}{{ info.address }}
							</view>
						</view>
					</view>
					<view class="foot flex-between draw" data-type="view">
						<view class="use">
							<view class="title draw" data-type="text" data-text="扫码查看门店详情">
								扫码查看门店详情
							</view>
							<view class="desc draw" data-type="text" data-text="预约到店，亲身体验智能生活~">
								预约到店，亲身体验智能生活~
							</view>
						</view>
						<image class="codeimg draw" :src="posterData.codeImg" mode="widthFix" data-type="image" :data-url="posterData.codeImg"></image>
					</view>
				</view>
			</scroll-view>
			<view class="poster-foot">
				<PrimaryButton text="保存到相册" @handleTrigger="drawPoster" />
			</view>
		</view>
	
		<canvas canvas-id="poster-canvas" class="share__canvas" :style="{
			'width': wrapperData.width + 'px',
			'height': wrapperData.height + 'px',
		}"></canvas>
	</uni-popup>
</template>

<script>
	import { getCodePic } from '@/api/modules/store.js';
	import PrimaryButton from '@/wxcomponents/library/button/primaryButton.vue';
	import {mapGetters} from 'vuex';
	import wxml from '@/static/js/wxml2canvas22.js'; 
	import { getImageTempPath, getElementInfo } from '@/utils/uniAPiPackage.js'; 
	export default {
		props: {
			userInfo: {
				type: Object,
				default: () => {
					return null
				}
			},
			info: {
				type: Object,
				default: () => {
					return null
				}
			},
			isOpen: {
				type: Boolean,
				default: false
			}
		},
		components: {
			PrimaryButton
		},
		data() {
			return {
				wrapperData: null,
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
				posterData: {},
			}
		},
		computed: {
			...mapGetters(['baseInfo']),
			addressFun(){
				if(!this.info?.dict) return '';
				let str = this.info.dict.city_name + this.info.dict.area_name + this.info.address;
				if(str.length > 12){
					return str.slice(0,12) + '...';
				}else{
					return str;
				}
			}
		},
		mounted() {
			this.count = 0;
		},
		methods: {
			async getCode() {
				await getCodePic({
					appType: 4,
					storesId: this.info.id,
					userId: this.userInfo.user_id,
					path: "storePages/mall/details"
				}).then(res => {
					this.codeImg = res.data;
					this.getImageTempPath();
				})
			},
			change(e) {
				this.$emit('change', e.show)
			},
			close() {
				this.$refs.poster.close();
			},
			async getImageTempPath() {
				const baseUrlImg = this.baseUrlImg;
				const posterData = {
					avatar: this.userInfo.avatar || this.baseInfo.coverImg,
					poster: baseUrlImg + '/common/poster.png',
					cover:this.info.image,
					codeImg:this.codeImg,
					iconImg:baseUrlImg + '/store/location_icon.png',
					addressImg:baseUrlImg + '/store/location_bg.png'
				}
				for(let key of Object.keys(posterData)) {
					await getImageTempPath(posterData[key]).then(path => {
						this.posterData[key] = path;
					})
				}
				this.$forceUpdate()
			},
			async drawPoster () {
				// 处理图像
				const that = this;
				let wrapperId = '#posterctn';
				let drawClassName = '.draw';
				let canvasId = 'poster-canvas';
				
				const wrapperData = await getElementInfo(wrapperId, this);
				this.wrapperData = wrapperData[0];
				this.$forceUpdate();
				wxml(wrapperId, drawClassName, canvasId, that).then(() => {
					uni.canvasToTempFilePath({
						canvasId,
						x: 0,
						y: 0,
						success: res => {
							console.log(res.tempFilePath,"tempFilePathtempFilePath")
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success(res) {
									uni.showToast({
										title: '保存成功',
										icon: 'success',
									});
									that.close();
								}
							});
						},
						fail(err) {
							console.log(err);
						}
					}, that);
				})
			},
		},
		watch: {
			isOpen() {
				if(this.isOpen) {
					if(!this.count) {
						this.getCode();
						this.count ++ ;
					}
					this.$refs.poster.open();
				} else {
					this.$refs.poster.close();
				}
			},
			// userInfo() {
			// 	this.getImageTempPath();
			// },
			// info() {
			// 	this.getImageTempPath();
			// }
		}
	}
</script>

<style lang="scss" scoped>
	image {
		display: block;
		height: auto;
		background-size: 100%;
		background-position: center;
	}
	.poster {
		display: flex;
		flex-flow: column nowrap;
		height: 100vh;
		&-scroll {
			margin-left: 68rpx;
			width: 612rpx;
			flex: 1;
			box-sizing: border-box;
		}
		&-foot {
			width: 750rpx;
			height: 208rpx;
			background: rgba(240, 240, 240, 0.95);
			border-radius: 32rpx 32rpx 0 0;
			backdrop-filter: blur(4rpx);
			padding: 40rpx 32rpx 0;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
		}
	}
	
	.poster-scroll {
		.main {
			background-color: #ffffff;
			margin-top: 210rpx;
			border-radius: 16rpx;
			overflow: hidden;
			margin-bottom: 200rpx;
			.upper {
				padding: 24rpx 32rpx 32rpx;
				box-sizing: border-box;
				.logo {
					width: 94rpx;
					height: 24rpx;
					border-radius: 0;
					border: 0 none rgb(0, 0, 0);
					float: right;
				}
				.user {
					display: flex;
					clear: both;
					.avatar {
						width: 76rpx!important;
						height: 76rpx!important;
						border-radius: 76rpx;
						margin-right: 16rpx;
						border: 0 none rgb(0, 0, 0);
						border-radius: 76rpx;
					}
					.name {
						height: 40rpx;
						font-size: 28rpx;
						color: #333333;
						line-height: 40rpx;
					}
					.desc {
						height: 32rpx;
						font-size: 22rpx;
						color: #666666;
						line-height: 32rpx;
						margin-top: 4rpx;
					}
				}
				.user-box{
					width: 460rpx;
				}
			}
			.content {
				padding:  0 32rpx;
				box-sizing: border-box;
				.name {
					// height: 44rpx;
					font-size: 32rpx;
					font-weight: 500;
					line-height: 44rpx;
					margin-bottom: 8rpx;
				}
				.iden {
					height: 34rpx;
					font-size: 24rpx;
					color: #666666;
					line-height: 34rpx;
					margin-bottom: 32rpx;
				}
				.cover {
					width: 548rpx;
					// border-radius: 16rpx;
					margin-bottom: 24rpx;
					border: 0 none rgb(0, 0, 0);
				}
				.address {
					display: flex;
					align-items: center;
					width: 100%;
					height: 64rpx;
					background-size: 100%;
					background-repeat: no-repeat;
					padding: 0 22rpx;
					box-sizing: border-box;
					margin-bottom: 40rpx;
					border: 0 none rgb(0, 0, 0);
					position: relative;
					&-bg{
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 64rpx;
						border: 0 none rgb(0, 0, 0);
					}
					&-icon {
						width: 20rpx;
						margin-right: 14rpx;
						border: 0 none rgb(0, 0, 0);
						position: absolute;
					}
					&-text {
						flex: 1;
						overflow: hidden;
						line-height: 34rpx;
						font-size: 28rpx;
						margin-top: 2px;
						position: absolute;
						left: 50rpx;
						width: 420rpx;
						height: 34rpx;
					}
				}
			}
		
			.foot {
				padding: 26rpx 24rpx 24rpx 24rpx;
				background-color: #F7F8FA;
				.use {
					flex: 1;
					.title {
						font-size: 28rpx;
						font-weight: 500;
						line-height: 40rpx;
						margin-bottom: 16rpx;
					}
					.desc {
						font-size: 22rpx;
						color: #999999;
						line-height: 32rpx;
					}
				}
				.codeimg {
					width: 120rpx;
					height: 120rpx;
					border-radius: 0;
					border: 0 none rgb(0,0,0);
				}
			}
		}
	}
	.share__canvas {
		position: fixed;
		z-index: -1;
		background-color: #ccc;
	}
</style>
