import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apelează API-ul de autentificare
    console.log("Autentificare:", { email, password });
  };

  // Basic validation for ASE email
  if (!email.endsWith('@stud.ase.ro')) {
    alert('Utilizați doar adresa de email instituțională @stud.ase.ro');
    return;
  }

  // Simulate login (replace with actual backend call)
  login(email);
  console.log("Autentificare:", { email });


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email (@stud.ase.ro)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
