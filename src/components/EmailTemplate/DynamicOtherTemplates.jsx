// components/DynamicEmailTemplate.js
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { TextField, InputLabel } from "@mui/material";

const DynamicOtherTemplates = ({ template }) => {
	const [previewImage, setPreviewImage] = useState("");


	const smsTemplate = (
		<Box sx={{ padding: 2, backgroundColor: "#E6F7FF" }}>
			<Typography variant="h5" color="primary">
				SMS Template 📱
			</Typography>
			<InputLabel htmlFor="sms-message" sx={{ marginTop: 2 }}>
				Message
			</InputLabel>
			<TextField
				id="sms-message"
				variant="outlined"
				placeholder="Enter your SMS message here"
				multiline
				rows={4}
				fullWidth
			/>
		</Box>
	);

	const whatsAppTemplate = (
		<Box sx={{ padding: 2, backgroundColor: "#E6F7FF" }}>
			<Typography variant="h5" color="primary">
				WhatsApp Template 📱
			</Typography>

			{/* Image Upload Section */}
			<Box sx={{ marginTop: 2, marginBottom: 2 }}>
				<input
					accept="image/*"
					style={{ display: "none" }}
					id="image-upload"
					type="file"
					onChange={(e) => {
						const file = e.target.files[0];
						if (file) {
							const reader = new FileReader();
							reader.onload = (e) => {
								setPreviewImage(e.target.result);
							};
							reader.readAsDataURL(file);
						}
					}}
				/>

				
				{previewImage && (
					<img src={previewImage} alt="Uploaded" style={{ maxWidth: "100%", height: "auto" }} />
				)}
				<label htmlFor="image-upload">
					<Button variant="contained" component="span" sx={{ marginBottom: 2 }}>
						Upload Image
					</Button>
				</label>
			</Box>
		</Box>
	);

	const defaultTemplate = <Typography>No template selected. Please choose a template from the dropdown.</Typography>;

	const renderTemplate = () => {
		switch (template) {
			case "sms":
				return smsTemplate;
			case "whatsapp":
				return whatsAppTemplate;
			default:
				return defaultTemplate;
		}
	};

	return <Box sx={{ maxWidth: 600, margin: "0 auto", marginTop: 2 }}>{renderTemplate()}</Box>;
};

export default DynamicOtherTemplates;
