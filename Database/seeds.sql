USE employee_db;

INSERT INTO department (name) VALUE ("Software");
INSERT INTO department (name) VALUE ("Finance");
INSERT INTO department (name) VALUE ("Humna Resources");
INSERT INTO department (name) VALUE ("Sales");

INSERT INTO rolesde (title, salary, department_id) VALUE ("Software Engineer", 115000,1);
INSERT INTO roles (title, salary, department_id) VALUE ("Accountant", 125000, 2);
INSERT INTO roles (title, salary,department_id) VALUE ("Analyst", 50000, 3);
INSERT INTO roles (title,salary,department_id) VALUE ("Sales Lead", 75000, 4);
INSERT INTO roles (title, salary,department_id) VALUE ("Lead Engineer", 90000, 5);


INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Bob", "Belcher",1);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Linda", "Belcher",2);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Tina", "Belcher",3);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Gene", "Belcher",4);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Louise", "Belcher",5);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Teddy", "Murphy",2);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Jimmy", "Pesto", 4,);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Mort", "Morten", 1);