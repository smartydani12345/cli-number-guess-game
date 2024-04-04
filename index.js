#! /usr/bin/env node
import inquirer from "inquirer";
// 1)computer will generate arandomNumber
// 2)user input for guessing number
// 3)compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Please Guess a number between 1-6:",
    },
]);
if (answers.userguessedNumber === randomNumber) {
    console.log("congraulation you guessed wright number.");
}
else {
    console.log("you guessed wrong number.");
}
