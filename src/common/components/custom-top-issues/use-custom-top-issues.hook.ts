"use client";

import { ITEMS_PER_PAGE } from "@/common/constants/global.constant";
import { useState } from "react";

export default function useCustomTopIssues({ issuesData }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = issuesData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage * ITEMS_PER_PAGE < issuesData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentItems,
    handleNext,
    handlePrevious,
    currentPage,
    ITEMS_PER_PAGE,
  };
}
