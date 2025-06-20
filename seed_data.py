# seed_data.py

from app import create_app, db
from app.models import Note, Task
from datetime import datetime, timedelta, timezone

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    # Sample Notes
    notes = [
        Note(content="Call Alice for project feedback."),
        Note(content="Draft the release blog post."),
        Note(content="Research productivity tools for the team.")
    ]

    # Sample Tasks
    tasks = [
        Task(title="Finish onboarding flow", is_completed=False),
        Task(title="Fix login bug", is_completed=True),
        Task(title="Write launch email", is_completed=False),
        Task(title="Update README", is_completed=True),
        Task(title="Schedule 1:1s", is_completed=False)
    ]

    db.session.add_all(notes + tasks)
    db.session.commit()
    print("✅ Mock data seeded!")
