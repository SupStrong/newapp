<template>
	<uni-popup ref="poster" type="bottom" @change="change">
		<view class="poster">
			<scroll-view scroll-y="true" class="poster-scroll" id="scroll-view-area" @click.stop="close">
				<view class="main draw" id="posterctn" @click.stop="">
					<view class="upper">
						<image class="logo draw" src="@/static/image/common/logo.png" mode="widthFix" data-type="image" data-url="@/static/image/common/logo.png"></image>
						<view class="user">
							<image class="avatar draw" :src="posterData.avatar" data-delay="1" mode="aspectFill" data-type="radius-image" :data-url="posterData.avatar"></image>
							<view class="user-box">
								<view class="name draw" data-type="text" :data-text="userInfo.nike_name">
									{{userInfo.nike_name}}
								</view>
								<view class="desc draw" data-type="text" data-text="推荐这款超好用的智家好物，请查收~">
									推荐这款超好用的智家好物，请查收~
								</view>
							</view>
						</view>
					</view>
					<view class="content">
						<image class="def_cover draw" :src="posterData.defCover" mode="widthFix" data-type="image" :data-url="posterData.defCover"></image>
						<view class="content-title G-limit-2 draw" data-type="text" data-lineClamp="2" :data-text="info.item_name">
							{{info.item_name}}
						</view>
						<view class="content-detail draw" data-type="text" :data-text="'¥' + getPrice">
							¥{{getPrice}}
						</view>
					</view>
					<view class="foot flex-between draw" data-type="view">
						<view class="use">
							<view class="title draw" data-type="text" data-text="扫码查看同款好物">
								扫码查看同款好物
							</view>
							<view class="desc draw" data-type="text" data-text="来熊洞商城，更多智家好物特惠中~">
								来熊洞商城，更多智家好物特惠中~
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
	import PrimaryButton from '@/wxcomponents/library/button/primaryButton.vue';
	import {mapGetters} from 'vuex';
	import wxml from '@/static/js/wxml2canvas22.js'; 
	import { getImageTempPath, getElementInfo } from '@/utils/uniAPiPackage.js'; 
	import { handleRichText } from '@/utils/index.js';
	import { getCodePic } from '@/api/modules/store.js';
	import Price from '@/wxcomponents/goods/price.vue';
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
			answerList: {
				type: Array,
				default: () => {
					return [];
				}
			},
			getPrice: {
				type: String,
				default: ''
			},
			isOpen: {
				type: Boolean,
				default: false
			}
		},
		components: {
			PrimaryButton,
			Price
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
			onlyAnswer() {
				const answerList = this.answerList;
				if(answerList && answerList.length) {
					return {
						...answerList[0],
						answer: handleRichText(answerList[0].answer)
					}
				}
				return null
			}
		},
		mounted() {
			this.count = 0;
		},
		methods: {
			change(e) {
				this.$emit('change', e.show)
			},
			async getCode() {
				await getCodePic({
					appType: 3,
					detailId: this.info.item_id,
					userId: this.userInfo.user_id,
					path: "shoppingMall/espier/espier-detail"
				}).then(res => {
					this.codeImg = res.data;
					this.getImageTempPath();
				})
			},
			close() {
				this.$refs.poster.close();
			},
			async getImageTempPath() {
				const info = this.info;
				const baseUrlImg = this.baseUrlImg;
				const posterData = {
					avatar: this.userInfo.avatar || this.baseInfo.coverImg,
					codeImg: this.codeImg,
					defCover: this.info.pics[0],
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
				wxml(wrapperId, drawClassName, canvasId, that).then((aaa) => {
					uni.canvasToTempFilePath({
						canvasId,
						x: 0,
						y: 0,
						destWidth: this.wrapperData.width * 4,
						destHeight: this.wrapperData.height * 4,
						success: res => {
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
						// this.getImageTempPath();
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
			flex: 1;
			overflow: hidden;
			margin-left: 68rpx;
			width: 612rpx;
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
		}
	}
	
	.poster-scroll {
		.main {
			background-color: #ffffff;
			margin-top: 210rpx;
			border-radius: 16rpx;
			overflow: hidden;
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
						display: block;
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
					width: 430rpx;
				}
			}
			.content {
				padding:  0 32rpx;
				box-sizing: border-box;
				&-title {
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
					line-height: 44rpx;
					margin-bottom: 16rpx;
				}
				&-detail {
					font-size: 24rpx;
					font-weight: 700;
					color: #FF5000;
					line-height: 34rpx;
					font-size: 36rpx;
					margin-bottom: 32rpx;
				}
				.def_cover {
					width: 100%;
					margin-bottom: 16rpx;
					border: 0 none rgb(0,0,0);
					border-radius: 0;
				}
			}
			
			.relation {
				padding: 24rpx 32rpx;
				box-sizing: border-box;
				width: 548rpx;
				height: 160rpx;
				background: #F5F5F5;
				box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.02);
				border-radius: 16rpx;
				margin: 0 32rpx 32rpx;
				&-cover {
					width: 112rpx;
					height: 112rpx;
					border-radius: 16rpx;
					margin-right: 16rpx;
				}
				&-content {
					flex: 1;
					overflow: hidden;
					&-title {
						width: 356rpx;
						height: 68rpx;
						font-size: 24rpx;
						color: #333333;
						line-height: 34rpx;
						margin-bottom: 12rpx;
					}
					&-answercount {
						height: 32rpx;
						font-size: 22rpx;
						color: #999999;
						line-height: 32rpx;
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
