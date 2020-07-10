import React from "react";
import { makeStyles, Card, CardHeader, Box, useTheme } from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '8px',
    marginBottom: "8px",
  },
  textField: {},
  menu: {},
}));

export default function ViewHeader({ title, subheader }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    // <div>
    //   <Card className={classes.root}>
    //     <CardHeader title={title || ""} subheader={subheader || ""} />
    //   </Card>
    // </div>
    <Box
      textAlign="left"
      fontFamily="Quicksand"
      fontWeight={600}
      fontSize="19px"
      color={theme.palette.primary.main}
      pl="2%"
      py="20px"
      // bgcolor="lightblue"
    >
      {String(title || "").toUpperCase()}
    </Box>
  );
}
ViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};
