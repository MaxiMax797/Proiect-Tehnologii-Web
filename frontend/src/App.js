import React, { useState } from "react";
import NotesList from "./components/Notes/NotesList";
import NoteEditor from "./components/Notes/NoteEditor";
import Navbar from "./components/Shared/Navbar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Introducere în React",
      description: "Învață despre JSX, state și props.",
      category: "Curs",
      author: "Andrei Popescu",
      date: "2024-12-01",
      tags: ["React", "JavaScript", "Frontend"],
    },
    // Alte note
  ]);

  const [editingNote, setEditingNote] = useState(null);

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const handleSaveNote = (updatedNote) => {
    if (updatedNote.id) {
      // Actualizează nota existentă
      setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    } else {
      // Adaugă o notă nouă
      updatedNote.id = notes.length > 0 ? Math.max(...notes.map((note) => note.id)) + 1 : 1;
      setNotes([...notes, updatedNote]); // Adăugăm noua notă în lista de note
    }
    setEditingNote(null); // După salvare, ieșim din modul de editare
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id)); // Șterge notița din lista
  };

  const handleAddNote = () => {
    const newNote = {
      id: null, // Va fi setat după salvare
      title: "",
      description: "",
      category: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
      tags: [],
    };
    setEditingNote(newNote); // Setează notița curentă pentru editare
  };

  return (
    <div className="App">
      <Navbar onAddNote={handleAddNote} />
      {editingNote ? (
        <NoteEditor note={editingNote} onSave={handleSaveNote} />
      ) : (
        <NotesList notes={notes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
      )}
    </div>
  );
};

export default App;
