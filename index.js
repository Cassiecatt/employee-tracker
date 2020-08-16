const inquirer = require("inquirer");
const connection = require("./db/connection");
const table = require("console.table");


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
                "Leave"
            ]
        }
    ]).then(answer => {
        switch (answer.options) {
            case "View ALL Employees":
                viewAllEmployees(connection);
                break;
            case "View All Employees By Department":
                break;
            case "View ALL Roles":
                viewAllRoles(connection);
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
                // quit();
        }
    })
};
questions();
  

//View all roles
function viewAllRoles(connection) {
    connection.query('SELECT * FROM role', function(err, res) {
        if(err) throw err;
        console.log("\n Roles Retrieved from DB \n");
        console.table(res);
    });
    questions();
};

function viewAllEmployees(connection) {
    connection.query('SELECT * FROM employee', function(err, res) {
        if(err) throw err;
        console.log("\n Employees Retrieved from DB \n");
        console.table(res);
    });
    questions();
};