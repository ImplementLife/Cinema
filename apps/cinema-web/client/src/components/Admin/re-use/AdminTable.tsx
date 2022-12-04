import React, { FC } from 'react';
import { Table,  TableContainer, TableFooter, TablePagination, TableRow, Paper} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import {pageSlice} from '../../../redux-toolkit/reducers/AdminPageSlice';
import { IMovieAdminTable } from '../../../models/MovieDTO';

interface IAdminTable {
  children: React.ReactElement | React.ReactNode;
  rows: IMovieAdminTable[];
}

const AdminTable: FC<IAdminTable> = ({children, rows}) => {

  const {page, rowsPerPage} = useAppSelector(state => state.pageSlice)
  const {setPage, setRowsPerPage} = pageSlice.actions;
  const dispatch = useAppDispatch()

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  return (
    <TableContainer 
      component={Paper}
      sx={{
        backgroundColor: 'secondary.dark',
        padding: '10px',
      }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">

        {children}

        <TableFooter>
          <TableRow>
            {rows && 
            <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />} 
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default AdminTable;