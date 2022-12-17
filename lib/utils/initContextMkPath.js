const { resolvePath, resolveCwdPath } = require("../../shared/resolvePath");

function initContextMkPath(context) {
  context.mkPath = resolveCwdPath(context.path || "");
  context.mkPath = resolvePath(context.mkPath, context.mkdir || "");
}

module.exports = {
  initContextMkPath,
};
