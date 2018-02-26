/*
* 过滤href
* 如果是http开头，则保留 eg: http://www.baidu.com -> http://www.baidu.com
* 如果是协议的，则去掉协议保留后面路由信息 eg://cms?path=nav1/home -> /cms?path=nav1/home
* */
export function hrefFormat(value) {
  let link = 'javascript:void(0)'
  if (value) {
    link = util.returnLink(value);
  }
  return link;
}


// 添加数据格式化显示的filter， 默认为2
export function numberFormat(value, digit = 2) {
  if (value) {
    var numSplits = parseFloat(value).toFixed(digit).split('.');
    var num = numSplits[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return numSplits.length > 1 ? num + '.' + numSplits[1] : num;
  } else {
    return '0.00';
  }

}

export function numberFromString(value) {
  if (value) {
    return value + '';
  } else {
    return '0';
  }
}

// 添加数据格式化显示的filter， 默认为2
export function callnumberFormat(value, digit = 2) {
  var numSplits = parseFloat(value).toFixed(digit).split('.');
  var num = numSplits[0];
  return numSplits.length > 1 ? num + '.' + numSplits[1] : num;
}

// 格式化显示座机号码 server-cell  eg: 4000402098 -> 400-402-098
export function serviceCellFormat(value) {
  return value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
}

// 添加时间格式化  ，  将时间点转为 yyyy-mm-dd hh-mm-ss
export function dateFormat(value, fmt = 'yyyy-MM-dd hh:mm:ss') {

  if (value) {
    value = new Date(parseInt(value));

    var o = {
      "M+": value.getMonth() + 1, //月份
      "d+": value.getDate(), //日
      "h+": value.getHours(), //小时
      "m+": value.getMinutes(), //分
      "s+": value.getSeconds(), //秒
      "q+": Math.floor((value.getMonth() + 3) / 3), //季度
      "S": value.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (value.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  } else {
    return '1970-01-01 08:00';
  }

}

// 百分比计算
export function percentage(value) {
  if (value == 0) {
    return 0;
  }
  let num = (1 - value).toFixed(2);
  return num * 100;
}


//链接页面跳转
export function pageType(value) {
  if (value) {
    switch (value.split('/')[0]) {
      case '1':
        return '/news/list/' + value.split('/')[1];
      case '2':
        return '/common/' + value.split('/')[1];
      case '3':
        return '/contact/application/' + value.split('/')[1];
      case '4':
        return '/contact/message/' + value.split('/')[1];

    }
  } else {
    return '/'
  }
}

// 截取首字母
export function firstLetter(value) {
  if (value) {
    return value.substr(0, 1)
  } else {
    return ''
  }

}

