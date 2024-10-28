import * as monaco from 'monaco-editor';
import defineThemes from './theme';
import initTokenProvider from './tokenProvider';
import initOperator from './initOperator.js';

function create(dom, options={}) {
    // 自定义主题
    defineThemes(monaco, options.theme);
    initTokenProvider(monaco, options.tokenProvider);
    let editor = null;
    if (!dom) {
        throw new Error('web-log-view: dom is required');
    }
    let logView = document.createElement('div');
    logView.style.height = '100%';
    logView.style.width = '100%';
    dom.appendChild(logView);
    let tempOptions = JSON.parse(JSON.stringify(options));
    delete tempOptions.theme;
    delete tempOptions.tokenProvider;
    let value = tempOptions.value || '无日志信息';
    delete tempOptions.value;
    let isAppend = tempOptions.append || false;
    let model = monaco.editor.createModel(
        value,
        'plaintext',
        null);
    editor = monaco.editor.create(logView, {
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
            verticalScrollbarSize: 4,
        },
        ...tempOptions,
    });
    editor.setModel(model);
    initOperator(dom, editor);
    editor.appendLog = (val, scrollToEnd=true) => {
        if (isAppend) {
            value += '\n' + val;
        }
        model.setValue(value || '无日志信息');
        monaco.editor.setModelLanguage(model, 'plaintext');
        // editor.setValue(value || '无日志信息');
        if (scrollToEnd) {
            const lineCount = editor.getModel().getLineCount();
            editor.revealLine(lineCount);
        }
    };

    editor.updateLog = (val, scrollToEnd=true) => {
        model.setValue(val || '无日志信息');
        monaco.editor.setModelLanguage(model, 'plaintext');
        // editor.setValue(value || '无日志信息');
        if (scrollToEnd) {
            const lineCount = editor.getModel().getLineCount();
            editor.revealLine(lineCount);
        }
    };
    return editor;
}

export default {
    create
};
