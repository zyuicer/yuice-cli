const { program } = require("commander");
const { createAction } = require("./create.action");
function create() {
  program
    .command("create")
    .argument("<template>")
    .option("-F, --file <name>", "create a <name> file")
    .option(
      "-P, --path <path>",
      "create a file in <path>, default path process.cwd"
    )
    .option("-MK, --mkdir <string>", "you can create a directory storage file")

    .action(createAction);
}

module.exports = {
  create,
};
