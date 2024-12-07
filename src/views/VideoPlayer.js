import m from 'mithril';
import AppModel from '../models/AppModel';
import { IFRAME_CMD_PLAY_VIDEO, sendIframeCommand } from '../utils';

const VideoPlayer = {
  oncreate: () => {
    sendIframeCommand(IFRAME_CMD_PLAY_VIDEO);
  },
  view: () => {
    const videoId = AppModel.getCurrentStreamId();

    return m('iframe', {
      id: 'iframe',
      src:
        'https://www.youtube.com/embed/' +
        videoId +
        '?si=bZ9hFpMbL1xoD7vQ&controls=0&autoplay=1&enablejsapi=1&modestbranding=1&disablekb=1&playsinline=1&iv_load_policy=3',
      class: 'pointer-events-none w-full h-full top-0 left-0 absolute z-0 select-none',
      frameborder: '0',
      referrerpolicy: 'strict-origin-when-cross-origin',
    });
  },
};

export default VideoPlayer;
