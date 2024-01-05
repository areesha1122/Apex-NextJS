"use client";

import { useState } from "react";

export default function useFeedback({ setFeedbackModal }: any) {
  const [feedbackSubmit, setFeedbackSubmit] = useState(false);

  const handleClickOpen = () => {
    setFeedbackModal(true);
  };

  const handleClose = () => {
    setFeedbackModal(false);
    setFeedbackSubmit(false);
  };

  const submitHandler = () => {
    setFeedbackSubmit(true);
  };

  return {
    handleClickOpen,
    feedbackSubmit,
    submitHandler,
    handleClose,
  };
}
