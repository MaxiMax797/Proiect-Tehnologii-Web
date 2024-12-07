import React from "react";
import "./NotesList.css";

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h2 className="note-title">{note.title}</h2>
          <p className="note-author">Autor: {note.author}</p>
          <p className="note-date">Data: {note.date}</p> {/* Data afișată pe un rând separat */}
          <p className="note-description">{note.description}</p>
          <div className="note-tags">
            {note.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="note-actions">
            <button onClick={() => onEdit(note)}>Editează</button>
            <button onClick={() => onDelete(note.id)}>Șterge</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
