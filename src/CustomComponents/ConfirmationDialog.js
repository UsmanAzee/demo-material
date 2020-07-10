import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography, Avatar, makeStyles, colors } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  info: {
    background: colors.indigo[400],
    // color: black,
  },
  danger: {
    background: colors.red[400],
    // color: black,
  },
  warning: {
    background: colors.yellow[400],
    // color: black,
  },
}));

const ConfirmationDialog = ({ variant, open, close, body, title, type }) => {
  const classes = useStyles();
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  // const getIconStyle = () => {
  //   var c = classes.info;
  //   switch (variant) {
  //     case "info":
  //       break;
  //     case "warning":
  //       break;
  //     case "danger":
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <Dialog
      open={open}
      onClose={() => close(false)}
      maxWidth="sm"
      fullWidth={true}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>
          <div>
            <Typography variant="body1">{body}</Typography>
            <Avatar className={classes.green}>
              {/* <AssignmentIcon /> */}
            </Avatar>
          </div>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={() => close(true)}>
          Confirm
        </Button>
        <Button color="primary" autoFocus onClick={() => close(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  variant: PropTypes.oneOf(["danger", "warning", "info"]).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  body: PropTypes.string,
  title: PropTypes.string,
};

ConfirmationDialog.defaultProps = {
  variant: "warning",
  body: "Are you sure ?",
};

export default ConfirmationDialog;
