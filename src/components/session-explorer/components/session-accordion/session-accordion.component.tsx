import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {styles} from "./session-accordion.style";
import useSessionAccordion from "./use-session-accordion.hook";
import Image from "next/image";
import gptName from "@/common/assets/images/gpt.svg";
import chatGpt from "@/common/assets/images/chatgpt.svg";

export const SessionAccordion = () => {
  const { itemStates, copyToClipboard, SESSION_ACCORDION_DATA } =
    useSessionAccordion();

  return (
    <Box>
      {SESSION_ACCORDION_DATA.map((items: any, index: any) => {
        return (
          <React.Fragment key={items.id}>
            <Grid item xs={1}>
              <Grid
                container
                spacing={2}
               
                sx={styles.sessionGrid}
                key={items.id}
              >
                <Grid item xs={1.4}>
                  <Image
                    src={gptName}
                    alt=""
                    style={styles.gptImg}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography>{items.question}</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={styles.desc}
              >
                <Grid item xs={1.4}>
                  <Image
                    src={chatGpt}
                    alt=""
                    
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography>{items.answer}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Box onClick={() => copyToClipboard(items.answer, index)}>
                    {itemStates[index].isCopied ? (
                      <p>
                        {itemStates[index].msg && (
                          <>
                            <DoneOutlinedIcon sx={styles.outlineIcon} />
                          </>
                        )}
                      </p>
                    ) : (
                      <ContentPasteIcon
                        sx={styles.pasteIcon}
                      />
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}
    </Box>
  );
};
