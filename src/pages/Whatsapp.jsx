import React from "react";
import EmailForm from "../../components/EmailTemplate/EmailForm";
import OtherTemplateSelector from "../../components/EmailTemplate/OtherTemplateSelector";

const whatsapp = () => {
	return (
		<div>
			<OtherTemplateSelector type={"whatsapp"} />
			<EmailForm />
		</div>
	);
};

export default whatsapp;
