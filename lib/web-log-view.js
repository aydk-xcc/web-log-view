import * as monaco from 'monaco-editor';

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var defineThemes = (function (monaco) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  //设置含有custom-error等token class的主题
  var base = theme.base || 'light';
  monaco.editor.defineTheme('log-theme', {
    base: base === 'light' ? 'hc-light' : 'vs-dark',
    inherit: true,
    rules: [{
      token: 'log-info',
      foreground: '808080'
    }, {
      token: 'log-primary',
      foreground: '1067EE'
    }, {
      token: 'log-warning',
      foreground: 'FF9D00',
      fontStyle: 'bold'
    }, {
      token: 'log-error',
      foreground: 'e76565',
      fontStyle: 'bold'
    }, {
      token: 'log-success',
      foreground: '6ebe22'
    }],
    colors: {
      'editor.background': theme['editor.background'] || base === 'light' ? '#ffffff' : '#272822'
    }
  });
});

function initTokenProvider (monaco) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var errorToken = options.error || /\[error\].*/;
  var infoToken = options.info || /\[info\].*/;
  var warningToken = options.warning || /\[warning\].*/;
  var successToken = options.success || /\[success\].*/;
  var primaryToken = options.primary || /\[primary\].*/;
  monaco.languages.setMonarchTokensProvider('plaintext', {
    ignoreCase: true,
    tokenizer: {
      root: [[/\d+/, {
        token: "keyword"
      }], [errorToken, {
        token: "log-error",
        next: '@errorBlock'
      }], [infoToken, {
        token: "log-info"
      }], [warningToken, {
        token: "log-warning"
      }], [successToken, {
        token: "log-success"
      }], [primaryToken, {
        token: "log-primary"
      }]],
      errorBlock: [
      // 匹配到非缩进行或空行时退出 errorBlock 状态
      [/^(?!\s)/, {
        token: '',
        next: '@pop'
      }],
      // 退出 errorBlock 状态
      [/^$/, {
        token: '',
        next: '@pop'
      }],
      // 空行，退出 errorBlock 状态
      // 继续匹配缩进行
      [/^.+$/, 'log-error'] // 继续匹配并应用样式
      ]
    }
  });
}

var topSvgPath = "data:image/svg+xml,%3Csvg%20t%3D%221728560100284%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221520%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M821.26113522%20598.64284015L530.08744403%20310.13244418c-0.42238504-0.42238504-1.00210226-0.55420367-1.45000003-0.94965793-0.10488785-0.10488785-0.13181781-0.26363645-0.23670566-0.36852429-10.36261286-10.23079505-27.05250037-10.17835071-37.31022619%200.1587486L202.60704614%20600.11977097c-10.25630777%2010.36261286-10.17835071%2027.02698764%200.1587486%2037.2832954%205.14091025%205.08846674%2011.86505723%207.64687411%2018.5622734%207.64687413%206.77659048%200%2013.57869369-2.61085089%2018.72102201-7.80420549L510.18147567%20364.66124802l273.95511357%20271.42363696c5.14091025%205.08846674%2011.83954367%207.64687411%2018.5622734%207.64687412%206.80210403%200%2013.57869369-2.61085089%2018.721022-7.80420549C831.67619241%20625.59045349%20831.59681812%20608.89914793%20821.26113522%20598.64284015z%22%20fill%3D%22%23ffffff%22%20p-id%3D%221521%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

var bottomSvgPath = "data:image/svg+xml,%3Csvg%20t%3D%221728560152803%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221520%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M823.73875107%20362.78744488c-10.36261286-10.23079505-27.02698764-10.17835071-37.28329541%200.1587486L516.32448819%20635.55619404%20242.42181814%20364.10704434c-10.36261286-10.25630777-27.02698764-10.17835071-37.3102262%200.1587486-10.25630777%2010.36261286-10.17835071%2027.05250037%200.1587486%2037.31022619l291.11983045%20288.48346601c0.44789858%200.44789858%201.02761499%200.55420367%201.47693081%200.97517148%200.10488785%200.10488785%200.13181781%200.23670566%200.23670567%200.34301074%205.14091025%205.08846674%2011.86505723%207.64687411%2018.56227339%207.64687412%206.77659048%200%2013.57869369-2.61085089%2018.72102202-7.80420548l288.48346599-291.11983044C834.15380826%20389.7350574%20834.0758512%20373.04516989%20823.73875107%20362.78744488z%22%20fill%3D%22%23ffffff%22%20p-id%3D%221521%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

