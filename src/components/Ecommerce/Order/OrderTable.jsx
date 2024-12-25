import React, { useState, useEffect } from "react";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import ordersData from "./order";
import OrderView from "./OrderView";
import themes from "../../ThemeStyle/theme";
import { useThemeContext } from "../../Context/ThemeContext";

const OrderTable = () => {
    const [filteredOrders, setFilteredOrders] = useState(ordersData);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [filterStatus, setFilterStatus] = useState("");
    const [filterCustomer, setFilterCustomer] = useState("");
    const [filterOrderId, setFilterOrderId] = useState("");
    const [filterProduct, setFilterProduct] = useState("");
    const [slideIn, setSlideIn] = useState(false); // State for triggering slide effect
    const theme = useTheme();
    const { isDarkMode } = useThemeContext();
    const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;
  
    const handleActionClick = (order) => {
        setSelectedOrder(order);
        setSlideIn(true); // Trigger the slide-in effect
    };

    const handleBack = () => {
        setSlideIn(false); // Trigger slide-out effect
        setTimeout(() => setSelectedOrder(null), 300); // Wait for the slide-out to complete before resetting order
    };

    const handleDelete = (orderId) => {
        setFilteredOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    };

    const handleStatusChange = (event) => {
        setFilterStatus(event.target.value);
    };

    const handleCustomerChange = (event) => {
        setFilterCustomer(event.target.value);
    };

    const handleProductChange = (event) => {
        setFilterProduct(event.target.value);
    }

    const handleOrderChange = (event) => {
        setFilterOrderId(event.target.value);
    }

    // Filter orders based on the search query and status
    useEffect(() => {
        const filtered = ordersData.filter((order) => {
            const matchesCustomer = order.customer.toLowerCase().includes(filterCustomer.toLowerCase());
            const matchesStatus = filterStatus ? order.status.toLowerCase().includes(filterStatus.toLowerCase()) : true;
            const matchesOrderId = filterOrderId ? order.id.toLowerCase().includes(filterOrderId.toLowerCase()) : true;
            const matchesProduct = filterProduct ? order.productName.toLowerCase().includes(filterProduct.toLowerCase()) : true;
            return matchesCustomer && matchesStatus && matchesOrderId && matchesProduct;
        });
        setFilteredOrders(filtered);
    }, [filterCustomer, filterStatus, filterOrderId, filterProduct]); 

    return (
        <Box sx={{ minHeight: "100vh", padding: "20px" }}>
            <div className="profile-container p-4 bg-grey-800 rounded-lg">
                {!selectedOrder ? (
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                        ORDER TABLE
                    </Typography>
                ) : (
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                        ORDER DETAILS
                    </Typography>
                )}

                <div className="flex items-center justify-between mb-3 mt-[-17px]">
                    {!selectedOrder ? (
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }} style={{ color: theme.palette.primary.main }}>
                            Welcome to Order's Data
                        </Typography>
                    ) : (
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }} style={{ color: theme.palette.primary.main }}>
                            Viewing Order of {selectedOrder.customer}
                        </Typography>
                    )}
                    {!selectedOrder && (
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
                        >
                            Download Order Table
                        </Button>
                    )}
                </div>

                {/* Filters Section */}
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    
                    {/* Order Id */}
                    <TextField
                        label="Search by Order Id"
                        variant="outlined"
                        size="small"
                        value={filterOrderId}
                        onChange={handleOrderChange}
                        sx={{ width: "24%" }}
                    />

                    {/* Customer Filter */}
                    <TextField
                        label="Search by Customer"
                        variant="outlined"
                        size="small"
                        value={filterCustomer}
                        onChange={handleCustomerChange}
                        sx={{ width: "24%" }}
                    />
                    {/* Product Filter */}
                    <TextField
                        label="Search by Product Name"
                        variant="outlined"
                        size="small"
                        value={filterProduct}
                        onChange={handleProductChange}
                        sx={{ width: "24%" }}
                    />
                    

                    {/* Status Filter */}
                    <FormControl size="small" sx={{ width: "24%" }}>
                        <InputLabel>Status</InputLabel>
                        <Select value={filterStatus} onChange={handleStatusChange} label="Status">
                            <MenuItem value="">All Statuses</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Shipped">Shipped</MenuItem>
                            <MenuItem value="Delivered">Delivered</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Order Table Section */}
                <Box sx={{ display: "flex", flexDirection: "row", position: "relative", width: "100%" }}>
                    <TableContainer
                        component={Paper}
                        sx={{
                            maxWidth: "100%",
                            borderRadius: 2,
                            backgroundColor,
                            boxShadow: 'none',
                            marginBottom: "15px",
                            flex: 1,
                            border: "1px solid", // Add outer border to table container
                            borderColor: theme.palette.divider, // Optional: Customize the border color
                        }}
                    >
                        <Table aria-label="order table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid", // Add border to header cells
                                            borderColor: theme.palette.divider, // Optional: Customize the border color
                                        }}
                                    >
                                        Order ID
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid",
                                            borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Customer
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid",
                                            borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Product Name
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid",
                                            borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Booking Date
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid",
                                            borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Delivery Date
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid",
                                            borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Status
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid",
                                            borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Address
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            backgroundColor, color: themes.palette.text,
                                            border: "1px solid", borderColor: theme.palette.divider,
                                        }}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {filteredOrders.map((order) => (
                                    <TableRow key={order.id} sx={{ borderBottom: "1px solid", borderColor: theme.palette.divider }}>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{order.id}</TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{order.customer}</TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{order.productName}</TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{order.bookingDate}</TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{order.deliveryDate}</TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{order.status}</TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                                            <Typography variant="body2">
                                                {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipCode}, {order.address.country}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                onClick={() => handleActionClick(order)}
                                                sx={{ textTransform: "none", marginRight: 1, marginBottom: '6px' }}
                                            >
                                                <VisibilityIcon /> View Details
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="warning"
                                                size="small"
                                                onClick={() => handleActionClick(order)}
                                                sx={{ textTransform: "none", marginRight: 1, marginBottom: '6px' }}
                                            >
                                                <EditIcon /> Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                size="small"
                                                onClick={() => handleDelete(order.id)}
                                                sx={{ textTransform: "none" }}
                                            >
                                                <DeleteIcon /> Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Slide in Order Details from the Right */}

                </Box>
            </div>
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
                    }}
                >
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
                        }}
                    >
                        Back
                    </Button>
                    <OrderView order={selectedOrder} onBack={handleBack} />
                </Box>
            </Slide>
        </Box>
    );
};

export default OrderTable;
