import React, { useState, useEffect } from "react";
import { Slide as MuiSlide } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, Box, Avatar, Grid, Divider, Typography, TextField, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@mui/material/styles"; // Import useTheme
import { useThemeContext } from "../Context/ThemeContext";
import themes from "../ThemeStyle/theme";

const UsersProfile = ({ user, onBack }) => {
  const theme = useTheme(); // Access the theme object
  const [formData, setFormData] = useState(user);
  const [slideIn, setSlideIn] = useState(false);
  const [imagePreview, setImagePreview] = useState(user.image);
  const [isHovering, setIsHovering] = useState(false); // Track hover state
  const [isEditable, setIsEditable] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeContext();

  const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;

  // Trigger the slide effect when the component mounts
  useEffect(() => {
    setSlideIn(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev); // Toggle edit mode
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <MuiSlide direction="left" in={slideIn} mountOnEnter unmountOnExit>
      <Box sx={{ padding: 3, height: "100vh", backgroundColor }}>
        <Grid container spacing={4}>
          {/* Left Column: Profile Picture and Basic Info */}
          <Grid item xs={12} sm={12}>
            <Paper
              elevation={4}
              sx={{
                padding: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 2,
                backgroundColor,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  padding: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 2,
                  backgroundColor,
                  position: "relative",
                  minWidth: "250px", // Ensure proper size on small screens
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Avatar
                    src={imagePreview}
                    alt={formData.firstname}
                    sx={{
                      width: 130,
                      height: 130,
                      marginBottom: 2,
                      border: `5px solid ${theme.palette.primary.main}`,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />

                  {/* Edit icon appears on hover, but positioned outside of the avatar */}
                  {isHovering && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                      component="label"
                    >
                      <EditIcon />
                      <input
                        type="file"
                        hidden
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </IconButton>
                  )}
                </Box>

                <Box sx={{ marginLeft: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.text.primary, marginBottom: 1 }}>
                    {formData.firstname} {formData.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                    {formData.role}
                  </Typography>
                  <Box sx={{ width: "100%", textAlign: "center", display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                        color: theme.palette.info.main,
                      }}
                    >
                      <FaPhoneAlt style={{ color: theme.palette.info.dark }} /> {formData.phone}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                        color: theme.palette.info.main,
                      }}
                    >
                      <MdOutlineMail style={{ color: theme.palette.info.dark }} /> {formData.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column: Editable User Info */}
          <Grid item xs={12} sm={12}>
            <Paper
              elevation={4}
              sx={{
                padding: 3,
                borderRadius: 2,
                backgroundColor,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                User Information
              </Typography>

              <Divider sx={{ my: 2 }} />

              {/* Scrollable section */}
              <Box sx={{ maxHeight: "60vh", overflowY: "auto" }}>
                <Grid container spacing={2}>
                  {[ 
                    { label: "First Name", name: "firstname" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Age", name: "age" },
                    { label: "City", name: "city" },
                    { label: "Join Date", name: "dob" },
                    { label: "Gender", name: "gender" },
                    { label: "Address", name: "address" },
                    { label: "Phone", name: "phone" },
                    { label: "Email", name: "email" },
                    { label: "Description", name: "description" },
                  ].map((field) => (
                    <Grid item xs={12} sm={field.name === "description" || field.name === "address" ? 12 : 6} key={field.name}>
                      <TextField
                        label={field.label}
                        value={formData[field.name]}
                        name={field.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        disabled={!isEditable}
                        fullWidth
                        multiline={field.name === "description"}
                        rows={field.name === "description" ? 4 : 1}
                        maxRows={field.name === "description" ? 6 : undefined}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.dark,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.dark,
                            },
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button
                  onClick={handleEditToggle}
                  variant="contained"
                  color={isEditable ? "secondary" : "primary"}
                  startIcon={<FaEdit />}
                  sx={{
                    textTransform: "none",
                    backgroundColor: isEditable ? theme.palette.secondary.main : theme.palette.primary.main,
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: isEditable
                        ? theme.palette.secondary.dark
                        : theme.palette.primary.dark,
                    },
                  }}
                >
                  {isEditable ? "Save Changes" : "Edit Order"}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Back Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            onClick={onBack}
            variant="contained"
            color="primary"
            startIcon={<KeyboardBackspaceIcon />}
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
        </Box>
      </Box>
    </MuiSlide>
  );
};

export default UsersProfile;
