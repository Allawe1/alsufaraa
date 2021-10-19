import { Card, Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductGategorys } from "../../redux/actions/productGategory";
import product1 from '../../images/product1.jpg'
export function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear()
    dispatch(getProductGategorys());
  }, [dispatch]);
 
  var productGategorys = useSelector((state) => state.productGategorys);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // const [notes, setNotes] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const fetchData = () => {
  //   axios
  //     .get('http://localhost:5000/productGategorys')
  //     .then((response) => {
  //       setIsLoading(false);
  //       setNotes(response.data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setIsError(true);
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={classes.main}>
      <Typography variant="h2" className={classes.h2}>
        Welcome to our Products!
      </Typography>
      <Divider variant="inset" className={classes.bigDivider} />
      <Typography variant="h1" className={classes.h1}>
        Choose what you are looking for
      </Typography>
      <Divider variant="inset" className={classes.smallDivider} />

      <Grid container spacing={8} justifyContent="center" alignItems="center">
        {productGategorys.map((elem) => (
          <Grid item xs="auto" key={elem._id}>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/products",
                state: elem.name,
              }}
            >
              <Card className={classes.card}>
                <img
                title = {elem.img}
                  src={
                    elem.img !== ""
                      ? `https://alsufraa.herokuapp.com/images/${elem.img}`
                      : product1
                  }
                  className={ classes.media}
                  alt= {elem.img}
                />
              </Card>
              <Typography className={classes.overlaySmall}>
                {elem.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
