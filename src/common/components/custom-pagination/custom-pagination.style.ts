export const styles = {
    paginationRow : {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: "0px 0px 5px 5px",
        boxShadow: "0px 1px 3px #808080d6",
        marginTop: "-1px",
        padding: "7px 10px",
        zIndex: "9",
        position:"relative",
        background:"#fff"
    },
    paginationbtns : {
        m: 2,
        p: 0,
        px: 2,
        textTransform: "inherit",
        color: "#667085",
        fontSize: "14px",
        border: "1px solid #D0D5DD",
        borderRadius:"8px",
        padding:"5px 17px !important"
    },
    back : { 
        mr: 1, 
        fontSize: "18px" 
    },
    pagination : {
        "& .MuiButtonBase-root": {
          color: "#667085",
          fontSize: "14px",
          fontWeight: "500",
          border: "none",
        },
        "& .Mui-selected": {
          color: "#344054",
          border: "none",
        },
        my: 2,
    },
    next :{ 
        ml: 1, 
        fontSize: "18px" 
    }
}