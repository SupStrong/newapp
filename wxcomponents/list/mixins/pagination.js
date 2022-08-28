/**
 * 作用：分页处理
 * 使用方式：
 * refresherrefresh(callback[获取数据函数], fields[传递参数对象], page_no[当前页标识], page_max[最大页标识], refresh[是否下拉刷新])
 * scrolltolower同上
 */

export default {
	methods: {
		// 下拉刷新
		refresherrefresh(callback = this.getList, fields = this.params, page_no = 'page_no', page_max = 'page_max', refresh = 'refresh') {
			fields[refresh] = true;
			fields[page_no] = 1;
			// uni.vibrateShort({});
			callback();
		},
		// 触底加载
		scrolltolower(callback = this.getList, fields = this.params, page_no = 'page_no', page_max = 'page_max') {
			if(fields[page_no] >= fields[page_max]) return;
			fields[page_no] += 1;
			// uni.vibrateShort({});
			callback();
		},
	}
}