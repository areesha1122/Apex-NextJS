"use client";

import GPT from "@/common/assets/images/gpt.svg";
import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Controller } from "react-hook-form";
import { useSettingDialog } from "./use-engines-dialog.hook";
import { styles } from "./enginesDialogue.style";
import Colors from "@/common/constants/color.constant";

export default function SettingDialogue({
  handleClose,
  open,
  selectedItemId,
}: any) {
  const {
    showAPIKey,
    setShowAPIKey,
    handleDelete,
    onSubmit,
    handleSubmit,
    control,
  } = useSettingDialog({ selectedItemId });
  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={styles.settingModel}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justifyContent="space-between">
              <Grid item sm={7} xs={12}>
                <Typography sx={{ color: Colors.dark }}>
                  {selectedItemId?.provider} Settings
                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box sx={styles.box_row}>
                  <Typography
                    sx={{ color: Colors.primary, ...styles.itegSetting }}
                  >
                    Integration Active
                  </Typography>
                  <FormControlLabel
                    control={
                      <Controller
                        name="IntegrationActive"
                        control={control}
                        render={({ field }: any) => <CustomSwitch {...field} />}
                      />
                    }
                    label=""
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={5}
              direction="column"
              sx={styles.settingModelRow}
            >
              <Grid item xs={12} sx={styles.settingFieldColumn}>
                <Typography
                  variant="body1"
                  sx={{ ...styles.modelFormLable, color: Colors.dark }}
                >
                  Modal
                </Typography>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }: any) => (
                    <TextField
                      disabled
                      sx={styles.engine}
                      {...field}
                      variant="outlined"
                      fullWidth
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <Image src={GPT} alt="img" style={styles.modelImg} />
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={styles.settingFieldColumn}>
                <Typography
                  variant="body1"
                  sx={{ ...styles.modelFormLable, color: Colors.dark }}
                >
                  Name
                </Typography>
                <Controller
                  name="provider"
                  control={control}
                  render={({ field }: any) => (
                    <TextField
                      sx={styles.engine}
                      {...field}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={styles.settingFieldColumn}>
                <Typography
                  variant="body1"
                  sx={{ ...styles.modelFormLable, color: Colors.dark }}
                >
                  API Key
                </Typography>
                <Controller
                  name="apiKey"
                  control={control}
                  render={({ field }: any) => (
                    <TextField
                      sx={styles.engine}
                      {...field}
                      type={showAPIKey ? "text" : "password"}
                      variant="outlined"
                      fullWidth
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => setShowAPIKey(!showAPIKey)}
                          >
                            {showAPIKey ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={styles.settingFieldColumn}>
                <Typography
                  variant="body1"
                  sx={{ ...styles.modelFormLable, color: Colors.dark }}
                >
                  Modals
                </Typography>
                <Controller
                  name="Modals"
                  control={control}
                  render={({ field }: any) => (
                    <TextField
                      disabled
                      sx={styles.engine}
                      {...field}
                      variant="outlined"
                      fullWidth
                      select
                      size="small"
                      SelectProps={{
                        multiple: true,
                        renderValue: (selected: any) => (
                          <div>
                            {selected.map((value: any) => (
                              <Chip
                                key={value}
                                label={value}
                                sx={{
                                  ...styles.selectedChip,
                                  color: Colors.secondary,
                                }}
                              />
                            ))}
                          </div>
                        ),
                      }}
                    >
                      <MenuItem value="ChatGPT">ChatGPT</MenuItem>
                      <MenuItem value="Modal2">Modal 2</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sx={styles.settingFieldColumn}>
                <Typography
                  variant="body1"
                  sx={{ ...styles.modelFormLable, color: Colors.dark }}
                >
                  Enabled To
                </Typography>
                <Controller
                  name="EnabledTo"
                  control={control}
                  render={({ field }: any) => (
                    <TextField
                      disabled
                      sx={styles.engine}
                      {...field}
                      variant="outlined"
                      fullWidth
                      select
                      size="small"
                      SelectProps={{
                        multiple: true,
                        renderValue: (selected: any) => (
                          <div>
                            {selected.map((value: any) => (
                              <Chip
                                key={value}
                                label={value}
                                sx={{
                                  ...styles.selectedChip,
                                  color: Colors.secondary,
                                }}
                                onDelete={(event) =>
                                  handleDelete(event, value, field)
                                }
                              />
                            ))}
                          </div>
                        ),
                      }}
                    >
                      <MenuItem value="Apex User">Apex User</MenuItem>
                      <MenuItem value="Option2">Option 2</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                mt: 8,
                textAlign: { sm: "unset", xs: "right" },
              }}
            >
              <Grid item sm={4} xs={12}>
                <Button disabled sx={styles.deleteBtn}>
                  Delete
                </Button>
              </Grid>
              <Grid item sm={8} textAlign="right" xs={12}>
                <Button onClick={handleClose} sx={styles.closeBtn}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={styles.submitBtn}
                  className="submitBtn"
                >
                  Submit Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
