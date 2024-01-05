"use client";

import { createTheme } from "@mui/material";
import Colors from "@/common/constants/color.constant";

const theme = createTheme({
  typography: {
    fontFamily: "unset",
    secondaryMenuActive: {
      color: Colors.primary,
      fontStyle: "normal",
      fontSize: "13px",
      lineHeight: "20px",
    },

    primaryNavigationText: {
      color: Colors.bodyDefault,
      fontStyle: "normal",
      fontSize: "13px",
      lineHeight: "20px",
      textTransform: "capitalize",
    },
  },
  palette: {
    background: {
      default: Colors.white,
    },
    primary: {
      main: Colors.primaryHeading,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  spacing: 4,
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    secondaryMenuActive: React.CSSProperties;
    primaryNavigationText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    secondaryMenuActive?: React.CSSProperties;
    primaryNavigationText?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    secondaryMenuActive: true;
    primaryNavigationText: true;
  }
}

export default theme;
