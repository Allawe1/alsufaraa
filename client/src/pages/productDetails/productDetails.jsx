import {Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import product1 from "../../images/product1.jpg";
import { useMediaQuery } from 'react-responsive'
export function ProductDetails(props) {
  const classes = useStyles();
  var state = props.location.state;
  if(!state){
      state={}
  }
  const productGategoryName = [
    'Arabic',
    'Tanoor',
    'cake',
    'pastry'
  ]
  var selectedGatogary;
  
  if(state.productGategory=="6144e629e151f5246478a862"){
  selectedGatogary = productGategoryName[0]
  }else if(state.productGategory=="6144b6996840c728943b15d4")
  {
    selectedGatogary = productGategoryName[2]
  }else if(state.productGategory=="6144b6ac6840c728943b15d8")
  {
    selectedGatogary = productGategoryName[3]
  }else if(state.productGategory=="6144b6a36840c728943b15d6")
  {
    selectedGatogary = productGategoryName[1]
  }
  

  // const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  if (!isTabletOrMobile) {
    props.history.push( "/");
  }
  return (
    <div className={classes.main}>
      <Grid
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className={classes.productGrid}
      >
        <Grid item xs="auto">
          <img
            src={
              state.img !== ""
                ? `http://localhost:5000/images/${selectedGatogary}/${state.img}`
                : product1
            }
            alt="product"
            title={state.img}
            className={classes.media}
          />
       

          <Typography className={classes.productHeader}>{state.name}</Typography>
          <Divider variant="inset" className={classes.bigDivider} />
                  <Typography className={classes.ProductTitle}>
                    Description
                  </Typography>
                  <Typography className={classes.ProductInfo}>{state.description}</Typography>
                  <Divider
                    variant="inset"
                    className={classes.productSmallDivider}
                  />
                  <Typography className={classes.ProductTitle}>
                    Ingeridaints
                  </Typography>
                  <Typography className={classes.ProductInfo}>{state.ingredients}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
