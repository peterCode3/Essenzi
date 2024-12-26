// pages/index.js
import { Container, Typography } from "@mui/material";
import EmailTemplateSelector from "../../components/EmailTemplate/EmailTemplateSelector";
import EmailForm from "../../components/EmailTemplate/EmailForm";
import theme from "../../components/ThemeStyle/theme";
import { useThemeContext } from "../../components/Context/ThemeContext";
import DynamicEmailTemplate from "../../components/EmailTemplate/DynamicEmailTemplate";
export default function Email() {
  const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

  return (
    <div>
      <Typography variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          color: isDarkMode ? "#fff" : "#1F2A40", // Dynamic title color
        }}  
        gutterBottom>
        Dynamic Email Template Example
      </Typography>
      <EmailTemplateSelector/>
      {/* <DynamicEmailTemplate type={"email"}/> */}
      <EmailForm />
    </div>
  );
}
