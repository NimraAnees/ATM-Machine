#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
}
else {
    console.log("Invalid PIN code.");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"],
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount: ",
            type: "number"
        }
    ]);
    if (amountAns.amount <= myBalance) {
        myBalance -= amountAns.amount;
        console.log(`Transaction successful. Your reamaining balance is ${myBalance}`);
    }
    else {
        console.log("Insufficient balance.");
    }
}
else if (operationAns.operation === "check balance") {
    console.log(`Your balance is : ${myBalance}`);
}
else if (operationAns.operation === "fast cash") {
    const fastCashAns = await inquirer.prompt([
        {
            name: "fastCash",
            message: "Select the amount you would like to withdraw:",
            type: "list",
            choices: [10000, 20000, 30000, 40000]
        },
    ]);
    myBalance -= fastCashAns.fastCash;
    if (fastCashAns.fastCash >= myBalance) {
        console.log(`Transaction successful. Your remaining balance is: ${myBalance}`);
        console.log("Thank you!");
    }
    else {
        console.log("Insufficient balance.");
    }
}
