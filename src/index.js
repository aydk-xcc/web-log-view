import * as monaco from 'monaco-editor';
import defineThemes from './theme';
import initTokenProvider from './tokenProvider';

function createLogEditor(dom, options={}) {
    // 自定义主题
    defineThemes(monaco, options.theme);
    initTokenProvider(monaco, options.tokenProvider);
    let editor = monaco.editor.create(dom, {
        language: 'plaintext',
        theme: 'log-theme',
        automaticLayout: true,
        readOnly: true,
        lineNumbers: 'on',
        ...options
    });
    editor.updateLog = (value) => {
        editor.setValue(value);
        const lineCount = editor.getModel().getLineCount();
        editor.revealLine(lineCount);
    };
    return editor;
}

export default {
    createLogEditor
};
