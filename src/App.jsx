import React, { createContext, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import UserTable from "./pages/UserTable/UserTable";
import Clients from "./pages/Clients/Clients";
import User from "./pages/User/User";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import WhatsApp from "./pages/Email/Whatsapp";
import Sms from "./pages/Email/Sms";
import UserList from "./components/Testing/UserList";
import { CustomThemeProvider } from "./components/Context/ThemeContext";
import theme from "./components/ThemeStyle/theme";
import OrderTable from "./components/Ecommerce/Order/OrderTable";
import { ThemeProvider } from "@mui/material/styles";
import Email from "./pages/Email/Email";
import InvoiceTable from "./components/Invoices/InvoiceTable";
// Define Context for global state (optional, can be extended later)
const MyContext = createContext();
import { useThemeContext } from "./components/Context/ThemeContext";
import CustomerFeedback from "./pages/CustomerFeedback/CustomerFeedback";
import SettingsPage from "./pages/Settings/SettingsPage";
import MyAccount from "./pages/User/MyAccount";
import InventoryProducts from "./pages/Products/InventoryProducts";
import AddUser from "./pages/Users/AddUsers";
import UserRolesPage from "./pages/Users/UserRolesPage";

const LayoutWithSidebar = () => {
	// Get the current theme mode from context
	const { themeMode } = useContext(MyContext);
	const { isDarkMode, toggleTheme } = useThemeContext();

	const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

	return (
		<section className="main relative flex" style={{ backgroundColor }}>
			<Sidebar />
			<div className="contentRight w-full mx-3 px-2 py-2" style={{ backgroundColor }}>
				<Header />
				<Outlet />
			</div>
		</section>
	);
};

const App = () => {
	const [themeMode, setThemeMode] = useState("light");

	const contextValues = {
		themeMode,
		setThemeMode,
	};

	return (
		<BrowserRouter>
			<CustomThemeProvider theme={theme}>
				<MyContext.Provider value={contextValues}>
					<Routes>
						{/* Layout with Sidebar and Header */}
						<Route path="/" element={<LayoutWithSidebar />}>
							<Route index element={<Dashboard />} />
							<Route path="client" element={<Clients />} />

							<Route path="user-list" element={<Users />} />
							<Route path="add-user" element={<AddUser />} />
							<Route path="user-roles" element={<UserRolesPage />} />
							<Route path="userTable" element={<UserTable />} />
							<Route path="user" element={<User />} />
							<Route path="order-table" element={<OrderTable />} />
							<Route path="email-template/email" element={<Email />} />
							<Route path="templete/whatsapp" element={<WhatsApp />} />
							<Route path="templete/sms" element={<Sms />} />
							<Route path="customer-feedback" element={<CustomerFeedback />} />
							<Route path="invoice-table" element={<InvoiceTable />} />
							<Route path="/settings" element={<SettingsPage />} />
							<Route path="/my-account" element={<MyAccount />} />
							<Route path="/inventory-products" element={<InventoryProducts />} />
							
						</Route>
						{/* Layout without Sidebar and Header */}
						<Route path="/login" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/testing" element={<UserList />} />
					</Routes>
				</MyContext.Provider>
			</CustomThemeProvider>
		</BrowserRouter>
	);
};

export default App;
