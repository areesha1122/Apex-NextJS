"use client";

import ExportIcon from "@/common/assets/images/download.svg";
import { Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { ExportPageStyling } from "./export-page.style";
import useExportPage from "./use-export-page.hook";
/**
 * Renders the Export Button component
 * This component Export Table Data
 * @returns The Export Button
 */

function ExportPage() {
  const { handleGenerateExcel, reportTemplateRef } = useExportPage();

  return (
    <Grid ref={reportTemplateRef} container sx={ExportPageStyling.TemplateRef}>
      <Grid item xs={12} sx={ExportPageStyling.MainGrid}>
        <IconButton
          sx={ExportPageStyling.IconButton}
          className="border border-radius"
          onClick={handleGenerateExcel}
        >
          <Image src={ExportIcon} alt="export-icon" />
          <Typography
            className="tertiary-title"
            sx={ExportPageStyling.TertiaryTitle}
          >
            Export
          </Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ExportPage;
