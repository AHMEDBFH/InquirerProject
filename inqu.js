import inquirer from "inquirer";

export const func = async () => {
  let { result } = await inquirer.prompt({
    name: "result",
    type: "list",
    message: "Choose a door to go through?",
    choices: ["A", "B", "C", "D"],
  });
  return result;
};
export const resA = async () => {
  let { result } = await inquirer.prompt({
    name: "result",
    type: "list",
    message: "Choose a direction?",
    choices: ["left", "right", "straight"],
  });
  return result;
};

const display = async () => {
  let response = await func();
  if (response === "A") {
    let choice = await resA();
    if (choice !== "right" && choice !== "Straight") {
      console.log("You managed to escape the room");
    } else {
      console.log("Sorry, there is no way through, try another time");
    }
  } else if (response === "B") {
    let choice = await resA();
    if (choice === "left") {
      console.log("You managed to escape the room");
    } else {
      console.log("Sorry you lost");
    }
  } else {
    console.log("Not today try another time");
  }
};

display();
