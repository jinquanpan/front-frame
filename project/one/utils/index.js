let color = null;

function initColor (type){
  document.querySelector('html').id = `theme-${type}`;
  require(`../style/${type}/index.js`)
  color = type;
}

export default {
  initColor
}