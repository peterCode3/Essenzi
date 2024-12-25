import users from "../../data/users";
import { Box, Grid2, Paper, Typography, Button } from "@mui/material";
import { CgPerformance } from "react-icons/cg";
import React from "react";
import { CiViewTable } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { MdIncompleteCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImStatsBars2 } from "react-icons/im";
import { IoMdStats } from "react-icons/io";
import { BiStats } from "react-icons/bi";
import DownloadIcon from "@mui/icons-material/Download";
import LineChart from "../../components/LineChart/LineChart";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/PieChart/PieChart";
import HorizontalBarChart from "../../components/HorizontalBar/HorizontalBarChart";
import DonutChart from "../../components/DonutChart/DonutChart";
import StockChartWithArrows from "../../components/StockArrowChart/StockArrowChart";
import { LinearProgress } from "@mui/material";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import UserGauseChart from "../../components/UserGauseChart/UserGauseChart";
import SparklinesChart from "../../components/SparklinesChart/SparklinesChart ";
import UserBarChart from "../../components/UserBarChart/UserBarChart";
import { TiTick } from "react-icons/ti";

const User = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        USER DASHBOARD
      </Typography>
      <div className="flex items-center justify-between mb-3 mt-[-17px]">
        <Typography
          variant="h7"
          gutterBottom
          sx={{ fontWeight: "bold" }}
          style={{ color: "#1877F2" }}
        >
          Welcome to User Dashboard
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4B49AC", // Primary theme color
            color: "#FFFFFF", // White text for contrast
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 1.5,
            paddingBottom: 1.5,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#7978E9", // Supporting theme color on hover
            },
            "&:active": {
              backgroundColor: "#7DA0FA", // Slightly lighter supporting color when active
            },
          }}
          startIcon={<DownloadIcon />}
        >
          Download Reports
        </Button>
      </div>

      <Grid2 container spacing={3} mb={3}>
        <Grid2 xs={6} width={300}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", borderRadius: 2 }}
          >
            <div className="px-2 py-1">
              <div className="flex  flex-col gap-1">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Completed Tasks
                </Typography>
                <TiTick size={25} style={{ color: "green" }} />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  100
                </Typography>
                <Typography variant="body2">Total Students</Typography>
              </div>
            </div>
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={300}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", borderRadius: 2 }}
          >
            <div className="px-2 py-1">
              <div className="flex  flex-col gap-1">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Incompleted Tasks
                </Typography>
                <BiStats size={25} style={{ color: "red" }} />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  18
                </Typography>
                <Typography variant="body2">Total Students</Typography>
              </div>
            </div>
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={300}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", borderRadius: 2 }}
          >
            <div className="px-2 py-1">
              <div className="flex  flex-col gap-1">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Overdue Tasks
                </Typography>
                <MdIncompleteCircle size={25} style={{ color: "#C792E8" }} />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  4
                </Typography>
                <Typography variant="body2">Total Students</Typography>
              </div>
            </div>
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={300} sx={{ borderRadius: 5 }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "start", borderRadius: 2 }}
          >
            <div className="px-2 py-1">
              <div className="flex  flex-col gap-1">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total Tasks
                </Typography>
                <IoMdStats size={25} style={{ color: "#1877F2" }} />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  118
                </Typography>
                <Typography variant="body2">Total Students</Typography>
              </div>
            </div>
          </Paper>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={3} mb={3}>
        <Grid2 xs={6} width={615}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "start",
              borderRadius: 2,
              height: "350px",
            }}
          >
            <div className="flex  flex-col gap-1 mb-2">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                All tasks by completion status
              </Typography>
              <MdIncompleteCircle size={25} style={{ color: "#FF6F61" }} />
            </div>
            <UserBarChart users={users} />
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={310}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "start",
              borderRadius: 2,
              height: "350px",
            }}
          >
            <div className="flex  flex-col gap-1">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                All tasks by completion status
              </Typography>
              <MdIncompleteCircle size={25} style={{ color: "#7978E9" }} />
            </div>
            <DonutChart users={users} />
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={300}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "start",
              borderRadius: 2,
              height: "350px",
            }}
          >
            <div className="flex  flex-col gap-1 mb-[50px]">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Performance
              </Typography>
              <CgPerformance size={25} style={{ color: "#7978E9" }} />
            </div>
            <UserGauseChart users={users} />
            <Typography variant="h4" sx={{ fontWeight: "bold", marginTop:'35px', textAlign:'center' }}>
              LIVE
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>

      {/* Second Row with 3 Boxes */}

      <Grid2 container spacing={3} mb={3}>
        <Grid2 xs={6} width={615}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "start", borderRadius: 2, }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Line Chart
            </Typography>
            <LineChart users={users} />
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={615}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "start", borderRadius: 2, }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar Chart
            </Typography>
            <BarChart users={users} />
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={615}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "start", borderRadius: 2, }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Pie Chart
            </Typography>
            <PieChart users={users} />
          </Paper>
        </Grid2>

        <Grid2 xs={6} width={615}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "start",height: "320px", paddingBottom:'50px',borderRadius: 2,  }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Bar-Chart-Horizontal
            </Typography>
            <HorizontalBarChart users={users} />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default User;
