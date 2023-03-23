import * as fs from "fs";

import { DOMAINS } from "./domains.js";
import { SUBJECTS as PHI_SUBJECTS } from "./subjects/phi.js";
import { SUBJECTS as MATH_SUBJECTS } from "./subjects/maths.js";
import { buildJson } from "./openTable.js";

export const DESTINATION = import.meta.dir + "/../contents/";
export const MINIFIED_JSON_PATH = DESTINATION + "open-table-of-contents.min.json";
export const JSON_PATH = DESTINATION + "open-table-of-contents.json"

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
    console.error("Calculated minified version doesn't match existing minified version");
  }

  if (actual.full !== expected.full) {
    console.error("Calculated full version doesn't match existing full version");
  }


}

write();
