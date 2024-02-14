import inquirer from "inquirer";
import { game } from "./InquirerProject/function";

const questions = [
  {
    type: "list",
    name: "result",
    message: "Which door would like to go through",
    choices: ["A", "B", "C"],
  },
];
function ask() {
  inquirer.prompt(questions).then((answer) => {
    console.log(questions.result);
    if (answer.result === "A") {
      console.log("You are close");
    } else if (answer.result === "B") {
      console.log("You are in the corridor");
    } else {
      console.log("you lost the game");
    }
  });
}

ask();
