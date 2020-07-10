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

const ProductTypeSelecter = ({ textFieldProps, storeId, onSelected, value }) => {
  const classes = useStyles();
  const [productTypeList, setProductTypeList] = useState([]);
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
    const fetchProductTypes = async () => {
      await Axios.get(`${config.apiURL}Products/ProductTypes`, {
        headers: { CLIENT_CODE: storeId },
      })
        .then((result) => {
          setLoading(false);
          let types = [...result.data];
          types.sort((type1, type2) => type1.displayIndex - type2.displayIndex);
          setProductTypeList([...types]);
        })
        .catch((error) => {
          console.log(error);
          showNotification(
            "error",
            "Get product type list error : " + error.message
          );
        });
    };

    fetchProductTypes();
  }, []);

  return (
    <>
      {loading ? null : productTypeList.length > 0 ? (
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
            {productTypeList.map((area) => (
              <MenuItem key={area.id} value={area.id}>
                {area.name}
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
            helperText="No product types defined !"
            // onBlur={}
            value={value}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            <MenuItem disabled value={null}>
              No product type defined
            </MenuItem>
          </TextField>
        </Slide>
      )}
    </>
  );
};

ProductTypeSelecter.propTypes = {
  textFieldProps: PropTypes.object,
  storeId: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProductTypeSelecter;
