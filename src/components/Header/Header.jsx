import React, { useState } from "react";
import { MdMailOutline, MdOutlineNotificationsNone } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useThemeContext } from "../Context/ThemeContext"; // Assuming you have a context for theme
import { Box, Menu, MenuItem, ListItemIcon, Typography, Divider } from '@mui/material';
import { IoIosMail, IoIosAlert, IoIosInformationCircle } from 'react-icons/io'; // Notification Icons
import { Link } from "react-router-dom";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [anchorElNotification, setAnchorElNotification] = useState(null); // State for notification menu
  const [anchorElUser, setAnchorElUser] = useState(null); // State for user menu

  // Example profile picture URL, you can replace it with dynamic data
  const profilePic = "https://via.placeholder.com/40"; // Example placeholder image

  // Handle opening the notification menu
  const handleNotificationClick = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  // Handle opening the user menu
  const handleUserClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Handle closing the notification menu
  const handleCloseNotificationMenu = () => {
    setAnchorElNotification(null);
  };

  // Handle closing the user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <div className="w-full flex justify-between items-center mb-7 py-2">
        {/* Search Field */}
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: isDarkMode ? '#fff' : '#1F2A40' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            maxWidth: 300,
            '& .MuiOutlinedInput-root': {
              height: '35px',
              padding: '0 8px',
              borderRadius: '6px',
              '& input': {
                padding: '0',
                lineHeight: '1.5',
              },
              '& fieldset': {
                borderWidth: '1px',
                borderColor: isDarkMode ? '#fff' : '#1F2A40',
              },
              '&:hover fieldset': {
                borderColor: isDarkMode ? '#fff' : '#1F2A40',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDarkMode ? '#fff' : '#1F2A40',
              },
            },
          }}
        />

        {/* Theme Switch & Icons */}
        <div className="flex gap-4 items-center">
          <button onClick={toggleTheme}>
            {isDarkMode ? (
              <FaRegMoon size={18} style={{ color: "#fff" }} />
            ) : (
              <FaRegSun size={18} style={{ color: "#1F2A40" }} />
            )}
          </button>
          {/* Notification Icon */}
          <button onClick={handleNotificationClick}>
            <MdOutlineNotificationsNone size={22} style={{ color: isDarkMode ? '#fff' : '#1F2A40' }} />
          </button>
          <Menu
            anchorEl={anchorElNotification}
            open={Boolean(anchorElNotification)}
            onClose={handleCloseNotificationMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <IoIosMail size={20} style={{ color: '#1F2A40' }} />
              </ListItemIcon>
              <Typography variant="body2">You have a new message</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IoIosAlert size={20} style={{ color: '#FF5733' }} />
              </ListItemIcon>
              <Typography variant="body2">Alert: Check your account settings</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <IoIosInformationCircle size={20} style={{ color: '#28a745' }} />
              </ListItemIcon>
              <Typography variant="body2">System update available</Typography>
            </MenuItem>
          </Menu>

          {/* User Icon */}
          <button onClick={handleUserClick}>
            <LuUserRound size={19} style={{ color: isDarkMode ? '#fff' : '#1F2A40' }} />
          </button>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    marginRight: 10
                  }}
                />
              </ListItemIcon>
              <Typography variant="body2">Profile</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IoIosInformationCircle size={20} style={{ color: '#1F2A40' }} />
              </ListItemIcon>
            <Link to='/my-account'>

              <Typography variant="body2">My Account</Typography>
              </Link>

            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IoIosMail size={20} style={{ color: '#1F2A40' }} />
              </ListItemIcon>
            <Typography variant="body2">Messages</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                  <IoIosAlert size={20} style={{ color: '#FF5733' }} />
                </ListItemIcon>
                <Link to='/settings'>
                <Typography variant="body2">Settings</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IoIosAlert size={20} style={{ color: '#FF5733' }} />
              </ListItemIcon>
              <Typography variant="body2">Logout</Typography>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Box>
  );
};

export default Header;
