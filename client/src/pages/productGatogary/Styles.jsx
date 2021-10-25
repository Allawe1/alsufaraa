import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 550,
    background: "#edca82",
    padding: "100px",
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.only('xs')]: {
      marginTop: 715,
      padding : '90px 10px'
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
    width: "60px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
  },
  h2: {
    fontSize: "30px",
    color: "c6a07c",
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
  h1: {
    fontSize: "36px",
    fontWeight: "400",
    color: "#30271c",
    fontFamily: "Signika",
  },
  bigDivider: {
    height: "3px",
    marginTop: "25px",
    backgroundColor: "#097770",
    width: "170px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
  },
  overlaySmall: {
    textAlign: "center",
    color: "#c7a17a",
    fontSize: "26px",
    fontFamily: "Signika",
    fontWeight: "600",
    paddingTop: "20px",
  },
  card: {
    margin: "auto",
    width: 400,
    height: 300,
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 250,
    },
  },
  media: {
    height: 300,
    width : 400// 16:9
  },
  image: {
    padding: theme.spacing(1),
    margin: "auto",
    display: "display",
    width: 400,
    height: 300,
    [theme.breakpoints.down("md")]: {
      Width: "100%",
      Height: "100%",
    },
  },
  grid: {
    paddingLeft: "180px",
    paddingRight: "180px",
  },
}));
