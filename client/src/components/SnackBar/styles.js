import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    width: "100%",
    overflow: "hidden",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));
