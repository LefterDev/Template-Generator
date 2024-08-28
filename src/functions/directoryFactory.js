//! External module import
import * as fs from "node:fs";
import * as path from "node:path";

//! Fix for __dirname in es module scope
import { __dirname } from "../app.js";
import { fileFactory } from "./fileFactory.js";
import {
  BasicTemplate,
  PremiumTemplate,
  StandardTemplate,
} from "../classes/templates.js";

export const create = (template, dir, structure, cb = null) => {
  cb = (
    (cb) =>
    (...a) =>
      setTimeout(() => cb.apply(null, a))
  )(cb);
  const subdirs = Reflect.ownKeys(structure);
  let currentTemplate = {};
  switch (template) {
    case "basic":
      currentTemplate = BasicTemplate;
      break;
    case "standard":
      currentTemplate = StandardTemplate;
      break;
    case "premium":
      currentTemplate = PremiumTemplate;
      break;
    default:
      currentTemplate = {};
      break;
  }
  if (subdirs.length) {
    const sub = subdirs[0];
    const pth = path.join(dir, sub);
    const subsub = structure[sub];
    const copy = Object.assign({}, structure);
    delete copy[sub];

    fs.mkdir(pth, (err) => {
      if (err) return cb(err);
      let curr_key = pth.split("/")[pth.split("/").length - 1];
      console.log(curr_key);
      if (Object.getOwnPropertyNames(currentTemplate.files).includes(curr_key)) {
        fileFactory(currentTemplate.files[curr_key], pth);
      }
      create(template, pth, subsub, (err) => {
        if (err) return cb(err);
        create(template, dir, copy, cb);
      });
    });
  } else {
    cb(null);
  }
};
