const fs = require("fs");
function mkdirHandler(context) {
  const { mkPath } = context;
  if (mkPath) {
    const exists = fs.existsSync(mkPath);
    if (!exists) {
      fs.mkdirSync(mkPath);
    }
  }
}

module.exports = {
  mkdirHandler,
};
