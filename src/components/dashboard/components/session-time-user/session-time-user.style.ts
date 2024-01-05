export const SessionTimeStyle = {
  SessionTimeMain: {
    display: "flex",
    justifyContent: "space-between",
  },

  SessionOvertimeBoxComponent: {
    color: "#344054",
    fontWeight: 500,
    display: "flex",
    height: "50px",
    alignItems: "center",
  },
  SessionOverTimeBox: {
    fontSize: { sm: "42px", xs: "29px" },
    flexDirection: { sm: "unset", xs: "column" },
  },

  SessionTrendingValue: {
    color: "#039855",
    backgroundColor: "#ecfdf3",
    borderRadius: "16px",
    display: "flex",
    padding: "4px",
    fontSize: "12px",
    marginLeft: "2px",
  },
  SessionOverTimeData: {
    fontSize: { sm: "42px", xs: "29px" },
  },
  TrendingIcon: {
    color: "#039855",
    marginRight: "4px",
    fontSize: "18px",
  },
  SessionUser: {
    color: "#344054",
    fontWeight: 600,
    fontSize: "16px",
  },
  Letterspacing: {
    letterSpacing: "-2px",
  },
  SessionUserData: {
    color: "#344054",
    fontWeight: 500,
    display: "flex",
    height: "50px",
    alignItems: "center",
  },
  SessionUserValue: {
    color: "#667085",
    display: "flex",
    fontSize: "12px",
    padding: "4px",
  },
  DashboardChart: {
    height: "160px",
    width: "100%",
    "& .echarts-for-react": {
      margin: "0 0 0 -34px",
      width: "120%",
    },
  },
  "@media screen and (min-width: 1600px)": {
    dashboardChart: {
      "& .echarts-for-react": {
        width: "119%",
        margin: "0px 0 0 -9%",
        "[@media screen and (max-width: 900px)]": {
          width: "109%",
          margin: "0 auto",
        },
        "[@media screen and (max-width: 767px)]": {
          width: "115%",
          margin: "0 0 0 -17px",
        },
      },
    },
  },
};
