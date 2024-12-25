// components/DynamicEmailTemplate.js
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const DynamicEmailTemplate = ({ template }) => {
	const [htmlContent, setHtmlContent] = useState("");

	useEffect(() => {
		fetch("/simple.html")
			.then((response) => response.text())
			.then((html) => {
				setHtmlContent(html);
			})
			.catch((error) => console.error("Error loading HTML:", error));
	}, []);

	const productTemplate = (
		<div dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ maxWidth: "100%", overflow: "hidden" }} />
	);

	// const productTemplate = (
	// 	<iframe
	// 		src="/simple.html"
	// 		title="Simple HTML"
	// 		style={{ width: "100%", height: "500px", border: "none" }}
	// 	/>
	// );

	const morningTemplate = (
		<Box sx={{ padding: 2, backgroundColor: "#FFFAF0" }}>
			<Typography variant="h5" color="primary">
				Good Morning! 🌅
			</Typography>
			<Typography variant="body1" sx={{ marginTop: 1 }}>
				Start your day with a positive mindset! We are excited to help you reach your goals.
			</Typography>
			<Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
				Get Started
			</Button>
		</Box>
	);

	const afternoonTemplate = (
		<Box sx={{ padding: 2, backgroundColor: "#FFFAE1" }}>
			<Typography variant="h5" color="secondary">
				Good Afternoon! ☀️
			</Typography>
			<Typography variant="body1" sx={{ marginTop: 1 }}>
				Keep up the good work! We are here to assist you in the next step of your journey.
			</Typography>
			<Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>
				Continue Here
			</Button>
		</Box>
	);

	const eveningTemplate = (
		<Box sx={{ padding: 2, backgroundColor: "#F1F1F1" }}>
			<Typography variant="h5" color="error">
				Good Evening! 🌙
			</Typography>
			<Typography variant="body1" sx={{ marginTop: 1 }}>
				It's time to wind down. Let's reflect on your progress and set goals for tomorrow.
			</Typography>
			<Button variant="contained" color="error" sx={{ marginTop: 2 }}>
				View Your Progress
			</Button>
		</Box>
	);

	const defaultTemplate = <Typography>Loading...</Typography>;

	const renderTemplate = () => {
		switch (template) {
			case "morning":
				return morningTemplate;
			case "afternoon":
				return afternoonTemplate;
			case "evening":
				return eveningTemplate;
			case "product":
				return productTemplate;
			default:
				return defaultTemplate;
		}
	};

	return <Box sx={{ maxWidth: 600, margin: "0 auto", marginTop: 2 }}>{renderTemplate()}</Box>;
};

export default DynamicEmailTemplate;
