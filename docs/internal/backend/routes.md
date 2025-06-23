# /app/routes

This folder contains Python files that set up the backend API routes. There are three files in this folder:

1. __init__.py: Registers the API endpoints that the other files expose.
2. notes.py: Exposes the API endpoints that handle the CRUD operations for notes.
3. tasks.py: Exposes the API endpoints that handle the CRUD operations for tasks.

## __init__.py

This file registers the routes that `notes.py` and `tasks.py` files expose. 

## notes.py

This file uses the [notes model](./models.md) to interact with the database and exposes the following routes to work with notes:

### GET /api/notes

Fetches all the notes from the database and returns an array of all the notes as JSON.

### POST /api/notes

Uses the note content from the request payloads and stores it in the database. Returns the stored note with its ID as JSON.

### DELETE /api/notes/{id}

Uses the note's ID specified in the PATH parameter and deletes it from the database.

## tasks.py

This file uses the [tasks model](./models.md) and exposes the following routes to work with tasks. 

### GET /api/tasks

Fetches all the tasks from the database and returns an array of tasks as JSON.

### POST /api/tasks

Takes the task data from the request payload and adds it to the database. Returns the stored task with the ID attached to it as JSON.

### PUT /api/tasks/{task_id}

Takes the task data from the request payload and updates the task using the task_id path parameter. Returns the updated task data from the database as JSON.

### DELETE /api/tasks/{task_id}

Deletes the task using its task_id path parameter. Returns the message "Task Deleted" as JSON.