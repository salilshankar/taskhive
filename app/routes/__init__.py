from .tasks import tasks_bp
from .notes import notes_bp

def register_routes(app):
    app.register_blueprint(tasks_bp)
    app.register_blueprint(notes_bp)
