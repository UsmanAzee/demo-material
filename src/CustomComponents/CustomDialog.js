/* eslint-disable react/prop-types */
import React from "react";
import {
  Fade,
  IconButton,
  LinearProgress,
  makeStyles,
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Refresh } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogPaperRoot: {
    borderRadius: "20px",
    overflowY: "auto",
    overflowX: 'hidden'
  },
  dialogContentRoot: {
    padding: "0px",
    overflowY: "auto",
    overflowX: 'hidden'
  },
  titleRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    padding: "10px",
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    // border: "1px solid " + colors.grey[200],
  },

  titleText: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    // verticalAlign: 'center'
  },
  iconButton: {
    padding: "0px",
  },
  actionButton: {
    borderRadius: "20px",
    padding: "6px 8px 6px 8px",
    minWidth: "100px",
  },
}));

const CustomDialog = ({
  children,
  title = "Dialog Title",
  DialogProps,
  onRefresh,
  loading,
  open,
  close,
  actionButtons,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaperRoot }}
      fullScreen={false}
      disableBackdropClick={false}
      open={open}
      onClose={close}
      maxWidth={"lg"}
      fullWidth={true}
      TransitionComponent={Fade}
      {...DialogProps}
    >
      <DialogTitle disableTypography classes={{ root: classes.titleRoot }}>
        {onRefresh && (
          <IconButton
            size="small"
            onClick={() => alert("refresh")}
            className={classes.iconButton}
          >
            <Refresh fontSize="large" />
          </IconButton>
        )}

        <Typography
          component={"span"}
          variant={"h6"}
          align="center"
          color="primary"
          className={classes.titleText}
        >
          {String(title).toUpperCase()}
        </Typography>

        <IconButton size="small" onClick={close} className={classes.iconButton}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </DialogTitle>
      {loading && (
        <Fade in={loading}>
          <LinearProgress />
        </Fade>
      )}

      <DialogContent dividers classes={{ root: classes.dialogContentRoot }}>
        {children}
      </DialogContent>
      <DialogActions>
        <Box
          p={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {actionButtons
            ? actionButtons.map((btn) => {
                return (
                  <Button
                    key={btn.title}
                    variant="contained"
                    color={btn.color ? btn.color : "primary"}
                    onClick={btn.onClick}
                    className={classes.actionButton}
                  >
                    {btn.title}
                  </Button>
                );
              })
            : null}
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
