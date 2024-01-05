import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./custom-dropdown.style";
import { useCustom } from "./use-custom-dropdown.hook";

/**
 * Take in dropdownData and return a dropdown
 * @param { dropdownData, searchQuery, setSearchQuery, selectedFilters, setSelectedFilters } props
 * @returns dropdown component
 */

export const CustomDropdown = ({
  dropdownData,
  searchQuery,
  setSearchQuery,
  selectedFilters,
  setSelectedFilters,
  thead,
}: any) => {
  const { handleAutocompleteChange, allOptions } = useCustom({
    setSearchQuery,
  });

  return (
    <Box sx={styles.searchFilter}>
      <FormControl sx={styles.formControl}>
        <Grid container item sx={styles.filterGrid}>
          {dropdownData?.map((item: any) => (
            <Grid
              item
              key={item.id}
              xs={5.77}
              lg={2}
              sm={3.88}
              sx={{
                flexBasis: {
                  sm: `${item.value.length * 10}px !important`,
                  xs: "100% !important",
                },
              }}
            >
              <FormControl fullWidth>
                <InputLabel sx={styles.label} id={`${item.id}`}>
                  {item.value}
                </InputLabel>
                <Select
                  labelId={`${item.id}`}
                  id={`${item.id}`}
                  label={item.value}
                  value={selectedFilters[item.keyValue] || []}
                  multiple
                  onChange={(e) => {
                    setSelectedFilters({
                      ...selectedFilters,
                      [item.keyValue]: e.target.value,
                    });
                  }}
                  renderValue={(selected) => (
                    <Box sx={styles.selectedCheckText}>
                      {selected.join(", ")}
                    </Box>
                  )}
                  sx={styles.options}
                >
                  {item.options.map((items: any) => (
                    <MenuItem key={items} value={items} sx={styles.menuItems}>
                      <Checkbox
                        checked={
                          (selectedFilters[item.keyValue] || []).indexOf(
                            items
                          ) > -1
                        }
                      />
                      <ListItemText primary={items} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
          <Button
            onClick={() => {
              setSelectedFilters({});
              setSearchQuery("");
            }}
            sx={styles.selected}
          >
            Clear All
          </Button>
        </Grid>

        <Box sx={styles.filterSearch}>
          {thead && (
            <Autocomplete
              options={allOptions}
              value={searchQuery}
              onChange={handleAutocompleteChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="filter-search"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Search"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {searchQuery !== "" && (
                          <CloseIcon
                            className="cursor-pointer"
                            onClick={() => setSearchQuery("")}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e: any) => setSearchQuery(e.target.value)}
                />
              )}
            />
          )}
        </Box>
      </FormControl>
    </Box>
  );
};
