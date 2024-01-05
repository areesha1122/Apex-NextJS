import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import {styles} from "./model-accordian.style";

export const PolicyAccordian = ({ id, title, DescCom }: any) => {
    const [expanded, setExpanded] = React.useState<any>(id);
    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : true);
    };
    return (
        <>
            <Accordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={id}
                    sx={styles.accordian}
                >
                    <Typography sx={styles.accordianTitle}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={styles.accoridian_desc}>
                    {<DescCom/>}
                </AccordionDetails>
            </Accordion>
        </>
    )
}