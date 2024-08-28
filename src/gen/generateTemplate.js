//! Module imports
import * as fs from "node:fs";

//! External file imports
import {
  BasicTemplate,
  PremiumTemplate,
  StandardTemplate,
} from "../classes/templates.js";

//! Fix for __dirname in es module scope
import { __dirname } from "../app.js";
import { create } from "../functions/directoryFactory.js";
export const generateTemplate = (directory, template) => {
  if (!directory) directory = __dirname;
  let structure;
  switch (template) {
    case "basic":
      structure = BasicTemplate.directory;
      break;
    case "standard":
      structure = StandardTemplate.directory;
      break;
    case "premium":
      structure = PremiumTemplate.directory;
      break;
    default:
      structure = {};
      break;
  }
  create(template, directory, structure, (err) => {
    if (err) throw err;
  });

  return `Your project has been successfully generated at ${directory}`;
};
