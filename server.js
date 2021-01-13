const mysql = require("mysql");
const inquirer = require("inquirer");
const { start } = require("repl");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_DB"
});

connection.connect(function(err){
    if (err) throw err;
    start();
});

function start() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Where would you like to start?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"

        ]
    })
    .then(function(answer){
        switch (answer.action) {
            case "View all departments":
                viewDepartments();
                break;

                case "View all roles":
                    viewRoles();
                    break;

                case "Add a department":
                    addDepartmend();
                    break;
                    
                case "Add an employee":
                    addEmployee();
                    break;
                    
                case "Update employee role":
                    updateRole();
                    break;
                    
                case "Exit":
                    connection.end();
                    break;   


        }
    });
}


function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res){
        console.log(`DEPARTMENT:`)
        res.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`)
        })
         start()

    });
};

function addDepartment() {
    inquirer
    .prompt({
        name: "department",
        type: "input",
        message: "What is the name of the new department?",
    })
    .then(function(answer){
        var query = "INSERT INTO department (name) VALUE (?)";
        connection.query(query,answer.department, function(err, res){
            console.log(`You have added this department: ${(answer.department).toUpperCase()}.`)
        })
        viewDepartments();
    })

}

function addRole() {
    connection.query('SELECT * FROM department', function(err, res){
        if (err) throw(err);
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is the titel of the new role?",
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary lf the new role?",

        },
        {
            name: "departmentName",
            type: "list",
            message: " Which department does this role fall under?",
            choices: function() {
                var choiceArray = [];
                res.forEach(res => {
                    choiceArray.push(
                        res.name
                    );
                })
                return choiceArray;
            }
        }

        ])
        .then(function(answer){
            const department = answer.departmentName;
            connection.query('SELECT * FROM DEPARTMENT', function(err,res){

                if (err) throw (err);
                let depIteration = res.filter(function(res){
                    return res.name == department;
                }
                )

                let id = depIteration[0].id;
                let query = "INSERT INTO roles (title, salary, department_id) VALUE (?, ?,?)";
                let value = [answer.title, parseInt(answer.salary), id]
                console.log((value);
                    connection.query(query, value,
                        function(err,res){
                            console.log(`You have added this role: ${(values[0]).toUpperCase()}.`)

                        }) 
            })
        })


    })
}