var exitScreenSvgPath = "data:image/svg+xml,%3Csvg%20t%3D%221728560474229%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221640%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M467.74367697%20492.94435502H315.84777487c-13.93987611%200-25.24141409%2011.30153798-25.24141409%2025.24209302%200%2013.94462864%2011.30153798%2025.24616663%2025.24141409%2025.24616663l115.94837531-0.15479699L247.51440984%20727.53851105c-9.56889802%209.90768616-9.43039543%2025.65081139%200.30755718%2035.38808506%209.73387901%209.73795261%2025.48107785%209.87577625%2035.38469039%200.30755718l184.33605506-184.30889771v116.17513932c0%2013.94055503%2011.30153798%2025.24209302%2025.24209302%2025.24209302%2013.94462864%200%2025.24616663-11.30153798%2025.24616663-25.24209302V543.22893442c-0.04209392-27.75414939-22.53043-50.24588014-50.28729514-50.2845794M775.47397827%20260.52007254a25.21289885%2025.21289885%200%200%200-35.69632117%200L568.29110987%20432.0032251v-115.77185244c0-13.93987611-11.30153798-25.24141409-25.24141408-25.24141409-13.94462864%200-25.24616663%2011.30153798-25.24616662%2025.24141409v151.89454425c0%2027.71952376%2022.56912923%2050.26489031%2050.28729513%2050.26489032h151.86806582c13.94462864%200%2025.24616663-11.30561158%2025.24616663-25.2454877%200-13.94462864-11.30153798-25.24616663-25.24616662-25.24616663l-116.34894647%200.17720182L775.47397827%20296.21299904a25.21833032%2025.21833032%200%200%200%200-35.6929265%22%20fill%3D%22%23ffffff%22%20p-id%3D%221641%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

var fullScreenSvgPath = "data:image/svg+xml,%3Csvg%20t%3D%221728560486554%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%221847%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Cpath%20d%3D%22M734.15404547%20241.45084888H585.96105025c-13.60176689%200-24.6296944%2011.00959628-24.62969442%2024.59303198%200%2013.57868314%2011.02792751%2024.58827942%2024.62969443%2024.58827942l113.11721987-0.14597085-155.16497009%20154.89747003c-9.6184602%209.60216578-9.6184602%2025.170126-1e-8%2034.77229178s25.21289885%209.60216578%2034.83135906%200l155.21045868-154.94567435v113.16406633c0%2013.58343568%2011.03200112%2024.59303196%2024.63444695%2024.59303197%2013.60176689%200%2024.63376802-11.00891735%2024.63376801-24.59303197V290.43662724c-0.04141498-27.0385528-21.9879616-48.94436337-49.06928726-48.98577836zM445.25534091%20543.84472769L290.04488223%20698.79040206v-113.16474528c0-13.58343568-11.03200112-24.59303196-24.63444695-24.59303196-13.60176689%200-24.63376802%2011.00891735-24.63376801%2024.59303196V733.56337276c0.04141498%2027.0385528%2021.9879616%2048.94436337%2049.06928726%2048.98577836h148.19299521c13.60176689%200%2024.6296944-11.00959628%2024.62969442-24.59303197%200-13.57868314-11.02792751-24.58760049-24.62969441-24.58760049l-113.11721988%200.14597085L480.08669997%20578.61701948c9.6184602-9.60216578%209.6184602-25.170126%200-34.77229179s-25.21289885-9.60216578-34.83135906%200z%22%20fill%3D%22%23ffffff%22%20p-id%3D%221848%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

function fullScreen(dom) {
  if (!isFullScreen()) {
    //进入全屏,多重短路表达式
    dom.requestFullscreen && dom.requestFullscreen() || dom.mozRequestFullScreen && dom.mozRequestFullScreen() || dom.webkitRequestFullscreen && dom.webkitRequestFullscreen() || dom.msRequestFullscreen && dom.msRequestFullscreen();
  }
}
function exitFullScreen() {
  if (isFullScreen()) {
    //进入全屏,多重短路表达式
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
  }
}
function isFullScreen() {
  return document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
}

