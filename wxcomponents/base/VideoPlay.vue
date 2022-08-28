<template>
	<uni-popup ref="playPanel" type="bottom">
		<view class="custom_page">
			<video 
				id="videoPlay"
				class="video_dom" 
				@fullscreenchange="fullscreenchange"
				:src="src"
			></video>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: 'https://juranfile.oss-cn-beijing.aliyuncs.com/video/2022/3-29/%E9%A2%84%E7%AE%97%E4%B8%80%E4%B8%87%E5%85%83%E7%9A%84%E5%85%A8%E5%B1%8B%E6%99%BA%E8%83%BD%EF%BC%8C%E8%83%BD%E5%AE%9E%E7%8E%B0%E4%BB%80%E4%B9%88%E5%8A%9F%E8%83%BD%E6%95%88%E6%9E%9C%EF%BC%9F.mp4'
			},
			show: {
				type: Boolean,
				default: false,
			}
		},
		mounted() {
			// #ifdef MP-BAIDU
			this.videoContext = uni.createVideoContext('videoPlay');
			// #endif
			
			// #ifndef MP-BAIDU
			this.videoContext = uni.createVideoContext('videoPlay', this);
			// #endif
		},
		methods: {
			init() {
				this.videoContext.requestFullScreen();
				this.videoContext.play();
			},
			fullscreenchange(evt) {
				if(!evt.detail.fullScreen) {
					this.videoContext.pause();
					this.$refs.playPanel.close();
					this.$emit('closePlay');
				}
			}
		},
		watch: {
			show() {
				if(this.show) {
					this.init();
					this.$refs.playPanel.open();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.custom_page {
		width: 100vh;
		height: 100vh;
	}
</style>