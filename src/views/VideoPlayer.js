import m from 'mithril';
import AppModel from '../models/AppModel';
import { IFRAME_CMD_PLAY_VIDEO, sendIframeCommand } from '../utils';

const VideoPlayer = {
  oncreate: () => {
    sendIframeCommand(IFRAME_CMD_PLAY_VIDEO);
  },
  view: () => {
    const videoId = AppModel.getCurrentStreamId();
    return m('div', [
      m('iframe', {
        id: 'iframe',
        src:
          'https://www.youtube.com/embed/' +
          videoId +
          '?si=bZ9hFpMbL1xoD7vQ&controls=0&autoplay=0&enablejsapi=1&modestbranding=1&disablekb=1&playsinline=1&iv_load_policy=3',
        class: 'pointer-events-none h-[110vh] w-[116vw] top-[-10vh] left-[-16vw] absolute z-0 select-none',
        frameborder: '0',
        referrerpolicy: 'strict-origin-when-cross-origin',
      }),
      !AppModel.isVideoPlaying
        ? m(
            'div',
            { class: 'bg-black w-screen h-screen top-0 left-0 absolute z-10 flex justify-center items-center' },
            [m('h1', { class: 'text-2xl text-white' }, AppModel.getCurrentStreamName())]
          )
        : null,
    ]);
  },
};

export default VideoPlayer;
