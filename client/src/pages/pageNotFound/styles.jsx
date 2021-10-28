import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  main: {
    marginTop: 0,
    background: "#edca82",
    padding: "100px",
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.only('xs')]: {
      marginTop: 680,
      padding : '30px 5px'
     },
  },
  h3 : {
    fontSize: "36px",
    fontWeight: "400",
    color: "#30271c",
    fontFamily: "Signika",
  }
}));
