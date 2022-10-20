import { Box, Modal } from '@mui/material';
import * as React from 'react';
import { styleForModal } from '../../../global/theme';

interface IAdminModalProps {
  children: React.ReactElement| React.ReactNode;
  status: boolean;
  closeModal: () => void;
}

const AdminModal: React.FunctionComponent<IAdminModalProps> = ({children, status, closeModal}) => {
  return (
    <Modal
        keepMounted
        open={status}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={styleForModal}>
          {children}
        </Box>
    </Modal>
  );
};

export default AdminModal;
