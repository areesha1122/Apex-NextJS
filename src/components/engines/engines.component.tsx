"use client";
/*eslint-disable react/no-unescaped-entities */

import * as React from "react";
import { SETTING } from "./engines.constant";
import { Typography, Grid, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SettingDialogue from "./components/engines-dialog/engines-dialog.component";
import useSetting from "./use-setting.hook";
import Image from "next/image";
import azure from "@/common/assets/images/azure.svg";
import { styles } from "./engines.style";
import Colors from "@/common/constants/color.constant";
import GPT from "@/common/assets/images/gpt.svg";
import EmptyTable from "@/common/assets/images/EmptyTable.svg";

export const Engines = () => {
  const { open, selectedItemId, handleClickOpen, handleClose, enginesData } =
    useSetting();
  return (
    <Box sx={styles.settig_sec}>
      <Typography sx={styles.title}>
        Onboard and manage your company's engines.
      </Typography>
      <Grid container spacing={2} sx={styles.setting_grid}>
        {enginesData.length > 0 &&
          enginesData.map((item: any) => {
            return (
              <Grid
                item
                xs={12}
                sm={5.8}
                md={3.8}
                lg={2.8}
                key={item.id}
                sx={{
                  ...styles.setting_column,
                  background:
                    "linear-gradient(167deg, #74aa9c57,#ffffff00, #00000000)",
                }}
              >
                <Box sx={styles.main_box}>
                  <Box sx={styles.box}>
                    <Typography sx={styles.box_title}>
                      {item.provider}
                    </Typography>
                    <Typography
                      sx={{
                        color:
                          item.privacy === "Private"
                            ? Colors.green
                            : Colors.red,
                        border: `1px solid ${
                          item.privacy === "Private" ? Colors.green : Colors.red
                        }`,
                        ...styles.status,
                      }}
                    >
                      {item.privacy}
                    </Typography>
                  </Box>
                  <Box sx={styles.properties_row}>
                    <Image src={GPT} alt="" />
                    <Typography sx={styles.category}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={styles.visibility_row}>
                  <Typography sx={styles.availability}>
                    <CircleIcon sx={styles.circularIcon} />
                    Active
                  </Typography>
                  <Typography
                    onClick={() => handleClickOpen(item)}
                    sx={styles.property_text}
                  >
                    Properties
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        {enginesData.length === 0 && (
          <Box sx={styles.tableBox}>
            <Image src={EmptyTable} alt="" />
            <Typography sx={styles.noRecord}>No Record to Display</Typography>
          </Box>
        )}
      </Grid>

      <Typography sx={styles.disable}>Disabled</Typography>
      <Grid container spacing={2} sx={styles.disable_row}>
        <Grid
          item
          xs={12}
          sm={5.8}
          md={3.8}
          lg={2.8}
          sx={styles.disabled_column}
        >
          <Box sx={styles.disableBox}>
            <Box sx={styles.disableBoxRow}>
              <Typography sx={styles.disableTilte}>ChatGPT</Typography>
              <Typography sx={styles.disableStatus}>Private</Typography>
            </Box>
            <Box sx={styles.disable_desc}>
              <Image src={azure} alt="" style={styles.disableImage} />
              <Typography sx={styles.desc}>Azure OpenAI</Typography>
            </Box>
          </Box>

          <Box sx={styles.disbleProperties}>
            <Typography sx={styles.hide}>
              <CircleIcon sx={styles.disableIcon} />
              Disabled
            </Typography>
            <Typography onClick={handleClickOpen} sx={styles.disableModel}>
              Properties
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <SettingDialogue
        handleClose={handleClose}
        open={open}
        SETTING={SETTING}
        selectedItemId={selectedItemId}
      />
    </Box>
  );
};
