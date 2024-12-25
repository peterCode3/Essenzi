import React, { useState, useEffect } from "react";
import { Slide as MuiSlide } from "@mui/material";
import { Button, Box, Grid, Paper, Typography, Divider, TextField, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import useTheme
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditIcon from "@mui/icons-material/Edit";
import themes from "../ThemeStyle/theme";
import { useThemeContext } from "../Context/ThemeContext";

const InvoiceView = ({ invoice, onBack }) => {
  const theme = useTheme(); // Access the theme object
  const [slideIn, setSlideIn] = useState(false);
  const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode
  const [formData, setFormData] = useState(invoice); // Initialize form data with the invoice
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

  return (
    <MuiSlide direction="left" in={slideIn} mountOnEnter unmountOnExit>
      <Box sx={{ padding: 3, height: "100vh"}}>
        <Grid container spacing={4}>
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
                Invoice Information
              </Typography>
              <Divider sx={{ my: 2 }} />

              {/* Editable Section */}
              <Box sx={{ maxHeight: "100vh", overflowY: "auto" }}>
                <Grid container spacing={2}>
                  {[ 
                    { label: "Customer", name: "customer", value: formData.customer },
                    { label: "Product Name", name: "productName", value: formData.productName },
                    { label: "Product Brand", name: "brand", value: formData.brand },
                    { label: "Booking Date", name: "bookingDate", value: formData.bookingDate },
                    { label: "Delivery Date", name: "deliveryDate", value: formData.deliveryDate },
                    { label: "Total", name: "total", value: formData.total },
                    { label: "Status", name: "status", value: formData.status },
                  ].map((field) => (
                    <Grid item xs={12} sm={12} key={field.name}>
                      <TextField
                        label={field.label}
                        value={field.value}
                        name={field.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={!isEditable} // Disable fields if not in edit mode
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

                  {/* Address Fields */}
                  <Grid item xs={12} sm={12}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                      Shipping Address
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                  </Grid>

                  {[ 
                    { label: "Street", name: "street", value: formData.address.street },
                    { label: "City", name: "city", value: formData.address.city },
                    { label: "State", name: "state", value: formData.address.state },
                    { label: "Zip Code", name: "zipCode", value: formData.address.zipCode },
                    { label: "Country", name: "country", value: formData.address.country },
                  ].map((field) => (
                    <Grid item xs={12} sm={6} key={field.name}>
                      <TextField
                        label={field.label}
                        value={field.value}
                        name={field.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={!isEditable} // Disable fields if not in edit mode
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

              {/* Edit Button */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  onClick={handleEditToggle}
                  variant="contained"
                  color={isEditable ? "secondary" : "primary"}
                  startIcon={<EditIcon />}
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
                  {isEditable ? "Save Changes" : "Edit Invoice"}
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
            Back to Invoices
          </Button>
        </Box>
      </Box>
    </MuiSlide>
  );
};

export default InvoiceView;
