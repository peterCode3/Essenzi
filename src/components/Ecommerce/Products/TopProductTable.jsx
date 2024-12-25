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
  useTheme,
} from "@mui/material";
import products from "./product";
import themes from "../../ThemeStyle/theme";
import { useThemeContext } from "../../Context/ThemeContext";

const TopProductTable = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();
  const backgroundColor = isDarkMode ? themes.palette.background.default : themes.palette.background.paper;

  return (
    <Box sx={{ minHeight: "100vh" }}>
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
