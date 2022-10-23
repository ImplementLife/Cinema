import { FC } from 'react';
import { Button, ButtonGroup, TableBody, TableCell, TableRow, Fab,} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AdminLyout from '../../components/Admin/AdminLyout';
import AdminTable from '../../components/Admin/AdminTable';
import LoaderSmall from '../../components/UI/Loader/LoaderSmall';
import Error from '../../components/UI/Error/Error';
import { useAppSelector } from '../../hooks/redux';
import { adminAPI } from '../../services/AdminService';
import { Link } from 'react-router-dom';

// function createData (name:string, id:number) {
//   return { name, id };
// }

// const rows = [
//   createData('Матриця', 1),
//   createData('Володар кілець', 2),
//   createData('Гаррі Поттер', 3),
//   createData('Холодне сердце', 4),
//   createData('Звірополіс', 5),
//   createData('Месники', 6),
//   createData('Людина павук', 7),
//   createData('Люди Х', 8),
//   createData('Тор', 9),
//   createData('Залізна людина', 10),
// ].sort((a, b) => (a.name < b.name ? -1 : 1));

const AdminMoviesPage: FC = () => {

  const {page, rowsPerPage} = useAppSelector(state => state.pageSlice)
  const {data: rows, isLoading, error} = adminAPI.useGetAllMoviesQuery('')

  // Avoid a layout jump when reaching the last page with empty rows.
  let emptyRows = 0
  if (rows !== undefined) {
    emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  }
  return (
    <AdminLyout>
      <AdminLyout>
        <Link to='/admin/create'>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </AdminLyout>
      {isLoading && <LoaderSmall/>}
      {error && 
        <Error>
            Error to load data from server
        </Error>
      }
      {rows && <AdminTable rows={rows}>
        <TableBody>
            { (rowsPerPage > 0
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
      </AdminTable>}
    </AdminLyout>
  );
};

export default AdminMoviesPage;
