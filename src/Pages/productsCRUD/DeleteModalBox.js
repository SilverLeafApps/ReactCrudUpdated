
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModelTest = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{ margin: 0, position: "absolute", top: "50%", left: "50%" }}
        variant="contained"
        color="primary"
      >
        Open Modal
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">This is a test of modal.</p>
        </div>
      </Modal>
    </>
  );
};
export default ModelTest;

/*import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Typography from '@mui/joy/Typography';

export default function AlertDialogModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
    
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            aria-labelledby="alert-dialog-modal-title"
            aria-describedby="alert-dialog-modal-description"
          >
            <Typography
              id="alert-dialog-modal-title"
              component="h2"
              startDecorator={<WarningRoundedIcon />}
            >
              Confirmation
            </Typography>
            <Divider />
            <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
              Are you sure you want to discard all of your notes?
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
              <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="solid" color="danger" onClick={() => setOpen(false)}>
                Discard notes
              </Button>
            </Box>
          </ModalDialog>
        </Modal>
      </React.Fragment>
  );
}
*/
