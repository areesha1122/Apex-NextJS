"use client";

import { useEffect, useState } from "react";

export default function useIssues(tableRows: any) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();

  const [selectedFilters, setSelectedFilters] = useState<any>({});
  const [filteredTableRows, setFilteredTableRows] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  /**
   * useEffect for filtering and sorting the table rows.
   * It performs the following tasks:
   * - Filters rows based on selected filters
   * - Filters rows based on search query
   * - Sorts rows based on sort configuration
   */

  useEffect(() => {
    const filterRows = () => {
      let filteredRows = [...tableRows];
      for (const [key, value] of Object.entries(selectedFilters)) {
        if (Array.isArray(value) && value.length > 0) {
          filteredRows = filteredRows.filter((row: any) => {
            return value.includes(row[key]);
          });
        }
      }
      if (searchQuery) {
        const lowerCaseQuery = searchQuery.toLowerCase();
        filteredRows = filteredRows.filter((row: any) =>
          Object.values(row).some((value) =>
            String(value).toLowerCase().includes(lowerCaseQuery)
          )
        );
      }

      if (sortConfig !== null) {
        filteredRows.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
          return 0;
        });
      }

      setFilteredTableRows(filteredRows);
    };
    filterRows();
  }, [selectedFilters, tableRows, searchQuery, sortConfig]);

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleDeleteOption = (item: any, value: any) => {
    const newSelectedFilters = { ...selectedFilters };
    newSelectedFilters[item.keyValue] = newSelectedFilters[
      item.keyValue
    ].filter((val: any) => val !== value);
    setSelectedFilters(newSelectedFilters);
  };

  return {
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setSelectedFilters,
    hoveredColumn,
    setHoveredColumn,
    requestSort,
    sortConfig,
    filteredTableRows,
    selectedFilters,
    handleDeleteOption,
  };
}
