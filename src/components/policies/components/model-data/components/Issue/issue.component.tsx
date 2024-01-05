"use client";

import { Grid, Typography } from '@mui/material';
import EChartsReact from 'echarts-for-react';
import { ISSUES_DATA } from '../model-data/modal-data.constants';
import {styles} from "./issue.style";

export const Issue = () => {
    return (
        <>
          <Grid container alignItems="center">
            <Grid item sx={styles.issueColumn}>
              <Typography sx={styles.issueTitle}>203</Typography>
            </Grid>
            <Grid item>
              <Typography sx={styles.issueDesc}>Total Issues</Typography>
            </Grid>
          </Grid>
          <EChartsReact option={ISSUES_DATA} />
        </>
    );
}

