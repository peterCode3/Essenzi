import React from "react";
import EmailTemplateSelector from "../../components/EmailTemplate/EmailTemplateSelector";
import EmailForm from "../../components/EmailTemplate/EmailForm";

const whatsapp = () => {
	return (
		<div>
			<EmailTemplateSelector type={"sms"} />
			<EmailForm />
		</div>
	);
};

export default whatsapp;
