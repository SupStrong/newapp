<template>
	<view class="content">
		<navGood />
		<navGoodA />
		<navGoodB />
		<navGoodC />
		<barItem :res="obj" />
		<AdvSwiper code="weapp_detail_adplaceshort" :random="true" :showTitle="false" />
		<navigation :res="navObj" />
		<navItem :res="navObj" />
		<navBanner @freshAllData="freshAllData" @refreshData="onRefreshData" :hideAnimation="hideAnimation" :info="ansData" />
		<navList :welfareTenBeansList="welfareTenBeansList" />
		<navListA :resourseFrom="jobsList" />
		<navTabbar @tabChange="tabChange" :tabList="tabList" />
		<navTouter></navTouter>
		<navSwiper></navSwiper>
		<navNewSwiper></navNewSwiper>
		<!-- <navNewSwipers /></navNewSwipers> -->
		<!-- <canvas canvas-id="bubble" id="bubble" class="bubble" :style="{width: `${windowWidth}px`, height: `${windowHeight}px`}"></canvas> -->
		<navItemSwiper></navItemSwiper>
		<navNew></navNew>
		<tnLandscape :show="show2" @close="closeLandscape" closePosition="bottom" :closeSize="60">
			<!-- 方式9 start-->
			<view class="tn-flex" style="margin-bottom: 100rpx;padding-top: 46vh;">
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navEdit">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
							<view class="tn-icon-camera-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center"><text class="tn-text-ellipsis">发布动态</text></view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navCreate">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
							<view class="tn-icon-flag-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center"><text class="tn-text-ellipsis">发起活动</text></view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="navBuild">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
							<view class="tn-icon-topics-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center"><text class="tn-text-ellipsis">创建圈子</text></view>
					</view>
				</view>
			</view>
		</tnLandscape>
		<view class="edit tnxuanfu" @click="showLandscape">
			<view class="bg0 pa">
				<view class="bg1"><image src="https://tnuiimage.tnkjapp.com/my/my6.png" class="button-shop shadow"></image></view>
			</view>
			<view class="hx-box pa">
				<view class="pr">
					<view class="hx-k1 pa0"><view class="span"></view></view>
					<view class="hx-k2 pa0"><view class="span"></view></view>
					<view class="hx-k3 pa0"><view class="span"></view></view>
					<view class="hx-k4 pa0"><view class="span"></view></view>
					<view class="hx-k5 pa0"><view class="span"></view></view>
					<view class="hx-k6 pa0"><view class="span"></view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import navGood from '@/wxcomponents/goods/navItem.vue';
