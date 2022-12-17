#!/usr/bin/env node
const { program } = require("commander");
const { name, version } = require("./package.json");
const { create } = require("./lib/core/create/create.command");
create();

program.version(version).name(name);
try {
  program.parse();
} catch (err) {
  console.log(err.message);
}
