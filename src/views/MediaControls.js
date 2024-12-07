import m from 'mithril';
import AppModel from '../models/AppModel';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import SkipPrevIcon from './icons/SkipPrevIcon';
import SkipNextIcon from './icons/SkipNextIcon';

const MediaControls = {
  view: () => {
    const ICON_SIZE = 40;

    return m(
      'div',
      {
        class: 'w-screen flex justify-center absolute bottom-0 left-0 z-20',
      },
      m('div', {
        class: 'bg-mainBg rounded-t-xl w-fit h-fit shadow-xl flex flex-row justify-center items-center gap-4 p-2'
      }, [
        m(SkipPrevIcon, { size: ICON_SIZE - 10, onclick: AppModel.prevVideo }),
        (AppModel.isVideoPlaying ? m(PauseIcon, { size: ICON_SIZE, onclick: AppModel.pauseVideo }) : m(PlayIcon, { size: ICON_SIZE, onclick: AppModel.playVideo })),
        m(SkipNextIcon, { size: ICON_SIZE - 10, onclick: AppModel.nextVideo })
      ]));
  },
};

export default MediaControls;