import navGoodA from '@/wxcomponents/goods/navItemA.vue';
import navGoodB from '@/wxcomponents/goods/navItemB.vue';
import navGoodC from '@/wxcomponents/goods/navItemC.vue';
import barItem from '@/wxcomponents/common/bar.vue';
import AdvSwiper from '@/wxcomponents/common/AdvSwiper.vue';
import navigation from '@/wxcomponents/common/navigation.vue';
import navItem from '@/wxcomponents/common/nav.vue';
import navBanner from '@/wxcomponents/common/navBanner.vue';
import navList from '@/wxcomponents/common/navList.vue';
import navListA from '@/wxcomponents/common/navListA.vue';
import navTabbar from '@/wxcomponents/common/navTabbar.vue';
import navTouter from '@/wxcomponents/common/navTouter.vue';
import navSwiper from '@/wxcomponents/common/navSwiper.vue';
import navNewSwiper from '@/wxcomponents/common/navNewSwiper.vue';
import navNewSwipers from '@/wxcomponents/common/navNewSwipers.vue';
import navItemSwiper from '@/wxcomponents/common/navItemSwiper.vue';
import navNew from '@/wxcomponents/common/navNew.vue';
import tnLandscape from '@/tuniao-ui/components/tn-landscape/tn-landscape.vue';
export default {
	data() {
		return {
			windowHeight: 0,
			windowWidth: 0,
			actionTimer: null,
			animationTimer: null,
			queue: {},
			ctx: null,
			navObj: {
				base: {
					scrollX: true
				},
				data: [
					{
						imgUrl: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content: '小毛驴'
					},
					{
						imgUrl: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content: '小毛驴'
					},
					{
						imgUrl: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content: '小毛驴'
					},
					{
						imgUrl: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content: '小毛驴'
					},
					{
						imgUrl: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content: '小毛驴'
					},
					{
						imgUrl: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content: '小毛驴'
					}
				]
			},
			tabList: [
				{
					key: '1',
					value: '推荐'
				},
				{
					key: '2',
					value: '在家做'
				},
				{
					key: '3',
					value: '在本地'
				},
				{
					key: '4',
					value: '主播'
				},
				{
					key: '5',
					value: '在线课程'
				},
				{
					key: '6',
					value: '文案编辑'
				},
				{
					key: '7',
					value: '服务员'
				},
				{
					key: '8',
					value: '导购'
				},
				{
					key: '9',
					value: '家教培训'
				},
				{
					key: '10',
					value: '全职'
				},
				{
					key: '11',
					value: '实习'
				}
			],
			ansData: {
				id: 43950,
				title: '荷兰性工作是合法的吗？',
				participate: false,
				type: 1,
				endTime: '2021-11-29 23:59:59',
				degreeHeat: 14634,
				salary: '2青豆',
				score: 2,
				showOption: true,
				optionList: ['A、是的', 'B、不是'],
				optionDetailList: [
					{
						content: 'A、是的',
						num: 1,
						percentage: '72.12',
						count: 644
					},
					{
						content: 'B、不是',
						num: 2,
						percentage: '27.88',
						count: 249
					}
				],
				headImgs: [
					'https://qiniu-image.qtshe.com/1575466524064_943.png',
					'https://qiniu-image.qtshe.com/1575466438843_844.png',
					'https://qiniu-image.qtshe.com/1575466438843_844.png'
				],
				ipIcon: 'https://qiniu-image.qtshe.com/1587556348629_414.png',
				ipName: '世界真奇妙',
				voterTurnout: 893,
				firstAnswer: true,
				logo: '',
				sourceId: 1025010001
			},
			welfareTenBeansList: [
				{
					businessId: 1172702,
					businessType: 1,
					color: '',
					contentId: 523409,
					groupId: 1028,
					groupResourceId: 2086,
					image: 'https://qiniu-image.qtshe.com/1635488644595_598.png',
					jumpKey: 'USER_PART_JOB_DETAIL_PAGE',
					param: '[{"key":"partJobId","name":"兼职id","type":"String","value":1172702},{"key":"jumpUserType","name":"用户类型","type":"String","value":1}]',
					salaryDesc: '',
					sourceId: 1028010001,
					subTitle: '校园公益活动',
					tagDesc: '',
					title: '电影文化传播志愿者招募'
				},
				{
					businessId: 476484,
					businessType: 1,
					color: '',
					contentId: 522290,
					groupId: 1028,
					groupResourceId: 1937,
					image: 'https://qiniu-image.qtshe.com/1630659108973_669.png',
					jumpKey: 'USER_PART_JOB_DETAIL_PAGE',
					param: '[{"key":"partJobId","name":"兼职id","type":"String","value":"476484"},{"key":"jumpUserType","name":"用户类型","type":"String","value":1}]',
					salaryDesc: '',
					sourceId: 1028010002,
					subTitle: '关爱星星的孩子',
					tagDesc: '',
					title: '自闭症线上公益志愿者招募'
				},
				{
					businessId: 1012916,
					businessType: 1,
					color: '',
					contentId: 522137,
					groupId: 1028,
					groupResourceId: 1509,
					image: 'https://qiniu-image.qtshe.com/1615521089160_676.png',
					jumpKey: 'USER_PART_JOB_DETAIL_PAGE',
					param: '[{"key":"partJobId","name":"兼职id","type":"String","value":1012916},{"key":"jumpUserType","name":"用户类型","type":"String","value":"1"}]',
					salaryDesc: '',
					sourceId: 1028010003,
					subTitle: '招募生态保护志愿者',
					tagDesc: '',
					title: '中国绿化基金会'
				},
				{
					businessId: 428331,
					businessType: 1,
					color: '',
					contentId: 522145,
					groupId: 1028,
					groupResourceId: 293,
					image: 'https://qiniu-image.qtshe.com/1597922406210_793.png',
					jumpKey: 'USER_PART_JOB_DETAIL_PAGE',
					param: '[{"key":"partJobId","name":"兼职id","type":"String","value":428331},{"key":"jumpUserType","name":"用户类型","type":"String","value":"1"}]',
					salaryDesc: '',
					sourceId: 1028010004,
					subTitle: '传递“指尖上的幸福”',
					tagDesc: '',
					title: '“蓝信封”公益大使招募 '
				},
				{
					businessId: 657781,
					businessType: 1,
					color: '',
					contentId: 521387,
					groupId: 1028,
					groupResourceId: 44,
					image: 'https://qiniu-image.qtshe.com/1595474313015_198.png',
					jumpKey: 'USER_PART_JOB_DETAIL_PAGE',
					param: '[{"key":"partJobId","name":"兼职id","type":"String","value":657781}]',
					salaryDesc: '',
					sourceId: 1028010005,
					subTitle: '为聋人群体出一份力',
					tagDesc: '',
					title: '无声陪伴志愿者招募'
				}
			],
			jobsList: [
				{
					businessId: 0,
					businessType: 0,
					color: '',
					contentId: 521898,
					groupId: 1030,
					groupResourceId: 1374,
					image: 'https://qiniu-image.qtshe.com/1619595938773_345.jpg',
					jumpKey: 'USER_PART_JOB_TAG_PAGE',
					param:
						'[{"key":"tagId","name":"标签id","type":"String","value":"1564"},{"key":"tagTitle","name":"标签名称","type":"String","value":""},{"key":"from","name":"填写(固定值):label","type":"String","value":"label"},{"key":"flutterUrl","name":"flutter","type":"String","value":"partJob/tag"},{"key":"jumpUserType","name":"用户类型","type":"String","value":"1"}]',
					salaryDesc: '',
					sourceId: 1030010001,
					subTitle: '宅家赚钱 200元/天',
					tagDesc: '',
					title: '精神食粮发货啦！'
				}
			],
			obj: {
				data: [
					{
						base: {
							title: '测试标题',
							subtitle: '测副标题'
						},
						data: [
							{
								item_id: '1',
								title: '测试小毛驴',
								image: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price: 10
							},
							{
								item_id: '1',
								title: '测试小毛驴',
								image: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price: 10
							}
						]
					},
					{
						base: {
							title: '测试标题',
							subtitle: '测试标题'
						},
						data: [
							{
								item_id: '1',
								title: '测试小毛驴',
								image: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price: 10
							},
							{
								item_id: '1',
								title: '测试小毛驴',
								image: 'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price: 10
							}
						]
					}
				]
			},
			show2: false
		};
	},
	components: {
		navGood,
		navGoodA,
		navGoodB,
		navGoodC,
		barItem,
		AdvSwiper,
		navigation,
		navItem,
		navBanner,
		navList,
		navListA,
		navTabbar,
		navTouter,
		navSwiper,
		navNewSwiper,
		navNewSwipers,
		navItemSwiper,
		navNew,
		tnLandscape
	},
	onReady() {
		this.$nextTick(() => {
			this.queue = {};
			this.ctx = uni.createCanvasContext('bubble', this);

			setTimeout(() => {
				this.actionTimer = setInterval(() => {
					this.generateBubble();
				}, 500);
			}, 1000);
		});
	},
	onLoad() {
		this.getSystemInfo();
	},
	onUnload() {
		this.clearActionTimer();
		this.clearAnimationTimer();
	},
	methods: {
		// 弹出压屏窗
		showLandscape() {
			this.show2 = true;
		},
		// 关闭压屏窗
		closeLandscape() {
			this.show2 = false;
		},
		// 获取系统信息
		getSystemInfo() {
			const systemInfo = uni.getSystemInfoSync();
			if (!systemInfo) {
				setTimeout(() => {
					this.getSystemInfo();
				}, 50);
				return;
			}

			this.windowHeight = systemInfo.safeArea.height;
			this.windowWidth = systemInfo.safeArea.width;
		},

		// 生成泡泡
		generateBubble() {
			const image = 'https://tnuiimage.tnkjapp.com/bubble/' + this.randomInt(1, 33) + '.png';
			uni.getImageInfo({
				src: image,
				success: res => {
					if (res.errMsg === 'getImageInfo:ok') {
						const anmationData = {
							id: new Date().getTime(),
							timer: 0,
							opacity: 0,
							pathData: this.generatePathData(),
							image: res.path,
							factor: {
								speed: 0.0006, // 运动速度，值越小越慢
								t: 0.1 //  贝塞尔函数系数，当为0，就是从无到有，这时候屏幕高度也要调一下
							}
						};
						if (Object.keys(this.queue).length > 0) {
							this.queue[anmationData.id] = anmationData;
						} else {
							this.queue[anmationData.id] = anmationData;
							this.bubbleAnimate();
						}
					}
				}
			});
		},
		random(min, max) {
			if (min >= 0 && max > 0 && max >= min) {
				let gab = max - min;
				return Math.random() * gab + min;
			} else {
				return 0;
			}
		},
		randomInt(min, max) {
			if (min >= 0 && max > 0 && max >= min) {
				let gab = max - min + 1;
				return Math.floor(Math.random() * gab + min);
			} else {
				return 0;
			}
		},
		/* 动画相关 */
		// 生成运动的路径数据
		generatePathData() {
			let width = this.windowWidth,
				height = this.windowHeight;
			const p0 = {
				x: 0.72 * width,
				y: height
			};
			const p1 = {
				x: this.random(0.22 * width, 0.33 * width),
				y: this.random(0.5 * height, 0.75 * height)
			};
			const p2 = {
				x: this.random(0, 0.88 * width),
				y: this.random(0.25 * height, 0.5 * height)
			};
			const p3 = {
				x: this.random(0, 0.88 * width),
				y: this.random(0, 0.125 * height)
			};
			return [p0, p1, p2, p3];
		},
		// 更新运动的路径
		updatePath(data, factor) {
			const p0 = data[0];
			const p1 = data[1];
			const p2 = data[2];
			const p3 = data[3];

			const t = factor.t;

			/*计算多项式系数 （下同）*/
			const cx1 = 3 * (p1.x - p0.x);
			const bx1 = 3 * (p2.x - p1.x) - cx1;
			const ax1 = p3.x - p0.x - cx1 - bx1;

			const cy1 = 3 * (p1.y - p0.y);
			const by1 = 3 * (p2.y - p1.y) - cy1;
			const ay1 = p3.y - p0.y - cy1 - by1;

			const x = ax1 * (t * t * t) + bx1 * (t * t) + cx1 * t + p0.x;
			const y = ay1 * (t * t * t) + by1 * (t * t) + cy1 * t + p0.y;
			// console.log(p0.y, p1.y, p2.y, p3.y, y);
			return {
				x,
				y
			};
		},
		// 执行泡泡动画
		bubbleAnimate() {
			let width = this.windowWidth,
				height = this.windowHeight;
			Object.keys(this.queue).forEach(key => {
				const anmationData = this.queue[+key];
				const { x, y } = this.updatePath(anmationData.pathData, anmationData.factor);
				const speed = anmationData.factor.speed;
				anmationData.factor.t += speed;

				var curWidth = 30;
				curWidth = (height - y) / 1.5;
				curWidth = Math.min(30, curWidth);

				var curAlpha = anmationData.opacity;
				curAlpha = y / (0.3 * height); //消失的高度适当调一下
				curAlpha = Math.min(1, curAlpha);
				this.ctx.globalAlpha = curAlpha;
				this.ctx.drawImage(anmationData.image, x - curWidth / 2, y, curWidth, curWidth);
				// this.ctx.setFillStyle('red')
				// this.ctx.fillRect(x - curWidth / 2, y, 50, 50)
				if (anmationData.factor.t > 1) {
					delete this.queue[anmationData.id];
				}
				if (y > height) {
					delete this.queue[anmationData.id];
				}
			});
			this.ctx.draw();
			if (Object.keys(this.queue).length > 0) {
				this.animationTimer = setTimeout(() => {
					this.bubbleAnimate();
				}, 5);
			} else {
				this.clearAnimationTimer()();
				this.ctx.draw(); // 清空画面
			}
		},

		// 清除定时器
		clearActionTimer() {
			if (this.actionTimer) {
				clearInterval(this.actionTimer);
			}
		},
		clearAnimationTimer() {
			if (this.animationTimer) {
				clearTimeout(this.animationTimer);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	
@import url("@/static/css/tuniao.scss");
.content {
	padding: 0 24rpx;
	box-sizing: border-box;
	background-color: #f9f9f9;
	height: 100%;
}
/* 悬浮 */
.tnxuanfu {
	animation: suspension 3s ease-in-out infinite;
}

@keyframes suspension {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-0.8rem);
	}
}
/* 悬浮按钮 */
.button-shop {
	width: 90rpx;
	height: 90rpx;
	display: flex;
	flex-direction: row;
	position: fixed;
	/* bottom:200rpx;
      right: 20rpx; */
	left: 5rpx;
	top: 5rpx;
	z-index: 1001;
	border-radius: 100px;
	opacity: 0.9;
}

/* 按钮 */
.edit {
	bottom: 300rpx;
	right: 75rpx;
	position: fixed;
	z-index: 9999;
}

.pa,
.pa0 {
	position: absolute;
}

.pa0 {
	left: 0;
	top: 0;
}

.bg0 {
	width: 100rpx;
	height: 100rpx;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.bg1 {
	width: 100%;
	height: 100%;
}

.hx-box {
	top: 50%;
	left: 50%;
	width: 100rpx;
	height: 100rpx;
	transform-style: preserve-3d;
	transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
}

.hx-box .pr {
	width: 100rpx;
	height: 100rpx;
	transform-style: preserve-3d;
	animation: hxz 20s linear infinite;
}

@keyframes hxz {
	0% {
		transform: rotateX(0deg);
	}

	100% {
		transform: rotateX(-360deg);
	}
}

.hx-box .pr .pa0 {
	width: 100rpx;
	height: 100rpx;
	/* border: 4px solid #5ec0ff; */
	border-radius: 1000px;
}

.hx-box .pr .pa0 .span {
	display: block;
	width: 100%;
	height: 100%;
	background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat center center;
	background-size: 100% 100%;
	animation: hx 4s linear infinite;
}

@keyframes hx {
	to {
		transform: rotate(360deg);
	}
}

.hx-k1 {
	transform: rotateX(-60deg) rotateZ(-60deg);
}

.hx-k2 {
	transform: rotateX(-30deg) rotateZ(-30deg);
}

.hx-k3 {
	transform: rotateX(0deg) rotateZ(0deg);
}

.hx-k4 {
	transform: rotateX(30deg) rotateZ(30deg);
}

.hx-k5 {
	transform: rotateX(60deg) rotateZ(60deg);
}

.hx-k6 {
	transform: rotateX(90deg) rotateZ(90deg);
}
  /* 图标容器9 start */
  .icon9 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;
      
      &--icon {
        width: 110rpx;
        height: 110rpx;
        font-size: 65rpx;
        border-radius: 50%;
        margin: 20rpx 40rpx;
        position: relative;
        z-index: 1;
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
        }
      }
    }
  }
</style>
