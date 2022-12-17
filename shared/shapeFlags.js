const {
  VUE,
  VUETS,
  REACTTS,
  REACT,
  LICENSE,
  GITIGNORE,
} = require("../constants/templateName");

const SHAPE_FLAGS = {
  [VUE]: 1,
  [VUETS]: 1 << 1,
  [REACT]: 1 << 2,
  [REACTTS]: 1 << 3,
  [LICENSE]: 1 << 4,
  [GITIGNORE]: 1 << 5,
};

module.exports = {
  SHAPE_FLAGS,
};