function initOperator (dom, editor) {
  var style = document.createElement("style");
  style.innerHTML = "\n    .web-log-view-ops {\n        position: absolute;\n        bottom: 24px;\n        right: 24px;\n        display: flex;\n        flex-direction: row;\n    }\n    .web-log-view-op {\n        align-items: center;\n        background: #2e405e;\n        border-radius: 4px;\n        color: #fff;\n        cursor: pointer;\n        display: flex;\n        font-size: 20px;\n        height: 32px;\n        justify-content: center;\n        margin-right: 1px;\n        width: 32px;\n    }\n    \n    .web-log-view-op:hover {\n        opacity: 0.8;\n    }\n    ";
  document.head.appendChild(style);
  dom.style.position = "relative";
  var div = document.createElement("div");
  div.classList.add("web-log-view-ops");
  var topSvg = document.createElement("img");
  topSvg.src = topSvgPath;
  topSvg.classList.add("web-log-view-op");
  topSvg.onclick = function () {
    editor.setScrollTop(0);
  };
  var bottomSvg = document.createElement("img");
  bottomSvg.src = bottomSvgPath;
  bottomSvg.classList.add("web-log-view-op");
  bottomSvg.onclick = function () {
    var scrollHeight = editor.getScrollHeight();
    editor.setScrollTop(scrollHeight);
  };
  var fullScreenSvg = document.createElement("img");
  fullScreenSvg.src = fullScreenSvgPath;
  fullScreenSvg.classList.add("web-log-view-op");
  var exitFullScreenSvg = document.createElement("img");
  exitFullScreenSvg.src = exitScreenSvgPath;
  exitFullScreenSvg.classList.add("web-log-view-op");
  exitFullScreenSvg.style.display = "none";
  fullScreenSvg.onclick = function () {
    fullScreen(dom);
    exitFullScreenSvg.style.display = "block";
    fullScreenSvg.style.display = "none";
  };
  exitFullScreenSvg.onclick = function () {
    exitFullScreen();
    fullScreenSvg.style.display = "block";
    exitFullScreenSvg.style.display = "none";
  };
  div.appendChild(topSvg);
  div.appendChild(bottomSvg);
  div.appendChild(fullScreenSvg);
  div.appendChild(exitFullScreenSvg);
  dom.appendChild(div);
}

function create(dom) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // 自定义主题
  defineThemes(monaco, options.theme);
  initTokenProvider(monaco, options.tokenProvider);
  var editor = null;
  if (!dom) {
    throw new Error('web-log-view: dom is required');
  }
  var logView = document.createElement('div');
  logView.style.height = '100%';
  logView.style.width = '100%';
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
  dom.appendChild(logView);
  var tempOptions = JSON.parse(JSON.stringify(options));
  delete tempOptions.theme;
  delete tempOptions.tokenProvider;
  var value = tempOptions.value || '无日志信息';
  delete tempOptions.value;
  var isAppend = tempOptions.append || false;
  var model = monaco.editor.createModel(value, 'plaintext', null);
  editor = monaco.editor.create(logView, _objectSpread2({
    language: 'plaintext',
    theme: 'log-theme',
    automaticLayout: true,
    readOnly: true,
    lineNumbers: 'on',
    minimap: {
      enabled: false
    },
    scrollBeyondLastLine: false,
    padding: {
      top: 10,
      bottom: 80
    },
    wordWrap: 'on',
    scrollbar: {
      verticalScrollbarSize: 4
    }
  }, tempOptions));
  editor.setModel(model);
  initOperator(dom, editor);
  editor.appendLog = function (val) {
    var scrollToEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (isAppend) {
      value += '\n' + val;
    }
    model.setValue(value || '无日志信息');
    monaco.editor.setModelLanguage(model, 'plaintext');
    // editor.setValue(value || '无日志信息');
    if (scrollToEnd) {
      var lineCount = editor.getModel().getLineCount();
      editor.revealLine(lineCount);
    }
  };
  editor.updateLog = function (val) {
    var scrollToEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    model.setValue(val || '无日志信息');
    monaco.editor.setModelLanguage(model, 'plaintext');
    // editor.setValue(value || '无日志信息');
    if (scrollToEnd) {
      var lineCount = editor.getModel().getLineCount();
      editor.revealLine(lineCount);
    }
  };
  return editor;
}
var index = {
  create: create
};

export { index as default };
