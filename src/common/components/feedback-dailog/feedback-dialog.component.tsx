import GoodIcon from "@/common/assets/images/good.svg";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {styles} from "./feedback-dialog.style";
import useFeedback from "./use-feedback.hook";

export default function FeedbackDialog({
  feedbackModal,
  setFeedbackModal,
}: any) {
  const { feedbackSubmit, submitHandler, handleClose } = useFeedback({
    setFeedbackModal,
  });

  return (
    <>
      <Dialog
        open={feedbackModal}
        onClose={handleClose}
        sx={styles.feedbackDialog}
      >
        {feedbackSubmit ? (
          <Box sx={styles.thanksBox}>
            <Typography sx={styles.thanksText}>Thank you!</Typography>
            <Image src={GoodIcon} alt="good-icon" />
            <Button onClick={handleClose} sx={styles.closBtn}>
              Close
            </Button>
          </Box>
        ) : (
          <Box>
            <DialogTitle sx={styles.dialogTitle}>
              Please give us feedback
            </DialogTitle>
            <DialogContent>
              <TextareaAutosize
                minRows={7}
                maxRows={10}
                aria-label="textarea"
                placeholder="Let us know"
                style={styles.textArea}
              />
            </DialogContent>
            <DialogActions sx={styles.dialogAction}>
              <Button onClick={handleClose} sx={styles.cancelBtn}>
                Cancel
              </Button>
              <Button onClick={submitHandler} sx={styles.feedbackSubmit}>
                Submit
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </>
  );
}
