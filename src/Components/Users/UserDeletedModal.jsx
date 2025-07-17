import {
      Dialog,
      DialogTitle,
      DialogContent,
      DialogActions,
      Button,
      Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const UserDeletedModal = ({ open, onClose , onOk }) => {
   return (
         <Dialog
            open={open}
            onClose={onClose}>
            {/* Centered Icon */}
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
               }}>
               <CheckCircleIcon
                  sx={{
                     width: 50,
                     height: 50,
                     color: "#02790cff",
                  }}
               />
            </Box>

            <DialogTitle sx={{ textAlign: "center" }}>User Deleted</DialogTitle>

            <DialogContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: 4,
               }}>
               <p>The user has been Deleted successfully</p>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
               <Button
                  onClick={onOk}
                  autoFocus
                  variant="contained">
                  OK
               </Button>
            </DialogActions>
         </Dialog>
   );
};

export default UserDeletedModal;
