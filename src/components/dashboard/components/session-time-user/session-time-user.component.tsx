"use client";

import { styles } from "@/common/styles/global.style";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { SESSION_USER_CHART } from "../../dashboard.constant";
import { SessionTimeStyle } from "./session-time-user.style";
/**
 * Renders the Session over Time & Active User data
 * This component displays Session over Time & Active User & its chart
 * @returns The SessionTimeUser chart component
 */

function SessionTimeUser() {
  return (
    <>
      <Box sx={SessionTimeStyle.SessionTimeMain}>
        <Box>
          <Typography sx={styles.SessionOverTimeText}>
            Sessions over time
          </Typography>
          <Box
            sx={{
              ...SessionTimeStyle.SessionOverTimeBox,
              ...SessionTimeStyle.SessionOvertimeBoxComponent,
            }}
          >
            <span style={SessionTimeStyle.Letterspacing}>19,435</span>{" "}
            <Typography sx={SessionTimeStyle.SessionTrendingValue}>
              <TrendingUpIcon sx={SessionTimeStyle.TrendingIcon} /> 10.54%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={SessionTimeStyle.SessionUser}>Users</Typography>
          <Box
            sx={{
              ...SessionTimeStyle.SessionUserData,
              ...SessionTimeStyle.SessionOverTimeData,
            }}
          >
            <span style={SessionTimeStyle.Letterspacing}>435</span>{" "}
            <Typography sx={SessionTimeStyle.SessionUserValue}>
              Active
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={SessionTimeStyle.DashboardChart}>
        <ReactEcharts option={SESSION_USER_CHART} />
      </Box>
    </>
  );
}

export default SessionTimeUser;
