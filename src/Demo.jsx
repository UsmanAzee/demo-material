/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  Chip,
  useTheme,
  colors,
  Divider,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CustomDialog from "./CustomComponents/CustomDialog";
import PersonIcon from "@material-ui/icons/Person";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MyOrderDetails from "./DummyData/orderDetails.json";
import orderStatusEnum from "./DummyData/orderStatusEnum.json";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {},
  chipOrange: {
    backgroundColor: "#EC6325",
    color: "white",
    fontWeight: 600,
    padding: "5px 10px",
    marginRight: "10px",
  },
  expandBanner: {
    backgroundColor: "#F5F5F5",
  },
  bannerHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontFamily: "Quicksand",
    marginRight: theme.spacing(3),
  },
  orangeAvatar: {
    backgroundColor: "#EC6325",
    color: theme.palette.getContrastText("#EC6325"),
    marginRight: theme.spacing(2),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  orderTotalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    paddingLeft: "16px",
    minWidth: "35%",
    backgroundColor: "#EC6325",
    color: theme.palette.getContrastText("#EC6325"),
  },
  orderTotalLabel: {
    paddingLeft: "16px",
    paddingRight: "16px",
    color: theme.palette.getContrastText("#EC6325"),
  },
  orderTotalValue: {
    paddingLeft: "16px",
    paddingRight: "16px",
    color: theme.palette.getContrastText("#EC6325"),
    fontWeight: 600,
  },
  table: {
    // minWidth: 650,
    fontFamily: "Quicksand",
    "& td, th": {
      color: theme.palette.primary.main,
      fontFamily: "Quicksand",
    },
  },
  tableCellName: {
    color: "#EC6325",
  },
  tableHeader: {
    "& $MuiTableRow-root": {
      padding: "0px",
    },
  },
  denseTableCell: {
    paddingTop: "0px",
    paddingBottom: "0px",
    border: "0px",
    fontWeight: 600,
  },
  tableTotals: {
    fontFamily: "Quicksand",
    height:'100%',
    "& td, th": {
      color: theme.palette.primary.main,
      fontFamily: "Quicksand",
    },
  },
}));

const borderBox = `1px solid ${colors.grey[100]}`;

const BoxItem = ({ title, value, icon: LabelIcon }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="nowrap"
      flexShrink={0}
      justifyContent="center"
      p="16px"
      width="auto"
    >
      <Box flexGrow={0} mr={1}>
        <LabelIcon color="primary" />
      </Box>
      <Box
        fontFamily="Quicksand"
        fontWeight={600}
        flexGrow={0}
        fontSize="13px"
        mr={1}
        whiteSpace="nowrap"
        color={theme.palette.primary.main}
      >
        {`${title} : `}
      </Box>
      <Box
        fontFamily="Quicksand"
        flexGrow={1}
        fontSize="13px"
        // whiteSpace="nowrap"
        color={theme.palette.primary.main}
        textAlign="left"
        minWidth="50%"
      >
        {value}
      </Box>
    </Box>
  );
};

