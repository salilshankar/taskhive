from flask import Blueprint, request, jsonify
from app.models import Note
from app import db

notes_bp = Blueprint('notes', __name__)

@notes_bp.route('/api/notes', methods=['GET'])
def get_notes():
    notes = Note.query.all()
    return jsonify([{"id": n.id, "content": n.content} for n in notes])

@notes_bp.route('/api/notes', methods=['POST'])
def create_note():
    data = request.json
    note = Note(content=data['content'])
    db.session.add(note)
    db.session.commit()
    return jsonify({"id": note.id, "content": note.content}), 201

@notes_bp.route('/api/notes/<int:note_id>', methods=['DELETE'])
def delete_note(note_id):
    note = Note.query.get_or_404(note_id)
    db.session.delete(note)
    db.session.commit()
    return jsonify({"message": "Note deleted"})
