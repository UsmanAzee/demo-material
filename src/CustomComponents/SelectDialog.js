import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  List,
  makeStyles,
  Divider,
  Box,
  DialogActions,
  Button,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  list: {
    width: "100%",
  },
  listItem: {
    width: "100%",
  },
  listItemSelected: {
    width: "100%",
    backgroundColor: "lightblue",
  },
});

const SelectDialog = ({
  open,
  close,
  choices,
  title = "Select a choice",
  preSelected,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selected, setSelected] = useState(null);

  const handleClose = (choice) => {
    close(choice);
  };

  useEffect(() => {
    if (open) {
      setSelected(choices.find((choice) => choice.id === preSelected.id));
    }
  }, [open]);

  return (
    <Dialog
      onClose={() => handleClose(null)}
      open={open}
      maxWidth="xs"
      fullWidth={true}
    >
      <DialogTitle>
        <Box
          fontWeight={theme.typography.fontWeightBold}
          textAlign="center"
          width="100%"
          fontSize={theme.typography.h4}
        >
          {title}
        </Box>
      </DialogTitle>
      <Divider />
      <List className={classes.list}>
        {choices.map((choice) => (
          <ListItem
            button
            onClick={() => setSelected(choice)}
            key={choice.id}
            className={
              selected && choice.id === selected.id
                ? classes.listItemSelected
                : classes.listItem
            }
          >
            <Box textAlign="center" width="100%">
              {choice.label}
            </Box>
          </ListItem>
        ))}
      </List>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClose(selected)}
        >
          Confirm
        </Button>
        <Button variant="outlined" color="primary" onClick={() => close()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectDialog;
