# web-log-view
web日志组件

## 安装
```bash
npm install web-log-view
```
## 使用
```javascript
import LogView from 'web-log-view';

let view = LogView.createLogEditor(document.getElementById('log-editor'), {
    tokenProvider: {
        error: /^Error:.*/
    }
});
view.updateLog(str);

<div id="log-editor"></div>
```
