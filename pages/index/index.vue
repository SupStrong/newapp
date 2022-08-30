<template>
	<view class="">
		<BannerSwiper :res='swiperData'></BannerSwiper>
		<GoodYi />
		<Platform />
		<navigation :res="navObj" />
		<navItem :res="navObj" />
		<scrollItem :res="navObj" />
		<AdvSwiper code="weapp_detail_adplaceshort" :random="true" :showTitle="false" />
		<barItem :res="obj" />
	</view>
</template>
<script>
import BannerSwiper from '@/wxcomponents/swiper/bannerSwiper.vue';
import GoodYi from '@/wxcomponents/components/goodYi.vue';
import Platform from '@/wxcomponents/components/Platform.vue';
import navigation from '@/wxcomponents/components/navigation.vue';
import navItem from '@/wxcomponents/components/nav.vue';
import scrollItem from '@/wxcomponents/components/scroll.vue';
import AdvSwiper from '@/wxcomponents/components/advSwiper.vue';
import barItem from '@/wxcomponents/components/bar.vue';

export default {
	data() {
		return {
			swiperData: {
				data:[{
					imgUrl: 'https://upfile.juranguanjia.com/data/2022/08-01/20220801092605723460947.jpg',
					linkPage: '',
					content: '',
					id: '',
					template: 'one',
					tolinkObj: { 
						type: 'good', 
						data: {
							id: 4758,
						    name: '熊洞智选智能电动窗帘 支持米家华为',
						    type: 'scheme',
						    is_douyin: 1,
							product_id: '3537781986724831999',
						}
					}
				}]
			},
			navObj:{
				base:{
					scrollX:true
				},
				data:[
					{
						imgUrl:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content:'小毛驴'
					},{
						imgUrl:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content:'小毛驴'
					},{
						imgUrl:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content:'小毛驴'
					},{
						imgUrl:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content:'小毛驴'
					},{
						imgUrl:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content:'小毛驴'
					},{
						imgUrl:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
						content:'小毛驴'
					}
				]
			},obj:{
				data:[
						{
							base:{
								title:'测试标题',
								subtitle:'测副标题'
							},
							data:[{
								item_id:'1',
								title:'测试小毛驴',
								image:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price:10
							},{
								item_id:'1',
								title:'测试小毛驴',
								image:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price:10
							}]
						},{
							base:{
								title:'测试标题',
								subtitle:'测试标题'
							},
							data:[{
								item_id:'1',
								title:'测试小毛驴',
								image:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price:10
							},{
								item_id:'1',
								title:'测试小毛驴',
								image:'https://vue-oss.juranguanjia.com/weapp/image/home/star.png',
								price:10
							}]
						}
					]
			}
		};
	},
	components: {
		BannerSwiper,
		GoodYi,
		Platform,
		navigation,
		navItem,
		scrollItem,
		AdvSwiper,
		barItem
	}
};
</script>
<style lang="scss" scoped></style>
