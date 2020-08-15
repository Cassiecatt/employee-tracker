const inquirer = require("inquirer");
const db = require("./db"); //require everything in db folder
const table = ("console.table");


// INQUIRER questions
const questions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: [
                "View All Departments", 
                "View ALL Roles",
                "View ALL Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Quit"
            ]
        }
    ]).then(res => {
        switch (res.choice) {
            case "View All Employees":
                break;
            case "View All Employees By Department":
                break;
            case "View ALL Roles":
                break;
            case "Add a Department":
                break;
            case "Add a Role":
                break;
            case "Add an Employee":
                break;
            case "Update an Employee Role":
                break;
            default:
                Quit;
        }
    })
};

questions();

