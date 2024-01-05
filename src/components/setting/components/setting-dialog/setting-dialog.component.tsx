// SettingDialogue.tsx

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
import "../../setting.style.css";
import { useSettingDialog } from "./use-setting-dialog.hook";

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
      <Dialog open={open} onClose={handleClose} className="setting-model">
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justifyContent="space-between">
              <Grid item sm={7} xs={12}>
                <Typography sx={{ color: "#344054" }}>
                  {selectedItemId?.provider} Settings
                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      sm: "space-between",
                      xs: "space-between",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#344054",
                      fontSize: "14px",
                    }}
                  >
                    Integration Active
                  </Typography>
                  <FormControlLabel
                    control={
                      <Controller
                        name="IntegrationActive"
                        control={control}
                        render={({ field }) => <CustomSwitch {...field} />}
                      />
                    }
                    label=""
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={5} direction="column">
              {/* Modal */}
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Typography variant="body1">Modal</Typography>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <Image
                            src={GPT}
                            alt="img"
                            style={{
                              marginRight: "8px",
                            }}
                          />
                        ),
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Name */}
              <Grid item xs={12}>
                <Typography variant="body1">Name</Typography>
                <Controller
                  name="provider"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  )}
                />
              </Grid>

              {/* API Key */}
              <Grid item xs={12}>
                <Typography variant="body1">API Key</Typography>
                <Controller
                  name="apiKey"
                  control={control}
                  render={({ field }) => (
                    <TextField
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

              {/* Modals */}
              <Grid item xs={12}>
                <Typography variant="body1">Modals</Typography>
                <Controller
                  name="Modals"
                  control={control}
                  render={({ field }) => (
                    <TextField
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
                                sx={{ borderRadius: "8px" }}
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

              {/* Enabled To */}
              <Grid item xs={12}>
                <Typography variant="body1">Enabled To</Typography>
                <Controller
                  name="EnabledTo"
                  control={control}
                  render={({ field }) => (
                    <TextField
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
                                sx={{ borderRadius: "8px" }}
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
            {/* Submit Button */}

            <Grid
              container
              sx={{
                mt: 8,
                textAlign: { sm: "unset", xs: "right" },
              }}
            >
              <Grid item sm={4} xs={12}>
                <Button
                  onClick={handleClose}
                  sx={{
                    bgcolor: "#FEF3F2",
                    borderRadius: "8px",
                    color: "#B42318",
                    textTransform: "capitalize",
                    marginBottom: { sm: "0px", xs: "10px" },
                  }}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item sm={8} textAlign="right" xs={12}>
                <Button
                  onClick={handleClose}
                  sx={{
                    border: "1px solid #D0D5DD",
                    borderRadius: "8px",
                    color: "#344054",
                    textTransform: "capitalize",
                    marginRight: "10px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    bgcolor: "#027A48",
                    borderRadius: "8px",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
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
