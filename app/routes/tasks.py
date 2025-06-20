from flask import Blueprint, request, jsonify
from app.models import Task
from app import db

tasks_bp = Blueprint('tasks', __name__)

@tasks_bp.route('/api/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{"id": t.id, "title": t.title, "is_completed": t.is_completed} for t in tasks])

@tasks_bp.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.json
    task = Task(title=data['title'], is_completed=data.get('is_completed', False))
    db.session.add(task)
    db.session.commit()
    return jsonify({"id": task.id, "title": task.title, "is_completed": task.is_completed}), 201

@tasks_bp.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = Task.query.get_or_404(task_id)
    data = request.json
    task.title = data.get('title', task.title)
    task.is_completed = data.get('is_completed', task.is_completed)
    db.session.commit()
    return jsonify({"id": task.id, "title": task.title, "is_completed": task.is_completed})

@tasks_bp.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.get_or_404(task_id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"})
