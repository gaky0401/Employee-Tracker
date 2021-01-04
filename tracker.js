const connection = require ("./connections");
const db = require("./employee.sql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql");

let managers = [];
let roles = [];
let departments = [];
let employees = [];

main();

function main () {
    employeeArr();
    managerArr();
    departmentArr();
    rolesArr();
    
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Choose an option:",
            choices: [
                "View employees",
                "View managers",
                "Add employee",
                "Delete employee",
                "Update employee role",
                "View roles",
                "Add role",
                "Delete role",
                "View departments",
                "Add department",
                "Delete department",
                "Exit"
            ]
        }
    ]).then((response) => {
        switch (response.options) {
            case "View employees":
                viewEmployees();
                break;

            case "View managers":
                viewManagers();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Delete employee":
                deleteEmployee();
                break;

            case "Update employee role":
                updateEmployee();
                break;

            case "View roles":
                viewRoles();
                break;

            case "Add role":
                addRole();
                break;

            case "Delete role":
                deleteRole();
                break;

            case "View departments":
                viewDpt();
                break;

            case "Add department":
                addDpt();
                break;

            case "Delete department":
                deleteDpt();
                break;

            case "Exit":
                Exit();
                break;
        });
    });
}
