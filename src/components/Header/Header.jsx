import React from "react";
import { MdMailOutline, MdOutlineNotificationsNone } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useThemeContext } from "../Context/ThemeContext"; // Assuming you have a context for theme
import { Box} from '@mui/material';

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

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
        <MdOutlineNotificationsNone size={22} style={{ color: isDarkMode ? '#fff' : '#1F2A40' }} />
        <IoSettingsOutline size={21} style={{ color: isDarkMode ? '#fff' : '#1F2A40' }} />
        <LuUserRound size={19} style={{ color: isDarkMode ? '#fff' : '#1F2A40' }} />
      </div>
    </div>
    </Box>
  );
};

export default Header;
