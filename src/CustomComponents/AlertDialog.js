import { Box, Button, colors, makeStyles, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  info: {
    color: colors.indigo[400],
    width: "50px",
    height: "50px",
    // color: black,
  },
  error: {
    color: colors.red[400],
    width: "50px",
    height: "50px",
    // color: black,
  },
  warning: {
    color: colors.yellow[400],
    width: "50px",
    height: "50px",
    // color: black,
  },
  success: {
    color: colors.green[400],
    width: "50px",
    height: "50px",
    // color: black,
  },
}));

const AlertDialog = ({ variant, open, close, body, title, onConfirm }) => {
  const classes = useStyles();

  const variantLogo = {
    info: {
      icon: <InfoIcon className={classes.info} />,
      color: "primary",
    },
    warning: {
      icon: <WarningIcon className={classes.warning} />,
      color: "secondary",
    },
    error: {
      icon: <CancelIcon className={classes.error} />,
      color: "secondary",
    },
    success: {
      icon: <CheckCircleIcon className={classes.success} />,
      color: "primary",
    },
  };

  return (
    <Dialog
      open={open}
      onClose={() => close(false)}
      maxWidth="sm"
      fullWidth={true}
    >
      {title && (
        <DialogTitle disableTypography>
          <Typography variant="h4">{title}</Typography>
        </DialogTitle>
      )}
      <DialogContent>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box>{variantLogo[variant].icon}</Box>
          <Box ml={2} fontSize="12pt">
            {body.split("\n").map((t, i) => (
              <Box key={i}>{t}</Box>
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        {onConfirm ? (
          <>
            <Button
              variant="outlined"
              color={variantLogo[variant].color}
              onClick={() => {
                close();
                onConfirm(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color={variantLogo[variant].color}
              onClick={() => {
                close();
                onConfirm(true);
              }}
            >
              Confirm
            </Button>
          </>
        ) : (
          <Button
            variant="outlined"
            color={variantLogo[variant].color}
            onClick={close}
          >
            OK
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  variant: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  body: PropTypes.string,
  title: PropTypes.string,
};

AlertDialog.defaultProps = {
  variant: "info",
  body: "You need to know this !",
};

export default AlertDialog;
