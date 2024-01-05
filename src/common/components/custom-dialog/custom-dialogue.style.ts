export const styles = {
    sec : {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        padding: "15px 24px",
    },
    collapseBtn :{ 
        color: "#344054",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        border: "1px solid #D0D5DD",
        padding: "8px 14px",
        borderRadius: "10px",
        marginRight: "10px",
        "&:hover" :{
            backgroundColor: "#12B76A",
            color: "#fff",
            border: "1px solid #12B76A",
        }
    },
    icon :{ 
        fontSize: "12px", 
        marginRight: "6px" 
    },
    expand : { 
        fontSize: "16px" 
    },
    btns : {
        display: "flex",
        color: "#667085",
        textDecoration: "none",
        border: "1px solid #D0D5DD",
        padding: "10px 10px",
        borderRadius: "10px",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: "600",
        alignItems: "center",
    },
    doneIcon :{ 
        marginRight: "6px", 
        fontSize: "21px" 
    },
    policyModel : { 
        padding: "13px 0" ,
        justifyContent : "center"
    },
    closeCursour : { 
        cursor: "pointer" 
    }
}