import React, { useEffect } from "react";
import "./Home.css";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { ProductCard } from "./Components/Card";
import { useStyles } from "./Styles";
import { Link } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getBestSelling } from "../../redux/actions/bestSelling";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch(); 
  useEffect(() => {
    localStorage.clear()
    dispatch(getBestSelling());
  }, [dispatch]);
  console.log( localStorage.getItem('state'));

  var bestSelling = useSelector((state) => state.bestSelling);
  console.log(bestSelling);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className={classes.main}>
      <div className={classes.home}>
        <Typography variant="h2" className={classes.h2}>
          Welcome to ALSUFARA!
        </Typography>
        <Divider variant="inset" className={classes.bigDivider} />
        <Typography variant="h1" className={classes.h1}>
          Choose what you looking for
        </Typography>
        <Divider variant="inset" className={classes.smallDivider} />
        <br />
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <Card className={classes.cardBig}>
                <Link to="/product">
                  <img
                    src="http://patisseriemaxime.co.uk/wp-content/uploads/2015/05/visit-our-patissierie.png"
                    className={classes.image}
                    alt="home"
                    title = 'home'
                  />
                  <div className={classes.overlay}>Product</div>
                </Link>
              </Card>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <Card className={classes.cardMd}>
                <Link to="/gallery">
                  <img
                    src="http://patisseriemaxime.co.uk/wp-content/uploads/2015/05/visit-our-patissierie.png"
                    className={classes.image}
                    alt="home"
                    title = 'home'
                  />
                  <div className={classes.overlay}>Gallery</div>
                </Link>
              </Card>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div>
                <Card className={classes.card}>
                  <Link to="/aboutUs">
                    <img
                      src="http://patisseriemaxime.co.uk/wp-content/uploads/2017/12/DSC07828-Edit-570x570.jpg"
                      className={classes.image}
                      alt="home"
                      title = 'home'
                    />
                    <div className={classes.overlaySmall}>About us</div>
                  </Link>
                </Card>
              </div>
              <div style={{ paddingTop: 28 }}>
                <Card className={classes.card}>
                  <Link to="/contactUs">
                    <img
                      src="http://patisseriemaxime.co.uk/wp-content/uploads/2015/05/about-us.png"
                      className={classes.image}
                      alt="home"
                      title = 'home'
                    />
                    <div className={classes.overlaySmall}>Contact Us</div>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.Home2}>
        <Typography variant="h1" className={classes.h1}>
          Our Best Selling Product
        </Typography>
        <Divider variant="inset" className={classes.smallDivider} />
        <br />
        <br />
        <Grid
          container
          spacing={2}
          className={classes.productGrid}
          justifyContent="center"
          alignItems="center"
        >
          {bestSelling.map((elem) => (
            <Grid item xs="auto" key={elem._id}>
              <ProductCard img={elem.img} name={elem.name}></ProductCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
