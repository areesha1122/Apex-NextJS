"use client";

import { useState } from "react";

export default function useModalAccordion() {
  const [expanded, setExpanded] = useState(["panel1", "panel2", "panel3"]);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(
      isExpanded ? [...expanded, panel] : expanded.filter((p) => p !== panel)
    );
  };

  return {
    expanded,
    handleChange,
  };
}
