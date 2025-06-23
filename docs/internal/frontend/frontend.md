# Internal frontend documentation for TaskHive

TaskHive's frontend is split into three main parts:

1. The `index.html` file.
2. The `taskhive.js` file.
3. The `index.css` file.

All these files are stored under `/app/static` folder.

## 1. The `index.html` file.

This file is the primary frontend and shows all the HTML components to our customers. The main components are:

- Headings: The headings separate tasks from notes and identify the app.
- Forms: The text boxes that customers use to add a task or a note to the app.
- Items: The sections that show the task or the note. 

## 2. The `taskhive.js` file.

This file holds the JS that operates on the actions that the customer performs on the HTML file. Here's the HTML component to JS function mapping:

- The body tag calls the main `taskHiveApp()` function to connect the HTML to the JS.
- The body tag uses `taskHiveApp()`'s `loadData()` function to initialize the HTML with the data from the backend.
- The forms use the `createTask()` and `createNote()` functions when a customer tries to add a note or a task.
- The templates use the data that the `loadData()` function loads.
- To update a task's status, the HTML element calls the `toggleTask()` function when the user clicks on the status icon.
- To delete a task, the HTML element calls the `deleteTask()` function when the user clicks on its delete icon.
- To delete a note, the HTML element calls the `deleteNote()` function when the user clicks on its delete icon.

Here's the frontend function to backend API call mapping:
- `loadData()` function makes a GET request to `/api/tasks` and `/api/notes` on the backend, and it updates the `tasks` and `notes` variables of the `taskHiveApp()` object.
- `createTask()` function makes a POST request to `/api/tasks` on the backend to add a task.
- `toggleTask()` function makes a PUT request to `/api/tasks/{task_id}` on the backend to update a task's status.
- `deleteTask()` function makes a DELETE request to `/api/tasks/task_id}` on the backend to delete a task. 
- `createNote()` function makes a POST request to `/api/notes` on the backend to add a note.
- `deleteNote()` function makes a DELETE request to `/api/notes/{note_id}` on the backend to delete a note.

## 3. The `index.css` file.

This file contains all the styling for all the HTML components. 