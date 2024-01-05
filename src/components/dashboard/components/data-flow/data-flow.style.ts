export const DataFlowStyles = {
  DataFlowMain: {
    marginBlock: "8px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxShadow: "0px 1px 3px #8080804a",
    padding: "16px 17px 25px"
  },
  DataFlowTextComponent: {
    color: "#344054",
    fontWeight: "600",
    display: "flex",
    top: "4px",
    position: "absolute",
  },
  DataFlowChart: {
    height: "250px",
    "@media screen and (max-width:600px)" : {
      marginTop:"23px"
    }
  },
  DataFlowText: {
    pb: 4,
    mt: 3,
    bottom: { lg: 217, md: 205 },
  },
};
