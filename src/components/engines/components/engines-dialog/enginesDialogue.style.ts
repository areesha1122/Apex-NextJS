export const styles = {
  settingModel : {
    "span" :{
      fontWeight: "600",
    },
    '& .MuiDialog-paper' : {
      padding: "6px 0px",
      maxWidth: "591px",
      width: "100%",
      position: "unset",
      maxHeight:"98%",
      height:"auto",
      margin: "0 9px",
      borderRadius: "10px",
    },
  },
  submitBtn : {
    bgcolor: "#027A48",
    borderRadius: "8px",
    color: "#fff",
    textTransform: "capitalize",
    padding:"8px 15px",
    '&:hover': {
      backgroundColor: "#027A48 !important",
    }
  },
  modelMultiSelect :{
    '& .MuiSelect-select' : {
      padding: "11px 0px",
    }
  },
  modelForm : {
    marginTop: "37px",
    '& .MuiInputBase-root:before' :{
      borderBottom: "unset !important",
    },
    '& .MuiInputBase-root:after' : {
      borderBottom: "unset !important",
    }
  },
  closeBtn : {
    border: "1px solid #D0D5DD",
    borderRadius: "8px",
    color: "#344054",
    textTransform: "capitalize",
    marginRight: "16px" ,
    padding:"7px 16px"
  },
  deleteBtn : {
    bgcolor: "rgba(0, 0, 0, 0.08)",
    borderRadius: "8px", 
    color: "rgba(0, 0, 0, 0.87)", 
    textTransform: "capitalize",
    padding:"8px 16.4px",
    marginBottom : {sm:"0px", xs:"10px"}
  },
  actionModel : {
    marginTop: "35px"
  },
  itegSetting : {
    fontSize: "14px",
    marginRight: "10px" 
  },
  row : {
    display : "flex"
  },
  modelFormInner : {
    marginBottom: "10px"
  },
  modelFormLable : {
    fontSize: "14px",
    paddingBottom: "10px"
  },
  engine : { 
    display: "flex",
    alignItems: "center", 
    border: "1px solid #D0D5DD", 
    borderRadius: "8px", 
    "& .MuiOutlinedInput-notchedOutline" :{
      border:"none",
    },
    "& .MuiInputBase-root" :{
      paddingLeft:"0px"
    },
    "& .MuiInputBase-input" : {
      padding: "11px 11px",
    }
  },
  engineInput : {
    padding: "7px 15px", 
    width: "100%" 
  },
  nameInput : { 
    border: "1px solid #D0D5DD",
    borderRadius: "8px", 
    padding: "7px 15px", 
    width: "100%" 
  },
  models : { 
    fontSize: "14px", 
    paddingBottom: "10px"
  },
  disable : { 
    padding: "7px 15px", 
    width: "100%", 
    border: "1px solid #D0D5DD", 
    borderRadius: "8px" 
  },
  enable : { 
    fontSize: "14px", 
    paddingBottom: "10px" 
  },
  selected : { 
    borderRadius: "8px", 
    padding: "0px 15px", 
    width: "100%" 
  },
  selectedChip : {
    borderRadius:"8px", 
    color:"#667085"
  },
  box_row : {
    display: "flex",
    justifyContent: {
      sm: "space-between",
      xs: "space-between",
    },
  },
  modelImg : {
    marginLeft :"11px"
  },
  settingFieldColumn :{
    paddingTop:"10px !important"
  },
  settingModelRow : {
    marginTop : "9px"
  }
 
}