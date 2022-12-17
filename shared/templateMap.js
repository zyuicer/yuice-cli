const { SHAPE_FLAGS } = require("./shapeFlags");
const {
  VUE,
  VUETS,
  REACTTS,
  REACT,
  LICENSE,
  GITIGNORE,
} = require("../constants/templateName");
const TEMPLATE_MAP = {
  [SHAPE_FLAGS[VUE]]: VUE,
  [SHAPE_FLAGS[VUETS]]: VUETS,
  [SHAPE_FLAGS[REACT]]: REACT,
  [SHAPE_FLAGS[REACTTS]]: REACTTS,
  [SHAPE_FLAGS[LICENSE]]: LICENSE,
  [SHAPE_FLAGS[GITIGNORE]]: GITIGNORE,
};

module.exports = {
  TEMPLATE_MAP,
};
