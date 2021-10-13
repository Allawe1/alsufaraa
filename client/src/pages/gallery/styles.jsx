import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 550,
    background: "#edca82",
    padding: "100px",
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      marginTop: 715,
      padding: "10px",
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
    textAlign: "center",
    marginBottom: 20,
  },
  gallery: {
    margin : 'auto'
  },
  imageCard : {
    padding: '5px',
    margin: '5px',
    borderRadius: '2px',
  },
  
  image :{
    width: '100%',
  }
}));
