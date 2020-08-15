const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // View all departments funcion
  viewAllDepartments() {
    return connection.query("SELECT * FROM department");
  }

  // View all roles
  viewAllRoles() {
    return connection.query("SELECT * FROM role");
  }

  // View all employees
  viewAllEmployees() {
    return connection.query("SELECT * FROM employee");
  }

  //Add a department
  addDepartment(department) {
    return connection.query("INTSERT INTO department SET ?", department);
  }

  //Add a role
  addRole(role) {
    return connection.query("INSERT INTO role SET ?", role);
  }

  //Add an employee
  addEmployee(employee) {
    return connection.query("INSERT INTO employee SET ?", employee);
  }

  //Update employee role
  updateEmployeeRole(roleId, employeeId) {
    return connection.query("UPDATE employee SET role_id ? WHERE id = ?", [
      roleId,
      employeeId,
    ]);
  }
}

module.exports = DB;

// viewAllRoles(connection);

// //View all roles
// function viewAllRoles(connection) {
//     connection.query('SELECT * FROM role', function(err, res) {
//         if(err) throw err;
//         console.log(res)
//     });
// };
