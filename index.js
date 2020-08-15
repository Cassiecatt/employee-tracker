const mysql = require("mysql2");
// const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "86h350xbanshee",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('success');
  
  viewAllEmployees(connection);
});

function viewAllEmployees(connection) {
    connection.query('SELECT * FROM employee', function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
    });
};

//INQUIRER questions
// const questions = () => {
//     return inquirer.prompt([
//         {
//             type: "list",
//             name: "options",
//             message: "What would you like to do?",
//             choices: [
//                 "View All Employees", 
//                 "View All Employees By Department",
//                 "View ALL Roles",
//                 "Add a Department",
//                 "Add a Role",
//                 "Add an Employee",
//                 "Update an Employee Role",
//                 "QUIT"
//             ]
//         }
//     ]).then(res => {
//         switch (res.choice) {
//             case "View All Employees":
//                 break;
//             case "View All Employees By Department":
//                 break;
//             case "View ALL Roles":
//                 break;
//             case "Add a Department":
//                 break;
//             case "Add a Role":
//                 break;
//             case "Add an Employee":
//                 break;
//             case "Update an Employee Role":
//                 break;
//             case "QUIT":
//                 break;
//         }
//     })
// };