import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FaUserCog } from "react-icons/fa";

const UserRolesPage = () => {
  const theme = useTheme();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false); // For controlling modal visibility

  useEffect(() => {
    // Simulating an API call to fetch users
    setTimeout(() => {
      const mockUsers = [
        { id: 1, firstname: "John", lastName: "Doe", email: "john@example.com", role: "user" },
        { id: 2, firstname: "Jane", lastName: "Smith", email: "jane@example.com", role: "admin" },
        { id: 3, firstname: "Sam", lastName: "Wilson", email: "sam@example.com", role: "editor" },
      ];
      setUsers(mockUsers);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSaveRole = () => {
    if (selectedUser && selectedRole) {
      // Simulating API request to update the user role
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser.id ? { ...user, role: selectedRole } : user
        )
      );
      setError("");
      setSelectedRole("");
      setSelectedUser(null);
      setOpenModal(false); // Close the modal after saving the role
    } else {
      setError("Please select a user and role.");
    }
  };

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
    setSelectedRole("");
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: theme.palette.background.default }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
              Manage User Roles
            </Typography>

            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                  {/* Users List */}
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Select User and Update Role
                    </Typography>
                    <Grid container spacing={2}>
                      {users.map((user) => (
                        <Grid item xs={12} sm={6} key={user.id}>
                          <Paper elevation={2} sx={{ padding: 2 }}>
                            <Typography variant="body1">
                              {user.firstname} {user.lastName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {user.email}
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ mt: 2 }}
                              onClick={() => handleOpenModal(user)}
                            >
                              Assign Role
                            </Button>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Modal for Role Assignment */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Assign Role to {selectedUser?.firstname} {selectedUser?.lastName}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "400px" }} className="p-4">
          <FormControl fullWidth variant="outlined" error={!!error}>
            <InputLabel>Role</InputLabel>
            <Select
              value={selectedRole}
              onChange={handleRoleChange}
              label="Role"
              className="w-full"
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="editor">Editor</MenuItem>
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant="outlined" color="secondary" className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button
            onClick={handleSaveRole}
            variant="contained"
            color="primary"
            className="w-full sm:w-auto mt-2 sm:mt-0"
            startIcon={<FaUserCog />}
          >
            Save Role
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserRolesPage;
