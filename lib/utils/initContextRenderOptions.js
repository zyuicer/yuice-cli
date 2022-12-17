const { REACTTS, REACT } = require("../../constants/templateName");
const { SHAPE_FLAGS } = require("../../shared/shapeFlags");

function initContextRenderOption(context) {
  const { shapeFlag } = context;
  const name = context.file.charAt(0).toUpperCase() + context.file.slice(1);
  if (shapeFlag & SHAPE_FLAGS[REACTTS] || shapeFlag & SHAPE_FLAGS[REACT]) {
    context.renderOptions = {
      name,
    };
  }
}

module.exports = {
  initContextRenderOption,
};
