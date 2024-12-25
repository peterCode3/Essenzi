// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B49AC", // Your primary color
    },
    subHeading: {
      main: "#939393",  
    },
    mbtext: {
      marginBottom: "4px",  
    },
    secondary: {
      main: "#28a745", // Your secondary color
    },
    error: {
      main: "#dc3545", // Error color
    },
    info: {
      main: "#1877F2", // Info color
    },
    warning: {
      main: "#ffc107", // Warning color
    },
    background: {
      default: "#141B2D",
      paper: "#ffffff", 
    },
    text: {
      primary: "#333", // Primary text color
      secondary: "#777", // Secondary text color
    },
  },
  typography: {
    h4: {
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#9A9A9A",
    },
    h6: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      color: "#9A9A9A",
    },
    body1: {
      fontSize: "1rem",
      color: "#333", // Primary body text color
    },
    body2: {
      fontSize: "0.875rem",
      color: "#777", // Secondary body text color
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#4B49AC", // Subtitle text color (optional)
    },
  },
  components: {
    // MUI Paper component customization
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // White background for Paper components
          padding: "16px", // Padding for Paper components (like boxes)
          borderRadius: "8px", // Rounded corners for Paper components
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
        },
      },
    },
    // MUI Grid customization
    MuiGrid: {
      styleOverrides: {
        root: {
          // Apply global padding and margin to all Grid components
          padding: "0.5rem", 
        },
      },
    },
    // MUI Box customization
    MuiBox: {
      styleOverrides: {
        root: {
          // General Box component style
          padding: "16px",
          backgroundColor: "#ffffff", // White background for Boxes
          borderRadius: "8px", // Rounded corners
        },
      },
    },
    // MUI Button customization
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners for buttons
          textTransform: "none", // Remove uppercase text transformation
        },
        contained: {
          backgroundColor: "#4B49AC", // Primary color for buttons
          color: "#fff", // White text on buttons
          "&:hover": {
            backgroundColor: "#7978E9", // Darken on hover
          },
          "&:active": {
            backgroundColor: "#7DA0FA", // Lighter shade on active
          },
        },
        outlined: {
          borderColor: "#4B49AC", // Border color for outlined buttons
          color: "#4B49AC", // Text color for outlined buttons
          "&:hover": {
            borderColor: "#7978E9", // Darker border on hover
            color: "#7978E9", // Darker text color on hover
          },
        },
      },
    },
  },
});

export default theme;
