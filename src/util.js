import {calHeight, refresh, onDelete, onUpdate, onUploadSuccess} from './util_retrieve';
import {onSubmitDialog, refreshDialog, initDataModify,} from './util_modify';

// self define
let mySizeImg = (url, prefix) => {
  return doImageUrl(url, prefix);
};

let myToast = (self, message, type) => {
  self.$message({
    message: message || '未知错误, 请联系客服',
    type: type || 'error'
  });
};

let myNotify = (self, message, type) => {
  myToast(self, message, type);
};

let myAlert = (self, message, callback) => {
  self.$alert(message || '未知错误, 请联系客服', '温馨提示', {
    type: 'error',
    confirmButtonText: '确定',
    callback: () => {
      if (callback) {
        callback.call(self, message);
      }
    }
  });
};

let myConfirm = (self, message, callback) => {
  self.$confirm(message || '是否确认操作?', '温馨提示', {
    type: 'warning',
    cancelButtonText: '取消',
    useConfirmBtn: true,
    confirmButtonText: '确定'
  }).then(() => {
    if (callback) {
      callback.call(self, message);
    }
  }).catch(() => {

  });
};

let myLoading = (self, dom) => {
  return self.$loading({
    lock: true,
    target: dom || document.body,
    text: '加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
};

let myFormatDate = (time) => {
  if (!time) {
    return '';
  }

  let date = new Date(time);
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let d = date.getDate();
  if (d < 10) {
    d = '0' + d;
  }
  return date.getFullYear() + "-" + month + "-" + d;
};

let myFormatDateYearMonth = (time) => {
  if (!time) {
    return '';
  }
  let date = new Date(time);
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  return date.getFullYear() + "-" + month ;
};

let myFormatDateTime = (time) => {
  if (!time) {
    return '';
  }

  let date = new Date(time);
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let d = date.getDate();
  if (d < 10) {
    d = '0' + d;
  }
  return date.getFullYear()  + month + d;
};

let myFormatTime = (time) => {
  if (!time) {
    return '';
  }
  let date = new Date(time);
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let d = date.getDate();
  if (d < 10) {
    d = '0' + d;
  }

  let hour = date.getHours();
  if (hour < 10) {
    hour = '0' + hour;
  }

  let minute = date.getMinutes();
  if (minute < 10) {
    minute = '0' + minute;
  }

  let second = date.getSeconds();
  if (second < 10) {
    second = '0' + second;
  }
  return date.getFullYear() + "-" + month + "-" + d + ' ' + hour + ':' + minute + ':' + second;
};

let myFileupload = (self, dom, callback, params) => {
  let initParams = {
    addCallback: () => {
    },
    failCallback: () => {
    },
    alwaysCallback: () => {
    },
    dialogClose: () => {
      return false
    },
    progressCallback: () => {
    }
  };

  initParams = Object.assign({}, initParams, params);

  let {addCallback, failCallback, alwaysCallback, dialogClose, progressCallback} = initParams;

  let g_jqXHR = $(dom).fileupload({
    dataType: 'json',
    add: (e, data) => {
      addCallback.call(self, data);
      data.submit()
    },
    always: (e, data) => {
      alwaysCallback.call(self, data);
    },
    done: (e, data) => {
      if (data.result) {
        let result = data.result;

        if (!result) {
          myToast(self, '上传失败, 返回对象为空, 请联系客服');
          failCallback.call(this);
          return;
        }

        if (0 == result.success || 0 == result.code) {
          callback.call(self, result.data);
        } else {
          if (result.data) {
            myToast(self, result.data);
          } else {
            myToast(self, '上传失败, 未知错误, 请联系客服');
          }
          failCallback.call(this);
        }
      } else {
        myToast(self, '上传失败, 返回参数有误, 请联系客服');
        failCallback.call(this);
      }
    },
    fail: () => {
      myToast(self, '上传失败, 网络异常, 请重试!');
      failCallback.call(this);
    },
    progressall: function (e, data) {
      if (dialogClose.call(self)) {
        g_jqXHR.abort();
        failCallback.call(this);
      } else {
        let progress = parseInt(data.loaded / data.total * 100, 10);
        progressCallback.call(self, progress);
      }
    }
  });
};

let myAssign = (source, target) => {
  for (var key in source) {
    if (source.hasOwnProperty(key) && null != target[key]) {
      source[key] = target[key];
    }
  }
};

let myEqual = (source, target, skipProps) => {
  let rtn = true;
  for (var key in source) {
    if (skipProps && 0 < skipProps.length && 0 < skipProps.filter((item) => {
        return item == key;
      }).length) {
      continue
    }

    if (!target.hasOwnProperty(key)) {
      return false;
    }
    if (source[key] != target[key]) {
      return false;
    }
  }
  return rtn;
};

// system
let timeout = async (ms) => {
  ms = ms || 15000;
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('请求超时, 请检查网络')), ms);
  });
};

let doException = (self, e) => {
  console.error(e);
  let message = e.message || e;
  if ('Failed to fetch' == message) {
    message = '你的会话已过期, 请重新登陆';
    e = {
      code: 2
    };
  }
  myToast(self, message);
  if (2 == e.code) { //sessionout
    setTimeout(() => {
      window.location.href = process.env.SERVER_URL + "/login.jsp";
    }, 1000);
  }
};

