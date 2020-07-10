import React from "react";
import {
  colors,
  makeStyles,
  Typography,
  IconButton,
  Fade,
  LinearProgress,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Refresh } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    // border: "1px solid " + colors.grey[200],
  },

  leftIconContainer: {
    justifySelf: "flex-start",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    padding: "2px 5px",
  },
  titleContainer: {
    textAlign: "center",
    flexGrow: 1,
    justifySelf: "flex-end",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rightIconContainer: {
    textAlign: "center",
    justifySelf: "flex-end",
    display: "flex",
    alignItems: "center",
    padding: "2px 5px",
  },
}));

const DialogTitle = ({ children, onClose, onRefresh, loading, ...other }) => {
  const classes = useStyles();

  return (
    <MuiDialogTitle {...other}>
      <div className={classes.root}>
        {onRefresh && (
          <div className={classes.leftIconContainer}>
            <IconButton size="small" onClick={onRefresh}>
              <Refresh />
            </IconButton>
          </div>
        )}

        <div className={classes.titleContainer}>
          <Typography component={"span"} variant={"h6"}>
            {children}
          </Typography>
        </div>

        {onClose && (
          <div className={classes.rightIconContainer}>
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        )}
      </div>

      {loading && (
        <Fade in={loading}>
          <LinearProgress />
        </Fade>
      )}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
