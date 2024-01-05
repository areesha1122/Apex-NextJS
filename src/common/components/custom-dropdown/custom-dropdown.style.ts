export const styles = {
    searchFilter :{
        margin: "20px 0", 
        width: "100%",
        "& .css-zzcvco-MuiTypography-root":{
            fontSize: "12px",
        },
        "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select" : {
            minHeight: "unset",
        }
    },
    formControl : {
        display: "flex",
        flexDirection: { md: "row", sm: "column" },
        justifyContent: "space-between",
    },
    filterGrid : {
        gap: "10px",
        flexWrap: { md: "unset", xs: "wrap" },
        marginBottom: { md: "0px", xs: "10px" },
        width: { lg: "72%", md: "100%" },
    },
   
    label : { 
        fontSize: "12px", 
        lineHeight: "0.99", 
        fontWeight: 600 
    },
    itemText : {
        width: "70px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "12px",
    },
    options : {
        height: "0px",
        borderRadius: "10px",
        padding: "21px 6px",
        color: "#667085",
        fontWeight: "500",
        "& .MuiSvgIcon-root" : {
            position: "unset",
            width: "17px",
            marginLeft:"8px"
        }
    },
    menuItems : {
        fontSize: "14px",
        color: "#1D2939",
        fontWeight: 500,
        justifyContent:"space-between"
    },
    close : { 
        fontSize:"16px"
    },
    selected : { 
        fontSize: "12px", 
        textTransform: "inherit", 
        p: 0 
    },
    filterSearch : {
        marginTop: { md: "0px", sm: "10px" },
        textAlign: { md: "unset", xs: "center" },
        borderRadius: "8px",
        "& .MuiInputBase-root" : {
            borderRadius: "8px",
        }, 
    },
    selectedCheckText : {
        width:"100px",
        textOverflow: "ellipsis" , 
        overflow:"hidden",
        fontSize:"14px"
    },
    cross : {
        padding:"0px"
    },
    "& .css-f005df-MuiButtonBase-root-MuiMenuItem-root" : {
        fontSize: "12px",
    },
    "@media screen and (max-width:820px)" :{
        "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root" :{
            width: "50%",
        }
    },
        
    "@media screen and (max-width:700px)" :{
        "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root" :{
            width: "100%",
        }
    }
}



