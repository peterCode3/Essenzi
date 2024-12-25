import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logotwo.svg";
import { Link } from "react-router-dom"; // Import useHistory for redirection
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form default submit behavior
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const { token, userId, username } = response.data;

      // Store the token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);

      console.log("Login successful:", response.data);

      // Redirect to the dashboard after login
      
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#4B49AC", // Theme color
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img src={logo} alt="" className="-mt-[140px]" />
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
          className="-mt-[100px]"
        >
          Welcome Back!
        </h1>
        <Typography
          gutterBottom
          style={{ color: "#fff", textAlign: "center", maxWidth: "300px" }}
        >
          Discover new opportunities and manage your tasks efficiently with our
          platform.
        </Typography>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#F5F5F5", // Theme-friendly background
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold" }}
          style={{ color: "#4B49AC" }}
        >
          SIGN IN
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: "400px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#4B49AC",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind the email field to the state
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
              placeholder="Enter your email"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#4B49AC",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind the password field to the state
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-5">
            <Button
              type="submit" // Trigger the login function when clicked
              variant="contained"
              sx={{
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 1.5,
                paddingBottom: 1.5,
                textTransform: "none",
                width: "100%",
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5, // Space between icon and text
                "&:hover": {
                  backgroundColor: "#7978E9", // Supporting theme color on hover
                },
                "&:active": {
                  backgroundColor: "#7DA0FA", // Slightly lighter supporting color when active
                },
              }}
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
            <Typography
              variant="h7"
              gutterBottom
              sx={{ fontWeight: "bold" }}
              style={{ color: "black" }}
            >
              Or
            </Typography>

            <Button
              variant="outlined" // Outlined style for differentiation
              sx={{
                borderColor: "#4B49AC", // Theme color border
                color: "#4B49AC", // Theme color text
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 1.5,
                paddingBottom: 1.5,
                textTransform: "none",
                width: "100%",
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5, // Space between icon and text
                "&:hover": {
                  borderColor: "#7978E9", // Supporting color on hover
                  color: "#7978E9",
                  backgroundColor: "rgba(121, 120, 233, 0.1)", // Slight background highlight
                },
                "&:active": {
                  borderColor: "#7DA0FA",
                  color: "#7DA0FA",
                },
              }}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
          </div>
        </form>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="body2" style={{ color: "gray" }}>
            Don't have an account?{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              <Link to='/signup'>Create one</Link>
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Signin;
