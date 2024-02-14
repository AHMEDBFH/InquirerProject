import inquirer from "inquirer";

export const func = async () => {
  let { result } = await inquirer.prompt({
    name: "result",
    type: "list",
    message: "Choose a door to go through?",
    choices: ["A", "B", "C"],
  });
  return result;
};
export const resA = async () => {
  let { object } = await inquirer.prompt({
    name: "result",
    type: "list",
    message: "There is only 2 ways pick one?",
    choices: ["left", "right"],
  });
  return object;
};

export const resB = async () => {
  let { object } = await inquirer.prompt({
    name: "result",
    type: "list",
    message: "which way do you want to go?",
    choices: ["straight", "left"],
  });
  return object;
};

const display = async () => {
  let response = await func();
  if (response === "A") {
    resA();
    if (resA === "left") {
      console.log("you managed to escape");
    } else "Sorry you got caught";
  } else if (response === "B") {
    console.log(`do you want to turn left or right`);
  } else {
    console.log("Sorry You failed ");
  }
};

display(resA);
