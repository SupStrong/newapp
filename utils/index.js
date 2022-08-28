import _get from 'lodash/get'
import _findKey from 'lodash/findKey'
import _pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import {
	getStoreStatu
} from '@/api/modules/shops.js';
import format from 'date-fns/format';
export function dateFormat(timestamp, formats, unify = true) {
	// formats格式包括
	// 1. Y-m-d
	// 2. Y-m-d H:i:s
	// 3. Y年m月d日
	// 4. Y年m月d日 H时i分
	formats = formats || "Y-m-d";

	const zero = function(value) {
		if (unify && value < 10) {
			return "0" + value;
		}
		return value;
	}

	const myDate = timestamp ? new Date(timestamp) : new Date();

	const year = myDate.getFullYear();
	const month = zero(myDate.getMonth() + 1);
	const day = zero(myDate.getDate());

	const hour = zero(myDate.getHours());
	const minite = zero(myDate.getMinutes());
	const second = zero(myDate.getSeconds());

	return formats.replace(/Y|m|d|H|i|s/gi, function(matches) {
		return {
			Y: year,
			m: month,
			d: day,
			H: hour,
			i: minite,
			s: second,
		} [matches];
	});
}

export function parseTime(time, cFormat) {
	if (arguments.length === 0) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if (('' + time).length === 10) time = parseInt(time) * 1000
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

export function calcTimer(totalSec) {
	let remainingSec = totalSec
	const dd = Math.floor(totalSec / 24 / 3600)
	remainingSec -= dd * 3600 * 24
	const hh = Math.floor(remainingSec / 3600)
	remainingSec -= hh * 3600
	const mm = Math.floor(remainingSec / 60)
	remainingSec -= mm * 60
	const ss = Math.floor(remainingSec)
	return {
		dd: 0 < dd && dd < 10 ? '0' + dd : dd,
		hh: hh > 9 ? hh : '0' + hh,
		mm: mm > 9 ? mm : '0' + mm,
		ss: ss > 9 ? ss : '0' + ss
	}
}

// 解析字符串
export function getQueryVariable(herf) {
	const url = herf.split('?')
	let query = {}
	if (url[1]) {
		const str = url[1]
		// const str = url.substr(1)
		const pairs = str.split("&")
		for (let i = 0; i < pairs.length; i++) {
			const pair = pairs[i].split("=")
			query[pair[0]] = pair[1]
		}
	}
	return query
}
const isPrimitiveType = (val, type) => Object.prototype.toString.call(val) === type

export function isFunction(val) {
	return isPrimitiveType(val, '[object Function]')
}

export function isNumber(val) {
	return isPrimitiveType(val, '[object Number]')
}

export function isObject(val) {
	return isPrimitiveType(val, '[object Object]')
}

export function isArray(arr) {
	return Array.isArray(arr)
}

export function isString(val) {
	return typeof val === 'string'
}

export function pickBy(arr, keyMaps = {}) {
	const picker = (item) => {
		const ret = {}

		Object.keys(keyMaps).forEach(key => {
			const val = keyMaps[key]

			if (isString(val)) {
				ret[key] = _get(item, val)
			} else if (isFunction(val)) {
				ret[key] = val(item)
			} else {
				ret[key] = val
			}
		})

		return ret
	}

	if (isArray(arr)) {
		return arr.map(picker)
	} else {
		return picker(arr)
	}
}

export function checkUpdateVersion() {
	//判断微信版本是否 兼容小程序更新机制API的使用
	if (uni.canIUse('getUpdateManager')) {
		//创建 UpdateManager 实例
		const updateManager = uni.getUpdateManager();
		//检测版本更新
		updateManager.onCheckForUpdate(function(res) {
			// 请求完新版本信息的回调
			if (res.hasUpdate) {
				//监听小程序有版本更新事件
				updateManager.onUpdateReady(function() {
					//TODO 新的版本已经下载好，调用 applyUpdate 应用新版本并重启 （ 此处进行了自动更新操作）
					updateManager.applyUpdate();
				})
				updateManager.onUpdateFailed(function() {
					// 新版本下载失败
					uni.showModal({
						title: '已经有新版本喽~',
						content: '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开哦~',
					})
				})
			}
		})
	} else {
		//TODO 此时微信版本太低（一般而言版本都是支持的）
		uni.showModal({
			title: '溫馨提示',
			content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
		})
	}
}
export function handleScroll(e, _this) {
	let fun = throttle((e, _this) => {
		const {
			scrollTop,
			scrollHeight
		} = e.detail
		const offset = 300
		if (scrollHeight < 600) return
		if (scrollTop > offset && !_this.showBackToTop) {
			_this.scrollTop = scrollTop;
			_this.showBackToTop = true;
		} else if (_this.showBackToTop && scrollTop <= offset) {
			_this.showBackToTop = false
		}
	}, 70)
	return fun(e, _this);
}
export function nextPage(_this) {
	let fun = async (_this) => {
		if (!_this.page.hasNext || _this.page.isLoading) return
		// 上拉触底
		_this.page.isLoading = true
		const {
			page_no,
			page_size
		} = _this.page
		const curPage = page_no + 1
		const {
			total
		} = await _this.fetch({
			page_no: curPage,
			page_size
		})
		if (!total || curPage >= Math.ceil(+total / page_size)) {
			_this.page.hasNext = false
		}
		_this.page = {
			..._this.page,
			total,
			page_no: curPage,
			isLoading: false,
		}
	}
	return fun(_this);

}

export function resetPage(_this, cb = () => {}) {
	const page = {
		...(_this.page || {}),
		page_no: 0,
		total: 0,
		isLoading: false,
		hasNext: true
	}
	_this.page = page;
	cb();

}


export function scrollBackToTop(_this) {
	_this.scrollTop = 1;
	setTimeout(() => {
		_this.scrollTop = null;
	}, 100)
}
export function getStoreStatus() {
	let fun = async function() {
		if ('APP_PLATFORM' === 'standard') {
			const {
				nostores_status
			} = await getStoreStatu()
			if (nostores_status === 'true') {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}
	return fun();
}
export function toast(text) {
	uni.showToast({
		title: text,
		icon: "none",
		duration: 1000
	})
}
export function authSetting(scope, succFn, errFn) {
	uni.getSetting({
		success(res) {
			const result = res.authSetting[`scope.${scope}`]
			if (result === undefined) {
				uni.authorize({
					scope: `scope.${scope}`
				}).then(succFn, errFn)
			} else if (!result) {
				uni.openSetting().then(succFn, errFn)
			} else {
				succFn()
			}
		}
	})
}
export function showPopup(text) {
	uni.showToast({
		title: text,
		icon: 'none',
		duration: 2000
	})
}

export function formatTime(time, formatter = 'yyyy-MM-dd') {
	const newTime = time.toString().length < 13 ? time * 1000 : time
	return format(newTime, formatter)
}

export function formatRichText(html) {
	//控制小程序中图片大小
	let newContent = ''
	newContent = html.replace(/<img[^>]*>/gi,
		function(match) {
			match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
			match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
			match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
			return match;
		});
	newContent = newContent.replace(/style="[^"]+"/gi,
		function(match) {
			match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
			return match;
		});
	newContent = newContent.replace(/<br[^>]*\/>/gi, '');
	newContent = newContent.replace(/\<img/gi,
		'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
	return newContent;
}

export function getBrowserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var browser = 'unknown';
	if (userAgent.indexOf("IE") != -1) { //字符串含有IE字段，表明是IE浏览器
		browser = "IE";
	} else if (userAgent.indexOf('Firefox') != -1) { //字符串含有Firefox字段，表明是火狐浏览器
		browser = "Firefox";
	} else if (userAgent.indexOf('OPR') != -1) { //Opera
		browser = "Opera";
	} else if (userAgent.indexOf('Chrome') != -1) { //Chrome
		browser = "Chrome";
	} else if (userAgent.indexOf('Safari') != -1) { //Safari
		browser = "Safari";
	} else if (userAgent.indexOf('Trident') != -1) { //IE内核
		browser = 'IE 11';
	}
	return browser;
}

// 百度小程序设置meta
export function swanSetMeta(title='', description='', keywords='') {
	
	// #ifdef MP-BAIDU
	swan.setPageInfo({
		title,
		keywords,
		description,
		success: res => {
			// console.log('setPageInfo success', res);
		},
		fail: err => {
			// console.log('setPageInfo fail', err);
		}
	})
	// #endif
}

// 富文本 - 只留下文字
export function handleRichText(data) {
	if(data) {
		let answer = data.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
		answer = answer.replace(/\s/g, ''); //去除所有空格
		answer = answer.replace(/&nbsp;/gi, ''); //去掉nbsp
		return answer;
	}
	return "";
}

// 生成随机数
export function getRandomItem(list) {
	return list[Math.floor(Math.random()*list.length)];
}

// 删除缓存用户信息
export function removeStorage() {
	uni.removeStorageSync('user');
	uni.removeStorageSync('common');
	uni.removeStorageSync('homeInfo');
	uni.removeStorageSync('appInfo');
}

// 字符串表情处理
export function filterEmoji(text) {
	if(!text) return "";
	return text.replace(/[\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
}

/**
 * 参数处理 
 **/
 // 1. 对象格式 => key=value&key=value
 export function filterOptions(options) {
	 let params = '';
	 const keyList = Object.keys(options);
	 if(keyList && keyList.length) {
	 	keyList.forEach((key, index) => {
	 		params += `${key}=${options[key]}${(keyList.length - 1) > index ? '&' : ''}`
	 	})
	 	return params;
	 }
	 return '';
 }
 
 // 处理路由参数
 export function urlToObj(str) {
	let obj = {};
	let arr1 = str.split('?');
	const query = arr1[1] || arr1[0];
	let arr2 = query.split('&');
	for (let i = 0; i < arr2.length; i++) {
		let res = arr2[i].split('=');
		obj[res[0]] = res[1];
	}
	return obj;
}


// 秒杀倒计时
export function countDown(endTime) {
	let nowTime = +new Date();   //返回的是当前时间总的总的毫秒数
	let times = (endTime - nowTime) /1000;  //times是剩余的总的秒数
	let h = parseInt(times / 60 / 60 % 24);    //时
	h = h < 10 ? '0' + h : h;
	let  m = parseInt(times / 60 % 60);  //分
	m = m < 10 ? '0' + m : m;
	let s = parseInt(times % 60);   //当前的秒
	s = s < 10 ? '0' + s : s;
}

// 与app进行交互
export function interact(url = '') {
  let frame = document.createElement('iframe')
  frame.style.height = '0px'
  frame.style.width = '0px'
  frame.style.display = 'none'
  frame.setAttribute('src', url)
  document.body.appendChild(frame)
  setTimeout(() => {
    document.body.removeChild(frame)
  }, 50)
}

/**
 * @function correspondUrl 映射链接
 * @param url 需要映射的链接
 * @description 支持，商品，案例方案，专题，文章，视频
 */
export function correspondUrl(url) {
	if(!url) return '';
	
	let path, query, bcPath;
	const i = url.indexOf("?");
	
	if(i > -1) {
		path = url.slice(0, i);
		query = url.slice(i);
	} else {
		path = url;
	}
	
	switch(path) {
		case '/publicPage/article/index':
			bcPath = '/pagesMarketing/source/article'
			break;
		case '/publicPage/play/index':
			bcPath = '/pagesMarketing/source/play'
			break;
		case '/pages/common/topic':
			bcPath = '/pagesMarketing/source/topic'
			break;
		case '/shoppingMall/espier/espier-detail':
			bcPath = '/pagesMarketing/goods/detail'
			break;
		case '/pagesMarketing/programme/detail':
			bcPath = '/pagesMarketing/programme/detail'
			break;
		default:
			bcPath = path;
	}
	return query ? bcPath + query : bcPath;
}