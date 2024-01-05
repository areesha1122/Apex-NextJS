"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import Colors from "@/common/constants/color.constant";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
  Box,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  Autocomplete,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import ReactEcharts from "echarts-for-react";
import CustomTable from "../../common/components/custom-table/custom-table.component";
import { SESSION_USER_CHART } from "../dashboard/dashboard.constant";
import {
  ACTIVE_USER_DATA,
  ENGINE_NAMES,
  SESSION_EXPLORER_DATA,
  USER_DATA,
} from "./session-explore.constant";
import { styles } from "./session-explore.style";
import useSessionExplore from "./use-session-explore.hook";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";
import search from "../../common/assets/images/search.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calender from "@/common/assets/images/calendar.svg";

function SessionExplorer() {
  const {
    engineName,
    setEngineName,
    userName,
    handleChange,
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    dateHandler,
    finalData,
    session,
    SessionHandler,
    handleClearAll,
    setUserName,
    startDate,
    endDate,
    setDateRange,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange
  } = useSessionExplore();

  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "Time", accessor: "time" },
    {
      id: 2,
      header: "Engine ",
      accessor: "engineType",
      cell: (data: any) => {
        return (
          <Chip
            sx={{
              color: "#344054",
              border: "1px solid #bdbdbd",
              "&:hover": { border: "1px solid #939291" },
              height: "26px",
            }}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    {
      id: 3,
      header: "Violation",
      accessor: "violation",
      cell: (data: any) => {
        return (
          <Chip
            sx={{ color: "#667085", bgcolor: "#FFFFFF !important" }}
            label={
              <>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#344054" }}
                >
                  <span style={{ fontWeight: 600 }}>{data}</span> violations
                </Typography>
              </>
            }
            icon={
              <WarningAmberIcon
                sx={{
                  color: "#F04438 !important",
                  fontSize: "15px",
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 6,
      header: "Violation Category",
      accessor: "violationCat",
      cell: (data: any) => {
        return (
          <Chip
            sx={{
              border: "1px solid #bdbdbd",
              "&:hover": { border: "1px solid #939291" },
              height: "26px",
              color: "#344054",
            }}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    {
      id: 7,
      header: "Mail",
      accessor: "mails",
      cell: (data: any) => {
        return (
          <Typography sx={{ color: "#1570EF", fontSize: "14px" }}>
            {data}
          </Typography>
        );
      },
    },
  ];

  return (
    <>
      {/* graphs */}
      <Grid container item xs={12} sx={styles.GridMain}>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={3.8}
          className="border border-radius bg-white engine-usage"
          sx={styles.GridShadow}
        >
          <Box sx={styles.BoxStyling}>
            <Typography sx={styles.SessionHeader}>
              Engines Usage over time
            </Typography>
            <FormControl variant="standard" sx={styles.engineOverTime}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                value={session}
                onChange={SessionHandler}
                className="enginDropdown"
              >
                <MenuItem value="All Engines" sx={styles.SessionText}>
                  All Engines
                </MenuItem>
                <MenuItem value="CHAT GPT" sx={styles.SessionText}>
                  CHAT GPT
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="sessionEchart">
            <ReactEcharts option={SESSION_USER_CHART} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={3.8}
          sx={styles.SessionEngine}
          className="border border-radius bg-white"
        >
          <CustomLineChart
            title="Sessions by Engine"
            chartData={SESSION_EXPLORER_DATA}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5.75}
          lg={4}
          className="border border-radius bg-white"
          sx={styles.SessionByEngine}
        >
          <Typography sx={styles.SessionTitle}>Top 5 Active Users</Typography>
          {ACTIVE_USER_DATA.map((item: any) => (
            <Box
              key={item.id}
              className="d-flex justify-between"
              sx={styles.active}
            >
              <Typography sx={styles.SessionSpan}>{item.username}</Typography>
              <Typography sx={styles.userName}>{item.usermail}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
      {/* search */}
      <Box sx={styles.searchBox} className="sesson-search">
        <Typography sx={styles.searchText}>
          Try searching using keywords, session id, engine, user, date range,
          contains issues
        </Typography>
        <Box sx={styles.searchInner} className="session-search-input">
          <Box sx={styles.searchIcon}>
            <Image src={search} alt="" />
          </Box>
          <Autocomplete
            options={allOptions}
            value={searchQuery}
            onChange={handleAutocompleteChange}
            renderInput={(params:any) => (
              <TextField
                {...params}
                size="small"
                type="search"
                placeholder="Search by session id or free text"
                sx={styles.searchInput}
                onChange={handleSearch}
                value={searchQuery}
              />
            )}
          />
        </Box>
      </Box>
      {/* filters */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={styles.session_filters}
      >
        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl sx={styles.formControl}>
            <InputLabel sx={styles.engine}>Engine</InputLabel>
            <Select
              sx={styles.sessionEngineFilter}
              multiple
              value={engineName}
              onChange={(e: any) => setEngineName(e.target.value)}
              input={<OutlinedInput label="Engine" />}
              renderValue={(selected) => (
                <Stack gap={1} direction="row" flexWrap="wrap">
                  {selected.map((value: any) => (
                    <Chip
                      sx={styles.chip}
                      key={value}
                      label={value}
                      onDelete={() =>
                        setEngineName(
                          engineName.filter((item: any) => item !== value)
                        )
                      }
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                    />
                  ))}
                </Stack>
              )}
            >
              {ENGINE_NAMES.map((item: any) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12} sx={styles.user}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label" sx={styles.userText}>
              User
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userName}
              label="User"
              onChange={handleChange}
              renderValue={() => userName}
            >
              {USER_DATA.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {userName === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setUserName("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2} xs={12} sx={styles.datePicker} className="dateRange">
          <Image src={calender} alt="" />
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: any) => {
              setDateRange(update);
            }}
            placeholderText="Time Range"
            isClearable={true}
          />
        </Grid>
        <Grid item sm={2} xs={12} sx={styles.clearBtnGrid}>
          <Typography onClick={handleClearAll} sx={styles.clearAll}>
            Clear All
          </Typography>
        </Grid>
      </Grid>
      <Box sx={styles.sessionTableRow}>
        <CustomTable
          rows={finalData}
          column={SESSION_EXPLORE_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={false}
        />
        <CustomDialog
          thead={"session"}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Box>
    </>
  );
}

export default SessionExplorer;
