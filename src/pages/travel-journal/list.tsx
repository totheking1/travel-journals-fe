/* eslint-disable */
import * as React from "react";
import axios from "axios";
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
import { useQuery, useQueryClient } from "react-query";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";

interface Column {
  id: "id" | "title" | "description";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 170 },
  { id: "description", label: "Participants", minWidth: 170 },
];

interface TableData {
  id: number;
  title: string;
  description: string;
}

function createData(id: number, title: string, description: string): TableData {
  return { id, title, description };
}

const rows = [
  createData(1, "여행뇽뇽", "김서영, 김수진, 김기홍, 임민우, 진예진"),
  createData(2, "여행뇽뇽", "김서영, 김수진, 김기홍, 임민우, 진예진"),
  createData(3, "여행뇽뇽", "김서영, 김수진, 김기홍, 임민우, 진예진"),
  createData(4, "여행뇽뇽", "김서영, 김수진, 김기홍, 임민우, 진예진"),
];

function useGet() {
  return useQuery("get", async () => {
    const { data } = await axios.get("http://localhost:8080/travels");
    return data;
  });
}

export default function ListTravelJournal() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { status, data, error, isFetching, isLoading, isError } = useGet();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error: </Typography>
      ) : (
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
                    {data.map((row: TableData) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
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
      )}
    </>
  );
}
