//! Templates array
const TEMPLATE_OPTIONS = ["basic", "standard", "premium"];

//! Modules imports
import * as fs from "node:fs";
import * as path from "node:path";
//! Fix for __dirname in es scope
import { __dirname } from "../app.js";

//! External imports
import cmd from "./prompt_interface.js";
import { generateTemplate } from "../gen/generateTemplate.js";

//TODO Implement external handlers
(async () => {
  let ans = await cmd.question(
    `What template do you need to be generated? (${[
      ...TEMPLATE_OPTIONS,
    ]})\nYour answer: `
  );

  while (!TEMPLATE_OPTIONS.includes(ans.toLowerCase().trim())) {
    ans = await cmd.question(
      `Please try again, available templates are: ${[
        ...TEMPLATE_OPTIONS,
      ]}\nYour answer: `
    );
  }

  let creationDecision = await cmd.question(
    "Would you like to create the file in this folder or a specified location: (Y/N): "
  );
  let answer = creationDecision[0].toUpperCase();
  while (answer != "N" && answer != "Y") {
    creationDecision = await cmd.question("Please try again (Y/N): ");
    answer = creationDecision[0].toUpperCase();
  }

  let directory;
  let pth;
  switch (answer) {
    case "Y":
      directory = await cmd.question(
        "Please specify the directory you wish the file to be created (or leave blank to create in current directory)\nYour answer: "
      );
      if (!fs.existsSync(directory) && directory !== "") {
        fs.mkdirSync(directory);
      }
      pth = directory;
      break;
    case "N":
      directory = await cmd.question(
        "Please specify a folder in which the project will be created (or leave blank to create in current directory): "
      );
      pth = path.join(__dirname, directory);
      if (!fs.existsSync(pth)) {
        fs.mkdirSync(pth);
      }
  }

  cmd.close();
  console.log(generateTemplate(pth, ans.trim()));
})();
