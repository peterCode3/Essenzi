import React, { useState } from "react";
import { Button, Box, Grid, Paper, TextField, Typography, MenuItem, Select, InputLabel, FormControl, IconButton } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { useTheme } from "@mui/material/styles"; // Import useTheme
import { Link } from "react-router-dom";

const AddUser = ({ onBack }) => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    role: "",
    phone: "",
    email: "",
    age: "",
    city: "",
    gender: "",
    description: "",
    image: ""
  });

  const [isEditable, setIsEditable] = useState(true); // Allow editing by default

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoleChange = (e) => {
    setFormData((prev) => ({ ...prev, role: e.target.value }));
  };

  const handleSave = () => {
    // Handle save logic here, e.g., make API call to save user data
    console.log("User data saved", formData);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={4} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Add New User
        </Typography>

        <Grid container spacing={2}>
          {/* Profile Picture Section */}
          <Grid item xs={12} sm={12} className="flex itemcenter justify-center" >
            <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton component="label" sx={{ position: "absolute", top: 0, right: 0, backgroundColor: theme.palette.primary.main }}>
                <FaEdit style={{ color: "white" }} />
                <input type="file" hidden onChange={handleImageChange} accept="image/*" />
              </IconButton>
              <img
                src={formData.image || "https://via.placeholder.com/150"}
                alt="Profile"
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  border: `5px solid ${theme.palette.primary.main}`,
                }}
              />
            </Box>
          </Grid>

          {/* Form Fields */}
          {[
            { label: "First Name", name: "firstname" },
            { label: "Last Name", name: "lastName" },
            { label: "Age", name: "age" },
            { label: "City", name: "city" },
            { label: "Gender", name: "gender" },
            { label: "Phone", name: "phone" },
            { label: "Email", name: "email" },
            { label: "Description", name: "description" }
          ].map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              <TextField
                label={field.label}
                value={formData[field.name]}
                name={field.name}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                fullWidth
                multiline={field.name === "description"}
                rows={field.name === "description" ? 4 : 1}
              />
            </Grid>
          ))}

          {/* Role Dropdown */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Role</InputLabel>
              <Select
                value={formData.role}
                onChange={handleRoleChange}
                label="Role"
                name="role"
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Save Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Save New User
          </Button>
        </Box>

        {/* Back Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Link to="/user-list">
          <Button
            onClick={onBack}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          > 
            Back to User Table
          </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddUser;
