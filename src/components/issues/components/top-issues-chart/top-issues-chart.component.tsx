"use client";

import TrendingDownIcon from "@/common/assets/images/trending_down.svg";
import Colors from "@/common/constants/color.constant";
import { Box, Grid, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import Image from "next/image";
import { TOTAL_ISSUES_CHART } from "../../issues.constant";
import { TopIssuesStyling } from "./top-issue.style";
/**
 * Renders the Top Issues chart component
 * This component displays Top Issues chart
 * @returns The Top Issues chart component
 */

function TopIssuesChart() {
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={TopIssuesStyling.TopGridMian}
      className="border border-radius"
    >
      <Typography sx={TopIssuesStyling.TopHeaderStyling}>Top Issues</Typography>
      <Grid container className="d-flex">
        <Grid item xl={3} lg={3.5} md={4} xs={12} textAlign="center">
          <Typography className="fw-500" sx={TopIssuesStyling.TopIssueTrending}>
            95
          </Typography>
          <Box sx={{ mt: { md: 6, xs: 0 } }}>
            <Typography sx={TopIssuesStyling.TopTrendingPercentage}>
              <span style={TopIssuesStyling.TopTrendingDownStyling}>
                <Image
                  src={TrendingDownIcon}
                  alt="trending-icon"
                  style={{ marginRight: "5px" }}
                />
                90.54%
              </span>
            </Typography>
          </Box>
          <Typography sx={TopIssuesStyling.TopTrendingWeek}>
            Since last week
          </Typography>
        </Grid>
        <Grid item xl={9} lg={8.5} md={8} xs={12}>
          <Box sx={TopIssuesStyling.TopIssuesChart}>
            <ReactEcharts option={TOTAL_ISSUES_CHART} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TopIssuesChart;
