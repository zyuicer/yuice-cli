const {
  initContextShapeFlagWithExt,
} = require("../../utils/initContextShapeFlags");
const { createTemplate } = require("../../utils/createTemplate");
const { mkdirHandler } = require("../../../shared/mkdirHandler");
const { writeFileSync } = require("../../../shared/write");
const { createContext } = require("../../utils/createContext");
const { initContextMkPath } = require("../../utils/initContextMkPath");
const {
  initContextRenderOption,
} = require("../../utils/initContextRenderOptions");
const { successMessage } = require("../../utils/successMessage");
const { TEMPLATE_MAP } = require("../../../shared/templateMap");

// dest: -MK mkdir, -F file, -P --path
function createAction(source, destination) {
  const context = createContext(source, destination);

  initContextMkPath(context);

  initContextShapeFlagWithExt(context);

  // match shapeFlag init options
  initContextRenderOption(context);

  // if mk
  mkdirHandler(context);

  // ejs data
  const data = createTemplate(context, context.renderOptions);

  writeFileSync(context, data);

  successMessage(
    `yuice: created ${TEMPLATE_MAP[context.shapeFlag]} template ${
      context.file
    }.${context.ext}`
  );
}

module.exports = {
  createAction,
};
