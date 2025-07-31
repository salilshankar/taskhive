import React, { useEffect, useState } from 'react';
import './index.css';

function TaskHive() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    async function fetchData() {
      const [taskRes, noteRes] = await Promise.all([
        fetch('/api/tasks'),
        fetch('/api/notes')
      ]);
      const [taskData, noteData] = await Promise.all([
        taskRes.json(),
        noteRes.json()
      ]);
      setTasks(taskData);
      setNotes(noteData);
    }
    fetchData();
  }, []);

  async function createTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask })
    });
    const newItem = await res.json();
    setTasks(prev => [...prev, newItem]);
    setNewTask('');
  }

  async function toggleTask(task) {
    const updatedTask = { ...task, is_completed: !task.is_completed };
    await fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask)
    });
    setTasks(prev => prev.map(t => t.id === task.id ? updatedTask : t));
  }

  async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  async function createNote(e) {
    e.preventDefault();
    if (!newNote.trim()) return;
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newNote })
    });
    const newItem = await res.json();
    setNotes(prev => [...prev, newItem]);
    setNewNote('');
  }

  async function deleteNote(id) {
    await fetch(`/api/notes/${id}`, { method: 'DELETE' });
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  return (
    <div>
      <h1>📝 TaskHive</h1>

      <h2>Tasks</h2>
      <form className="form" onSubmit={createTask}>
        <input
          type="text"
          placeholder="New task title..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {tasks.map(task => (
        <div className="item" key={task.id}>
          <span>{task.title}</span>
          <span style={{ cursor: 'pointer' }} onClick={() => toggleTask(task)}>
            <span className="status">{task.is_completed ? '✅' : '❌'}</span>
          </span>
          <span
            style={{ cursor: 'pointer', color: 'red', marginLeft: '0.5rem' }}
            onClick={() => deleteTask(task.id)}
          >
            🗑️
          </span>
        </div>
      ))}

      <h2>Notes</h2>
      <form className="form" onSubmit={createNote}>
        <input
          type="text"
          placeholder="New note..."
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {notes.map(note => (
        <div className="item" key={note.id}>
          <span>{note.content}</span>
          <span
            style={{ cursor: 'pointer', color: 'red', marginLeft: '0.5rem' }}
            onClick={() => deleteNote(note.id)}
          >
            🗑️
          </span>
        </div>
      ))}
    </div>
  );
}

export default TaskHive;
