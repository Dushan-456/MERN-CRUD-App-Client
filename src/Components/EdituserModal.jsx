import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';

const EdituserModal = ({ open, onClose, onConfirm, user }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to Edit{' '}
          <strong>{user?.name || user?.gmail || 'this user'}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={() => onConfirm(user._id)} color="primary" variant="contained">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EdituserModal;
