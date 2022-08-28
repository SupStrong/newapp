<template>
	<uni-popup ref="poster" type="bottom" @change="change">
		<view class="poster">
			<scroll-view scroll-y="true" class="poster-scroll" id="scroll-view-area" @click.stop="close">
				<view class="main draw" @click.stop="">
					<view class="upper">
						<view class="user">
							<view class="user-box">
								<view class="name">
									<text draw data-type="text" :data-text="projectInfo.project_name">{{projectInfo.project_name}}</text>
								</view>
								<view class="desc flex-between">
									<text class="draw"  data-type="text" :data-text="'客户姓名：' + projectInfo.user_name">客户姓名：{{projectInfo.user_name}}</text>
									<text class="draw"  data-type="text" :data-text="'创建时间：' + createTime">创建时间：{{createTime}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="content"><image class="content-img draw" :src="codechangImg" mode="widthFix" data-type="image" :data-url="codechangImg"></image></view>
					<view class="foot flex-between draw" data-type="view">
						<view class="use">
							<view class="title draw" data-type="text" :data-text="'负责人：' + projectInfo.fzr_name">负责人：{{projectInfo.fzr_name}}</view>
							<view class="desc draw" data-type="text" :data-text="'联系方式： ' + projectInfo.fzr_mobile">联系方式： {{projectInfo.fzr_mobile}}</view>
						</view>
						<image class="codeimg draw" :src="posterData.codeImg" mode="widthFix" data-type="image" :data-url="posterData.codeImg"></image>
					</view>
				</view>
			</scroll-view>
			<view class="poster-foot"><PrimaryButton unit="px" :text="footBtnText" @handleTrigger="drawPoster" /></view>
		</view>
		<view class="main draw" id="posterctn" @click.stop="">
			<view class="upper">
				<view class="user">
					<view class="user-box">
						<view class="name">
							<text draw data-type="text" :data-text="projectInfo.project_name">{{projectInfo.project_name}}</text>
						</view>
						<view class="desc flex-between">
							<text class="draw"  data-type="text" :data-text="'客户姓名：' + projectInfo.user_name">客户姓名：{{projectInfo.user_name}}</text>
							<text class="draw"  data-type="text" :data-text="'创建时间：' + createTime">创建时间：{{createTime}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="content"><image class="content-img draw" :src="codechangImg" mode="widthFix" data-type="image" :data-url="codechangImg"></image></view>
			<view class="foot flex-between draw" data-type="view">
				<view class="use">
					<view class="title draw" data-type="text" :data-text="'负责人：' + projectInfo.fzr_name">负责人：{{projectInfo.fzr_name}}</view>
					<view class="desc draw" data-type="text" :data-text="'联系方式： ' + projectInfo.fzr_mobile">联系方式： {{projectInfo.fzr_mobile}}</view>
				</view>
				<image class="codeimg draw" :src="posterData.codeImg" mode="widthFix" data-type="image" :data-url="posterData.codeImg"></image>
			</view>
		</view>
		<!-- <canvas
			v-if="wrapperData"
			canvas-id="poster-canvas"
			class="share__canvas"
			:style="{
				width: wrapperData.width + 'px',
				height: wrapperData.height + 'px'
			}"
		></canvas> -->
	</uni-popup>
</template>

<script>
import PrimaryButton from '@/wxcomponents/library/button/primaryButton.vue';
import { getImageTempPath, getElementInfo } from '@/utils/uniAPiPackage.js';
import { getCodePic, getNodeImg } from '@/api/modules/store.js';
import { base64TransformImg } from '@/api/modules/wechat.js';
import { handleRichText, toast } from '@/utils/index.js';
import wxml from '@/static/wxml2canvas22.js';
import html2canvas from 'html2canvas'
import { mapGetters, mapState } from 'vuex';
export default {
	props: {
		// userInfo: {
		// 	type: Object,
		// 	default: () => {
		// 		return null
		// 	}
		// },
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
			wrapperData: {},
			baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
			posterData: {},
			codechangImg: ''
		}
	},
	computed: {
		...mapGetters(['baseInfo']),
		...mapState({
			projectInfo: state => state.Wechat.projectInfo
		}),
		createTime() {
			return (this.projectInfo.create_time || '').slice(0, 10)
		},
		footBtnText() {
			let {
				type
			} = this.projectInfo || {};
			if(type === 'download') {
				return '下载'
			} else {
				return '发送'
			}
		}
	},
	mounted() {
		this.count = 0;
	},
	methods: {
		change(e) {
			this.$emit('change', e.show)
		},
		async getlongImg() {
			const { path, query } = this.info;
			// let url = `https://uat-m.juranguanjia.com/${path}?poster=1&token=${this.userInfo.token}`;
			let url = `https://m.bearhome.cn/${path}?poster=1&token=${this.userInfo.token}`;
			let queryStr = '';
			if(query) {
				for(let key in query) {
					queryStr += `&${key}=${query[key]}`
				}
				url += queryStr
			}
		  await getNodeImg({
		    url: url,
			selecotor: '.page_detail'
		  }).then((res) => {
		      this.codechangImg = res.data.data
		      // this.getImageTempPath()
			  uni.hideLoading()
		  }).catch(err => {
			  toast('图片生成失败')
			  this.count = 0;
			  uni.hideLoading()
		  })
		},
		async getCode() {
			await getCodePic({
				appType: 3,
				detailId: this.projectInfo.business_id,
				userId: this.userInfo.user_id,
				path: 'minePages/project/list'
			}).then(res => {
				this.codeImg = res.data;
				this.getImageTempPath();
			}).catch(err => {
				this.count = 0;
				 toast('二维码生成失败')
			})
		},
		close() {
			this.$refs.poster.close();
		},
		async getImageTempPath() {
			const info = this.info;
			const baseUrlImg = this.baseUrlImg;
			const posterData = {
				codeImg: this.codeImg,
			}
			if(info.relation_type) {
				posterData.relationCover = info.relation_info.pic;
			}
			for(let key of Object.keys(posterData)) {
				await getImageTempPath(posterData[key]).then(path => {
					this.posterData[key] = path;
				})
			}
			this.$forceUpdate()
		},
		async drawPoster () {
			uni.showLoading({
				title: '发送中',
				mask: true
			})
			const posterDom = document.getElementById('posterctn');
			const opts = {
				useCORS: true, //跨域
				allowTaint: false,
				logging: false,
				letterRendering: true,
				taintTest: true, //在渲染前测试图片
				scale: window.devicePixelRatio, // window.devicePixelRatio是设备像素比
				// dpi: 300,
				background: "#fff"
			}
			html2canvas(posterDom, opts).then(canvas => {
				var imgUrl = canvas.toDataURL('image/png');
				if(this.projectInfo.type === 'download') {
					this.downloadFile(imgUrl, `海报${new Date().getTime()}`)
				} else {
					// this.downloadFile(imgUrl, '海报')
					this.createWxupfile(imgUrl)
				}
			})
		},
		createWxupfile(imgUrl) {
			base64TransformImg({
				base64: imgUrl
			}).then(res => {
				if(res.code == 200) {
					this.sendUser(res.data.media_id)
					this.close();
				}
			}).catch(err => {
				toast('发送失败')
				uni.hideLoading()
				this.close();
			})
		},
		sendUser(mediaid) {
			wx.invoke('sendChatMessage', {
				msgtype:"image", //消息类型，必填
				enterChat: true, 
				image:
				 {
					mediaid
				 },
				}, function(res) {
				   if (res.err_msg == 'sendChatMessage:ok') {
						uni.showToast({
							title: '发送成功'
				   })
				   uni.hideLoading()
				}
			})
		},
		downloadFile(content, fileName) { //下载base64图片
		     var base64ToBlob = function(code) {
		         let parts = code.split(';base64,');
		         let contentType = parts[0].split(':')[1];
		         let raw = window.atob(parts[1]);
		         let rawLength = raw.length;
		         let uInt8Array = new Uint8Array(rawLength);
		         for(let i = 0; i < rawLength; ++i) {
		             uInt8Array[i] = raw.charCodeAt(i);
		         }
		         return new Blob([uInt8Array], {
		             type: contentType
		         });
		     };
			 uni.hideLoading()
			 this.close();
		     let aLink = document.createElement('a');
		     let blob = base64ToBlob(content); //new Blob([content]);
		     let evt = document.createEvent("HTMLEvents");
		     evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
		     aLink.download = fileName;
		     aLink.href = URL.createObjectURL(blob);
		     aLink.click();
		 }
	},
	watch: {
		isOpen() {
			if(this.isOpen) {
				if(!this.count) {
					this.userInfo = uni.getStorageSync('common')
					uni.showLoading({
						title: '海报生成中',
						mask: true
					})
					this.getCode();
					this.getlongImg();
					this.count ++ ;
				}
				this.$refs.poster.open();
			} else {
				this.$refs.poster.close();
			}
		}
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
	align-items: center;
	&-scroll {
		flex: 1;
		overflow: hidden;
		// margin-left: 34px;
		margin: auto;
		width: 306px;
		box-sizing: border-box;
	}
	&-foot {
		width: 375px;
		height: 104px;
		background: rgba(240, 240, 240, 0.95);
		border-radius: 16px 16px 0 0;
		backdrop-filter: blur(2px);
		padding: 20px 16px 0;
		box-sizing: border-box;
	}
}

.poster-scroll {
	.main {
		background-color: #ffffff;
		margin-top: 105px;
		border-radius: 8px;
		overflow: hidden;
		.upper {
			padding: 12px 16px 16px;
			box-sizing: border-box;
			.user {
				.name {
					height: 20px;
					font-size: 14px;
					font-weight: 700;
					text-align: center;
					color: #333333;
					line-height: 20px;
				}
				.desc {
					height: 16px;
					font-size: 11px;
					color: #666666;
					line-height: 16px;
					margin-top: 4px;
				}
			}
		}
		.content {
			padding: 0 16px;
			box-sizing: border-box;
			margin-bottom: 16px;
			&-img {
				width: 100%;
			}
		}
		.foot {
			padding: 13px 12px 12px 12px;
			background-color: #f7f8fa;
			.use {
				flex: 1;
				.title {
					margin-bottom: 8px;
				}
				.title,
				.desc {
					font-size: 12px;
					color: #999999;
					line-height: 16px;
				}
			}
			.codeimg {
				width: 60px;
				height: 60px;
				border-radius: 0;
				border: 0 none rgb(0, 0, 0);
			}
		}
	}
}
.share__canvas {
	position: fixed;
	z-index: -1;
	background-color: #ccc;
}

#posterctn {
	position: fixed;
	top: 0;
	left: 0;
	width: 6000px;
	background-color: #ffffff;
	margin-top: 420px;
	border-radius: 128px;
	transform: scale(0.25);
	z-index: -1;
	.upper {
		padding: 192px 256px 256px;
		box-sizing: border-box;
		.user {
			.name {
				height: 320px;
				font-size: 192px;
				font-weight: 700;
				text-align: center;
				color: #333333;
				line-height:320px;
			}
			.desc {
				height: 256px;
				font-size: 176px;
				color: #666666;
				line-height: 256px;
				margin-top: 64px;
			}
		}
	}
	.content {
		padding: 0 256px;
		box-sizing: border-box;
		margin-bottom: 256px;
		&-img {
			width: 100%;
		}
	}
	.foot {
		padding: 208px 192px 192px 192px;
		background-color: #f7f8fa;
		.use {
			flex: 1;
			.title {
				margin-bottom: 128px;
			}
			.title,
			.desc {
				font-size: 192px;
				color: #999999;
				line-height:256px;
			}
		}
		.codeimg {
			width: 960px;
			height: 960px;
			border-radius: 0;
			border: 0 none rgb(0, 0, 0);
		}
	}
}
</style>
