import m from 'mithril';

const PauseIcon = {
  view: (vn) => {
    const { size, onclick } = vn.attrs;

    return m('svg', {
      onclick: onclick,
      xmlns: "http://www.w3.org/2000/svg",
      height: `${size}px`,
      viewBox: "0 -960 960 960",
      width: `${size}px`,
      fill: "#e8eaed"
    }, m('path', { d: "M523.33-200v-560H760v560H523.33ZM200-200v-560h236.67v560H200Zm390-66.67h103.33v-426.66H590v426.66Zm-323.33 0H370v-426.66H266.67v426.66Zm0-426.66v426.66-426.66Zm323.33 0v426.66-426.66Z" }))
  }
};

export default PauseIcon;
