const path = require("path");

const cwd = process.cwd();

function resolveCwdPath(mkPath) {
  return path.resolve(cwd, mkPath);
}
function resolvePath(p1, p2) {
  return path.resolve(p1, p2);
}

module.exports = {
  resolveCwdPath,
  resolvePath,
};
