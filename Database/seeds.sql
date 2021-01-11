USE employees_DB;

INSERT INTO department (name) VALUE ("Software");
INSERT INTO department (name) VALUE ("Finance");
INSERT INTO department (name) VALUE ("Humna Resources");
INSERT INTO department (name) VALUE ("Sales");

INSERT INTO roles (title, salary, department_id) VALUE ("Software Engineer", 115000,1);
INSERT INTO roles (title, salary, department_id) VALUE ("Accountant", 125000, 2);
INSERT INTO roles (title, salary,department_id) VALUE ("Analyst", 50000, 3);
INSERT INTO roles (title,salary,department_id) VALUE ("Sales Lead", 75000, 4);


INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("") 