import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DonutChart = ({ users }) => {
  // Group users by marital status
  const maritalStatusCounts = users.reduce(
    (acc, user) => {
      if (user.maritalStatus === "Single") acc.single += 1;
      if (user.maritalStatus === "Married") acc.married += 1;
      return acc;
    },
    { single: 0, married: 0 }
  );

  // Prepare the chart data
  const data = [
    { name: 'Completed', value: maritalStatusCounts.single },
    { name: 'Incompleted', value: maritalStatusCounts.married },
  ];

  // Theme-based colors
  const COLORS = ['#4B49AC', '#FF6F61']; // Primary theme color and secondary color

  // Total users count
  const totalUsers = users.length;

  return (
    <div className="relative flex justify-center items-center">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="60%" // Inner radius for donut effect
            outerRadius="80%"
            paddingAngle={2}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      {/* Centered text */}
      <div
        className="absolute text-center"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: '#4B49AC', // Match with theme primary color
        }}
      >
        {totalUsers}
      </div>
    </div>
  );
};

export default DonutChart;
