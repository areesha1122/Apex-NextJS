"use client";

import HelloImg from "@/common/assets/images/hellow.svg";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { welcomeStyles } from "./welcome-alert.style";
/**
 * Renders the Welcome Alert chart component
 * This component displays Welcome Alert chart
 * @returns The Welcome Alert component
 */
function WelcomeAlert({ setWelcomeAlert }: any) {
  return (
    <Grid
      item
      xs={12}
      sx={{ ...welcomeStyles.WelcomeMain, ...welcomeStyles.WelcomeAlert }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        lg={1.5}
        sx={welcomeStyles.WelcomeAlertGrid}
      >
        <Image src={HelloImg} alt="hello-img" style={welcomeStyles.HelloImg} />
        <Box sx={welcomeStyles.WelcomeBox}>
          <Typography
            sx={{
              ...welcomeStyles.WelcomeText,
              ...welcomeStyles.WelcomeTextAlign,
            }}
          >
            Welcome To Apex!
          </Typography>
          <Typography
            sx={{
              ...welcomeStyles.WelcomeDesc,
              ...welcomeStyles.WelcomeTextAlign,
            }}
          >
            We’re happy you’re using our MVP. Please feel free to feedback us on
            anything that comes to mind.
          </Typography>
        </Box>
      </Grid>
      <Button
        sx={welcomeStyles.WelcomeCloseBtn}
        onClick={() => setWelcomeAlert(false)}
      >
        Close
      </Button>
    </Grid>
  );
}
export default WelcomeAlert;