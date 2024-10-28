export default function (monaco, options= {}) {
    let errorToken = options.error || /\[error\].*/ ;
    let infoToken = options.info || /\[info\].*/ ;
    let warningToken = options.warning || /\[warning\].*/ ;
    let successToken = options.success || /\[success\].*/ ;
    let primaryToken = options.primary || /\[primary\].*/ ;
    monaco.languages.setMonarchTokensProvider('plaintext',
      {
          ignoreCase: true,
          tokenizer: {
              root: [
                  [/\d+/, { token: "keyword" }],
                  [errorToken, { token: "log-error" , next: '@errorBlock' }],
                  [infoToken, { token: "log-info" }],
                  [warningToken, { token: "log-warning" }],
                  [successToken, { token: "log-success" }],
                  [primaryToken, { token: "log-primary" }]
              ],

              errorBlock: [
                  // 匹配到非缩进行或空行时退出 errorBlock 状态
                  [/^(?!\s)/, { token: '', next: '@pop' }], // 退出 errorBlock 状态
                  [/^$/, { token: '', next: '@pop' }], // 空行，退出 errorBlock 状态
                  // 继续匹配缩进行
                  [/^.+$/, 'log-error'], // 继续匹配并应用样式
              ],
          }
      });
};
