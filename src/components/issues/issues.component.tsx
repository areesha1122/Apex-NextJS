"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import { CustomDropdown } from "@/common/components/custom-dropdown/custom-dropdown.component";
import { CustomPagination } from "@/common/components/custom-pagination/custom-pagination.component";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Grid, Typography } from "@mui/material";
import CustomTable from "../../common/components/custom-table/custom-table.component";
import ExportPage from "./components/export-page/export-page.component";
import IssuesHeader from "./components/issues-header/issues-header.component";
import { FILTERS_DROPDOWN, ISSUES_TABLE_DATA } from "./issues.constant";
import useIssues from "./use-issues.hook";
import {styles} from "./issues.style";
import Colors from "@/common/constants/color.constant";


function Issues() {
  const {
    openModal,
    setOpenModal,
    setSelectedRow,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setSelectedFilters,
    filteredTableRows,
    selectedFilters,
    handleDeleteOption,
  } = useIssues(ISSUES_TABLE_DATA);

  const ISSUES_TABLE_HEADER = [
    { id: 1, header: "Timestamp", accessor: "timestamp" },
    {
      id: 2,
      header: "Violation Category ",
      accessor: "violation",
      cell: (data: any) => {
        return (
          <Chip
            sx={styles.voilationChip}
            label={
              <>
                <Box>
                  <Typography sx={styles.outgoing}>
                    Outgoing Data:
                    <span
                      style={styles.outgoingBold}
                    >{`${data}`}</span>
                  </Typography>
                </Box>
              </>
            }
          />
        );
      },
    },
    {
      id: 3,
      header: "Source",
      accessor: "source",
    },
    {
      id: 4,
      header: "Engine ",
      accessor: "engine",
      cell: (data: any) => {
        return (
          <Chip
            sx={styles.chip}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    {
      id: 5,
      header: "Conversation ID",
      accessor: "conversationalId",
      cell: (data: any) => {
        return (
          <Typography sx={styles.conversationText}>
            {data.slice(0, 10) + " ..."}
          </Typography>
        );
      },
    },
    {
      id: 6,
      header: "User Email",
      accessor: "user",
      cell: (data: any) => {
        return (
          <Typography sx={styles.email}>
            {data}
          </Typography>
        );
      },
    },
    {
      id: 7,
      header: "Severity",
      accessor: "severity",
      cell: (data: any) => {
        return (
          <Chip
            label={data}
            sx={{
             ...styles.sverityChip,
              color:
                data === "Medium"
                  ? Colors.brown
                  : data === "Critical"
                  ? Colors.darkBrown
                  : Colors.defaultBrown,
              bgcolor:
                data === "Medium"
                  ? Colors.primaryWhite
                  : data === "Critical"
                  ? Colors.secondaryWhite
                  : Colors.defaultWhite,
              p: 0,
            }}
            icon={
              <CircleIcon
                sx={{
                  ...styles.Icon,
                  color:
                    data === "Medium"
                      ? `${Colors.brown} !important`
                      : data === "Critical"
                      ? `${Colors.darkBrown} !important`
                      : data === "High"
                      ? `${Colors.orange} !important`
                      : `${Colors.defaultBrown} !important`,
                  
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 8,
      header: "Status",
      accessor: "status",
    },
    {
      id: 9,
      header: "Chat",
      accessor: "chat",
    },
  ];

  return (
    <Box>
      <ExportPage />
      <IssuesHeader />
      <Grid container sx={styles.issueGrid}>
        <CustomDropdown
          dropdownData={FILTERS_DROPDOWN}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleDeleteOption={handleDeleteOption}
          thead={true}
        />
        <CustomTable
          rows={filteredTableRows.slice(
            (currentPage - 1) * rowsPerPage,
            currentPage * rowsPerPage
          )}
          column={ISSUES_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
          isTableDate={true}
          issues={false}
        />
        {
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            filteredTableRows={filteredTableRows}
            rowsPerPage={rowsPerPage}
          />
        }
        <CustomDialog
          thead={"issue"}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Grid>
    </Box>
  );
}

export default Issues;
