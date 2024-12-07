import m from "mithril";
import { IFRAME_CMD_PAUSE_VIDEO, IFRAME_CMD_PLAY_VIDEO, sendIframeCommand } from "../utils";
import AppModel from "../models/AppModel";

const handlePlay = () => sendIframeCommand(IFRAME_CMD_PLAY_VIDEO)
const handlePause = () => sendIframeCommand(IFRAME_CMD_PAUSE_VIDEO)
const handlePrev = () => AppModel.currentStream = ((AppModel.currentStream - 1) % AppModel.streams.length)
const handleNext = () => AppModel.currentStream = ((AppModel.currentStream + 1) % AppModel.streams.length)

const MediaControls = {
  view: () => {
    return m('div', {
      class: 'flex flex-row z-10 gap-10 absolute top-0 left-0'
    }, [
      m('button', {
        class: 'text-lg bg-white rounded p-5',
        onclick: handlePrev 
      }, 'prev'),
      m('button', {
        class: 'text-lg bg-white rounded p-5',
        onclick: handlePlay 
      }, 'play'),
      m('button', {
        class: 'text-lg bg-white rounded p-5',
        onclick: handlePause
      }, 'pause'),
      m('button', {
        class: 'text-lg bg-white rounded p-5',
        onclick: handleNext 
      }, 'next'),
    ])
  }
}

export default MediaControls;
