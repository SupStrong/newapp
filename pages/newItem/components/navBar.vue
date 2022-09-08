<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" background-color="#F5F5F5">
			<view class="zhuige-top-bar">
				<template slot="left">
					<view class="zhuige-top-logo"><image mode="heightFix" :src="logo"></image></view>
				</template>
				<view class="zhuige-top-search" @click="openLink('/pages/base/search/search')">
					<uni-icons type="search" color="#999999" size="18"></uni-icons>
					<text>关键词...</text>
				</view>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					logo:'https://q.zhuige.com/wp-content/uploads/2022/08/logox.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

 @import url('../scss/main.css');	
</style>
