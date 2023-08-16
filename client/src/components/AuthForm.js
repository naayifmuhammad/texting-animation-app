import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css"; // Create this CSS file for styling

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login logic
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);

          // Redirect to the dashboard upon successful login
          navigate("/dashboard");
        } else {
          console.error("Login failed");
        }
      } else {
        // Register logic
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Registration successful:", data);

          // Redirect to the dashboard upon successful registration
          navigate("/dashboard");
        } else {
          console.error("Registration failed");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && ( // Conditionally render the username field for register mode
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default AuthForm;
