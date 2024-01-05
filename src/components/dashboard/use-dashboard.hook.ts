"use client";

import { useState } from "react";

export default function useDashboard() {
  const [welcomeAlert, setWelcomeAlert] = useState(true);
  return {
    welcomeAlert,
    setWelcomeAlert,
  };
}
