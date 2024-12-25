import React from "react";
import GaugeChart from "react-gauge-chart";

const UserGauseChart = ({users}) => {
    const maxAge = 100; // Assume 100 as the max possible age
    const averageAge =
      users.reduce((total, user) => total + user.age, 0) / users.length || 0; // Avoid division by zero
    const percentage = Math.min(averageAge / maxAge, 1); // Ensure the value doesn't exceed 1
  
    return (
      <div style={{ width: "80%", margin: "0 auto" }}>
        <GaugeChart
          id="user-gauge-chart"
          nrOfLevels={10} // Number of gradient levels
          colors={["#FF5F6D", "#FFC371", "#1877F2"]} // Theme-aligned colors
          arcWidth={0.3} // Thickness of the arc
          percent={percentage} // Dynamic percentage based on users' average age
          textColor="#1877F2" // Text color matching theme
          formatTextValue={(value) => `${Math.round(value * 100)}%`} // Show percentage text
        />
        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "16px" }}>
          Average Age: {Math.round(averageAge)} years
        </p>
      </div>
    );
}

export default UserGauseChart