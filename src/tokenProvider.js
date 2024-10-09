export default function (monaco, options= {}) {
    let errorToken = options.error || /\[error\].*/ ;
    let infoToken = options.error || /\[info\].*/ ;
    let warningToken = options.error || /\[warning\].*/ ;
    let successToken = options.error || /\[success\].*/ ;
    let primaryToken = options.error || /\[primary\].*/ ;
    monaco.languages.setMonarchTokensProvider('plaintext',
      {
          ignoreCase: true,
          tokenizer: {
              root: [
                  [/\d+/, { token: "keyword" }],
                  [errorToken, { token: "log-error" }],
                  [infoToken, { token: "log-info" }],
                  [warningToken, { token: "log-warning" }],
                  [successToken, { token: "log-success" }],
                  [primaryToken, { token: "log-primary" }]
              ]
          }
      });
};
