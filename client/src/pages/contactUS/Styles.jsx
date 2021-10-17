import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 550,
    background: "#edca82",
    padding: "100px",
    position: "relative",
    [theme.breakpoints.only('xs')]: {
      marginTop: 715,
     },
     [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      marginTop: 0,
      padding: "50px ",
      
     },
     
  },
  smallDivider: {
    height: "3px",
    marginTop: "25px",
    backgroundColor: "#097770",
    width: "90px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
  },
  smallDivider1: {
    height: "3px",
    marginTop: "25px",
    backgroundColor: "#097770",
    width: "90px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
  },
  header: {
    fontFamily: "Signika",
    fontSize: "32px",
    color: "#30271c",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "26px",
    textAlign: "center",
  },
  submit: {
    backgroundColor: "#c7a17a",
    padding: "0 50px",
    color: "white",
    fontFamily: "Signika",
    fontSize: "12px",
    lineHeight: "45px",
    height: 45,
    fontWeight: 900,
    borderWidth: 0,
    cursor: 'pointer',
    margin: 'auto',
    display: 'block',
  },
  text: {
    fontFamily: "Signika",
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "capitalize",
    color: "#30271c",
  },
  text1: {
    color: "#666666",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    marginLeft: 38,
  },
  card: {
    backgroundColor: "#edca82",
    opacity: ".8",
    width : 300
  },
}));
