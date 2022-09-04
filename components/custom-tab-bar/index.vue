<template>
	<cover-view class="tab-bar">
		<cover-view class="tab-bar-border"></cover-view>
		<cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item" @click.stop.prevent="switchTab(item, index)">
			<cover-image :src="selected === index ? item.selectedIconPath : item.iconPath"></cover-image>
			<cover-view :style="selected === index ? selectedColor : color">{{ item.text }}</cover-view>
		</cover-view>
	</cover-view>
</template>

<script>
const defaultTabList = ['/pages/index/index', '/pages/index/good', '/pages/index/index', '/pages/index/index', '/pages/index/index'];
export default {
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		color: {
			type: String,
			default: '#333333'
		},
		selectedColor: {
			type: String,
			default: '#396ffc'
		}
	},
	data() {
		return {
			selected: 0
		};
	},
	methods: {
		switchTab(data, index) {
			const url = data.pagePath;
			const isTabBar = defaultTabList.find(item => item === url);
			if(isTabBar) {
				uni.switchTab({
					url
				})
			} else {
				uni.navigateTo({
					url,
				});
			}
			uni.switchTab({
				url
			});
			this.selected = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 48px;
	background: white;
	display: flex;
	padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
	background-color: rgba(0, 0, 0, 0.33);
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 1px;
	transform: scaleY(0.5);
}

.tab-bar-item {
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.tab-bar-item cover-image {
	width: 27px;
	height: 27px;
}

.tab-bar-item cover-view {
	font-size: 10px;
}
</style>
