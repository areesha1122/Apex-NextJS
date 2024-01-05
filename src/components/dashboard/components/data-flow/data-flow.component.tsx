"use client";

import { Box, Grid, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { DATA_DASHBOARD_CHART } from "../../dashboard.constant";
import { DataFlowStyles } from "./data-flow.style";
/**
 * Renders the Data Chart of incoming and outgoing data
 * This component displays Data Chart
 * @returns The DataChart component
 */

function DataFlow() {
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={DataFlowStyles.DataFlowMain}
      className="border border-radius bg-white"
    >
      <Typography
        className="tertiary-title"
        sx={{
          ...DataFlowStyles.DataFlowText,
          ...DataFlowStyles.DataFlowTextComponent,
        }}
      >
        Data Flow
      </Typography>
      <Box sx={DataFlowStyles.DataFlowChart}>
        <ReactEcharts option={DATA_DASHBOARD_CHART} />
      </Box>
    </Grid>
  );
}

export default DataFlow;
