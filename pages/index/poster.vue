<template>
	<view class="index">
		<view class="page-index">
			<view class="hd">
				<view class="input-con">
					<input type="span" placeholder="搜索施工项目和工艺/价钱" :value="keywords" @input="handleChange" @confirm="startSearch(keywords)" class="input-el" />
					<view class="icon-btn" v-if="keywords.length > 0" @click="clearKeywords">
						<view class="icon-con"><view class="iconfont iconguanbi"></view></view>
					</view>
				</view>
				<view class="search-btn" @click="startSearch(keywords)">搜索</view>
			</view>
			<view class="search-con ">
				<view class="tab-con">
					<view v-for="(item, index) in topData" :class="['teb-item G-Talign-center', { active: item == tabType }]" :key="index" @click="changeTab(item)">{{ item }}</view>
				</view>
				<view class="search-items">
					<view v-for="(item, index) of hotData[tabType]" class="search-item" :key="index" @click="goSearchPage(item)">
						<span class="search-item-num">{{ index + 1 }}</span>
						<span class="search-item-span">{{ item }}</span>
					</view>
				</view>
			</view>
			<view class="search-con flex2" v-if="historyData.length > 0">
				<view class="search-title">历史搜索</view>
				<view class="search-items">
					<view v-for="(item, index) of historyData" class="search-item" :key="item" @click="goSearchPage(item)">
						<span class="search-item-span G-limit-one">{{ item }}</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			keywords: '',
			historyData: uni.getStorageSync('searchHistory') || [],
			tabType: '拆除',
			topData: [],
			hotData:{
				拆除: ['铲除原墙普通腻子', '铲除原墙耐水腻子', '拆除原有墙地砖', '拆除吊顶'],
				水电: ['水路改造4分管', '改下水管', '弱电改造', '水表移位'],
				木工: ['门套口找方', '镜面打底', '石膏板隔断', '石膏板做假梁'],
				瓦工: ['墙面拉毛', '墙面挂网处理', '铺贴墙砖', '薄贴铺墙砖'],
				油工: ['墙面处理（刷墙固）', '墙顶面底层石膏找平', '墙面石膏板找平', '刷漆']
			}
		};
	},
	mounted() {
		this.topData = Object.keys(this.hotData);
	},
	methods:{
		  changeTab(tabType) {
			  console.log(tabType,"1212")
		    this.tabType = tabType;
		  }
	}
};
</script>
<style lang="scss" scoped>
.index {
	background-color: #f7f8f9;
	min-height: 100vh;
	.flex2 {
		padding-bottom: 100px;
	}

	&.G-iphone {
		.flex2 {
			padding-bottom: 134px;
		}
	}
}

.page-index {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.hd {
	display: flex;
	align-items: center;
	height: 56px;
	padding: 0 15px;
	background-color: #fff;

	.input-con {
		position: relative;
		width: 290px;
		background-color: #f7f8f9;
		border-radius: 4px;

		.input-el {
			width: 255px;
			height: 36px;
			padding: 0 10px;
			font-size: 14px;
		}

		.icon-btn {
			position: absolute;
			z-index: 3;
			right: 0;
			top: 0;
			height: 36px;
			width: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.icon-con {
			width: 18px;
			height: 18px;
			border-radius: 50%;
			background-color: #ecf0f3;
			span-align: center;
			line-height: 18px;

			.iconfont {
				font-size: 14px;
				color: #a7adb6;
			}
		}
	}

	.search-btn {
		width: 55px;
		height: 36px;
		span-align: center;
		line-height: 36px;
		color: #222;
		font-weight: 500;
	}
}

.search-con {
	background-color: #fff;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	&.flex2 {
		flex: 2;
		margin-top: 15px;
		border-radius: 10px;
	}
	.tab-con {
		width: 375px;
		height: 50px;
		display: flex;
		.teb-item {
			position: relative;
			flex: 1;
			span-align: center;
			line-height: 50px;
			font-size: 16px;
			color: #a7adb6;
			font-weight: 400;
			&.active {
				font-weight: 500;
				color: #0000af;
				&::after {
					background-color: #0000af;
				}
			}
			&::after {
				content: '';
				position: absolute;
				width: 20px;
				height: 2px;
				transform: translate(-50%);
				left: 50%;
				bottom: 0;
			}
		}
	}
	.search-title {
		font-size: 14px;
		line-height: 20px;
		color: #a7adb6;
		padding: 20px 20px 0 20px;
	}

	.search-items {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 20px 20px 5px 20px;
		.search-item {
			display: flex;
			width: 160px;
			margin-bottom: 15px;
			.search-item-num {
				font-size: 14px;
				font-weight: 500;
				color: #ffcb57;
				line-height: 20px;
				margin-right: 8px;
			}

			.search-item-span {
				display: inline-block;
				font-size: 14px;
				color: #222;
				line-height: 20px;
			}
		}
	}
}
</style>
