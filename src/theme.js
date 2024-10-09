export default (monaco, theme={}) => {
    //设置含有custom-error等token class的主题
    monaco.editor.defineTheme('log-theme', {
        base: 'vs',
        inherit: true,
        rules: [
            { token: 'log-info', foreground: '808080' },
            { token: 'log-primary', foreground: '808080' },
            { token: 'log-warning', foreground: 'ff0000', fontStyle: 'bold' },
            { token: 'log-error', foreground: 'ff0000', fontStyle: 'bold' },
            { token: 'log-success', foreground: 'FFA500' }
        ],
        colors: {
            'editor.background': theme['editor.background'] || '#FFFFFF',
        }
    });
}
