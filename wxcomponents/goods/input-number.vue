<template>
	<view class="at-input-number" :class="{ 'at-input-number--lg': size }" :style="customStyle">
		<view class="at-input-number__btn" :class="{ 'at-input-number--disabled': inputValue <= min || disabled }" @click="handleClick('minus')">
			<text class="at-icon at-icon-subtract at-input-number__btn-subtract"></text>
		</view>
		<input class="at-input-number__input" :style="{'width': width ? width : ''}" :type="type" :value="handleValue(value)" disabled @input="handleInput" @blur="handleBlur" />
		<view class="at-input-number__btn" :class="{ 'at-input-number--disabled': inputValue >= max || disabled }" @click="handleClick('plus')">
			<text class="at-icon at-icon-add at-input-number__btn-add"></text>
		</view>
	</view>
</template>

<script>
	
import { getDeviceByCate } from '@/api/modules/myHome.js';
import _toString from 'lodash/toString'
function addNum(num1, num2) {
	let sq1, sq2;
	try {
		sq1 = _toString(num1).split('.')[1].length;
	} catch (e) {
		sq1 = 0;
	}
	try {
		sq2 = _toString(num2).split('.')[1].length;
	} catch (e) {
		sq2 = 0;
	}
	const m = Math.pow(10, Math.max(sq1, sq2));
	return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}
const objectToString = function(style) {
  if (style && typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  } else if (style && typeof style === 'string') {
    return style
  }
  return null
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num) {
	if (num === '') return '0';

	const numStr = _toString(num);
	if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
		// 处理01变成1,并且不处理1.
		return _toString(parseFloat(num));
	}
	return _toString(num);
}
export default {
	data() {
		return {
			deviceList: [],
			name: ''
		};
	},
	props: {
		customStyle: {
			type:String,
			default:''
		},
		className: {
			type:String,
			default:''
		},
		disabled: {
			type:Boolean,
			default:false
		},
		value: {
			type: [Number, String],
			default: 1
		},
		width: {
			type:Number,
			default:0
		},
		min: {
			type:Number,
			default:0
		},
		max: {
			type:Number,
			default:100
		},
		step: {
			type:Number,
			default:1
		},
		size: {
			type:String,
			default:''
		}
	},
	mounted() {},
	onShow() {},
	methods: {
		handleClick(clickType) {
			const lowThanMin = clickType === 'minus' && this.value <= this.min;
			const overThanMax = clickType === 'plus' && this.value >= this.max;
			if (lowThanMin || overThanMax || this.disabled) {
				const deltaValue = clickType === 'minus' ? -this.step : this.step;
				const errorValue = addNum(this.value, deltaValue);
				if (this.disabled) {
					this.handleError({
						type: 'DISABLED',
						errorValue
					});
				} else {
					this.handleError({
						type: lowThanMin ? 'LOW' : 'OVER',
						errorValue
					});
				}
				return;
			}
			const deltaValue = clickType === 'minus' ? -this.step : this.step;
			let newValue = addNum(this.value, deltaValue);
			newValue = this.handleValue(newValue);
			this.$emit('change',newValue)
		},

		handleValue(value) {
			const max = this.max;
			const min = this.min;
			let resultValue = value === '' ? min : value;
			// 此处不能使用 Math.max，会是字符串变数字，并丢失 .
			if (resultValue > max) {
				resultValue = max;
				this.handleError({
					type: 'OVER',
					errorValue: resultValue
				});
			}
			if (resultValue < min) {
				resultValue = min;
				this.handleError({
					type: 'LOW',
					errorValue: resultValue
				});
			}
			resultValue = parseValue(resultValue);
			return resultValue;
		},

		handleInput(e, ...arg) {
			const { value } = e.target;
			if (this.disabled) return;

			const newValue = this.handleValue(value);
			this.$emit('change',{newValue, e, ...arg})
			return newValue;
		},

		handleBlur(...arg) {
			this.$emit('blur',...arg)
		},

		handleError(errorValue) {
			if (!this.onErrorInput) {
				return;
			}
			this.$emit('ErrorInput',errorValue)
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/css/common/imports.scss';
@import '@/static/css/common/iconfont.scss';
.at-input-number {
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border-top: 1PX #d6e4ef solid;
  border-bottom: 1PX #d6e4ef solid;
  border-right: 1PX #d6e4ef solid;
  border-left: 1PX #d6e4ef solid;
  font-size: 28rpx;
  border-radius: 8rpx;
  background-color: #FFF;
  overflow: hidden;
  /* elements */
  /* modifiers */
}
.at-input-number__btn {
  position: relative;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 12rpx;
  font-size: 20rpx;
  color: #ff593d;
  text-align: center;
  line-height: 1;
  overflow: hidden;
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
  .at-icon{
	  font-size: 20rpx;
  }
}
.at-input-number__btn:active {
  background-color: #F0F0F0;
}
.at-input-number__btn-subtract, .at-input-number__btn-add {
  font-size: 30rpx;
  line-height: 30rpx;
}
.at-input-number__input,
.at-input-number input {
  display: inline-block;
  width: 80rpx;
  height: auto;
  border-radius: 0;
  color: #333;
  font-size: 28rpx;
  text-align: center;
  line-height: 1.5;
  border-left: 1PX #d6e4ef solid;
  border-right: 1PX #d6e4ef solid;
}
.at-input-number--disabled {
  color: #CCC;
}
.at-input-number--disabled:active {
  background-color: inherit;
}
.at-input-number--lg .at-input-number__btn {
  padding: 20rpx;
  font-size: 36rpx;
}
.at-input-number--lg .at-input-number__btn-subtract, .at-input-number--lg .at-input-number__btn-add {
  font-size: 36rpx;
}
.at-input-number--lg input,
.at-input-number--lg .at-input-number__input {
  padding: 12rpx;
  font-size: 36rpx;
  width: 120rpx;
}
</style>
