/**
 * 作用：搜索处理
 * 使用方式：
 * handleSearch(data[搜索内容], callback[获取数据函数], fields[传递参数对象], name[搜索标识], page_no[当前页标识])
 * scrollBackToTop --页面返回顶部
 */

export default {
	methods: {
		// 搜索
		handleSearch(data, callback, fields, name, page_no) {
			fields[name] = data;
			fields[page_no] = 1;
			this.scrollBackToTop();
			callback();
		},
		// 返回顶部
		scrollBackToTop() {
			this.scrollTop = 1;
			setTimeout(() => {
				this.scrollTop = null;
			}, 0)
		}
	}
}