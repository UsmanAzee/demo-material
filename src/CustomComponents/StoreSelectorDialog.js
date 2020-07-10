import React, { useState, useEffect } from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    TextField,
    MenuItem,
    Button,
    Slide,
    Paper,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: { marginBottom: theme.spacing(1) },
    textField: {},
    menu: {},
}));

export default function StoreSelectorDialog({ myStores, onClose }) {
    const theme = useTheme();
    const [storeId, setStoreId] = useState("");
    const [openDialog, setOpenDialog] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        if (myStores) {
            setStoreId(myStores[0]["clientCode"]);

        }

    }, [myStores])
    const handleClose = () => {

        onClose(storeId);
        setOpenDialog(false);
    };
    return (
        <div>
            <Dialog fullWidth maxWidth="sm" open={openDialog} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <Card className={classes.root}>
                        <CardHeader
                            title="Select Store"
                            subheader="Select  your store before you use application"
                        // titleTypographyProps={{ variant: "h4" }}
                        />
                        <CardContent>
                            <Grid container spacing={1} direction="row">
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        required
                                        //disabled={progressloading}
                                        error={storeId === ""}
                                        select
                                        label="Select Store"
                                        // style={{ marginTop: '1rem' }}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.textField}
                                        value={storeId}
                                        onChange={event => { setStoreId(event.target.value) }}
                                        SelectProps={{
                                            MenuProps: {
                                                className: classes.menu,
                                            },
                                        }}
                                    >
                                        {myStores.map((option) => (
                                            <MenuItem key={option.clientCode} value={option.clientCode}>
                                                {option.clientCode}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Select Store
          </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
