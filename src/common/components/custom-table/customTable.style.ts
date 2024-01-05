export const styles = {

    tableSec : { 
        width: "100%" 
    },
    tableSecInner :{
        table: {
            tr: {
              '&:last-child': {
                td: {
                  borderBottom: 'none'
                }
              }
            }
          }
    },
    policySec : {
        marginBottom : "12px"
    },
    table : {
        minWidth: 750,
    },
    switchCell : { 
        bgcolor: "#F9FAFB" 
    },
    headcell : {
        bgcolor: "#F9FAFB",
        py: 2,
        color: "#667085",
        fontWeight: 500,
        fontSize: "12px",
    },
    tableRow : {
        cursor: "pointer",
        "&:hover": {
          bgcolor: "#F9FAFB !important",
        },
    },
    tableCheckBox : { 
        padding: "0px 24px" 
    },
    column : {
        py: 4.3,
        fontSize: "14px",
    },
    visibleRow : {
        height: "25vh",
        bgcolor: "#F9FAFB"
    },
    tableBox : {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        flexDirection:"column",
    },
    issueTableCell :{
        "&:first-child" :{
            color: "#667085",
        }
    },
    noRecord : {
        color:"#667085", 
        fontSize:"14px",
        fontWeight:700,
        paddingTop:"10px"
    },
    policyTable :{
        tr : {
            td : {
                "&:nth-child(2)" : {
                    width: "38%",
                    "@media screen and (max-width:767px)" : {
                        width: "unset",
                    }
                },
                "&:nth-child(5)" : {
                    width: "26%",
                    "@media screen and (max-width:767px)" : {
                        width: "unset",
                    }
                }
            }
        }
    }
}