import * as monaco from 'monaco-editor';
import defineThemes from './theme';
import initTokenProvider from './tokenProvider';

function create(dom, options={}) {
    // 自定义主题
    defineThemes(monaco, options.theme);
    initTokenProvider(monaco, options.tokenProvider);
    let editor = null;
    if (!dom) {
        throw new Error('web-log-view: dom is required');
    }
    editor = monaco.editor.create(dom, {
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
            bottom: 80
        },
        wordWrap: 'on',
        scrollbar: {
            verticalScrollbarSize: 4,
        },
        ...options
    });
    editor.updateLog = (value, scrollToEnd=true) => {
        editor.setValue(value);
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
