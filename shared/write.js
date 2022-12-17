const fs = require("fs");
const { SHAPE_FLAGS } = require("./shapeFlags");
const { LICENSE, GITIGNORE } = require("../constants/templateName");
function writeFileSync(context, data) {
  let file;
  if (
    context.shapeFlag === SHAPE_FLAGS[LICENSE] ||
    context.shapeFlag === SHAPE_FLAGS[GITIGNORE]
  ) {
    file = `${context.mkPath}/${context.file}`;
  } else {
    file = `${context.mkPath}/${context.file}.${context.ext}`;
  }
  fs.writeFileSync(file, data, "utf8");
}

module.exports = {
  writeFileSync,
};
