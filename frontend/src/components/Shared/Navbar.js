import React from "react";
import "./Navbar.css";

const Navbar = ({ onAddNote }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Note Management</h1>
      <ul>
        <li>Notițe</li>
        <li>Dashboard</li>
        <li>Profil</li>
      </ul>
      <button className="add-note-btn" onClick={onAddNote}>
        Adaugă Notiță
      </button>
    </nav>
  );
};

export default Navbar;
