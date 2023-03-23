import * as fs from "fs";

import { program } from 'commander';

import { DOMAINS } from "./src/domains.js";
import { SUBJECTS as PHI_SUBJECTS } from "./src/subjects/phi.js";
import { SUBJECTS as MATH_SUBJECTS } from "./src/subjects/maths.js";
import { buildJson } from "./src/openTable.js";

export const MINIFIED_JSON_PATH = import.meta.dir + "/contents/open-table.min.json";
export const JSON_PATH = import.meta.dir + "/contents/open-table.json"

const getContents = () => {
  const subjects = [
    ...Object.values(PHI_SUBJECTS),
    ...Object.values(MATH_SUBJECTS),
  ]
  const contents = buildJson(DOMAINS, subjects);

  return {
    min: JSON.stringify(contents),
    full: JSON.stringify(contents, null, 2),
  };
};

const write = () => {
  const contents = getContents();

  console.log(MINIFIED_JSON_PATH)


  fs.writeFileSync(MINIFIED_JSON_PATH, contents.min);
  fs.writeFileSync(JSON_PATH, contents.full);
}

const verify = () => {
  const actual = getContents();

  const expected = {
    min: fs.readFileSync(MINIFIED_JSON_PATH).toString(),
    full: fs.readFileSync(JSON_PATH).toString(),
  };


  if (actual.min !== expected.min) {
    throw new Error("Calculated minified version doesn't match existing minified version");
  }

  if (actual.full !== expected.full) {
    throw new Error("Calculated full version doesn't match existing full version");
  }


}


program
  .command("write")
  .action(write);

program
  .command("verify")
  .action(verify);

try {
  program.parse();
} catch (error) {
  console.log((error as Error).message);
  process.exit(1)
}
