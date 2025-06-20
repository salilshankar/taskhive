function taskHiveApp() {
    return {
        tasks: [],
        notes: [],
        newTask: "",
        newNote: "",

        async loadData() {
            const [taskRes, noteRes] = await Promise.all([
                fetch('/api/tasks'),
                fetch('/api/notes')
            ]);
            this.tasks = await taskRes.json();
            this.notes = await noteRes.json();
        },

        async createTask() {
            if (!this.newTask.trim()) return;
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: this.newTask })
            });
            const newItem = await res.json();
            this.tasks.push(newItem);
            this.newTask = "";
        },

        async toggleTask(task) {
            task.is_completed = !task.is_completed;
            await fetch(`/api/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
        },

        async deleteTask(id) {
            await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
            this.tasks = this.tasks.filter(t => t.id !== id);
        },

        async createNote() {
            if (!this.newNote.trim()) return;
            const res = await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: this.newNote })
            });
            const newItem = await res.json();
            this.notes.push(newItem);
            this.newNote = "";
        },

        async deleteNote(id) {
            await fetch(`/api/notes/${id}`, { method: 'DELETE' });
            this.notes = this.notes.filter(n => n.id !== id);
        }
    }
}
