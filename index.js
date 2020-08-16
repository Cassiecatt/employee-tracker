const inquirer = require("inquirer");
const connection = require("./db/connection");
const table = require("console.table");


// INQUIRER questions
const questions = () => {
    inquirer.prompt([
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
            case "View All Departments":
                viewAllDepartments(connection);
                break;
            case "View ALL Roles":
                viewAllRoles(connection);
                break;
            case "Add a Department":
                addDepartment(connection)
                break;
            case "Add a Role":
                addRole(connection);
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

//View all employees 
function viewAllEmployees(connection) {
    connection.query('SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id',
    function(err, res) {
        if(err) throw err;
        console.log("\n Employees Retrieved from DB \n");
        console.table(res);
        questions();
    });
};

//View all departments
function viewAllDepartments(connection) {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err) throw err;
        console.log("\n Departments Retrieved from DB \n");
        console.table(res);
        questions();
    });
};

//View all roles
function viewAllRoles(connection) {
    connection.query('SELECT * FROM role', function(err, res) {
        if(err) throw err;
        console.log("\n Roles Retrieved from DB \n");
        console.table(res);
        questions();
    });
};

//Add a department
function addDepartment(connection) {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "What department would you like to add?"
    })
    .then(function(answer) {
        connection.query('INSERT INTO department SET ?',
        {
            name: answer.department
        },
        function(err, res) {
            if(err) throw err;
            console.log("\n Departments Retrieved from DB \n");
            console.table(res);
            questions();
        });
    })
};

//Add a role
function addRole(connection) {
    inquirer.prompt([{
        type: "input",
        name: "roleTitle",
        message: "Enter role title"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "Enter role salary"
    },
     {
         type: 'input',
         name: "roleID",
         message: "Choose the role's department ID (1 - DEV, 2 - DESIGN, 3 - Paid, 4 - Sales, 5 - Content)",
     }])
    .then(function(answer) {
        connection.query('INSERT INTO role SET ?',
        {
            title: answer.roleTitle,
            salary: answer.roleSalary,
            department_id: answer.roleID 
        },
        function(err, res) {
            if(err) throw err;
            console.log("\n Roles Retrieved from DB \n");
            console.table(res);
            questions();
        });
    })
};