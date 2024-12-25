// components/EmailTemplateSelector.js
import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import DynamicEmailTemplate from "./DynamicEmailTemplate";
import theme from "../ThemeStyle/theme";
import { useThemeContext } from "../Context/ThemeContext";
const EmailTemplateSelector = () => {
	const [template, setTemplate] = useState("auto"); // Default to 'auto' (dynamic selection based on time)
	const { isDarkMode } = useThemeContext();
	const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

	const handleTemplateChange = (event) => {
		setTemplate(event.target.value);
	};

	useEffect(() => {
		// Automatically set template based on time if 'auto' is selected
		if (template === "auto") {
			const currentHour = new Date().getHours();
			if (currentHour >= 5 && currentHour < 12) {
				setTemplate("morning");
			} else if (currentHour >= 12 && currentHour < 18) {
				setTemplate("afternoon");
			} else {
				setTemplate("evening");
			}
		}
	}, [template]);

	return (
		<Box sx={{ padding: 4 }}>
			<Typography
				variant="h4"
				gutterBottom
				sx={{
					fontWeight: "bold",
					marginBottom: 4,
					color: isDarkMode ? "#fff" : "#1F2A40", // Dynamic title color
				}}>
				Select an Email Template
			</Typography>
			<FormControl fullWidth sx={{ marginBottom: 2 }}>
				<InputLabel id="template-select-label">Select Template</InputLabel>
				<Select
					labelId="template-select-label"
					value={template}
					onChange={handleTemplateChange}
					label="Select Template">
					<MenuItem value="auto">Auto (Based on Time)</MenuItem>
					<MenuItem value="morning">Morning Template</MenuItem>
					<MenuItem value="afternoon">Afternoon Template</MenuItem>
					<MenuItem value="evening">Evening Template</MenuItem>
					<MenuItem value="product">Product Template</MenuItem>
				</Select>
			</FormControl>
			<DynamicEmailTemplate template={template} />
		</Box>
	);
};

export default EmailTemplateSelector;
