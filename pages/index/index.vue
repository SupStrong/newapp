<template>
	<view>
		首页
		<floatBtn :listData="floatData"></floatBtn>
	</view>
</template>

<script>
import floatBtn from '@/wxcomponents/goods/floatBtn.vue';
export default {
	components: {
		floatBtn
	},
	data() {
		return {
			//悬浮按钮
			floatData: [
				{
					btnImg: 'https://upfile.juranguanjia.com/data/2022/04-28/20220428132915225520264.png',
					list: [
						{
							btnimage: 'https://upfile.juranguanjia.com/data/2022/04-28/20220428132915225520264.png',
							name: '客服'
						},
						{
							btnimage: 'https://upfile.juranguanjia.com/data/2022/04-28/20220428132915225520264.png',
							name: '收藏'
						}
					]
				}
			]
		};
	},
	methods: {}
};
</script>

<style></style>
