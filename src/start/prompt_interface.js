import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
var cmd = readline.createInterface({ input: stdin, output: stdout });
cmd.on("SIGINT", () => {
  cmd.question("Are you sure you want to exit? ", (answer) => {
    if (answer.match(/^y(es)?$/i)) cmd.close();
  });
});
export default cmd;
