"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import CustomizedAccordions from "./components/accordion/accordion.component";
import { POLICIES_ACCORDION_DATA } from "./policies.constant";
import usePolicies from "./use-policies.hook";
import {styles} from "./policy.style";

function Policies() {
  const { openModal, setOpenModal, selectedRow, setSelectedRow, policyData } =
  usePolicies();

  const POLICY_TABLE_HEADER = [
    { id: 1, header: "Policy name", accessor: "policyName" },
    { id: 2, header: "Action ", accessor: "type" },
    {
      id: 3,
      header: "Engines",
      accessor: "engine",
      cell: (data: any) => {
        return (
          <IconButton sx={styles.engine}>
            <Chip sx={styles.chip} label={data} variant="outlined" />
          </IconButton>
        );
      },
    },
    {
      id: 6,
      header: "Severity Level",
      accessor: "severityLevel",
      cell: (data: any) => {
        return (
          <IconButton sx={styles.iconBtn}>
            <Chip
              label={data}
              sx={{
               ...styles.severityChip,
                color:
                  data === "Medium"
                    ? Colors.brown
                    : data === "Critical"
                      ? Colors.darkBrown
                      : Colors.defaultBrown,
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "Critical"
                      ? Colors.secondaryWhite
                      : Colors.defaultWhite,
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    color:
                      data === "Medium"
                        ? `${Colors.orange} !important`
                        : data === "Critical"
                          ? `${Colors.darkBrown} !important`
                          : data === "High"
                          ? `${Colors.orange} !important`
                          : `${Colors.defaultBrown} !important`,
                          ...styles.severityLevel
                   
                  }}
                />
              }
            />
          </IconButton>

        );
      },
    },
  ];

  return (
    <Grid container item xs={12} sx={styles.pliciesSec}>
      <Typography
        sx={{ ...styles.policiesText , color: Colors.primary }}
      >
        Continuously maintain your AI posture management and detect threats
      </Typography>
      <Grid item xs={12} sx={styles.policies_grid}>
        {POLICIES_ACCORDION_DATA.map((item: any) => (
          <Box key={item.id} className="policyTable">
            <CustomizedAccordions
              id={item.id}
              title={item.value}
              component={
                <CustomTable
                  rows={item.policiesData}
                  column={POLICY_TABLE_HEADER}
                  setOpenModal={setOpenModal}
                  isSwitch={true}
                  isTableHead={true}
                  setSelectedRow={setSelectedRow}
                  isPolicy={true}
                />
              }
            />
          </Box>
        ))}
      </Grid>
      <CustomDialog
        thead={"policy"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Grid>
  );
}

export default Policies;