const OrderInfo = ({ order }) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      textAlign="center"
      borderTop={borderBox}
      flexWrap="wrap"
    >
      <Box
        flexGrow={6}
        maxWidth={isXS ? "100%" : "65%"}
        display="flex"
        flexDirection="column"
        borderRight={borderBox}
        flexWrap="wrap"
      >
        <Box flexGrow={1} display="flex" flexWrap="wrap">
          <Box
            flexGrow={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            // borderBottom={borderBox}
          >
            <Box width="100%" borderBottom={borderBox}>
              <BoxItem
                title="Placed By"
                value={order.customerName}
                icon={PersonIcon}
              />
            </Box>
            <Box width="100%" flexShrink={1} borderBottom={borderBox}>
              <BoxItem
                title="Address"
                value={order.orderAddress}
                icon={LocationOnIcon}
              />
            </Box>
          </Box>

          <Divider orientation="vertical" flexItem />

          <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            // borderBottom={borderBox}
          >
            <Box width="100%" borderBottom={borderBox}>
              <BoxItem
                title="Mobile No"
                value={order.mobileNumber}
                icon={PhoneAndroidIcon}
              />
            </Box>
            <Box width="100%" borderBottom={borderBox}>
              <BoxItem
                title="Order Type"
                value={order.orderType}
                icon={
                  order.orderType === "Pickup"
                    ? LocationOnIcon
                    : DirectionsBikeIcon
                }
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          borderBottom={borderBox}
          pl={2}
        >
          <BoxItem
            title="Promise Time"
            value="after 7:00pm"
            value={`after ${moment(order.promiseTime).format("h:mma")}`}
            icon={ScheduleIcon}
          />
          <IconButton onClick={() => alert("edit promise time")}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        fontFamily="Quicksand"
        fontSize="16px"
        bgcolor="azure"
        minHeight="100px"
        textAlign="left"
        p={1}
        flexGrow={4}
        alignSelf="stretch"
      >
        {order.customerNote}
      </Box>
    </Box>
  );
};

const MTableCell = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <TableCell {...props} classes={{ root: classes.denseTableCell }}>
      {children}
    </TableCell>
  );
};

