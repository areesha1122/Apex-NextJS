"use client";

import { Box, Grid, Typography } from "@mui/material";
import { styles } from "@/common/styles/global.style";
import {chartStyle} from "./custom-line-chart.style";

/**
 * Renders the CustomLineChart component
 * This component displays Line Chart data
 * @returns The CustomLineChart component
 */

export const CustomLineChart = ({ chartData, title }: any) => {
  return (
    <Box className="d-flex" sx={chartStyle.lineChartMain}>
      <Typography sx={chartStyle.linechartHeader}>{title}</Typography>
      <Box>
        <Box className="d-flex" sx={chartStyle.chartDataMain}>
          {chartData.map((item: any) => (
            <Box
              key={item.id}
              sx={{
                ...styles.LineChartData,
                width: `${item.value}%`,
                color: `${item.color}`,
                bgcolor: `${item.color}`,
              }}
            ></Box>
          ))}
        </Box>

        <Grid item className="d-flex justify-between">
          {chartData.map((item: any) => (
            <Box
              key={item.id}
              sx={{...chartStyle.Row, borderLeft: `2px solid ${item.color}`}}
            >
              <Typography sx={chartStyle.lineChartDetails} className="tertiary-title fw-600">
                {item.name}
              </Typography>
              <Typography sx={chartStyle.lineChartDetails} className="tertiary-title">
                {item.value}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
