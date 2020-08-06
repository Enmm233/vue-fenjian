function Preview(code, title, attr_name, num, weight, shopping_time, bodyw, id, qrcode, is_qrCode, font_size) {
  LODOP = getLodop();
  LODOP.SET_LICENSES("", "B554E655041C03A234A3526A51F082F1", "C94CEE276DB2187AE6B65D56B3FC2848", "");
  LODOP.PRINT_INITA(0, 0, 600, 400, "分拣打印");
  LODOP.SET_PRINT_PAGESIZE(1, 600, 400, '');
  AddPrintContent(code, title, attr_name, num, weight, shopping_time, bodyw, id, qrcode, is_qrCode, font_size);
  LODOP.PRINT();
  //    LODOP.PREVIEW();
}

function AddPrintContent(code, title, attr_name, num, weight, shopping_time, bodyw, id, qrcode, is_qrCode, font_size) {
  if (font_size != '') {
    fontSize = font_size;
    if (fontSize.top) {
      var top = fontSize.top
    }
    if (fontSize.middle) {
      var middle = fontSize.middle
    }
  } else {
    var top = 10,
      middle = 10;
  }
  console.log(top)
  var c_height = 20,
    d_height = 18;
  var bodyw1 = JSON.parse(bodyw);
  LODOP.SET_PRINT_STYLE("FONTSIZE", 14);
  LODOP.SET_PRINT_STYLE("Bold", 1);
  LODOP.ADD_PRINT_TEXT(5, 10, 600, 400, code);

  LODOP.SET_PRINT_STYLE("FONTSIZE", 10);
  LODOP.SET_PRINT_STYLE("Bold", 0);
  LODOP.ADD_PRINT_TEXT(10, '57%', 600, 400, shopping_time);

  LODOP.SET_PRINT_STYLE("FONTSIZE", top);
  LODOP.SET_PRINT_STYLE("Bold", 0);
  LODOP.ADD_PRINT_TEXT(32, 21, 600, 400, '名称:');

  LODOP.SET_PRINT_STYLE("FONTSIZE", top);
  LODOP.SET_PRINT_STYLE("Bold", 1);
  LODOP.ADD_PRINT_TEXT(29, 55, 600, 400, title);

  LODOP.SET_PRINT_STYLE("FONTSIZE", top);
  LODOP.SET_PRINT_STYLE("Bold", 0);
  LODOP.ADD_PRINT_TEXT(50, 21, 600, 400, '规格:' + attr_name);

  LODOP.SET_PRINT_STYLE("FONTSIZE", top);
  LODOP.SET_PRINT_STYLE("Bold", 0);
  LODOP.ADD_PRINT_TEXT(67, 7, 600, 400, '预定量:' + num);

  LODOP.SET_PRINT_STYLE("FONTSIZE", top);
  LODOP.SET_PRINT_STYLE("Bold", 0);
  LODOP.ADD_PRINT_TEXT(67, '50%', 600, 400, '配送量:');
  LODOP.ADD_PRINT_LINE(85, 0, 85, 600, 0, 1);

  LODOP.SET_PRINT_STYLE("FONTSIZE", top);
  LODOP.SET_PRINT_STYLE("Bold", 1);
  LODOP.ADD_PRINT_TEXT(62, '71%', 600, 400, weight);
  LODOP.ADD_PRINT_LINE(85, 0, 85, 600, 0, 1);
  if (bodyw1.length != 0) {
    for (var i = 0; i < bodyw1.length; i++) {
      if (i == 0) {
        LODOP.SET_PRINT_STYLE("FONTSIZE", middle);
        LODOP.SET_PRINT_STYLE("Bold", 1);
        c_height = c_height + 74;
        LODOP.ADD_PRINT_TEXT(c_height, 7, 150, 400, bodyw1[i].key + ":" + bodyw1[i].val);
      } else {
        LODOP.SET_PRINT_STYLE("FONTSIZE", middle);
        LODOP.SET_PRINT_STYLE("Bold", 1);
        c_height = c_height + d_height;
        LODOP.ADD_PRINT_TEXT(c_height + 20, 7, 600, 400, bodyw1[i].key + ":" + bodyw1[i].val);
      }
    }
  }
  if (qrcode == 1) {
    LODOP.ADD_PRINT_IMAGE(85, '66%', 600, 400, '<img src="http://' + window.location.host + '/qrCode?text=http://' +
      window.location.host + '/%23/fenjian?id=' + id + '">');
  }

}

/*
 * 浏览器全屏
 */
function fullScreen() {

  var el = document.documentElement;

  var rfs = el.requestFullScreen || el.webkitRequestFullScreen;

  if (typeof rfs != "undefined" && rfs) {

    rfs.call(el);

  } else if (typeof window.ActiveXObject != "undefined") {

    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript != null) {

      wscript.SendKeys("{F11}");

    }

  } else if (el.msRequestFullscreen) {

    el.msRequestFullscreen();

  } else if (el.oRequestFullscreen) {

    el.oRequestFullscreen();

  } else {

    swal({
      title: "浏览器不支持全屏调用！",
      text: "请更换浏览器或按F11键切换全屏！(3秒后自动关闭)",
      type: "error",
      timer: 3000
    });

  }

}

/*
 * 浏览器退出全屏
 */
function exitFullScreen() {

  var el = document;

  var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.exitFullScreen;

  if (typeof cfs != "undefined" && cfs) {

    cfs.call(el);

  } else if (typeof window.ActiveXObject != "undefined") {

    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript != null) {

      wscript.SendKeys("{F11}");

    }

  } else if (el.msExitFullscreen) {

    el.msExitFullscreen();

  } else if (el.oRequestFullscreen) {

    el.oCancelFullScreen();

  } else {

    swal({
      title: "浏览器不支持全屏调用！",
      text: "请更换浏览器或按F11键切换全屏！(3秒后自动关闭)",
      type: "error",
      timer: 3000
    });
  }

}
