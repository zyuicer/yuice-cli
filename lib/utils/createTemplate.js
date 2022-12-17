const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const { TEMPLATE_MAP } = require("../../shared/templateMap");
function createTemplate(context, renderOptions) {
  const { shapeFlag } = context;
  const template = fs.readFileSync(
    path.resolve(__dirname, `../../template/${TEMPLATE_MAP[shapeFlag]}.ejs`),
    {
      encoding: "utf-8",
    }
  );
  const code = ejs.render(template, {
    data: renderOptions,
  });
  return code;
}

module.exports = {
  createTemplate,
};
