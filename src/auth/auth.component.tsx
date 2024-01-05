"use client";

import AUTH from "@/common/constants/auth.constant";
import { AppBar, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import "../app/globals.css";
import Private from "./private.component";
import { styles } from "@/common/styles/global.style";

/**
 * Return the component according to it's type
 * @param {component, type} props component and type of the component
 * @returns component
 */
export default function Auth({
  component,
  type,
}: {
  component: ReactNode;
  type: string;
}) {
  switch (type) {
    case AUTH.PUBLIC:
      return (
        <div>
          {" "}
          <AppBar position="static" sx={styles.AppbarMainHeader}>
            <Typography variant="h6" noWrap sx={styles.AppbarText}>
              APEX
            </Typography>
          </AppBar>
          <Container className="main-container" maxWidth={false}>
            {component}
          </Container>
        </div>
      );
    case AUTH.PRIVATE:
      return <Private component={component} />;
  }
}

Auth.propTypes = {
  component: PropTypes.element.isRequired,
  type: PropTypes.string,
};
