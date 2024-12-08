import m from 'mithril';

const SkipNextIcon = {
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
        class: 'fill-secondary'
      },
      m('path', {
        d: 'M673.33-240v-480H740v480h-66.67ZM220-240v-480l350.67 240L220-240Zm66.67-240Zm0 113.33 166-113.33-166-113.33v226.66Z',
      })
    );
  },
};

export default SkipNextIcon;
