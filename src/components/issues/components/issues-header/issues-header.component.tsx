"use client";

import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import CustomTopIssues from "@/common/components/custom-top-issues/custom-top-issues.component";
import { Box, Grid } from "@mui/material";
import {
  ISSUES_BY_ENGINE_CHART,
  ISSUES_BY_ENGINE_DATA,
  SENSITIVE_DATATYPE_CHART,
  SENSITIVE_DATATYPE_DATA,
  SEVERITY_DATA,
  TOP_ISSUES_DATA,
} from "../../issues.constant";
import PieChart from "../pie-chart/pie-chart.component";
import TopIssuesChart from "../top-issues-chart/top-issues-chart.component";
import { IssuesHeaderStyling } from "./issues-header.style";
/**
 * Renders the issues Header component
 * This component displays charts
 * @returns The issues Header component
 */

function IssuesHeader() {
  return (
    <Grid container sx={IssuesHeaderStyling.HeaderMainGrid}>
      <Grid
        item
        xs={12}
        md={12}
        lg={3.49}
        sx={IssuesHeaderStyling.HeaderGridContainer}
      >
        <Box sx={IssuesHeaderStyling.HedaerBoxContainer}>
          <TopIssuesChart />
        </Box>
        <Box
          sx={IssuesHeaderStyling.HeaderBoxMain}
          className="border border-radius bg-white"
        >
          <CustomLineChart title="Severity" chartData={SEVERITY_DATA} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={3.49}
        sx={IssuesHeaderStyling.HeaderGridContainer}
      >
        <Box
          sx={IssuesHeaderStyling.HedaerBoxContainer}
          className="issues-pie__chart__outer"
        >
          <PieChart
            chartData={SENSITIVE_DATATYPE_CHART}
            chartLabels={SENSITIVE_DATATYPE_DATA}
            title="Sensitive data types"
          />
        </Box>
        <Box sx={IssuesHeaderStyling.HeaderPieChart}>
          <PieChart
            chartData={ISSUES_BY_ENGINE_CHART}
            chartLabels={ISSUES_BY_ENGINE_DATA}
            title="Issues by Engine"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={4.69}
        className="border border-radius bg-white"
        sx={IssuesHeaderStyling.IssuesPieChart}
      >
        <CustomTopIssues
          title="Top Issues"
          issuesData={TOP_ISSUES_DATA}
          arrowIcon={false}
          issueData={true}
        />
      </Grid>
    </Grid>
  );
}

export default IssuesHeader;
