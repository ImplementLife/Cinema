import { FC } from "react";
import AdminLyout from '../../components/Admin/re-use/AdminLyout';
import LoaderSmall from "../../components/UI/Loader/LoaderSmall";
import Error from "../../components/UI/Alert/Error";
import { adminAPI } from "../../services/AdminService";
import AdminTable from "../../components/Admin/re-use/AdminTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";

// function createData (name:string, id:number) {
//   return { name, id };
// }

// const rows = [
//   createData('Dafi', 1),
//   createData('Karavan', 2),
// ].sort((a, b) => (a.name < b.name ? -1 : 1));

const CinemaHallsList: FC = () => {
  const {data: rows, isLoading, error} = adminAPI.useGetAllHallsQuery('')
  const {page, rowsPerPage} = useAppSelector(state => state.pageSlice)

  return (
    <AdminLyout>
      {isLoading && <LoaderSmall/>}
      {error && 
        <Error>
          Error to load data from server
        </Error>
      }
      {rows&&
        <AdminTable rows={rows}>
          {(rowsPerPage > 0
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
                    <Button>Open</Button>
                  </TableCell>
            </TableRow>
          ))}
        </AdminTable>
      }
    </AdminLyout>
  );
};

export default CinemaHallsList;
