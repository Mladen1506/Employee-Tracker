const inquirer = require("inquirer");

const queries = {
    viewEmployees: `SELECT e.id, e.first_name, e.last_name, r.title, departments.department_name as department, r.salary, IFNULL(emp.last_name,'no manager') as manager 
                    FROM employees e
                    LEFT JOIN roles r     
                    ON r.id = e.role_id
                    JOIN departments 
                    ON r.department_id = departments.id
                    LEFT JOIN employees emp
                    ON emp.id = e.manager_id;`,
    viewDepartments: `SELECT * FROM departments`,
    viewRoles: `SELECT r.id, r.title, r.salary, d.department_name as department
                FROM roles r
                JOIN departments d
                ON d.id = r.department_id;`,


}


class Query {
    constructor(db) {
        this.db = db;
    }


    viewDepartments = function(main) {
        this.db.query(queries.viewDepartments, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(rows);
            main();
        });
    }


    viewEmployees = function(main) {
        this.db.query(queries.viewEmployees, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }

            console.table(rows);

            main();
        });
    }
    getEmployees = function(cb) {
        this.db.query(queries.viewEmployees, (err, rows) => {
            if (err) {
                console.log(err.message);
                return cb(null, Error("Unable to query employees"));
            }

            console.table(rows);

            cb(rows);
        });
    }

    viewRoles = function(main) {
        this.db.query(queries.viewRoles, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(rows);
            main();
        });
    }

    getDepartments = function(cb) {
        this.db.query(queries.viewDepartments, (err, rows) => {
            if (err) {
                console.log(err.message);
                return cb(null, Error('Bad'));
            }
            console.table(rows);
            cb(rows);
        });
    }
    getRoles = function(cb) {
        this.db.query(queries.viewRoles, (err, rows) => {
            if (err) {
                console.log(err.message);
                return cb(null, Error('Bad'));
            }
            console.table(rows);
            cb(rows);
        });
    }




}

module.exports = Query;