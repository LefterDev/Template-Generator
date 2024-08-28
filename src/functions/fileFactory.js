//! External modules import
import * as fs from "node:fs";

export const fileFactory = (files, dir) => {
  for (const file in files) {
    fs.writeFileSync(`${dir}/${file}`, files[file]);
  }
  return;
};
