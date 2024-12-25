import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserBarChart = ({ users }) => {
  // Data for the chart based on the users' ages
  const data = {
    labels: users.map(user => `${user.name} ${user.lastName}`), // Use the name for x-axis labels
    datasets: [
      {
        label: 'User Ages', // Label for the dataset
        data: users.map(user => user.age), // Get the age of each user
        backgroundColor: users.map((_, index) => index % 2 === 0 ? '#4B49AC' : '#FF6F61'), // Alternate colors
        borderRadius: 5,
        borderWidth: 1,
        barThickness: 20, // Thinner bars
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => `User: ${tooltipItem[0].label}`,
          label: (tooltipItem) => `Age: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Users',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Age',
        },
        beginAtZero: true, // Ensures the chart starts from 0 on the y-axis
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserBarChart;
