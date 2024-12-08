import m from 'mithril';

const PlayIcon = {
  view: (vn) => {
    const { size, onclick } = vn.attrs;

    return m(
      'svg',
      {
        onclick: onclick,
        xmlns: 'http://www.w3.org/2000/svg',
        height: `${size}px`,
        viewBox: '0 -960 960 960',
        width: `${size}px`,
        class: 'fill-secondary hover:opacity-50 ease-in-out duration-300 cursor-pointer',
      },
      m('path', { d: 'M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z' })
    );
  },
};

export default PlayIcon;
