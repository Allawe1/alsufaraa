import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  main: {
    marginTop: 550,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    width: "90px",
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
    position: "relative",
    width: 300,
    height: 250,
    right: 50,
    left: 0,
  },
  media: {
    height: 280, // 16:9
  },
  image: {
    padding: theme.spacing(1),
    margin: "auto",
    display: "display",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  grid: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  productGrid: {
    paddingLeft: "-20px",
    paddingRight: "-20px",
  },
  card1: {
    width: 280,
    minWidth: 200,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0 ),
    backgroundColor: "#edca82",
    // direction:'rtl',
  },
  productHeader: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#30271c",
    fontFamily: "Signika",
    margin: "10px auto 20px",
    
  },
  productSmallDivider: {
    height: "3px",
    marginTop: "25px",
    backgroundColor: "#097770",
    width: "90px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
    right : 80
  
  },
  ProductTitle: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#30271c",
    fontFamily: "Signika",
  },
  ProductInfo: {
    fontSize: "24px",
    fontWeight: "400",
    color: "#30271c",
    fontFamily: "Signika",
  },
  productBigDivider: {
    height: "3px",
    marginTop: "25px",
    backgroundColor: "#097770",
    width: "170px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
    right : 40
  },
}));
