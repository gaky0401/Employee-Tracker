DROP DATABASE IF EXISTS tracker;

CREATE database tracker;

USE tracker;

CREATE TABLE department (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);