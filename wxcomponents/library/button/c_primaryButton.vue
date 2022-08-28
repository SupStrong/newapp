<template>
  <view>
    <view class="select">
      <view class="G-t-center select-box" @click="handlePoster('chang')">
        <image
          v-if="isCurrent == 'chang'"
          class="image-bg"
          :src="baseUrlImg + '/common/chang.png'"
          mode="scaleToFill"
        />
        <image
          v-if="isCurrent == 'duan'"
          class="image-bg"
          :src="baseUrlImg + '/common/chang1.png'"
          mode="scaleToFill"
        />
        <image
          v-if="isCurrent == 'chang'"
          class="image-tag"
          :src="baseUrlImg + '/common/poster_s.png'"
          mode="scaleToFill"
        />
        <view class="G-Fsize-11 G-color-333">长图</view>
      </view>
      <view class="G-t-center select-box" @click="handlePoster('duan')">
       <image
          v-if="isCurrent == 'duan'"
          class="image-bg"
          :src="baseUrlImg + '/common/duan.png'"
          mode="scaleToFill"
        />
        <image
          v-if="isCurrent == 'chang'"
          class="image-bg"
          :src="baseUrlImg + '/common/duan1.png'"
          mode="scaleToFill"
        />
        <image
          v-if="isCurrent == 'duan'"
          class="image-tag"
          :src="baseUrlImg + '/common/poster_s.png'"
          mode="scaleToFill"
        />
        <view class="G-Fsize-11 G-color-333">短图</view>
      </view>
    </view>
    <view
      class="button"
      :style="{
        width: width,
        background: bgColor,
        color: color
      }"
      @click="handleTrigger"
    >
      <slot>
        <text class="button-text">{{ text }}</text>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      baseUrlImg: 'https://vue-oss.juranguanjia.com/weapp/image',
      isCurrent: 'chang'
    }
  },
  props: {
    text: {
      type: String,
      default: '默认按钮'
    },
    width: {
      type: String,
      default: '686rpx'
    },
    bgColor: {
      type: String,
      default: '#0060E5'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    handleTrigger(event) {
      this.$emit('handleTrigger', event)
    },
    handlePoster(type) {
      this.isCurrent = type
      this.$emit('handleCurrent', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  height: 150rpx;
  border-radius: 32rpx 32rpx 0px 0px;
  // backdrop-filter: blur(4px);
  display: flex;
  justify-content: space-between;
  margin: 32rpx 208rpx 0 208rpx;
  .select-box{
    position: relative;
  }
  .image-bg {
    width: 56rpx;
    height: 64rpx;
  }
  .image-tag {
    position: absolute;
    height: 20rpx;
    width: 20rpx;
    top: -5px;
    right: -5px;
  }
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76rpx;
  border-radius: 42rpx;
  font-size: 28rpx;
  font-weight: bold;
  line-height: 1;
  color: #fff;
}
</style>
