export const styles = {
  sessionTableRow: {
    px: "3.5%",
    mt: 8,
    table: {
      tbody: {
        tr: {
          td: {
            "&:nth-child(2)": {
              width: "50%",
              "@media screen and (max-width:1300px)": {
                width: "unset",
              },
            },
          },
        },
      },
    },
  },

  ebgineBtn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { sm: "unset", xs: "column" },
    "& .MuiInput-root": {
      "&:before": {
        borderBottom: "none !important",
      },
    },
    "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: "none !important",
    },
  },
  engineUsage: {
    padding: "16px 17px 25px",
    boxShadow: "0px 1px 3px #8080804a",
    marginBottom: { md: "unset", xs: "10px" },
    "& .MuiSelect-select": {
      fontWeight: 500,
    },
  },
  sessionEngineFilter: {
    padding: "11px 10px",
    borderRadius: "8px",
    "& .MuiSelect-select": {
      padding: "0 18px",
    },
  },
  sessionGrpahsRow: {
    px: "3.5%",
    my: 10,
    gap: "9px",
    justifyContent: "space-between",
  },
  searchBox: {
    textAlign: "center",
    padding: { sm: "0 20px", xs: "0 13px" },
    width: { sm: "65%", xs: "100%" },
    margin: "auto",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  },
  searchText: {
    color: "#344054",
    padding: "20px 0px",
  },
  searchInner: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "8px",
    padding: "1px 14px",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    marginTop: "5px",
  },
  searchInput: {
    width: "100%",
    color: "#667085",
    fontWeight: 500,
    border: "none",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      color: "#667085",
      fontWeight: 500,
      opacity: "unset",
    },
  },
  session_filters: {
    marginTop: "20px",
    pl: { sm: "3.5%", xs: "3.4%" },
    pr: { sm: "3.5%", xs: "6%" },
    marginBottom: "15px",
    marginLeft: "0px",
    gap: { sm: "15px", xs: "5px" },
    "& .MuiSelect-select": {
      padding: "0 0",
      fontSize: "12px !important",
    },
    "& .MuiFormLabel-root": {
      fontSize: "12px",
      fontWeight: 600,
    },
    "& .MuiInputBase-inputAdornedEnd": {
      padding: "14px 11px",
      fontSize: "12px",
    },
    "& .MuiInputBase-adornedEnd": {
      borderRadius: "8px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "18px",
      position: "unset",
    },
    "& .MuiMenuItem-root": {
      fontSize: " 12px !important",
    },
  },
  datePicker: {
    paddingLeft: "0px !important",
    maxWidth: "unset !important",
    position : "relative",
    "& .MuiInputLabel-shrink": {
      top: "2px",
      margin: "0 0 0 0 !important",
    },
    "& .MuiFormLabel-root": {
      margin: "-2px 0 0 22px",
    },
    "& .MuiInputBase-formControl": {
      flexDirection: "row-reverse",
    },
    "& .MuiTextField-root": {
      minWidth: "unset",
    },
  },
  engineFilter: {
    maxWidth: " unset !important",
    paddingLeft: "0px !important",
    flexBasis: { sm: "unset !important", xs: "100% !important" },
    "& .css-a0md3q-MuiStack-root": {
      flexWrap: " unset",
    },
  },
  formControl: {
    width: "100%",
    marginTop: "2px",
  },
  engine: {
    fontSize: "12px",
  },
  chip: {
    color: "#027A48",
    bgcolor: "#ECFDF3",
    borderRadius: "5px",
  },
  user: {
    paddingLeft: "0px !important",
    maxWidth: "unset !important",
    flexBasis: { sm: "unset !important", xs: "100% !important" }
  },
  userFormControl: {
    paddingTop: "3.1px",
  },
  userText: {
    fontSize: "12px",
  },
  enginItem: {
    fontSize: "12px",
    justifyContent: "space-between",
  },
  iconBtn: {
    padding: "0px",
  },
  closeIcon: {
    fontSize: "16px",
  },
  clearAll: {
    fontSize: "14px",
    color: "#667085",
    cursor: "pointer",
  },
  clearBtnGrid: {
    paddingLeft: "0px !important",
  },
  GridMain: {
    px: "3.5%",
    my: 10,
    gap: "9px",
    justifyContent: "space-between",
  },
  GridShadow: {
    padding: "16px 17px 25px",
    boxShadow: "0px 1px 3px #8080804a",
    marginBottom: { md: "unset", xs: "10px" },
  },
  BoxStyling: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { sm: "unset", xs: "column" },
    "@media screen and (max-width:1300px)": {
      alignItems: "flex-start",
    },
  },
  SessionHeader: {
    fontWeight: "600",
    fontSize: { sm: "16px", xs: "14px" },
    color: "#344054",
  },
  SessionText: {
    color: "#344054",
    fontWeight: 500,
  },

  SessionEngine: {
    mx: { lg: 2, md: 0 },
    ml: { lg: 2, md: 1, sm: 0 },
    boxShadow: "0px 1px 3px #8080804a",
    marginBottom: { md: "unset", xs: "10px" },
  },
  SessionByEngine: {
    padding: "14px 17px 25px",
    boxShadow: "0px 1px 3px #8080804a",
    marginBottom: { lg: "unset", sm: "10px" },
  },
  SessionTitle: {
    color: "#344054",
    fontWeight: "600",
    fontSize: "16px",
    pb: 8,
    paddingTop: "3px",
    "@media screen and (max-width:1300px)": {
      fontSize: "12px",
    },
  },
  TextStyling: {
    color: "#344054",
    padding: "0px 0px 20px 0px",
  },
  SessionSpan: {
    color: "#344054",
    fontWeight: "600",
    "@media screen and (max-width:1300px)": {
      fontSize: "14px",
    },
  },
  userName: {
    color: "#667085",
  },
  active: {
    paddingBottom: "10px",
  },
  engineOverTime : { 
    width: { sm: "32%", xs: "45%" }
 },
};
