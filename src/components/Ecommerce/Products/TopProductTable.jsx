import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  useTheme
} from "@mui/material";
import products from "./product";
import themes from "../../ThemeStyle/theme";
import { useThemeContext } from "../../Context/ThemeContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as XLSX from "xlsx"; // Import xlsx for exporting data to Excel
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TopProductTable = ({actions= true, filtration = true}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value, categoryFilter);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    filterProducts(searchTerm, e.target.value);
  };

  const filterProducts = (searchTerm, category) => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  const downloadTable = () => {
      const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Product");
      XLSX.writeFile(workbook, "product_data.xlsx");
    };

  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
    // Implement edit functionality
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    // Implement delete functionality
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Filters Section */}
      {filtration && (

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          sx={{ width: "24%" }}
        />
        <FormControl sx={{ width: "24%" }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Parfum For Women">Parfum For Women</MenuItem>
            <MenuItem value="Eau de Toilette For Men">Eau de Toilette For Men	</MenuItem>
            <MenuItem value="Floral Fruity">Floral Fruity</MenuItem>
            {/* Add more categories as needed */}
          </Select>
        </FormControl>
						<Button
							startIcon={<DownloadIcon />}
							sx={{
								backgroundColor: themes.palette.primary.main,
								color: "#FFFFFF",
								paddingLeft: 3,
								paddingRight: 3,
								paddingTop: 1.5,
								paddingBottom: 1.5,
								textTransform: "none",
								"&:hover": {
									backgroundColor: themes.palette.primary.dark,
								},
								"&:active": {
									backgroundColor: themes.palette.primary.light,
								},
							}}
							onClick={downloadTable}
						>

							Download Product's
						</Button>
					
      </Box>

      

      )}

      
      
      {/* Product Table Section */}
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
          }}
        >
          <Table aria-label="product table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    fontWeight: "bold",
                    backgroundColor,
                    color: themes.palette.text,
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    fontWeight: "bold",
                    backgroundColor,
                    color: themes.palette.text,
                  }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    fontWeight: "bold",
                    backgroundColor,
                    color: themes.palette.text,
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    fontWeight: "bold",
                    backgroundColor,
                    color: themes.palette.text,
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    fontWeight: "bold",
                    backgroundColor,
                    color: themes.palette.text,
                  }}
                >
                  Description
                </TableCell>
            {actions && (

                <TableCell
                  sx={{
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                    fontWeight: "bold",
                    backgroundColor,
                    color: themes.palette.text,
                  }}
                >
                  Actions
                </TableCell>
            )}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow
                  key={product.name}
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: theme.palette.divider,
                  }}
                >
                  <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: 50, height: 50, borderRadius: "50%" }}
                    />
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                    {product.name}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                    {product.category}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                    AED {product.price}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
                    {product.description}
                  </TableCell>
                  {actions && (
											<TableCell sx={{ border: "1px solid", borderColor: theme.palette.divider }}>
												<Button
													variant="contained"
													color="primary"
													size="small"
                          onClick={() => handleEdit(product.id)}
													sx={{ textTransform: "none", marginRight: 1, marginBottom: 1 }}>
													<AccountCircleIcon /> View
												</Button>
												<Button
													variant="contained"
													color="warning"
													size="small"
                          onClick={() => handleEdit(product.id)}
													sx={{ textTransform: "none", marginRight: 1, marginBottom: 1 }}>
													<EditIcon /> Edit
												</Button>
												<Button
													variant="contained"
													color="error"
													size="small"
                          onClick={() => handleDelete(product.id)}
													sx={{ textTransform: "none" }}>
													<DeleteIcon /> Delete
												</Button>
											</TableCell>
										)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TopProductTable;
