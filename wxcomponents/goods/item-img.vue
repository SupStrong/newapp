<template>
	<view class="item-img">
		<image class="item-img__img" mode="aspectFill" :src="src" />
	</view>
</template>

<script>
export default {
	name: 'BackToTop',
	props: {
		src: {
			type: String,
			default: ''
		}
	},
	computed: {
		getData() {
		}
	},
	onShow() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
.item-img {
  height: 100%;
  &__img {
    width: 100%;
    height: 100%;
    display: block;
  }
  }
</style>
