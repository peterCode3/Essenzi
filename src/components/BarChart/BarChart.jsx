import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ users }) => {
  // Fallback to an empty array if users is undefined or null
  const usersData = Array.isArray(users) ? users : [];

  // Check if users data is empty
  if (usersData.length === 0) {
    return <div>No data available</div>; // Optional: A fallback UI when no users data exists
  }

  const barColors = ['#4B49AC', '#C792E8']; // Alternate colors
  const hoverColor = '#98BDFF'; // Highlight color

  const data = {
    labels: usersData.map((user) => user.name), // Names as x-axis labels
    datasets: [
      {
        label: 'Age of Users',
        data: usersData.map((user) => user.age), // User ages for the y-axis
        backgroundColor: usersData.map((_, index) => barColors[index % barColors.length]), // Alternate colors
        borderColor: usersData.map(() => hoverColor), // Border color on hover
        borderWidth: 1,
        hoverBackgroundColor: hoverColor, // Hover background color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Age of Users Bar Chart',
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 5,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

// PropTypes for validating the `users` prop
BarChart.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChart;
