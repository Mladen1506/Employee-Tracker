INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');


INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 90000, 1),
('Software Engineer', 100000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 120000, 2),
('Marketing Coordindator', 60000, 3), 
('Sales Lead', 80000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 70000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Leo', 'Messi', 1, 1),
('Christiano', 'Penaldo', 2, null),
('Novak', 'Djokovic', 3, null),
('Rafael', 'Nadal', 4, null),
('Nikola', 'Jokic', 5, 5),
('Lebron', 'James', 6, null),
('Andres', 'Iniesta', 7, 7),
('Luis', 'Figo', 8, 8);