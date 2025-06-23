# /app/models

This folder contains Python files that define the how the data is stored in the notes and tasks tables. There are three files in this folder:

1. __init__.py: Brings all the models together in one place.
2. note.py: Represents a row of the notes table.
3. task.py: Represents a row of the tasks table.

## __init__.py

Imports the structure of the tasks and notes tables from the `task.py` and `note.py` files.

## task.py

Defines the structure of the tasks table. A task has the following data that constitutes a row (or a model) in the tasks table.

- id: The task's ID. This is an integer value and it's the primary key of the table. The database generates it for a task when it is created.
- title: The task's title. This a string value.
- is_completed: The task's status, whether it's complete or incomplete. This is a boolean value. `true` states complete, `false` states incomplete.
- due_date: The due-date of a task. This is a date-time string. It can be a null value.
- created_at: The date when the task got created. This is a date-time string. Database inserts it when the task is created.

## model.py

Defines the structure of the models table. A model has the following data that constitutes a row (or a model) in the models table.

- id: The model's ID. This is an integer value and it's the primary key of the table. The database generates it for a model when it's created.
- content: The model's content. This is a string value.
- created_at: The date when the note got created. This is a date-time string. Database inserts it when the note is created.