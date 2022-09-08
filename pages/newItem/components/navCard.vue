<template>
	<view class="zhuige-block">
		<view class="zhuige-coterie-line" @click="clickNotice" v-for="iten in 2">
			<view style="white-space: nowrap">
				<text>公告</text>
				<text>{{forum.notice}}</text>
			</view>
			<view>
				<uni-icons :type="show_notice?'bottom':'right'" color="#aaaaaa" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				forum:{
					notice:'测试这是'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
 @import url('../scss/main.css');
</style>
