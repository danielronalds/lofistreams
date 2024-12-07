export const sendIframeCommand = (command) => {
  let iframe = document.getElementById('iframe');
  iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command }), '*');
};

export const IFRAME_CMD_PAUSE_VIDEO = 'pauseVideo';
export const IFRAME_CMD_PLAY_VIDEO = 'playVideo';
