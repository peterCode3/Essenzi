import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components in ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ users = [] }) => {
  // Check if users data is empty to prevent errors in the reduce method
  if (!users.length) {
    return <div>No data available for the pie chart.</div>; // Display a message when no data is available
  }

  // Group users by age range (10-year intervals)
  const ageGroups = users.reduce((acc, user) => {
    const ageGroup = `${Math.floor(user.age / 10) * 10}-${Math.floor(user.age / 10) * 10 + 9}`;
    acc[ageGroup] = (acc[ageGroup] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: 'Age Distribution',
        data: Object.values(ageGroups), // Count of users in each age group
        backgroundColor: ['#4B49AC', '#FF6F61', '#FF6F61', '#FF6F61', '#FF6F61'], // Static theme colors (could be dynamic based on data size)
        hoverBackgroundColor: ['#6C8FE8', '#6D6AD9', '#E36565', '#87ADFA', '#3E3D93'], // Hover colors
        hoverOffset: 6, // Slight hover effect
        borderColor: '#ffffff', // White border color for sections
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Age Distribution Pie Chart',
        font: {
          size: 16,
          color: 'black', // Title color
        },
      },
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12, // Font size for legend labels
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px', height: 'auto', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
