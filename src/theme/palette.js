import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue["A400"],
    light: colors.blue["A400"]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: "#F4F6F8",
    paper: white
  },
  ErrorButton: {
    backgroundColor: colors.red[400],
    color: white
  },
  SuccessButton: {
    backgroundColor: colors.green[400],
    color: white
  },
  WarningButton: {
    backgroundColor: colors.lime[500],
    color: white
  },
  DefaultButton: {
    backgroundColor: colors.indigo[500],
    color: white
  },
  DisabledButton: {
    backgroundColor: white,
    color: colors.grey[400]
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  titlebar: "#3f51b5",
  titlebarlight: white,
  hoverColor: colors.blueGrey[400]
};
