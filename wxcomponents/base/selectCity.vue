<template>
	<uni-data-picker 
		popup-title="请选择城市" 
		:clearIcon="false"
		placeholder="省市、市区、区县" 
		:localdata="items" 
		:default-value="defaultValue"
		@change="onchange" 
		@nodeclick="onnodeclick"
	></uni-data-picker>
</template>

<script>
	import { getAreaList } from '@/api/modules/common.js'
	export default {
		props: {
			defaultValue: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				items: []
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				getAreaList().then(res => {
					this.items = res.data.map(province => {
						return {
							text: province.name,
							value: province.code,
							children: province.cityList.map(city => {
								return {
									text: city.name,
									value: city.code,
									children: city.areaList.map(area => {
										return {
											text: area.name,
											value: area.code
										}
									})
								}
							})
						}
					})
					// console.log(this.items)
				})
			},
			onchange(e) {
				// 完成所有节点点击时触发
				this.$emit('change', e.detail.value)
			},
			onnodeclick(e) {
				// 每一个层节点被点击时触发
				// console.log('onnodeclick', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .input-value {
		padding: initial;
		border: initial;
		line-height: initial;
		border: 0!important;
		padding: 0!important;
	}
	::v-deep .arrow-area {
		display: none;
		transform: rotate(225deg);
	}
</style>