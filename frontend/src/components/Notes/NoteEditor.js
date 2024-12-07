import React, { useState, useEffect } from "react";
import "./NoteEditor.css"

const NoteEditor = ({ note, onSave }) => {
  const [editedNote, setEditedNote] = useState({ ...note });

  useEffect(() => {
    setEditedNote({ ...note });
  }, [note]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'tags') {
      // Convert tags input to an array
      const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
      setEditedNote(prevNote => ({
        ...prevNote,
        tags: tagsArray
      }));
    } else {
      setEditedNote(prevNote => ({
        ...prevNote,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    // Verifică dacă titlul și descrierea sunt completate
    if (!editedNote.title || !editedNote.description) {
      alert('Vă rugăm să completați titlul și descrierea.');
      return;
    }

    // Asigură-te că tags este un array
    const noteToSave = {
      ...editedNote,
      tags: editedNote.tags || []
    };

    // Încearcă să apelezi funcția onSave
    if (typeof onSave === 'function') {
      onSave(noteToSave);
    } else {
      console.error('onSave is not a function');
    }
  };

  return (
    <div className="note-editor">
      <h2>Editare Notiță</h2>
      <form>
        <div className="form-group">
          <label>Titlu:</label>
          <input
            type="text"
            name="title"
            value={editedNote.title || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Descriere:</label>
          <textarea
            name="description"
            value={editedNote.description || ''}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Etichete:</label>
          <input
            type="text"
            name="tags"
            value={(editedNote.tags || []).join(", ")}
            onChange={handleInputChange}
            placeholder="Ex: React, JavaScript"
          />
        </div>
        <div className="form-group">
          <label>Data:</label>
          <input
            type="date"
            name="date"
            value={editedNote.date || new Date().toISOString().split('T')[0]}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Autor:</label>
          <input
            type="text"
            name="author"
            value={editedNote.author || ''}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="save-btn" onClick={handleSave}>
          Salvează
        </button>
      </form>
    </div>
  );
};

export default NoteEditor;