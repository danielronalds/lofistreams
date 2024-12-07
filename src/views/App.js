import m from "mithril";
import VideoPlayer from "./VideoPlayer";
import MediaControls from "./MediaControls";

const App = {
  view: () => {
    return m("div", [
      m(VideoPlayer),
      m(MediaControls)
    ]);
  }
}

export default App;
