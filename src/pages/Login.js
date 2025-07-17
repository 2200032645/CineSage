import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signUpProvider } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      signIn(email, password, navigate);
    } else {
      setCaptchaError(true);
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    if (parseInt(e.target.value) === randomNumber) {
      setCaptchaValid(true);
      setCaptchaError(false);
    } else {
      setCaptchaValid(false);
    }
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 style={{
  fontSize: "3rem",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #ff4d4d, #ff9933, #33cc33, #3399ff, #9933ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "2px",
  textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
}}>CineSage</h1>

        <p>Discover personalized movie recommendations.</p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder={`Captcha: ${randomNumber}`}
              onChange={handleUserInput}
              required
            />
            {captchaError && <div className="error">Enter correct captcha</div>}
            <button type="submit" disabled={!captchaValid}>Log In</button>
            <div className="forgot-password" onClick={() => forgotPassword(email)}>
              Forgot password?
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
