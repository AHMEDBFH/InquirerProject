import inquirer from "inquirer";

const func = async () => {
  let { result } = await inquirer.prompt({
    name: "result",
    type: "list",
    message: "Choose a door to go through?",
    choices: ["A", "B", "C"],
  });
  return result;
};
const display = async () => {
  let response = await func();
  if (response === "A") {
    console.log("You're almost there");
  } else if (response === "B") {
    console.log(`do you want to turn left or right`);
  } else {
    console.log("Sorry You failed ");
  }
};

display();
