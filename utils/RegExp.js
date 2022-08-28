/**
 * 富文本处理
 **/
	// 富文本处理 - 只留下文字
	export function handleRichText(data) {
		if(data) {
			let answer = data.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
			answer = answer.replace(/\s/g, ''); //去除所有空格
			answer = answer.replace(/&nbsp;/gi, ''); //去掉nbsp
			return answer;
		}
		return "";
	}
	
	//控制小程序中图片大小
	export function formatRichText(html) {
		
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


/**
 * 字符串处理
 **/
// 字符串 - 表情处理
export function filterEmoji(text) {
	if(!text) return "";
	return text.replace(/[\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
}


// 过滤文件格式
export function getFileFormat(file) {
	if(!file) {
		uni.showToast({
			title: '请传入文件地址',
			icon: 'none'
		})
		return;
	}
	return file.replace(/.+\./, "");
}

export function checkFileType(type = 'image', filePath) {
	let reg;
	if(type === 'image') reg = /\.(jpg|jpeg|png|gif)$/i;
	else reg = /\.(doc|xls|ppt|pdf|docx|xlsx|pptx)$/i;
	
	if (!reg.test(filePath) ) {
	   return  false;     
	} else {
	   return true; 
	}
}

export function previewFile(filePath) {
	// console.log(filePath)
	// console.log(checkFileType('file', filePath))
	const fileType = getFileFormat(filePath);
	if(checkFileType('image', filePath)) {
		uni.previewImage({
			urls: [filePath],
			longPressActions: {
				itemList: ['发送给朋友', '保存图片', '收藏'],
				success: function(data) {
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			}
		});
	} else if(checkFileType('file', filePath)) {
		uni.downloadFile({
		  url: filePath, //仅为示例，并非真实的资源	
		  success (res) {
			if (res.statusCode === 200) {
				let filePath =  res.tempFilePath
				uni.openDocument({
					filePath: filePath,
					showMenu: true,
					success: function (res) {
					  console.log(res, '打开文档成功');
					},
					fail(err) {
						console.log(err, '失败')
					}
				});
			}
		  }
		})
	}
}

// 判断文件类型
export function matchType(fileName) {
	// 后缀获取
	var suffix = '';
	// 获取类型结果
	var result = '';
	try {
	  var flieArr = fileName.split('.');
	  suffix = flieArr[flieArr.length - 1];
	} catch (err) {
	  suffix = '';
	}
	// fileName无后缀返回 false
	if (!suffix) {
	  result = false;
	  return result;
	}
	// 图片格式
	var imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
	// 进行图片匹配
	result = imglist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'image';
	  return result;
	};
	// 匹配txt
	var txtlist = ['txt'];
	result = txtlist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'txt';
	  return result;
	};
	// 匹配 excel
	var excelist = ['xls', 'xlsx'];
	result = excelist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'excel';
	  return result;
	};
	// 匹配 word
	var wordlist = ['doc', 'docx'];
	result = wordlist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'word';
	  return result;
	};
	// 匹配 pdf
	var pdflist = ['pdf'];
	result = pdflist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'pdf';
	  return result;
	};
	// 匹配 ppt
	var pptlist = ['ppt'];
	result = pptlist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'ppt';
	  return result;
	};
	// 匹配 视频
	var videolist = ['mp4', 'm2v', 'mkv'];
	result = videolist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'video';
	  return result;
	};
	// 匹配 音频
	var radiolist = ['mp3', 'wav', 'wmv'];
	result = radiolist.some(function (item) {
	  return item == suffix;
	});
	if (result) {
	  result = 'radio';
	  return result;
	}
	// 其他 文件类型
	result = 'other';
	return result;
  }