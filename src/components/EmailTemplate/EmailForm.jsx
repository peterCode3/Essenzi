// components/EmailForm.js
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import UserTable from "../../pages/UserTable/UserTable";

const EmailForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_id", // EmailJS service ID
				"template_id", // EmailJS template ID
				e.target,
				"user_id", // EmailJS user ID
			)
			.then(
				(result) => {
					alert("Email sent successfully!");
				},
				(error) => {
					alert("Error sending email: " + error.text);
				},
			);
	};

	return (
		<Box sx={{ marginTop: 4 }} className=" flex-col items-end">
			<UserTable type={"email"} />
			<Button className="ml-0" variant="contained" color="primary" onClick={sendEmail}>
				Send Email
			</Button>
		</Box>
	);
};

export default EmailForm;
