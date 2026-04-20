CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    name TEXT,
    major TEXT
);

CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    student_id INTEGER,
    course_name TEXT,
    professor TEXT
);

CREATE TABLE assignments (
    assignment_id INTEGER PRIMARY KEY,
    course_id INTEGER,
    title TEXT,
    due_date TEXT
);

CREATE TABLE goals (
    goal_id INTEGER PRIMARY KEY,
    student_id INTEGER,
    goal_description TEXT
);

INSERT INTO students VALUES
(1, 'Ali', 'Computer Science'),
(2, 'Maya', 'Business'),
(3, 'Ethan', 'Engineering');

INSERT INTO courses VALUES
(1, 1, 'Intro to Programming', 'Dr. Smith'),
(2, 2, 'Marketing 101', 'Dr. Lee'),
(3, 3, 'Physics I', 'Dr. Brown');

INSERT INTO assignments VALUES
(1, 1, 'Project 1', '2026-05-01'),
(2, 2, 'Case Study', '2026-05-03'),
(3, 3, 'Lab Report', '2026-05-05');

INSERT INTO goals VALUES
(1, 1, 'Get an A in all classes'),
(2, 2, 'Complete all assignments on time'),
(3, 3, 'Improve study habits');

PRAGMA table_info(students);
PRAGMA table_info(courses);
PRAGMA table_info(assignments);
PRAGMA table_info(goals);