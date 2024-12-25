import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ users }) => {
  // Default to an empty array if users is undefined or null
  const usersData = Array.isArray(users) ? users : [];

  // If no data is available, show a placeholder message
  if (usersData.length === 0) {
    return <div>No data available</div>; // Optional: You can change this to a loading spinner or any fallback UI.
  }

  const data = {
    labels: usersData.map(user => user.name), // Names as x-axis labels
    datasets: [
      {
        label: 'Age of Users',
        data: usersData.map(user => user.age), // User ages for the y-axis
        fill: false,
        borderColor: '#4B49AC', // Line color
        pointBackgroundColor: '#FF6F61', // Points color
        pointBorderColor: '#F37973', // Border around points
        pointHoverBackgroundColor: '#F37973', // Hover color for points
        pointHoverBorderColor: '#F37973', // Hover border color for points
        tension: 0.3, // Smooth curve for the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Age of Users Line Chart',
        font: {
          size: 16,
        },
      },
      legend: {
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          beginAtZero: true,
          stepSize: 5,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

// Prop validation to ensure `users` is an array of objects with `name` and `age`
LineChart.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChart;
