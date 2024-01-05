import Colors from "@/common/constants/color.constant";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import useAccordion from "./use.accordion.hook";
import {styles} from "./accordian.style";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={styles.accordianArrow} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, .05)",
  flexDirection: "row-reverse",
  border: "none",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions({ id, title, component }: any) {
  const { expanded, handleChange } = useAccordion({ title });

  return (
    <div key={id}>
      <Accordion expanded={expanded === title} onChange={handleChange(title)}>
        <AccordionSummary id={title} sx={styles.accordianTitleRow}>
          <Typography sx={{...styles.accordianTitle, color: Colors.primary}}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordianDetail}>{component}</AccordionDetails>
      </Accordion>
    </div>
  );
}
