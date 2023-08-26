USE company_db;

-- Insert departments
INSERT INTO department (name) VALUES
  ('HR'),
  ('Engineering'),
  ('Marketing'),
  ('IT'),
  ('Administration'),
  ('Production');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
  ('HR Manager', 80000, 1),
  ('Software Engineer', 100000, 2),
  ('Marketing Specialist', 60000, 3),
  ('IT Director', 75000, 4),
  ('Admin Coordinator', 50000, 5),
  ('Senior Producer', 63000, 6);
-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Harry', 'Potter', 2, 1),
  ('Ron', 'Weasley', 3, 3),
  ('Hermoine', 'Granger', 4, 5),
  ('Neville', 'Longbottom', 5, 6)
  ('Luna', 'Lovegood', 6, 3);
