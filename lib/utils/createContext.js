function createContext(source, destination) {
  const { mkdir, file, path } = destination;
  const context = {
    path: path || "",
    mkdir,
    file: file || mkdir,
    source,
    shapeFlag: undefined,
    renderOptions: null,
    mkPath: undefined,
    ext: "",
  };

  return context;
}
module.exports = {
  createContext,
};
