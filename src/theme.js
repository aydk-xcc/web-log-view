export default (monaco, theme={}) => {
    //设置含有custom-error等token class的主题
    let base = theme.base || 'light';
    monaco.editor.defineTheme('log-theme', {
        base: base === 'light' ? 'hc-light' : 'vs-dark',
        inherit: true,
        rules: [
            { token: 'log-info', foreground: '808080' },
            { token: 'log-primary', foreground: '1067EE' },
            { token: 'log-warning', foreground: 'FF9D00', fontStyle: 'bold' },
            { token: 'log-error', foreground: 'e76565', fontStyle: 'bold' },
            { token: 'log-success', foreground: '6ebe22' }
        ],
        colors: {
            'editor.background': theme['editor.background'] ||  base === 'light' ? '#ffffff' : '#272822',
        }
    });
}
