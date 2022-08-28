<template>
	<view
		class="my-table-scroll" 
	>
		<view 
			class="my-table"
			:style="{width: width || tableWidth}"
		>
			<view
				class="my-tr" 
			>
				<view 
					class="my-th" 
					v-for="(column, c_index) in columns" 
					:key="c_index"
				>{{column.title}}</view>
			</view>
			<template v-if="data.length">
				<view
					class="my-tr" 
					v-for="(item, index) in data" 
					:key="index"
				>
					<view class="my-td" v-for="(key, k_index) in columnKeys">{{item[key]}}</view>
				</view>
			</template>
			<slot v-else></slot>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	
	export default {
		 options: {styleIsolation: 'shared'},
		props: {
			columns: {
				type: Array,
				default: () => []
			},
			data: {
				type: Array,
				default: () => []
			},
			width: {
				type: [String, Number],
				default: ''
			}
		},
		data() {
			return {
				speedPosition: 0,
				tableWidth: '100%',
			}
		},
		computed: {
			...mapGetters(['systemInfo']),
			columnKeys() {
				let keys = [];
				const columns = this.columns;
				for(let i = 0; i < columns.length; i++) {
					keys.push(columns[i].iden);
				}
				return keys;
			}
		},
		methods: {
			getTableWidth() {
				let width = 0;
				this.columns.forEach(column => {
					const columnWidth = parseInt(column.width) || 100
					width += columnWidth
				})
				return width + 'px';
			}
		},
		watch: {
			columns: {
				handler() {
					if(this.columns.length) {
						this.tableWidth = this.getTableWidth();
					}
				},
				immediate: true,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-table-scroll {
		width: 100%;
		overflow-x: scroll;
		box-sizing: border-box;
	}
	.my-table {
		display: table;
		border-collapse: separate;
		border-spacing: 0;
		border-radius: 16rpx;
		border: 2rpx solid #ADCBF6;
		box-sizing: border-box;
		::v-deep .my-tr:nth-child(2n + 3) {
			background-color: #fafafa;
		}
		::v-deep .my-tr {
			display: table-row;
			box-sizing: border-box;
			.my-th {
				background-color: #D9E7FB;
			}
		}
		::v-deep .my-td, .my-th {
			display: table-cell;
			width: 200rpx;
			padding: 16rpx;
			font-size: 24rpx;
			text-align: center;
			box-sizing: border-box;
			vertical-align: middle;
			border: 2rpx solid #ADCBF6;
			&:not(:last-child) {
				border-right: 2rpx solid #ADCBF6;
			}
		}
	}
</style>