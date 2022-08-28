<!-- 
	组件：图像处理
	作用：如果图像链接错误，则使用默认图
 -->
<template>
	<image
		class="image"
		:style="endStyle"
		:src="endImage"
		:mode="mode"
		:lazy-load="lazyLoad"
		:draggable="draggable"
		@error="handleError"
		@load="handleLoad"
	></image>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: {
		src: { // 图片链接
			type: String,
			default: ''
		},
		mode: { // 图片展示模式
			type: String,
			default: 'widthFix'
		},
		lazyLoad: { // 是否懒加载
			type: Boolean,
			default: true
		},
		draggable: { // 是否可拖动
			type: Boolean,
			default: false
		},
		width: { // 图片宽
			type: String,
			default: ''
		},
		height: { // 图片高
			type: String,
			default: ''
		},
		radius: { // 图片圆角
			type: String,
			default: ''
		},
		style: { // 图片样式
			type: String,
			default: ''
		}
	},
	data() {
		return {
			endImage: '',
		}
	},
	computed: {
		...mapGetters(['baseInfo']),
		endStyle() {
			let newStyle = '';
			let { 
				style,
				width,
				height,
				radius,
			} = this;
			if(width) {
				newStyle = `width: ${this.width}; height: ${this.height || this.width};`;
			}
			if(radius) {
				newStyle += `border-radius: ${radius};`;
			}
			if(style) {
				newStyle += style;
			}
			return newStyle;
		},
	},
	mounted() {
		this.endImage = this.src;
	},
	methods: {
		handleError() {
			// 图片载入错误
			this.endImage = this.baseInfo.coverImg;
		},
		handleLoad() {
			// 图片载入完成
		}
	}
}
</script>

<style lang="scss" scoped>
image {
	display: block;
	height: auto;
	background-size: 100%;
	background-position: center;
	overflow: hidden;
}
.image {
	width: 100%;
	height: 100%;
}
</style>
