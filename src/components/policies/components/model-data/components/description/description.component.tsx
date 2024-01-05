"use client";

import { Typography } from "@mui/material";
import { descriptionData } from "../model-data/modal-data.constants";
import {styles} from "./description.style";

export const Description = () => {
    return (
        <>
            {descriptionData.map((item: any) => (
                <Typography key={item.id} sx={styles.description}>{item.value}</Typography>
            ))}
        </>
    );
}

