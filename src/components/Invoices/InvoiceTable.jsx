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
	Slide,
	Pagination,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import invoices from "./invoice"; // Import invoice data
import InvoiceView from "./InvoiceView"; // Component to show invoice details
import { useThemeContext } from "../Context/ThemeContext";
import themes from "../ThemeStyle/theme";

const InvoiceTable = () => {
	const [filteredInvoices, setFilteredInvoices] = useState(invoices);
	const [selectedInvoice, setSelectedInvoice] = useState(null);
	const [filterStatus, setFilterStatus] = useState("");
	const [slideIn, setSlideIn] = useState(false);
	const theme = useTheme();
	const { isDarkMode } = useThemeContext();
	const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;
	const [page, setPage] = useState(1);
	const [rowsPerPage] = useState(10);

	const handleStatusClick = (status) => {
		setFilterStatus(status);
	};

	useEffect(() => {
		const filtered = invoices.filter((invoice) => {
			if (filterStatus === "") return true;
			return invoice.status.toLowerCase() === filterStatus.toLowerCase();
		});
		setFilteredInvoices(filtered);
	}, [filterStatus]);

	const handleActionClick = (invoice) => {
		setSelectedInvoice(invoice);
		setSlideIn(true);
	};

	const handleBack = () => {
		setSlideIn(false);
		setTimeout(() => setSelectedInvoice(null), 300); // Reset after the slide-out animation
	};

	const handleDelete = (invoiceId) => {
		setFilteredInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.id !== invoiceId));
	};

	// Handle the download of filtered invoices data as JSON file
	const handleDownload = () => {
		const worksheet = XLSX.utils.json_to_sheet(filteredInvoices);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Invoice");
		XLSX.writeFile(workbook, "invoice_data.xlsx");
	};

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	const paginatedInvoices = filteredInvoices.slice((page - 1) * rowsPerPage, page * rowsPerPage);

	return (
		<Box sx={{ minHeight: "100vh", padding: "20px" }}>
			<div className="profile-container p-4 bg-grey-800 rounded-lg">
				{!selectedInvoice ? (
					<Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
						INVOICE TABLE
					</Typography>
				) : (
					<Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
						INVOICE DETAILS
					</Typography>
				)}

				{/* Filter Section with Buttons */}
				<Box display="flex" justifyContent="space-between" marginBottom={2}>
					<Box display="flex" gap={2}>
						{["", "Paid", "Canceled", "In-progress", "Shipped"].map((status) => (
							<Button
								key={status}
								variant={filterStatus === status ? "contained" : "outlined"}
								color="primary"
								onClick={() => handleStatusClick(status)}
								sx={{
									textTransform: "none",
									fontWeight: filterStatus === status ? "bold" : "normal",
									backgroundColor: filterStatus === status ? theme.palette.primary.main : "transparent",
								}}>
								{status || "All Invoices"}
							</Button>
						))}
					</Box>

					{/* Download Button */}
					<Button
						startIcon={<DownloadIcon />}
						onClick={handleDownload}
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
						Download Invoice Data
					</Button>
				</Box>

				{/* Invoice Table Section */}
				<Box sx={{ display: "flex", marginTop: "30px", flexDirection: "row", position: "relative", width: "100%" }}>
					<TableContainer
						component={Paper}
						sx={{
							maxWidth: "100%",
							borderRadius: 2,
							backgroundColor,
							boxShadow: "none",
							marginBottom: "15px",
							flex: 1,
							border: "1px solid", // Add outer border to table container
							borderColor: theme.palette.divider, // Optional: Customize the border color
						}}>
						<Table aria-label="invoice table">
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
										Invoice ID
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Customer
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Product Name
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Product Brand
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Total
									</TableCell>
									<TableCell
										sx={{
											border: "1px solid",
											borderColor: theme.palette.divider,
											fontWeight: "bold",
											backgroundColor,
											color: themes.palette.text,
										}}>
										Status
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
								{paginatedInvoices.map((invoice) => (
									<TableRow key={invoice.id} sx={{ borderBottom: "1px solid", borderColor: theme.palette.divider }}>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>{invoice.id}</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{invoice.customer}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{invoice.productName}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{invoice.brand}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{invoice.total}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											{invoice.status}
										</TableCell>
										<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={() => handleActionClick(invoice)}
												sx={{ textTransform: "none", marginRight: 1 }}>
												<VisibilityIcon /> View Details
											</Button>
											<Button
												variant="contained"
												color="warning"
												size="small"
												onClick={() => handleActionClick(invoice)}
												sx={{ textTransform: "none", marginRight: 1 }}>
												<EditIcon /> Edit
											</Button>
											<Button
												variant="contained"
												color="error"
												size="small"
												onClick={() => handleDelete(invoice.id)}
												sx={{ textTransform: "none" }}>
												<DeleteIcon /> Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</div>

			{/* Slide-in for Invoice Details */}
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
					{/* Pass selectedInvoice data to InvoiceView component */}
					<InvoiceView invoice={selectedInvoice} onBack={handleBack} />
				</Box>
			</Slide>

			<Box
				sx={{
					mt: 3,
					display: "flex",
					justifyContent: "center",
					pb: 2,
				}}>
				<Pagination
					count={Math.ceil(filteredInvoices.length / rowsPerPage)}
					page={page}
					onChange={handlePageChange}
					color="primary"
					size="large"
				/>
			</Box>
		</Box>
	);
};

export default InvoiceTable;
