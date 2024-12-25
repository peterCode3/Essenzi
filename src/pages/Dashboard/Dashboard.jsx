import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Select, MenuItem, FormControl, Checkbox, InputLabel, Button, TextField, FormControlLabel, colors } from '@mui/material';
import { Person, Group, AttachMoney, ShoppingCart, Email, InsertChartOutlined, PeopleAlt } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { useThemeContext } from '../../components/Context/ThemeContext';
import theme from '../../components/ThemeStyle/theme';
import TopProductTable from '../../components/Ecommerce/Products/TopProductTable';

const Dashboard = () => {
  // Filter state
  const [selectedMonth, setSelectedMonth] = useState('January'); // Default: January
  const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.background.paper;

  // Sample data for metrics
  const metricsData = [
    { title: 'Total Customers', count: 800, icon: <Group />, color: '#28a745' },
    { title: 'Invoices', count: 150, icon: <InsertChartOutlined />, color: '#141414' },
    { title: 'Orders', count: 500, icon: <ShoppingCart />, color: '#dc3545' },
    { title: 'Total Revenue', count: '$1,500,000', icon: <AttachMoney />, color: '#007bff' }
  ];

  // Sample chart data
  const lineChartData = [
    { month: 'Jan', totalCustomers: 1000, orders: 2450, totalRevenue: 12000 },
    { month: 'Feb', totalCustomers: 10000, orders: 6300, totalRevenue: 10000 },
    { month: 'Mar', totalCustomers: 236760, orders: 8350, totalRevenue: 95000 },
    { month: 'Apr', totalCustomers: 29950, orders: 13520, totalRevenue: 18000 },
    { month: 'May', totalCustomers: 37800, orders: 185500, totalRevenue: 16000 },
    { month: 'Jun', totalCustomers: 45700, orders: 25900, totalRevenue: 190000 },
    { month: 'Jul', totalCustomers: 88880, orders: 29000, totalRevenue: 135000 },
    { month: 'Aug', totalCustomers: 58920, orders: 35050, totalRevenue: 140000 },
    { month: 'Sep', totalCustomers: 109990, orders: 36000, totalRevenue: 145000 },
    { month: 'Oct', totalCustomers: 180000, orders: 39650, totalRevenue: 15000 },
    { month: 'Nov', totalCustomers: 1150, orders: 303700, totalRevenue: 16000 },
    { month: 'Dec', totalCustomers: 1200, orders: 30870, totalRevenue: 17000 },
  ];


  const pieChartData = [
    { name: 'Revenue from Students', value: 400, color: '#28A745' },
    { name: 'Revenue from Customers', value: 300, color: '#4B49AC' },
    { name: 'Revenue from Orders', value: 200, color: '#007BFF' }
  ];

  const barChartData = [
    { name: "Jan", value: 150, colors: "#138061" },
    { name: "Feb", value: 200, colors: "#1B4B4D" },
    { name: "Mar", value: 180, colors: "#B7E676" },
    { name: "Apr", value: 220, colors: "#585BAE" },
    { name: "May", value: 170, colors: "#263360" },
    { name: "Jun", value: 270, colors: "#F76B6A" },
    { name: "Jul", value: 70, colors: "#007BFF" },
    { name: "Aug", value: 60, colors: "#FF0000" },
    { name: "Sep", value: 70, colors: "#FFC107" },
    { name: "Oct", value: 90, colors: "#DC3545" },
    { name: "Nov", value: 110, colors: "#4B49AC" },
    { name: "Dec", value: 120, colors: "#007BFF" },
  ];


  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };


  const currentMonthData = {
    students: 150, // This month's students
    revenue: 25000, // This month's revenue
    customers: 180, // This month's customers
  };





  const aggregatedMetricsData = [
    { name: 'Customer', value: 49751.77, color: '#28A745' },
    { name: 'Orders', value: 11901.66, color: '#141414' },
    { name: 'Revenu', value: 66894.26, color: '#28A745' },
    { name: 'Products', value: 66894.26, color: '#FF0000' },

  ];

  const [aggreedData, setMetricsData] = useState(aggregatedMetricsData);

  const [selectedCategories, setSelectedCategories] = useState(
    aggregatedMetricsData.map((metric) => metric.name)
  );

  const filteredData = aggreedData.filter((data) => selectedCategories.includes(data.name));


  const COLORS = ['#28a745', '#ffc107', '#dc3545', '#17a2b8', '#007bff', '#FF6347'];


  return (
    <Box sx={{ padding: 3 }}>
      


      {/* Filters Section */}
      <Grid container spacing={3} sx={{ marginBottom: 3, justifyContent: 'space-between' }}>
        <Grid item xs={12} sm={6} md={6}>
          {/* Title Section */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 4,
              color: isDarkMode ? "#fff" : "#1F2A40", // Dynamic title color
            }}
          >
            Admin Dashboard
          </Typography>
        </Grid>
        {/* Month Selector */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: isDarkMode ? "#fff" : "#1F2A40",
              }}
            >
              Month
            </InputLabel>
            <Select
              value={selectedMonth}
              onChange={handleMonthChange}
              label="Month"
              sx={{
                backgroundColor: isDarkMode ? "#2E3B47" : "#fff", // Background color changes
                color: isDarkMode ? "#fff" : "#1F2A40", // Text color changes
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#fff" : "#1F2A40", // Border color changes
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#fff" : "#1F2A40", // Hover border color
                },
              }}
            >
              <MenuItem value="January">January</MenuItem>
              <MenuItem value="February">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
              <MenuItem value="April">April</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="July">July</MenuItem>
              <MenuItem value="August">August</MenuItem>
              <MenuItem value="September">September</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* This Month's Data Section
      <Grid container spacing={3} sx={{ marginTop: 4, marginBottom: 4 }}>
        <Grid item xs={12} sm={4} md={4}>
          <Paper sx={{ backgroundColor, padding: 2, display: 'flex', alignItems: 'center', borderRadius: 2, boxShadow: 'none', border: '2px solid #4B49AC' }}>
            <Typography variant="h6" sx={{ flex: 1 }}>This Month's Students</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{currentMonthData.students}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Paper sx={{ backgroundColor, padding: 2, display: 'flex', alignItems: 'center', borderRadius: 2, boxShadow: 'none', border: '2px solid #FFC107' }}>
            <Typography variant="h6" sx={{ flex: 1 }}>This Month's Revenue</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>${currentMonthData.revenue}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Paper sx={{ backgroundColor, padding: 2, display: 'flex', alignItems: 'center', borderRadius: 2, boxShadow: 'none', border: '2px solid #28A745' }}>
            <Typography variant="h6" sx={{ flex: 1 }}>This Month's Customers</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{currentMonthData.customers}</Typography>
          </Paper>
        </Grid>
      </Grid> */}

      {/* Metrics Section */}
      <Grid container spacing={3}>
        {metricsData.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ backgroundColor, boxShadow: '2', padding: 2, display: 'flex', alignItems: 'center', borderRadius: 2, borderColor: metric.color }}>
              <Box sx={{ backgroundColor: isDarkMode ? theme.palette.background.default : '#EBF3EC', padding: 2, borderRadius: 10, marginRight: 2 }}>
                {metric.icon}
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: theme.palette.subHeading, marginBottom: theme.palette.mbtext }}>{metric.title}</Typography>
                <Typography variant="h4">{metric.count}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>


      {/* Charts Section */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {/* Line Chart */}
        <Grid item xs={12} md={12}>
          <Paper sx={{ padding: 3, backgroundColor }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Response
            </Typography>
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalCustomers" stroke="#28a745" />
                <Line type="monotone" dataKey="orders" stroke="#dc3545" />
                <Line type="monotone" dataKey="totalRevenue" stroke="rgb(117 178 153)" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>


      </Grid>
      {/* Aggregated Circular Chart (Donut Chart) */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {/* Chart Section */}
        <Grid item xs={12} md={12} >
          <Paper sx={{ padding: 3, backgroundColor }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Response
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={filteredData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={170}
                  innerRadius={60}
                  label={(entry) => `${entry.name}: ${entry.value}`} // Display title and value
                  labelLine={true} // Enable the label line
                >
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const { name, value } = payload[0].payload;
                      return (
                        <Paper sx={{ padding: 1, backgroundColor: '#fff' }}>
                          <Typography variant="body2">{`${name}: ${value}`}</Typography>
                        </Paper>
                      );
                    }
                    return null;
                  }}
                />

              </PieChart>

            </ResponsiveContainer>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {filteredData.map((entry, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 1,
                    padding: 1,
                    borderRadius: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      display: 'flex',
                      backgroundColor: entry.color,
                      marginRight: 1,
                      borderRadius: '50%',
                    }}
                  />
                  <Typography >{`${entry.name}`}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* <Grid item xs={6} md={4}>
          <Paper sx={{ padding: 3, backgroundColor }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Revenue Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  innerRadius={60}
                  label={(entry) => `${entry.name}: ${entry.value}`} // Display title and value
                  labelLine={true} // Enable the label line
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const { name, value } = payload[0].payload;
                      return (
                        <Paper sx={{ padding: 1, backgroundColor: '#fff' }}>
                          <Typography variant="body2">{`${name}: ${value}`}</Typography>
                        </Paper>
                      );
                    }
                    return null;
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </Paper>
        </Grid> */}

      </Grid>
      {/* Bar Chart */}
      {/* <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 3, backgroundColor }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Orders Over Time
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#8884d8" // Default color for fallback
                  shape={(props) => {
                    const { x, y, width, height, index } = props;
                    const color = barChartData[index]?.colors || "#8884d8";
                    return (
                      <rect x={x} y={y} width={width} height={height} fill={color} />
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid> */}

      {/* Top Product */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>

        <Grid item xs={12} md={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 4,
              color: isDarkMode ? "#fff" : "#1F2A40", // Dynamic title color
            }}
          >
            Top Products
          </Typography>
          <TopProductTable />

        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
