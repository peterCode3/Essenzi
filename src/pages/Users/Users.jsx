import React, { useState, useEffect } from "react";
import UsersProfile from "../../components/UsersProfile/UsersProfile";
import DownloadIcon from "@mui/icons-material/Download";
import * as XLSX from "xlsx"; // Import xlsx for exporting data to Excel
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
  Pagination, // Import Pagination component from MUI
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import users from "../../data/AllUsers"; // Importing users data from external file
import themes from "../../components/ThemeStyle/theme";
import { useThemeContext } from "../../components/Context/ThemeContext";

const Users = ({ type, showActions = true }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterRole, setFilterRole] = useState("");
  const [filterName, setFilterName] = useState("");
  const [slideIn, setSlideIn] = useState(false); // State for triggering slide effect
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;
  const [page, setPage] = useState(1); // State for pagination
  const [rowsPerPage] = useState(10); // State for rows per page

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

  const handlePageChange = (event, newPage) => {
    setPage(newPage); // Handle the change in pagination
  };

  // Filter users based on the search query and role
  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesName =
        (user.firstname && user.firstname.toLowerCase().includes(filterName.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(filterName.toLowerCase()));
      const matchesRole = filterRole ? (user.role && user.role.toLowerCase().includes(filterRole.toLowerCase())) : true;
  
      return matchesName && matchesRole;
    });
    setFilteredUsers(filtered);
  }, [filterName, filterRole]); // Re-run the filtering when any filter changes

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  ); // Paginate the filtered users

  const downloadTable = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredUsers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users_data.xlsx");
  };

  // Helper function to display the online/offline status
  const renderStatusDot = (status) => {
    const color = status === "online" ? "green" : status === "offline" ? "gray" : "red";
    return <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: color }} />;
  };

  return (
    <Box sx={{ minHeight: "100vh", padding: "20px" }}>
      <div className="profile-container p-4 bg-grey-800 rounded-lg">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
          All Users
        </Typography>

        {/* Filters Section */}
        <Box display="flex" justifyContent="space-between" marginBottom={2} alignItems="center">
          {/* Name Filter */}
          <TextField
            label="Search by Name"
            variant="outlined"
            size="small"
            value={filterName}
            onChange={handleNameChange}
            sx={{ width: "38%" }}
          />
          {/* Role Filter */}
          <FormControl size="small" sx={{ width: "38%" }}>
            <InputLabel>Role</InputLabel>
            <Select value={filterRole} onChange={handleRoleChange} label="Role">
              <MenuItem value="">All Roles</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="super admin">Super Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>

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
							}}
							onClick={downloadTable}
						>

							Download User's Table
						</Button>
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
                  <TableCell sx={{ fontWeight: "bold", backgroundColor }}>Avatar</TableCell>
                  <TableCell sx={{ fontWeight: "bold", backgroundColor }}>User Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold", backgroundColor }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: "bold", backgroundColor }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: "bold", backgroundColor }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedUsers.map((user) => (
                  <TableRow key={user.id} sx={{ borderBottom: "1px solid", borderColor: theme.palette.divider }}>
                    <TableCell>
                      <img src={user.image} alt={user.name} style={{ width: 40, height: 40, borderRadius: "50%" }} />
                    </TableCell>
                    <TableCell>{user.firstname} {user.lastName}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{renderStatusDot(user.status)}</TableCell>
                    <TableCell>
                      {showActions && (
                        <>
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
													color="error"
													size="small"
													onClick={() => handleDelete(user.id)}
													sx={{ textTransform: "none" }}>
													<DeleteIcon /> Delete
												</Button>
                        </>
                      )}
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

        {/* Pagination Section */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', pb: 2 }}>
          <Pagination
            count={Math.ceil(filteredUsers.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      </div>
    </Box>
  );
};

export default Users;
