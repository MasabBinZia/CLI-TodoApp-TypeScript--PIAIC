#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.greenBright("Welcome to the TODO list app!"))
let todos: string[] = [];
let add: boolean = true;

while (add) {
  const userInput: {
    TODO: string,
    AddMore: boolean
  } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "Pls Input to Add todo in the list?"
    },
    {
      type: "confirm",
      name: "AddMore",
      message: "Do You want to Add more todo?",
      default: false,
    }
  ]);
  const { TODO, AddMore } = userInput;
  console.log(userInput);
  add = AddMore;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log(chalk.red("Please add a valid input"));
  }
}

if (todos.length > 0) {
    console.log("Your TODO List:");
    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });
  } else {
    console.log(chalk.yellow("NO Todos Found"));
  }

  //npm publish --access public
//   npx todo-app-mbz