import * as React from "react";
import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   Avatar,
   TableHead,
   TablePagination,
   CircularProgress,
   TableRow,
   IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import DeleteUserModal from "./DeleteUserModal";
import EdituserModal from "./EdituserModal";
import API from "../../assets/api";

// Table columns configuration
const columns = [
   { id: "profilePicture", label: "Image", align: "left", minWidth: 100 },
   { id: "first_name", label: "Name", align: "left", minWidth: 100 },
   { id: "gmail", label: "Email", align: "left", minWidth: 170 },
   { id: "age", label: "Age", align: "left", minWidth: 70 },
   { id: "designation", label: "Designation", align: "left", minWidth: 170 },
   { id: "action", label: "Action", align: "left", minWidth: 170 },
];

// Sample user data
// const users =[
//     {
//       "_id": "687533311010ddb466e10f5f",
//       "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       "name": "Dushan",
//       "gmail": "Dushan@mail.lk",
//       "age": 25,
//       "address": "Matara",
//       "createdAt": "2025-07-14T16:41:21.937Z",
//       "updatedAt": "2025-07-14T16:41:21.937Z",
//       "__v": 0
//     },
//     {
//       "_id": "687533311010ddvbb466e10f5f",
//       "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       "name": "Dushan",
//       "gmail": "Dushan@mail.lk",
//       "age": 25,
//       "address": "Matara",
//       "createdAt": "2025-07-14T16:41:21.937Z",
//       "updatedAt": "2025-07-14T16:41:21.937Z",
//       "__v": 0
//     },
//     {
//       "_id": "687533311010djdb466e10f5f",
//       "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       "name": "Dushan",
//       "gmail": "Dushan@mail.lk",
//       "age": 25,
//       "address": "Matara",
//       "createdAt": "2025-07-14T16:41:21.937Z",
//       "updatedAt": "2025-07-14T16:41:21.937Z",
//       "__v": 0
//     },
//     {
//       "_id": "68753331101hvbj0ddb466e10f5f",
//       "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       "name": "Dushan",
//       "gmail": "Dushan@mail.lk",
//       "age": 25,
//       "address": "Matara",
//       "createdAt": "2025-07-14T16:41:21.937Z",
//       "updatedAt": "2025-07-14T16:41:21.937Z",
//       "__v": 0
//     },
//     {
//       "_id": "687533311h010ddb466e10f5f",
//       "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//       "name": "Dushan",
//       "gmail": "Dushan@mail.lk",
//       "age": 25,
//       "address": "Matara",
//       "createdAt": "2025-07-14T16:41:21.937Z",
//       "updatedAt": "2025-07-14T16:41:21.937Z",
//       "__v": 0
//     },
//     {
//       "_id": "6875399e935cd5be0955241d",
//        "image":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",

//       "name": "Navodya",
//       "gmail": "Navodya@mail.lk",
//       "age": 25,
//       "address": "Matara",
//       "createdAt": "2025-07-14T17:08:46.743Z",
//       "updatedAt": "2025-07-14T17:08:46.743Z",
//       "__v": 0
//     }
//   ]

const BASE_URL = import.meta.env.VITE_BASE_URL;
   

function UsersTable() {
   const navigate = useNavigate();

   const [loading, setLoading] = React.useState(true); // Loading state

   const [users, setUsers] = React.useState([]);

 const fetchUsers = async () => {
   try {
      const res = await API.get("/user/all-users");
      setUsers(res.data.data);
   } catch (error) {
      console.error("Error fetching users:", error);
   } finally {
      setLoading(false); 
   }
};

   React.useEffect(() => {
      fetchUsers();
   }, []);
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(15);

   //  Modal state for delete and edit confirmation
   const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
   const [openEditModal, setopenEditModal] = React.useState(false);
   const [selectedUser, setSelectedUser] = React.useState(null);

   //  Trigger delete modal
   const handleDelete = (user) => {
      setSelectedUser(user);
      setOpenDeleteModal(true);
   };
   const handleEdit = (user) => {
      setSelectedUser(user);
      setopenEditModal(true);
   };

   //  Confirm delete logic
   const confirmDelete = (id) => {
      console.log("Confirmed delete user ID:", id);
      // TODO: Make delete API call here
      setOpenDeleteModal(false);
   };
   const confirmEdit = (id) => {
      console.log("Confirmed edit user ID:", id);
      // TODO: Make delete API call here
      setopenEditModal(false);
      navigate(`/update/${id}`);
   };

   const handleChangePage = (_, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   if (loading) {
      return (
         <div className="profile_loading">
            <CircularProgress color="success" />;
         </div>
      );
   }
   

   return (
      <Paper sx={{ width: "100%" }}>
         <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="users table">
               <TableHead>
                  <TableRow>
                     {columns.map((column) => (
                        <TableCell
                           key={column.id}
                           align={column.align}
                           style={{ minWidth: column.minWidth }}>
                           {column.label}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>

               <TableBody>
                  {users
                     .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                     )
                     .map((user) => (
                        <TableRow
                           hover
                           key={user._id}
                           onClick={() => navigate(`/profile/${user._id}`)}
                           style={{ cursor: "pointer" }}>
                           {columns.map((column) => {
                              const value = user[column.id];

                              if (column.id === "profilePicture") {
                                 return (
                                    <TableCell
                                       key={column.id}
                                       align={column.align}>
                                          <Avatar
                                                alt={user.first_name}
                                                  src={`${BASE_URL}/uploads/${value}`}
                                                sx={{ width: 50, height: 50,fontSize: 30,borderRadius: "10%" }}
                                                />
                                    
                                    </TableCell>
                                 );
                              }

                              if (column.id === "action") {
                                 return (
                                    <TableCell
                                       key={column.id}
                                       align={column.align}>
                                       <IconButton
                                          size="small"
                                          sx={{
                                             boxShadow:
                                                "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                          }}
                                          color="primary"
                                          onClick={(e) => {
                                             e.stopPropagation();
                                             handleEdit(user); // Pass full user
                                          }}>
                                          <EditIcon />
                                       </IconButton>
                                       <IconButton
                                          size="small"
                                          sx={{
                                             boxShadow:
                                                "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                             marginLeft: "10px",
                                          }}
                                          color="error"
                                          onClick={(e) => {
                                             e.stopPropagation();
                                             handleDelete(user); // Pass full user
                                          }}>
                                          <DeleteIcon />
                                       </IconButton>
                                    </TableCell>
                                 );
                              }

                              return (
                                 <TableCell
                                    key={column.id}
                                    align={column.align}>
                                    {value}
                                 </TableCell>
                              );
                           })}
                        </TableRow>
                     ))}
               </TableBody>
            </Table>
         </TableContainer>

         <TablePagination
            rowsPerPageOptions={[10, 15, 25, 100]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />

         <DeleteUserModal
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            onConfirm={confirmDelete}
            user={selectedUser}
         />
         <EdituserModal
            open={openEditModal}
            onClose={() => setopenEditModal(false)}
            onConfirm={confirmEdit}
            user={selectedUser}
         />
      </Paper>
   );
}

export default UsersTable;
