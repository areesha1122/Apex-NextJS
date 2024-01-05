import { ModelData } from "@/components/policies/components/model-data/components/model-data/model-data.component";
import { SessionAccordion } from "@/components/session-explorer/components/session-accordion/session-accordion.component";
import CloseIcon from "@mui/icons-material/Close";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useState } from "react";
import ModelAccordian from "../model-accordion/model-accordion.component";
import { styles } from "./custom-dialogue.style";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomDialog({ thead, openModal, setOpenModal }: any) {
  const [expandValue, setExpandValue] = useState(true);

  return (
    <>
      <BootstrapDialog
        onClose={() => setOpenModal(false)}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        className={`${expandValue ? "demo" : "collapse"} custom-dialogue_class`}
      >
        {
          thead === "policy" ?
            null:
            <Box sx={styles.sec}>
            <Box
              sx={styles.collapseBtn}
              onClick={() => setExpandValue(!expandValue)}
            >
              {expandValue ? (
                <OpenInFullIcon sx={styles.icon} />
              ) : (
                <CloseFullscreenIcon sx={styles.icon} />
              )}
              <Typography sx={styles.expand}>
                {" "}
                {expandValue ? "Expand" : "Collapse"}
              </Typography>
            </Box>
            <CloseIcon
              onClick={() => {
                setOpenModal(false);
                setExpandValue(true);
              }}
              sx={styles.closeCursour}
            />
          </Box>
        }
       
        <DialogContent dividers>
          {thead === "policy" && <ModelData />}
          {thead === "session" && <SessionAccordion />}
          {thead === "issue" && <ModelAccordian />}
        </DialogContent>
        {thead !== "policy" && (
          <Grid container spacing={2} sx={styles.policyModel} gap="5px">
            {thead !== "session" && (
              <Grid item xs={8} sm={2.1}>
                <Link href="#" style={styles.btns}>
                  <DoneAllIcon sx={styles.doneIcon} />
                  Resolve
                </Link>
              </Grid>
            )}
            <Grid item xs={8} sm={3.5}>
              <Link href="#" style={styles.btns}>
                <MailOutlineIcon sx={styles.doneIcon} />
                Share via Email
              </Link>
            </Grid>
          </Grid>
        )}
      </BootstrapDialog>
    </>
  );
}
