<template>
	<view class="foot_text">
		<rich-text :nodes="setRich"></rich-text>
	</view>
</template>

<script>
import { getTopicDetail } from '@/api/modules/common.js';
import parse from 'mini-html-parser2';
export default {
	props: {
		topicCode: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			nodeText: ''
		}
	},
	computed: {
		setRich() {
			let list = '';
			parse(this.nodeText, (err, htmlNodes) => {
				list = htmlNodes;
			});
			return list;
		}
	},
	mounted() {
		this.topicDetail();
	},
	methods: {
		topicDetail() {
			if(!this.topicCode.length) {
				return;
			}
			getTopicDetail({name: this.topicCode}).then((res) => {
				let {content, ext_content} = res.data.content;
				let new_content = ext_content ? ext_content : content;
				this.formatRichText(new_content);
			})
		},
		formatRichText(nodeText) {
			const rules = [
				{label: '<h1', value: '<h1 class="rich_text_h1"'},
				{label: '<h2', value: '<h2 class="rich_text_h2"'},
				{label: '<p', value: '<p class="rich_text_p"'},
			]
			
			let new_nodeText = nodeText;
			
			rules.map(({label, value}) => {
				new_nodeText = new_nodeText.replace(new RegExp(label,'gi'), value);
			})
			this.nodeText = new_nodeText;
		},
	}
};
</script>

<style lang="scss" scoped>
.rich_text {
	/deep/ &_h1 {
		height: 36rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #555555;
		line-height: 36rpx;
		margin-top: 32rpx;
	}
	/deep/ &_h2 {
		position: relative;
		height: 34rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 24rpx;
		font-weight: 500;
		color: #666666;
		line-height: 34rpx;
		margin-top: 16rpx;
		text-indent: 1em;
		&::after {
			position: absolute;
			content: '';
			width: 8rpx;
			height: 8rpx;
			border-radius: 8rpx;
			background: #ff981f;
		}
	}
	/deep/ &_p {
		font-size: 22rpx;
		font-weight: 300;
		color: #999999;
		line-height: 32rpx;
		margin-top: 8rpx;
		text-indent: 2em;
	}
}
</style>
