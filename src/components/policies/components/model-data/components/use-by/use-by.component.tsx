"use client";

import { Chip, Typography } from "@mui/material";
import {styles} from "./use-by.style";

export const UseBy = () => {
  return (
    <Chip
      sx={styles.chip}
      label={<Typography sx={styles.label}>SSO Group name</Typography>}
    />
  );
};
