import React from "react";
import EmailTemplateSelector from "../../components/EmailTemplate/EmailTemplateSelector";
import EmailForm from "../../components/EmailTemplate/EmailForm";

const whatsapp = () => {
	return (
		<div>
			<EmailTemplateSelector type={"whatsapp"} />
			<EmailForm />
		</div>
	);
};

export default whatsapp;
