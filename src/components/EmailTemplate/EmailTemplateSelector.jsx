import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem, Tabs, Tab } from "@mui/material";
import { useState, useEffect } from "react";
import DynamicEmailTemplate from "./DynamicEmailTemplate";
import theme from "../ThemeStyle/theme";
import { useThemeContext } from "../Context/ThemeContext";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div role="tabpanel" hidden={value !== index} {...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

const EmailTemplateSelector = ({ type }) => {
	const [tabValue, setTabValue] = useState(0);
	const { isDarkMode } = useThemeContext();
	const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

	const handleTabChange = (event, newValue) => {
		setTabValue(newValue);
	};

	return (
		<Box sx={{ padding: 4 }}>
			<Typography
				variant="h4"
				gutterBottom
				sx={{
					fontWeight: "bold",
					marginBottom: 4,
					color: isDarkMode ? "#fff" : "#1F2A40",
				}}>
				{type === "email" ? "Email Template" : type === "sms" ? "SMS Template" : "WhatsApp Template"}
			</Typography>

			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
					<Tab label={type} />
				</Tabs>
			</Box>
			<TabPanel value={tabValue} index={0}>
				<DynamicEmailTemplate template={type} />
			</TabPanel>
		</Box>
	);
};

export default EmailTemplateSelector;
