<template>
	<view class="page_wx">
		<BaseTitle title="问问大家" :to="to" />
		<view class="main">
			<template v-if="list.length">
				<view class="item flex-between" v-for="(item, index) in list" :key="index" @click="jumpPage('detail', item)">
					<view class="title one-line">
						{{item.title}}
					</view>
					<view class="count">
						<template v-if="item.answer_total">
							{{item.answer_total || 0}}个回答
						</template>
						<template v-else>
							暂无回答
						</template>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="no">
					<view class="no-left">
						<view class="no-left-iden">
							问大家
						</view>
						<view class="no-left-text">
							{{typeName}}怎么样？问问大家吧～
						</view>
					</view>
					<view class="no-right" @click="jumpPage('put')">
						去提问
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import { getAnswerList } from '@/api/modules/home.js';
import { pickBy, handleRichText } from '@/utils/index.js';
import BaseTitle from './title.vue';
import { mapMutations } from 'vuex';

export default {
	components: {
		BaseTitle
	},
	props: {
		type: {
			type: String,
			default: ''
		},
		askObj: {
			type: Object,
			default: () => {
				return {}
			}
		},
		iden: {
			type: null,
			default: 0
		},
		code: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			list: [],
			to: 'homePages/answer/questionList',
			params: {
				is_page: 1,
				page_no: 1,
				is_open: 1,
				page_size: 3,
				relation_type: null,
				relation_id: null,
				checked: 1
			}
		}
	},
	computed: {
		typeName() {
			let text = '';
			switch(this.type - 0) {
				case 1 || 2:
					text = '商品';
					break;
				case 3:
					text = '方案';
					break;
				case 4:
					text = '体验中心';
					break;
				case 5:
					text = '设计师';
					break;
				default: 
					text = '';
			}
			console.log(text)
			return text;
		}
	},
	methods: {
		...mapMutations(['SET_ASK_OBJ']),
		getList() {
			getAnswerList(this.params).then(res => {
				this.list = res.data.list;
				this.SET_ASK_OBJ({
					...this.askObj,
					total: res.data.total,
				});
			})
		},
		jumpPage(type, data) {
			let url = '';
			if(type === 'put') {
				const { relation_type, relation_id } = this.params;
				url = `homePages/answer/putQuestions?source=detail&relationType=${relation_type}&relationId=${relation_id}&code=${this.code}`;
			} else {
				url = `homePages/answer/detail?id=${data.id}`
			}
			
			uni.navigateTo({
				url
			})
		}
	},
	watch: {
		askObj: {
			handler() {
				this.params.relation_type = this.type;
				this.params.relation_id = this.iden;
				this.to += `?relationType=${this.type}&relationId=${this.iden}`;
				this.getList();
			},
			immediate: true,
		}
	}
}
</script>

<style lang="scss" scoped>

.page_wx {
	.main {
		.item {
			.title {
				flex: 1;
				overflow: hidden;
				height: 36rpx;
				font-size: 26rpx;
				color: #666666;
				line-height: 36rpx;
			}
			.count {
				height: 32rpx;
				font-size: 22rpx;
				color: #999999;
				line-height: 32rpx;
			}
		}
		.no {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 26rpx;
			color: #666666;
			line-height: 26rpx;
			&-left {
				display: flex;
				align-items: center;
				&-iden {
					width: 74rpx;
					height: 24rpx;
					background: #0060E5;
					border-radius: 4rpx;
					font-size: 20rpx;
					color: #FFFFFF;
					line-height: 24rpx;
					text-align: center;
					margin-right: 14rpx;
				}
				&-text {
					height: 36rpx;
					font-size: 26rpx;
					color: #666666;
					line-height: 36rpx;
				}
			}
			&-right {
				width: 128rpx;
				height: 48rpx;
				border-radius: 28rpx;
				border: 2rpx solid #0060E5;
				font-size: 26rpx;
				color: #0060E5;
				line-height: 48rpx;
				text-align: center;
			}
		}
	}
}
</style>
