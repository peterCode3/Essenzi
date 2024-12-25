// pages/api/sendEmail.js
import emailjs from "emailjs-com";

export default function handler(req, res) {
  const { name, email, message } = req.body;

  emailjs
    .send(
      "service_id", // Replace with your EmailJS service ID
      "template_id", // Replace with your EmailJS template ID
      { name, email, message },
      "user_id" // Replace with your EmailJS user ID
    )
    .then(
      (result) => {
        res.status(200).json({ message: "Email sent successfully" });
      },
      (error) => {
        res.status(500).json({ message: "Error sending email", error });
      }
    );
}
