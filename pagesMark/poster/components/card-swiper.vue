<template>
	<view>
		<view class="top-swiper">
			<view class="box">
				<view style="height: 44px;"></view>
				<swiper class="swiper" :previous-margin="swiper.margin" :next-margin="swiper.margin" :circular="true" @change="swiperChange">
					<swiper-item v-for="(item, index) in swiper.list" :key="index" @click="toUrl(item.url)">
						<!-- <image class='le-img' :src='item' :class="{'le-active':swiper.index == index}"></image> -->
						<view class="le-img" :class="{ 'le-active': swiper.index == index }">
							<view class="img_box"><image class="card_img" :src="item" mode="aspectFill"></image></view>
						</view>
					</swiper-item>
				</swiper>
				<view class="save-btn">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			swiper: {
				margin: '140rpx',
				index: 0,
				list: [
					'http://tenant.cw100.com/storage/uploads/image/2021/11/21/a4b167a7b537e0edaf60bf4800109ba4.jpg',
					'http://tenant.cw100.com/storage/uploads/image/2021/05/10/10ef1057830d30297cc46fad100d21d7.jpg',
					'http://tenant.cw100.com/storage/uploads/image/2021/04/10/6ca0273caedeb868f3968b996bdc34f1.jpg'
				]
			}
		};
	},
	components: {},
	mounted() {},
	methods: {
		//swiper滑动事件
		swiperChange: function(e) {
			this.swiper.index = e.detail.current;
		},
		toUrl(url) {
			this.$Common.navigateTo(url);
		}
	}
};
</script>

<style lang="scss">
.top-swiper {
	margin-bottom: 30rpx;

	.box {
		padding-top: var(--status-bar-height);
		box-sizing: content-box;
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
	}

	.swiper {
		height: 600rpx;
		margin: 0 20rpx;

		.le-img {
			width: 100%;
			height: 100%;
			display: block;
			transform: scale(0.9);
			transition: transform 0.3s ease-in-out 0s;
			border-radius: 10px;
			background-color: #fff;
			overflow: hidden;

			&.le-active {
				transform: scale(1);
			}

			.img_box {
				width: 100%;
				height: 100%;
				overflow: hidden;

				.card_img {
					height: 100%;
					width: 100%;
				}
			}

			.detail_box {
				width: 100%;
				height: 35%;
				overflow: hidden;

				.title_box {
					width: 100%;
					text-align: center;
					font-size: 40rpx;
					margin: 30rpx 0;
				}

				.author_box {
					width: 100%;
					text-align: center;
					font-size: 30rpx;
					position: relative;
					height: 80rpx;
					line-height: 80rpx;

					&::before {
						content: '';
						height: 1px;
						width: 150rpx;
						position: absolute;
						transform: translateX(-50%);
						left: 50%;
						top: 0;
						background: #000;
					}
				}
			}
		}
	}
}
.save-btn {
	color: #fff;
	font-family: sans-serif;
	font-size: 36rpx;
	-webkit-animation: animate 0.5s linear infinite;
	animation: animate 0.5s linear infinite;
	background-color: #000;
	width: 240rpx;
	height: 90rpx;
	border-radius: 32rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 60rpx;
}

@keyframes animate {
	0%,
	100% {
		text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
	}

	25% {
		text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
	}

	50% {
		text-shadow: 1.5px -1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
	}

	75% {
		text-shadow: -1.5px 1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
	}
}
</style>
