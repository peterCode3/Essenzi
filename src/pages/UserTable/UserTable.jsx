import React, { useState, useEffect } from "react";
import UsersProfile from "../../components/UsersProfile/UsersProfile";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
	Paper,
	Typography,
	Box,
	useTheme,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Slide, // Import Slide component from MUI
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import users from "../../data/users"; // Importing users data from external file
import themes from "../../components/ThemeStyle/theme";
import { useThemeContext } from "../../components/Context/ThemeContext";

const UserTable = ({ type }) => {
	const [filteredUsers, setFilteredUsers] = useState(users);
	const [selectedUser, setSelectedUser] = useState(null);
	const [filterRole, setFilterRole] = useState("");
	const [filterName, setFilterName] = useState("");
	const [filterLocation, setFilterLocation] = useState(""); // New filter for location
	const [filterPurchaseOrders, setFilterPurchaseOrders] = useState(""); // New filter for purchase orders
	const [slideIn, setSlideIn] = useState(false); // State for triggering slide effect
	const theme = useTheme();
	const { isDarkMode } = useThemeContext();
	const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;
	const [filterCustomerBy, setFilterCustomerBy] = useState("");

	const handleActionClick = (user) => {
		setSelectedUser(user);
		setSlideIn(true); // Trigger the slide-in effect
	};

	const handleBack = () => {
		setSlideIn(false); // Trigger slide-out effect
		setTimeout(() => setSelectedUser(null), 300); // Wait for the slide-out to complete before resetting user
	};

	const handleDelete = (userId) => {
		setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
	};

	const handleRoleChange = (event) => {
		setFilterRole(event.target.value);
	};

	const handleNameChange = (event) => {
		setFilterName(event.target.value);
	};

	const handleLocationChange = (event) => {
		setFilterLocation(event.target.value);
	};

	const handlePurchaseOrdersChange = (event) => {
		setFilterPurchaseOrders(event.target.value);
	};

	const handleCustomerByChange = (event) => {
		setFilterCustomerBy(event.target.value); // Handle the change in "customerByfrom" filter
	};

	// Filter users based on the search query and role
	useEffect(() => {
		const filtered = users.filter((user) => {
			const matchesName =
				user.firstname.toLowerCase().includes(filterName.toLowerCase()) ||
				user.lastName.toLowerCase().includes(filterName.toLowerCase());
			const matchesLocation = filterLocation ? user.address.toLowerCase().includes(filterLocation.toLowerCase()) : true;
			const matchesPurchaseOrders = filterPurchaseOrders ? user.purchaseOrders >= parseInt(filterPurchaseOrders) : true;
			const matchesCustomerBy = filterCustomerBy
				? user.customerByfrom.toLowerCase().includes(filterCustomerBy.toLowerCase())
				: true;

			return matchesName && matchesLocation && matchesPurchaseOrders && matchesCustomerBy;
		});
		setFilteredUsers(filtered);
	}, [filterName, filterLocation, filterPurchaseOrders, filterCustomerBy]); // Re-run the filtering when any filter changes

	return (
		<Box sx={{ minHeight: "100vh", padding: "20px" }}>
			<div className="profile-container p-4 bg-grey-800 rounded-lg">
				<Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
					All Customers
				</Typography>
				<div className="flex items-center justify-between mb-3 mt-[-17px]">
					{!selectedUser ? (
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: "bold" }}
							style={{ color: theme.palette.primary.main }}>
							Welcome to Customer's Data
						</Typography>
					) : (
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: "bold" }}
							style={{ color: theme.palette.primary.main }}>
							Viewing Profile of {selectedUser.firstname} {selectedUser.lastName}
						</Typography>
					)}
					{!selectedUser && (
						<Button
							startIcon={<DownloadIcon />}
							sx={{
								backgroundColor: theme.palette.primary.main,
								color: "#FFFFFF",
								paddingLeft: 3,
								paddingRight: 3,
								paddingTop: 1.5,
								paddingBottom: 1.5,
								textTransform: "none",
								"&:hover": {
									backgroundColor: theme.palette.primary.dark,
								},
								"&:active": {
									backgroundColor: theme.palette.primary.light,
								},
							}}>
							Download User's Table
						</Button>
					)}
				</div>

				{/* Filters Section */}
				<Box display="flex" justifyContent="space-between" marginBottom={2}>
					{/* Name Filter */}
					<TextField
						label="Search by Name"
						variant="outlined"
						size="small"
						value={filterName}
						onChange={handleNameChange}
						sx={{ width: "24%" }}
					/>
					{/* Location Filter */}
					<TextField
						label="Search by Location"
						variant="outlined"
						size="small"
						value={filterLocation}
						onChange={handleLocationChange}
						sx={{ width: "24%" }}
					/>
					{/* Purchase Orders Filter */}
					<TextField
						label="Search by Purchase Orders"
						variant="outlined"
						size="small"
						type="number"
						value={filterPurchaseOrders}
						onChange={handlePurchaseOrdersChange}
						sx={{ width: "24%" }}
					/>
					{/* Customer By From Filter */}
					<FormControl size="small" sx={{ width: "24%" }}>
						<InputLabel>Customer By</InputLabel>
						<Select value={filterCustomerBy} onChange={handleCustomerByChange} label="Customer By">
							<MenuItem value="">All Customers</MenuItem>
							<MenuItem value="POS">POS</MenuItem>
							<MenuItem value="Website">Website</MenuItem>
						</Select>
					</FormControl>
				</Box>

				{/* User Table Section */}
				<Box sx={{ marginTop: "30px", display: "flex", flexDirection: "row" }}>
					<TableContainer
						component={Paper}
						sx={{
							maxWidth: "100%",
							borderRadius: 2,
							backgroundColor,
							boxShadow: "none",
							marginBottom: "15px",
							flex: 1,
							border: "1px solid",
							borderColor: theme.palette.divider,
						}}>
						<Table aria-label="user table">
							<TableHead>
								<TableRow>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										{type === "email" ? "Email Sent" : "Avatar"}
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										User Name
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Customer By
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Address
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Purchase Orders
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Join Date
									</TableCell>

									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Actions
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filteredUsers.map((user) => (
									<TableRow
										key={user.id}
										sx={{
											borderBottom: "1px solid",
											borderColor: theme.palette.divider,
										}}>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{type === "email" ? (
												<input type="checkbox" style={{ marginLeft: "10px" }} />
											) : (
												<img src={user.image} alt={user.name} style={{ width: 40, height: 40, borderRadius: "50%" }} />
											)}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{user.firstname} {user.lastName}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{user.customerByfrom}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{user.address}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{user.purchaseOrders}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{user.dob}</TableCell>

										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={() => handleActionClick(user)}
												sx={{ textTransform: "none", marginRight: 1 }}>
												<AccountCircleIcon /> View Account
											</Button>
											<Button
												variant="contained"
												color="warning"
												size="small"
												onClick={() => handleActionClick(user)}
												sx={{ textTransform: "none", marginRight: 1 }}>
												<EditIcon /> Edit
											</Button>
											<Button
												variant="contained"
												color="error"
												size="small"
												onClick={() => handleDelete(user.id)}
												sx={{ textTransform: "none" }}>
												<DeleteIcon /> Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>

					{/* Slide in User Profile from the Right */}
					<Slide direction="left" in={slideIn} mountOnEnter unmountOnExit>
						<Box
							sx={{
								position: "absolute",
								top: 0,
								right: 0,
								width: "40%",
								height: "100%",
								backgroundColor,
								boxShadow: "4px 0 15px rgba(0, 0, 0, 0.1)",
								padding: "20px",
								zIndex: 9999,
							}}>
							<Button
								onClick={handleBack}
								sx={{
									position: "absolute",
									top: 10,
									left: 10,
									backgroundColor: theme.palette.error.main,
									color: "#FFFFFF",
									"&:hover": {
										backgroundColor: theme.palette.error.dark,
									},
								}}>
								Back
							</Button>
							<UsersProfile user={selectedUser} onBack={handleBack} />
						</Box>
					</Slide>
				</Box>
			</div>
		</Box>
	);
};

export default UserTable;
