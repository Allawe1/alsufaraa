import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  main: {
    marginTop: 550,
    background: "#edca82",
    padding: "100px",
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.only('xs')]: {
      marginTop: 715,
      padding : '30px 5px'
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
  
  media: {
    width:'100%',
    // 16:9
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
  card: {
    width: 280,
    minWidth: 200,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
 
 
 
}));
