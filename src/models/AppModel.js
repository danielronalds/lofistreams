const AppModel = {
  currentStream: 0,
  getCurrentStreamId: () => AppModel.streams[AppModel.currentStream].videoId,
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
