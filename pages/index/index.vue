<template>
	<view>
		首页
		<floatBtn :floatData="floatData"></floatBtn>
	</view>
</template>

<script>
	import floatBtn from '@/wxcomponents/goods/floatBtn.vue'
	export default {
		components:{
			floatBtn
		},
		data() {
			return {

				 //悬浮按钮
				 floatData: [
                { 
                btnImg: "../../static/image/taiyang/float-btn.png",
                list:  [
                    {
                        btnimage: "../../static/image/taiyang/phone.png.png",
                        name: "客服"
                    },
                    {
                        btnimage: "../../static/image/taiyang/save.png",
                        name: "收藏"
                    }
                ]}
            ]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
