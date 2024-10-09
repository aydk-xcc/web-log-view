# log-view
日志组件

## 安装
```bash
npm install log-view
```
## 使用
```javascript
import LogView from 'log-view';

let view = LogView.createLogEditor(document.getElementById('log-editor'), {
    tokenProvider: {
        error: /^Error:.*/
    }
});
view.updateLog(str);

<div id="log-editor"></div>
```
