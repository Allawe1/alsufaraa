import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop : 550,
    textAlign : 'center',
    position: "relative",
    [`${theme.breakpoints.only('xs')} and (orientation: landscape)`]: {
      marginTop: -50,
      padding: "50px ",
      margin : '-50px -50px'
     },
  },
  home: {
    justifyContent: 'center',
    backgroundColor: "#edca82",
    [theme.breakpoints.only('lg')]: {
      padding : '120px',
    
     },
     [theme.breakpoints.only('md')]: {
      padding : '100px 20px',
      
     },
     [theme.breakpoints.only('sm')]: {
      padding : '100px 50px',
     },
     [theme.breakpoints.only('xs')]: {
      padding : '80px 10px',
      marginTop : 165
     },
     
  },
  Home2: {
    textAlign: "center",
    padding : '90px 0px',
    backgroundColor: "#f0d49b",

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
  grid : {
    [theme.breakpoints.down('sm')]: {
      justifyContent : 'center'
    },
  },
  divider: {},
  image: {
    margin: "auto",
    display: "display",
    width: "100%",
    height: "100%",
  },
  media: {
    objectFit: "cover", // 16:9
  },
  card: {
    textAlign : 'center',
    border: "none", boxShadow: "none",
    margin: "auto",
    position: "relative",
    width : '100%',
    height : '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop : 28,
      backgroundColor : 'transparent ',
      border : 0
    },
    [theme.breakpoints.only('xs')]: {
      paddingTop : 2,
    },
  },
  cardBig: {
    border: "none", boxShadow: "none",
    margin: "auto",
    position: "relative",
    width : '100%',
    height : '100%'
  },
  cardMd: {
    border: "none", boxShadow: "none",
    margin: "auto",
    position: "relative",
    width : '100%',
    height : '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop : 28,
      backgroundColor : 'transparent '
    },
    [theme.breakpoints.only('xs')]: {
      paddingBottom : 28,
    },
  },
  overlay: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "30%",
    color: "#c7a17a",
    fontSize: "26px",
    fontFamily: "Signika",
    fontWeight: "600",
    padding: "0 0 20px",
    [theme.breakpoints.only('xs')]: {
      top: "50%",
      left: "30%",
    },
  },
  overlaySmall: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "30%",
    color: "#c7a17a",
    fontSize: "26px",
    fontFamily: "Signika",
    fontWeight: "600",
    padding: "0 0 20px",
    [theme.breakpoints.only('xs')]: {
      top: "50%",
      left: "30%",
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
  bigDivider: {
    height: "3px",
    marginTop: "25px",
    backgroundColor: "#097770",
    width: "170px",
    display: "block",
    position: "relative",
    margin: "10px auto 20px",
  },

  productGrid: {
    paddingLeft: "-20px",
    paddingRight: "-20px",
  },
  paddingOnTopInSm : {
    [theme.breakpoints.only('sm')]: {
      paddingTop : 28
    },
  },
}));
