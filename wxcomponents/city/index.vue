<template>
	<uni-popup ref="cityPopup" type="bottom">
		<view class="city-main" @click.stop="">
			<view class="title">
				选择地址
			</view>
			<view class="address">
				<text 
					class="address-item" 
					@click="currentFn('province')"
					:class="{'active': current=='province'}"
				>
					{{provinceName ? provinceName : '请选择'}}
				</text>
				<text 
					class="address-item" 
					v-if="provinceName"
					@click="currentFn('city')"
					:class="{'active': current=='city'}"
				>
					{{cityName ? cityName : '请选择'}}
				</text>
				<text 
					class="address-item" 
					v-if="cityName"
					@click="currentFn('area')"
					:class="{'active': current=='area'}"
				>
					{{areaName ? areaName : '请选择'}}
				</text>
			</view>
			<view class="select-box">
				<view 
					class="select-box-item"
					v-for="item in list"
					@click="checkedFn(item)"
					:class="{'active': currentId === item.code}"
					:key="item.code"
				>
					<template v-if="currentId === item.code">
						<uni-icons color="#FFA509" type="checkmarkempty"/>
					</template>
					{{item.name}}
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import { getAreaList } from '@/api/modules/common.js'
	export default{
		props:{
			isOpen: {
				type: Boolean,
				default: false
			},
		},
		data(){
			return{
				provinceId: null,
				provinceName: null,
				cityId: null,
				cityName: null,
				areaId: null,
				areaName: null,
				current: 'province',
				cityData: []
			}
		},
		computed:{
			currentId(){
				let id = null;
				if(this.current === 'province'){
					id = this.provinceId
				} else if(this.current === 'city'){
					id = this.cityId
				} else if(this.current === 'area'){
					id = this.areaId
				}
				return id
			},
			list(){
				let list = []
				if(this.current === 'province'){
					list = this.cityData
				} else if(this.current === 'city'){
					let cityArr = this.cityData.filter(item => {
						return item.code === this.provinceId
					})
					list = cityArr[0].cityList
				} else if(this.current === 'area'){
					let cityArr = this.cityData.filter(item => {
						return item.code === this.provinceId
					})
					let areaArr = cityArr[0].cityList.filter(item => {
						return item.code === this.cityId
					})
					list = areaArr[0].areaList
				}
				return list
			}
		},
		methods:{
			getData(){
				getAreaList().then(res => {
					this.cityData = res.data
				})
			},
			openDialog() {
				this.$refs.cityPopup.open();
			},
			closeDialog(){
				this.$refs.cityPopup.close();
				let obj ={}
				this.$emit('successCityData',obj)
			},
			checkedFn(data){
				if(this.current === 'area'){
					this.areaId = data.code
					this.areaName = data.name
					let obj = {
						provinceId: this.provinceId,
						provinceName: this.provinceName,
						cityId: this.cityId,
						cityName: this.cityName,
						areaId: this.areaId,
						areaName: this.areaName
					}
					this.$emit('successCityData',obj)
				} else if(this.current === 'city'){
					this.cityId = data.code
					this.cityName = data.name
					this.areaId = null
					this.areaName = null
					this.current = 'area'
				} else if(this.current === 'province'){
						this.provinceId = data.code
						this.provinceName = data.name
						this.cityId = null
						this.cityName = null
						this.areaId = null
						this.areaName = null
						this.current = 'city'
				}
			},
			currentFn(type){
				this.current = type
			},
		},
		watch: {
			isOpen: {
				handler() {
					if(this.isOpen) {
						if(!this.cityData.length) this.getData() // 如果没有数据则加载数据
							
						this.openDialog();
					} else {
						this.closeDialog();
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.city-main{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 400rpx;
	padding: 32rpx;
	box-sizing: border-box;
	background-color: #FFFFFF;
	.title{
		font-size: 34rpx;
		text-align: center;
	}
	.address{
		height: 80rpx;
		line-height: 80rpx;
		&-item{
			margin-right: 16rpx;
		}
		.active{
			color: #FFA509;
			font-size: 32rpx;
		}
	}
	.select-box{
		height: calc(100% - 200rpx);
		overflow-y: scroll;
		&-item{
			height: 60rpx;
		}
		.active{
			color: #FFA509;
		}
	}
}
</style>
