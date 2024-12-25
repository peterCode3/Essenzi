import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Grid2, Paper, Typography } from "@mui/material";

import { BiStats } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";
import { ImStatsBars2 } from "react-icons/im";
import { IoMdMail, IoMdStats } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { MdIncompleteCircle } from "react-icons/md";
import BarChart from "../../components/BarChart/BarChart";
import HorizontalBarChart from "../../components/HorizontalBar/HorizontalBarChart";
import LineChart from "../../components/LineChart/LineChart";
import PieChart from "../../components/PieChart/PieChart";
import users from "../../data/users";
import DonutChart from "../../components/DonutChart/DonutChart";
import StockChartWithArrows from "../../components/StockArrowChart/StockArrowChart";
import { LinearProgress } from "@mui/material";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { Sparklines, SparklinesLine } from "react-sparklines";
import ReactSpeedometer from "react-d3-speedometer";
import { Pie } from "react-chartjs-2";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Doughnut } from "react-chartjs-2";
import GaugeChart from 'react-gauge-chart';

// Inside the Grid2 Box

const Clients = () => {
  return (
    <Grid2 container spacing={3} mb={3}>
      {/* Line Chart (remains on the left side) */}
      <Grid2 xs={6} sx={{ width: "65%" }}>
        <Paper elevation={3} sx={{ padding: 2, textAlign: "start" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Line Chart
          </Typography>
          <GaugeChart
  id="gauge-chart"
  nrOfLevels={20}
  colors={["#FF5F6D", "#FFC371", "#28A745"]} // Gradient color zones
  arcWidth={0.3}
  percent={0.6} // Replace with your dynamic value
  textColor="#1877F2"
/>
        </Paper>
      </Grid2>

      {/* Column for Bar Charts */}
      <Grid2 xs={6} container direction="column" spacing={3}>
        {/* First Bar Chart */}
        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Donut Chart
            </Typography>
            <Grid2 sx={{ marginBottom: 4 }}>
              <DonutChart users={users} />
            </Grid2>
          </Paper>
        </Grid2>

        {/* Second Bar Chart */}
        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <LinearProgress
              variant="determinate"
              value={75} // Replace with your dynamic progress value
              sx={{ height: 10, borderRadius: 5, marginTop: 2 }}
            />
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <LinearProgress
              variant="determinate"
              value={75} // Replace with your dynamic progress value
              sx={{ height: 10, borderRadius: 5, marginTop: 2 }}
            />
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <Pie
              data={{
                labels: ["Admins", "Teachers", "Students"],
                datasets: [
                  {
                    data: [50, 30, 20],
                    backgroundColor: ["#007BFF", "#28A745", "#FFC107"],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "bottom" },
                },
              }}
            />
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <LinearProgress
              variant="determinate"
              value={75} // Replace with your dynamic progress value
              sx={{ height: 10, borderRadius: 5, marginTop: 2 }}
            />
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <ReactSpeedometer
              maxValue={100}
              value={60} // Replace with your dynamic value
              segments={5}
              needleColor="red"
              startColor="green"
              endColor="red"
              textColor="blue"
            />
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <CountUp start={0} end={100} duration={2.75}>
              {({ countUpRef }) => (
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  ref={countUpRef}
                />
              )}
            </CountUp>
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <CountUp start={0} end={100} duration={2.75}>
              {({ countUpRef }) => (
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  ref={countUpRef}
                />
              )}
            </CountUp>
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <CircularProgressbar
              value={60} // Replace with your dynamic value
              text="60%"
              styles={{
                path: { stroke: "#1877F2" },
                text: { fontSize: "20px", fill: "#1877F2" },
              }}
            />
          </Paper>
        </Grid2>

        <Grid2 xs={12} sm={6} md={4} sx={{ width: "430px", height: "226px" }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", height: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart 2
            </Typography>
            <Bar
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [
                  {
                    label: "Total Students",
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: "#1877F2",
                    borderRadius: 10,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </Paper>
        </Grid2>

        <CircularProgressbar
          value={60}
          text="60%"
          styles={{
            path: { stroke: "#1877F2" },
            text: { fontSize: "20px", fill: "#1877F2" },
          }}
        />

        <Sparklines
          data={users.indexOf[1]}
          limit={10}
          width={100}
          height={30}
        >
          <SparklinesLine color="blue" />
        </Sparklines>
      </Grid2>
    </Grid2>
  );
};

export default Clients;
