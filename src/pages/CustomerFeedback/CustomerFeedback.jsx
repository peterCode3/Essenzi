import { Box, Card, Typography, Rating, Avatar, Stack, Pagination, TextField, CircularProgress, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { getFeedbacks } from '../../services/mockFeedbackService';

const ITEMS_PER_PAGE = 6;

const CustomerFeedback = () => {
	const [feedbacks, setFeedbacks] = useState([]);
	const [page, setPage] = useState(1);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [sortOrder, setSortOrder] = useState('latest');

	useEffect(() => {
		const loadFeedbacks = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await getFeedbacks({
					page,
					perPage: ITEMS_PER_PAGE,
					startDate,
					endDate,
					sortOrder
				});
				setFeedbacks(response.data);
			} catch (err) {
				setError('Failed to load feedbacks');
				console.error('Error:', err);
			} finally {
				setLoading(false);
			}
		};

		loadFeedbacks();
	}, [page, startDate, endDate, sortOrder]);

	const paginatedFeedbacks = feedbacks.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

	return (
		<Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
			<Typography variant="h4" sx={{ mb: 3 }}>
				Customer Feedback
			</Typography>

			<Box sx={{ mb: 4, display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
				<TextField
					type="date"
					label="Start Date"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					type="date"
					label="End Date"
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
					InputLabelProps={{ shrink: true }}
					/>
				<FormControl sx={{ minWidth: 120 }}>
					<InputLabel>Sort By</InputLabel>
					<Select
						value={sortOrder}
						label="Sort By"
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<MenuItem value="latest">Latest First</MenuItem>
						<MenuItem value="oldest">Oldest First</MenuItem>
					</Select>
				</FormControl>
			</Box>

			{loading ? (
				<Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
					<CircularProgress />
				</Box>
			) : (
				<>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "repeat(2, 1fr)",
								md: "repeat(3, 1fr)",
							},
							gap: { xs: 2, sm: 3 },
						}}>
						{paginatedFeedbacks.map((feedback) => (
							<Card key={feedback.id} sx={{ p: 3 }}>
								<Stack direction="row" spacing={2} alignItems="center" mb={2}>
									<Avatar>{feedback.avatar}</Avatar>
									<Box sx={{ minWidth: 0 }}>
										<Typography variant="h6" noWrap>
											{feedback.name}
										</Typography>
										<Typography variant="body2" color="text.secondary" noWrap>
											{feedback.role}
										</Typography>
									</Box>
								</Stack>

								<Rating value={feedback.rating} readOnly sx={{ mb: 1 }} />
								<Typography variant="body1" sx={{ mb: 1 }}>
									{feedback.comment}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{new Date(feedback.date).toLocaleDateString()}
								</Typography>
							</Card>
						))}
					</Box>

					<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
						<Pagination
							count={Math.ceil(feedbacks.length / ITEMS_PER_PAGE)}
							page={page}
							onChange={(e, value) => setPage(value)}
							color="primary"
						/>
					</Box>
				</>
			)}
		</Box>
	);
};

export default CustomerFeedback;
