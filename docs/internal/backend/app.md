# app/__init__.py

This file initiates the flask app with `/app` as the module. 

It performs the following functions:

- Sets the SQLite path in the app's config
- Initializes the `db` object with the app's config
- Registers [REST API routes](./routes.md), and maps [index.html](../frontend/frontend.md) to root path (`"/"`).
- Adds a health route so that developers can test if the app is up and running or not.