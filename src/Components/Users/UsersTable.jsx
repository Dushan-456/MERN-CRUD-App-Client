import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Height } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';


const columns  = [
  { id: 'image', label: 'Image', align: 'left' ,minWidth: 100 },
  { id: 'name', label: 'Name', align: 'left' ,minWidth: 100,format: (value) => value.toLocaleString('en-US') },
  { id: 'gmail', label: 'Email', align: 'left',minWidth: 170,format: (value) => value.toLocaleString('en-US') },
  { id: 'age', label: 'Age', align: 'left',minWidth:70,format: (value) => value.toLocaleString('en-US') },
  { id: 'address', label: 'Address', align: 'left',minWidth: 170,format: (value) => value.toLocaleString('en-US') },
  { id: 'action', label: 'Action', align: 'left',minWidth: 170 },
];


const users =[
    {
      "_id": "687533311010ddb466e10f5f",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Dushan",
      "gmail": "Dushan@mail.lk",
      "age": 25,
      "address": "Matara",
      "createdAt": "2025-07-14T16:41:21.937Z",
      "updatedAt": "2025-07-14T16:41:21.937Z",
      "__v": 0
    },
    {
      "_id": "6875399e935cd5be0955241d",
       "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",

      "name": "Navodya",
      "gmail": "Navodya@mail.lk",
      "age": 25,
      "address": "Matara",
      "createdAt": "2025-07-14T17:08:46.743Z",
      "updatedAt": "2025-07-14T17:08:46.743Z",
      "__v": 0
    },
    {
      "_id": "687539aa935cd5be0955241f",
            "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",

      "name": "Kodikara",
      "gmail": "Kodikara@mail.lk",
      "age": 25,
      "address": "Matara",
      "createdAt": "2025-07-14T17:08:58.771Z",
      "updatedAt": "2025-07-14T17:08:58.771Z",
      "__v": 0
    },
    {
      "_id": "687547c1a82838666a7649a2",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Dushkodi",
      "gmail": "Dushkodi@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:05.147Z",
      "updatedAt": "2025-07-14T18:09:05.147Z",
      "__v": 0
    },
    {
      "_id": "687547cea82838666a7649a6",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Supun",
      "gmail": "Supun@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:18.952Z",
      "updatedAt": "2025-07-14T18:09:18.952Z",
      "__v": 0
    },
    {
      "_id": "687547d9a82838666a7649a8",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Sajitha",
      "gmail": "Sajitha@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:29.313Z",
      "updatedAt": "2025-07-14T18:09:29.313Z",
      "__v": 0
    },
    {
      "_id": "687547e4a82838666a7649aa",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Jayantha",
      "gmail": "Jayantha@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:40.234Z",
      "updatedAt": "2025-07-14T18:09:40.234Z",
      "__v": 0
    },
    {
      "_id": "687547eda82838666a7649ac",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Ridma",
      "gmail": "Ridma@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:49.396Z",
      "updatedAt": "2025-07-14T18:09:49.396Z",
      "__v": 0
    },
    {
      "_id": "687547f8a82838666a7649ae",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Wathila",
      "gmail": "Wathila@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:10:00.423Z",
      "updatedAt": "2025-07-14T18:10:00.423Z",
      "__v": 0
    },
    {
      "_id": "687533311010ddb466e10f5f",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Dushan",
      "gmail": "Dushan@mail.lk",
      "age": 25,
      "address": "Matara",
      "createdAt": "2025-07-14T16:41:21.937Z",
      "updatedAt": "2025-07-14T16:41:21.937Z",
      "__v": 0
    },
    {
      "_id": "6875399e935cd5be0955241d",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Navodya",
      "gmail": "Navodya@mail.lk",
      "age": 25,
      "address": "Matara",
      "createdAt": "2025-07-14T17:08:46.743Z",
      "updatedAt": "2025-07-14T17:08:46.743Z",
      "__v": 0
    },
    {
      "_id": "687539aa935cd5be0955241f",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Kodikara",
      "gmail": "Kodikara@mail.lk",
      "age": 25,
      "address": "Matara",
      "createdAt": "2025-07-14T17:08:58.771Z",
      "updatedAt": "2025-07-14T17:08:58.771Z",
      "__v": 0
    },
    {
      "_id": "687547c1a82838666a7649a2",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Dushkodi",
      "gmail": "Dushkodi@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:05.147Z",
      "updatedAt": "2025-07-14T18:09:05.147Z",
      "__v": 0
    },
    {
      "_id": "687547cea82838666a7649a6",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Supun",
      "gmail": "Supun@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:18.952Z",
      "updatedAt": "2025-07-14T18:09:18.952Z",
      "__v": 0
    },
    {
      "_id": "687547d9a82838666a7649a8",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Sajitha",
      "gmail": "Sajitha@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:29.313Z",
      "updatedAt": "2025-07-14T18:09:29.313Z",
      "__v": 0
    },
    {
      "_id": "687547e4a82838666a7649aa",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Jayantha",
      "gmail": "Jayantha@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:40.234Z",
      "updatedAt": "2025-07-14T18:09:40.234Z",
      "__v": 0
    },
    {
      "_id": "687547eda82838666a7649ac",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Ridma",
      "gmail": "Ridma@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:09:49.396Z",
      "updatedAt": "2025-07-14T18:09:49.396Z",
      "__v": 0
    },
    {
      "_id": "687547f8a82838666a7649ae",
      "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Wathila",
      "gmail": "Wathila@mail.lk",
      "age": 25,
      "address": "colombo",
      "createdAt": "2025-07-14T18:10:00.423Z",
      "updatedAt": "2025-07-14T18:10:00.423Z",
      "__v": 0
    }
  ]



  const handleEdit = (id) => {
  console.log("Edit user with ID:", id);
  // Navigate to edit page or open a modal
};

const handleDelete = (id) => {
  console.log("Delete user with ID:", id);
  // Confirm delete and remove user from DB
};



function UsersTable() {

    const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
         
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={columns.id}
                  align={columns.align}
                  style={{  minWidth: columns.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow hover key={user._id}
                onClick={() => navigate(`/profile/${user._id}`)}
                style={{ cursor: "pointer" }}>
                  {columns.map((column) => {
                    const value = user[column.id];

                    switch(column.id) {
                      case 'action':
                         return (
                        <TableCell key={column.id} align={column.align}>
                          <IconButton color="primary"       onClick={(e) => {
                          e.stopPropagation(); // Prevent row click
                          handleEdit(user._id);
                        }}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error"  onClick={(e) => {
                          e.stopPropagation(); // Prevent row click
                          handleDelete(user._id);
                        }}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      );
                        break;
                      case "image":
                          return (
                        <TableCell key={column.id} align={column.align}>
                          <img src={value} alt="UserImage"  style={{ height: 50, width: 50, borderRadius: '10%' }}/>
                        </TableCell>
                      );
                        break;
                      default:
                        return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    }
                    
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default UsersTable