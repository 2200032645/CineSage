import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName, navigate);
  };

  return (
    <div className="register-container">
      <div className="register-left">
      <h1 style={{
  fontSize: "3rem",
  fontWeight: "bold",
  background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
  backgroundSize: "400%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "rainbow 5s linear infinite",
  letterSpacing: "2px",
  textShadow: "0 0 5px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.3)"
}}>CineSage</h1>

      <p>Discover personalized movie recommendations.</p>
      </div>

      <div className="register-right">
        <div className="register-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
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
            <button type="submit">Sign Up</button>
          </form>
          <p className="already-account">
            Already have an account? <span onClick={() => navigate("/login")}>Log In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
