import { Box, Button, Pagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {styles} from "./custom-pagination.style";

/**
 * Take in currentPage, setCurrentPage, filteredTableRows, rowsPerPage and return a pagination component
 * @param { currentPage, setCurrentPage, filteredTableRows, rowsPerPage } props
 * @returns pagination component
 */

export const CustomPagination = ({
  currentPage,
  setCurrentPage,
  filteredTableRows,
  rowsPerPage,
}: any) => {
  return (
    <Box
      sx={styles.paginationRow}
    >
      <Button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        variant="outlined"
        sx={styles.paginationbtns}
        disabled={currentPage > 1 ? false : true}
      >
        <ArrowBackIcon sx={styles.back} /> Previous
      </Button>
      <Pagination
        count={Math.ceil(filteredTableRows.length / rowsPerPage)}
        page={currentPage}
        hidePrevButton
        hideNextButton
        sx={styles.pagination}
        variant="outlined"
        shape="rounded"
        onChange={(e, value) => setCurrentPage(value)}
      />
      <Button
        onClick={() => {
          if (currentPage < Math.ceil(filteredTableRows.length / rowsPerPage)) {
            setCurrentPage(currentPage + 1);
          }
        }}
        disabled={
          currentPage < Math.ceil(filteredTableRows.length / rowsPerPage)
            ? false
            : true
        }
        variant="outlined"
        sx={styles.paginationbtns}
      >
        Next <ArrowForwardIcon sx={styles.next} />
      </Button>
    </Box>
  );
};
