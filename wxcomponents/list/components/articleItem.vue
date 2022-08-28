<template>
	<view class="article-item" @click="toPage(item)">
		<view class="author" v-if="item.type === 2 && author">
			<view class="avatar">
				<image class="adapt" :src="role.avatar || baseInfo.coverImg" mode="aspectFill"></image>
			</view>
			<view class="author-content">
				<view class="name">
					{{role.name || ''}}
				</view>
				<view class="detail">
					<text class="iden">{{role.role_name || ''}}</text>
					<text>{{item.create_time.substr(0, 10)}}</text>
				</view>
			</view>
		</view>
		<view class="title one-line">
			{{item.title || item.name}}
		</view>
		<view class="main">
			<view v-if="item.type === 0" class="cover G-Mr-8">
				<image class="adapt" :src="item.image || baseInfo.coverImg" mode="aspectFill"></image>
			</view>
			<view class="content">
				<!-- G-line-3 -->
				<view 
					v-if="item.type !== 2" 
					:class="[
						'content-desc',
						'G-line',
						'G-width-100',
						{'G-line-3': isAlipay}
					]" 
					:style="{
						'--line': descLine,
					}"
				>
					{{item.remark || ''}}
				</view>
				<view 
					v-else 
					class="video_cover G-width-100"
					:style="{'background-image': `url(${jump ? (item.image || baseInfo.coverImg) : ''})`}"
					@click="handleVideo"
				>
					<template>
						<view v-if="!play" class="mask">
							<image class="play" :src="baseUrlImg + '/icon/play.png'" mode="widthFix"></image>
						</view>
					</template>
					<template v-if="!jump">
						<video
							class="adapt my_video"
							:id="`myVideo_${item.code}`"
							:poster="item.image"
							:show-fullscreen-btn="false"
							:show-center-play-btn="showCenterPlayBtn"
							:src="item.src"
							@pause.stop.prevent="handleVideo('pause')"
						></video>
					</template>
				</view>
				<view :class="['foot', 'G-width-100', item.type === 1 ? 'G-Mt-8' : 'G-Mt-4']">
					<view class="bottom-view">
						<template v-if="showView">
							<image class="bottom-view-imgbox" :src="baseUrlImg+'/home/eye.png'" mode=""></image>
							<text class="number">{{item.view || 0}}</text>
						</template>
					</view>
					<!-- id="video"  -->
					<button 
						v-if="item.type === 2" 
						id="video"
						class="bottom-view btn-clear" 
						hover-class='none' 
						open-type="share" 
						:data-cover="item.image || baseInfo.coverImg"
						:data-title="item.title || item.name"
						:data-code="item.code"
						@click.stop.prevent="handleArticle(item)"
					>
						<image class="share" :src="baseUrlImg + '/icon/share.png'" mode="widthFix"></image>分享
					</button>
					<view v-else class="bottom-view">
						<text class="number">熊洞商家端 {{item.create_time.slice(0,10)}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props: {
			item: {
				type: Object,
				default() {
					return {
						type: 0, // 2视频，0图文，，1链接，3文字
						image: '',
						name: '',
						remark: '',
						view: '',
						create_time: '',
					}
				}
			},
			author: { // 是否显示作者
				type: Boolean,
				default: false
			},
			jump: {
				type: Boolean,
				default: true,
			},
			descLine: {
				type: Number,
				default: 3
			},
			showView: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
				play: false,
				showCenterPlayBtn: false,
				videoContext: {},
			}
		},
		computed: {
			...mapGetters(['baseInfo']),
			role() {
				return this.item.role_info || {};
			},
			isAlipay() {
				// #ifdef MP-ALIPAY
				return true;
				// #endif
				// #ifndef MP-ALIPAY
				return false;
				// #endif
			}
		},
		mounted() {
			// #ifdef MP-BAIDU
			this.videoContext = uni.createVideoContext(`myVideo_${this.item.code}`);
			// #endif
			
			// #ifndef MP-BAIDU
			this.videoContext = uni.createVideoContext(`myVideo_${this.item.code}`, this);
			// #endif
		},
		methods: {
			handleArticle(item) {
				this.$emit('handleArticle',item);
			},
			toPage(item) {
				if(item.type === 2) {
					uni.navigateTo({
						url: `/pagesMarketing/source/play?code=${item.code}`
					})
				} else {
					uni.navigateTo({
						url: `/pagesMarketing/source/article?code=${item.code}`
					})
				}
			},
			handleVideo(type) {
				if(this.jump) return;
				if(type === 'pause') {
					this.play = !this.play;
				} else {
					if(!this.play) {
						this.videoContext.play();
						this.play = !this.play;
					}
				}
			},
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
button {
	height: auto;
	border-radius: 0;
	border: none;
}
button::after {
	border: none;
}

.article-item {
	.author {
		display: flex;
		margin-bottom: 8rpx;
		.avatar {
			width: 76rpx;
			height: 76rpx;
			border-radius: 76rpx;
			overflow: hidden;
		}
		&-content {
			flex: 1;
			overflow: hidden;
			margin-left: 16rpx;
			.name {
				height: 36rpx;
				font-size: 26rpx;
				line-height: 36rpx;
			}
			.detail {
				margin-top: 8rpx;
				height: 32rpx;
				font-size: 22rpx;
				color: #666666;
				line-height: 32rpx;
				.iden {
					margin-right: 32rpx;
				}
			}
		}
	}
	.title {
		height: 36rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #333333;
		line-height: 36rpx;
		margin-bottom: 16rpx;
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.main {
		display: flex;
		.cover {
			width: 242rpx;
			height: 136rpx;
			border-radius: 16rpx;
			overflow: hidden;
			.adapt {
				width: 100%!important;
				height: 100%!important;
				background-size: 100%!important;
			}
		}
		.content {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			&-desc {
				font-size: 22rpx;
				color: #666666;
				line-height: 32rpx;
				max-height: 96rpx;
			}
			.video_cover {
				position: relative;
				height: 386rpx;
				background-size: 100%;
				background-position: center;
				border-radius: 16rpx;
				overflow: hidden;
				.my_video {
					border-radius: 16rpx;
					overflow: hidden;
				}
				.mask {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;
					background-color: rgba($color: #000000, $alpha: 0.3);
				}
				.play {
					width: 76rpx;
					z-index: 99;
				}
			}
			.foot {
				align-self: flex-end;
				display: flex;
				justify-content: space-between;
				height: 32rpx;
				font-size: 22rpx;
				color: #999999;
				line-height: 32rpx;
				.bottom-view{
					display: flex;
					align-items: center;
					font-size: 22rpx;
					color: #999;
					&-imgbox{
						width: 28rpx;
						height: 16rpx;
						margin-right: 6rpx;
						background-size: 28rpx 16rpx;
					}
					.number{
						font-size: 22rpx;
						color: #999;
					}
					.share {
						width: 20rpx;
						margin-right: 12rpx;
					}
				}
			}
		}
	}
}
</style>
