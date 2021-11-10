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
import productList from '../../images/productList.jpg'
import gallery from '../../images/gallery.png'
import about from '../../images/about.jpg'
import contact from '../../images/contact.png'
function Home() {
  const classes = useStyles();
  const dispatch = useDispatch(); 
  useEffect(() => {
    localStorage.clear()
    dispatch(getBestSelling());
  }, [dispatch]);
 

  var bestSelling = useSelector((state) => state.bestSelling);

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
                    src={productList}
                    className={classes.image}
                    alt="Home"
                    title = 'Home'
                  />
                  <div className={classes.overlay}>Product</div>
                </Link>
              </Card>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <Card className={classes.cardMd}>
                <Link to="/gallery">
                  <img
                    src={gallery}
                    className={classes.image}
                    alt="Gallery"
                    title = 'Gallery'
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
                      src={about}
                      className={classes.image}
                      alt="About US"
                      title = 'About US'
                    />
                    <div className={classes.overlaySmall}>About us</div>
                  </Link>
                </Card>
              </div>
              <div style={{ paddingTop: 28 }}>
                <Card className={classes.card}>
                  <Link to="/contactUs">
                    <img
                      src={contact}
                      className={classes.image}
                      alt="Contact US"
                      title = 'Contact US'
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
