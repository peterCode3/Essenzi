import { Box, Grid, Typography, Paper, Select, MenuItem, FormControl, Checkbox, InputLabel, Button, TextField, FormControlLabel, colors } from '@mui/material';
import React from 'react'
import TopProductTable from '../../components/Ecommerce/Products/TopProductTable'
import theme from '../../components/ThemeStyle/theme';
import { useThemeContext } from '../../components/Context/ThemeContext';

function InventoryProducts() {
    const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

    return (
        <Box>
            <Grid container spacing={3} sx={{ marginTop: 3 }}>

                <Grid item xs={12} md={12}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            marginBottom: 4,
                            color: isDarkMode ? "#fff" : "#1F2A40", // Dynamic title color
                        }}

                    >
                        Inventory Products
                    </Typography>
                    <TopProductTable filtration={true} actions={true} />

                </Grid>
            </Grid>
        </Box>
    )
}

export default InventoryProducts