use employees;

INSERT INTO department
    (name)
VALUES
    ('Development'),
    ('Design'),
    ('Paid Search'),
    ('Sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sr Web Developer', 110000, 1),
    ('Jr Dev', 65000, 1),
    ('Sr Web Designer', 100000, 2),
    ('Jr Creative', 60000, 2),
    ('PPC Manager', 70000, 3),
    ('PPC Strategist', 50000, 3),
    ('Sales Lead', 90000, 4),
    ('Salesperson', 40000, 4);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Max', 'Lane', 1, NULL),
    ('Sara', 'Wong', 2, 1),
    ('Ashley', 'Gomez', 3, NULL),
    ('Tim', 'Allen', 4, 3),
    ('Jonny', 'Draper', 5, NULL),
    ('Nikita', 'Brown', 6, 5),
    ('Jenny', 'Smith', 7, NULL),
    ('Tom', 'Road', 8, 7)
