"use client";

import KeyIcon from "@/common/assets/images/key.svg";
import { styles } from "@/common/styles/global.style";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import { MouseEvent } from "react";
import useAuthenticatedNav from "../../use-authenticated-nav.hook";

/**
 * Renders the Profile  Component
 * @returns the Profile data of user
 */

function Profile() {
  const { anchorElUser, setAnchorElUser, handleLogout } = useAuthenticatedNav();

  return (
    <Box className="profile-main icon-btn">
      <Box
        className="profile-main-box"
        onClick={(event: MouseEvent<HTMLElement>) =>
          setAnchorElUser(event.currentTarget)
        }
      >
        <Box sx={styles.FeedbackMain}>
          <IconButton className="profile-data-icon">
            <Box className="profile-name-avatar">BN</Box>

            <Typography className="profile-username">Username</Typography>
            <ExpandMoreOutlinedIcon className="profile-dropdown" />
          </IconButton>
        </Box>
      </Box>
      <Menu
        className="profile-menu"
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={() => setAnchorElUser(null)}
      >
        <MenuItem>
          <Typography className="menu-text">
            <Image src={KeyIcon} alt="key-icon" className="logout-icon" />{" "}
            Change Password
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography onClick={handleLogout} className="menu-text logout-text">
            <LogoutIcon className="logout-icon" /> Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profile;