const OrderSummary = ({ order }) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      textAlign="center"
      borderTop={borderBox}
      flexWrap="wrap"
    >
      <Box
        flexGrow={6}
        maxWidth={isXS ? "100%" : "65%"}
        display="flex"
        flexDirection="column"
        borderRight={borderBox}
        flexWrap="wrap"
        alignSelf="stretch"
        maxHeight='200px'
        overflowY='scroll'
      >
        <TableContainer>
          <Table stickyHeader  className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <MTableCell />
                <MTableCell align="center">Item</MTableCell>
                <MTableCell align="center">Qty</MTableCell>
                <MTableCell align="center">Price</MTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orderDetails.map((item, index) => (
                <TableRow key={index}>
                  <TableCell
                    style={{ color: "#EC6325", maxWidth: theme.spacing(25) }}
                    component="th"
                    scope="row"
                  >
                    {item.productCategory}
                  </TableCell>
                  <TableCell align="center">{item.product}</TableCell>
                  <TableCell align="center">{item.qty}</TableCell>
                  <TableCell align="center">
                    {parseFloat(item.extraCharges) + parseFloat(item.subTotal)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        fontFamily="Quicksand"
        fontSize="16px"
        minHeight="100px"
        textAlign="left"
        flexGrow={4}
        alignSelf="stretch"
        maxWidth={isXS ? "100%" : "35%"}
      >
        <TableContainer style={{height:'100%', overflowY: 'hidden'}}>
          <Table
              className={classes.tableTotals}
            size="small"
            aria-label="simple table"
          >
            <TableBody>
              <TableRow>
                <TableCell
                  style={{
                    color: theme.palette.primary.main,
                    maxWidth: theme.spacing(25),
                  }}
                  component="th"
                  scope="row"
                >
                  Item(s) Subtotal
                </TableCell>
                <TableCell
                  style={{
                    color: "#EC6325",
                    fontWeight: 600,
                  }}
                >
                  $&nbsp;{order.orderTotal}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: theme.palette.primary.main }}
                  component="th"
                  scope="row"
                >
                  Promotions & Discounts
                </TableCell>
                <TableCell
                  style={{
                    color: "#EC6325",
                    fontWeight: 600,
                  }}
                >
                  $&nbsp;0.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: theme.palette.primary.main }}
                  component="th"
                  scope="row"
                >
                  Tax Collected
                </TableCell>
                <TableCell
                  style={{
                    color: "#EC6325",
                    fontWeight: 600,
                  }}
                >
                  $&nbsp;{order.tax}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ color: theme.palette.primary.main }}
                  component="th"
                  scope="row"
                >
                  Gratuity
                </TableCell>
                <TableCell
                  style={{
                    color: "#EC6325",
                    fontWeight: 600,
                  }}
                >
                  $&nbsp;{order.gratuity}
                </TableCell>
              </TableRow>
              {/* <TableRow
                style={{
                  backgroundColor: "#EC6325"
                }}
              >
                <TableCell
                  style={{
                    color: theme.palette.getContrastText("#EC6325"),
                    fontWeight: 600
                  }}
                  component="th"
                  scope="row"
                >
                  ORDER TOTAL
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: theme.palette.getContrastText("#EC6325"),
                    fontWeight: 600,
                    textAlign: "left"
                  }}
                >
                  $&nbsp;61.90
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

const Demo = (props) => {
  const classes = useStyles();
  const [showDialog, setShowDialog] = useState(true);
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box p={4}>
      <Button
        variant="contained"
        onClick={() => {
          setShowDialog(true);
          // setLoading(true);
          // setTimeout(() => {
          //   setLoading(false);
          // }, 5000);
        }}
      >
        Show Dialog
      </Button>
      <CustomDialog
        loading={false}
        title="Order Details"
        open={showDialog}
        close={() => setShowDialog(false)}
        actionButtons={[
          {
            title: "cancel",
            color: "primary",
            onClick: () => setShowDialog(false),
          },
          {
            title: "save",
            color: "primary",
            onClick: () => setShowDialog(false),
          },
        ]}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          {/* //// */}
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box flexGrow={0} flexShrink={0}>
              <Chip
                label={`ORDER #${MyOrderDetails.orderNumber}`}
                className={classes.chipOrange}
              />
            </Box>
            <Box
              flexGrow={1}
              flexShrink={1}
              fontFamily="Quicksand"
              fontSize="14px"
              color={colors.indigo[400]}
            >
              {`Placed on ${moment(MyOrderDetails.orderDateTime).format(
                "MMM DD, YYYY"
              )} at ${moment(MyOrderDetails.orderDateTime).format("h:mma")}`}
            </Box>
            <Box flexGrow={0} flexShrink={0} display="flex">
              <Box
                fontFamily="Quicksand"
                fontSize="14px"
                fontWeight={600}
                color="#EC6325"
                mr="5px"
              >
                STATUS :
              </Box>
              <Box
                fontFamily="Quicksand"
                fontSize="14px"
                color="#EC6325"
                mr="5px"
              >
                {
                  orderStatusEnum.find(
                    (s) =>
                      s.name.replace(/ /g, "") === MyOrderDetails.orderStatus
                  ).label
                }
              </Box>
            </Box>
          </Box>
          <Divider />
          {/* //// */}
          <OrderInfo order={MyOrderDetails} />
          {/* //// */}
        </Box>
        <Box width="100%">
          <Accordion className={classes.expandBanner}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                component={"span"}
                variant={"h6"}
                align="center"
                color="primary"
                className={classes.bannerHeading}
              >
                CONVERSATION
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Manager/client text conversation.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        {/* //// */}

        <Box
          bgcolor="#F5F5F5"
          p="14px"
          mt={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Typography
            component={"span"}
            variant={"h6"}
            align="center"
            color="primary"
            className={classes.bannerHeading}
          >
            ORDER SUMMARY
          </Typography>
          <Avatar className={classes.orangeAvatar}>5</Avatar>
        </Box>
        <Box p={2} pb={0}>
          <OrderSummary order={MyOrderDetails} />
        </Box>

        {/* //// */}
        <Box
          display="flex"
          alignItems="stretch"
          justifyContent="flex-end"
          bgcolor="#F5F5F5"
          minHeight="54px"
        >
          <Box flexGrow={6} />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexGrow={4}
            maxWidth={isXS ? "100%" : "35.5%"}
            bgcolor="#EC6325"
          >
            <Typography
              component="span"
              variant="h6"
              className={classes.orderTotalLabel}
            >
              ORDER TOTAL
            </Typography>
            <Typography
              component="span"
              variant="h6"
              className={classes.orderTotalValue}
            >
              $&nbsp;{MyOrderDetails.netTotal}
            </Typography>
          </Box>
        </Box>
      </CustomDialog>
    </Box>
  );
};

export default Demo;
