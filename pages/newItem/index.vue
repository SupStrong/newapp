<template>
	<view class="content">
		<navBar />
		<navTag />
		<navScroll />
		<navCard />
		<navBanner @freshAllData="freshAllData" @refreshData="onRefreshData" :hideAnimation="hideAnimation" :info="ansData" />
		<navList :welfareTenBeansList="welfareTenBeansList" />
		<navListA :resourseFrom="jobsList" />
		<navTabbar @tabChange="tabChange" :tabList="tabList" />
	</view>
</template>

<script>
import navBar from './components/navBar.vue';
import navBanner from './components/navBanner.vue';
import navTag from './components/navTag.vue';
import navScroll from './components/navScroll.vue';
import navCard from './components/navCard.vue';
import navList from './components/navList.vue';
import navListA from './components/navListA.vue';
import navTabbar from './components/navTabbar.vue';

export default {
	data() {
		return {
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
			]
		};
	},
	components: {
		navBar,
		navBanner,
		navTag,
		navScroll,
		navCard,
		navList,
		navListA,
		navTabbar
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.content {
	padding: 0 24rpx;
	box-sizing: border-box;
	background-color: #f9f9f9;
	height: 100%;
}
</style>
