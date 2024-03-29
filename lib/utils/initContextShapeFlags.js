const { SHAPE_FLAGS } = require("../../shared/shapeFlags");
const {
  VUE,
  VUETS,
  REACTTS,
  REACT,
  LICENSE,
  GITIGNORE,
  ESLINTVUE,
  PRETTIER,
  EDITORCONFIG,
} = require("../../constants/templateName");

function initContextShapeFlagWithExt(context) {
  if (context.source in SHAPE_FLAGS) {
    const shapeFlag = SHAPE_FLAGS[context.source];
    context.shapeFlag = shapeFlag;
    if (shapeFlag & SHAPE_FLAGS[VUE] || shapeFlag & SHAPE_FLAGS[VUETS]) {
      context.ext = "vue";
    } else if (shapeFlag & SHAPE_FLAGS[REACTTS]) {
      context.ext = "tsx";
    } else if (shapeFlag & SHAPE_FLAGS[REACT]) {
      context.ext = "Jsx";
    } else if (shapeFlag & SHAPE_FLAGS[LICENSE]) {
      context.file = LICENSE;
    } else if (shapeFlag & SHAPE_FLAGS[GITIGNORE]) {
      context.file = GITIGNORE;
    } else if (shapeFlag & SHAPE_FLAGS[ESLINTVUE]) {
      context.file = ".eslintrc";
      context.ext = "js";
    } else if (shapeFlag & SHAPE_FLAGS[PRETTIER]) {
      context.file = PRETTIER;
    } else if (shapeFlag & SHAPE_FLAGS[EDITORCONFIG]) {
      context.file = EDITORCONFIG;
    }
  } else {
    throw new Error(`yuice: ${context.source} template 不存在`);
  }
}
module.exports = {
  initContextShapeFlagWithExt,
};
