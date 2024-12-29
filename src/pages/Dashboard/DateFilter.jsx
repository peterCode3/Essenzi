import React, { useState, useEffect } from "react";
import {
  Box,
  MenuItem,
  TextField,
  Typography,
  Popover,
  List,
  ListItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import theme from "../../components/ThemeStyle/theme";
import { LocalizationProvider, DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useThemeContext } from "../../components/Context/ThemeContext";

const DateFilter = ({ prms }) => {
  const [value, setValue] = useState([dayjs().subtract(28, "days"), dayjs()]);
  const [preset, setPreset] = useState("Last 28 days");
  const [anchorEl, setAnchorEl] = useState(null); // To control the popover
  const [filterCustomerBy, setFilterCustomerBy] = useState("");
  const [filterLocation, setFilterLocation] = useState("Dubai outlet mall");
  const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

  const presets = [
    { label: "Today", range: [dayjs(), dayjs()] },
    { label: "Yesterday", range: [dayjs().subtract(1, "day"), dayjs().subtract(1, "day")] },
    { label: "Last 7 days", range: [dayjs().subtract(7, "days"), dayjs()] },
    { label: "Last 28 days", range: [dayjs().subtract(28, "days"), dayjs()] },
    { label: "Custom", range: [null, null] },
  ];

  const handlePresetChange = (event) => {
    const selectedPreset = presets.find(p => p.label === event.target.value);
    setPreset(event.target.value);
    setValue(selectedPreset.range);
    // Fetch data when preset is selected
    if (prms && prms.fetchData) {
      prms.fetchData(selectedPreset.range[0], selectedPreset.range[1]);
    }
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
    // Fetch or process data when the date range is updated
    if (prms && prms.fetchData) {
      prms.fetchData(newValue[0], newValue[1]);
    }
  };

  const handleClickStartDate = (event) => {
    setAnchorEl(event.currentTarget); // Show the preset menu when the start date is clicked
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close the menu when clicked outside
  };

  useEffect(() => {
    if (prms && prms.fetchData) {
      prms.fetchData(value[0], value[1]);
    }
  }, [prms, value]);

  const openMenu = Boolean(anchorEl);

  return (
    <Box sx={{ padding: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Filter by Location & Date
      </Typography>

      {/* Customer Filters */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
        <FormControl size="small" sx={{ width: "30%" }}>
          <InputLabel>Customer By</InputLabel>
          <Select value={filterCustomerBy} onChange={(e) => setFilterCustomerBy(e.target.value)} label="Customer By">
            <MenuItem value="">All Customers</MenuItem>
            <MenuItem value="POS">POS</MenuItem>
            <MenuItem value="Website">Website</MenuItem>
          </Select>
        </FormControl>

        {filterCustomerBy === "POS" && (
          <FormControl size="small" sx={{ width: "30%" }}>
            <InputLabel>Search by POS Location</InputLabel>
            <Select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} label="Search by POS Location">
              <MenuItem value="">All POS Locations</MenuItem>
              <MenuItem value="Sahara centre mall">Sahara centre mall</MenuItem>
              <MenuItem value="Dubai outlet mall">Dubai outlet mall</MenuItem>
              <MenuItem value="Silicon central mall">Silicon central mall</MenuItem>
              <MenuItem value="Burjuman mall">Burjuman mall</MenuItem>
              <MenuItem value="AL wahda mall">AL wahda mall</MenuItem>
              <MenuItem value="Bawadi mall">Bawadi mall</MenuItem>
              <MenuItem value="AL ghurair centre mall">AL ghurair centre mall</MenuItem>
            </Select>
          </FormControl>
        )}
        <Typography sx={{ backgroundColor, boxShadow: '1', padding: 1, borderRadius: 1 }}>
          Store Location:{" "}
          {filterLocation}
        </Typography>

      </Box>

      {/* Date Range Picker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: "grid", gridTemplateColumns: "50% 50%", gap: 2, width: "100%", alignItems: "center" }}>
          {/* Preset Dropdown */}
          <TextField
            select
            label="Select Date Range"
            value={preset}
            onChange={handlePresetChange}
          >
            {presets.map((preset) => (
              <MenuItem key={preset.label} value={preset.label}>
                {preset.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Custom Date Range Picker */}
          {preset === "Custom" && (
            <DateRangePicker
              value={value}
              onChange={handleDateChange} // Update on date change
              renderInput={(startProps, endProps) => (
                <>
                  <TextField
                    {...startProps}
                    label="Start date"
                    onClick={handleClickStartDate} // Enable the menu on click
                  />
                  <Box sx={{ mx: 2 }}>to</Box>
                  <TextField {...endProps} label="End date" />
                </>
              )}
            />
          )}
          {/* Display Selected Range */}
          <Typography sx={{ backgroundColor, boxShadow: '1', padding: 2, borderRadius: 1 }}>
            Selected Range:{" "}
            {value[0] ? value[0].format("MMM DD, YYYY") : "Start date"} -{" "}
            {value[1] ? value[1].format("MMM DD, YYYY") : "End date"}
          </Typography>
        </Box>
      </LocalizationProvider>



      {/* Popover for Presets */}
      <Popover
        open={openMenu}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {presets.slice(0, 4).map((preset) => (
            <ListItem button key={preset.label} onClick={() => handlePresetChange({ target: { value: preset.label } })}>
              {preset.label}
            </ListItem>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

export default DateFilter;
