"use client";

import { Grid, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import Image from "next/image";
import { PieChartStyle } from "./pie-chart.style";
/**
 * Renders the PieChart component
 * This component displays title and chart on card
 * @returns The Pie Chart component
 */

function PieChart({ chartLabels, chartData, title }: any) {
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={PieChartStyle.PieChartStyling}
      className="border border-radius issues-pie__chart"
    >
      <Typography sx={PieChartStyle.PieHeaderStyling}>{title}</Typography>
      <Grid
        item
        sx={{
          height: { lg: "165px", md: "320px", sm: "320px", xs: "320px" },
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={7.5} sx={{ width: "100%" }}>
          {chartLabels.map((item: any) => (
            <Grid key={item.id} item xs={12} sx={PieChartStyle.PieChartLabel}>
              <Grid item xs={6}>
                <Typography sx={PieChartStyle.PieLabelStyling}>
                  <Image
                    src={item.icon}
                    alt="pci-icon"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  {item.name}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: { md: "center", xs: "end" } }}>
                <Typography sx={PieChartStyle.PiePercentageStyling}>
                  {item.value}%
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4.5}
          sx={PieChartStyle.PieChartDataStyling}
        >
          <ReactEcharts option={chartData} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PieChart;
