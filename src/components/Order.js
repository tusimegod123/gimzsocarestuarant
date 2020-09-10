import React from "react";
// import Button from "@material-ui/core/Button";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../nav.css";

export default function Order() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ORDER
      </Button> */}
      <Button className="reserve-button" onClick={handleClickOpen}>
        PLACE YOUR ORDER NOW
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Place your Order</DialogTitle>
        <DialogContent>
          <DialogContentText id="dailog-content">
            <h4>KIND NOTICE</h4>
            <p>
              We are currently ONLY taking orders by calling{" "}
              <a href="tel:+256759755313"> +256759755313</a> or
              <a href="tel:+256786785468"> +256786785468</a> numbers
            </p>
            <p>
              Alternatevely send us an email{" "}
              <a href="mailto: gimzsocarestuarant@gmail.com"> here</a>
            </p>
            To place your order, please enter your details here. We will attend
            to your Order as soon as possible. Thank you!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Please enter your Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Telephone Number"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Order"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="danger">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
