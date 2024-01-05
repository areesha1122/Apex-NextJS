"use client";

import { useState, SyntheticEvent } from "react";

export default function useAccordion({ title }: any) {
  const [expanded, setExpanded] = useState<string | false>(title);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return {
    expanded,
    handleChange,
  };
}
