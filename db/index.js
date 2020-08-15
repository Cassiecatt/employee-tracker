const connection = require("./connection");

// View all departments funcion
function viewAllDepartments() {
    return connection.query('SELECT * FROM department');
};

// View all roles
function viewAllRoles() {
    return connection.query('SELECT * FROM role');
};

// View all employees
function viewAllEmployees() {
    return connection.query('SELECT * FROM employee');
};

//Add a department
function addDepartment(department) {
    return connection.query('INTSERT INTO department SET ?', department);
};

//Add a role
function addRole(role) {
    return connection.query('INSERT INTO role SET ?', role);
};

//Add an employee
function addEmployee(employee) {
    return connection.query('INSERT INTO employee SET ?', employee);
};

//Update employee role
function updateEmployeeRole(roleId, employeeId) {
    return connection.query('UPDATE employee SET role_id ? WHERE id = ?', [roleId, employeeId]);
}




// viewAllEmployees(connection);
// viewAllDepartments(connection);
// viewAllRoles(connection);

// //View all roles
// function viewAllRoles(connection) {
//     connection.query('SELECT * FROM role', function(err, res) {
//         if(err) throw err;
//         console.log(res)
//     });
// };


