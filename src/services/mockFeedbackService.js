const mockFeedbacks = [
	{
		id: 1,
		name: "John Doe",
		role: "Premium Customer",
		rating: 5,
		date: "2024-03-15",
		comment: "Outstanding platform! The user interface is intuitive and responsive.",
		avatar: "JD",
	},
	{
		id: 2,
		name: "Emma Wilson",
		role: "Enterprise Client",
		rating: 4,
		date: "2024-03-10",
		comment: "Very satisfied with the recent updates. Performance has improved significantly.",
		avatar: "EW",
	},
	{
		id: 3,
		name: "Michael Brown",
		role: "Basic User",
		rating: 3,
		date: "2024-03-08",
		comment: "Good functionality but needs some UI improvements.",
		avatar: "MB",
	},
	{
		id: 4,
		name: "Sarah Johnson",
		role: "Premium User",
		rating: 5,
		date: "2024-03-05",
		comment: "Excellent customer support and feature set.",
		avatar: "SJ",
	},
	{
		id: 5,
		name: "David Lee",
		role: "Enterprise Client",
		rating: 4,
		date: "2024-03-03",
		comment: "Great tool for our business needs. Looking forward to more features.",
		avatar: "DL",
	},
	{
		id: 6,
		name: "Lisa Chen",
		role: "Basic User",
		rating: 4,
		date: "2024-02-28",
		comment: "User-friendly interface and helpful documentation.",
		avatar: "LC",
	},
	{
		id: 7,
		name: "James Wilson",
		role: "Premium Customer",
		rating: 5,
		date: "2024-02-25",
		comment: "Best platform we've used so far. Highly recommended!",
		avatar: "JW",
	},
	{
		id: 8,
		name: "Maria Garcia",
		role: "Enterprise Client",
		rating: 3,
		date: "2024-02-20",
		comment: "Good potential but needs more enterprise features.",
		avatar: "MG",
	},
	{
		id: 9,
		name: "Tom Anderson",
		role: "Basic User",
		rating: 4,
		date: "2024-02-15",
		comment: "Solid performance and reliability. Worth the investment.",
		avatar: "TA",
	},
	{
		id: 10,
		name: "Anna Kim",
		role: "Premium User",
		rating: 5,
		date: "2024-02-10",
		comment: "Exceptional service and fantastic features. Keep up the good work!",
		avatar: "AK",
	},
];

export const getFeedbacks = async (params) => {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 800));

	let result = [...mockFeedbacks];

	// Apply date filters
	if (params.startDate || params.endDate) {
		result = result.filter((feedback) => {
			const feedbackDate = new Date(feedback.date);
			const start = params.startDate ? new Date(params.startDate) : null;
			const end = params.endDate ? new Date(params.endDate) : null;

			if (start && end) return feedbackDate >= start && feedbackDate <= end;
			if (start) return feedbackDate >= start;
			if (end) return feedbackDate <= end;
			return true;
		});
	}

	// Apply sorting
	if (params.sortOrder) {
		result.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return params.sortOrder === "latest" ? dateB - dateA : dateA - dateB;
		});
	}

	return {
		data: result,
		total: result.length,
		page: params.page || 1,
		perPage: params.perPage || 6,
	};
};
