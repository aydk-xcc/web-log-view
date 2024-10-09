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
  monaco.editor.defineTheme('log-theme', {
    base: 'vs',
    inherit: true,
    rules: [{
      token: 'log-info',
      foreground: '808080'
    }, {
      token: 'log-primary',
      foreground: '808080'
    }, {
      token: 'log-warning',
      foreground: 'ff0000',
      fontStyle: 'bold'
    }, {
      token: 'log-error',
      foreground: 'ff0000',
      fontStyle: 'bold'
    }, {
      token: 'log-success',
      foreground: 'FFA500'
    }],
    colors: {
      'editor.background': theme['editor.background'] || '#FFFFFF'
    }
  });
});

function initTokenProvider (monaco) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var errorToken = options.error || /\[error\].*/;
  var infoToken = options.error || /\[info\].*/;
  var warningToken = options.error || /\[warning\].*/;
  var successToken = options.error || /\[success\].*/;
  var primaryToken = options.error || /\[primary\].*/;
  monaco.languages.setMonarchTokensProvider('plaintext', {
    ignoreCase: true,
    tokenizer: {
      root: [[/\d+/, {
        token: "keyword"
      }], [errorToken, {
        token: "log-error"
      }], [infoToken, {
        token: "log-info"
      }], [warningToken, {
        token: "log-warning"
      }], [successToken, {
        token: "log-success"
      }], [primaryToken, {
        token: "log-primary"
      }]]
    }
  });
}

function createLogEditor(dom) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // 自定义主题
  defineThemes(monaco, options.theme);
  initTokenProvider(monaco, options.tokenProvider);
  var editor = monaco.editor.create(dom, _objectSpread2({
    language: 'plaintext',
    theme: 'log-theme',
    automaticLayout: true,
    readOnly: true,
    lineNumbers: 'on'
  }, options));
  editor.updateLog = function (value) {
    editor.setValue(value);
    var lineCount = editor.getModel().getLineCount();
    editor.revealLine(lineCount);
  };
  return editor;
}
var index = {
  createLogEditor: createLogEditor
};

export { index as default };
