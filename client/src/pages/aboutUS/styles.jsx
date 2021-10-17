import { makeStyles } from "@material-ui/core/styles";



export const useStyles = makeStyles((theme) => ({

  
  main: {
    marginTop: 550,
    background: "#edca82",
    padding: "100px",
    position: "relative",
    [theme.breakpoints.only('xs')]: {
      marginTop: 715,
      padding: "50px",
     },
     [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      marginTop: 400,
      
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
     [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      marginTop: -50,
      padding: "50px ",
      margin : '-50px -50px',
     },
     [theme.breakpoints.only('xs')]: {
      padding : '80px 10px',
      marginTop : 165
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
    [theme.breakpoints.up('lg')]: {
      right : 250
    },
    
  },

  header: {
    fontFamily: "Signika",
    fontSize: "32px",
    color: "#30271c",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "40px",
    margin: "-20px auto 20px",
  },
  mainHeader: {
    fontFamily: "Signika",
    fontSize: "40px",
    color: "#30271c",
    fontWeight: "800",
    fontStyle: "normal",
    lineHeight: "40px",
    textAlign : 'center',
    marginBottom : 20,
  },

  text1: {
    color: "#666666",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
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

  image: {
    borderRadius: "50%",
    width : 300,
    height : 300,
    [theme.breakpoints.up('md')]: {
      width : 400,
    height : 400,
    },
  },
}));
