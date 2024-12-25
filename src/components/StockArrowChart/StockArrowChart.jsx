import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"; // For arrows

const StockArrowChart = ({ users }) => {
  // Prepare data for the chart
  const chartData = users.map((user, index) => {
    const previousAge = index === 0 ? 0 : users[index - 1].age; // Get previous user's age
    const arrow = user.age > previousAge ? "up" : user.age < previousAge ? "down" : "flat";

    return {
      name: user.name, // User name on X-axis
      age: user.age, // User age on Y-axis
      arrow, // Determine if the age is increasing or decreasing
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <Line 
          type="monotone" 
          dataKey="age" 
          stroke="#39FF14" // Neon Green color
          strokeWidth={4} // Thicker line
          dot={false} 
        />
        <CartesianGrid stroke="#000000" strokeDasharray="5 5" /> {/* Black grid lines */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

const StockChartWithArrows = ({ users }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <StockArrowChart users={users} />
      <div style={{ marginTop: "20px" }}>
        {users.map((user, index) => {
          const previousAge = index === 0 ? 0 : users[index - 1].age;
          const isIncreasing = user.age > previousAge;
          const isDecreasing = user.age < previousAge;
          return (
            <div key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong>:{" "}
              {isIncreasing ? (
                <AiOutlineArrowUp style={{ color: "green", verticalAlign: "middle" }} />
              ) : isDecreasing ? (
                <AiOutlineArrowDown style={{ color: "red", verticalAlign: "middle" }} />
              ) : (
                "No Change"
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockChartWithArrows;
