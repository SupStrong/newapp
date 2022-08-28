let userSource = {
	source: 0,
	// #ifdef MP-WEIXIN
	source: 1,
	// #endif
	
	// #ifdef MP-ALIPAY
	source: 2,
	// #endif
	
	// #ifdef H5
	source: 3,
	// #endif
	
	// #ifdef MP-TOUTIAO
	source: 33,
	// #endif
	
	// #ifdef MP-BAIDU
	source: 34,
	// #endif
	
	// #ifdef QUICKAPP-WEBVIEW-HUAWEI
	source: 35,
	// #endif
}

export default userSource;