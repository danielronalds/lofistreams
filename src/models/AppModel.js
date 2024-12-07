import { IFRAME_CMD_PAUSE_VIDEO, IFRAME_CMD_PLAY_VIDEO, sendIframeCommand } from "../utils";

const AppModel = {
  currentStream: 0,
  getCurrentStreamId: () => AppModel.streams[AppModel.currentStream].videoId,
  isVideoPlaying: true,
  playVideo: () => {
    sendIframeCommand(IFRAME_CMD_PLAY_VIDEO);
    AppModel.isVideoPlaying = true;
  },
  pauseVideo: () => {
    sendIframeCommand(IFRAME_CMD_PAUSE_VIDEO);
    AppModel.isVideoPlaying = false;
  },
  prevVideo: () => {
    AppModel.currentStream = (AppModel.currentStream - 1) % AppModel.streams.length;
  },
  nextVideo: () => {
    AppModel.currentStream = (AppModel.currentStream + 1) % AppModel.streams.length;
  },
  streams: [
    { name: 'Lofi Girl', videoId: 'jfKfPfyJRdk' },
    { name: 'Chillhop Radio', videoId: '5yx6BWlEVcY' },
    { name: 'Lord of the Rings', videoId: 'd9YM_9CVmtc' },
    { name: 'Harry Potter', videoId: 'cuDzX5jIcAE' },
    { name: 'Medieval', videoId: 'eEZF9iIv5XM' },
    { name: 'ATLA', videoId: 'D-ya6U-pbWo' },
    { name: 'Deep Focus', videoId: 'PrV-JtKiwv4' },
  ],
};

export default AppModel;
