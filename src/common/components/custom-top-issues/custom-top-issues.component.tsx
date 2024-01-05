"use client";

import { styles } from "@/common/styles/global.style";
import EastIcon from "@mui/icons-material/East";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import Image from "next/image";
import useCustomTopIssues from "./use-custom-top-issues.hook";
import Link from "next/link";
import {topStyles} from "./custom-top-issues.style";

function CustomTopIssues({ title, issuesData, arrowIcon, issueData }: any) {
  const {
    currentItems,
    handleNext,
    handlePrevious,
    currentPage,
    ITEMS_PER_PAGE,
  } = useCustomTopIssues({
    issuesData,
  });

  return (
    <Grid item xs={12}>
      <Typography sx={topStyles.topIssuesTitle}>{title}</Typography>
      {currentItems.map((item: any) => (
        <Link key={item.id} href="/issues" style={topStyles.link}>
          <Box
            sx={topStyles.topIssuesitem}
            style={issueData && topStyles.toIssuesData}
          >
            <Box sx={topStyles.TopIssuesDesc}>
              {item.icon ? (
                <Image
                  src={item.icon}
                  alt={item.value}
                  height={25}
                  width={25}
                  style={topStyles.arrowIcon}
                />
              ) : (
                ""
              )}
              <Box sx={topStyles.topIssuesBox}>
                <Typography className="tertiary-title" sx={topStyles.topIssuesValue}>
                  {item.value}
                </Typography>
                {arrowIcon ? <EastIcon sx={topStyles.arrowImg} /> : ""}
              </Box>
            </Box>
            {item.date && (
              <Box className="d-flex justify-between" sx={styles.TopIssuesDate}>
                <Box className="d-flex" sx={topStyles.chipsBox}>
                  <Chip
                    size="small"
                    className="fw-500"
                    label="GPT 4"
                    variant="outlined"
                  />
                  <Chip
                    label="Code"
                    size="small"
                    className="fw-500"
                    sx={topStyles.codeChip}
                  />
                </Box>
                <Typography
                  className="tertiary-title"
                  sx={styles.TopIssuesDateData}
                >
                  Aug 14, 2023 2:06 PM
                </Typography>
              </Box>
            )}
          </Box>
        </Link>
      ))}
      <Box className="d-flex justify-between" sx={topStyles.buttonGrid }>
        <Button
          disabled={currentPage === 1}
          onClick={handlePrevious}
          variant="outlined"
          sx={topStyles.topIssuesBtns}
        >
          Previous
        </Button>
        <Typography sx={topStyles.topIssuesValue}>
          {`${currentPage} out of ${Math.ceil(
            issuesData.length / ITEMS_PER_PAGE
          )}`}
        </Typography>
        <Button
          disabled={currentPage * ITEMS_PER_PAGE >= issuesData.length}
          onClick={handleNext}
          variant="outlined"
          sx={topStyles.topIssuesBtns}
        >
          Next
        </Button>
      </Box>
    </Grid>
  );
}

export default CustomTopIssues;
