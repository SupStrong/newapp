export function getImageTempPath(src) {
	return new Promise((reslove, reject) => {
		try {
			uni.getImageInfo({
				src,
				success: (res) => {
					reslove(res.path);
				}
			})
		} catch (error) {
			reject(error)
		}
	})
}

export function getElementInfo(element, self) {
	return new Promise((resolve, reject) => {
		try {
			let query = uni.createSelectorQuery().in(self);
			query
				.selectAll(element)
				.boundingClientRect(data => {
					resolve(data)
				})
				.exec()
		} catch (error) {
			reject(error)
		}
	})
}
	