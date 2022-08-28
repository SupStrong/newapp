
// 防抖
export function debounce (fn, wait) {  // fn表示需要执行的方法，wait表示setTimeout需要的时间。
  var t = null;
  return function (_this) {
    if (t) clearTimeout(t);  // 如果有以前的定时器需要先清理
    if(!t) fn(_this);  // 如果没有定时器则执行函数，这种写法第一次不会有延迟，如果需要第一次有延迟的注释这一行，将fn()写入定时器中
    t = setTimeout(function () { 
      // fn();
      t = null;
    }, wait)
  }  
}

// 节流
export function throttle (fn, wait) {
  var begin = 0;  // 开始时间
  return function (_this) {	
  	// 为什么这里的this指向的不是window
    var cur = new Date().getTime();  // 获取当前时间戳
    if (cur - begin > wait) {
      fn(_this);
      begin = cur;
    }
  }
}