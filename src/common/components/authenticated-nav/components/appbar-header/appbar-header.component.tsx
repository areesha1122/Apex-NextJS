"use client";

import IssuesImg from "@/common/assets/images/issues.svg";
import { styles } from "@/common/styles/global.style";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { NAVBAR_ITEM_DATA } from "../../authenticated-nav.constant";
import useAuthenticatedNav from "../../use-authenticated-nav.hook";

/**
 * Renders the AppbarHeader  Component
 * @returns the Appbar Header
 */

function AppbarHeader() {
  const { setAnchorElNav, navValue, handleNavValue } = useAuthenticatedNav();
  
  return (
    <Box sx={styles.AppbarHeaderMain}>
      <Box className="navbar-main">
        {NAVBAR_ITEM_DATA.map((page: any) => (
          <Box key={page.id} sx={styles.NavbarBox}>
            <Button
              onClick={() => {
                handleNavValue(page.link);
                setAnchorElNav(null);
              }}
              className={`navbar-main-item navBar-list ${
                page.link === navValue ? "selected active-navbar-main-item" : ""
              }`}
            >
              {page.value}
            </Button>
            {page.link === navValue && (
              <Image
                src={IssuesImg}
                alt="Selected Indicator"
                width="100"
                className="navbar-active"
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AppbarHeader;
