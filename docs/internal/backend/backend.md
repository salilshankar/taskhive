# The TaskHive backend

The backend is where all the code for database access and the logic that serves the notes and tasks data is stored. The backend code is divided into four major components:

1. The `/app/__init__.py` file where the backend is initialized. To go through its documentation, see [app.md](./app.md).
2. The `/app/extensions.py` file that contains common utilities. For example, howt the database connection is made. To go through its documentation, see [extensions.md](./extensions.md).
3. The `/app/models` directory that contains Python files that create the database. To go through its documentation, see [models.md](./models.md).
4. The `/app/routes` directory that contains Python files that set up the REST API routes. To go through its documentation, see [routes.md].

