"use client";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "@/provider/store";
import { SnackbarProvider } from "notistack";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={1500}
        >
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                  <CssBaseline />
                  {children}
                </Provider>
            </ThemeProvider>
          </StyledEngineProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
