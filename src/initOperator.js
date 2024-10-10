import topSvgPath from './resource/top.svg';
import bottomSvgPath from './resource/bottom.svg';
import exitScreenSvgPath from './resource/closeScreen.svg';
import fullScreenSvgPath from './resource/fullScreen.svg';
import {fullScreen, exitFullScreen} from './util.js';

export default function (dom, editor) {
    let style = document.createElement("style");
    style.innerHTML = `
    .web-log-view-ops {
        position: absolute;
        bottom: 24px;
        right: 24px;
        display: flex;
        flex-direction: row;
    }
    .web-log-view-op {
        align-items: center;
        background: #2e405e;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 20px;
        height: 32px;
        justify-content: center;
        margin-right: 1px;
        width: 32px;
    }
    
    .web-log-view-op:hover {
        opacity: 0.8;
    }
    `;
    document.head.appendChild(style);
    dom.style.position = "relative";
    let div = document.createElement("div");
    div.classList.add("web-log-view-ops");
    let topSvg = document.createElement("img");
    topSvg.src = topSvgPath;
    topSvg.classList.add("web-log-view-op");
    topSvg.onclick = () => {
        editor.setScrollTop(0);
    };
    let bottomSvg = document.createElement("img");
    bottomSvg.src = bottomSvgPath;
    bottomSvg.classList.add("web-log-view-op");
    bottomSvg.onclick = () => {
        const scrollHeight = editor.getScrollHeight();
        editor.setScrollTop(scrollHeight);
    };
    let fullScreenSvg = document.createElement("img");
    fullScreenSvg.src = fullScreenSvgPath;
    fullScreenSvg.classList.add("web-log-view-op");

    let exitFullScreenSvg = document.createElement("img");
    exitFullScreenSvg.src = exitScreenSvgPath;
    exitFullScreenSvg.classList.add("web-log-view-op");
    exitFullScreenSvg.style.display = "none";

    fullScreenSvg.onclick = () => {
        fullScreen(dom);
        exitFullScreenSvg.style.display = "block";
        fullScreenSvg.style.display = "none";
    };
    exitFullScreenSvg.onclick = () => {
        exitFullScreen();
        fullScreenSvg.style.display = "block";
        exitFullScreenSvg.style.display = "none";
    };
    div.appendChild(topSvg);
    div.appendChild(bottomSvg);
    div.appendChild(fullScreenSvg);
    div.appendChild(exitFullScreenSvg);
    dom.appendChild(div);
}


