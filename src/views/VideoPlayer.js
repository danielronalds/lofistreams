import m from 'mithril';
import AppModel from '../models/AppModel';

const VideoPlayer = {
  view: () => {
    const videoId = AppModel.getCurrentStreamId();

    return m('iframe', {
      id: 'iframe',
      src:
        'https://www.youtube.com/embed/' +
        videoId +
        '?si=bZ9hFpMbL1xoD7vQ&amp;controls=0&amp;autoplay=1&amp;enablejsapi=1&amp;modestbranding=1&amp;disablekb=1&amp;playsinline=1&amp;iv_load_policy=3',
      class: 'pointer-events-none w-full h-full top-0 left-0 absolute z-0',
      frameborder: '0',
      referrerpolicy: 'strict-origin-when-cross-origin',
    });
  },
};

export default VideoPlayer;
