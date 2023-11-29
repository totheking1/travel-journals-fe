import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

interface Column {
  id: "journalID" | "title" | "date" | "participants";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "journalID", label: "ID", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "participants", label: "Participants", minWidth: 170 },
];

interface TableData {
  journalID: number;
  title: string;
  date: string;
  participants: string;
}

function createData(
  journalID: number,
  title: string,
  date: string,
  participants: string,
): TableData {
  return { journalID, title, date, participants };
}

const rows = [
  createData(
    1,
    "여행뇽뇽",
    "2023-11-29",
    "김서영, 김수진, 김기홍, 임민우, 진예진",
  ),
  createData(
    2,
    "여행뇽뇽",
    "2023-11-29",
    "김서영, 김수진, 김기홍, 임민우, 진예진",
  ),
  createData(
    3,
    "여행뇽뇽",
    "2023-11-29",
    "김서영, 김수진, 김기홍, 임민우, 진예진",
  ),
  createData(
    4,
    "여행뇽뇽",
    "2023-11-29",
    "김서영, 김수진, 김기홍, 임민우, 진예진",
  ),
];

export default function TravelJournalBoard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} xl={12}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.journalID}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
