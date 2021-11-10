import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import product1 from "../../../images/product1.jpg";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 280,
  },
  text: {
    fontFamily: "Signika",
    fontSizer: "16px",
    color: "#30271c",
    fontWeight: "700",
  },
  card: {
    width: 280,
    minWidth: 200,
  },
  content: {
    backgroundColor: "#ADD8E6",
  },
  overlaySmall: {
    textAlign: "center",
    color: "#black",
    fontSize: "26px",
    fontFamily: "Signika",
    fontWeight: "600",
    paddingTop: "20px",
  },
  image: {
    padding: theme.spacing(1),
    margin: "auto",
    display: "display",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export function ProductCard(props) {
  const classes = useStyles();

  return (
    <div key = {props._id}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              props.img !== ""
                ? `https://alsufaraa-client-zmcto.ondigitalocean.app/alsufaraa/images/${props.img}`
                : product1
            }
            title={props.img}
            alt = {props.img}
          />
        </CardActionArea>
      </Card>
      <Typography className={classes.overlaySmall}>{props.name}</Typography>
    </div>
  );
}

export default Card;
