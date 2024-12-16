import { IFRAME_CMD_PAUSE_VIDEO, IFRAME_CMD_PLAY_VIDEO, sendIframeCommand } from '../utils';

const AppModel = {
  currentStream: 0,
  getCurrentStreamId: () => AppModel.streams[AppModel.currentStream].videoId,
  getCurrentStreamName: () => AppModel.streams[AppModel.currentStream].name,
  isVideoPlaying: false,
  playVideo: () => {
    sendIframeCommand(IFRAME_CMD_PLAY_VIDEO);
    AppModel.isVideoPlaying = true;
  },
  pauseVideo: () => {
    sendIframeCommand(IFRAME_CMD_PAUSE_VIDEO);
    AppModel.isVideoPlaying = false;
  },
  prevVideo: () => {
    const currentStream = AppModel.currentStream;
    AppModel.currentStream = currentStream == 0 ? AppModel.streams.length - 1 : currentStream - 1;
    AppModel.isVideoPlaying = false;
  },
  nextVideo: () => {
    AppModel.currentStream = (AppModel.currentStream + 1) % AppModel.streams.length;
    AppModel.isVideoPlaying = false;
  },
  streams: [
    { name: 'Lofi Girl', videoId: 'jfKfPfyJRdk' },
    { name: 'Chillhop Radio', videoId: '5yx6BWlEVcY' },
    { name: 'Lord of the Rings', videoId: 'd9YM_9CVmtc' },
    { name: 'Harry Potter', videoId: 'cuDzX5jIcAE' },
    { name: 'Medieval', videoId: 'eEZF9iIv5XM' },
    { name: 'ATLA', videoId: 'D-ya6U-pbWo' },
    { name: 'Deep Focus', videoId: 'PrV-JtKiwv4' },
    { name: '80s Hiphop', videoId: 'gcB4ay_fO1k'}
  ],
};

export default AppModel;
