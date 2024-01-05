"use client";

import { styles } from "@/common/styles/global.style";
import { AppBar, Typography } from "@mui/material";
import AppbarHeader from "./components/appbar-header/appbar-header.component";
import Feedback from "./components/feedback/feedback.component";
import MobileAppbar from "./components/mobile-appbar/mobile-appbar.component";
import Profile from "./components/profile/profile.component";
import { Styles } from "./authenticated-nav.style";

/**
 * Renders the Authenticated Navigation Component
 * @returns the navigation bar for authenticated users.
 */

function AuthenticatedNav() {
  return (
    <AppBar position="static" sx={Styles.mainAppbar}>
      <MobileAppbar />
      <Typography variant="h5" noWrap sx={styles.AppbarTitle}>
        APEX
      </Typography>
      <AppbarHeader />
      <Feedback />
      <Profile />
    </AppBar>
  );
}

export default AuthenticatedNav;
