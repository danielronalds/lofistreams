import m from 'mithril';

const SkipPrevIcon = {
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
        class: 'fill-secondary',
      },
      m('path', {
        d: 'M220-240v-480h66.67v480H220Zm520 0L389.33-480 740-720v480Zm-66.67-240Zm0 113.33v-226.66L507.33-480l166 113.33Z',
      })
    );
  },
};

export default SkipPrevIcon;
