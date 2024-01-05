"use client";

import FeedbackDialog from "@/common/components/feedback-dailog/feedback-dialog.component";
import { styles } from "@/common/styles/global.style";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import useAuthenticatedNav from "../../use-authenticated-nav.hook";

/**
 * Renders the Feedback  Component
 * @returns the Feedback from user
 */

function Feedback() {
  const { feedbackModal, setFeedbackModal } = useAuthenticatedNav();

  return (
    <Box sx={styles.FeedbackMain}>
      <IconButton className="feedback-main">
        <TextsmsOutlinedIcon className="feedback-icon" />
        <Typography
          onClick={() => setFeedbackModal(true)}
          className="feedback-text"
        >
          Feedback
        </Typography>
        <FeedbackDialog
          feedbackModal={feedbackModal}
          setFeedbackModal={setFeedbackModal}
        />
      </IconButton>
    </Box>
  );
}

export default Feedback;
