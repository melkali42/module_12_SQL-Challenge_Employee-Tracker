const connection = require('./db');

class Queries {
  // Add a new department
  addDepartment(name) {
    const query = 'INSERT INTO department (name) VALUES (?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [name], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // Add a new role
  addRole(title, salary, department_id) {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [title, salary, department_id], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // Add a new employee
  addEmployee(firstName, lastName, role_id, manager_id) {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [firstName, lastName, role_id, manager_id], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // Update an employee's manager
  updateEmployeeManager(employeeId, newManagerId) {
    const query = 'UPDATE employee SET manager_id = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [newManagerId, employeeId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // View employees by manager
  getEmployeesByManager(managerId) {
    const query = 'SELECT * FROM employee WHERE manager_id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [managerId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // View employees by department
  getEmployeesByDepartment(departmentId) {
    const query = 'SELECT * FROM employee WHERE role_id IN (SELECT id FROM role WHERE department_id = ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [departmentId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // Delete a department
  deleteDepartment(departmentId) {
    const query = 'DELETE FROM department WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [departmentId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // Delete a role
  deleteRole(roleId) {
    const query = 'DELETE FROM role WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [roleId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // Delete an employee
  deleteEmployee(employeeId) {
    const query = 'DELETE FROM employee WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [employeeId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  // View total utilized budget of a department
  getDepartmentBudget(departmentId) {
    const query = 'SELECT SUM(salary) AS budget FROM role WHERE department_id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [departmentId], (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}

module.exports = Queries;

