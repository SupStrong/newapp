<template>
	<view>
		 <view class="tab-box">
			<scroll-view scrollX class="tabs-list">
				<view class="tabs-list">
					<view
						@tap="handleTapTab"
						:class="'ignoreT2 ptp_exposure tab-item ' + (item.key === '4' ? 'anchor' : '') + ' ' + (index === active ? 'active' : '')"
						:data-index="index"
						data-ptpid="f6a7-18cd-9f87-3c05"
						v-for="(item, index) in tabList"
						:key="index"
					>
						{{ item.value }}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        };
    },
    props: {
        tabList: {
            type: Array,
            default: () => []
        }
    },
    methods: {
		// 修改tab下标
        handleTapTab: function (t) {
            var a = t.currentTarget.dataset.index;
            if (this.active !== a) {
				this.active = a;
				// 执行父组件方法
                this.$emit('tabChange', {detail: {index: a}});
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.tab-box {
    background: #fff;
    border-radius: 32rpx 32rpx 0 0;
}

.tabs-list {
    display: block;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.tabs-list::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}

.tab-item {
    display: inline-block;
    min-width: 64rpx;
    color: #101d37;
    font-weight: 700;
    font-size: 28rpx;
    height: 106rpx;
    text-align: center;
    line-height: 124rpx;
    margin-right: 50rpx;
    position: relative;
    vertical-align: bottom;
    overflow: initial;
}

.tab-item.active {
    font-size: 36rpx;
}

.tab-item.active:after {
    content: '';
    width: 50rpx;
    height: 14rpx;
    position: absolute;
    bottom: 2rpx;
    left: 50%;
    margin-left: -25rpx;
    background: url('https://qiniu-image.qtshe.com/newHomePage/icon_line1.png') no-repeat;
    background-size: 100% 100%;
}

.tab-item:first-child {
    min-width: 84rpx;
    margin-left: 32rpx;
}

.tab-item:last-child {
    margin-right: 32rpx;
}

.anchor:before {
    width: 50rpx;
    height: 28rpx;
    position: absolute;	
    content: '';
    top: 20rpx;
    left: 62rpx;
    background: url('https://qiniu-image.qtshe.com/optimizeIndex/hot.png') no-repeat;
    background-size: 100% 100%;
}

</style>
