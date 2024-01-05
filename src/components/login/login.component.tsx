"use client";

import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { IUseLogin } from "./login.interface";
import { LoginStyling } from "./login.style";
import useLogin from "./use-login.hook";
function Login() {
  const { setEmail, setPassword, handleSubmit }: IUseLogin = useLogin();

  return (
    <Box sx={LoginStyling.LoginHeader}>
      <Box sx={LoginStyling.LoginBox}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign="right">
          <Button
            variant="outlined"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default Login;
