import React, { useEffect, useState } from "react";
import { TextField, makeStyles, MenuItem, Slide } from "@material-ui/core";
import Axios from "axios";
import config from "api_endpoint.json";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  menu: {
    // padding: theme.spacing(1),
  },
}));

const MenuAreaSelector = ({ textFieldProps, storeId, onSelected, value }) => {
  const classes = useStyles();
  const [menuAreaList, setMenuAreaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showNotification = (variant, msg) => {
    try {
      enqueueSnackbar(msg, {
        variant: variant,
        preventDuplicate: true,
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } catch (error) {
      console.log("Notification snackbar error, " + error);
      alert(msg);
    }
  };

  useEffect(() => {
    const fetchMenuAreas = async () => {
      await Axios.get(`${config.apiURL}ProductCategories`, {
        headers: { CLIENT_CODE: storeId },
      })
        .then((result) => {
          setLoading(false);
          setMenuAreaList([...result.data]);
        })
        .catch((error) => {
          console.log(error);
          showNotification(
            "error",
            "Get menu area list error : " + error.message
          );
        });
    };

    fetchMenuAreas();
  }, []);

  return (
    <>
      {loading ? null : menuAreaList.length > 0 ? (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <TextField
            select={true}
            {...textFieldProps}
            onChange={onSelected}
            // onBlur={}
            value={value}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            {menuAreaList.map((area) => (
              <MenuItem key={area.id} value={area.id}>
                {area.cateogryName}
              </MenuItem>
            ))}
          </TextField>
        </Slide>
      ) : (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <TextField
            select={true}
            {...textFieldProps}
            error={true}
            helperText="Please define 'Menu Area' first !"
            // onBlur={}
            value={value}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            <MenuItem disabled value={null}>
              No menu area defined
            </MenuItem>
          </TextField>
        </Slide>
      )}
    </>
  );
};

MenuAreaSelector.propTypes = {
  textFieldProps: PropTypes.object,
  storeId: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default MenuAreaSelector;
