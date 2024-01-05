"use client";

import { useState } from "react";
import { SESSION_ACCORDION_DATA } from "../../session-explore.constant";

export default function useSessionAccordion() {
  const [itemStates, setItemStates] = useState(
    SESSION_ACCORDION_DATA.map(() => ({ isCopied: false, msg: false }))
  );

  const copyToClipboard = async (e: any, index: any) => {
    try {
      await navigator.clipboard.writeText(e);
      setItemStates((prevStates: any) =>
        prevStates.map((state: any, i: any) =>
          i === index ? { ...state, isCopied: true, msg: true } : state
        )
      );
    } finally {
      setTimeout(() => {
        setItemStates((prevStates) =>
          prevStates.map((state, i) =>
            i === index ? { ...state, isCopied: false, msg: false } : state
          )
        );
      }, 1500);
    }
  };

  return {
    itemStates,
    copyToClipboard,
    SESSION_ACCORDION_DATA,
  };
}
