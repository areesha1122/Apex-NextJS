import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { Issue } from "../Issue/issue.component";
import { Description } from "../description/description.component";
import { UseBy } from "../use-by/use-by.component";
import { PolicyAccordian } from "../../model-accordian";
import { ModalDataStyle } from "./modal-data.style";

export const ModelData = () => {
  const PolicyData = [
    {
      id: 1,
      title: "Description",
      desc: Description,
    },
    {
      id: 2,
      title: "Used by",
      desc: UseBy,
    },
    {
      id: 3,
      title: "Issues over time",
      desc: Issue,
    },
  ];
  return (
    <>
      <Grid container sx={ModalDataStyle.ModalGrid}>
        <Grid item xs={5}>
          <Typography sx={ModalDataStyle.ModalTypo}>Access Data</Typography>
        </Grid>
        <Grid item xs={5} sx={ModalDataStyle.ModalSwitch}>
          <Typography sx={ModalDataStyle.ModalHeader}>Active</Typography>
          <CustomSwitch />
        </Grid>
      </Grid>

      <Grid container sx={ModalDataStyle.ModalContainer}>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Action</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>Prevent</Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Source</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            APEXChat, APEXAPI
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Engines</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            Azure Marketing
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Severity Level</Typography>
        </Grid>
        <Grid item xs={8}>
          <Chip
            label="Medium"
            sx={ModalDataStyle.ModalChip}
            icon={<CircleIcon sx={ModalDataStyle.ModalCircle} />}
          />
        </Grid>
      </Grid>

      <Box sx={ModalDataStyle.ModalData}>
        {PolicyData.map((item: any) => (
          <Box key={item.id}  sx={ModalDataStyle.ModalAccordin}>
            <PolicyAccordian
              id={item.id}
              title={item.title}
              DescCom={item.desc}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