let getModule = (path) => {
  if (!path) {
    return '';
  }
  let index = path.indexOf('/', 1);
  if(1 <= index) {
    return path.substring(1, index)
  }
  return path.substring(1);
};

let doImageUrl = (url, prefix) => {
  if (!url) {
    return url;
  }

  if (0 != url.toLowerCase().indexOf('http')) {
    url = process.env.IMAGE_URL + '/' + url;
  }

  if (!prefix) {
    return url;
  }

  if (0 <= url.toLowerCase().indexOf('certimg') || 0 <= url.toLowerCase().indexOf('glzx')) {
    url = url + '_' + prefix + url.substring(url.lastIndexOf("."));
  } else {
    url = url.substring(0, url.lastIndexOf(".")) + '_' + prefix + url.substring(url.lastIndexOf("."));
  }
  return url;
};

const loginListener = [];
const addLoginListener = (self, listener) => {
  if (self.$store.state.userLogined.userId) {
    listener.call(self, self.$store.state.userLogined);
  } else {
    loginListener.push(listener);
  }
};
const emitLoginListener = (self) => {
  loginListener.forEach((item) => {
    item.call(self)
  })
};

const authLoadListener = [];
const addAuthLoadListener = (self, listener) => {
  if (self.$store.state.menuLeft && 0 < self.$store.state.menuLeft.length) {
    listener.call(self);
  } else {
    authLoadListener.push(listener);
  }
};
const emitAuthLoadListener = (self) => {
  authLoadListener.forEach((item) => {
    item.call(self)
  })
};

let preventDefault = (event) => {
  event = event || window.event;
  if (event && event.cancelable && !event.defaultPrevented) {
    if (event.preventDefault) {
      event.preventDefault();
      return;
    }
  }
  event.returnValue = false;
};

let preview = (event, dom, index) => {
  preventDefault(event);

  var idx = 0;
  if (index) {
    idx += parseInt(index);
  }

  var rotateAngle = 0;

  blueimp.Gallery($(dom), {
    container: '#blueimp-gallery',
    fullScreen: false,
    index: idx,
    emulateTouchEvents: false,
    closeOnSwipeUpOrDown: false,
    disableScroll: false,
    stopTouchEventsPropagation: false,
    onslidecomplete: function (index, slide) {
      var canvasDom = $(slide).find('.slide-content');
      let imgWidth = canvasDom.width();
      let imgHeight = canvasDom.height();
      let title = canvasDom.attr('title') || canvasDom.attr('alt');
      let pz = new RTP.PinchZoom(canvasDom, {
        maxZoom: 16
      });
      let $pz = $(pz.container);
      $pz.addClass('slide-content');
      if (title) {
        $pz.attr('title', title);
        $pz.attr('alt', title);
      }
      if (imgWidth < $(window).width()) {
        $pz.css('width', imgWidth);
      }
      if (imgHeight > $(window).height()) {
        $pz.css('position', 'relative');
      } else {
        $pz.css('position', 'absolute');
      }
      canvasDom.removeClass('slide-content');
    },
    onslide: function() {
      rotateAngle = 0;
    },
    onslideend: function (index, slide) {
      if(0 < rotateAngle) {
        return;
      }

      var canvasDom = $(slide);
      $('.blueimp-gallery>.icon.rotate').unbind('click').bind('click', function () {
        rotateAngle += 90;
        rotateAngle = rotateAngle % 360;
        canvasDom.rotate({
          animateTo: rotateAngle,
          easing: function(x, t, b, c, d) {
            return b + (t * 1.0 / d) * c;
          },
          duration: 100,
        });
      });
    },

  });
}

const appendServer = (url) => {
  return process.env.SERVER_URL + url;
}


let refreshDialogWithMerge = async (self, id, merge) => {
  self.loading = true;
  try {
    await Promise.race([
      self.$store.dispatch("ajaxRequest", {
        state: [self.beanName + 'Update'],
        type: 'get',
        url: '/api/' + self.packageName + '/' + self.beanName + '/get',
        params: {
          id
        }
      }),
      timeout()
    ]);

    let updateData = eval('self.$store.state.' + self.beanName + 'Update');

    updateData = self.merge(updateData);

    myAssign(self.form, { ...updateData });
  } catch (ex) {
    doException(self, ex)
  } finally {
    self.loading = false;
  }
};

const toFixed = (num, fractionDigits) => {
  num = num || 0;
  fractionDigits = fractionDigits || 2;
  return (parseInt(num * Math.pow(10, fractionDigits) + 0.5) / Math.pow(10, fractionDigits));
};

const dealBlank = (str) => {
  if (!str) {
    return str;
  }
  return str.replace(/(^\s +)|\s+$/g, '');
};

export default {
  mySizeImg, myToast, myAlert,
  myConfirm, myLoading, myFormatDate, myFormatTime,myFormatDateTime,myFormatDateYearMonth,
  myFileupload, myEqual, timeout, doException,
  myAssign, getModule, doImageUrl, appendServer,
  addLoginListener, emitLoginListener, preview,
  addAuthLoadListener, emitAuthLoadListener,
  calHeight, refresh, onDelete, refreshDialogWithMerge,
  onUpdate, onUploadSuccess, onSubmitDialog, refreshDialog, initDataModify,
  toFixed, dealBlank, myNotify
};
