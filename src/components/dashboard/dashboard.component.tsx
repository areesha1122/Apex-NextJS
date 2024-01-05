"use client";

import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import CustomTopIssues from "@/common/components/custom-top-issues/custom-top-issues.component";
import { Grid } from "@mui/material";
import DataFlow from "./components/data-flow/data-flow.component";
import SessionTimeUser from "./components/session-time-user/session-time-user.component";
import WelcomeAlert from "./components/welcome-alert/welcome-alert.component";
import {
  ACTIVE_ENGINE_DATA,
  ISSUES_PER_ENGINE_DATA,
  TOP_ISSUES_DASHBOARD,
} from "./dashboard.constant";
import { DashboardStyles } from "./dashboard.style";
import useDashboard from "./use-dashboard.hook";
function Dashboard() {
  const { welcomeAlert, setWelcomeAlert } = useDashboard();

  return (
    <>
      <Grid sx={DashboardStyles.DashboardGrid}>
        {welcomeAlert && <WelcomeAlert setWelcomeAlert={setWelcomeAlert} />}
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={DashboardStyles.DashboardGrid}
        className="justify-between"
      >
        <Grid
          item
          xs={12}
          md={5.85}
          lg={3.88}
          sx={DashboardStyles.DashboardSessionMain}
          className="border border-radius bg-white"
        >
          <SessionTimeUser />
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={3.88}
          sx={DashboardStyles.IssuesEnginesGrid}
          className="border border-radius bg-white"
        >
          <CustomLineChart
            title="Issues per Engine"
            chartData={ISSUES_PER_ENGINE_DATA}
          />
        </Grid>
        <Grid item xs={12} md={5.85} lg={3.88}>
          <DataFlow />
        </Grid>
        <Grid sx={DashboardStyles.TopIssuesMain} container>
          <Grid
            item
            xs={12}
            md={5.93}
            sx={DashboardStyles.EngineManageMain}
            className="border border-radius"
          >
            <CustomTopIssues
              title="Engines Overview"
              issuesData={ACTIVE_ENGINE_DATA}
              arrowIcon={false}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={5.93}
            sx={DashboardStyles.EngineManageMain}
            className="border border-radius"
          >
            <CustomTopIssues
              title="Top Issues"
              issuesData={TOP_ISSUES_DASHBOARD}
              arrowIcon={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
