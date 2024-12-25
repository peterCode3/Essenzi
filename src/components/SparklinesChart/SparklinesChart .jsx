import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const SparklinesChart = ({ users }) => {
  // For example, we can display the ages of users as the data for the sparklines chart
  const userAges = users.map(user => user.age);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Sparklines data={userAges} limit={10} width={100} height={30}>
        <SparklinesLine color="#1877F2" /> {/* Blue from your color scheme */}
      </Sparklines>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#1877F2" }}>
        User Age Trend
      </p>
    </div>
  );
};

export default SparklinesChart;
