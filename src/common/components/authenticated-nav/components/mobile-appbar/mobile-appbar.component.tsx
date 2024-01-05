"use client";

import { styles } from "@/common/styles/global.style";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent } from "react";
import { NAVBAR_ITEM_DATA } from "../../authenticated-nav.constant";
import useAuthenticatedNav from "../../use-authenticated-nav.hook";

/**
 * Renders the MobileAppbar  Component
 * @returns the MobileAppbar data of user
 */

function MobileAppbar() {
  const { anchorElNav, setAnchorElNav, handleNavValue } = useAuthenticatedNav();

  return (
    <Box sx={styles.AppbarHeader}>
      <IconButton
        size="large"
        onClick={(event: MouseEvent<HTMLElement>) =>
          setAnchorElNav(event.currentTarget)
        }
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={() => setAnchorElNav(null)}
        sx={styles.AppbarMenu}
      >
        {NAVBAR_ITEM_DATA.map((page: any) => (
          <MenuItem
            key={page.id}
            onClick={() => {
              handleNavValue(page.link);
              setAnchorElNav(null);
            }}
          >
            <Typography textAlign="center">{page.value}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MobileAppbar;
