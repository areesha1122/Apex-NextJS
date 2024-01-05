"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import { getUser } from "@/common/utils/users.util";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { ReactNode } from "react";

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }: { component: ReactNode }) {
  const router = useRouter();
  const user: any = getUser();

  if (!user) {
    if (typeof window === "object") {
      router.push("/login");
    }
  }

  return (
    <div>
      <AuthenticatedNav />
        <Container className="main-container" maxWidth={false}>
          {component}
        </Container>
    </div>
  );
}

Private.propTypes = {
  component: PropTypes.element.isRequired,
};
