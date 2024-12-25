import GoogleIcon from "@mui/icons-material/Google";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logotwo.svg";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      phone,
    };
    console.log(userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        userData
      );
      console.log("User signed up:", response.data);
      navigate("/user");
    } catch (error) {
      console.error(
        "Error signing up user:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
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
          Join Us!
        </h1>
        <Typography
          gutterBottom
          style={{ color: "#fff", textAlign: "center", maxWidth: "300px" }}
        >
          Create your account to explore new opportunities and manage your tasks
          effectively.
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
          SIGN UP
        </Typography>
        <form
          style={{ width: "100%", maxWidth: "400px" }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#4B49AC",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
              placeholder="Enter your full name"
            />
          </div>

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
              onChange={(e) => setEmail(e.target.value)} // Corrected here
              required
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

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#4B49AC",
              }}
            >
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Corrected here
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
              placeholder="Enter your phone number"
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
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
              onChange={(e) => setPassword(e.target.value)} // Corrected here
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex items-center justify-center flex-col gap-5">
            <Button
              type="submit"
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
              startIcon={<PersonAddIcon />}
            >
              Sign Up
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
              Sign up with Google
            </Button>

            <div style={{ textAlign: "start" }} className="flex items-start">
              <Typography variant="body2" style={{ color: "gray" }}>
                Already have an account?{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>
                  <Link to="/login">Login</Link>
                </span>
              </Typography>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
