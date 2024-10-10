export function fullScreen(dom) {
    if (!isFullScreen()) { //进入全屏,多重短路表达式
        (dom.requestFullscreen && dom.requestFullscreen()) ||
        (dom.mozRequestFullScreen && dom.mozRequestFullScreen()) ||
        (dom.webkitRequestFullscreen && dom.webkitRequestFullscreen()) ||
        (dom.msRequestFullscreen && dom.msRequestFullscreen());
    }
}

export function exitFullScreen() {
    if (isFullScreen()) { //进入全屏,多重短路表达式
        document.exitFullscreen ? document.exitFullscreen()
            : document.mozCancelFullScreen ? document.mozCancelFullScreen() :
                document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
    }
}

export function isFullScreen() {
    return document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
}
