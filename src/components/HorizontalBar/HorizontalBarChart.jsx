import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components in ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = ({ users = [] }) => {
  // Handle case where 'users' might be empty or undefined
  if (!users.length) {
    return <div>No data available for the horizontal bar chart.</div>; // Optionally render a fallback
  }

  // Dynamically generate colors based on the number of users
  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${(i * 360) / count}, 70%, 60%)`); // Generate HSL color
    }
    return colors;
  };

  const backgroundColors = generateColors(users.length);
  const hoverBackgroundColor = backgroundColors.map(color => `${color}80`); // Darker shades for hover effect

  const data = {
    labels: users.map(user => user.name), // Names as y-axis labels
    datasets: [
      {
        label: 'Age of Users',
        data: users.map(user => user.age), // User ages for the x-axis
        backgroundColor: backgroundColors, // Dynamically generated background colors
        hoverBackgroundColor: hoverBackgroundColor, // Hover effect for bars
        borderColor: backgroundColors.map(color => `${color}90`), // Lighter border color for distinction
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y', // Makes the bars horizontal
    plugins: {
      title: {
        display: true,
        text: 'Age of Users Horizontal Bar Chart',
        font: {
          size: 16, // Adjusted title font size
        },
      },
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12, // Adjusted font size for legend
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          font: {
            size: 10, // Adjusted tick font size
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12, // Adjusted tick font size
          },
        },
      },
    },
    maintainAspectRatio: false, // Allows for custom sizing
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
