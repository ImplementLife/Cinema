import { Button, ButtonGroup, TableBody, TableCell, TableRow } from '@mui/material';
import { FC } from 'react';
import AdminLyout from '../../components/Admin/AdminLyout';
import AdminTable from '../../components/Admin/AdminTable';
import { useAppSelector } from '../../hooks/redux';
import { IMovieAdminTable } from '../../models/MovieDTO';

function createData (name:string, id:number):IMovieAdminTable {
  return { name, id };
}

const rows = [
  createData('Матриця', 1),
  createData('Володар кілець', 2),
  createData('Гаррі Поттер', 3),
  createData('Холодне сердце', 4),
  createData('Звірополіс', 5),
  createData('Месники', 6),
  createData('Людина павук', 7),
  createData('Люди Х', 8),
  createData('Тор', 9),
  createData('Залізна людина', 10),
].sort((a, b) => (a.name < b.name ? -1 : 1));

const AdminPanel: FC = () => {

  const {page, rowsPerPage} = useAppSelector(state => state.pageSlice)

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <AdminLyout>
      <AdminTable rows={rows}>
        <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.id}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <ButtonGroup>
                    <Button>Update</Button>
                    <Button color='error' >Delete</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
      </AdminTable>
    </AdminLyout>
  );
};

export default AdminPanel;
