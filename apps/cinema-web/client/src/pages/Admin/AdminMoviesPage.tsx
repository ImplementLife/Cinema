import { FC } from 'react';
import { Button, ButtonGroup, TableCell, TableRow, Tooltip, IconButton,} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AdminLyout from '../../components/Admin/re-use/AdminLyout';
import AdminTable from '../../components/Admin/re-use/AdminTable';
import LoaderSmall from '../../components/UI/Loader/LoaderSmall';
import Error from '../../components/UI/Alert/Error';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { adminAPI } from '../../services/AdminService';
import { useNavigate } from 'react-router-dom';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';

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
  const dispatch = useAppDispatch()
  const {updateMovie, setMode, setID} = createMovieSlice.actions
  const {page, rowsPerPage} = useAppSelector(state => state.pageSlice)
  const {data: rows, isLoading, error} = adminAPI.useGetAllMoviesQuery('')
  const [trigger] = adminAPI.useLazyGetMovieToUpdateQuery()
  const [deleteMovie] = adminAPI.useDeleteMovieMutation()
  const navigate = useNavigate()

  const handleUpdateMovie = async (id: number) => {
    trigger(id)
    .unwrap()
    .then((res) => {
      dispatch(updateMovie(res))
      dispatch(setMode(true))
      navigate(`/admin/movie?id=${id}`)
    })
    .catch((err) => console.error(err))

    // dispatch(setID(1))
    // dispatch(setMode(true))
    // navigate(`/admin/movie?id=${id}`)
  }
  return (
    <AdminLyout>
      <AdminLyout>
          <Tooltip title="Create movie">
            <IconButton onClick={() => navigate('/admin/movie')}>
              <AddIcon/>
            </IconButton>
          </Tooltip>
      </AdminLyout>
      {isLoading && <LoaderSmall/>}
      {error && 
        <Error>
        Error to load data from server
        </Error>
      }
      {rows && 
        <AdminTable rows={rows}>
          { (rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <ButtonGroup>
                  <Button onClick={() => handleUpdateMovie(row.id)}>Update</Button>
                  <Button onClick={() => deleteMovie(row.id)} color='error'>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </AdminTable>
      }
    </AdminLyout>
  );
};

export default AdminMoviesPage;
