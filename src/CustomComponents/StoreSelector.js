import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  MenuItem,
  Slide,
  Paper,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { marginBottom: theme.spacing(1) },
  textField: {},
  menu: {},
}));

const StoreSelector = ({
  myStoreId,
  storeChange,
  myStores,
  title,
  subheader,
}) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.root}>
        <CardHeader
          title={title || ""}
          subheader={subheader || ""}
          // titleTypographyProps={{ variant: "h4" }}
        />
        <CardContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                required
                //disabled={progressloading}
                error={myStoreId === ""}
                select
                label="Select Store"
                // style={{ marginTop: '1rem' }}
                variant="outlined"
                fullWidth
                className={classes.textField}
                value={myStoreId}
                onChange={storeChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
              >
                {myStores.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Slide>
  );
};

StoreSelector.defaultProps = {
  title: "Select Store",
};

export default StoreSelector;
