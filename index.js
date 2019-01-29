const { readFileSync, writeFileSync } = require("fs");
const merge = require("lodash/merge");
const { basename } = require("path");

const { parse, stringify } = JSON;

const [, , projectPath, oneskyPath, fileName] = process.argv;

const projectFile = parse(readFileSync(`${projectPath}${fileName}`, "utf8"));
const oneskyFile = parse(readFileSync(`${oneskyPath}${fileName}`, "utf8"));

const fileMerged = merge({}, projectFile, oneskyFile);

writeFileSync(`${projectPath}${fileName}`, stringify(fileMerged, null, 2));
